import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { ALL_TODOS_QUERY } from './Todos'

const DELETE_TODO_MUTATION = gql`
  mutation DELETE_TODO_MUTATION($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

class DeleteTodo extends React.Component {
  update = (cache, payload) => {
    // console.log('manually update cache on the client so matches server')
    const data = cache.readQuery({ query: ALL_TODOS_QUERY })
    // console.log('data', data, 'payload', payload)
    // console.log(payload.data.deleteTodo.id)
    data.todoes = data.todoes.filter(
      todo => todo.id !== payload.data.deleteTodo.id
    )
    cache.writeQuery({ query: ALL_TODOS_QUERY, data })
  }

  render() {
    return (
      <Mutation
        mutation={DELETE_TODO_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteTodo, { error }) => (
          <button
            onClick={() => {
              if (confirm(`Are you sure you want to delete this Todo`)) {
                deleteTodo().catch(err => {
                  alert(err.message)
                })
                this.update
              }
            }}
          >
            X
          </button>
        )}
      </Mutation>
    )
  }
}

export default DeleteTodo
