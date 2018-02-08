import React, {Component} from 'react';
import firebase from 'firebase';

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Card, CardSection, Input, Button, Badge } from './common';

class ProfileScreen extends Component {
    state = { badges: '' }; // The default list of badges we start with


    componentWillMount() {
        const storage = firebase.storage();
        const storageRef = storage.ref();
        storageRef.child('Images/8-side.jpg').getDownloadURL().then( image => {
            console.log(image);
            this.setState({badges: image});
        }).catch( error => {});


    }

    // renderRows(){
    //     return this.state.albums.map(album =>
    //         <AlbumDetail key={album.title} album={album} />);
    // }

    renderSingleRow() {
        return (
            <View style={styles.badgeRowStyle}>

                <Badge imageSource={this.state.badges}
                       onPress={()=>{}}> Badge 1 </Badge>
                <Badge imageSource='https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg'
                       onPress={()=>{}}> Badge 2 </Badge>
                <Badge imageSource='https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg'
                       onPress={()=>{}}> Badge 3 </Badge>
            </View>
        )
    }

    render() {
        const { userScore } = 5000;
        return(
            <ScrollView>
                <Text style={styles.scoreTitleStyle}>
                    Score
                </Text>
                <Text style={styles.scoreStyle}>
                    5000
                </Text>
                <Text style={styles.scoreTitleStyle}>
                    Badges
                </Text>
                <View style={{flex: 4}}>
                    {this.renderSingleRow()}
                </View>
            </ScrollView>
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
        textAlignVertical:'center',

    },
    scoreStyle: {
        flex: 1,
        fontSize: 35,
        textAlign: 'center',
        margin: 0,
        textAlignVertical:'center',
    },
    badgeRowStyle:{
        flexDirection : 'row',
        justifyContent: 'space-between'
    },
});

export default ProfileScreen;
