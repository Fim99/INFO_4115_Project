import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const gridItemWidth = (width - 60) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1321', // Dark background color
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
    color: '#f0ebd8', // Light text color for title
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
    backgroundColor: '#1d2d44', // Dark blue background for grid items
  },
  toggleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#f0ebd8', // Light text for toggle button
    fontSize: 36,
    fontWeight: 'bold',
  },
  skipButton: {
    backgroundColor: '#3e5c76', // Medium blue for the skip button
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
  skipButtonText: {
    color: '#f0ebd8', // Light text for button
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scheduledTimeText: {
    color: '#f0ebd8', // Light text for scheduled time
    fontSize: 16,
    textAlign: 'center',
  },
  presetButton: {
    backgroundColor: '#748cab', // Lighter blue for preset button
    paddingVertical: 25,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  presetButtonText: {
    color: '#f0ebd8', // Light text for button
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  presetDescription: {
    color: '#f0ebd8', // Light text for description
    fontSize: 14,
    textAlign: 'center',
  },

  
});
