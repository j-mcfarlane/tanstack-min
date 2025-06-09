import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    vite: {
        plugins: [
            ...[].concat(tailwindcss() as any),
            ...[].concat(tsConfigPaths({ projects: ['./tsconfig.json'] }) as any),
        ],
        ssr: {
            noExternal: ['react-spinners'],
        },
    },

    server: {
        preset: 'node-server',
    },
})
