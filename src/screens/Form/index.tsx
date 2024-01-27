import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import batLogo from '../../../assets/img/logo.png';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';

export default function FormScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');
  const [erroMensagem, setErroMensagem] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (validarFormulario()) {
      console.log({ nome, email, telefone, mensagem });
      // Exibe o Toast
      Toast.show({
        type: 'success',
        text1: 'Formulário enviado!',
        text2: 'Sua mensagem foi enviada com sucesso.',
        onHide: () => {
          // Navega para a página inicial depois que o Toast desaparecer
          navigation.navigate('Home');
        },
      });
    }
  };

  const validarFormulario = () => {
    let erro = false;
    setErroNome('');
    setErroEmail('');
    setErroTelefone('');
    setErroMensagem('');

    if (!nome) {
      setErroNome('Por favor, insira o seu nome.');
      erro = true;
    }

    if (!email) {
      setErroEmail('Por favor, insira o seu email.');
      erro = true;
    } else if (!email.includes('@')) {
      setErroEmail('Por favor, insira um email válido.');
      erro = true;
    }

    if (!telefone) {
      setErroTelefone('Por favor, insira o seu telefone.');
      erro = true;
    }

    if (!mensagem) {
      setErroMensagem('Por favor, descreva a emergência.');
      erro = true;
    }

    return !erro;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={batLogo}
          style={[{ height: wp(20), width: hp(20) }, { marginBottom: 10 }]}
        />
      </TouchableOpacity>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
      {!!erroNome && <Text style={styles.erroTexto}>{erroNome}</Text>}

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      {!!erroEmail && <Text style={styles.erroTexto}>{erroEmail}</Text>}

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Digite seu telefone"
        keyboardType="phone-pad"
      />
      {!!erroTelefone && <Text style={styles.erroTexto}>{erroTelefone}</Text>}

      <Text style={styles.label}>Qual a emergência?</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={mensagem}
        onChangeText={setMensagem}
        placeholder="Descreva a emergência"
        multiline
        numberOfLines={4}
      />
      {!!erroMensagem && <Text style={styles.erroTexto}>{erroMensagem}</Text>}

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}
