import { render, fireEvent } from "@testing-library/react";
import BoxList
 from "./BoxList";
 
// smoke test
it('renders without crashing', function() {
  render(<BoxList />);
});

// snapshot test
it('matches snapshot', function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

// add a box, uses form to submit
it('should add a box to the page', function() {
    const { container } = render(<BoxList />);

    const bgColor = container.querySelector('input[name="backgroundColor"]');
    const width = container.querySelector('input[name="width"]');
    const height = container.querySelector('input[name="height"]');
    fireEvent.change(bgColor, { target: { value: 'green'}});
    fireEvent.change(width, { target: { value: '100'}});
    fireEvent.change(height, { target: { value: '100'}});
    const submit = container.querySelector('.new-box-form');
    fireEvent.submit(submit);

    expect(
        container.querySelector('div[style="background-color: green; width: 100px; height: 100px;"]')
    ).toBeInTheDocument();
}); 

// remove a box
it('should remove a box from the page', function() {
    const { container } = render(<BoxList />);
    expect(
        container.querySelector('div[style="background-color: salmon; width: 100px; height: 100px;"]')
    ).toBeInTheDocument();

    const remove = container.querySelector('.Remove');
    fireEvent.click(remove);

    expect(
        container.querySelector('div[style="background-color: salmon; width: 100px; height: 100px;"]')
    ).not.toBeInTheDocument();
});