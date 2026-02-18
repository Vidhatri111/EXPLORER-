import React, { useState } from 'react'
import './PublicFolder.css'
import folderOpen from '../../assets/folder-open.png'
import folderClose from '../../assets/folder-close.png'
import PublicFile from './PublicFile'

const PublicFolder = () => {
    const [image, setImage] = useState(folderClose);
        const [isOpen, setOpen] = useState(false);

    const changeImage = () => {
        setImage(image === folderClose ? folderOpen : folderClose);
        setOpen(prev=>!prev)
    };

    return (
        <>
            <div className='public-folder' onClick={changeImage}>
                <img src={image} alt="" /> <p>public</p>
            </div>

             {isOpen && (
                <>
                    <PublicFile />
                </>
            )}

        </>
    )
}

export default PublicFolder
