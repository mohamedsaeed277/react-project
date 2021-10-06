import { css } from "styled-components";

export const Lap = (props) => {
    return css`
        @media only screen and (max-width:1200px){
            ${props}
        }
    `;
};
export const Ipad = (props) => {
    return css`
        @media only screen and (max-width:900px){
            ${props}
        }
    `;
};
export const Mobile = (props) => {
    return css`
        @media only screen and (max-width:600px){
            ${props}
        }
    `;
};
export const Iphone = (props) => {
    return css`
        @media only screen and (max-width:380px){
            ${props}
        }
    `;
};