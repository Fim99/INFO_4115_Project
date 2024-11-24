import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1321", // Dark blue background
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F0EBD8", // Cream text
    textShadowColor: "rgba(0, 0, 0, 0.5)", // Subtle shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    borderWidth: 1,
    borderColor: "#3E5C76",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  controlRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    gap: 12,
  },
  controlButton: {
    borderRadius: 16,
    padding: 12,
    backgroundColor: "#3E5C76", // Dark blue for buttons
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(116, 140, 171, 0.2)", // Subtle border
  },
  iconContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D2D44", // Match header color for consistency
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderWidth: 1,
  },
  icon: {
    width: "80%",
    height: "80%",
    tintColor: "#F0EBD8", // Match icon color to theme
  },
  descriptionText: {
    flex: 1,
    fontSize: 14,
    color: "#F0EBD8", // Cream text
    lineHeight: 20,
    paddingVertical: 25,
    fontWeight: "500",
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
