// polymorphic component
// reason with this Wrapper component is to make it easier to style the container sharing css, logic and common jsx code
import {type ReactNode, type ElementType } from 'react';
import Button from './Button';

// to use generic with componentpropswithoutref we need to make comopnentprops generic

type ContainerProps<C extends ElementType> = { //incomming component identifier
    asProp?: C;
    children: ReactNode;
}& React.ComponentPropsWithoutRef<C>;

export default function Container<T extends ElementType>({asProp, children}: ContainerProps<T>) {
    const Container = asProp || 'div';
    return (
        <Container>
           {children}
        </Container>
    );
}