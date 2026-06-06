import { describe, expect, it } from "vitest";
import { resolveEmbeddedRunLaneTimeoutMs } from "./run/lane-timeout.js";

describe("embedded run lane timeout", () => {
  it("uses a recovery window beyond the prior 210 second command lane ceiling", () => {
    expect(resolveEmbeddedRunLaneTimeoutMs(180_000)).toBe(1_020_000);
  });

  it("scales with longer configured run timeouts", () => {
    expect(resolveEmbeddedRunLaneTimeoutMs(300_000)).toBe(1_500_000);
  });

  it("does not set lane timeout for invalid run timeouts", () => {
    expect(resolveEmbeddedRunLaneTimeoutMs(0)).toBeUndefined();
    expect(resolveEmbeddedRunLaneTimeoutMs(Number.NaN)).toBeUndefined();
  });
});
