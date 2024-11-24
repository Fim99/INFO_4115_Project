import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6F3FF",
    padding: 16,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 15,
  },
  usageTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 5,
    textAlign: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#b1d8fb",
    backgroundColor: "#fff",
  },
  energyBox: {
    backgroundColor: "#01a836",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  energyDetail: {
    fontSize: 24,
    color: "#fff",
    marginRight: 14,
    marginLeft: 14,
  },
  usageButton: {
    position: "absolute",
    bottom: 20,
    width: "90%",
    padding: 15,
    backgroundColor: "#589cfb",
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
  },
  usageButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
