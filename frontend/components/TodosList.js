import styled from 'styled-components'
import Todo from './Todo'
import AddTodo from './AddTodo'

const StyledTodosList = styled.div``

const todos = null

// query todos, map to display
class TodosList extends React.Component {
  render() {
    return (
      <StyledTodosList>
        <AddTodo testAddTodo={this.testAddTodo} />
        {todos && todos.map(todo => <Todo todo={todo} />)}
      </StyledTodosList>
    )
  }
}

export default TodosList
