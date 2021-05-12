import { render } from "@testing-library/react";
import Projects from ".";

test('Renders correctly', () => {
    const {getByTestId } = render(<Projects></Projects>)
    expect(getByTestId(/Projects/)).toBeInTheDocument();
  });