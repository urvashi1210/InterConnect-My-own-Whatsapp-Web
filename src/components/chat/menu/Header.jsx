import { useContext,useState } from 'react';

import { Box,styled } from "@mui/material";
import {Autorenew,Chat as MessageIcon} from '@mui/icons-material';

import { AccountContext } from "../../../context/AccountProvider";

//components
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer'


const Component=styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-Items:center;
`;

const Wrapper=styled(Box)`
margin-left:auto;
&>*{
    margin-left:2px;
    padding:8px;
    color:#000;
};
&;first-child{
    font-size:22px;
    margin-right:8px;
    margin-top:3px;
}
`;

const Image=styled('img')({
   height:40,
   width:40,
   borderRadius:'50%' 
});

const Header=()=>{

    const {account}=useContext(AccountContext);

    const [openDrawer,setOpenDrawer]=useState(false);

    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }

  return(
    <>
    <Component>
        <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()}/>
        <Wrapper>
            <Autorenew/>
            <MessageIcon/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/> 
        </Wrapper>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )  
}

export default Header;