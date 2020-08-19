import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import  SidebarChat  from './SidebarChat'
import './Sidebar.css'





function Sidebar() {
  return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="siderbar__headerRight">
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="siderbar__searchContainer">
					<SearchOutlinedIcon />
					<input placeholder="Search or start new chat" type="text" />
				</div>
			</div>
			<div className="siderbar__chats">
				<SidebarChat addNewChat/>
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
}

export default Sidebar
