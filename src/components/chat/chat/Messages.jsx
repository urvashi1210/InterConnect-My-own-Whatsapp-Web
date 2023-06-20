import { Box, styled } from '@mui/material';

//components
import Footer from './Footer.jsx'

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size:50%;
    `;
//using url instead of img tag makes it easy to display messages on the background 

const Component=styled(Box)`
height:80vh;
overflow-y:scroll;
`;

const Messages=()=>{
    return(
       <Wrapper>
            <Component>

            </Component>
            <Footer/>
       </Wrapper>
    )
}

export default Messages;