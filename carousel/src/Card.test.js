import React from "react";
import Card from "./Card";
import { render } from '@testing-library/react';

// smoke test

it("renders without crashing", function() {
    render(<Card />);
});