import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Error from './ErrorMessage'

const UPDATE_TODO_MUTATION = gql`
  mutation UPDATE_TODO_MUTATION($id: ID!, $task: String) {
    updateTodo(id: $id, task: $task) {
      id
      task
    }
  }
`

class UpdateTodo extends React.Component {
  state = {}

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  updateTodo = async (e, updateTodoMutation) => {
    e.preventDefault()
    console.log('updating todo')
    console.log(this.props.id)
    const res = await updateTodoMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    })
    console.log('updated')
    this.props.handleToggle()
  }

  render() {
    return (
      <Mutation mutation={UPDATE_TODO_MUTATION} variables={this.state}>
        {(updateTodo, { loading, error }) => (
          <form onSubmit={e => this.updateTodo(e, updateTodo)}>
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <input
                name="task"
                defaultValue={this.props.task}
                onChange={this.handleChange}
              />
              <button type="submit">sav{loading ? 'ing' : 'e'}</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    )
  }
}

export default UpdateTodo
