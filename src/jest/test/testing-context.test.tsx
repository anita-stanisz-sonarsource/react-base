import { render } from '@testing-library/react';
import { ComponentContext, ComponentContextShape } from '../testing-context';

it('should display values', () => {
    const {container} = setupWithElement(<span>Here we go</span>);
    expect(container).toMatchSnapshot();
})

function mockComponentContext(
    overrides: Partial<ComponentContextShape> = {}
  ): ComponentContextShape {
    return {
      value: 'none',
      onClick: () => {},
      ...overrides,
    };
  }

function setupWithElement(underTest: JSX.Element) {
  return render(<ComponentContext.Provider value={mockComponentContext()}>{underTest}</ComponentContext.Provider>);
}
