import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'

// Ui
import { RootLayout, RootLinks, RootMeta } from '@/ui/layouts'

/**
 * Here is the path issue - toggle between alias and direct import and run build to see the error
 */

// Data
import { getSessionData } from '@/data'
// import { getSessionData } from '../../data/session/get-session-data/get-session-data'

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
