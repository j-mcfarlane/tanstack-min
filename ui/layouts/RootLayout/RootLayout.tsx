import { PropsWithChildren } from 'react'
import { HeadContent, Scripts } from '@tanstack/react-router'

export function RootLayout({ children }: PropsWithChildren) {
    return (
        <html suppressHydrationWarning className="bg-[color:var(--bg-color-secondary)]">
            <head>
                <HeadContent />
            </head>
            <body lang="en" suppressHydrationWarning className="bg-[color:var(--bg-color-secondary)]">
                {children}

                <Scripts />
            </body>
        </html>
    )
}
