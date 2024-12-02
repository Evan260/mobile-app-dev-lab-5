// app/components/ToDoForm.tsx
'use client';

import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

interface ToDoFormProps {
  onAddTask: (text: string) => void;
}

export default function ToDoForm({ onAddTask }: ToDoFormProps) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      onAddTask(taskText.trim());
      setTaskText(''); // Clear input after adding task
    }
  };

  // Add this handler for key press events
  const handleKeyPress = (e: { nativeEvent: { key: string } }) => {
    if (e.nativeEvent.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={setTaskText}
        onKeyPress={handleKeyPress}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={handleAddTask}
      >
        <Text style={styles.buttonText}>Add task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    backgroundColor: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});