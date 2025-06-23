import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, View } from 'react-native';



const MoreScreen = () => {
   return (
      <View style={styles.container}>
         <ThemedText type="title" style={styles.text} >More</ThemedText>
         <ThemedText style={styles.text}>
            This is the more screen. You can add additional features or information here.
         </ThemedText>
      </View>
   );
}

export default MoreScreen;



const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
   },

   text: {
      fontSize: 18,
      color: '#333',
      marginBottom: 10,
   },
});
