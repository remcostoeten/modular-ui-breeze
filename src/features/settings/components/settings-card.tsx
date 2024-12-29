import { cn } from "@/shared/helpers/cn"

interface SettingsCardProps {
    title: string
    description?: string
    action?: React.ReactNode
    children: React.ReactNode
}

export const SettingsCard = ({
    title,
    description,
    action,
    children,
}: SettingsCardProps) => {
    return (
        <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <h3 className="text-lg font-medium text-white">{title}</h3>
                    {description && (
                        <p className="text-sm text-gray-400">{description}</p>
                    )}
                </div>
                {action && <div>{action}</div>}
            </div>
            <div className="mt-6">{children}</div>
        </div>
    )
}