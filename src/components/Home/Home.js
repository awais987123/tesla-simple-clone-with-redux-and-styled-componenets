import React from 'react';
import styled from 'styled-components';
import Section from '../Section/Section';
function Home() {
    return (
        <Container>
            <Section
            title ="Model S"
            description= "Order Online For Touchless Delivery"
            Lefttxt="Custom Order"
            Righttxt="Existing Inventory"
            bgimage="model-s.jpg"

            />
            <Section
            title ="Model Y"
            description= "Order Online For Touchless Delivery"
            Lefttxt="Custom Order"
            Righttxt="Existing Inventory"
            bgimage="model-y.jpg"

            />
            
            <Section
            title ="Model 3"
            description= "Order Online For Touchless Delivery"
            Lefttxt="Custom Order"
            Righttxt="Existing Inventory"
            bgimage="model-3.jpg"

            />
            
           
            <Section
            title ="Model X"
            description= "Order Online For Touchless Delivery"
            Lefttxt="Custom Order"
            Righttxt="Existing Inventory"
            bgimage="model-x.jpg"

            />
            <Section
            title ="Lower Cast Solar Panel in USA"
            description= "Money Back Gurantee"
            Lefttxt="Custom Order"
            Righttxt="Existing Inventory"
            bgimage="solar-panel.jpg"

            />
            <Section
            title ="Lower Cast Solar New Roof"
            description= "Money Back Gurantee"
            Lefttxt="Custom Order"
            Righttxt="Existing Inventory"
            bgimage="solar-roof.jpg"

            />
            <Section
            title ="Accessories"
            description= "Money Back Gurantee"
            Lefttxt="Shop Now"
            bgimage="accessories.jpg"

            />
        </Container>
    )
}

export default Home;

const Container= styled.div `
height:100vh;
`
