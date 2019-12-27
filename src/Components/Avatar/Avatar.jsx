import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const MyAvatar=props=>{
    return(
        <Avatar onClick={props.onClick} alt={props.alt} src={props.src} style={{width: `${props.width}`, height:`${props.height}`}}/>
    )
}

export default MyAvatar