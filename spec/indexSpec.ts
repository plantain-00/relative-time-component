import { getRelativeTime } from "../dist/common";

it("", () => {
    expect(getRelativeTime(Date.now() + 1000, null)).toEqual("in a few seconds");
    expect(getRelativeTime(Date.now() - 1000, null)).toEqual("a few seconds ago");

    expect(getRelativeTime(Date.now() + 44 * 1000, null)).toEqual("in a few seconds");
    expect(getRelativeTime(Date.now() - 44 * 1000, null)).toEqual("a few seconds ago");

    expect(getRelativeTime(Date.now() + 45 * 1000, null)).toEqual("in 1 minute");
    expect(getRelativeTime(Date.now() - 45 * 1000, null)).toEqual("1 minute ago");

    expect(getRelativeTime(Date.now() + 89 * 1000, null)).toEqual("in 1 minute");
    expect(getRelativeTime(Date.now() - 89 * 1000, null)).toEqual("1 minute ago");

    expect(getRelativeTime(Date.now() + 90 * 1000, null)).toEqual("in 2 minutes");
    expect(getRelativeTime(Date.now() - 90 * 1000, null)).toEqual("2 minutes ago");

    expect(getRelativeTime(Date.now() + 149 * 1000, null)).toEqual("in 2 minutes");
    expect(getRelativeTime(Date.now() - 149 * 1000, null)).toEqual("2 minutes ago");

    expect(getRelativeTime(Date.now() + 150 * 1000, null)).toEqual("in 3 minutes");
    expect(getRelativeTime(Date.now() - 150 * 1000, null)).toEqual("3 minutes ago");

    expect(getRelativeTime(Date.now() + 59 * 60 * 1000, null)).toEqual("in 59 minutes");
    expect(getRelativeTime(Date.now() - 59 * 60 * 1000, null)).toEqual("59 minutes ago");

    expect(getRelativeTime(Date.now() + 60 * 60 * 1000, null)).toEqual("in 1 hour");
    expect(getRelativeTime(Date.now() - 60 * 60 * 1000, null)).toEqual("1 hour ago");

    expect(getRelativeTime(Date.now() + 2 * 60 * 60 * 1000, null)).toEqual("in 2 hours");
    expect(getRelativeTime(Date.now() - 2 * 60 * 60 * 1000, null)).toEqual("2 hours ago");

    expect(getRelativeTime(Date.now() + 23 * 60 * 60 * 1000, null)).toEqual("in 23 hours");
    expect(getRelativeTime(Date.now() - 23 * 60 * 60 * 1000, null)).toEqual("23 hours ago");

    expect(getRelativeTime(Date.now() + 24 * 60 * 60 * 1000, null)).toEqual("in 1 day");
    expect(getRelativeTime(Date.now() - 24 * 60 * 60 * 1000, null)).toEqual("1 day ago");

    expect(getRelativeTime(Date.now() + 2 * 24 * 60 * 60 * 1000, null)).toEqual("in 2 days");
    expect(getRelativeTime(Date.now() - 2 * 24 * 60 * 60 * 1000, null)).toEqual("2 days ago");

    expect(getRelativeTime(Date.now() + 29 * 24 * 60 * 60 * 1000, null)).toEqual("in 29 days");
    expect(getRelativeTime(Date.now() - 29 * 24 * 60 * 60 * 1000, null)).toEqual("29 days ago");

    expect(getRelativeTime(Date.now() + 30 * 24 * 60 * 60 * 1000, null)).toEqual("in 1 month");
    expect(getRelativeTime(Date.now() - 30 * 24 * 60 * 60 * 1000, null)).toEqual("1 month ago");

    expect(getRelativeTime(Date.now() + 2 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("in 2 months");
    expect(getRelativeTime(Date.now() - 2 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("2 months ago");

    expect(getRelativeTime(Date.now() + 11 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("in 11 months");
    expect(getRelativeTime(Date.now() - 11 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("11 months ago");

    expect(getRelativeTime(Date.now() + 12 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("in 1 year");
    expect(getRelativeTime(Date.now() - 12 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("1 year ago");

    expect(getRelativeTime(Date.now() + 2 * 12 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("in 2 years");
    expect(getRelativeTime(Date.now() - 2 * 12 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("2 years ago");

    expect(getRelativeTime(Date.now() + 3 * 12 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("in 3 years");
    expect(getRelativeTime(Date.now() - 3 * 12 * 30 * 24 * 60 * 60 * 1000, null)).toEqual("3 years ago");
});
