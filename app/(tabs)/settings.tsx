import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, StyleSheet } from 'react-native';


import BlueButton from '@/components/BlueButton';


const SettingsScreen = () => {
   return (
      <ParallaxScrollView
         headerBackgroundColor={{ light: '#808080', dark: '#353636' }}
         headerImage={
            <ThemedView style={styles.container}>
               <ThemedText type="title" style={headerstyle.settings} >Settings</ThemedText>
            </ThemedView>
         }
      >
         <Collapsible title="Settings">
            <ThemedText>
               This is the settings screen. You can customize your app settings here.
            </ThemedText>
         </Collapsible>
         <Collapsible title="About">
            <ThemedText>
               This app is built with Expo and React Native. Explore the code to learn more!
            </ThemedText>
         </Collapsible>

         <ThemedView style={styles.container}>
            <ThemedText type="subtitle">Welcome to Settings</ThemedText>
            <ThemedText>
               Here you can adjust your preferences, manage your account, and more.
            </ThemedText>
         </ThemedView>


         <View>
            <BlueButton/>
         </View>

      </ParallaxScrollView>
   );
}
export default SettingsScreen;


const styles = StyleSheet.create({
   container: {
      flexGrow: 1,
      padding: 16,
      backgroundColor: '#808080',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
   },
});

const headerstyle = StyleSheet.create({
   settings: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
      marginVertical: 16,
   },
});
