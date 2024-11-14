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
    marginBottom: 20,
    marginTop: 20,
  },
  nextScheduleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#23C4FF",
    width: 50,
    height: 50,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  deleteButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  eventList: {
    flexGrow: 1,
  },
  eventBox: {
    backgroundColor: "#23C4FF",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventTime: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  eventDetail: {
    fontSize: 14,
    color: "#fff",
  },
  eventTemperature: {
    fontSize: 14,
    color: "#fff",
  },
});

export default styles;
