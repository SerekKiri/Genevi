import styled, { css } from 'styled-components'

export const style = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: #202020;
    color: #fff;
    overflow: hidden;
  }
`

export const AppWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
