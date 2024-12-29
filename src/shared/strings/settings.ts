export const SETTINGS_STRINGS = {
  PAGE: {
    TITLE: "Project Settings",
  },
  GENERAL: {
    TITLE: "General settings",
    PROJECT_NAME: "Project name",
    PROJECT_ID: "Project ID",
    COPY: "Copy",
    COPY_SUCCESS: "Project ID copied to clipboard",
    SAVE: "Save",
    CANCEL: "Cancel",
  },
  RESTART: {
    TITLE: "Restart project",
    DESCRIPTION: "Your project will not be available for a few minutes.",
    BUTTON: "Restart project",
    INFO: "Restart your project to apply any configuration changes.",
  },
  PAUSE: {
    TITLE: "Pause project",
    DESCRIPTION: "Your project will not be accessible while it is paused.",
    BUTTON: "Pause project",
    INFO: "Temporarily pause your project. You can unpause it at any time.",
  },
  DELETE: {
    TITLE: "Delete Project",
    DESCRIPTION: "Permanently delete this project and all of its data.",
    WARNING: {
      DATABASE: "Deleting this project will also remove your database.",
      BACKUP: "Make sure you have made a backup if you want to keep your data.",
    },
    BUTTON: "Delete project",
    MODAL: {
      TITLE: "Delete Project",
      DESCRIPTION:
        "This project will be deleted, along with all of its Deployments, Domains, Environment Variables, Serverless Functions, and Settings.",
      WARNING: "Warning: This action is not reversible. Please be certain.",
      PROJECT_NAME_PROMPT: (name: string) =>
        `Enter the project name ${name} to continue:`,
      DELETE_PROMPT: "To verify, type delete my project below:",
      DELETE_TEXT: "delete my project",
      DELETING: "Deleting...",
      SUCCESS: "Project deleted successfully",
    },
  },
} as const;
