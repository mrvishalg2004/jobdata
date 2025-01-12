export const FIREBASE_COLLECTIONS = {
  JOBS: 'jobs',
  USERS: 'users'
} as const;

export const ERROR_MESSAGES = {
  AUTH: {
    LOGIN_FAILED: 'Failed to login. Please check your credentials.',
    SIGNUP_FAILED: 'Failed to create account. Please try again.',
    RESET_FAILED: 'Failed to send reset email. Please try again.',
    LOGOUT_FAILED: 'Failed to logout. Please try again.'
  },
  DB: {
    CREATE_FAILED: 'Failed to save job application.',
    UPDATE_FAILED: 'Failed to update job application.',
    DELETE_FAILED: 'Failed to delete job application.',
    LOAD_FAILED: 'Failed to load job applications.'
  }
} as const;

export const SUCCESS_MESSAGES = {
  AUTH: {
    LOGIN_SUCCESS: 'Logged in successfully',
    SIGNUP_SUCCESS: 'Account created successfully',
    RESET_SUCCESS: 'Password reset email sent',
    LOGOUT_SUCCESS: 'Logged out successfully'
  },
  DB: {
    CREATE_SUCCESS: 'Job application saved successfully',
    UPDATE_SUCCESS: 'Job application updated successfully',
    DELETE_SUCCESS: 'Job application deleted successfully'
  }
} as const;
