import {Search as SearchIcon} from '@mui/icons-material'
import { Box,InputBase,styled } from '@mui/material';

const Component=styled(Box)`
    background:#fff;
    height:45px;
    border-bottom:1px solid #F2F2F2;
    display:flex;
    align-items:center;
    width:100%;
`;

const Wrapper=styled(Box)`
background-color:#f0f2f5;
position:relative;
border-radius:10px;
margin-left:8px;
margin-right:8px;
width:100%;
`;

const Icon=styled(Box)`
position:absolute;
height:100%;
padding:6px 10px;
color:#919191;
`;

const InputField=styled(InputBase)`
width:100%;
padding:16px;
height:15px;
padding-left:65px;
font-size:14px;
`;

const Search=({setText})=>{
    return(
       <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize='small'/>
                </Icon>
                <InputField
                placeholder="Search or start a new chat"
                onChange={(e)=>setText(e.target.value)}
                />
            </Wrapper>
       </Component> 
    )
}

export default Search;