import { createContext, ReactNode, useContext, useState } from 'react';

import { User } from '../types/user';

interface AuthContextValue {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextValue>({
	user: null,
	setUser: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('반드시 AuthProvider 안에서 사용해야 합니다.');
	}

	return context;
}
