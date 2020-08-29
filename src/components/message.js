import React from 'react';

function Message(props){
    const {counterValue} = props;
    return(
        <h1>Counter is : {counterValue}</h1>
    )
}

export default Message;