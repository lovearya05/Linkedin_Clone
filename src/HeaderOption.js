import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./HeaderOption.css";

function HeaderOption(props) {
  const user = useSelector(selectUser);
  return (
    <div onClick={props.onClick} className='headerOption'>
        {props.Icon && <props.Icon className='headerOption__icon'/>}
        {props.avatar && 
          (<Avatar className='headerOption__icon'>{user?.email[0]}</Avatar>
          )}
        {/* <img src={props.avtar} alt="" /> */}
        <h3 className='headerOption__title'>{props.title}</h3>
    </div>
  )
}

export default HeaderOption
