import styled from "styled-components";

export const BUTTON = styled.button`
font-size:20px;
padding:10px;
text-align:center;
border-radius:10px;
cursor:pointer;
background-color: ${({bgColor})=> (bgColor ? bgColor:"red")};
&:hover {
    background-color:green;
  }
`

export const BIGBUTTON = styled(BUTTON)`
font-size:40px;
`

export const TITLE = styled.h3`
font-size:${({fontSize})=> (fontSize?fontSize:"20")}px;
color:green;
`
