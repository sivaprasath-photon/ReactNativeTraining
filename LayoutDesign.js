import React from "react";
import { StyleSheet, View } from "react-native";

export default class LayoutDesign extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>

            <View style={styles.header}/>

            <View style={styles.headerBelow}/>

            <View style={styles.grid}>
                <View style={{flex: 1,flexGrow: 1,margin: 0.5, backgroundColor: 'blue',width: 100,height:100}} />
                <View style={{flex: 2,flexGrow: 1,margin: 0.5, backgroundColor: 'blue',width: 100,height:100}} />
                <View style={{flex: 3,flexGrow: 1,margin: 0.5, backgroundColor: 'blue',width: 100,height:100}} />
            </View>
            <View style={styles.grid}>
                <View style={{flex: 1,flexGrow: 1,margin: 0.5, backgroundColor: 'blue',width: 100,height:100}} />
                <View style={{flex: 2,flexGrow: 1,margin: 0.5, backgroundColor: 'blue',width: 100,height:100}} />
                <View style={{flex: 3,flexGrow: 1,margin: 0.5, backgroundColor: 'blue',width: 100,height:100}} />
            </View>
            <View style={styles.grid}>
                <View style={{flex: 1,flexGrow: 1,margin: 0.5, backgroundColor: 'blue',width: 100,height:100}} />
                <View style={{flex: 2,flexGrow: 1,margin: 0.5, backgroundColor: 'blue',width: 100,height:100}} />
                <View style={{flex: 3,flexGrow: 1,margin: 0.5, backgroundColor: 'blue',width: 100,height:100}} />
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "column"
    },
    header: {
        height: 125,
        backgroundColor: "red"
    },
    headerBelow: {
        height: 125,
        backgroundColor: "green"
    },
    grid: {
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    gridContainer: {
        flex: 2,
        flexDirection: "row",
        flexGrow:1
    },
    gridMain: {
        flexGrow: 2,
        flexDirection: "column",
        backgroundColor: 'white'
    },
});