import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0B0B20' },
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