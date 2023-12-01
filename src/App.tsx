import Button from "./components/Button";
import Input from "./components/input";

function App() {
  return (
    <main>
      <Input id="name" label="Your name"  type="text"/>
      <Input id="age" label="Your age" type="number"/>
      <Button>A Button</Button>
      <Button href="www.google.com">A Link</Button>
    </main>);
}

export default App;
