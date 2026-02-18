import React from 'react'
import './PublicFile.css'
import css_file from '../../assets/CssFile-img.webp'
import jsx_file from '../../assets/jsxFile-img.png'

const PublicFile = () => {
  return (
    <>
       <div className='public-file'>
            <img src={css_file} alt="" /> <p>public.css</p>
        </div>
       <div className='public-file'>
            <img src={jsx_file} alt="" /> <p>public.jsx</p>
        </div>

        
    </>
  )
}

export default PublicFile
