export const AuthAside = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-medium text-white mb-4">MANAGE</h2>
      <div className="space-y-2">
        <div className="text-gray-400 hover:text-white cursor-pointer">Users</div>
      </div>
      
      <h2 className="text-lg font-medium text-white mt-8 mb-4">CONFIGURATION</h2>
      <div className="space-y-2">
        <div className="text-gray-400 hover:text-white cursor-pointer">Policies</div>
        <div className="text-gray-400 hover:text-white cursor-pointer">Providers</div>
        <div className="text-gray-400 hover:text-white cursor-pointer">Rate Limits</div>
        <div className="text-gray-400 hover:text-white cursor-pointer">Email Templates</div>
        <div className="text-gray-400 hover:text-white cursor-pointer">URL Configuration</div>
        <div className="text-gray-400 hover:text-white cursor-pointer">
          Hooks <span className="text-xs bg-amber-500/20 text-amber-500 px-1 rounded">BETA</span>
        </div>
      </div>
    </div>
  );
};