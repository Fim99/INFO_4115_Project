import React, { useState } from "react";
import { Text, View, TouchableOpacity, FlatList, TextInput, Modal, Button } from "react-native";
import styles from "../../css/V2/Scheduling_V2_Styles";
import RefreshButton from "../Refresh_Button";

const SmartACSchedulingV2 = () => {
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({
    date: "2024-11-15", // Default date
    time: "12:00", // Default time
    temperature: "22", // Default temperature
    amPm: "AM",
    repeated: false,
  });

  const handleAddScheduledEvent = () => {
    // Validation before adding the event
    if (
      /^\d{4}-\d{2}-\d{2}$/.test(newEvent.date) && // Check date format
      /^\d{1,2}:\d{2}$/.test(newEvent.time) && // Check time format
      newEvent.time.split(":")[0] >= 1 && newEvent.time.split(":")[0] <= 12 && // Validate time range (1-12)
      !isNaN(newEvent.temperature) && // Check temperature is a number
      newEvent.temperature >= 16 &&
      newEvent.temperature <= 30 // Validate temperature range
    ) {
      setScheduledEvents([...scheduledEvents, { ...newEvent }]);
      setIsModalVisible(false);
      setNewEvent({
        date: "2024-11-15",
        time: "12:00",
        temperature: "22",
        amPm: "AM",
        repeated: false,
      });
    } else {
      alert("Please provide valid inputs.");
    }
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = [...scheduledEvents];
    updatedEvents.splice(index, 1);
    setScheduledEvents(updatedEvents);
  };

  return (
    <View style={styles.container}>
      <RefreshButton onPress={RefreshButton.handleRefresh} />
      {scheduledEvents.length > 0 && (
        <Text style={styles.nextScheduleText}>
          Next Scheduled At:
          {"\n"}
          {scheduledEvents[0].date} {scheduledEvents[0].time} {scheduledEvents[0].amPm}
        </Text>
      )}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={scheduledEvents}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.eventBox}>
            <Text style={styles.eventTime}>{item.date} {item.time} {item.amPm}</Text>
            <Text style={styles.eventTemperature}>{item.temperature}°C</Text>
            <Text style={styles.eventDetail}>{item.repeated ? "Repeated" : "Once"}</Text>
            <TouchableOpacity onPress={() => handleDeleteEvent(index)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.eventList}
      />
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Event</Text>
            <TextInput
              style={styles.input}
              value={newEvent.date}
              onChangeText={(text) => setNewEvent({ ...newEvent, date: text })}
              placeholder="YYYY-MM-DD"
              keyboardType="default"
            />
            <View style={styles.inputContainer}>
              <Text>Time:</Text>
              <TextInput
                style={styles.input}
                value={newEvent.time}
                onChangeText={(text) => setNewEvent({ ...newEvent, time: text })}
                placeholder="HH:MM"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Temperature (16-30°C):</Text>
              <TextInput
                style={styles.input}
                value={newEvent.temperature}
                onChangeText={(text) => setNewEvent({ ...newEvent, temperature: text })}
                placeholder="Temperature"
                keyboardType="numeric"
              />
            </View>
            <View style={styles.toggleContainer}>
              <Text>AM/PM:</Text>
              <Button
                title={newEvent.amPm}
                onPress={() =>
                  setNewEvent({ ...newEvent, amPm: newEvent.amPm === "AM" ? "PM" : "AM" })
                }
              />
            </View>
            <View style={styles.toggleContainer}>
              <Text>Repeat:</Text>
              <Button
                title={newEvent.repeated ? "Repeated" : "Once"}
                onPress={() =>
                  setNewEvent({ ...newEvent, repeated: !newEvent.repeated })
                }
              />
            </View>
            <Button title="Add Event" onPress={handleAddScheduledEvent} />
            <Button title="Cancel" color="red" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SmartACSchedulingV2;
