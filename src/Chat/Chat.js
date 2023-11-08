import React from 'react';
import { UseSelector, useSelector } from 'react-redux';
import Messages from './Messages';
import NewMessageInput from './NewMessageInput';

const ChatLogo = () => {
    return (
        <div className='chat_gpt_logo_container'>
            <p className='chat_gpt_logo'>
                Chatbot for Bgps
            </p>
        </div>
    );
}

const Chat = () => {
    const selectedConversationId = useSelector((state) => state.dashboard.selectedConversationId);

    return (
        <div className='chat_container'>
        {
            !selectedConversationId ? (<ChatLogo />) :
            (
                <div className='chat_selected_container'>
                    <Messages />
                    <NewMessageInput />
                </div>
            )
        }
            
        </div>
    )
}

export default Chat;