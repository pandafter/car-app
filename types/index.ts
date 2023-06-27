import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClik?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit'
    
}