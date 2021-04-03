import React, { Component } from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, View, Text } from 'react-native'

export class LoadingScreen extends Component {
    render() {
        return (
            <View style={styles.alignCenter}>
                <ActivityIndicator size="large" color="blue" />
                <Text>Please wait...</Text>
            </View>
        )
    }
}

export default LoadingScreen

const styles = StyleSheet.create({
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
