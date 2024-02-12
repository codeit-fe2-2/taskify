import { User } from './user';

export interface LoginFormElement extends HTMLFormElement {
	email: HTMLInputElement;
	password: HTMLInputElement;
}

export interface SignupFormElement extends LoginFormElement {
	nickname: HTMLInputElement;
	ToS: HTMLInputElement;
}

export interface PostLoginResponse {
	accessToken: string;
	user: User;
}

export interface PostSignResponseData {
	message: string;
}

export interface PostLoginRequestConfigs {
	email: string;
	password: string;
}

export interface PostSignupRequestConfigs extends PostLoginRequestConfigs {
	nickname: string;
}
