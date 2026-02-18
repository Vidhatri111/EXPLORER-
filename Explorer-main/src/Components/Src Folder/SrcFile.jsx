import React from 'react'
import './SrcFile.css'
import css_file from '../../assets/CssFile-img.webp'
import jsx_file from '../../assets/jsxFile-img.png'

const SrcFile = () => {
    return (
        <>
            <div className='src-file'>
                <img src={css_file} alt="" /> <p>src.css</p>
            </div>
            <div className='src-file'>
                <img src={jsx_file} alt="" /> <p>src.jsx</p>
            </div>
        </>
    )
}

export default SrcFile

// import React from 'react'
// import './PublicFile.css'

// const PublicFile = () => {
// }

// export default PublicFile

