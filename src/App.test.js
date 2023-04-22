import { render, screen , fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import App from "./App";

describe("Emoji Search Test", () => {

  let header;
  let emoji;
  let input;
  let click;
  let parent;
  let items;
  
  beforeEach(() => {

    render(<App />);
    header=screen.getByText("Emoji Search")
    emoji = "Grimacing";
    input = screen.getByRole("textbox");
    click = screen.getAllByText("Click to copy emoji").at(0);
    parent = click.parentElement;
    items = screen.getAllByText("Click to copy emoji");

  });

  test("Header renders with correct text", () => {
    expect(header).toBeInTheDocument();
  });

  test("Emoji list rendering successfully", () => {
   
    expect(items.length).toEqual(20);
  });
  
  test("Filters working", () => {
    fireEvent.change(input, { target: { value: emoji } });
    expect(screen.getByText(emoji)).toBeInTheDocument();
  });

  test("Emoji can be copied", () => {
    expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(
      0
    );
  });

})
