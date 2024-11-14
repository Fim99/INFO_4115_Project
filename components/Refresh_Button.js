// components/RefreshButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RefreshButton = () => {
  const navigation = useNavigation();

  const handleRefresh = () => {
    // Get the current route name and params
    const currentRoute = navigation.getState().routes[navigation.getState().index];
    
    // Refresh the screen by replacing it with itself
    navigation.replace(currentRoute.name, currentRoute.params);
  };

  return (
    <TouchableOpacity style={styles.refreshButtonContainer} onPress={handleRefresh}>
      <Icon name="refresh" size={24} color="#ff0000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  refreshButtonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  refreshButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#23C4FF',
  },
  refreshButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default RefreshButton;