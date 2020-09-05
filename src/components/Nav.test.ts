import { render } from "@testing-library/svelte";
import Nav from "./Nav.svelte";

test("renders navbar links", () => {
  const { getByText } = render(Nav);
  const blogElement = getByText(/blog/i);
  const homeElement = getByText(/home/i);
  const aboutElement = getByText(/about/i);

  expect(blogElement).toBeInTheDocument();
  expect(homeElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();

});
