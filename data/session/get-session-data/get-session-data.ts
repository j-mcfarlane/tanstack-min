import { createServerFn } from '@tanstack/react-start'

// App Session
import { useAppSession } from '../use-app-session'

export const getSessionData = createServerFn({ method: 'GET' }).handler(async () => {
    const session = await useAppSession()

    return session.data
})
