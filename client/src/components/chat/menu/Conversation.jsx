import { useEffect, useState, useContext } from "react";
import { Box, styled, Divider } from '@mui/material';
import { getUsers } from "../../../service/api";
import { AccountContext } from '../../../context/AccountProvider';
import Convo from "./Convo";

const Conversations = ({text}) => {
    const Component = styled(Box)`
        height: 81vh;
        overflow: overlay;
    `;

    const StyledDivider = styled(Divider)`
        margin: 0 0 0 70px;
        background: #e9edef;
        opacity: 0.6;
    `;

    const [users, setUsers] = useState([]);
    const { account,socket,setActiveUsers } = useContext(AccountContext); 
   

    useEffect(() => {
        const fetchData = async () => {
            let res = await getUsers();
            console.log(res);
           let filteredData=res.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        };
        fetchData();
    }, [text]);

    useEffect(()=>{
        socket.current.emit('addUsers',account);
        socket.current.on("getUsers",users=>{
    setActiveUsers(users);
        });
    },[account]);

    return (
        <Component>
            {users && users.map(user => (
                user.sub !== account.sub &&
                <>
                    <Convo user={user} />
                    <StyledDivider />
                </>
            ))}
        </Component>
    );
};

export default Conversations;
