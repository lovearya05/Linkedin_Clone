import React, {useEffect, useState} from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

// import firebase from 'firebase';
// import firebase from '../';
// import {db} from "./firebase";
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from "./firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {
  const user = useSelector(selectUser);
    const [input,setInput] = useState('');
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        firebase.firestore()
        .collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map((doc)=>({
                id: doc.id,
                data: doc.data(),
                userId:doc.data().userId
            }
            )))
        ))       
    },[])

    const sendPost = (e)=>{
        e.preventDefault();

        firebase.firestore().collection('posts').add({
            name: user.displayName,
            userId:firebase.auth().currentUser.uid,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")

    }

    // console.log(user);

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form action="">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>

            <div className="feed__inputOptions">
                <InputOption Icon={AddPhotoAlternateIcon} title="Photo" color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write Artical" color="#7FC15E"/>
            </div>
        </div>


        {/* posts */}
        {posts.map(({id,userId, data: {name,description, message, photoUrl} })=>(
            <Post
                key = {id}
                id={id}
                name = {name}
                description = {description}
                message = {message}
                photoUrl = {photoUrl}
                userId={userId}
            />
        ))}

        {/* <Post name='Love Arya' description='This is a test' message='Wow this worked '/> */}
    </div>
  )
}

export default Feed
