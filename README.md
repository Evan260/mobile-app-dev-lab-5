# React Native Todo App

A simple Todo application built with React Native and Next.js that allows users to manage their tasks with a clean, modern interface.

## Features

- Add and manage tasks with duplicate checking
- Mark tasks as complete/incomplete
- Navigate between Home and About pages
- Modern purple theme with consistent styling
- Responsive design for web platforms
- Easter egg in About page

## Project Structure

```
app/
├── (tabs)/
│   └── index.tsx         # Main navigation handler
├── screens/
│   ├── HomePage.tsx      # Main tasks screen
│   └── AboutPage.tsx     # About screen with easter egg
├── components/
│   ├── ToDoList.tsx      # Task list display
│   └── ToDoForm.tsx      # New task input form
└── types/
    └── navigation.ts     # Type definitions
```

## Components

### HomePage

- Displays the main task interface
- Manages task state and interactions
- Provides navigation to About page

### AboutPage

- Shows app information
- Contains a hidden easter egg
- Includes creator credits and current date

### ToDoList

- Renders scrollable task list
- Handles task completion toggling
- Shows task status with visual feedback

### ToDoForm

- Provides task input interface
- Prevents duplicate task entries
- Clear input after submission

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

## Technologies

- Next.js
- React Native Web
- TypeScript
- React Hooks (useState)
- React Native StyleSheet
