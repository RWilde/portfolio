import { render } from "@testing-library/react";
import NavBar from ".";

test('Renders correctly', () => {
    const {getByTestId } = render(<NavBar></NavBar>)
    expect(getByTestId(/header/)).toBeInTheDocument();
  });