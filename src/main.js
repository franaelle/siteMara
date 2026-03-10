import { ViteSSG } from 'vite-ssg'
import { createUnhead, headSymbol } from '@unhead/vue'
import './style.css'
import App from './App.vue'
import { routes } from './router'

export const createApp = ViteSSG(
    App,
    {
        routes,
        scrollBehavior() {
            return { top: 0 }
        }
    },
    ({ app, router, isClient, initialState }) => {
        const head = createUnhead()
        app.provide(headSymbol, head)
    }
)
