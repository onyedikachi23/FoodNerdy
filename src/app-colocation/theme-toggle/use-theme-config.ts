/** @format */

import type { ThemeMode } from "@/components/ui/gluestack-ui-provider";
import type {
	ThemeColorHexValues,
	ThemeConfig,
	ThemeConfigWithHexColors,
} from "./types";
import { useThemedColor } from "@/hooks/use-themed-color";
import React from "react";
import { THEME_CONFIGS } from "./constants";
import { useSystemColorScheme } from "@/hooks/use-color-scheme";
import { Smartphone } from "lucide-react-native";

const useThemeConfig = <T extends SafeExclude<ThemeMode, "system">>({
	selectedTheme,
}: {
	selectedTheme: T;
}): ThemeConfigWithHexColors<ThemeConfig & { id: T }> => {
	const { getHexColor: getLightHexColor } = useThemedColor({
		colorScheme: selectedTheme,
	});
	const getHexColors = React.useCallback(
		(colorsObject: ThemeConfig["colors"]): ThemeColorHexValues => {
			return Object.fromEntries(
				Object.entries(colorsObject).map(([key, value]) => {
					if (Array.isArray(value)) {
						return [key, value.map(getLightHexColor)];
					}

					return [key, getLightHexColor(value)];
				}),
			) as ThemeColorHexValues;
		},
		[getLightHexColor],
	);
	const themeConfigWithHexColors = React.useMemo(() => {
		const config = THEME_CONFIGS.find((item) => item.id === selectedTheme);
		if (!config) {
			throw new Error(
				"[useThemeConfigs]: Missing or invalid theme config",
			);
		}

		return {
			...config,
			colors: getHexColors(config.colors),
		} as ThemeConfigWithHexColors<ThemeConfig & { id: T }>;
	}, [getHexColors, selectedTheme]);

	return themeConfigWithHexColors;
};

export const useLightThemeConfig = () =>
	useThemeConfig({ selectedTheme: "light" });

export const useDarkThemeConfig = () =>
	useThemeConfig({ selectedTheme: "dark" });

export const useSystemThemeConfig = () => {
	const systemColorScheme = useSystemColorScheme();
	const systemThemeId = systemColorScheme ?? "light";

	const lightConfig = useLightThemeConfig();
	const darkConfig = useDarkThemeConfig();

	const systemThemeConfig = React.useMemo(() => {
		const baseConfig = systemThemeId === "dark" ? darkConfig : lightConfig;

		return {
			...baseConfig,
			id: "system",
			name: `Auto Mode (System - ${baseConfig.id})`,
			icon: Smartphone,
		} as const satisfies ThemeConfigWithHexColors;
	}, [lightConfig, darkConfig, systemThemeId]);

	return systemThemeConfig;
};
