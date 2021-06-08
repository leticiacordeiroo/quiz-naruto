import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: boolean,
    backgroundColor: string 
}

export const Button: React.FC<ButtonProps> = ({icon, backgroundColor, ...props}) => {
    return (
        <>
            <StyledButton 
                backgroundColor={backgroundColor}
                {...props}
            >
            </StyledButton>
        </>
    )
}

export default Button;


