import React from "react";
import { RelativeTime } from "../packages/react/dist";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
    const app = renderer.create(<RelativeTime time={Date.now()} />);
    const rendered = app.toJSON();
    expect(rendered).toBeTruthy();
    app.unmount();
});
