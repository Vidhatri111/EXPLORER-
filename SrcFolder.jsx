import React, { useState } from 'react'
import './SrcFolder.css'
import folderOpen from '../../assets/folder-open.png'
import folderClose from '../../assets/folder-close.png'
import SrcFile from './SrcFile.jsx'

const SrcFolder = () => {
    const [image, setImage] = useState(folderClose);
    const [isOpen, setOpen] = useState(false);

    const changeImage = () => {
        setImage(image === folderClose ? folderOpen : folderClose);
        setOpen(prev => !prev)
    };

    return (
        <>
            <div className='src-folder' onClick={changeImage}>
                <img src={image} alt="" /> <p>src</p>
            </div>

            {isOpen && (
                <SrcFile />
            )}
        </>
    )
}

export default SrcFolder
