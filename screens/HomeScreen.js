import React from 'react'
import { StyleSheet, View, TouchableHighlight, FlatList, Text } from 'react-native'
import { Button } from 'react-native-elements';
import Fragment from '../controllers/Fragment';


export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }
        
    addMovie = (movie) => {
        this.setState(prevState => ({
            movies: [...prevState.movies, movie]
        }))
    }

    keyExtractor = (item, index) => index.toString()

    movieDetails = (movie) => {
        this.props.navigation.navigate('DetailsFilm', {
            movie: movie
        })
    }

    renderItem = ({ item }) => (
        <Fragment movie={item} movieDetails={() => this.movieDetails(item)} />
    )

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerCenter}>
                <Text style={styles.title}>Watchlist</Text>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.movies}
                    renderItem={this.renderItem}
                />
                <TouchableHighlight style={styles.addButton}>
                    <View>
                        <Button title='+'
                            titleStyle={{
                                color: "white",
                                fontSize: 30,
                            }}
                            onPress={() => this.props.navigation.navigate('AddMovie', {
                                addMovie: movie => this.addMovie(movie)
                            })}
                            buttonStyle={styles.button} />
                    </View>
                </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        backgroundColor: 'black', 
    },
    containerCenter: {
        flex: 1,
        color: 'white',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',  
    },
    logout:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    addButton: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    button: {
        backgroundColor: 'red',
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    title:{
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 0,
        fontWeight: 'bold',
        fontSize: 30,
        color:'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
