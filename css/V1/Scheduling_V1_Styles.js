import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F3FF',
    padding: 16,
  },
  nextScheduleContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CDDDE2',
  },
  nextScheduleText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2196F3',
    fontWeight: '600',
  },
  calendar: {
    borderRadius: 10,
    elevation: 4,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CDDDE2',
  },
  addBar: {
    backgroundColor: '#589cfb',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CDDDE2',
  },
  addBarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  schedulesList: {
    flex: 1,
  },
  scheduleItem: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#CDDDE2',
  },
  scheduleInfo: {
    flex: 1,
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  scheduleDate: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    backgroundColor: '#cc3300',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  timePickersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  wheelPickerWrapper: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  pickerLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  pickerContainer: {
    height: 120, // Reduced from 150
    width: 80,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#CDDDE2',
  },
  scrollPicker: {
    backgroundColor: '#ffffff',
  },
  timeSeparator: {
    fontSize: 24,
    marginHorizontal: 5,
    marginTop: 30, // Reduced from 40 to match new height
  },
  temperaturePickerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  temperatureLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  temperaturePickerWrapper: {
    height: 120, // Reduced from 150
    width: 100,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#CDDDE2',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    color: '#666',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#cc3300',
  },
  submitButton: {
    backgroundColor: '#589cfb',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});