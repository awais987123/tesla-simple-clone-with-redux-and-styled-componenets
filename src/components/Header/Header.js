import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
    return (
        <Container>
        <a>
<img src="/images/logo.svg"  alt="" />      
        </a>

        <Menu>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model Y</a></p>
        <p><a href="#">Model X</a></p>
        
        
        </Menu>
        <RightMenu>
        <p><a href="#">Shop</a></p>
        <p><a href="#">Tesla Account</a></p>
        <CustomMenu />
        
        </RightMenu>
        </Container>
    )
}

export default Header
const Container = styled.div `
z-index:16;
min-height:60px;
position:fixed;
padding:0 20px;
display:flex;
justify-content:space-between;
top:0;
left:0;
right:0;
align-items:center;

`

const Menu=styled.div `
display:flex;
justify-content:center;
align-items:center;
flex:1;
a{
    font-weight:750;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}

@media (max-width:768px){
    display:none;
}

`

const RightMenu=styled.div `
display:flex;
align-items:center;
a{
    font-weight:750;
    text-transform:uppercase;
    margin-right:10px;
    flex-wrap:nowrap;
}


`

const CustomMenu = styled(MenuIcon) `
cursor:pointer;

`
const BurgerNav= styled.div `
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
z-index:16;
life-style:none;
padding:20px;display:flex; flex-direction:column;
text-align:start;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
}
a{
    font-weight:600;
}


`