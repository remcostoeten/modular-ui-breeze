export const en = {
  common: {
    actions: {
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      delete: "Delete",
      edit: "Edit",
      close: "Close",
      copy: "Copy",
    },
    status: {
      loading: "Loading...",
      processing: "Processing...",
      success: "Success!",
      error: "Error",
      done: "Done",
    },
    aria: {
      closeModal: "Close modal",
      loading: "Loading",
      required: "Required",
      selected: "Selected",
    },
  },
  errors: {
    generic: {
      unknown: "An unexpected error occurred",
      network: "Network error occurred. Please check your connection",
      unauthorized: "You don't have permission to perform this action",
      notFound: (params: { resource: string }) =>
        `${params.resource} not found`,
    },
    project: {
      notFound: "The requested project could not be found",
      deleteFailed: "Failed to delete the project. Please try again",
      updateFailed: "Failed to update the project. Please try again",
    },
    database: {
      connection: "Database connection error. Please try again later",
      operation: "Database operation failed. Please try again later",
    },
    validation: {
      required: (params: { field: string }) => `${params.field} is required`,
      invalid: (params: { field: string }) => `Invalid ${params.field}`,
      minLength: (params: { field: string; length: number }) =>
        `${params.field} must be at least ${params.length} characters`,
      maxLength: (params: { field: string; length: number }) =>
        `${params.field} must be at most ${params.length} characters`,
    },
  },
  features: {
    settings: {
      page: {
        title: "Project Settings",
      },
      general: {
        title: "General settings",
        projectName: "Project name",
        projectId: "Project ID",
        copy: "Copy",
        copySuccess: "Project ID copied to clipboard",
        save: "Save",
        cancel: "Cancel",
      },
      restart: {
        title: "Restart project",
        description: "Your project will not be available for a few minutes",
        button: "Restart project",
        info: "Restart your project to apply any configuration changes",
      },
      pause: {
        title: "Pause project",
        description: "Your project will not be accessible while it is paused",
        button: "Pause project",
        info: "Temporarily pause your project. You can unpause it at any time",
      },
      delete: {
        title: "Delete Project",
        description: "Permanently delete this project and all of its data",
        warning: {
          database: "Deleting this project will also remove your database",
          backup:
            "Make sure you have made a backup if you want to keep your data",
        },
        button: "Delete project",
        modal: {
          title: "Delete Project",
          description:
            "This project will be deleted, along with all of its Deployments, Domains, Environment Variables, Serverless Functions, and Settings",
          warning: "Warning: This action is not reversible. Please be certain",
          projectNamePrompt: (params: { name: string }) =>
            `Enter the project name ${params.name} to continue:`,
          deletePrompt: "To verify, type delete my project below:",
          deleteText: "delete my project",
          deleting: "Deleting...",
          success: "Project deleted successfully",
        },
      },
    },
  },
  notifications: {
    copied: (params: { item: string }) => `${params.item} copied to clipboard`,
    saved: (params: { item: string }) => `${params.item} saved successfully`,
    deleted: (params: { item: string }) =>
      `${params.item} deleted successfully`,
    updated: (params: { item: string }) =>
      `${params.item} updated successfully`,
  },
} as const;
