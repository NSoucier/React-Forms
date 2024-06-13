import { render, fireEvent } from "@testing-library/react";
import Box from "./Box.js";

// smoke test
it('renders without crashing', function() {
  render(<Box />);
});

// snapshot test
it('matches snapshot', function() {
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});