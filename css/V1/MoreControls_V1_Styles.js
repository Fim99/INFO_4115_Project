import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6F3FF',
    },
    header: {
      padding: 20,
    },
    headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#b1d8fb",
    backgroundColor: '#fff',
    },
    content: {
      padding: 16,
      gap: 30,
    },
    controlContainer: {
      gap: 8,
    },
    button: {
      borderRadius: 12,
      padding: 16,
      minHeight: 60,
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imagePlaceholder: {
      width: 24,
      height: 24,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 4,
      marginRight: 12,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
    descriptionText: {
      color: '#444444',
      fontSize: 14,
      paddingHorizontal: 4,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 12,
        tintColor: '#FFFFFF',
      },
  });

export default styles;
