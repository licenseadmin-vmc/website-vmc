const { scrollTo } = window

global.APP_NAME = 'owa-web-oasys-support'
global.APP_VERSION = '21.01.1'
global.APP_REPO = 'https://gitlab.1wa.org/oasys/owa-web-oasys-support/'
global.APP_TEST = 'jest'

beforeAll(() => {
  window.scrollTo = jest.fn()
})

afterAll(() => {
  window.scrollTo = scrollTo
})
