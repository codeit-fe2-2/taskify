import { User } from './user';

export interface PostLoginResponse {
	accessToken: string;
	user: User;
}
