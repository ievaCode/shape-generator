import React from 'react';

const Message = (props) => {

    return (
            <div className={`message ${props.shape}`} style={{backgroundColor: props.color}}>
                <span>{props.message}</span>
            </div>
    )
};


export default Message


