import { render } from "@testing-library/react";
import Footer from ".";

test('Renders correctly', () => {
    const {getByTestId } = render(<Footer></Footer>)
    expect(getByTestId(/footer/)).toBeInTheDocument();
  });