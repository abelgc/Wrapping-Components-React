import { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps= ComponentPropsWithoutRef<"form"> &{
    onSave: (value: unknown)=> void;
};


export default function Forms({onSave, children, ...otherProps}: FormProps){

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();      
        //gather all info from input field and group them together in a data object
        const formData = new FormData(event.currentTarget); //to make this work you need name prop in input
        const data = Object.fromEntries(formData); // to access data you need to use data.name now on
        onSave(data);
        event.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps}>
            {children}
        </form>
    );
}