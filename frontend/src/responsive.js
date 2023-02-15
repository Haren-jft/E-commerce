import {css} from 'styled-components';
export const mobile=(properties)=>{
    return css`
        @media only screen and (max-width:380px){
            ${properties}
        }
    `;
};