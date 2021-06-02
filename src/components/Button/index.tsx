import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    label: string,
    icon: boolean,
    backgroundColor: string 
}

export const Button: React.FC<ButtonProps> = ({label, icon, backgroundColor, ...props}) => {
    return (
        <>
            <StyledButton 
                backgroundColor={backgroundColor}
                {...props}
            >
                {label}
            </StyledButton>
        </>
    )
}

export default Button;


