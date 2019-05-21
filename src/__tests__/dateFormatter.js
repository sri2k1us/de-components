/**
 *
 * @author Sriram
 *
 */

import {
    formatDate,
    formatCurrentDate,
    formatDateObject,
} from "../../src/util/DateFormatter";

import { format } from "date-fns";

test("format current date", () => {
    expect(formatCurrentDate("MM:DD:YY")).toBe(format(new Date(), "MM:DD:YY"));
});

test("format Date object", () => {
    const dateNow = new Date();
    expect(formatDateObject(dateNow)).toBe(
        format(dateNow, "YYYY-MM-DD HH:mm:ss")
    );
});

test("format Date", () => {
    expect(formatDate(1558389094590)).toBe(
        format(1558389094590, "YYYY-MM-DD HH:mm:ss")
    );
});

test("format empty Date", () => {
    expect(formatDate()).toBe("-");
});

test("format empty Date", () => {
    expect(formatDate(null)).toBe("-");
});

test("format empty Date", () => {
    expect(formatDate(undefined)).toBe("-");
});

test("format null Date object", () => {
    expect(formatDateObject(null)).toBe("-");
});

test("format null Date object", () => {
    expect(formatDateObject(undefined)).toBe("-");
});
