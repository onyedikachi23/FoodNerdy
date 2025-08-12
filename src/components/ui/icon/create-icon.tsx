/** @format */

import React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { ColorValue, ViewProps } from "react-native";
import { isObject } from "@/lib/utils";

export interface IconProps extends ViewProps {
	fill?: ColorValue;
	stroke?: ColorValue;
	color?: ColorValue;
	ref?: React.Ref<Svg>;
	type?: "svg" | "font";
	size?: string | number;
}

interface ICreateIconOptions {
	viewBox?: string;
	path?: React.ReactElement<IconProps>;
	d?: string;
	displayName?: string;
	defaultProps?: React.PropsWithChildren;
}

const ChildPath = ({
	element,
	fill,
	stroke,
}: {
	element: React.ReactElement<IconProps>;
	fill?: ColorValue;
	stroke?: ColorValue;
}) => {
	if (!element) {
		return null;
	}
	if (element.type === React.Fragment) {
		return element;
	}
	const fillColor = fill ?? "currentColor";
	const pathStrokeColor = stroke ?? "";

	// eslint-disable-next-line @eslint-react/no-clone-element
	return React.cloneElement(element, {
		fill: fillColor,
		stroke: pathStrokeColor,
	});
};

export const createIcon = <TIconProps extends IconProps>({
	Root,
	path,
	d,
	...initialProps
}: { Root: React.ComponentType<TIconProps> } & ICreateIconOptions) => {
	const Icon = ({ ref, ...props }: TIconProps) => {
		const finalProps = { ...initialProps, ...props };

		const {
			stroke = "currentColor",
			fill,
			color,
			role = "img",
			type,
			size,
			...resolvedProps
		} = finalProps;

		let children = path;
		if (d && (!path || Object.keys(path).length === 0)) {
			children = <Path fill="currentColor" d={d} />;
		}

		let sizeProps = {};
		if (type === "font") {
			if (
				"sx" in resolvedProps &&
				isObject(resolvedProps.sx) &&
				"h" in resolvedProps.sx
			) {
				sizeProps = { ...sizeProps, fontSize: resolvedProps.sx.h };
			}
			if (size) {
				sizeProps = { ...sizeProps, fontSize: size };
			}
		}

		const colorProps = {
			color,
			stroke,
			fill,
		};

		const childrenForRoot = React.useMemo(() => {
			if (children) {
				return (
					<G>
						{
							// eslint-disable-next-line @eslint-react/no-children-map
							React.Children.map(children, (child, index) => {
								return (
									<ChildPath
										key={child.key ?? index}
										element={child}
										{...child.props}
									/>
								);
							})
						}
					</G>
				);
			}
			return null;
		}, [children]);

		const rootProps = {
			...resolvedProps,
			...colorProps,
			...sizeProps,
			role,
			ref,
		} as TIconProps;

		return <Root {...rootProps}>{childrenForRoot}</Root>;
	};
	return Icon;
};
