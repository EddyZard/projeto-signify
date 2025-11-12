import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';


export default function App() {
  const [fontsLoaded] = useFonts({
  Abril: require('./assets/fontes/AbrilFatface-Regular.ttf'),
});

if (!fontsLoaded) {
  return null; // evita piscar sem a fonte carregada
}

  return (
    <View style={styles.container}>
        <Image 
          source={require('./assets/signify.jpeg')}
          style={styles.icon}
        />
<View style={{ height: 90, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={styles.titleStroke}>Signify</Text>
  <Text style={styles.title}>Signify</Text>
</View>

<View style={{ marginBottom: 40 }}>
  <Text style={styles.subtitleStroke}>Seu tradutor de Libras!</Text>
  <Text style={styles.subtitle}>Seu tradutor de Libras!</Text>
</View>



      {/* Botões */}
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonTextPrimary}>Fazer Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonTextSecondary}>Cadastrar-se</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 90,
  },

  icon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 40,
  },

title: {
  fontSize: 34,
  fontFamily: 'Abril',
  color: '#91F5AD',
  fontWeight: '700',
  position: 'absolute',
},
titleStroke: {
  fontSize: 34,
  fontFamily: 'Abril',
  color: '#57c475',
  fontWeight: '700',
  position: 'absolute',
  transform: [{ translateX: 1.5 }, { translateY: 1.5 }],
},

subtitle: {
  fontSize: 20,
  fontFamily: 'Abril',
  color: '#91F5AD',
  textAlign: 'center',
  fontWeight: '700',
},

subtitleStroke: {
  fontSize: 20,
  fontFamily: 'Abril',
  color: '#52b66fff', 
  textAlign: 'center',
  fontWeight: '700',
  position: 'absolute',
  transform: [{ translateX: 1 }, { translateY: 1 }],
  opacity: 50.5
},

  buttonPrimary: {
    backgroundColor: '#91F5AD',
    width: '55%',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#91F5AD'
  },
  buttonSecondary: {
    width: '40%',
    borderWidth: 2,
    borderColor: '#91F5AD',
    width: '55%',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonTextPrimary: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
}); 
