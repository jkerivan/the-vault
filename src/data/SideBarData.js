import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Upload',
        path:'/upload',
        icon: <AiIcons.AiOutlineUpload />,
        cName: 'nav-text'
    },
    {
        title: 'Library',
        path:'/library',
        icon: <AiIcons.AiFillLike />,
        cName: 'nav-text'
    }
]

