import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton'
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useStateValue } from './StateProvider';

const Sidebar: React.FC = () => {
    const [rooms, setRooms] = useState<{
        id: string;
        data: firebase.firestore.DocumentData;
    }[]>([]);
    const { state: { user } } = useStateValue();


    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => (
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ));

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL ?? undefined} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search or start a new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat id="0" name="" />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;