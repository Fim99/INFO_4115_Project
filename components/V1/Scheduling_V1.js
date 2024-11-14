import React, { useState, useMemo } from 'react';
import {Text, View, TouchableOpacity, ScrollView, Modal, TextInput, Switch} from 'react-native';
import { Calendar } from 'react-native-calendars';
import RefreshButton from '../Refresh_Button';
import styles from '../../css/V1/Scheduling_V1_Styles';

const SmartACSchedulingV2 = () => {
  // State for scheduled events
  const [scheduledEvents, setScheduledEvents] = useState([
    { 
      date: '2024-11-14',
      time: '09:00 AM',
      temperature: 22,
      repeated: false
    }
  ]);
  
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [hour, setHour] = useState('12');
  const [minute, setMinute] = useState('00');
  const [ampm, setAmPm] = useState('AM');
  const [temperature, setTemperature] = useState('22');
  const [repeated, setRepeated] = useState(false);

  // Memoized next scheduled event
  const nextEvent = useMemo(() => {
    if (scheduledEvents.length === 0) return null;
    
    const now = new Date();
    const futureEvents = scheduledEvents.filter(event => {
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

  // Memoized marked dates for calendar
  const markedDates = useMemo(() => {
    const marked = {};
    scheduledEvents.forEach(event => {
      marked[event.date] = {
        marked: true,
        dotColor: '#2196F3'
      };
    });
    if (selectedDate) {
      marked[selectedDate] = {
        ...marked[selectedDate],
        selected: true,
        selectedColor: '#2196F3'
      };
    }
    return marked;
  }, [scheduledEvents, selectedDate]);

  const handleAddSchedule = () => {
    if (!selectedDate) return;
    setModalVisible(true);
  };

  const toggleAmPm = () => setAmPm(current => current === 'AM' ? 'PM' : 'AM');

  const handleSubmit = () => {
    const tempNum = parseInt(temperature);
    const hourNum = parseInt(hour);
    const minuteNum = parseInt(minute);
    
    if (tempNum < 16 || tempNum > 30 || 
        hourNum < 1 || hourNum > 12 || 
        minuteNum < 0 || minuteNum > 59) return;

    const formattedTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')} ${ampm}`;

    setScheduledEvents(prev => [
      ...prev,
      {
        date: selectedDate,
        time: formattedTime,
        temperature: tempNum,
        repeated
      }
    ]);
    
    // Reset form
    setHour('12');
    setMinute('00');
    setAmPm('AM');
    setTemperature('22');
    setRepeated(false);
    setModalVisible(false);
  };

  const handleDeleteSchedule = (index) => {
    setScheduledEvents(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <RefreshButton onPress={RefreshButton.handleRefresh} />

      {nextEvent && (
        <View style={styles.nextScheduleContainer}>
          <Text style={styles.nextScheduleText}>
            Next Scheduled At:{'\n'}
            {nextEvent.date} {nextEvent.time} - {nextEvent.temperature}°C
          </Text>
        </View>
      )}

      <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        onDayPress={day => setSelectedDate(day.dateString)}
        theme={{
          todayTextColor: '#2196F3',
          selectedDayBackgroundColor: '#2196F3',
          arrowColor: '#2196F3',
        }}
      />

      <TouchableOpacity 
        style={styles.addBar}
        onPress={handleAddSchedule}
      >
        <Text style={styles.addBarText}>
          Add Schedule for {selectedDate || 'Selected Date'}
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
            <Text style={styles.modalTitle}>Add New Schedule</Text>
            
            <Text style={styles.warningText}>
              Please make sure your values are in range:{'\n'}
              - Hour: 1-12{'\n'}
              - Minute: 00-59{'\n'}
              - Temperature: 16-30°C
            </Text>
            
            <View style={styles.timeContainer}>
              <View style={styles.timeInputContainer}>
                <TextInput
                  style={styles.timeInput}
                  value={hour}
                  onChangeText={setHour}
                  placeholder="12"
                  keyboardType="numeric"
                  maxLength={2}
                />
              </View>
              <Text style={styles.timeSeparator}>:</Text>
              <View style={styles.timeInputContainer}>
                <TextInput
                  style={styles.timeInput}
                  value={minute}
                  onChangeText={setMinute}
                  placeholder="00"
                  keyboardType="numeric"
                  maxLength={2}
                />
              </View>
              <TouchableOpacity 
                style={styles.ampmButton}
                onPress={toggleAmPm}
              >
                <Text style={styles.ampmButtonText}>{ampm}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Temperature (°C)</Text>
              <TextInput
                style={styles.input}
                value={temperature}
                onChangeText={setTemperature}
                placeholder="22"
                keyboardType="numeric"
                maxLength={2}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Repeat Schedule</Text>
              <Switch
                value={repeated}
                onValueChange={setRepeated}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={repeated ? "#2196F3" : "#f4f3f4"}
              />
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.submitButton]}
                onPress={handleSubmit}
              >
                <Text style={styles.modalButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.schedulesList}>
        {scheduledEvents
          .filter(event => !selectedDate || event.date === selectedDate)
          .map((event, index) => (
            <View key={index} style={styles.scheduleItem}>
              <View style={styles.scheduleInfo}>
                <Text style={styles.scheduleTime}>
                  {event.time} - {event.temperature}°C
                </Text>
                <Text style={styles.scheduleDate}>
                  {event.date} {event.repeated ? '(Repeated)' : '(Once)'}
                </Text>
              </View>
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => handleDeleteSchedule(index)}
              >
                <Text style={styles.deleteButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default SmartACSchedulingV2;