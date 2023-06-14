import { Dialog,Box,styled } from "@mui/material";

//components
import Menu from "./menu/Menu"
import EmptyChat from "./chat/EmptyChat";

const Component=styled(Box)`
display:flex;
`;

const LeftComponent=styled(Box)`
min-width:450px;
`;

const RightComponent=styled(Box)`
min-width:300px;
width:73%;
height:100%;
border-left:1px solid rgba(0,0,0,0.14);
`;

const dialogStyle={
    height:'96%',
    width:'100%',
    margin:'20px',
    maxWidth:'100%',
    borderRadius:0,
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}

const ChatDialog=()=>{
    return(
       <Dialog open={true}
       PaperProps={{sx:dialogStyle}} 
       hideBackdrop={true}
       maxwidth={'md'}
       >

        <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            <RightComponent>
                <EmptyChat/>
            </RightComponent>
        </Component>
       </Dialog>
    )
}

export default ChatDialog;