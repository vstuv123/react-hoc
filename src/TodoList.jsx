import HOC from "./HOC";

// eslint-disable-next-line
const TodoList = ({ data }) => {

// eslint-disable-next-line
    let renderTodos = data.map((todo) => (
      <div key={todo.userId}>
          <p>
              <strong>{todo.title}</strong>
          </p>
      </div>
  ))

  return (
    <div>
      {
        renderTodos
      }
    </div>
  )
}

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;
