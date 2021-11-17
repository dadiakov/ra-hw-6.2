export default function App() {
  return (
    <button onClick={sender}>Отправить запрос</button>
  );
}

const sendData = {
  "id": 1,
  "content": "То, что было введно в поле ввода"
}

function sender() {
  fetch('http://localhost:7777/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sendData)
  }).then(response => response.json()).then(data => console.log(data))
}