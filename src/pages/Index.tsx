import { Sidebar } from '@/features/navigation/components/sidebar';
import { TopBar } from '@/features/navigation/components/top-bar';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-[#1C1C1C]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-white">Welcome to Supabase Clone</h1>
        </main>
      </div>
    </div>
  );
};

export default Index;