import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";


function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      {/* <Input id="name" label="Your name"  type="text"/> */}
      <Input id="test" label="Test" ref={inputRef}/>
      <Button>A Button</Button>
      <Button href="www.google.com">A Link</Button>
      <Container asProp={"h2"}>common jsx code</Container>
    </main>);
}

export default App;
