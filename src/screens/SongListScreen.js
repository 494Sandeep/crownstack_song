import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SongListItem } from '../components/SongListItem'
import LoadingScreen from './LoadingScreen'

const SongListScreen = () => {

    const [songList, setSongList] = useState([])

    useEffect(() => {
        fetch('https://itunes.apple.com/search?term=Michael+jackson')
            .then(response => response.json())
            .then(res => setSongList(res.results))
            .catch(err => console.log('err :', err))
    }, [])

    return (
        <SafeAreaView style={{ backgroundColor: '#DFE0DC', flex: 1 }}>
            {songList.length == 0
                ? <LoadingScreen />
                : <FlatList
                    data={songList}
                    renderItem={({ item, index }) => <SongListItem data={item} key={index} />}
                    keyExtractor={(item, index) => index}
                />
            }
        </SafeAreaView>
    )
}

export default SongListScreen
