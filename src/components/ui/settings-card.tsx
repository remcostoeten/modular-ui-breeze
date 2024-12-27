import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { cn } from "@/lib/utils"

interface SettingsCardProps {
  title: string
  description?: string
  className?: string
  children: React.ReactNode
  action?: React.ReactNode
}

export const SettingsCard = ({
  title,
  description,
  className,
  children,
  action
}: SettingsCardProps) => {
  return (
    <Card className={cn("bg-[#1C1C1C] border-gray-800", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
          {description && (
            <CardDescription className="text-gray-400 mt-1">
              {description}
            </CardDescription>
          )}
        </div>
        {action}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}