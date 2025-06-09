import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

// Ui
import { RootLayout, RootLinks, RootMeta } from '@/ui/layouts'

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient
}>()({
    head: () => ({
        meta: RootMeta,
        links: RootLinks,
    }),
    component: () => {
        return (
            <RootLayout>
                <Outlet />
            </RootLayout>
        )
    },
})
