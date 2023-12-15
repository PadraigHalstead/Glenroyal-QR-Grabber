import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading3: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      heading4: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      input: {
        borderColor: '#A9A9A9',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 20,
        alignSelf: 'stretch',
        fontSize: 10,
      },
      error: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
      },
  });