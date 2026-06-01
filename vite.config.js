import { defineConfig } from 'vite';
import { readFileSync } from 'fs';
import { resolve } from 'path';

function inlineNonModuleScripts() {
    return {
        name: 'inline-non-module-scripts',
        transformIndexHtml(html) {
            return html.replace(
                /<script src="([^"]+)"><\/script>/g,
                function (match, src) {
                    try {
                        var code = readFileSync(resolve(__dirname, src), 'utf-8');
                        return '<script>' + code + '</script>';
                    } catch (e) {
                        return match;
                    }
                }
            );
        }
    };
}

export default defineConfig({
    base: '/disaster-system/',
    plugins: [inlineNonModuleScripts()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});
