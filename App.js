
import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput, 
  View 
} from 'react-native';

export default function App() {

  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState([])

  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    setLembretes(lembretes => {
      const aux = [lembrete, ...lembretes]
      console.log(aux)
      setLembrete('')
      return aux
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.entradaView}>
        {/* entrada de dados */}
        <TextInput 
          placeholder='Lembrar...'
          style={styles.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button 
          title='ok'
          onPress={adicionarLembrete}
        />
      </View>

      <View style={styles.lembretesView}>
        {/* exibição da lista de lembretes */}
        {/* [ir ao cinema, fazer café] => [<View><Text>ir ao cinema</Text></View>, <View><Text>fazer café</Text>]</View> */}
        {
          lembretes.map(lembrete => <View style={styles.itemNaLista}><Text>{lembrete}</Text></View>)
        }
      </View>

    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    width: '100%',
    alignItems: 'center'
  },
  lembreteTextInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 12,
    textAlign: 'center'

  },
  entradaView: {
    width: '80%',
    marginBottom: 4
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    textAlign: 'center'
  },
  lembretesView: {
    width: '80%'
  }
})