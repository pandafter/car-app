"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image'


const CustomButton = ({title, containerStyles, handleClik, btnType}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClik}>

        <span className={`flex-1`}>
            {title}
        </span>
    </button>
    
  )
}

export default CustomButton