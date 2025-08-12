/** @format */

import { useAppColorScheme } from "@/hooks/use-color-scheme";
import { OverlayProvider } from "@gluestack-ui/overlay";
import React, { useEffect } from "react";
import { View, type ViewProps } from "react-native";
import { config } from "./config";

export type ThemeMode = "light" | "dark" | "system";

export function GluestackUIProvider({
	mode = "light",
	style,
	children,
}: {
	mode?: ThemeMode;
	children?: React.ReactNode;
	style?: ViewProps["style"];
}) {
	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { colorScheme, setColorScheme } = useAppColorScheme();

	useEffect(() => {
		setColorScheme(mode);
	}, [mode, setColorScheme]);

	return (
		<View
			style={[
				config[colorScheme!],
				{ flex: 1, height: "100%", width: "100%" },
				style,
			]}>
			<OverlayProvider>{children}</OverlayProvider>
		</View>
	);
}
