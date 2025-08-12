/** @format */

import { Box } from "@/components/ui/box";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useSystemColorScheme } from "@/hooks/use-color-scheme";
import {
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
	useFonts,
} from "@expo-google-fonts/inter";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import "../../global.css";
import {
	configureReanimatedLogger,
	ReanimatedLogLevel,
} from "react-native-reanimated";

configureReanimatedLogger({
	level: ReanimatedLogLevel.warn,
	strict: false, // Reanimated runs in strict mode by default
});

export default function RootLayout() {
	const colorScheme = useSystemColorScheme();
	const [loaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	});

	if (!loaded) {
		// Async font loading only occurs in development.
		return null;
	}

	return (
		<ThemeProvider
			value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<GluestackUIProvider mode={colorScheme ?? "system"}>
				<Box className="flex-1 bg-background-0">
					<Stack initialRouteName="index">
						<Stack.Screen name="+not-found" />
					</Stack>
				</Box>
			</GluestackUIProvider>
		</ThemeProvider>
	);
}
