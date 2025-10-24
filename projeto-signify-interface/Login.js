import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      senhaVisivel: false,
      emailFocado: false,
      senhaFocada: false,
    };
  }

  clicou = (msg) => {
    Alert.alert(msg);
  }

  alternarVisibilidade = () => {
    this.setState({ senhaVisivel: !this.state.senhaVisivel });
  };

  render() {
    const { senhaVisivel, emailFocado, senhaFocada } = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/user.jpeg')}
          style={styles.user}
        />

        <TextInput
          style={[
            styles.input,
            emailFocado && styles.inputFocado
          ]}
          placeholder="Email"
          placeholderTextColor="#000"
          underlineColorAndroid="transparent"
          onFocus={() => this.setState({ emailFocado: true })}
          onBlur={() => this.setState({ emailFocado: false })}
        />

        <View style={[
          styles.senhaContainer,
          senhaFocada && styles.inputFocado
        ]}>
          <TextInput
            style={styles.inputSenha}
            secureTextEntry={!senhaVisivel}
            placeholder="Senha"
            placeholderTextColor="#000"
            underlineColorAndroid="transparent"
            onFocus={() => this.setState({ senhaFocada: true })}
            onBlur={() => this.setState({ senhaFocada: false })}
          />
          <TouchableOpacity onPress={this.alternarVisibilidade}>
            <Ionicons
              name={senhaVisivel ? 'eye' : 'eye-off'}
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={() => this.clicou('Login realizado')}
        >
          <Text style={styles.botaoEntrarText}> Entrar </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCadastrar}
          onPress={() => this.clicou('Cadastro')}
        >
          <Text style={styles.botaoCadastrarText}> Cadastrar-se </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.clicou('Redefinir senha')}
        >
          <Text style={styles.linkSenha}> Esqueci minha senha... </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 90,
  },
  user: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 40,
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: '70%',
    backgroundColor: '#fff',
    fontSize: 16,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
  },
  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginTop: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputSenha: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    borderWidth: 0,
    outlineStyle: 'none',
  },
  inputFocado: {
    borderColor: '#f4a33a',
    borderWidth: 2,
  },
  botaoEntrar: {
    width: '35%',
    height: 45,
    backgroundColor: '#efa43a',
    marginTop: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCadastrar: {
    width: '40%',
    height: 45,
    borderWidth: 2,
    borderColor: '#f4a33a',
    marginTop: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoEntrarText: {
    fontSize: 16,
    color: '#000',
  },
  botaoCadastrarText: {
    fontSize: 16,
    color: '#f4a33a',
  },
  linkSenha: {
    marginTop: 10,
    color: '#f4a33a',
    fontSize: 14,
    textDecorationLine: 'underline',
  }
});