
import './App.css';
import SomeRandomComponent from "./components/SomeRandomComponent"


function App() {
  return (
    <div>
      <SomeRandomComponent user={{firstName:"John",lastName: "Doe", age: 45, hair: "Black" }}/> 
      <SomeRandomComponent user={{firstName:"John",lastName: "Smith", age: 88, hair: "Brown" }}/>
      <SomeRandomComponent user={{firstName:"Millard",lastName: "Fillmore", age: 50, hair: "Brown" }}/> 
      <SomeRandomComponent user={{firstName:"Maria",lastName: "Smith", age: 62, hair: "Brown" }}/> 
    </div>
  );
}

export default App;
