import Todos from './components/Todos';
import './css/main.css';
import DisplayTodos from './components/DisplayTodos';




function App() {
  return (

     
           <div className="App">
         
              <h1>Todo App</h1>  
  
                 <Todos />
                 <DisplayTodos/>
                
           </div>
        
      
  );
}

export default App;
