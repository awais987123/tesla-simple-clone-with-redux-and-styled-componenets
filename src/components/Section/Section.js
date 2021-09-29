import React from 'react'
import styled from 'styled-components';
import Fade  from "react-reveal/Fade";
function Section({title, description, Lefttxt, Righttxt,bgimage}) {
    return (
        <Wrap  bcimage={bgimage}>
        <Fade bottom>
            <ItemText>
            <h1>{title}</h1>
            <h2>{description}</h2>
            </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
            <LeftButton>
            {Lefttxt}
            </LeftButton>
            {Righttxt && <RightButton>
                {Righttxt}
                </RightButton>
                }
            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
            </Wrap>
    )
}

export default Section;

const Wrap=styled.div `
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url('./images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props=> `url("./images/${props.bcimage}")`};

`
const ItemText =styled.div `
text-align:center;
padding-top:15vh;
`

const ButtonGroup=styled.div `
display:flex;
margin-bottom:30px;
@media (max-width :768px){
    flex-direction:column;
}
`
const LeftButton=styled.div `
background-color: rgba(23, 26, 32, 0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
font-size:15px;
cursor:pointer;
margin:8px;

`
const RightButton=styled(LeftButton) `

background:white;
opacity:0.65;
color:black;
`
const Buttons=styled.div ``

const DownArrow=styled.img `
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;

`