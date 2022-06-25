import { OPEN_BOT, USER_RESPONSE } from './chat.types';

const initialState = {
  messages: [
    {
      id: 1,
      text: "Great! Before I connect you to our team, please choose an option below:",
      type: "text",
      class: "text-msg"
    },
    {
      id: 2,
      text: "I want my free list of ideal behavior",
      type: "button",
      class: "button-msg"
    },
    {
      id: 3,
      text: "I want to learn more about pricing",
      type: "button",
      class: "button-msg"
    }
  ],
  isBotOpen: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_BOT:
      return {
        ...state, isBotOpen: action.payload
      };
    case USER_RESPONSE:
      const messages = [...state.messages, {
        id: 4,
        text: "Before we keep going, can I get your business email, just in case we get disconnected?",
        type: "text",
        class: "text-msg"
      }];
      return {
        ...state, messages
      };
    default:
      return state;
  }
}

export default reducer;