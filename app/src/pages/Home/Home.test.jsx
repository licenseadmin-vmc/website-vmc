import React from 'react'

import { render, screen } from '../../testUtils'
import Home from '.'

jest
  .mock('react-tooltip', () => {
    return function ReactTooltip () {
      return null
    }
  })
  .mock('../../components/Landing', () => {
    return function Landing () {
      return <>Mocked_Landing</>
    }
  })

test('it renders with correct content', () => {
  render(<Home />)

  expect(screen.getByText(/Home/)).toBeInTheDocument()
  expect(screen.getByText(/Mocked_Landing/)).toBeInTheDocument()
})
