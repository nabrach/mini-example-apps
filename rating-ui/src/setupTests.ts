import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// No need to extend expect manually, it's done by the import

// Run cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  cleanup();
});
