import React from 'react'
import {StyleSheet, View, TextInput, FlatList, ActivityIndicator} from 'react-native'
import { Button } from 'react-native-elements';
import FilmItem from './itemMovie'
import { theme } from '../core/theme';
import {getMovieBySearch} from '../API/TMDBApi'

class Search extends React.Component{
    
    constructor(props){
        super(props)
        this.page = 0
        this.totalPages = 0
        this.state = {
            movies: [],
            isLoading: false
        }
        this.searchedText= ""
    }
    loadMovies(){
        if (this.searchedText.length > 0){
            this.setState({isLoading: true})
            getMovieBySearch(this.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({ 
                    movies: [...this.state.movies, ...data.results ],
                    isLoading: false
                })
            }) 
        }  
    }

    displayLoading(){
        if (this.state.isLoading){
            return(
                <View style={styles.loading}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    }
    searchTextChanged(text){
        this.searchedText= text
    }
    searchMovies(){
        this.page = 0
        this.totalPages = 0
        this.setState({
            movies: []
        }, ()=> {
            this.loadMovies()
        })
        
    }

    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                    onChangeText={(text)=> this.searchTextChanged(text)}
                    onSubmitEditing={()  => this.searchMovies()} 
                    style={styles.input}
                    placeholder="Search IMDb"
                />
                <Button 
                    title="Search" 
                    buttonStyle={{backgroundColor: theme.colors.primary}}
                    onPress={() => this.searchMovies()}>
                </Button>

                <FlatList
                    data={this.state.movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this.displayDetails} />}
                    onEndReachedThreshold= {0.5}
                    onEndReached={() => {
                        if (this.page < this.totalPages){
                            this.loadMovies()
                        }
                    }}
                />
                {this.displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
      },
    input: {
        color: 'white',
        width: 300,
        padding: 10,
        margin: 20,
        borderBottomColor: "white",
        borderBottomWidth: 1
    },
    loading: {
        position: 'absolute',
        left:0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
  })
export default Search