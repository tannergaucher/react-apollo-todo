import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import Header from './Header'
import Meta from './Meta'

// theme here
const theme = {}

const StyledPage = styled.div`
  /* background: white; */
  /* color: ${props => props.theme.black}; */
`

const Inner = styled.div`
  /* margin: 0 auto;
  padding: 2rem; */
`

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
