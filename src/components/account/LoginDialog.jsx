import { useContext } from 'react';
import {Dialog,Box,Typography,List,ListItem,styled} from '@mui/material';

import {qrCodeImage} from "../../constants/data";
import { AccountContext } from '../../context/AccountProvider';
import {GoogleLogin} from '@react-oauth/google';

import jwt_decode from 'jwt-decode';


const Component=styled(Box)`
display:flex;
`

const Container=styled(Box)`
padding:56px 0 56px 56px
`
// Since img is not a material UI component, use it as a string
const QRCode=styled('img')({
    height:264,
    width:264,
    margin:'50px 0px 0px 300px',
})

const Title=styled(Typography)`
font-size:30px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-left:70px;
margin-bottom:25px;
`

const StyledList=styled(List)`
&>li{
    padding:0;
    margin-left:100px;
    margin-top:15px;
    font-size:18px;
    line-height:30px;
    color:#111111;
}
`

const dialogStyle={
    height:'96%',
    marginTop:'27%',
    width:'85%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}

const LoginDialog=()=>{

    const {setAccount}=useContext(AccountContext);

    const onLoginSuccess=(res)=>{
        const decoded=jwt_decode(res.credential);
        setAccount(decoded);
    }

    const onLoginError=(res)=>{
        console.log('Login failed',res);
    }

    return(
       <Dialog
            open={true}
            PaperProps={{sx:dialogStyle}}
            hideBackdrop={true}
            >
            <Component>
                <Container>
                    <Title>Use WhatsApp on your computer</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone.</ListItem>
                        <ListItem>2. Tap Menu ⁝ or Settings ◎ and select Linked Devices.</ListItem>
                        <ListItem>3. Tap to link a device.</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the code.</ListItem>
                    </StyledList>
                </Container>
                <Box fontStyle={{position:'relative'}}>
                        <QRCode src={qrCodeImage} alt="qr code"/>
                        <Box fontStyle={{position:'absolute',top:'40%',transform:'translateX(128%)'}}>
                            <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                            />
                        </Box>
                </Box>
            </Component>
       </Dialog>
    )
}

export default LoginDialog;