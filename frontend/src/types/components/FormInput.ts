export interface Option {
	value: string;
	label: string;
}

export enum InputType {
	Url = "url",
	Text = "text",
	Search = "search",
	Numeric = "numeric",
	None = "none",
	Tel = "tel",
	Email = "email",
	Decimal = "decimal",
}

export interface FormInputProps {
	label?: string;
	labelStyles?: string;
	name: string;
	id: string;
	type: string;
	additionalClasses?: string;
	placeholder: string;
	placeholderStyleOptions?: { [index: string]: boolean | string | number };
	value?: string;
	autoComplete: string;
	onChange: (e: any) => void;
	pattern?: string;
	password?: boolean;
	additionalAttributes?: { [propName: string]: any };
	select?: boolean;
	selectStyleOptions?: { [index: string]: boolean | string | number };
	textarea?: boolean;
	rows?: number;
	cols?: number;
	disabled?: boolean;
	required: boolean;
	minLength?: number;
	maxLength?: number;
	options?: Option[];
	inputMode?: InputType;
}
