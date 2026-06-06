const EMBEDDED_RUN_LANE_TIMEOUT_RECOVERY_GRACE_MS = 300_000;
const EMBEDDED_RUN_LANE_TIMEOUT_RECOVERY_MULTIPLIER = 4;
const EMBEDDED_RUN_LANE_TIMEOUT_MIN_MS = 900_000;

export function resolveEmbeddedRunLaneTimeoutMs(timeoutMs: number): number | undefined {
  if (!Number.isFinite(timeoutMs) || timeoutMs <= 0) {
    return undefined;
  }
  const baseTimeoutMs = Math.floor(timeoutMs);
  return Math.max(
    EMBEDDED_RUN_LANE_TIMEOUT_MIN_MS,
    baseTimeoutMs * EMBEDDED_RUN_LANE_TIMEOUT_RECOVERY_MULTIPLIER +
      EMBEDDED_RUN_LANE_TIMEOUT_RECOVERY_GRACE_MS,
  );
}
