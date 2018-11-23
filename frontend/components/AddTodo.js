import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { Button } from 'rebass'
import styled from 'styled-components'
import { space } from 'styled-system'

import Error from './ErrorMessage'

const StyledAddTodo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${space};
`

const CREATE_TODO_MUTATION = gql`
  mutation CREATE_TODO_MUTATION($task: String!) {
    createTodo(task: $task) {
      id
    }
  }
`
class AddTodo extends React.Component {
  state = {
    task: ''
  }
  handleChange = e => {
    this.setState({ task: e.target.value })
  }
  render() {
    return (
      <StyledAddTodo mt={[3, 4, 5]}>
        <Mutation mutation={CREATE_TODO_MUTATION} variables={this.state}>
          {(createTodo, { loading, error }) => (
            <form
              onSubmit={async e => {
                e.preventDefault()
                const res = await createTodo()
                console.log(res)
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                Add a todo
                <label htmlFor="title">
                  <input
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <Button type="submit" bg="black" color="white">
                  Add a todo
                </Button>
              </fieldset>
            </form>
          )}
        </Mutation>
      </StyledAddTodo>
    )
  }
}

export default AddTodo
