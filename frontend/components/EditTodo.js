import { Button } from 'rebass'

const EditTodo = props => (
  <Button bg="black" color="white" onClick={props.toggleEdit}>
    Edit
  </Button>
)

export default EditTodo
