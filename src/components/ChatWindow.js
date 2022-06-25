import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { userResponse } from '../redux/chat/chat.actions';

function ChatWindow() {
  const { messages } = useSelector(state => state.chat);
  const dispatch = useDispatch();
  return (
    <div className="chat-screen">
      <div className="header">
        ZoomInfo
      </div>
      { messages.map(msg => {
        switch(msg.type){
          case 'text':
            return <p key={msg.id} className={msg.class}>{msg.text}</p>
          case 'button':
            return <Button key={msg.id} className={msg.class} onClick={() => dispatch(userResponse())}>{msg.text}</Button>
          default:
            return <p key={msg.id} className={msg.class}>{msg.text}</p>
        }
      })}
    </div>
  )
}

export default ChatWindow;