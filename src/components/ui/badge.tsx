/** @format */

import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import {
	useStyleContext,
	withStyleContext,
} from "@gluestack-ui/nativewind-utils/withStyleContext";
import React from "react";
import { Text, View } from "react-native";
import { UIIcon, type PrimitiveIconProps } from "./icon/primitive";

const SCOPE = "BADGE";

const badgeStyle = tva({
	base: "flex-row items-center rounded-sm data-[disabled=true]:opacity-50 px-2 py-1",
	variants: {
		action: {
			error: "bg-background-error border-error-300",
			warning: "bg-background-warning border-warning-300",
			success: "bg-background-success border-success-300",
			info: "bg-background-info border-info-300",
			muted: "bg-background-muted border-background-300",
		},
		variant: {
			solid: "",
			outline: "border",
		},
		size: {
			sm: "",
			md: "",
			lg: "",
		},
	},
});

const badgeTextStyle = tva({
	base: "text-typography-700 font-body font-normal tracking-normal uppercase",

	parentVariants: {
		action: {
			error: "text-error-600",
			warning: "text-warning-600",
			success: "text-success-600",
			info: "text-info-600",
			muted: "text-background-800",
		},
		size: {
			sm: "text-2xs",
			md: "text-xs",
			lg: "text-sm",
		},
	},
	variants: {
		isTruncated: {
			true: "web:truncate",
		},
		bold: {
			true: "font-bold",
		},
		underline: {
			true: "underline",
		},
		strikeThrough: {
			true: "line-through",
		},
		sub: {
			true: "text-xs",
		},
		italic: {
			true: "italic",
		},
		highlight: {
			true: "bg-yellow-500",
		},
	},
});

const badgeIconStyle = tva({
	base: "",
	parentVariants: {
		action: {
			error: "text-error-600",
			warning: "text-warning-600",
			success: "text-success-600",
			info: "text-info-600",
			muted: "text-background-800",
		},
		size: {
			sm: "h-3 w-3",
			md: "h-3.5 w-3.5",
			lg: "h-4 w-4",
		},
	},
});

const ContextView = withStyleContext(View, SCOPE);

type BadgeProps = Prettify<
	React.ComponentProps<typeof ContextView> & VariantProps<typeof badgeStyle>
>;

const Badge: React.FC<BadgeProps> = ({
	children,
	action = "muted",
	variant = "solid",
	size = "md",
	className,
	...props
}) => {
	return (
		<ContextView
			{...props}
			className={badgeStyle({ action, variant, class: className })}
			context={{
				action,
				variant,
				size,
			}}>
			{children}
		</ContextView>
	);
};

type BadgeTextProps = Prettify<
	React.ComponentProps<typeof Text> & VariantProps<typeof badgeTextStyle>
>;

const BadgeText: React.FC<BadgeTextProps> = ({
	children,
	className,
	size,
	...props
}) => {
	const { size: parentSize, action: parentAction } = useStyleContext(
		SCOPE,
	) as VariantProps<typeof badgeTextStyle>;

	return (
		<Text
			{...props}
			className={badgeTextStyle({
				parentVariants: {
					size: parentSize,
					action: parentAction,
				},
				size,
				class: className,
			})}>
			{children}
		</Text>
	);
};

type BaseBadgeIconProps = PrimitiveIconProps &
	VariantProps<typeof badgeIconStyle>;
type BadgeIconProps = Prettify<
	| BaseBadgeIconProps
	| (SafeOmit<BaseBadgeIconProps, "size"> & { size?: number })
>;

const BadgeIcon: React.FC<BadgeIconProps> = ({
	className,
	size,
	fill = "transparent",
	...props
}) => {
	const { size: parentSize, action: parentAction } = useStyleContext(
		SCOPE,
	) as VariantProps<typeof badgeIconStyle>;

	if (typeof size === "number") {
		return (
			<UIIcon
				{...props}
				className={badgeIconStyle({ class: className })}
				fill={fill}
				size={size}
			/>
		);
	}

	if (
		(props?.height !== undefined || props?.width !== undefined) &&
		size === undefined
	) {
		return (
			<UIIcon
				{...props}
				fill={fill}
				className={badgeIconStyle({ class: className })}
			/>
		);
	}

	return (
		<UIIcon
			{...props}
			fill={fill}
			className={badgeIconStyle({
				parentVariants: {
					size: parentSize,
					action: parentAction,
				},
				size,
				class: className,
			})}
		/>
	);
};

export { Badge, BadgeIcon, BadgeText };
export type { BadgeIconProps, BadgeProps, BadgeTextProps };
