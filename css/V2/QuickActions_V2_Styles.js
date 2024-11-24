import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const gridItemWidth = (width - 60) / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1321",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f0ebd8",
    borderWidth: 1,
    borderColor: "#3E5C76",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  gridItem: {
    width: "48%",
    aspectRatio: 1,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#1d2d44",
  },
  toggleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toggleText: {
    color: "#f0ebd8",
    fontSize: 36,
    fontWeight: "bold",
  },
  skipButton: {
    backgroundColor: "#3e5c76",
    padding: 15,
    justifyContent: "space-between",
  },
  skipButtonText: {
    color: "#f0ebd8",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  scheduledTimeText: {
    color: "#f0ebd8",
    fontSize: 16,
    textAlign: "center",
  },
  presetButton: {
    backgroundColor: "#748cab",
    padding: 15,
    justifyContent: "space-between",
  },
  presetButtonText: {
    color: "#f0ebd8",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  presetDescription: {
    color: "#f0ebd8",
    fontSize: 14,
    textAlign: "center",
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
