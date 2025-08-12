/** @format */

import React from "react";
import { Svg, type SvgProps } from "react-native-svg";
import { createIcon } from "./create-icon";
import { cssInterop } from "react-native-css-interop";

export type PrimitiveIconProps = {
	height?: number | string;
	width?: number | string;
	fill?: string;
	color?: string;
	size?: number | string;
	stroke?: string;
	as?: React.ElementType;
	className?: string;
	classNameColor?: string;
	style?: SvgProps["style"];
	ref?: React.Ref<Svg>;
};

// PrimitiveIcon
export const PrimitiveIcon: React.FC<PrimitiveIconProps> = ({
	ref,
	height,
	width,
	fill,
	color,
	classNameColor,
	size,
	stroke = "currentColor",
	as: AsComp,
	style,
	...props
}) => {
	const finalColor = color ?? classNameColor;
	const sizeProps = React.useMemo(() => {
		if (size) return { size };
		if (height || width) return { height, width };
		return {};
	}, [size, height, width]);

	const colorProps = {
		fill: fill === "currentColor" ? finalColor : fill,
		stroke: stroke === "currentColor" ? finalColor : stroke,
	};

	if (AsComp) {
		return (
			<AsComp
				ref={ref}
				style={style}
				{...sizeProps}
				{...colorProps}
				{...props}
			/>
		);
	}

	return <Svg ref={ref} {...sizeProps} {...colorProps} {...props} />;
};

export const UIIcon = createIcon({
	Root: PrimitiveIcon,
}) as React.ForwardRefExoticComponent<
	React.ComponentPropsWithoutRef<typeof PrimitiveIcon> &
		React.RefAttributes<React.ComponentRef<typeof Svg>>
>;

cssInterop(UIIcon, {
	className: {
		target: "style",
		nativeStyleToProp: {
			height: true,
			width: true,
			fill: true,
			color: "classNameColor",
			stroke: true,
		},
	},
});
