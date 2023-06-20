import { Box } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider.jsx";

// Components
import ChatHeader from './ChatHeader.jsx';
import Messages from './Messages.jsx';

const ChatBox = () => {
    const { person } = useContext(AccountContext);

    return (
        <Box style={{height:'75%'}}>
            <ChatHeader person={person}/>
            <Messages person={person} />
        </Box>
    );
};

export default ChatBox;
