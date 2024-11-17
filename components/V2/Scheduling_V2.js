import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, FlatList, TextInput, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../css/V2/Scheduling_V2_Styles";
import RefreshButton from "../Refresh_Button";

const SmartACSchedulingV2 = () => {
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [scheduledEvents, setScheduledEvents] = useState([
    {
      id: Date.now(), // Add unique ID
      date: formatDate(tomorrow),
      time: "08:30",
      temperature: "23",
      amPm: "AM",
      repeated: true,
    }
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({
    date: formatDate(today),
    time: "12",
    minutes: "00",
    temperature: "22",
    amPm: "AM",
    repeated: false,
  });

  useEffect(() => {
    if (isModalVisible) {
      setNewEvent(prev => ({
        ...prev,
        date: formatDate(today)
      }));
    }
  }, [isModalVisible]);

  const getTimeValue = (time, amPm) => {
    const [hours, minutes] = time.split(':').map(Number);
    let hour24 = hours;
    
    if (amPm === "PM" && hours !== 12) {
      hour24 += 12;
    } else if (amPm === "AM" && hours === 12) {
      hour24 = 0;
    }
    
    return hour24 * 60 + minutes;
  };

  const getSortedEvents = (events) => {
    return [...events].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      if (dateA.getTime() !== dateB.getTime()) {
        return dateA - dateB;
      }
      
      return getTimeValue(a.time, a.amPm) - getTimeValue(b.time, b.amPm);
    });
  };

  const getNextScheduledEvent = () => {
    if (scheduledEvents.length === 0) return null;
    const sortedEvents = getSortedEvents(scheduledEvents);
    return sortedEvents[0];
  };

  const handleAddScheduledEvent = () => {
    if (
      /^\d{4}-\d{2}-\d{2}$/.test(newEvent.date) &&
      /^\d{1,2}$/.test(newEvent.time) &&
      /^\d{2}$/.test(newEvent.minutes) &&
      parseInt(newEvent.time) >= 1 &&
      parseInt(newEvent.time) <= 12 &&
      parseInt(newEvent.minutes) >= 0 &&
      parseInt(newEvent.minutes) <= 59 &&
      !isNaN(newEvent.temperature) &&
      newEvent.temperature >= 16 &&
      newEvent.temperature <= 30
    ) {
      const eventWithId = {
        ...newEvent,
        id: Date.now(), // Add unique ID to new events
        time: `${newEvent.time}:${newEvent.minutes}`,
      };
      
      setScheduledEvents([...scheduledEvents, eventWithId]);
      setIsModalVisible(false);
      setNewEvent({
        date: formatDate(today),
        time: "12",
        minutes: "00",
        temperature: "22",
        amPm: "AM",
        repeated: false,
      });
    } else {
      alert("Please provide valid inputs.");
    }
  };

  const handleDeleteEvent = (eventId) => {
    setScheduledEvents(currentEvents => 
      currentEvents.filter(event => event.id !== eventId)
    );
  };

  const nextEvent = getNextScheduledEvent();
  const sortedEvents = getSortedEvents(scheduledEvents);

  return (
    <View style={styles.container}>
     <LinearGradient
        colors={['#0D1321', '#1D2D44', '#3E5C76']}
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <RefreshButton onPress={RefreshButton.handleRefresh} />
      <View style={styles.nextScheduleBox}>
        <Text style={styles.nextScheduleText}>
          Next Scheduled At:{"\n"}
          {nextEvent
            ? `${nextEvent.date} ${nextEvent.time} ${nextEvent.amPm}`
            : "None"}
        </Text>
      </View>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sortedEvents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.eventBox}>
            <Text style={styles.eventTime}>{item.date} {"\n"} {item.time} {item.amPm}</Text>
            <Text style={styles.eventTemperature}>{item.temperature}°C</Text>
            <Text style={styles.eventDetail}>{item.repeated ? "Repeated" : "Once"}</Text>
            <TouchableOpacity onPress={() => handleDeleteEvent(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>×</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.eventList}
      />
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Event</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Date</Text>
              <TextInput
                style={styles.input}
                value={newEvent.date}
                onChangeText={(text) => setNewEvent({ ...newEvent, date: text })}
                placeholder="YYYY-MM-DD"
                keyboardType="default"
              />
            </View>

            <View style={styles.timeContainer}>
              <View style={[styles.inputContainer, styles.timeInput]}>
                <Text style={styles.inputLabel}>Hour</Text>
                <TextInput
                  style={styles.input}
                  value={newEvent.time}
                  onChangeText={(text) => setNewEvent({ ...newEvent, time: text })}
                  placeholder="HH"
                  keyboardType="numeric"
                  maxLength={2}
                />
              </View>
              
              <View style={[styles.inputContainer, styles.timeInput]}>
                <Text style={styles.inputLabel}>Minutes</Text>
                <TextInput
                  style={styles.input}
                  value={newEvent.minutes}
                  onChangeText={(text) => setNewEvent({ ...newEvent, minutes: text })}
                  placeholder="MM"
                  keyboardType="numeric"
                  maxLength={2}
                />
              </View>

              <View style={[styles.inputContainer, styles.timeInput]}>
                <Text style={styles.inputLabel}>AM/PM</Text>
                <TouchableOpacity
                  style={styles.amPmButton}
                  onPress={() =>
                    setNewEvent({ ...newEvent, amPm: newEvent.amPm === "AM" ? "PM" : "AM" })
                  }
                >
                  <Text style={styles.amPmButtonText}>{newEvent.amPm}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Temperature (16-30°C)</Text>
              <TextInput
                style={styles.input}
                value={newEvent.temperature}
                onChangeText={(text) => setNewEvent({ ...newEvent, temperature: text })}
                placeholder="Temperature"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.toggleContainer}>
              <Text style={styles.toggleLabel}>Repeat Event</Text>
              <TouchableOpacity
                style={styles.amPmButton}
                onPress={() => setNewEvent({ ...newEvent, repeated: !newEvent.repeated })}
              >
                <Text style={styles.amPmButtonText}>
                  {newEvent.repeated ? "Repeated" : "Once"}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.actionButton} onPress={handleAddScheduledEvent}>
              <Text style={styles.actionButtonText}>Add Event</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SmartACSchedulingV2;