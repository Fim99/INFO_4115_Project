// styles/HomeScreenStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F3FF',
    paddingHorizontal: 16,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius:20, 
    marginVertical: 20,
    marginHorizontal: 50,
    borderWidth: 1,
    borderColor: "#b1d8fb",
    backgroundColor: '#fff',
  },
  temperatureContainer: {
    borderWidth: 1,
    borderColor: '#b1d8fb',
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    width: 200,
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  statusContainer: {
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  scheduleContainer: {
    borderWidth: 1,
    borderColor: '#b1d8fb',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: '#FFF',
    width: 200,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  scheduleText: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#589cfb',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default styles;