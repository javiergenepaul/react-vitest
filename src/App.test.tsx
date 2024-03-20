import { HttpResponse, http } from "msw";
import App from "./App";
import { server } from "./test/mocks/server";
import { render, screen, userEvent } from "./utils";

describe("Test", () => {
  it("testing the vitest", () => {
    expect(true).toBeTruthy();
  });
});

describe("App", () => {
  it("checking whether vite and react text is available", () => {
    render(<App />);
    const text = screen.getByText("Vite + React");
    expect(text).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(<App />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });

  it("api success scenario onload", async () => {
    render(<App />);
    expect(await screen.findByText("Todo List: 1")).toBeInTheDocument();
  });

  it("api error scenario onload", () => {
    render(<App />);
    server.use(
      http.get("https://dummyjson.com/todos", () => {
        return new HttpResponse(null, {status: 401})
      })
    );
    expect(screen.queryByText("Todo List:")).not.toBeInTheDocument();
  });
});
