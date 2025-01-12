import { 
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Job } from '../../types/Job';
import toast from 'react-hot-toast';

const JOBS_COLLECTION = 'jobs';

export const createJob = async (userId: string, jobData: Omit<Job, 'id'>) => {
  try {
    const jobsRef = collection(db, JOBS_COLLECTION);
    const docRef = await addDoc(jobsRef, {
      ...jobData,
      userId,
      createdAt: new Date().toISOString()
    });
    toast.success('Job application saved');
    return docRef.id;
  } catch (error) {
    toast.error('Failed to save job');
    throw error;
  }
};

export const getUserJobs = async (userId: string): Promise<Job[]> => {
  try {
    const jobsRef = collection(db, JOBS_COLLECTION);
    const q = query(jobsRef, where('userId', '==', userId));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Job));
  } catch (error) {
    toast.error('Failed to load jobs');
    return [];
  }
};

export const updateJob = async (jobId: string, updates: Partial<Job>) => {
  try {
    const jobRef = doc(db, JOBS_COLLECTION, jobId);
    await updateDoc(jobRef, updates);
    toast.success('Job updated');
  } catch (error) {
    toast.error('Failed to update job');
    throw error;
  }
};

export const deleteJob = async (jobId: string) => {
  try {
    const jobRef = doc(db, JOBS_COLLECTION, jobId);
    await deleteDoc(jobRef);
    toast.success('Job deleted');
  } catch (error) {
    toast.error('Failed to delete job');
    throw error;
  }
};
