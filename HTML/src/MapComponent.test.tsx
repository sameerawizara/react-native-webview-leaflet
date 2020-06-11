import React from "react";
import { render } from "@testing-library/react";
import MapComponent from "./mapComponent";

describe("MapComponent", () => {
  test("it renders", () => {
    const { asFragment } = render(<MapComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
