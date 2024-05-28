export type ButtonProps = {
	type: 'button';
	id: string;
	text: string;
	color?: string;
	bgColor?: string;
};

export type ImgProps = {
	type: 'image';
	id?: string;
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export type ListItemProps = {
	id: string;
	title: string;
	description?: string;
	src?: string;
};

export type ListProps = {
	type: 'list';
	id: string;
	items: ListItemProps[];
};

export type TextProps = {
	type: 'text';
	id: string;
	text: string;
	color?: string;
	align?: 'center' | 'left' | 'right';
};

export type BlockProps = {
	block: ButtonProps | ImgProps | ListProps | TextProps
}

export type PageProps = {
	id: string;
	blocks: BlockProps[];
}

export type FileProps = {
	file: {
		name: string;
		bgColor: string;
		pages: PageProps[]
	}
}

export type FunnelProps = {
	name: string;
	bgColor: string;
	pages: PageProps[]

}

export type FileUploadProps = {
	onFileDrop: (json: FunnelProps) => void;
}

export type SidebarProps = FileProps & {
	currentFunnelPage: number;
}

export type HeaderProps = {
	hasFile: boolean;
	onButtonClick: () => void;
}

export const isPage = (value: any): value is PageProps =>
	typeof value.id === 'string' &&
	Array.isArray(value.blocks)

export const isFunnel = (value: any): value is FunnelProps =>
	Array.isArray(value.pages) &&
	value.pages.every(isPage);