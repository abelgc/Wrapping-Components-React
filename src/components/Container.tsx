// polymorphic component
// reason with this Wrapper component is to make it easier to style the container sharing css, logic and common jsx code

import {type ReactNode, type ElementType } from 'react';

type ContainerProps = {
    asProp: ElementType;
    children: ReactNode;
}

export default function Container({asProp, children}: ContainerProps) {
    const Container = asProp;
    return (
        <Container>
           {children}
        </Container>
    );
}