import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
  name: string;
  removeParticipant: () => void;
}

export function Participant({ name, removeParticipant }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity 
        style={styles.button}
      >
        <Text style={styles.buttonText} onPress={removeParticipant}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}