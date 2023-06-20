import { Box } from "@mui/material";

//components
import Header from "./Header"
import Search from "./Search";
import Conversation from "./Conversation";

const Menu=()=>{
    return(
       <Box>
        <Header/>
        <Search/>
        <Conversation/>
       </Box> 
    )
}

export default Menu;