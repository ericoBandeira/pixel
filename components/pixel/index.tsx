import React from 'react';
import styles from './Pixel.module.css'

interface PixelProps{
    color?: string,
    square?: boolean,
    media?: number
}

const Pixel = ({color, square, media=0}:PixelProps) => {
    return (
        <div className={styles.pixelBody} style={{ backgroundColor: color }}>
        <div>
            <div className={styles.pixelEye} style={!square?{borderRadius:"50%"}:{borderRadius:"0"}}>
                <div className={styles.pixelPupil} style={!square?{borderRadius:"50%"}:{borderRadius:"0"}}/>
            </div>
            <div className={styles.pixelEye} style={!square?{borderRadius:"50%"}:{borderRadius:"0"}}>
                <div className={styles.pixelPupil} style={!square?{borderRadius:"50%"}:{borderRadius:"0"}}/>
            </div>
        </div>
        {media === 3 ?
            <div className={styles.mouth}>
            <svg width="82" height="25" viewBox="0 0 82 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="79" height="22" fill="black" stroke="black" strokeWidth="3"/>
            </svg>
            </div>
        : <div className={styles.mouth} style={media < 3 ? { transform: "rotate(180deg)" } : {}}>
            <svg width="117" height="48" viewBox="0 0 117 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15.5" y="15.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
            <rect x="75.5" y="15.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
            <rect x="89.5" y="1.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
            <rect x="1.5" y="1.5" width="26" height="25" fill="black" stroke="black" strokeWidth="3"/>
            <rect x="30.5" y="24.5" width="58" height="22" fill="black" stroke="black" strokeWidth="3"/>
            </svg>
            </div>}
        </div>
    )
}

export default Pixel
