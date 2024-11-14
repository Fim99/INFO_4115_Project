import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const gridItemWidth = (width - 60) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000066',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: gridItemWidth,
    height: gridItemWidth,
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  toggleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
  skipButton: {
    backgroundColor: '#CD853F', // Orange-brown color from screenshot
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
  skipButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scheduledTimeText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  presetButton: {
    backgroundColor: '#3498db', // Light blue for presets
    paddingVertical: 25,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  presetButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  presetDescription: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});