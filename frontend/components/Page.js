import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Meta from './Meta'
import Header from './Header'
const theme = {
  spacing: '.5 rem'
}

const StyledPage = styled.div`
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
`

const Inner = styled.div``

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}
