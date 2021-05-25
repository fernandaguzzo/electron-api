import styled, { css } from 'styled-components';

export const Card = styled.div`
    background-color: #aaa;
    border: 3px solid red;
    
    & + & {
        margin-top: 15px;
    }

    &:hover {
        background-color: #ccc;
    }

    ${props => props.status && css`
        border: 3px solid green;
    `}
`;

export const Button = styled.button`
    border-width: 0;
    border-radius: 5px;
    background-color: orange;
    color: #fff;
    margin: 5px;
`;
