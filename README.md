# React + TypeScript + Vite + Vitest + React Testing Library, Jest-dom & MSW

This template offers a streamlined setup for developing React applications using Vite, incorporating TypeScript for type safety, Vitest for testing, React Testing Library for component testing, Jest-dom for enhanced Jest matchers, and MSW (Mock Service Worker) for mocking API requests.

Features
- React: A popular JavaScript library for building user interfaces.
- TypeScript: Adds static typing to JavaScript, enhancing code quality and developer productivity.
- Vite: A next-generation frontend tooling that offers lightning-fast dev server and optimized build.
- Vitest: A lightweight test runner for modern JavaScript applications, enabling efficient testing workflows.
- React Testing Library: A simple and intuitive testing library for React that encourages best practices.
- Jest-dom: Provides custom Jest matchers to improve readability and maintainability of tests.
- MSW (Mock Service Worker): Simplifies mocking of API requests for testing purposes, enhancing test isolation and reliability

## Testing

This template is configured with Vitest, React Testing Library, Jest-dom, and MSW for testing purposes. Tests can be found in the `tests` directory.

To run the tests, use the following command:

```bash
pnpm test
```

## Setting Up
1. **Install Vitest and required dependencies:**

   You'll need to install Vitest along with its required dependencies. Additionally, you might need to install `@testing-library/react` if you haven't already.

   ```bash
   pnpm install -D vitest @testing-library/jest-dom @testing-library/react @testing-library/user-event jsdom

2. **Add the following line to include a script for running tests with Vitest: **
   NOTE: -- coverage is optional 
    ```json
   "scripts": {
     "test": "vitest --coverage"
   }
    
3. **Create a "test" Directory and (`setup.ts`) File**
In this step, you'll create a new directory named "test" under the "src" directory of your project. Additionally, you'll create a new file named "setup.ts" within the "test" directory.

Follow these instructions to complete this step:
  1.  **Create the "test" directory:**
  2. Open your project in your preferred code editor.
  3. Navigate to the "src" directory of your project.
  4. Create a new directory named "test".
  5. Within the newly created "test" directory, create a new file named "setup.ts".
  6. Add import statements to "setup.ts":
      ```bash
      import "@testing-library/jest-dom";
      ```
      
4. **Update Vite Configuration**
In this step, you'll update the Vite configuration file (`vite.config.js`) to integrate Vitest and configure the testing environment.

Follow these instructions to complete this step:

1. **Open your Vite configuration file (`vite.config.js`) in your preferred code editor.**

2. **Add references to Vitest and Vite client types:**

   Add the following lines at the beginning of your Vite configuration file to reference Vitest and Vite client types:

   ```javascript
   /// <reference types="vitest" />
   /// <reference types="vite/client" />
   ```

   ```bash
   export default defineConfig({
      plugins: [react()],
      test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/test/setup.ts",
      },
    });
   ```
