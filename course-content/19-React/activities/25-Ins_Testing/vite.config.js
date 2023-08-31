import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// The vitest testing framework is developed and fully supported by the vite team, and leverages the popular Jest API.
// The snippet below shows how it is possible to customize vite configuration to work with vitest:
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  test: {
    // globals: true property allows our test files to assume the valid vitest keywords without having to import them directly.
    //  If desired, for example, one could include in any *.test.jsx file an import statement like so: import { describe, it } from 'vitest
    globals: true,
    // The environment: 'happy-dom' property defines document within any *.test.jsx file.
    environment: 'happy-dom',
    // he setupFiles: './src/tests/setup.js' property points to a locally defined file which includes some setup for each of our unit tests.
    setupFiles: './src/tests/setup.js',
  },
});

// We can also see that we included a tests directory inside the src/ directory. This naming convention is intentional, along with the file names, so that vitest can easily recognize which test files it should run.
// If we wanted to write a test for a file called index.js, we would create a tests directory inside /src and name it using the following convention:

