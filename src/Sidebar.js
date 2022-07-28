import React from 'react';
// import {Avtar} from 
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import sideTop from "./sideTop.jpg";
import './Sidebar.css';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

function Sidebar() {
    const  user = useSelector(selectUser);

    const recentItem = (topic)=>{
        return (<div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>)
    }

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={sideTop} alt="" />
            {/* <AccountCircleIcon className='sidebar__avtar'/> */}
            <Avatar src={user.photoUrl} className="sidebar__avtar"> 
            {user.email[0]}</Avatar> 
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,534 </p>
            </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,338 </p>
                </div>
        </div>
            

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('software_engineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
    </div>
  )
}

export default Sidebar
