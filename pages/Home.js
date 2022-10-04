import logoIfal from '../assets/logo.png'
import { SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, Pressable } from 'react-native';

export function Home({ navigation }) {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('Profile')}>
    <SafeAreaView>
      <Image source={logoIfal} style={styles.logo} />
      <Text style={styles.instruction}>Clique na tela para continuar...</Text>
    </SafeAreaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  instruction: {
    fontSize: 16,
    color: '#888',
    fontWeight: '500',
    textAlign: 'center',
    position: 'absolute',
    bottom: -260,
    right: 0,
    left: 0
  },
});
