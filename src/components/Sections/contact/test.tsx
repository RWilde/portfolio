import { render } from "@testing-library/react";
import Contact from ".";
import Projects from ".";

test('Renders correctly', () => {
    const {getByTestId } = render(<Contact></Contact>)
    expect(getByTestId(/contact/)).toBeInTheDocument();
  });