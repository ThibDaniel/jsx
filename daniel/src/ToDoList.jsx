export const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        setTodo([...todo, newTodo.trim()]);
        setNewTodo(''); 
      }
    };
  
    const handleReset = () => {
      setTodo([]); 
    };
  
    const handleRemoveTodo = (indexToRemove) => {
      setTodo(todo.filter((_, index) => index !== indexToRemove));
    };
  
    return (
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add To do</button>
        <button onClick={handleReset}>Reset</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };