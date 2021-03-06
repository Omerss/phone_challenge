import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChanged(text){
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={ styles.errorTextStyle }>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        console.log(`rendering button - ${this.props.loading}`);
        if (this.props.loading) {
            return <Spinner size="large" />;
        }else{
            return(
                <Button onPress={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            )
        }
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
};

const mapStateToProp = state => {
    console.log(state.auth);
    const { email, password, error, loading } = state.auth;

    return {email, password, error, loading };
};

export default connect(mapStateToProp, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);