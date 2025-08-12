/** @format */

import { ThemeCard } from "@/app-colocation/theme-toggle/components/theme-card";
import {
	useDarkThemeConfig,
	useLightThemeConfig,
	useSystemThemeConfig,
} from "@/app-colocation/theme-toggle/use-theme-config";
import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import type { ThemeMode } from "@/components/ui/gluestack-ui-provider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useSystemColorScheme } from "@/hooks/use-color-scheme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Circle } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemeToggleScreen = () => {
	const [selectedThemeId, setSelectedThemeId] = useState<ThemeMode>("system");

	const lightThemeConfig = useLightThemeConfig();
	const darkThemeConfig = useDarkThemeConfig();
	const systemThemeConfig = useSystemThemeConfig();

	const themeConfigs = React.useMemo(
		() => [systemThemeConfig, lightThemeConfig, darkThemeConfig],
		[darkThemeConfig, lightThemeConfig, systemThemeConfig],
	);

	const selectedThemeConfig = React.useMemo(() => {
		const theme = themeConfigs.find((t) => t.id === selectedThemeId);
		if (!theme) {
			throw new Error(
				`[ThemeToggleScreen]: themeConfigs has an 'id" not matching the type "selectedTheme" state.`,
			);
		}
		return theme;
	}, [selectedThemeId, themeConfigs]);

	const systemColorScheme = useSystemColorScheme();

	return (
		<>
			<Stack.Screen options={{ headerShown: false }} />
			<StatusBar
				style={
					selectedThemeId === "system"
						? systemColorScheme === "dark"
							? "light"
							: "dark"
						: selectedThemeId === "dark"
							? "light"
							: "dark"
				}
				animated
			/>
			<SafeAreaView
				className={`flex-1 p-4`}
				style={{
					backgroundColor: selectedThemeConfig.colors.cardBgColor,
				}}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					className="flex-1"
					contentContainerClassName="gap-6">
					<Box>
						<Heading
							size="2xl"
							className="text-center font-bold text-neutral-900"
							style={{
								color: selectedThemeConfig.colors.textColor,
							}}>
							Choose Theme
						</Heading>
						<Text
							size="sm"
							className="text-center text-neutral-400"
							style={{
								color: selectedThemeConfig.colors.subTextColor,
							}}>
							Select your preferred appearance
						</Text>
					</Box>

					<Box className="gap-4 px-8">
						{themeConfigs.map((theme) => {
							const isSelected = selectedThemeId === theme.id;

							return (
								<TouchableOpacity
									key={theme.id}
									onPress={() =>
										setSelectedThemeId(theme.id)
									}>
									<ThemeCard
										isThemeSelected={isSelected}
										themeConfig={theme}
									/>
								</TouchableOpacity>
							);
						})}
					</Box>

					{/* Apply button */}
					<Box>
						<TouchableOpacity
							className={`w-full rounded-xl px-4 py-3 font-medium transition-all duration-200 hover:opacity-90`}
							style={{
								backgroundColor:
									selectedThemeConfig.colors.accentBgColor,
							}}
							onPress={() => {
								console.log(`Applied ${selectedThemeId} theme`);
							}}>
							<Text className="text-center text-white">
								Apply {selectedThemeConfig?.name}
							</Text>
						</TouchableOpacity>
					</Box>

					{/* Current selection indicator */}

					<Badge className="bg-red-500">
						<BadgeIcon as={Circle} />
						<BadgeText className="text-xs text-neutral-300">
							{selectedThemeConfig.name} Active
						</BadgeText>
					</Badge>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

export default ThemeToggleScreen;
