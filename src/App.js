import './App.css';
import Crud from "./components/Crud";

export default function App() {
  return <Crud />;
}
























// function sender() {
//   fetch('http://localhost:7777/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(sendData)
//   }).then(response => {
//     console.log(response.status)
//     // response.json();

//   }).then(data => console.log(data))
// }