import React from 'react';
import { useDispatch } from 'react-redux';
import {AiOutlineDelete} from 'react-icons/ai';
import { deleteConversations as deleteConversationsFromStore } from '../Dashboard/dashboardSlice';
import { deleteConversations } from '../socketConnection/SocketCon';

const DeleteConversationsButton = () => {
    const dispatch = useDispatch();

    const handleDeleteConversation = () => {
        dispatch(deleteConversationsFromStore([]));
        deleteConversations();
    }
    return (
        <div className='list_item delete_conv_button' onClick={handleDeleteConversation}>
            <div className='list_item_icon'><AiOutlineDelete color='white' /></div>
            <p className='list_item_text'>Eliminar chats</p>
        </div>
    );
}

export default DeleteConversationsButton;