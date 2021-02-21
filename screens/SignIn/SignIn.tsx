import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextInput, Button } from 'react-native';
import { Text, View } from '../../components/Themed';
import { styles } from './SignIn.style';
import { actionAuthenticate } from '../../actions/ActionAuthenticate';
import { AppDispatch } from '../../redux';

const SignIn = ({ authenticate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event: Event) => {
    event.preventDefault();
    authenticate(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <TextInput
        onChangeText={email => setPassword(email)}
        value={password}
      />
      <Button
        onPress={onSubmit}
        title="Login"
        accessibilityLabel="Login"
      />
    </View>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  authenticate: (email: String, password: String) => {
    actionAuthenticate(dispatch, email, password);
  },
});

export default connect(undefined, mapDispatchToProps)(SignIn);
