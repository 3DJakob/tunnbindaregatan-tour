import React, { ReactElement } from 'react'
import Tour from './components/Tour'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
`

function App (): ReactElement {
  return (
    <div className='App'>
      <Title>360 tour demo</Title>
      <Tour />
    </div>
  )
}

export default App
