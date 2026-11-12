import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      <Stack.Screen name="overview" />
      <Stack.Screen name="calculate-fees" />
      <Stack.Screen name="contact" />
      <Stack.Screen name="explore" />
    </Stack>
  );
}