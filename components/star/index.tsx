import React from 'react';
import styles from './Star.module.css'

interface StarProps{
    id: number,
    children: React.ReactNode,
    value: number,
    maxLife: number
}

const Star = ({id, children, value, maxLife}:StarProps) => {
    return (
        <>
            <div className={styles.inputTitle} key={id}>
                {children}:
            </div>
            <div className={styles.stars}>
            {Array.from(Array(value), () => {
                return <div className={styles.star} style={{backgroundColor: "yellow"}}/>
            })}
            {Array.from(Array(maxLife-value), () => {
                return <div className={styles.star} style={{backgroundColor: "gray"}}/>
            })}
            </div>
        </>
    )
}

export default Star
