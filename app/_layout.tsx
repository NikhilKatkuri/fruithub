import { AppContextProvider } from "@/context/AppContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (

   <AppContextProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="AuthScreen"  options={{ headerShown: false }} />
      <Stack.Screen name="(user)/HomeScreen"  options={{ headerShown: false }} />
    </Stack>
   </AppContextProvider>
  );
}
