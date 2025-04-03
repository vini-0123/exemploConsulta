import { Text, TextInput, Button, View, ScrollView } from 'react-native';
//comando para salvar os dados dentro de uma variavel
import { useState } from 'react';
import mascara from '../css/estilo';
import conexao from '../factory/conexao';

export default function Telalogin({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [tel, setTel] = useState('');

  function Abrirtelamenu() {
    if (cxnome === 'admin' && password === '1234') {
      navigation.navigate('Home');
    } else {
      alert('Nome de usuário ou senha incorretos');
    }
  }

  function CadastrarPessoa() {
    conexao.collection('tbpessoa').add({
      nome: nome,
      email: email,
      idade: idade,
      telefone: tel,
    });
    setNome('');
    setEmail('');
    setIdade('');
    setTel('');
    alert('Dados cadastrados com sucesso!');
  }

  return (
    <View style={mascara.container}>
      <ScrollView style={mascara.container} vertical>
        <Text style={mascara.title}>Exemplo Consulta</Text>
        <TextInput
          style={mascara.input}
          placeholder="Pesquisa"
          secureTextEntry
        />
        <Button title="Pesquisar" />
        <TextInput
          style={mascara.input2}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome do usuário"
          autoCapitalize="none"
        />
        <TextInput
          style={mascara.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite a email"
        />
        <TextInput
          style={mascara.input}
          value={idade}
          onChangeText={setIdade}
          placeholder="Digite a idade"
          autoCapitalize="none"
        />
        <TextInput
          style={mascara.input}
          value={tel}
          onChangeText={setTel}
          placeholder="Digite o telefone"
        />
        <Button title="Cadastrar" onPress={CadastrarPessoa} />
      </ScrollView>
    </View>
  );
}
