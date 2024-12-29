import { useState } from 'react'
import { PageContainer } from '@/shared/components/layout/page-container'
import { StoreSettings } from '../components/store-settings'
import { ThemeSettings } from '../components/theme-settings'
import { DeleteProjectModal } from '../components/delete-project-modal'
import { ProjectServiceMock } from '../services/project-service.mock'
import { toast } from 'sonner'
import { handleError } from '@/shared/utils/error-handler'

export function SettingsPage() {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const projectData = {
        name: "sb1-frtfctem",
        id: "nlmghadzcyvpwfhgcqoh"
    }

    const handleDeleteProject = async () => {
        try {
            await ProjectServiceMock.deleteProject(projectData.id)
            toast.success('Project deleted successfully')
            setIsDeleteModalOpen(false)
        } catch (error) {
            handleError(error, {
                component: "SettingsPage",
                action: "deleteProject",
                projectId: projectData.id
            })
        }
    }

    return (
        <PageContainer title="Settings">
            <div className="space-y-8 p-6">
                <div>
                    <h2 className="text-2xl font-bold text-text-primary mb-6">Settings</h2>
                    <div className="grid gap-6">
                        <div className="p-6 rounded-lg bg-bg border border-border">
                            <ThemeSettings />
                        </div>
                        <div className="p-6 rounded-lg bg-bg border border-border">
                            <StoreSettings />
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-lg bg-bg border border-border">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium text-text-primary">Danger Zone</h3>
                            <p className="text-sm text-text-secondary">
                                Destructive actions that cannot be undone
                            </p>
                        </div>
                        <button
                            onClick={() => setIsDeleteModalOpen(true)}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Delete Project
                        </button>
                    </div>
                </div>
            </div>

            <DeleteProjectModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                projectName={projectData.name}
                onDelete={handleDeleteProject}
            />
        </PageContainer>
    )
}

export default SettingsPage