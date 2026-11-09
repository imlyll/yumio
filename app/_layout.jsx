// Expo
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Custom Hooks
import { useCustomFonts } from "../hooks/useCustomFonts";

export default function RootLayout() {
    const { loaded, error } = useCustomFonts();

    if (!loaded && !error) return null;

    return (
        <>
            <StatusBar style="auto" />
            <Stack screenOptions={{ headerShown: false }} />
        </>
    );
}