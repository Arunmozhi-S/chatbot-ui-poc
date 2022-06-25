import { OPEN_BOT, USER_RESPONSE } from './chat.types';

export const openBot = (payload) => {
  return {
    type: OPEN_BOT,
    payload
  }
}

export const userResponse = (payload) => {
  return {
    type: USER_RESPONSE,
    payload
  }
}