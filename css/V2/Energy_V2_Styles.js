import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1321", // Dark background color
    padding: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  blockContainer: {
    width: '48%',
    marginBottom: 16,
  },
  blockTitle: {
    fontSize: 16,
    color: "#f0ebd8", // Light text color
    fontWeight: "bold",
    textAlign: "center",
    minHeight: 40,
  },
  energyBox: {
    backgroundColor: "#A5FFAC", // Updated green color
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    elevation: 2,
  },
  energyDetail: {
    fontSize: 22,
    color: "#0d1321", // Dark text color for contrast
    textAlign: "center",
    marginVertical: 4,
  },
  comparisonBox: {
    backgroundColor: '#1d2d44', // Darker blue for comparison box
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    elevation: 2,
  },
  comparisonValue: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#f0ebd8", // Light text color for visibility
  },
  reductionText: {
    color: '#78ff9f', // Green for reduction text
  },
  increaseText: {
    color: '#e74c3c', // Red for increase text
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    padding: 16,
    backgroundColor: '#3e5c76', // A medium blue for the button background
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  usageButtonText: {
    color: '#f0ebd8', // Light text for the button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
