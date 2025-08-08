/** @format */

import { vars } from "nativewind";

type ColorKey = `--color-${string}-${string}`;
type ColorValue = `${number} ${number} ${number}`;
type ColorMap = Record<ColorKey, ColorValue>;

const lightThemeMap = {
	/* Primary - Tailwind lime */
	"--color-primary-0": "250 250 250", // neutral-50 #fafafa
	"--color-primary-50": "247 254 231", // lime-50 #f7fee7
	"--color-primary-100": "236 252 198", // lime-100 #ecfcc6
	"--color-primary-200": "217 249 157", // lime-200 #d9f99d
	"--color-primary-300": "190 242 100", // lime-300 #bef264
	"--color-primary-400": "163 230 53", // lime-400 #a3e635
	"--color-primary-500": "132 204 22", // lime-500 #84cc16
	"--color-primary-600": "101 163 13", // lime-600 #65a30d
	"--color-primary-700": "77 124 15", // lime-700 #4d7c0f
	"--color-primary-800": "63 98 18", // lime-800 #3f6212
	"--color-primary-900": "54 83 20", // lime-900 #365314
	"--color-primary-950": "26 46 5", // lime-950 #1a2e05

	/* Secondary - Tailwind lime */
	"--color-secondary-0": "250 250 250", // neutral-50 #fafafa
	"--color-secondary-50": "247 254 231", // lime-50 #f7fee7
	"--color-secondary-100": "236 252 198", // lime-100 #ecfcc6
	"--color-secondary-200": "217 249 157", // lime-200 #d9f99d
	"--color-secondary-300": "190 242 100", // lime-300 #bef264
	"--color-secondary-400": "163 230 53", // lime-400 #a3e635
	"--color-secondary-500": "132 204 22", // lime-500 #84cc16
	"--color-secondary-600": "101 163 13", // lime-600 #65a30d
	"--color-secondary-700": "77 124 15", // lime-700 #4d7c0f
	"--color-secondary-800": "63 98 18", // lime-800 #3f6212
	"--color-secondary-900": "54 83 20", // lime-900 #365314
	"--color-secondary-950": "26 46 5", // lime-950 #1a2e05

	/* Tertiary - Tailwind lime */
	"--color-tertiary-0": "250 250 250", // neutral-50 #fafafa
	"--color-tertiary-50": "247 254 231", // lime-50 #f7fee7
	"--color-tertiary-100": "236 252 198", // lime-100 #ecfcc6
	"--color-tertiary-200": "217 249 157", // lime-200 #d9f99d
	"--color-tertiary-300": "190 242 100", // lime-300 #bef264
	"--color-tertiary-400": "163 230 53", // lime-400 #a3e635
	"--color-tertiary-500": "132 204 22", // lime-500 #84cc16
	"--color-tertiary-600": "101 163 13", // lime-600 #65a30d
	"--color-tertiary-700": "77 124 15", // lime-700 #4d7c0f
	"--color-tertiary-800": "63 98 18", // lime-800 #3f6212
	"--color-tertiary-900": "54 83 20", // lime-900 #365314
	"--color-tertiary-950": "26 46 5", // lime-950 #1a2e05

	/* Error - Tailwind red */
	"--color-error-0": "254 242 242", // red-50 #fef2f2
	"--color-error-50": "254 226 226", // red-100 #fee2e2
	"--color-error-100": "254 205 205", // red-200 #fecaca
	"--color-error-200": "252 165 165", // red-300 #fca5a5
	"--color-error-300": "248 113 113", // red-400 #f87171
	"--color-error-400": "239 68 68", // red-500 #ef4444
	"--color-error-500": "220 38 38", // red-600 #dc2626
	"--color-error-600": "185 28 28", // red-700 #b91c1c
	"--color-error-700": "153 27 27", // red-800 #991b1b
	"--color-error-800": "127 29 29", // red-900 #7f1d1d
	"--color-error-900": "69 10 10", // red-950 #450a0a
	"--color-error-950": "21 3 3", // custom-darkest-red #150303

	/* Success - Tailwind green */
	"--color-success-0": "240 253 244", // green-50 #f0fdf4
	"--color-success-50": "220 252 231", // green-100 #dcfce7
	"--color-success-100": "187 247 208", // green-200 #bbf7d0
	"--color-success-200": "134 239 172", // green-300 #86efad
	"--color-success-300": "74 222 128", // green-400 #4ade80
	"--color-success-400": "34 197 94", // green-500 #22c55e
	"--color-success-500": "22 163 74", // green-600 #16a34a
	"--color-success-600": "21 128 61", // green-700 #15803d
	"--color-success-700": "22 101 52", // green-800 #166534
	"--color-success-800": "20 83 45", // green-900 #14532d
	"--color-success-900": "12 45 28", // green-950 #0c2d1c
	"--color-success-950": "5 22 12", // custom-darkest-green #05160c

	/* Warning - Tailwind amber */
	"--color-warning-0": "255 251 235", // amber-50 #fffbeb
	"--color-warning-50": "254 243 199", // amber-100 #fef3c7
	"--color-warning-100": "253 230 138", // amber-200 #fde68a
	"--color-warning-200": "252 211 77", // amber-300 #fcd34d
	"--color-warning-300": "251 191 36", // amber-400 #fbbf24
	"--color-warning-400": "245 158 11", // amber-500 #f59e0b
	"--color-warning-500": "217 119 6", // amber-600 #d97706
	"--color-warning-600": "180 83 9", // amber-700 #b45309
	"--color-warning-700": "146 64 14", // amber-800 #92400e
	"--color-warning-800": "120 53 15", // amber-900 #78350f
	"--color-warning-900": "77 34 5", // amber-950 #4d2006
	"--color-warning-950": "49 21 3", // custom-darkest-amber #311503

	/* Info - Tailwind cyan */
	"--color-info-0": "240 253 255", // cyan-50 #f0fdff
	"--color-info-50": "207 250 254", // cyan-100 #cffafe
	"--color-info-100": "165 243 252", // cyan-200 #a5f3fc
	"--color-info-200": "103 232 249", // cyan-300 #67e8f9
	"--color-info-300": "34 211 238", // cyan-400 #22d3ee
	"--color-info-400": "6 182 212", // cyan-500 #06b6d4
	"--color-info-500": "14 116 144", // cyan-600 #0e7490
	"--color-info-600": "21 94 117", // cyan-700 #155e75
	"--color-info-700": "25 81 98", // cyan-800 #194a5e
	"--color-info-800": "24 58 71", // cyan-900 #183a4a
	"--color-info-900": "8 47 70", // cyan-950 #082f49
	"--color-info-950": "7 28 35", // custom-darkest-cyan #071c23

	/* Typography - Tailwind neutral */
	"--color-typography-0": "250 250 250", // neutral-50 #fafafa
	"--color-typography-50": "245 245 245", // neutral-100 #f5f5f5
	"--color-typography-100": "229 229 229", // neutral-200 #e5e5e5
	"--color-typography-200": "212 212 212", // neutral-300 #d4d4d4
	"--color-typography-300": "163 163 163", // neutral-400 #a3a3a3
	"--color-typography-400": "115 115 115", // neutral-500 #737373
	"--color-typography-500": "82 82 82", // neutral-600 #525252
	"--color-typography-600": "64 64 64", // neutral-700 #404040
	"--color-typography-700": "38 38 38", // neutral-800 #262626
	"--color-typography-800": "23 23 23", // neutral-900 #171717
	"--color-typography-900": "10 10 10", // neutral-950 #0a0a0a
	"--color-typography-950": "10 10 10", // neutral-950 #0a0a0a

	/* Outline - Tailwind neutral */
	"--color-outline-0": "250 250 250", // neutral-50 #fafafa
	"--color-outline-50": "245 245 245", // neutral-100 #f5f5f5
	"--color-outline-100": "229 229 229", // neutral-200 #e5e5e5
	"--color-outline-200": "212 212 212", // neutral-300 #d4d4d4
	"--color-outline-300": "163 163 163", // neutral-400 #a3a3a3
	"--color-outline-400": "115 115 115", // neutral-500 #737373
	"--color-outline-500": "82 82 82", // neutral-600 #525252
	"--color-outline-600": "64 64 64", // neutral-700 #404040
	"--color-outline-700": "38 38 38", // neutral-800 #262626
	"--color-outline-800": "23 23 23", // neutral-900 #171717
	"--color-outline-900": "10 10 10", // neutral-950 #0a0a0a
	"--color-outline-950": "10 10 10", // neutral-950 #0a0a0a

	/* Background - Tailwind neutral */
	"--color-background-0": "250 250 250", // neutral-50 #fafafa
	"--color-background-50": "245 245 245", // neutral-100 #f5f5f5
	"--color-background-100": "229 229 229", // neutral-200 #e5e5e5
	"--color-background-200": "212 212 212", // neutral-300 #d4d4d4
	"--color-background-300": "163 163 163", // neutral-400 #a3a3a3
	"--color-background-400": "115 115 115", // neutral-500 #737373
	"--color-background-500": "82 82 82", // neutral-600 #525252
	"--color-background-600": "64 64 64", // neutral-700 #404040
	"--color-background-700": "38 38 38", // neutral-800 #262626
	"--color-background-800": "23 23 23", // neutral-900 #171717
	"--color-background-900": "10 10 10", // neutral-950 #0a0a0a
	"--color-background-950": "10 10 10", // neutral-950 #0a0a0a

	/* Background Special */
	"--color-background-error": "254 241 241", // custom-light-red #FEF1F1
	"--color-background-warning": "255 243 234", // custom-light-amber #FFF3EA
	"--color-background-success": "237 252 242", // custom-light-green #EDFCF2
	"--color-background-muted": "247 248 247", // custom-light-neutral #F7F8F7
	"--color-background-info": "235 248 254", // custom-light-cyan #EBF8FE

	/* Focus Ring Indicator  */
	"--color-indicator-primary": "132 204 22", // lime-500 #84cc16
	"--color-indicator-info": "6 182 212", // cyan-500 #06b6d4
	"--color-indicator-error": "185 28 28", // red-700 #b91c1c
} as const satisfies ColorMap;

