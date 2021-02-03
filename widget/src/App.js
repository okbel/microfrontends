import './App.css';
const BASE_PATH = process.env.NODE_ENV === "development" ? '' : 'https://next-microfrontend-widget.vercel.app'

function App() {
  console.log('Widget Mounted.')
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${BASE_PATH}/logo.svg`} className="App-logo" alt="logo" height="100px" width="100px"/>
      </header>
    </div>
  );
}

export default App;
