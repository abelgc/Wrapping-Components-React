import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
    onSave: (value: unknown) => void;
};

export type FormHandle={
    clear: () => void;
}

const Form = forwardRef<FormHandle, FormProps>(function Form({ onSave, children, ...otherProps }, ref) {
    const form = useRef<HTMLFormElement>(null);
    //function to expose callable component in another place in the app
    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
            }
        };
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //gather all info from input field and group them together in a data object
        const formData = new FormData(event.currentTarget); //to make this work you need name prop in input
        const data = Object.fromEntries(formData); // to access data you need to use data.name now on
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={form}>
            {children}
        </form>
    );
});

export default Form;