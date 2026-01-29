import { defineConfig } from 'vite';

export default defineConfig({
    base: '/scuttledev/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});
