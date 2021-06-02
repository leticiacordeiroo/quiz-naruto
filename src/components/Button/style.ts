import styled from "styled-components";

interface IPropsStyledButton {
    backgroundColor: string
}
export const StyledButton =  styled.button<IPropsStyledButton> `
    display: block;
    margin: 40vh auto;
    padding: .6rem 3rem;
    font-size: 5rem;   
    background: ${({backgroundColor}) => `${backgroundColor}` }
    
    /* border-radius: 3rem;
    background: #DEC34D;
    border: transparent; */
`;

// background: ${(props) => (props.questions ? "#DEC34D" : var(--gray-500)) };
