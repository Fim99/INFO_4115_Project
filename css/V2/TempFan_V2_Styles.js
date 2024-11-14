import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000066',
    padding: 20,
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
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
    borderTopColor: 'white',
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
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#006D5B',
  },
  valueText: {
    fontSize: 48,
    color: '#fff',
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
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedMode: {
    backgroundColor: '#23C4FF',
  },
  modeIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  selectedText: {
    color: '#FF6347', // Color for selected button text
  },
});
