import React from "react";

type Props = {
	icon: React.ReactNode;
	title: string;
	showTitle?: () => void;
	onClick?: () => void;
	extraClassname?: string;
};
export const SidebarItem: React.FC<Props> = ({
	icon,
	title,
	extraClassname,
	onClick,
}) => {
	return (
		<div
			className={`flex items-center gap-3 px-1  py-1 text-base text-white md:text-[14px] ${extraClassname} cursor-pointer`}
			onClick={onClick}
		>
			<span className="text-xl">{icon}</span>
			<span>{title}</span>
		</div>
	);
};
