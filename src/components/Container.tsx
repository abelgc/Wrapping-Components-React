// polymorphic component
// reason with this Wrapper component is to make it easier to style the container sharing css, logic and common jsx code

import React, { ElementType } from 'react';

type ContainerProps = {
    asProp: ElementType;
}

export default function Container({asProp}: ContainerProps) {
    const Container = asProp || 'div';
    return (
        <Container>
           
        </Container>
    );
}