'use client';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from 'expo-router';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { login } from '../api/auth';
import api from '../api/ApiServer';
import LocalStorageService from '../services/LocalStorageServices';
import GlobalBackground from '@/app/_components/GlobalBackground';
import { UserProfileIcon, PasswordIcon } from '../_components/Icons';
import styles from './LoginStyles';

const isNotEmpty = (obj) => obj && Object.keys(obj).length;

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Toast.show({ type: 'error', text1: 'Enter username and password' });
      return;
    }

    try {
      setLoading(true);
      const { data: userData } = await login(username, password);

      if (userData.status === 'error' || userData.status === 'pending') {
        Toast.show({ type: 'error', text1: 'Invalid credentials' });
        return;
      }

      await LocalStorageService.setUserInfo(userData);
      if (userData.access_token && isNotEmpty(userData.user)) {
        const licRes = await api.get('api/findall');
        const licenseData = licRes.data.data[0];

        LocalStorageService.setHospitalLimit(licenseData.hospitalLimit);
        LocalStorageService.setLicenseStatus(
          new Date(licenseData.licenseTo) > new Date()
        );
        LocalStorageService.setLicense(licRes.data.data);

        const privilegeRes = await api.get(
          `api/roles/${userData.user.roleId}/privileges`
        );
        LocalStorageService.setPrivilege(privilegeRes.data.data);
        LocalStorageService.setHospitalId(userData.user.hospital.hospitalId);

        Toast.show({ type: 'success', text1: 'Login successful' });
        navigation.navigate('home');
      }
    } catch (err) {
      console.error('Login failed', err);
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: 'Invalid username or password',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlobalBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo-design-1 1.png')}
            style={styles.image}
          />
        </View>

        <Text style={styles.loginText}>Enter your login information</Text>

        {/* Username Input with Icon */}
        <View style={styles.UserNameInput}>
          <UserProfileIcon style={styles.UserNameIcon} />
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            placeholderTextColor="#7c7c7c"
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            textContentType="none"
            importantForAutofill="no"
          />
        </View>

        {/* Password Input with Icon */}
        <View style={styles.PasswordInput} pointerEvents="box-none">
          <PasswordIcon style={styles.UserNameIcon} />
          <View style={styles.passwordFieldWrapper}>
            <TextInput
              placeholder="Password"
              style={[styles.input, { paddingRight: 40 }]}
              placeholderTextColor="#7C7C7C"
              secureTextEntry={!passwordVisible}
              onChangeText={setPassword}
              value={password}
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
              textContentType="none"
              importantForAutofill="no"
            />
            <TouchableOpacity
              activeOpacity={1}
              android_ripple={null}
              hasTVPreferredFocus={false}
              styles={styles.eyeIconWrapper}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Icon
                name={passwordVisible ? 'eye-off' : 'eye'}
                size={20}
                color="#7C7C7C"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </GlobalBackground>
  );
};

export default LoginScreen;