type ThemeColorKey = keyof typeof lightThemeMap;
type ThemeColorMap = Record<ThemeColorKey, ColorValue>;

const darkThemeMap = {
	/* Primary - Tailwind lime (Inverted for dark theme) */
	"--color-primary-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-primary-50": "26 46 5", // lime-950 #1a2e05
	"--color-primary-100": "54 83 20", // lime-900 #365314
	"--color-primary-200": "63 98 18", // lime-800 #3f6212
	"--color-primary-300": "77 124 15", // lime-700 #4d7c0f
	"--color-primary-400": "101 163 13", // lime-600 #65a30d
	"--color-primary-500": "132 204 22", // lime-500 #84cc16
	"--color-primary-600": "163 230 53", // lime-400 #a3e635
	"--color-primary-700": "190 242 100", // lime-300 #bef264
	"--color-primary-800": "217 249 157", // lime-200 #d9f99d
	"--color-primary-900": "236 252 198", // lime-100 #ecfcc6
	"--color-primary-950": "247 254 231", // lime-50 #f7fee7

	/* Secondary - Tailwind lime (Inverted for dark theme) */
	"--color-secondary-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-secondary-50": "26 46 5", // lime-950 #1a2e05
	"--color-secondary-100": "54 83 20", // lime-900 #365314
	"--color-secondary-200": "63 98 18", // lime-800 #3f6212
	"--color-secondary-300": "77 124 15", // lime-700 #4d7c0f
	"--color-secondary-400": "101 163 13", // lime-600 #65a30d
	"--color-secondary-500": "132 204 22", // lime-500 #84cc16
	"--color-secondary-600": "163 230 53", // lime-400 #a3e635
	"--color-secondary-700": "190 242 100", // lime-300 #bef264
	"--color-secondary-800": "217 249 157", // lime-200 #d9f99d
	"--color-secondary-900": "236 252 198", // lime-100 #ecfcc6
	"--color-secondary-950": "247 254 231", // lime-50 #f7fee7

	/* Tertiary - Tailwind lime (Inverted for dark theme) */
	"--color-tertiary-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-tertiary-50": "26 46 5", // lime-950 #1a2e05
	"--color-tertiary-100": "54 83 20", // lime-900 #3f6212
	"--color-tertiary-200": "63 98 18", // lime-800 #3f6212
	"--color-tertiary-300": "77 124 15", // lime-700 #4d7c0f
	"--color-tertiary-400": "101 163 13", // lime-600 #65a30d
	"--color-tertiary-500": "132 204 22", // lime-500 #84cc16
	"--color-tertiary-600": "163 230 53", // lime-400 #a3e635
	"--color-tertiary-700": "190 242 100", // lime-300 #bef264
	"--color-tertiary-800": "217 249 157", // lime-200 #d9f99d
	"--color-tertiary-900": "236 252 198", // lime-100 #ecfcc6
	"--color-tertiary-950": "247 254 231", // lime-50 #f7fee7

	/* Error - Tailwind red (Inverted for dark theme) */
	"--color-error-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-error-50": "69 10 10", // red-950 #450a0a
	"--color-error-100": "127 29 29", // red-900 #7f1d1d
	"--color-error-200": "153 27 27", // red-800 #991b1b
	"--color-error-300": "185 28 28", // red-700 #b91c1c
	"--color-error-400": "220 38 38", // red-600 #dc2626
	"--color-error-500": "239 68 68", // red-500 #ef4444
	"--color-error-600": "248 113 113", // red-400 #f87171
	"--color-error-700": "252 165 165", // red-300 #fca5a5
	"--color-error-800": "254 205 205", // red-200 #fecaca
	"--color-error-900": "254 226 226", // red-100 #fee2e2
	"--color-error-950": "254 242 242", // red-50 #fef2f2

	/* Success - Tailwind green (Inverted for dark theme) */
	"--color-success-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-success-50": "12 45 28", // green-950 #0c2d1c
	"--color-success-100": "20 83 45", // green-900 #14532d
	"--color-success-200": "22 101 52", // green-800 #166534
	"--color-success-300": "21 128 61", // green-700 #15803d
	"--color-success-400": "22 163 74", // green-600 #16a34a
	"--color-success-500": "34 197 94", // green-500 #22c55e
	"--color-success-600": "74 222 128", // green-400 #4ade80
	"--color-success-700": "134 239 172", // green-300 #86efad
	"--color-success-800": "187 247 208", // green-200 #bbf7d0
	"--color-success-900": "220 252 231", // green-100 #dcfce7
	"--color-success-950": "240 253 244", // green-50 #f0fdf4

	/* Warning - Tailwind amber (Inverted for dark theme) */
	"--color-warning-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-warning-50": "77 34 5", // amber-950 #4d2006
	"--color-warning-100": "120 53 15", // amber-900 #78350f
	"--color-warning-200": "146 64 14", // amber-800 #92400e
	"--color-warning-300": "180 83 9", // amber-700 #b45309
	"--color-warning-400": "217 119 6", // amber-600 #d97706
	"--color-warning-500": "245 158 11", // amber-500 #f59e0b
	"--color-warning-600": "251 191 36", // amber-400 #fbbf24
	"--color-warning-700": "252 211 77", // amber-300 #fcd34d
	"--color-warning-800": "253 230 138", // amber-200 #fde68a
	"--color-warning-900": "254 243 199", // amber-100 #fef3c7
	"--color-warning-950": "255 251 235", // amber-50 #fffbeb

	/* Info - Tailwind cyan (Inverted for dark theme) */
	"--color-info-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-info-50": "8 47 70", // cyan-950 #082f49
	"--color-info-100": "24 58 71", // cyan-900 #183a4a
	"--color-info-200": "25 81 98", // cyan-800 #194a5e
	"--color-info-300": "21 94 117", // cyan-700 #155e75
	"--color-info-400": "14 116 144", // cyan-600 #0e7490
	"--color-info-500": "6 182 212", // cyan-500 #06b6d4
	"--color-info-600": "34 211 238", // cyan-400 #22d3ee
	"--color-info-700": "103 232 249", // cyan-300 #67e8f9
	"--color-info-800": "165 243 252", // cyan-200 #a5f3fc
	"--color-info-900": "207 250 254", // cyan-100 #cffafe
	"--color-info-950": "240 253 255", // cyan-50 #f0fdff

	/* Typography - Tailwind neutral (Inverted for dark theme) */
	"--color-typography-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-typography-50": "23 23 23", // neutral-900 #171717
	"--color-typography-100": "38 38 38", // neutral-800 #262626
	"--color-typography-200": "64 64 64", // neutral-700 #404040
	"--color-typography-300": "82 82 82", // neutral-600 #525252
	"--color-typography-400": "115 115 115", // neutral-500 #737373
	"--color-typography-500": "163 163 163", // neutral-400 #a3a3a3
	"--color-typography-600": "212 212 212", // neutral-300 #d4d4d4
	"--color-typography-700": "229 229 229", // neutral-200 #e5e5e5
	"--color-typography-800": "245 245 245", // neutral-100 #f5f5f5
	"--color-typography-900": "250 250 250", // neutral-50 #fafafa
	"--color-typography-950": "255 255 255", // custom-white #ffffff

	/* Outline - Tailwind neutral (Inverted for dark theme) */
	"--color-outline-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-outline-50": "23 23 23", // neutral-900 #171717
	"--color-outline-100": "38 38 38", // neutral-800 #262626
	"--color-outline-200": "64 64 64", // neutral-700 #404040
	"--color-outline-300": "82 82 82", // neutral-600 #525252
	"--color-outline-400": "115 115 115", // neutral-500 #737373
	"--color-outline-500": "163 163 163", // neutral-400 #a3a3a3
	"--color-outline-600": "212 212 212", // neutral-300 #d4d4d4
	"--color-outline-700": "229 229 229", // neutral-200 #e5e5e5
	"--color-outline-800": "245 245 245", // neutral-100 #f5f5f5
	"--color-outline-900": "250 250 250", // neutral-50 #fafafa
	"--color-outline-950": "255 255 255", // custom-white #ffffff

	/* Background - Tailwind neutral (Inverted for dark theme) */
	"--color-background-0": "10 10 10", // neutral-950 #0a0a0a
	"--color-background-50": "23 23 23", // neutral-900 #171717
	"--color-background-100": "38 38 38", // neutral-800 #262626
	"--color-background-200": "64 64 64", // neutral-700 #404040
	"--color-background-300": "82 82 82", // neutral-600 #525252
	"--color-background-400": "115 115 115", // neutral-500 #737373
	"--color-background-500": "163 163 163", // neutral-400 #a3a3a3
	"--color-background-600": "212 212 212", // neutral-300 #d4d4d4
	"--color-background-700": "229 229 229", // neutral-200 #e5e5e5
	"--color-background-800": "245 245 245", // neutral-100 #f5f5f5
	"--color-background-900": "250 250 250", // neutral-50 #fafafa
	"--color-background-950": "255 255 255", // custom-white #ffffff

	/* Background Special (Dark theme) */
	"--color-background-error": "69 10 10", // custom-dark-red #450A0A
	"--color-background-warning": "77 34 5", // custom-dark-amber #4D2205
	"--color-background-success": "12 45 28", // custom-dark-green #0C2D1C
	"--color-background-muted": "10 10 10", // neutral-950 #0A0A0A
	"--color-background-info": "8 47 70", // custom-dark-cyan #082F49

	/* Focus Ring Indicator (Dark theme) */
	"--color-indicator-primary": "190 242 100", // lime-300 #bef264
	"--color-indicator-info": "103 232 249", // cyan-300 #67e8f9
	"--color-indicator-error": "248 113 113", // red-400 #f87171
} as const satisfies ThemeColorMap;

const config = {
	light: vars(lightThemeMap),
	dark: vars(darkThemeMap),
};

export { config, lightThemeMap, darkThemeMap };
export type { ThemeColorMap, ThemeColorKey, ColorKey, ColorValue };
