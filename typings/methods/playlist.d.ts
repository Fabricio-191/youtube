import { Owner } from '../structures/structures.d.ts';
import { Video } from '../';

export interface Playlist{
    ID: string,
    name: string,
    
    views: number,
    itemsQuantity: number,

    description: string,

    thumbnails: [],

	owner: Owner,
	videos: Video[]
}