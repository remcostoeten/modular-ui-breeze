export const COMMON_STRINGS = {
  ACTIONS: {
    SAVE: "Save",
    CANCEL: "Cancel",
    CONFIRM: "Confirm",
    DELETE: "Delete",
    EDIT: "Edit",
    CLOSE: "Close",
    COPY: "Copy",
  },
  STATUS: {
    LOADING: "Loading...",
    PROCESSING: "Processing...",
    SUCCESS: "Success!",
    ERROR: "Error",
    DONE: "Done",
  },
  ARIA: {
    CLOSE_MODAL: "Close modal",
    LOADING: "Loading",
    REQUIRED: "Required",
    SELECTED: "Selected",
  },
  NOTIFICATIONS: {
    COPIED: (item: string) => `${item} copied to clipboard`,
    SAVED: (item: string) => `${item} saved successfully`,
    DELETED: (item: string) => `${item} deleted successfully`,
    UPDATED: (item: string) => `${item} updated successfully`,
  },
} as const;
