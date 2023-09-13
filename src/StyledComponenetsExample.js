import styled,{css} from "styled-components";

export const Title = styled.h1 `
font-size: 3rem;
font-weight: 600;
text-decoration: underline;
${props=>props.theme==='dark' &&
    css`
    background-color: black;
    color: white;
    &:hover{
        background-color: blue;    }
    `}
`
