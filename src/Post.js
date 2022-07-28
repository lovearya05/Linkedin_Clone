import React from 'react';
import './Post.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOption from './InputOption';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import firebase from "./firebase";
// import { useSelector } from 'react-redux';
// import { selectUser } from './features/userSlice';
// import { useEffect } from 'react';


function Post({id,photoUrl, name, description, message, userId}) {

  // const user = useSelector(selectUser);
  const deletePost = ()=>{
    firebase.firestore()
    .collection("posts").doc(id).delete()
    .then(()=>{
      alert("Deleted");
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div className='post'>
        <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
            {/* <AccountCircleIcon /> */}
            
            <div className="post__inf">
              <div className="nameDelete">
                <h2>{name}</h2>
               {firebase.auth().currentUser.uid === userId 
                ?
                <DeleteIcon onClick={deletePost}>Delete</DeleteIcon>   
                :
                null}    
              </div>
                <p>{description}</p> 
            </div>
        </div>

      <div className="post__body">
            <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="grey"/>
        <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="grey"/>
        <InputOption Icon={ShareIcon} title="Share" color="grey"/>
        <InputOption Icon={SendIcon} title="Like" color="grey"/>
      </div>

    </div>
  )
}

export default Post
