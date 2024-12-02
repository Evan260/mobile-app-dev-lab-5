// app/screens/AboutPage.tsx
'use client';

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { PageProps } from '../types/navigation';

export default function AboutPage({ onNavigate }: PageProps) {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About</Text>
      </View>
      
      <Text style={styles.title}>Todo App</Text>
      <TouchableOpacity onPress={() => setShowEasterEgg(!showEasterEgg)}>
        <Text style={styles.name}>Created by Evan Di Placido</Text>
      </TouchableOpacity>
      <Text style={styles.date}>{currentDate}</Text>
      
      {showEasterEgg && (
        <View style={styles.easterEgg}>
          <Text style={styles.easterEggText}>
            You found the secret message!
          </Text>
        </View>
      )}

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => onNavigate('Home')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    color: '#6200ee',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  easterEgg: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  easterEggText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  backButton: {
    backgroundColor: '#6200ee',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    minWidth: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});