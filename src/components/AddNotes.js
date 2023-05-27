import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const AddNotes = ({onAddNote}) => {
  const [noteText, setNoteText] = useState('');
  const [show, setShow] = useState(false);
  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      onAddNote(noteText);
      setNoteText('');
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
        <Text style={styles.buttonText}>Add Note</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Add a note"
        value={noteText}
        onChangeText={setNoteText}
        multiline
        numberOfLines={4}
      />
    </View>
  );
};

export default AddNotes;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cbd4d4',
    borderStyle: 'dashed',
    paddingVertical: 10,
    borderRadius: 4,
    marginVertical: 10,
  },
  buttonText: {
    color: '#6d7579',
    fontSize: 14,
  },
});
