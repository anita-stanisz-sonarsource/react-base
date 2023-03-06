import { render } from '@testing-library/react'
import { ComponentContext } from '../testing-context'

it('should display values', () => {
  const { container } = setupWithElement(<span>Here we go</span>)
  expect(container).toMatchSnapshot()
})

function setupWithElement (underTest: JSX.Element) {
  return render(<ComponentContext.Provider value={{ value: 'none' }}>{underTest}</ComponentContext.Provider>)
}
