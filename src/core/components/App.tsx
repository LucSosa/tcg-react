import { Button, Flex, Text } from '@radix-ui/themes';
import './App.css';
import { Header } from './Header';

function App() {
  return (
  //  <div className="App">
  //    <Header></Header>
  //  </div>
  <Flex direction="column" gap="2">
  <Text>Hello from Radix Themes :)</Text>
  <Button>Let's go</Button>
  </Flex>

  );
}

export default App;
