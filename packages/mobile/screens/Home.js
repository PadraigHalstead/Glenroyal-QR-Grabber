export const Home = () => {

    [qr, setQR] = useState<string>("");
    [err, setErr] = useState<string>("");
  
    useEffect = () => {
        const options = ""
      
    }
    
    const get = () => {
        const getQR = async () => {
            
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(timestamp)
            }
        
        

            //Check QR, and timestamp
            //if 200 
            //timestamp is today and qr is valid, respond 200 and show qr
            //else  400
            // Get error message. Set err text,
            //data 
          }
    }
  
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