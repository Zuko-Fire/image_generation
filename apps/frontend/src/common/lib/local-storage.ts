import * as locales from '../../locales/en.json'

export const readTokenFromLS = () => {
  try {
    return localStorage.getItem('token')
  } catch {
    return null
  }
}

export const writeTokenFromLS = (token: string) => {
  try {
    localStorage.setItem('', token)
  } catch {
    return locales.TOKEN_ERROR_WR_LS
  }
}

export const removeTokenFromLS = () => {
  try {
    localStorage.removeItem('token')
  } catch {
    return locales.TOKEN_ERROR_RM_LS
  }
}
