import { render } from "@testing-library/react";
import React from "react";
import About from ".";

test('Renders correctly', () => {
    const {getByTestId } = render(<About></About>)
    expect(getByTestId(/about/)).toBeInTheDocument();
  });