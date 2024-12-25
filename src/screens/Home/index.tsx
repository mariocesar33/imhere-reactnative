import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>(['Mário César', 'Marcos Wayne', 'Marco Pablo', 'Márcia Paloma']);
  const [participantName, setParticipantName] = useState('');

  function handleAddParticipant() {
    if (!participantName) {
      return Alert.alert('Campo obrigatório', 'Por favor, preencha o nome do participante.');
    }
    
    if (participants.includes(participantName)) {
      return Alert.alert('Participante já adicionado', `${participantName} já foi adicionado a lista de presença.`);
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      'Remover participante', 
      `Deseja remover o participante ${name} da lista de presença?`,
      [
        {
          text: 'Sim',
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
        },
        {
          text: 'Não',
          style: 'cancel',
        }
      ],
    );    
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.evevtName}>
        Ceia de natal
      </Text>

      <Text style={styles.eventDate}>
        Quarta feira, 25 de dezembro de 2024.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Adicionar participante'
          placeholderTextColor='#6B6B6B'
          keyboardType='default'
          onChangeText={eventText => setParticipantName(eventText)}
          value={participantName}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>  

      {/* 
        FlatList é um componente que renderiza uma lista de elementos de forma performática.
        sem precisar fazer um map manualmente. 
      */}
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            name={item} 
            removeParticipant={() => handleRemoveParticipant(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Nenhum participante adicionado a sua lista de presença.
          </Text>
        )}
      />       
    </View>
  );
}