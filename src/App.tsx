import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";


function App() {
  return (
    <main>
      <Input id="name" label="Your name"  type="text"/>
      <Input id="age" label="Your age" type="number"/>
      <Button>A Button</Button>
      <Button href="www.google.com">A Link</Button>
      <Container asProp={"h2"}>common jsx code</Container>
    </main>);
}

export default App;
