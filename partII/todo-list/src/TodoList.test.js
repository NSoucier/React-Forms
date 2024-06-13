import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
 
// smoke test
it('renders without crashing', function() {
  render(<TodoList />);
});

// snapshot test
it('matches snapshot', function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

// add a todo, uses form to submit
it('should add a new todo to the page', function() {
    const todos = render(<TodoList />);
    const input = todos.container.querySelector('input[name="newTodo"]');
    fireEvent.change(input, { target: { value: 'Test add todo'}});
    const submit = todos.container.querySelector('.addTodo');
    fireEvent.submit(submit);

    // should clear form and show todo on page
    expect(todos.getByText('Test add todo')).toBeInTheDocument();
    expect(todos.getByPlaceholderText('Add a new task here')).toHaveValue("");

});

// remove a todo
it('should remove a todo from the list', function() {
    const todos = render(<TodoList />);

    expect(todos.getByText('Make my first todo')).toBeInTheDocument();

    const remove = todos.container.querySelector('.remove');
    fireEvent.click(remove);

    expect(todos.queryByText('Make my first todo')).not.toBeInTheDocument();
});
