/**
 * Mock implementation of the project service
 */
export class ProjectServiceMock {
  /**
   * Delete a project by ID
   * @param projectId - The ID of the project to delete
   * @returns A promise that resolves when the project is deleted
   */
  static async deleteProject(projectId: string): Promise<void> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate random failure
    if (Math.random() < 0.2) {
      throw new Error("Failed to delete project");
    }

    // In a real implementation, this would make an API call
    console.log(`Deleted project ${projectId}`);
  }
}
