import React, { useEffect, useState } from 'react'
import './FirstFolder.css'
import folderOpen from '../../assets/folder-open.png'
import folderClose from '../../assets/folder-close.png'
import PublicFolder from '../Public Folder/PublicFolder.jsx'
import SrcFolder from '../Src Folder/SrcFolder.jsx'
const FirstFolder = () => {

    const [image, setImage] = useState(folderClose);
    const [isOpen, setOpen] = useState(false);

    const changeImage = () => {
        setImage(image === folderClose ? folderOpen : folderClose);
        setOpen(prev => !prev);
    };

    return (
        <>
            <div className='first-folder' onClick={changeImage}>
                <img src={image} alt="" /> <p>Explorer</p>
            </div>

              {isOpen && (
                <>
                    <PublicFolder />
                    <SrcFolder />
                </>
            )}

        </>
    )
}

export default FirstFolder
