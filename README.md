# github-app-test

Sample repo for Testkube GitHub App onboarding smoke tests.

Two simple suites:

- **JavaScript** (`tests/`) — Node's built-in `node:test` runner, no dependencies.
  Run with `npm test`.
- **k6** (`perf/`) — single script hitting `test.k6.io` for 10s with 1 VU.
  Run with `k6 run perf/smoke.js`.


SSDD
