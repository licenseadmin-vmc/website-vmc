/* eslint-disable react/prop-types */
import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { OasysContext } from './contexts'

const mockStateCtxt = {
  client: jest.fn(),
  environment: {},
  loadingEnv: false,
  loadingContentful: false,
  loadingAPI: false,
  reconnect: false,
  networkStatus: '',
  errorCount: 0,
  counter: false,
  healthTimer: false,
  log: 'Initialize',
  checked: false,
  update: jest.fn(),
  muteStatus: undefined,
  debug: undefined,
  errorAPI: undefined,
  envDate: undefined,
  totalEnvTime: undefined,
  health: undefined,
  contentful: undefined,
  totalContentfulTime: undefined,
  totalContextTime: undefined,
  errorContentful: undefined,
  errorEnv: undefined,
  searchTerm: undefined
}

const Wrapper = ({ children }) => (
  <OasysContext.Provider value={{ mockStateCtxt }}>
    <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
  </OasysContext.Provider>
)

const customRender = (ui, renderOptions) => {
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { customRender as render, mockStateCtxt }
