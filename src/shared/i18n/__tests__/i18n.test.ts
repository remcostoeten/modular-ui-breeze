import { t } from "../index";

describe("i18n system", () => {
  describe("basic translation", () => {
    it("should translate simple strings", () => {
      expect(t("common.actions.save")).toBe("Save");
      expect(t("common.actions.cancel")).toBe("Cancel");
    });

    it("should handle nested keys", () => {
      expect(t("features.settings.page.title")).toBe("Project Settings");
    });

    it("should return key if translation is missing", () => {
      expect(t("nonexistent.key" as any)).toBe("nonexistent.key");
    });
  });

  describe("parameterized translations", () => {
    it("should handle string parameters", () => {
      expect(t("notifications.copied", { item: "Project ID" })).toBe(
        "Project ID copied to clipboard"
      );
    });

    it("should handle multiple parameters", () => {
      expect(
        t("errors.validation.minLength", {
          field: "Password",
          length: 8,
        })
      ).toBe("Password must be at least 8 characters");
    });
  });

  describe("error handling", () => {
    it("should handle undefined parameters", () => {
      expect(t("common.actions.save", undefined)).toBe("Save");
    });

    it("should handle invalid keys gracefully", () => {
      expect(t("invalid.key" as any)).toBe("invalid.key");
    });
  });
});
