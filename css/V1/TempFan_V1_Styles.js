// TempFan.styles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6F3FF",
  },
  sliderContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  modeIcon: {
    width: 30,
    height: 30,
  },
  slider: {
    width: 300,
    activeColor: "#23C4FF",
    inactiveColor: "#CDDDE2",
    thumbColor: "#23C4FF",
  },
});
