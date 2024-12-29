import { Copy } from "lucide-react"
import { Input } from "@/shared/components/custom/"
import { ActionButton, DestructiveButton, PrimaryButton } from "@/shared/components/custom/button-variants"
import { SettingsCard } from "@/shared/components/ui/settings-card"

const Settings = () => {
  const projectData = {
    name: "sb1-frtfctem",
    id: "nlmghadzcyvpwfhgcqoh"
  }

  return (
    <div className="space-y-6">
      <SettingsCard
        title="General settings"
        action={
          <div className="flex gap-2">
            <ActionButton variant="outline">Cancel</ActionButton>
            <PrimaryButton>Save</PrimaryButton>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 block mb-2">Project name</label>
            <Input
              value={projectData.name}
              className="bg-bg border-border text-white"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-2">Project ID</label>
            <div className="flex gap-2">
              <Input
                value={projectData.id}
                readOnly
                className="bg-bg border-border text-white"
              />
              <ActionButton>
                <Copy className="w-4 h-4" />
                Copy
              </ActionButton>
            </div>
          </div>
        </div>
      </SettingsCard>

      <SettingsCard
        title="Restart project"
        description="Your project will not be available for a few minutes."
        action={
          <ActionButton>
            Restart project
          </ActionButton>
        }
      >
        <p className="text-gray-400">
          Restart your project to apply any configuration changes.
        </p>
      </SettingsCard>

      <SettingsCard
        title="Pause project"
        description="Your project will not be accessible while it is paused."
        action={
          <ActionButton>
            Pause project
          </ActionButton>
        }
      >
        <p className="text-gray-400">
          Temporarily pause your project. You can unpause it at any time.
        </p>
      </SettingsCard>

      <SettingsCard
        title="Delete Project"
        description="Permanently delete this project and all of its data."
      >
        <div className="bg-[#3d1e1e] border border-red-900 rounded-md p-4">
          <div className="flex items-start gap-3">
            <div className="text-red-400 bg-red-900/30 p-2 rounded">⚠️</div>
            <div>
              <p className="text-white font-medium">Deleting this project will also remove your database.</p>
              <p className="text-gray-400 text-sm mt-1">Make sure you have made a backup if you want to keep your data.</p>
            </div>
          </div>
          <DestructiveButton className="mt-4">
            Delete project
          </DestructiveButton>
        </div>
      </SettingsCard>
    </div>
  )
}

export default Settings