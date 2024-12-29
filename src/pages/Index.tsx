import { Sidebar } from '@/features/navigation/components/sidebar'
import { TopBar } from '@/features/navigation/components/top-bar'
import { AsideContainer } from '@/features/navigation/components/page-aside/aside-container'
import { Outlet } from '@tanstack/react-router'
import { PageContainer } from "@/shared/components/ui/page-container"

export default function Index() {
  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-bg">
        <TopBar />
        <main className="flex-1 ml-16 mt-14 bg-bg">
          <Outlet />
        </main>
      </div>
      <AsideContainer />
    </div>
  )
}