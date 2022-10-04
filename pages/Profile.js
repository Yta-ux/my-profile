import myPhoto from '../assets/my_photo.jpg'
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
export function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => console.log('Opa')} >
      <Image source={myPhoto} style={styles.picture} />
      </Pressable>
      <View style={{ marginTop: 35 }} >
        <Text style={styles.information}>Ítalo Gustavo de Melo Rodrigues</Text>
        <Text style={styles.information}>2019321767</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 300, height: 300, borderWidth: 8, borderColor: 'black', borderRadius: 180
  },
  information: {
    fontSize: 18, 
    backgroundColor: '#f7f7f7f7', 
    padding: 15, 
    borderRadius: 8, 
    marginVertical: 8, 
    textAlign: 'center',
    fontWeight: '500'
  }
});
