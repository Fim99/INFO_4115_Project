import React, { useState, useMemo, useEffect } from "react";
import {Text, View, TouchableOpacity, ScrollView, Modal, Switch,} from "react-native";
import { Calendar } from "react-native-calendars";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import RefreshButton from "../Refresh_Button";
import GridBackground from "../GridBackground";
import styles from "../../css/V1/Scheduling_V1_Styles";
import ScreenWrapper from "../ScreenWrapper";

const formatDate = (date) => {
  const d = new Date(date);
  return d.toISOString().split("T")[0];
};

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const SmartACSchedulingV1 = () => {
  const [scheduledEvents, setScheduledEvents] = useState([
    {
      id: "1",
      date: formatDate(tomorrow),
      time: "08:30 AM",
      temperature: 22,
      repeated: false,
    },
  ]);

  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [hourIndex, setHourIndex] = useState(11);
  const [minuteIndex, setMinuteIndex] = useState(0);
  const [ampmIndex, setAmpmIndex] = useState(0);
  const [temperatureIndex, setTemperatureIndex] = useState(6);
  const [repeated, setRepeated] = useState(false);

  const hours = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const ampmOptions = ["AM", "PM"];
  const temperatures = Array.from({ length: 15 }, (_, i) => `${i + 16}°C`);

  // Memoized next scheduled event
  const nextEvent = useMemo(() => {
    if (scheduledEvents.length === 0) return null;

    const now = new Date();
    const futureEvents = scheduledEvents.filter((event) => {
      const eventDate = new Date(`${event.date} ${event.time}`);
      return eventDate > now;
    });

    if (futureEvents.length === 0) return scheduledEvents[0];
    return futureEvents.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateA - dateB;
    })[0];
  }, [scheduledEvents]);

  // Set selectedDate to nextEvent.date on component mount
  useEffect(() => {
    if (nextEvent && !selectedDate) {
      setSelectedDate(nextEvent.date);
    }
  }, [nextEvent, selectedDate]);

  const markedDates = useMemo(() => {
    const marked = {};
    scheduledEvents.forEach((event) => {
      marked[event.date] = {
        marked: true,
        dotColor: "#2196F3",
      };
    });
    if (selectedDate) {
      marked[selectedDate] = {
        ...marked[selectedDate],
        selected: true,
        selectedColor: "#2196F3",
      };
    }
    return marked;
  }, [scheduledEvents, selectedDate]);

  const handleAddSchedule = () => {
    if (!selectedDate) return;
    setModalVisible(true);
  };

  const handleSubmit = () => {
    const formattedTime = `${hours[hourIndex]}:${minutes[minuteIndex]} ${ampmOptions[ampmIndex]}`;
    const temperature = parseInt(temperatures[temperatureIndex]);

    setScheduledEvents((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        date: selectedDate,
        time: formattedTime,
        temperature,
        repeated,
      },
    ]);

    setHourIndex(11);
    setMinuteIndex(0);
    setAmpmIndex(0);
    setTemperatureIndex(6);
    setRepeated(false);
    setModalVisible(false);
  };

  const handleDeleteSchedule = (eventId) => {
    setScheduledEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

  const renderScrollPicker = (
    dataSource,
    selectedIndex,
    onValueChange,
    label
  ) => (
    <View style={styles.wheelPickerWrapper}>
      <Text style={styles.pickerLabel}>{label}</Text>
      <View style={styles.pickerContainer}>
        <ScrollPicker
          dataSource={dataSource}
          selectedIndex={selectedIndex}
          onValueChange={onValueChange}
          wrapperHeight={120}
          wrapperWidth={60}
          wrapperColor="transparent"
          itemHeight={40}
          highlightColor="#589CFB"
          highlightBorderWidth={2}
          activeItemTextColor="#2196F3"
          itemTextColor="#888"
          style={styles.scrollPicker}
        />
      </View>
    </View>
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <GridBackground />
        <RefreshButton onPress={RefreshButton.handleRefresh} />

        {nextEvent && (
          <View style={styles.nextScheduleContainer}>
            <Text style={styles.nextScheduleText}>
              Next Scheduled At:{"\n"}
              {nextEvent.date} {nextEvent.time} - {nextEvent.temperature}°C
            </Text>
          </View>
        )}

        <Calendar
          style={styles.calendar}
          markedDates={markedDates}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          theme={{
            todayTextColor: "#589cfb",
            selectedDayBackgroundColor: "#589cfb",
            arrowColor: "#2196F3",
          }}
        />

        <TouchableOpacity style={styles.addBar} onPress={handleAddSchedule}>
          <Text style={styles.addBarText}>
            Add Schedule for {selectedDate || "Selected Date"}
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Event</Text>

              <View style={styles.timePickersContainer}>
                {renderScrollPicker(
                  hours,
                  hourIndex,
                  (_, index) => setHourIndex(index),
                  "Hour"
                )}
                <Text style={styles.timeSeparator}>:</Text>
                {renderScrollPicker(
                  minutes,
                  minuteIndex,
                  (_, index) => setMinuteIndex(index),
                  "Minute"
                )}
                {renderScrollPicker(
                  ampmOptions,
                  ampmIndex,
                  (_, index) => setAmpmIndex(index),
                  "Period"
                )}
              </View>

              <View style={styles.temperaturePickerContainer}>
                <Text style={styles.temperatureLabel}>Set Temperature</Text>
                <View style={styles.temperaturePickerWrapper}>
                  <ScrollPicker
                    dataSource={temperatures}
                    selectedIndex={temperatureIndex}
                    onValueChange={(_, index) => setTemperatureIndex(index)}
                    wrapperHeight={120}
                    wrapperWidth={80}
                    wrapperColor="transparent"
                    itemHeight={40}
                    highlightColor="#589CFB"
                    highlightBorderWidth={2}
                    activeItemTextColor="#2196F3"
                    itemTextColor="#888"
                  />
                </View>
              </View>

              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Repeat Schedule</Text>
                <Switch
                  value={repeated}
                  onValueChange={setRepeated}
                  trackColor={{ false: "#E0E0E0", true: "#589CFB" }}
                  thumbColor={repeated ? "white" : "#f4f3f4"}
                />
              </View>

              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.submitButton]}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Add Schedule</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <ScrollView style={styles.schedulesList}>
          {scheduledEvents
            .filter((event) => !selectedDate || event.date === selectedDate)
            .map((event) => (
              <View key={event.id} style={styles.scheduleItem}>
                <View style={styles.scheduleInfo}>
                  <Text style={styles.scheduleTime}>
                    {event.time} - {event.temperature}°C
                  </Text>
                  <Text style={styles.scheduleDate}>
                    {event.date} {event.repeated ? "(Repeated)" : "(Once)"}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteSchedule(event.id)}
                >
                  <Text style={styles.deleteButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default SmartACSchedulingV1;
