import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const ScreenWrapper = ({ 
  children, 
  backgroundColor = '#0D1321', 
  style 
}) => {
  return (
    <View style={[
      styles.screenContainer, 
      { 
        backgroundColor,
        ...Platform.select({
          web: {
            width: "100%",
            height: "100%",
            maxHeight: 1200,
            maxWidth: 800,
            alignSelf: 'center',
            overflow: 'hidden',
          },
          default: {
            width: '100%',
            height: '100%',
          }
        })
      }, 
      style
    ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});

export default ScreenWrapper;