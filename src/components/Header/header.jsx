import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'
import './header.css'

export default function Header () {
  return (
    <div className='header-container'>
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon"/>
      </IconButton>
      <img src='/images/tinder.png' alt='tinder_img' className='header_logo' />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"/>
      </IconButton>
    </div>
  )
}
