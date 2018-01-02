import { RelativeTime } from "../packages/vue/dist";

import { mount } from "vue-test-utils";

it("renders without crashing", () => {
    const app = mount(RelativeTime, {
        propsData: {
            time: Date.now(),
        },
    });
    const rendered = app.html();
    expect(rendered).toBeTruthy();
    app.destroy();
});
