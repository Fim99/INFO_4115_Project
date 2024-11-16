import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1321', // Match base theme background color
    padding: 20,
  },
  statusText: {
    color: '#F0EBD8', // Light cream text
    fontSize: 14,
  },
  sectionTitle: {
    color: '#F0EBD8', // Light cream text
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow for better visibility
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  temperatureContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  temperatureBarContainer: {
    width: '100%',
    height: 20,
    marginBottom: 20,
    position: 'relative',
  },
  temperatureBar: {
    height: 20,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#3E5C76', // Dark blue
  },
  marker: {
    position: 'absolute',
    top: -15,
    transform: [{ translateX: -10 }],
    zIndex: 1,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#F0EBD8', // Cream
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  controlButton: {
    width: 60,
    height: 60,
    backgroundColor: '#3E5C76', // Match base button color
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 30,
    color: '#F0EBD8', // Light cream
  },
  valueText: {
    fontSize: 48,
    color: '#F0EBD8', // Light cream
    fontWeight: 'bold',
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modeButton: {
    width: 100,
    height: 100,
    backgroundColor: '#3E5C76', // Match base button color
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedMode: {
    backgroundColor: '#748CAB', // Slightly lighter shade for selected
  },
  modeIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  selectedText: {
    color: '#F0EBD8', // Match base theme text color
  },
});
