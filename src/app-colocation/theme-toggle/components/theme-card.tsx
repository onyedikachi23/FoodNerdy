/** @format */

import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import type { ThemeConfigWithHexColors } from "../types";
import { cn } from "@/lib/utils";

interface ThemeCardProps {
	isThemeSelected: boolean;
	themeConfig: ThemeConfigWithHexColors;
	className?: string;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({
	isThemeSelected,
	themeConfig: theme,
	className,
}) => {
	return (
		<Box
			className={cn(
				`relative rounded-2xl border-2 p-4 transition-all duration-200`,
				className,
			)}
			style={{
				backgroundColor: theme.colors.cardBgColor,
				borderColor: isThemeSelected
					? theme.colors.borderColor
					: undefined,
				elevation: 6,
			}}>
			{/* Mini app preBox */}
			<Box
				className={`relative mb-4 overflow-hidden rounded-lg p-3`}
				style={{
					backgroundColor: theme.colors.preBoxBgColor,
				}}>
				{/* app dots */}
				<Box className="mb-3 flex flex-row gap-1">
					<Box className="h-2 w-2 rounded-full bg-error-500" />
					<Box className="h-2 w-2 rounded-full bg-warning-500" />
					<Box className="h-2 w-2 rounded-full bg-success-500" />
				</Box>

				{/* Top bar */}
				<Box
					className={`mb-2 h-2 rounded`}
					style={{
						backgroundColor: theme.colors.barBgColors[0],
					}}
				/>

				{/* Content bars */}
				<Box className="space-y-2">
					<Box
						className={`h-1.5 w-3/4 rounded`}
						style={{
							backgroundColor: theme.colors.barBgColors[1],
						}}
					/>
					<Box
						className={`h-1.5 w-1/2 rounded`}
						style={{
							backgroundColor: theme.colors.barBgColors[2],
						}}
					/>
				</Box>

				{/* Bottom elements */}
				<Box className="mt-3 flex flex-row gap-2">
					<Box
						className={`h-3 w-12 rounded`}
						style={{
							backgroundColor: theme.colors.elementBgColors[0],
						}}
					/>
					<Box
						className={`h-3 w-8 rounded`}
						style={{
							backgroundColor: theme.colors.elementBgColors[1],
						}}
					/>
					<Box
						className={`h-3 w-10 rounded`}
						style={{
							backgroundColor: theme.colors.elementBgColors[2],
						}}
					/>
				</Box>
			</Box>

			{/* Theme info */}
			<Box className="flex flex-row items-center justify-between">
				<Text
					className={`font-medium text-sm`}
					style={{
						color: theme.colors.textColor,
					}}>
					{theme.name}
				</Text>

				<Box
					className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200`}
					style={{
						backgroundColor: isThemeSelected
							? theme.colors.accentBgColor
							: theme.colors.accentBgColorNotSelected,
					}}>
					<Icon as={theme.icon} className="h-4 w-4 stroke-white" />
				</Box>
			</Box>
		</Box>
	);
};
