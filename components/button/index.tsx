import React from 'react';
import styles from './Button.module.css'

interface ButtonsProps{
  onClick?: () => void,
  children: React.ReactNode,
  disabled?: boolean,
  variant: "outline" | "text",
  color?: "primary" | "warning",
  mtop?: string
}

const Button = ({onClick, children, disabled = false, variant, color, mtop}:ButtonsProps) => {
    return (
       <button
          className={variant === "outline"? styles.button : styles.textButton}
          onClick={onClick}
          disabled={disabled}
          style={{
            backgroundColor: color === "primary" ? "#63879A" : "#E52C2C",
            marginTop: mtop
          }}
        >
          {children}
        </button>
  )
}

export default Button
