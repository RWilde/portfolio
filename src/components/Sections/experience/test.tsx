import { render } from "@testing-library/react";
import Experience from ".";
import Projects from ".";

test('Renders correctly', () => {
    const {getByTestId } = render(<Experience></Experience>)
    expect(getByTestId(/experience/)).toBeInTheDocument();
  });