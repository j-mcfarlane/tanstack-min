import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

// Ui
import { RootLayout, RootLinks, RootMeta } from '@/ui/layouts'

// Data
import { getSessionData } from '@/data'

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient
}>()({
    beforeLoad: async ({ context }) => {
        const data = await getSessionData()

        return {
            ...context,
        }
    },
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
