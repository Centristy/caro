import React from "react";
import App from "./App";
import { render } from '@testing-library/react';


// smoke test

it("renders without crashing", function() {
    render(<App />);
});