import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Button, AirbnbRating } from 'react-native-elements';
import { theme } from '../core/theme';


export default class AddMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            storyline: '',
            review: '',
            rating: 3,
            link: '',
            isValid: false
        };
    }

    handleNameChange = name => {
        this.setState({ name: name }, this.validForm)
    }

    handleStorylineChange = storyline => {
        this.setState({ storyline: storyline }, this.validForm)
    }

    handleReviewChange = review => {
        this.setState({ review: review }, this.validForm)
    }

    handleRatingChange = rating => {
        this.setState({ rating: rating }, this.validForm)
        
    }

    handleLinkChange = link => {
        this.setState({ link: link }, this.validForm)
    }

    handleSubmit = () => {
        this.props.route.params.addMovie(this.state)
        this.props.navigation.goBack()
    }

    validForm = () => {
        if (this.state.name.length > 1) {
            this.setState({ isValid: true })
        } else {
            this.setState({ isValid: false })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Name" value={this.state.name} onChangeText={this.handleNameChange} style={styles.input} />
                <TextInput placeholder="Storyline" value={this.state.storyline} onChangeText={this.handleStorylineChange} style={styles.input} />
                <TextInput placeholder="User reviews" value={this.state.review} onChangeText={this.handleReviewChange} style={styles.input} />
                <AirbnbRating
                    count={5}
                    reviews={["Terrible", "Bad", "OK", "Good", "Amazing"]}
                    defaultRating={3}
                    onFinishRating={this.handleRatingChange}
                />
                <TextInput placeholder="IMDB url" value={this.state.link} onChangeText={this.handleLinkChange} style={styles.input} />
                <Button title='Add to Watchlist' buttonStyle={{backgroundColor: theme.colors.primary}} onPress={ () => this.handleSubmit()} disabled={!this.state.isValid} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        color: 'white',
        width: 300,
        padding: 10,
        margin: 20,
        borderBottomColor: "white",
        borderBottomWidth: 1,
        outlineStyle: 'none'
    }
})
