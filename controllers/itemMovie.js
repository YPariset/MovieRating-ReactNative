import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import {getImageFromApi} from '../API/TMDBApi'

class ItemMovie extends React.Component {
  render() {
        const {film, displayDetailForFilm } = this.props //2
        return (
            <TouchableOpacity 
              style={styles.main_container}
              onPress={() => displayDetailForFilm(film.id)}>

              <Image
                  style={styles.image}
                  source={{uri: getImageFromApi(film.poster_path)}}
              />
              <View style={styles.content_container}>
                  <View style={styles.header_container}>
                  <Text style={styles.title_text}>{film.title}</Text> 
                  <Text style={styles.review_text}>{film.vote_average}</Text>
                  </View>
                  <View style={styles.storyline_container}>
                  <Text style={styles.storyline_text} numberOfLines={6}>{film.overview}</Text>
                  </View>
                  <View style={styles.date_container}>
                  <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
                  </View>
              </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  review_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  storyline_container: {
    color: 'white',
    flex: 7
  },
  storyline_text: {
    color: 'white',
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    color: 'white',
    flex: 1
  },
  date_text: {
    color: 'white',
    textAlign: 'right',
    fontSize: 14
  }
})

export default ItemMovie