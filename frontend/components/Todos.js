import styled from 'styled-components'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Todo from './Todo'

const TodosList = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  max-width: 50px; */
  /* max-width: ${props => props.theme.maxWidth}; */
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// use perpage, first, skip for pagination
const perPage = 100

const ALL_TODOS_QUERY = gql`
  query ALL_TODOS_QUERY( $first: Int = ${perPage}) {
    todoes(first: $first, orderBy: createdAt_DESC, skip: 0) {
      id
      task
    }
  }
`

// query todos, map to display
class Todos extends React.Component {
  render() {
    return (
      <Query query={ALL_TODOS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          // console.log(data)
          return (
            <Center>
              {data.todoes.map(todo => (
                <Todo todo={todo} key={todo.id} />
              ))}
            </Center>
          )
        }}
      </Query>
    )
  }
}

export default Todos
export { ALL_TODOS_QUERY }
