// TempFan.styles.js
import { StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E6F3FF",
  },
  radialSliderContainer: {
    width: windowWidth * 0.8,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  sliderContainer: {
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 5,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#b1d8fb",
    backgroundColor: "#fff",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  modeIcon: {
    width: 30,
    height: 30,
  },
  slider: {
    width: "100%",
    activeColor: "#589cfb",
    inactiveColor: "#fff",
    thumbColor: "#589cfb",
  },
});
