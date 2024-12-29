import { useState } from "react";
import { Modal } from "@/shared/components/custom/modal";
import { useTranslation } from "@/shared/i18n";

interface DeleteProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectName: string;
    onDelete: () => Promise<void>;
}

export const DeleteProjectModal = ({
    isOpen,
    onClose,
    projectName,
    onDelete,
}: DeleteProjectModalProps) => {
    const { t } = useTranslation();
    const [confirmProjectName, setConfirmProjectName] = useState("");
    const [confirmDelete, setConfirmDelete] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const isDeleteEnabled =
        confirmProjectName === projectName &&
        confirmDelete === t('features.settings.delete.modal.deleteText') &&
        !isDeleting;

    const handleDelete = async () => {
        if (!isDeleteEnabled) return;

        setIsDeleting(true);
        try {
            await onDelete();
            // Reset form state
            setConfirmProjectName("");
            setConfirmDelete("");
        } finally {
            setIsDeleting(false);
        }
    };

    // Reset form when modal closes
    const handleClose = () => {
        if (!isDeleting) {
            setConfirmProjectName("");
            setConfirmDelete("");
            onClose();
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleClose}
            title={t('features.settings.delete.modal.title')}
            description={t('features.settings.delete.modal.description')}
            className="max-w-md"
            warning={{
                icon: "⚠️",
                title: t('features.settings.delete.modal.warning'),
                variant: "error"
            }}
            inputs={[
                {
                    label: t('features.settings.delete.modal.projectNamePrompt', { name: projectName }),
                    value: confirmProjectName,
                    onChange: setConfirmProjectName,
                    placeholder: projectName
                },
                {
                    label: t('features.settings.delete.modal.deletePrompt'),
                    value: confirmDelete,
                    onChange: setConfirmDelete,
                    placeholder: t('features.settings.delete.modal.deleteText')
                }
            ]}
            actions={[
                {
                    label: t('common.actions.cancel'),
                    onClick: handleClose,
                    variant: "outline",
                    disabled: isDeleting
                },
                {
                    label: isDeleting
                        ? t('features.settings.delete.modal.deleting')
                        : t('features.settings.delete.button'),
                    onClick: handleDelete,
                    variant: "destructive",
                    disabled: !isDeleteEnabled
                }
            ]}
        />
    );
};