import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Switch,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './signUpStyle';
import { navigateToNestedRoute } from '../../navigators/RootNavigation';
import { getScreenParent } from '../../utils/NavigationHelper';
import appTheme from '../../constants/colors';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully");
      console.log(response)
      handleNavigation('Login');
    } catch (error) {
      console.log(error);
      alert('Sign Up Failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => handleBackButton()}>
          <MaterialIcons name="keyboard-arrow-left" size={25} color="gray" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContent}>
        <Text style={styles.largeText}>Create an Account</Text>
        <Text style={styles.smallText}>
          Sign up for a new account &amp; get started
        </Text>
        <View style={styles.inputRow}>
          <MaterialCommunityIcons name="email-outline" size={20} color="gray" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="gray"
            style={styles.textInput}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputRow}>
          <MaterialIcons name="lock-outline" size={20} color="gray" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={text => setPassword(text)}
          />
          <Octicons name="eye-closed" size={20} color="gray" />
        </View>
        <View style={styles.savePwdRow}>
          <Text style={styles.savePwdText}>Save Password</Text>
          <Switch
            trackColor={{ false: appTheme.INACTIVE_COLOR, true: appTheme.COLOR2 }}
            thumbColor="#fff"
            value={true}
          />
        </View>
        <TouchableOpacity
          style={styles.signUpBtnWrapper}
          onPress={signUp}>
          <Text style={styles.signUpBtnText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtnWrapper}
          onPress={() => handleNavigation('Login')}>
          <Text style={styles.loginBtnText}>
            Already have an account? LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
