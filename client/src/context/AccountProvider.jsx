import {createContext,useState,useEffect,useRef} from 'react';
import {io} from 'socket.io-client';
import dotenv from 'dotenv';
dotenv.config();

export const AccountContext=createContext(null);//initial value=null

const AccountProvider=({children})=>{

const [account,setAccount]=useState();
const [showloginButton, setShowloginButton] = useState(true);
const [showlogoutButton, setShowlogoutButton] = useState(false);
const [person,setPerson]=useState({});
const [activeUsers,setActiveUsers]=useState([]);
const [newMessageFlag,setNewMessageFlag]=useState(false);

const socket=useRef();

useEffect(() => {
    // Determine the WebSocket URL based on the current environment
    const socketURL =
      process.env.NODE_ENV === 'production'
        ? 'https://interconnect-my-own-whatsapp-web-socket.onrender.com'
        : 'ws://localhost:9000';

    socket.current = io(socketURL);

    return () => {
      // Clean up the socket connection when the component unmounts
      socket.current.disconnect();
    };
  }, []);

// useEffect(() => {
//     socket.current = io('https://interconnect-my-own-whatsapp-web-socket.onrender.com'); // updated socket URL
//   }, []);

//blank array dependency-once 

return(
    <AccountContext.Provider value={{
        account,
        setAccount,
        person,
        setPerson, 
        showloginButton,
        setShowloginButton,
        showlogoutButton,
        setShowlogoutButton,
        socket,
        activeUsers,
        setActiveUsers,
        newMessageFlag,
        setNewMessageFlag
    }}>
         {children}
    </AccountContext.Provider>
   
)
}

export default AccountProvider;