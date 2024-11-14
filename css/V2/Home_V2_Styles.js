import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000066',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  welcomeText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%',
  },
  controlButton: {
    backgroundColor: '#808080',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  temperatureContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  temperatureText: {
    fontSize: 56,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusBox: {
    borderRadius: 10,
    padding: 15,
    width: '45%',
    justifyContent: 'center', // Center content vertically
  },
  scheduleBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '45%',
  },
  statusText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  
});

export default styles;
