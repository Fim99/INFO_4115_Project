// components/RefreshButton.js
import React from "react";
import { TouchableOpacity,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const RefreshButton = () => {
  const navigation = useNavigation();

  const handleRefresh = () => {
    // Get the current route name and params
    const currentRoute =
      navigation.getState().routes[navigation.getState().index];

    // Refresh the screen by replacing it with itself
    navigation.replace(currentRoute.name, currentRoute.params);
  };

  return (
    <TouchableOpacity
      style={styles.refreshButtonContainer}
      onPress={handleRefresh}
    >
      <Icon name="refresh" size={24} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  refreshButtonContainer: {
    position: "absolute",
    top: -45,
    right: 15,
    zIndex: 1,
  },
});

export default RefreshButton;
