import { create } from 'zustand'

import { removeTokenFromLS } from '../lib/local-storage'
import type { User } from '../dto'

interface State {
  token?: string;
  user: User | null;
}

interface Store extends State {
  api: {
    setToken: (token?: string) => void;
    setUser: (user: User | null) => void;
    exit: () => void;
  };
}

export const useAuth = create<Store>((setState) => ({
  user: null,
  api: {
    setUser: (user) => setState(() => ({ user })),
    setToken: (token?: string) => setState({ token }),
    exit: () => {
      removeTokenFromLS()
      setState({ user: null, token: undefined })
    }
  }
}))
