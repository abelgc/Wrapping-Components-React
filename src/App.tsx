import Button from "./components/Button";
import Input from "./components/input";

function App() {
  return (
    <main>
      <Input id="name" label="Your name"  type="text"/>
      <Input id="age" label="Your age" type="number"/>
      <Button el="button">A Button</Button>
      <Button el="anchor" href="www.google.com">A Button</Button>
    </main>);
}

export default App;
