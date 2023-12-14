import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import QRCode from 'your-react-native-qr-code-library';
//Import React native router


const App = () => {

  [qr, setQR] = useState<string>("");
  [err, setErr] = useState<string>("");

  useEffect = () => {
    const getQR = async () => {

      //Check QR, and timestamp
      //if 200 
      //timestamp is today and qr is valid, respond 200 and show qr
      //else  400
      // Get error message. Set err text,

      //data 
    }
  }

  // Add a function to handle QR code scanning
  const handleScanQR = () => {
    //
    //
    //
    // Logic to scan QR code
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Glenroyal QR Grabber</Text>
      </View>
      <Button title="Scan New QR" onPress={handleScanQR} />
      {/* <QRCode value="https://example.com" /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    backgroundColor: 'lightblue',
    width: '100%',
    alignItems: 'center',
    padding: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;