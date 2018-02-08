import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';

const Badge = ({ onPress, imageSource, children }) => {
    const { containerStyle, textStyle, imageStyle } = styles;

    return (
        <View >
            <TouchableWithoutFeedback onPress={onPress} >
                <Image source={{uri: imageSource}}
                       style={containerStyle}/>
            </TouchableWithoutFeedback>
            <Text style={textStyle}>
                {children}
            </Text>
        </View>

    );
};

const styles = {
    imageStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10,
    },
    containerStyle: {
        width: 100,
        height: 100
    }
};

export { Badge };
