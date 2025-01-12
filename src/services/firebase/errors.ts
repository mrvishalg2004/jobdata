import { FirebaseError } from 'firebase/app';

export const handleFirebaseError = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return 'Invalid email or password';
      case 'auth/email-already-in-use':
        return 'Email already in use';
      case 'auth/weak-password':
        return 'Password is too weak';
      case 'auth/invalid-email':
        return 'Invalid email address';
      case 'permission-denied':
        return 'You do not have permission to perform this action';
      default:
        return error.message;
    }
  }
  return 'An unexpected error occurred';
};
