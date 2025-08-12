/** @format */

import { Moon, Sun } from "lucide-react-native";
import type { ThemeConfig } from "./types";

const DARK_THEME_CONFIG_COLORS = {
	accentBgColor: "primary-400",
	accentBgColorNotSelected: "background-200",
	borderColor: "primary-400",
	cardBgColor: "background-0",
	preBoxBgColor: "background-100",
	barBgColors: ["primary-300", "background-300", "background-400"],
	elementBgColors: ["primary-400", "background-400", "background-500"],
	textColor: "typography-950",
	subTextColor: "typography-600",
} as const satisfies ThemeConfig["colors"];

const LIGHT_THEME_CONFIG_COLORS = {
	accentBgColor: "primary-600",
	accentBgColorNotSelected: "background-500",
	borderColor: "primary-600",
	cardBgColor: "background-0",
	preBoxBgColor: "background-100",
	barBgColors: ["primary-300", "background-300", "background-400"],
	elementBgColors: ["primary-400", "background-400", "background-500"],
	textColor: "typography-950",
	subTextColor: "typography-600",
} as const satisfies ThemeConfig["colors"];

export const THEME_CONFIGS = [
	{
		id: "light",
		name: "Light Mode",
		icon: Sun,
		colors: LIGHT_THEME_CONFIG_COLORS,
	},
	{
		id: "dark",
		name: "Dark Mode",
		icon: Moon,
		colors: DARK_THEME_CONFIG_COLORS,
	},
] as const satisfies ThemeConfig[];
