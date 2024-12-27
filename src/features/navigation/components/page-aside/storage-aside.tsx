export const StorageAside = () => {
  return (
    <div className="p-4">
      <div className="space-y-4">
        <button className="w-full text-left px-3 py-2 text-gray-400 hover:text-white border border-gray-800 rounded-md">
          + New bucket
        </button>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search buckets..."
            className="w-full bg-transparent border border-gray-800 rounded-md px-3 py-2 text-gray-400 focus:outline-none focus:border-gray-700"
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xs font-medium text-gray-500 mb-4">ALL BUCKETS</h3>
        <div className="text-center py-8 text-gray-400">
          <p>No buckets available</p>
          <p className="text-sm">Buckets that you create will appear here</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xs font-medium text-gray-500 mb-4">CONFIGURATION</h3>
        <div className="space-y-2">
          <div className="text-gray-400 hover:text-white cursor-pointer">Policies</div>
          <div className="flex items-center justify-between text-gray-400 hover:text-white cursor-pointer">
            <span>Settings</span>
            <span className="text-xs">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};