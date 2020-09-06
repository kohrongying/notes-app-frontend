import { render } from "@testing-library/svelte";
import Nav from "./Nav.svelte";

test("renders navbar links", () => {
  const { getByText } = render(Nav);
  const homeElement = getByText(/home/i);
  const aboutElement = getByText(/about/i);

  expect(homeElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();

});
