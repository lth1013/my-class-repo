import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// runs a cleanup after each test case (e.g. clearing jsdom)
// https://vitest.dev/api/#aftereach
// Register a callback to be called after each one of the tests in the current context completes. If the function returns a promise, Vitest waits until the promise resolve before continuing.
afterEach(() => {
    // https://testing-library.com/docs/react-testing-library/api/#cleanup
    // Unmounts React trees that were mounted with render.
    cleanup();
});