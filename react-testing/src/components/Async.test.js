import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Test suite for async actions", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "1", title: "First Post" }, {id: '2', title: 'My second post'}],
    });
    render(<Async />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
