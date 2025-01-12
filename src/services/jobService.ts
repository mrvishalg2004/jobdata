import { 
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Job } from '../types/Job';
import toast from 'react-hot-toast';

export const createJob = async (userId: string, jobData: Omit<Job, 'id'>) => {
  try {
    const jobsRef = collection(db, 'jobs');
    const docRef = await addDoc(jobsRef, {
      ...jobData,
      userId,
      createdAt: new Date().toISOString()
    });
    toast.success('Job application saved successfully!');
    return docRef.id;
  } catch (error) {
    console.error('Error creating job:', error);
    toast.error('Failed to save job application');
    throw error;
  }
};

export const getUserJobs = async (userId: string) => {
  try {
    const jobsRef = collection(db, 'jobs');
    const q = query(jobsRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Job[];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    toast.error('Failed to load job applications');
    return [];
  }
};

export const updateJob = async (jobId: string, updates: Partial<Job>) => {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    await updateDoc(jobRef, updates);
    toast.success('Job application updated successfully!');
  } catch (error) {
    console.error('Error updating job:', error);
    toast.error('Failed to update job application');
    throw error;
  }
};

export const deleteJob = async (jobId: string) => {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    await deleteDoc(jobRef);
    toast.success('Job application deleted successfully!');
  } catch (error) {
    console.error('Error deleting job:', error);
    toast.error('Failed to delete job application');
    throw error;
  }
};
