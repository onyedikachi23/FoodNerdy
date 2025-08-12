/** @format */

import type { ThemeMode } from "@/components/ui/gluestack-ui-provider";
import type { HexColor, ThemeColorName } from "@/hooks/use-themed-color";
import type { LucideIcon } from "lucide-react-native";

type BarBgColorsLength = 3;
type ElementBgColorsLength = 3;

export interface ThemeConfig {
	id: ThemeMode;
	name: string;
	icon: LucideIcon;
	colors: {
		accentBgColor: ThemeColorName;
		accentBgColorNotSelected: ThemeColorName;
		borderColor: ThemeColorName;
		cardBgColor: ThemeColorName;
		preBoxBgColor: ThemeColorName;
		barBgColors: ThemeColorName[] & { length: BarBgColorsLength };
		elementBgColors: ThemeColorName[] & { length: ElementBgColorsLength };
		textColor: ThemeColorName;
		subTextColor: ThemeColorName;
	};
}

export type ThemeColorHexValues = AssertSubtype<
	HasKeysOf<ThemeConfig["colors"]>,
	{
		accentBgColor: HexColor;
		accentBgColorNotSelected: HexColor;
		borderColor: HexColor;
		cardBgColor: HexColor;
		preBoxBgColor: HexColor;
		barBgColors: HexColor[] & { length: BarBgColorsLength };
		elementBgColors: HexColor[] & { length: ElementBgColorsLength };
		textColor: HexColor;
		subTextColor: HexColor;
	}
>;
export type ThemeConfigWithHexColors<T extends ThemeConfig = ThemeConfig> =
	Prettify<SafeOmit<T, "colors"> & { colors: ThemeColorHexValues }>;
