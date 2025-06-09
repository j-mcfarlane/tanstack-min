import { LayoutSeo } from '../../layouts/LayoutSeo'

export const RootMeta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>[] = [
    {
        charSet: 'utf-8',
    },
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
    },
    ...LayoutSeo({
        title: 'Title',
        description: 'Description',
    }),
]
