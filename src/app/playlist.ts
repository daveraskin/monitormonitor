import { SpotifyResponse } from './spotify-response'

export class Playlist extends SpotifyResponse {
	url: string;
	tracks: string[];
}