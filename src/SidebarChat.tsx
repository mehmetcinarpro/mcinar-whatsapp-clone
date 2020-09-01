import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import Avatar from '@material-ui/core/Avatar';
import db from './firebase';
import { Link } from 'react-router-dom';

interface SidebarChatProps {
    addNewChat?: boolean;
    id: string;
    name: string;
}

const SidebarChat: React.FC<SidebarChatProps> = ({
    addNewChat = false,
    id,
    name
}) => {
    const [seed, setSeed] = useState(0);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");
        console.log(roomName);
        if (roomName) {
            db.collection("rooms").add({
                name: roomName
            });
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add new Chat</h2>
            </div>
        );
};

export default SidebarChat;
