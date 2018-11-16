import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const ErrorStyles = styled.div``

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null

  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {error.message.replace('GRaphQL error: ', '')}
        </p>
      </ErrorStyles>
    ))
  }

  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  )
}

DisplayError.defaultProps = {
  error: {}
}

DisplayError.prototypes = {
  error: PropTypes.object
}

export default DisplayError
