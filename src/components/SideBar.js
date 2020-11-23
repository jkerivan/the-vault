import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../data/SideBarData'
import { PlaylistData } from '../data/PlaylistData'


const SideBar = () => {
    return (
        <div className="sidebar-container">
            <nav className='sidebar-nav'>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </nav>

            <div className="sidebar-playlist"> PLAYLISTS
                {PlaylistData.map((item, index) => {
                    return (
                        <li key={index} className='playlist-text'>
                            <Link to={item.path}>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    )
                })}
            </div>
        </div>
    )

}
export default SideBar