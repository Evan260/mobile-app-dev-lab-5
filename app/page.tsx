// app/page.tsx
'use client';

import { useState } from 'react';
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';

export default function Page() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      {currentPage === 'home' ? (
        <HomePage onNavigate={(page) => setCurrentPage(page)} />
      ) : (
        <AboutPage onNavigate={(page) => setCurrentPage(page)} />
      )}
    </div>
  );
}