import styled, { css } from 'styled-components'

export const style = css`
  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

export const AppWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
