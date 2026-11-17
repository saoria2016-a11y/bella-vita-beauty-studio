import { describe, expect, it } from "vitest";
import { getWhatsAppLink } from "./site";

describe("getWhatsAppLink", () => {
  it("returns no link while the number is not configured", () => {
    expect(getWhatsAppLink("")).toBeNull();
  });

  it("builds a wa.me link from a configured international number", () => {
    expect(getWhatsAppLink("+39 333 123 4567")).toBe("https://wa.me/393331234567");
  });
});
