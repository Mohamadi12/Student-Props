import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <Student name="Mohamed" age={20} isStudent={true}/>
      <Student name="Fatma" age={23} isStudent={false}/>
      <Student name="Amina" age={22} isStudent={true}/>
      <Student name="Fadila" age={30} isStudent={true}/>
    </div>
  );
}

export default App;
