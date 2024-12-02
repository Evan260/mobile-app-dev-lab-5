// app/screens/HomePage.tsx
'use client';

import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import type { PageProps, Task } from '../types/navigation';

interface HomePageProps extends PageProps {
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { text: 'Do laundry', completed: false },
    { text: 'Go to gym', completed: false },
    { text: 'Walk dog', completed: false }
  ]);

  const addTask = (taskText: string) => {
    const isDuplicate = tasks.some(task => 
      task.text.toLowerCase() === taskText.toLowerCase()
    );

    if (isDuplicate) {
      alert('This task already exists');
      return;
    }
    
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const toggleTask = (index: number) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Todo List</Text>
      </View>
      <ToDoList tasks={tasks} onToggleTask={toggleTask} />
      <ToDoForm onAddTask={addTask} />
      <TouchableOpacity 
        style={styles.aboutButton}
        onPress={() => onNavigate('About')}
      >
        <Text style={styles.aboutButtonText}>
          About App
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aboutButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  aboutButtonText: {
    color: 'white',
    fontSize: 16,
  }
});