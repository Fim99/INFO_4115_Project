import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#E6F3FF',
        flex: 1,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      toggleContainer: {
        marginBottom: 20,
        alignItems: 'center',
      },
      toggleBackground: {
        width: 320,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        position: 'relative',
      },
      thumb: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: 'white',
        position: 'absolute',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      toggleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      scheduleButton: {
        backgroundColor: '#e67e00',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
      },
      scheduleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      scheduleTimeText: {
        color: 'white',
        fontSize: 14,
      },
      presetButton: {
        backgroundColor: '#8b728b',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
      },
      presetText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      presetSubText: {
        color: 'white',
        fontSize: 14,
        opacity: 0.8,
      },
  });

export default styles;
