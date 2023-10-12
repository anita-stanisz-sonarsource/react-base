import { render } from "@testing-library/react";
import { Comp, useBlah } from "../useBlah";

jest.mock("../useBlah", () => ({
  ...jest.requireActual("../useBlah"),
  useBlah: jest.fn(() => ({ data: [] }))
}))

beforeEach(() => {
  jest.clearAllMocks();
})

it('shekjf', () => {
  const { container } = render(<Comp />);
  expect(container).toMatchSnapshot();
})

it('awdjgyawd', () => {
  jest.mocked(useBlah).mockReturnValue({ data: ['test1', 'test2'], error: undefined })
  const { container } = render(<Comp />);
  expect(container).toMatchSnapshot();
})
