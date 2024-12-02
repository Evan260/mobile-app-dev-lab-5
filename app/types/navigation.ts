// app/types/navigation.ts
export interface Task {
  text: string;
  completed: boolean;
}

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
};

export interface PageProps {
  onNavigate: (screen: keyof RootStackParamList) => void;
}