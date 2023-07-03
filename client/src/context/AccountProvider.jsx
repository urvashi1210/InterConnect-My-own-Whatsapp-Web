import {createContext,useState,useEffect,useRef} from 'react';
import {io} from 'socket.io-client';

export const AccountContext=createContext(null);//initial value=null

const AccountProvider=({children})=>{

const [account,setAccount]=useState();
const [showloginButton, setShowloginButton] = useState(true);
const [showlogoutButton, setShowlogoutButton] = useState(false);
const [person,setPerson]=useState({});
const [activeUsers,setActiveUsers]=useState([]);
const [newMessageFlag,setNewMessageFlag]=useState(false);

const socket=useRef();

useEffect(()=>{
    socket.current=io('ws://localhost:9000');//connection established (io function takes your backend's address)
},[])
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