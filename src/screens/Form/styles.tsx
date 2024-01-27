import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    color: '#fff',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    color: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
    marginBottom: 25,
  },
  erroTexto: {
    color: 'red',
    fontSize: 14,
    marginBottom: 5,
  },
});
