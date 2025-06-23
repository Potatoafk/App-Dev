import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemedView } from "./ThemedView";



const BlueButton = () => {
   return (
      <>
         <View style={styles.button}>
            <Text> A Button </Text>
         </View>

         <ThemedView style={styles.themedButton}>
            <Text>Click Me</Text>
         </ThemedView>
      </>
   );
}

export default BlueButton;

const styles = StyleSheet.create({
   button: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
   },
   buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
   },

   themedButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
   },
});
