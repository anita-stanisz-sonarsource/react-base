import { render } from '@testing-library/react'
import { ComponentContext } from '../testing-context'

it('should display values 1', () => {
  const { container } = setupWithElement(<span>Here we go</span>)
  expect(container).toMatchSnapshot()
})

it('should display values 2', () => {
  const { container } = setupWithElement(<span>Here we go again</span>)
  expect(container).toMatchSnapshot()
})

it('should display values 3', () => {
  const { container } = setupWithElement(<span>Here we go again and again</span>)
  expect(container).toMatchSnapshot()
})

function setupWithElement (underTest: JSX.Element) {
  return render(<ComponentContext.Provider value={{ value: 'none', onClick: () => {} }}>{underTest}</ComponentContext.Provider>)
}
