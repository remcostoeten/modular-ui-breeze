import { Sidebar } from '@/features/navigation/components/sidebar';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-[#1C1C1C]">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">Welcome to Supabase Clone</h1>
      </main>
    </div>
  );
};

export default Index;