import * as React from 'react';

import { classNames } from '@/utils';

interface ButtonProps {
	size?: "regular" | "full";
	type?: "button" | "submit" | "reset";
	text: string;
	onClick?: () => void;
	disabled?: boolean;
	isLoading?: boolean;
	Icon?: (props: React.ComponentProps<"svg">) => JSX.Element;
	customStyle?: React.CSSProperties;
}

const Button = (props: ButtonProps) => {
	const {
		size = "full",
		Icon,
		text,
		onClick,
		disabled = false,
		isLoading = false,
		customStyle,
		type,
	} = props;
	return (
		<button
			type={type}
			onClick={onClick}
			style={customStyle}
			disabled={disabled || isLoading}
			className={classNames(
				size === "regular" ? "w-fit px-9" : "w-full",
				disabled || isLoading ? "opacity-30" : "hover:bg-blue-600",
				"inline-flex rounded-md items-center flex-shrink-0 whitespace-nowrap justify-center border border-transparent font-medium shadow-sm text-white bg-blue-500 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 py-3 transition-all"
			)}
		>
			{isLoading ? (
				<div className={"w-full flex justify-center items-center"}>
					<div
						style={{ borderTopColor: "transparent" }}
						className="w-5 ml-1 h-5 border-4 border-white border-solid rounded-full animate-spin"
					></div>
				</div>
			) : (
				<div className="flex gap-1 items-center">
					{text}
					{Icon && <Icon className="h-6 w-6 mr-1" />}
				</div>
			)}
		</button>
	);
};

export default Button;