import { Helmet } from "react-helmet";

interface PageContainerProps {
    title: string
    children: React.ReactNode
}

export const PageContainer = ({ title, children }: PageContainerProps) => {
    return (
        <div className="p-8 bg-bg">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={`Page for ${title}`} />
            </Helmet>
            <h1 className="text-3xl font-bold text-white mb-8" role="heading" aria-level={1}>{title}</h1>
            <div className="space-y-6">
                {children}
            </div>
            <         /div>
            )
}