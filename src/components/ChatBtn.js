import { useDispatch } from 'react-redux';

import { openBot } from '../redux/chat/chat.actions';

import ChatIcon from '@mui/icons-material/Chat';
import Fab from '@mui/material/Fab';

function ChatBtn() {
  const dispatch = useDispatch();
  return (
    <div className="chat">
      <Fab color="primary" variant="extended" onClick={() => dispatch(openBot(true))}>
        <ChatIcon sx={{ mr: 1 }} />
        Hello, Let's chat!
      </Fab>
    </div>
  )
}

export default ChatBtn;