import { auth } from '../../lib/firebase';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import toast from 'react-hot-toast';

export const loginUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success('Logged in successfully');
  } catch (error) {
    toast.error('Failed to login');
    throw error;
  }
};

export const signupUser = async (email: string, password: string, name: string) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: name });
    toast.success('Account created successfully');
  } catch (error) {
    toast.error('Failed to create account');
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    toast.success('Logged out successfully');
  } catch (error) {
    toast.error('Failed to logout');
    throw error;
  }
};

export const resetUserPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success('Password reset email sent');
  } catch (error) {
    toast.error('Failed to send reset email');
    throw error;
  }
};
