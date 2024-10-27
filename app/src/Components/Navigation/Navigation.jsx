import React from 'react'
import Logo from '../Logo/Logo'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Button } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Navigation = () => {
  const navigate = useNavigate();
  const userId = 5;
  const postButtonStyles = {
    width: "100%",
    borderRadius: "29px",
    py: "15px",
    bgcolor: "#1d9bf0"
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    console.log("logout");
    handleClose();
  };
  return (
    <div className='h-screen sticky top-0'>
      <div className="py-5">
        <Logo></Logo>
        <div className="pt-4 space-y-6">
          {navigationMenu.map(item => {
            return (
              <div onClick={(e) => {
                item.title === "Profile" ?
                  navigate(`/profile/${userId}`) :
                  navigate(item.path)
              }} className='cursor-pointer flex space-x-3 items-center' >
                {item.icon}
                <p className='text-xl'>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="py-10 px-4">
          <Button sx={postButtonStyles} variant='contained'>
            Post
          </Button>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className="flex items-center space-x-3">
          <Avatar alt="username" src="https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg">
          </Avatar>
          <div className='flex flex-col'>
            <span>Chaitanya Sharma</span>
            <span className='opacity-70'>@chait.d.sharma</span>
          </div>
        </div>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon></MoreHorizIcon>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleLogout}>logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Navigation