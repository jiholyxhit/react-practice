import Child from "./Child.jsx";
import { ClassComponent, FunctionComponent, ArrowFunctionComponent } from "./Components";

const Hello = () => {
  return <h1>Hello!</h1>
}

function App() {
  return (
    <>
      <Hello/>
      <h2>World</h2>
      <Child/>
      <ClassComponent/>
      <FunctionComponent/>
      <ArrowFunctionComponent/>
    </>
  )
};

export default App;
