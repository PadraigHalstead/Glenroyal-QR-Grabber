import QRCode from 'react-qr-code';
import React, { useEffect, useState } from 'react';
import { View, Pressable, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles';

export const Home = ({ navigation }) => {
  [qr, setQR] = useState('');

  useEffect(() => {
    get();
  }, []);

  const get = () => {
    const getQR = async () => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      try {
        const data = await fetch('http://localhost:8080/api/qr', options);
        if (data.status === 200) {
          setQR(data.qr);
        } else {
          setQR('');
        }
      } catch (err) {
        setQR('');
      }
    };
    getQR();
  };

  return (
    <View style={styles.container}>
      {qr.length > 0 ? (
        <QRCode value={qr} />
      ) : (
        <>
          <Text style={styles.heading4}>QR Expired. Please scan a new QR</Text>
          <Text />
        </>
      )}

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.replace('Scan');
        }}
      >
        <Text style={styles.text}>Scan QR</Text>
      </Pressable>
    </View>
  );
};
