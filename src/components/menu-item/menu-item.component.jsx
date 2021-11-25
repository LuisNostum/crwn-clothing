import React from 'react'
import './menu-item.styles.scss'
import {useNavigate} from 'react-router-dom'
const MenuItem = ({ title, imageUrl, size, linkUrl}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`${linkUrl}`, { replace: true });
    }
    return (
        <div
            className={`${size} menu-item`}

            onClick={handleClick}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOW NOW</span>
            </div>
        </div>
    )
}

export default MenuItem
