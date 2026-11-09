// React > React Native > Expo > Package > Screens > Components > Styles > Image

// Expo
import { StatusBar } from 'expo-status-bar';

// Screens
import { RegisterScreen } from './screens';
import { SignUpScreen } from './screens';

// Custom Hooks
import { useCustomFonts } from "./hooks/useCustomFonts.jsx";

export default function App() {

  const { loaded, error } = useCustomFonts();

  if (!loaded && !error) return null;

  return (
    <>
      <StatusBar style="auto" />
      <RegisterScreen />
    </>
  );
}