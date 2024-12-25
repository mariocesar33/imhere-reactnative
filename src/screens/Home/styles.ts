import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
  container: {
    flex : 1, 
    backgroundColor: '#131016',
    padding: 24,
  },
  evevtName:{
    color: '#FFF', 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 48,
  },
  eventDate:{
    color: '#6B6B6B', 
    fontSize: 16,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    marginTop: 36,
    marginBottom: 48,
  },
  input:{
    height: 56,
    flex: 1,
    backgroundColor: '#1E1C24', 
    color: '#FFF', 
    borderRadius: 5, 
    padding: 16,
    fontSize: 16,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  participants: {
    paddingTop: 16,
  },
  emptyList: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
 });