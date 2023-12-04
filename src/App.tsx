import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";


function App() {

  function handleSave(data:unknown){
    const extractedData = data as {name: string, age: string}; //fields in inputs can b presented number but extracted are always strings
    console.log(extractedData.name, extractedData.age);
  }
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      {/* <Input id="name" label="Your name"  type="text"/> */}
      {/* <Input id="test" label="Test" ref={inputRef}/> */}
      <Form onSave={handleSave}>
        <Input id="name" label="Your name"  type="text"/>
        <Input id="age" label="Age" type="number"/> 
        <p>
        <Button>Save</Button>
        </p>
      </Form>
      
      <Button href="www.google.com">A Link</Button>
      <Container asProp={"h2"}>common jsx code</Container>
    </main>);
}

export default App;
