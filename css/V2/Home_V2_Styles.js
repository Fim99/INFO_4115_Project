import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1321', // Dark background color
    padding: 20,
    margin: 0, // Ensure no default margins are applied
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  welcomeText: {
    color: '#f0ebd8', // Light text color
    fontSize: 36,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%',
  },
  controlButton: {
    backgroundColor: '#3e5c76', // Medium blue for buttons
    padding: 15,
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#f0ebd8', // Light text for buttons
    fontSize: 16,
    textAlign: 'center',
  },
  temperatureContainer: {
    backgroundColor: '#1d2d44', // Dark blue background for the temperature container
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  temperatureText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#f0ebd8', // Light text color for temperature
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
    backgroundColor: '#3e5c76', // Medium blue for status boxes
  },
  scheduleBox: {
    backgroundColor: '#1d2d44', // Dark blue for schedule box
    borderRadius: 10,
    padding: 15,
    width: '45%',
  },
  statusText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#f0ebd8', // Light text color for status text
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#f0ebd8', // Light text color for info text
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0ebd8', // Light text color for date text
    marginBottom: 10,
    textAlign: 'center',
  },

});

export default styles;
