import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<"button">;

type AnchorProps = ComponentPropsWithoutRef<"a">;

// Predicate function
function isAnchorProps(props:AnchorProps | ButtonProps): props is AnchorProps {
  return "ref" in props;
}

export default function Button( props : ButtonProps | AnchorProps) {
   // const {el, ...otherProps} = props;
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}