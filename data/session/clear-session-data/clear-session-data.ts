import { createServerFn } from '@tanstack/react-start'

// App Session
import { useAppSession } from '../use-app-session'

export const clearSessionData = createServerFn({ method: 'POST' }).handler(async ({ data }) => {
    const session = await useAppSession()

    await session.clear()

    return session.data
})
