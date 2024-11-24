import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1321", // Dark background color
    padding: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  blockContainer: {
    width: "48%",
    marginBottom: 16,
  },
  blockTitle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#3E5C76",
    borderRadius: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  energyBox: {
    backgroundColor: "#79f982",
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    elevation: 2,
  },
  energyDetail: {
    fontSize: 22,
    color: "#0d1321",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 4,
  },
  comparisonBox: {
    backgroundColor: "#1d2d44",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#3E5C76",
  },
  comparisonValue: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f0ebd8", // Light text color for visibility
  },
  reductionText: {
    color: "#79f982", // Green for reduction text
  },
  increaseText: {
    color: "#e74c3c", // Red for increase text
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    padding: 16,
    backgroundColor: "#151F33", // A medium blue for the button background
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  usageButtonText: {
    color: "#f0ebd8", // Light text for the button
    fontSize: 16,
    fontWeight: "bold",
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default styles;
