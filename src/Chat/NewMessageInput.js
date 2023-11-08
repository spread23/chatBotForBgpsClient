import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {v4 as uuid} from 'uuid';

import {BsSend} from 'react-icons/bs';
import { addMessage, setSelectedConversationId } from '../Dashboard/dashboardSlice';
import { sendConversationMessage } from '../socketConnection/SocketCon';

const NewMessageInput = () => {
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const selectedConversationId = useSelector((state) => state.dashboard.selectedConversationId);

    const conversations = useSelector((state) => state.dashboard.conversations);

    const selectedConversation = conversations.find((c) => c.id === selectedConversationId);

    const proceedMessage = () => {
        const message = {
            aiMessage: false,
            content,
            id: uuid(),
            animate: false,
        };

        console.log(message);

        const conversationId = selectedConversationId === 'new' ? uuid() : selectedConversationId;

        dispatch(addMessage({
            conversationId,
            message,
        }));

        dispatch(setSelectedConversationId(conversationId));

        sendConversationMessage(message, conversationId);

        setContent('');
    };

    const handleSendMessage = () => {
        if(content.length > 0){
            proceedMessage();
        }
    };

    const handleKeyPressed = (event) => {
        if(event.code === 'Enter' && content.length > 0){
            proceedMessage();
        }
    };

    return (
        <div className='new_message_input_container'>
            <input 
                className='new_message_input'
                placeholder='Envia un mensaje...'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyPressed} 
                disabled={selectedConversation && !selectedConversation.messages[selectedConversation.messages.length - 1].aiMessage}
            />
            <div className='new_message_icon_container' onClick={handleSendMessage}>
                <BsSend color='gray' />
            </div>
        </div>
    );
}

export default NewMessageInput;