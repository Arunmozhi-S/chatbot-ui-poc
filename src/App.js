import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';

import ChatBtn from './components/ChatBtn';
import Home from './components/Home';
import ChatWindow from './components/ChatWindow';

import './styles.css';

function App() {
  const { isBotOpen } = useSelector(state => state.chat);
  return (
    <Container maxWidth="sm">
      <Home/>
      {isBotOpen ? <ChatWindow /> : <ChatBtn />}
    </Container>
  )
}

export default App