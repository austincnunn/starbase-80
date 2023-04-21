export interface IServiceCatalog {
	category: string;
	bubble?: boolean;
	services: IService[];
}

export interface IService {
	name: string;
	uri: string;

	description?: string;
	icon?: string;
	iconColor?: string;
	iconBG?: string;
	iconBubble?: boolean;
}
