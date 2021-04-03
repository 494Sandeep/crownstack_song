import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

const SongDetailsScreen = ({ route }) => {
    const { params: { data } } = route

    return (
        <View style={{ flex: 1 }}>
            <Image style={styles.img} source={{ uri: data.artworkUrl100 }} />
            <View style={{ flex: 1, padding: 10 }}>
                <Text>{data.artistName}</Text>
                <Text>{data.collectionCensoredName}</Text>
                <Text>$ {data.collectionPrice}</Text>
            </View>
        </View>
    )
}

export default SongDetailsScreen;

const styles = StyleSheet.create({
    img: {
        height: 200
    },
})
