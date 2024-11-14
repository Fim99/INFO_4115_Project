import React, { useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import styles from "../../css/V1/Scheduling_V1_Styles";
import RefreshButton from '../Refresh_Button';

// Main component for scheduling events in the Smart AC app
const SmartACScheduling = () => {
  // State to manage the list of scheduled events, initializing with some sample events
  const [scheduledEvents, setScheduledEvents] = useState([
    { time: getRandomHourDateTime(), repeated: Math.random() > 0.5, temperature: getRandomTemperature() },
    { time: getRandomHourDateTime(), repeated: Math.random() > 0.5, temperature: getRandomTemperature() },
    { time: getRandomHourDateTime(), repeated: Math.random() > 0.5, temperature: getRandomTemperature() },
    { time: getRandomHourDateTime(), repeated: Math.random() > 0.5, temperature: getRandomTemperature() },
    { time: getRandomHourDateTime(), repeated: Math.random() > 0.5, temperature: getRandomTemperature() },
  ]);

  // Function to add a new scheduled event to the list
  const handleAddScheduledEvent = () => {
    setScheduledEvents([
      ...scheduledEvents,
      { time: getRandomHourDateTime(), repeated: Math.random() > 0.5, temperature: getRandomTemperature() },
    ]);
  };

  // Function to delete a scheduled event by index
  const handleDeleteEvent = (index) => {
    const updatedEvents = [...scheduledEvents];
    updatedEvents.splice(index, 1);
    setScheduledEvents(updatedEvents);
  };

  return (
    <View style={styles.container}>
      {/* Refresh Button */}
      <RefreshButton onPress={RefreshButton.handleRefresh} />
      <View>
        {/* Conditionally render the next scheduled event if events are present */}
        {scheduledEvents.length > 0 && (
          <Text style={styles.nextScheduleText}>
            Next Scheduled At:{'\n'}{scheduledEvents[0].time}
          </Text>
        )}
      </View>
      <View style={styles.topBar}>
        {/* Button to add a new scheduled event */}
        <TouchableOpacity onPress={handleAddScheduledEvent} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      {/* Display list of all scheduled events */}
      <FlatList
        data={scheduledEvents}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
          <View style={styles.eventBox}>
            <Text style={styles.eventTime}>{item.time}</Text>
            <Text style={styles.eventTemperature}>
              {item.temperature}°C
            </Text>
            <Text style={styles.eventDetail}>
              {item.repeated ? "Repeated" : "Once"}
            </Text>
            {/* Button to delete an event from the list */}
            <TouchableOpacity onPress={() => handleDeleteEvent(index)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.eventList}
      />
    </View>
  );
};

// Helper function to generate a random date and time string
const getRandomHourDateTime = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const randomDay = days[Math.floor(Math.random() * days.length)];
  const randomMonth = months[Math.floor(Math.random() * months.length)];
  const randomDate = Math.floor(Math.random() * 28) + 1;
  const randomHour = Math.floor(Math.random() * 12) + 1;
  const randomAMPM = Math.floor(Math.random() * 2) === 0 ? "AM" : "PM";
  return `${randomDay}, ${randomMonth} ${randomDate}, ${randomHour}:00 ${randomAMPM}`;
};

// Helper function to generate a random temperature between 16°C and 30°C
const getRandomTemperature = () => {
  return Math.floor(Math.random() * (30 - 16 + 1)) + 16;
};

export default SmartACScheduling;
