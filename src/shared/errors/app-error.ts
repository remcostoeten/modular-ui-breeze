export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    code: string,
    statusCode = 500,
    isOperational = true
  ) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ProjectError extends AppError {
  constructor(message: string, code = "PROJECT_ERROR", statusCode = 400) {
    super(message, code, statusCode);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR", 400);
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, "NOT_FOUND", 404);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized access") {
    super(message, "UNAUTHORIZED", 401);
  }
}

export class NetworkError extends AppError {
  constructor(message = "Network error occurred") {
    super(message, "NETWORK_ERROR", 503, true);
  }
}

// Error codes enum for consistent error codes across the application
export enum ErrorCode {
  // Project related errors
  PROJECT_NOT_FOUND = "PROJECT_NOT_FOUND",
  PROJECT_DELETE_FAILED = "PROJECT_DELETE_FAILED",
  PROJECT_UPDATE_FAILED = "PROJECT_UPDATE_FAILED",

  // Authentication/Authorization errors
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",

  // Validation errors
  INVALID_INPUT = "INVALID_INPUT",
  INVALID_STATE = "INVALID_STATE",

  // Network/API errors
  NETWORK_ERROR = "NETWORK_ERROR",
  API_ERROR = "API_ERROR",

  // Database errors
  DB_ERROR = "DB_ERROR",
  DB_CONNECTION_ERROR = "DB_CONNECTION_ERROR",
}
