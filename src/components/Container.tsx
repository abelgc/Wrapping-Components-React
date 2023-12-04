// polymorphic component
// reason with this Wrapper component is to make it easier to style the container sharing css, logic and common jsx code
import {type ReactNode, type ElementType } from 'react';

// to use generic with componentpropswithoutref we need to make comopnentprops generic
//incomming component identifier
type ContainerProps<T extends ElementType> = { 
    asProp?: T;
    children: ReactNode;
}& React.ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({asProp, children}: ContainerProps<C>) {
    const Container = asProp || 'div';
    return (
        <Container>
           {children}
        </Container>
    );
}