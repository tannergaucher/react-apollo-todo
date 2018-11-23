import { Box, Card, Lead } from 'rebass'
import DeleteTodo from './DeleteTodo'
import UpdateTodo from './UpdateTodo'

class Todo extends React.Component {
  state = {
    edit: false
  }

  handleToggle = () => {
    this.setState({ edit: !this.state.edit })
  }

  render() {
    return (
      <Box>
        <Card
          p={2}
          borderRadius={2}
          boxShadow="0 0 16px rgba(0, 0, 0, .25)"
          mt={[2, 3, 4]}
        >
          {this.state.edit ? (
            <UpdateTodo
              task={this.props.todo.task}
              handleToggle={this.handleToggle}
              id={this.props.todo.id}
            />
          ) : (
            <div>
              <Lead fontSize={[2, 3, 4]}>{this.props.todo.task}</Lead>
              <button onClick={this.handleToggle}>Edit</button>
            </div>
          )}
          <DeleteTodo id={this.props.todo.id} />
        </Card>
      </Box>
    )
  }
}

export default Todo
