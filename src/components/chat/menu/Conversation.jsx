import { useEffect,useState,useContext } from "react"

import {Box,styled,Divider} from '@mui/material'

import { getUsers } from "../../../service/api"

import {AccountContext} from '../../../context/AccountProvider'

import Convo from "./Convo"

//components
const Conversations=()=>{

const Component=styled(Box)`
height:81vh;
overflow:overlay;
`;    

const StyledDivider=styled(Divider)`
margin:0 0 0 70px;
background:#e9edef;
opacity:0.6;
`;

const [users,setUsers]=useState([]);

    const {account}=useContext(AccountContext); 

    useEffect(()=>{
        const fetchData=async ()=>{
            let res=await getUsers();
            setUsers(res);
        }
        fetchData();
    },[]);

    return(
        <Component>{
            users.map(user=>(
                user.sub!==account.sub&&
                <>
                <Convo user={user}/>
                <StyledDivider/>
                </>
            ))
            }
            </Component>
    )
}

export default Conversations;