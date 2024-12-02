// app/(tabs)/index.tsx
'use client';

import { useState } from 'react';
import HomePage from '../screens/HomePage';
import AboutPage from '../screens/AboutPage';
import type { RootStackParamList } from '../types/navigation';

export default function TabIndex() {
  const [currentScreen, setCurrentScreen] = useState<keyof RootStackParamList>('Home');

  const handleNavigation = (screen: keyof RootStackParamList) => {
    setCurrentScreen(screen);
  };

  if (currentScreen === 'Home') {
    return <HomePage onNavigate={handleNavigation} />;
  }
  
  return <AboutPage onNavigate={handleNavigation} />;
}