import { View, Text, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { Loading } from '../components/Loading';
import { StatusBar } from 'expo-status-bar';

export const Confirmation = ({ navigation, route }) => {
  const [isValidQR, setIsValidQR] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    validateQR();
    setIsLoading(false);
  }, []);

  const validateQR = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(route.params.data),
    };

    try {
      const res = fetch('http://localhost:8080/api/qr', options);
      if ((await res).status == 200) {
        setIsValidQR(true);
      }
    } catch (err) {
      setIsValidQR(false);
    }
  };

  const navigateToHomePage = () => {
    navigation.replace('Home');
  };

  const InvalidQR = () => {
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Text style={styles.heading4}>
              Invalid QR. Please scan a valid QR
            </Text>
            <Text />

            <Pressable style={styles.button} onPress={navigateToHomePage}>
              <Text style={styles.text}>Okay</Text>
            </Pressable>
          </>
        )}
      </View>
    );
  };

  const ValidQR = () => {
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          <View>
            <Text style={styles.heading4}>QR Updated</Text>
            <Text />

            <Pressable style={styles.button} onPress={navigateToHomePage}>
              <Text style={styles.text}>Okay</Text>
            </Pressable>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isValidQR ? <ValidQR /> : <InvalidQR />}
    </View>
  );
};
