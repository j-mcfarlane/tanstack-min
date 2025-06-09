import { QueryClient } from '@tanstack/react-query'
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'

// Route Gen
import { routeTree } from './routeTree.gen'

// UI
import { DefaultCatchBoundaryContainer, NotFoundContainer } from '@/ui/containers'

export function createRouter() {
    const queryClient = new QueryClient()

    return routerWithQueryClient(
        createTanStackRouter({
            routeTree,
            context: {
                queryClient,
            },
            scrollRestoration: true,
            defaultPreloadStaleTime: 0,
            defaultStaleTime: 0,
            defaultPreload: 'intent',
            defaultViewTransition: false,
            defaultErrorComponent: DefaultCatchBoundaryContainer,
            defaultNotFoundComponent: NotFoundContainer,
        }),
        queryClient,
    )
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof createRouter>
    }
}
