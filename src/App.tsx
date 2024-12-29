import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SettingsPage } from "@/features/settings"
import { PageContainer } from "./shared/components/layout/page-container"
import { Layout } from "./shared/components/layout"
import { SiteWrapper } from "./shared/components/providers/site-wrapper"

const PlaceholderPage = ({ title }: { title: string }) => (
  <PageContainer title={title}>
    <div className="text-text-primary">
      <p>This is the {title} page</p>
    </div>
  </PageContainer>
)

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SiteWrapper>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={
              <PageContainer title="Dashboard">
                <div className="text-text-primary">
                  <p>Dashboard content goes here</p>
                </div>
              </PageContainer>
            } />
            <Route path="/table-editor" element={<PlaceholderPage title="Table Editor" />} />
            <Route path="/sql-editor" element={<PlaceholderPage title="SQL Editor" />} />
            <Route path="/database" element={<PlaceholderPage title="Database" />} />
            <Route path="/auth" element={<PlaceholderPage title="Authentication" />} />
            <Route path="/storage" element={<PlaceholderPage title="Storage" />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={
              <PageContainer title="404 - Not Found">
                <div className="text-text-primary">
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              </PageContainer>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </SiteWrapper>
  </QueryClientProvider>
)

export default App