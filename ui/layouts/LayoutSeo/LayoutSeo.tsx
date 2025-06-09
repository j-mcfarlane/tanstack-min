export const LayoutSeo = ({
    title,
    description,
    keywords,
    image,
    twitter,
}: {
    title: string
    description?: string
    image?: string
    keywords?: string
    twitter?: {
        creator?: string
        description?: string
        site?: string
    }
}) => {
    const tags = [
        { title },
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: twitter?.description || description },
        { name: 'twitter:creator', content: twitter?.creator },
        { name: 'twitter:site', content: twitter?.site },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: title },
        { name: 'og:description', content: description },
        ...(image
            ? [
                  { name: 'twitter:image', content: image },
                  { name: 'twitter:card', content: 'summary_large_image' },
                  { name: 'og:image', content: image },
              ]
            : []),
    ]

    return tags
}
