import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export const SongListItem = ({ data }) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback style={styles.container} onPress={() => navigation.navigate('SongDetailsScreen', { data })}>
            <Image style={styles.tinyLogo} source={{ uri: data.artworkUrl100 }} />
            <View style={styles.descriptionBlock}>
                <Text>{data.collectionName}</Text>
                <Text style={{ fontStyle: 'italic', fontWeight: '600', fontSize: 12 }}>Artist Name : {data.artistName} </Text>
                <Text>$ {data.collectionPrice}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#fff',
        height: 120
    },
    tinyLogo: {
        borderRadius: 10,
        flex: 1,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    descriptionBlock: {
        flex: 2,
        padding: 10
    }
})
