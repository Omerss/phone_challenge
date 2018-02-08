import React, {Component} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

class ChallengeScreen extends Component {

    render() {
        const { userScore } = 5000;
        return(
            <View style={{flex: 1}}>
                <Text style={styles.scoreTitleStyle}>
                    Score
                </Text>
                <Text style={styles.scoreStyle}>
                    5000
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scoreTitleStyle: {
        flex: 1,
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    scoreStyle: {
        flex: 1,
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
});

export default ChallengeScreen;
