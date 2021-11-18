const TodoList = ({ todos, onDelete,onUpdate}) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} >
           <span>{todo.date}</span>
            <span>{todo.value}</span>
            <span>{todo.status}</span>
            <button
              type="button"
              onClick={() => onDelete(todo.id)}
              className="btn btn-success btn-sm m-2">
              delete
            </button>
            <link to ='/todoForm'>
            <button 
              type='button'
              onClick={()=>onUpdate(todo.id)}
              className="btn btn-success btn-sm m-2">
                edit
              </button>
              </link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => onDelete("all")}
        className="btn btn-success btn-sm m-2">
        clear data
      </button>
     
    </div>
  );
};

export default TodoList;
