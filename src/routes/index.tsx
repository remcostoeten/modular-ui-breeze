import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white">Welcome to Supabase Clone</h1>
    </div>
  )
})