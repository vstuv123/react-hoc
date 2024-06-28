
import './App.css'
import SearchTodos from './TodoList'
import SearchUsers from './UsersList'


function App() {

  return (
    <>
      <h2>Higher Order Component</h2>
      <div className="section">
        <SearchUsers />
        <SearchTodos />
      </div>
    </>
  )
}

export default App
