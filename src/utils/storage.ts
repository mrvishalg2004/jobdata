import { Job } from '../types/Job';
import { STORAGE_KEYS } from './constants';

export const saveJob = (job: Job): boolean => {
  try {
    const jobs = getJobs();
    const existingJob = jobs.find(
      (j) => j.title === job.title && j.company === job.company && j.link === job.link
    );

    if (existingJob) {
      return false;
    }

    jobs.unshift(job); // Add new job to the beginning of the array
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(jobs));
    window.dispatchEvent(new Event('storage'));
    return true;
  } catch (error) {
    console.error('Error saving job:', error);
    return false;
  }
};

export const getJobs = (): Job[] => {
  try {
    const jobs = localStorage.getItem(STORAGE_KEYS.JOBS);
    const parsedJobs = jobs ? JSON.parse(jobs) : [];
    // Sort jobs by application date, newest first
    return parsedJobs.sort((a: Job, b: Job) => 
      new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
    );
  } catch (error) {
    console.error('Error getting jobs:', error);
    return [];
  }
};

export const updateJobStatus = (id: string, status: Job['status']): void => {
  const jobs = getJobs();
  const updatedJobs = jobs.map((job) =>
    job.id === id ? { ...job, status } : job
  );
  localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(updatedJobs));
  window.dispatchEvent(new Event('storage'));
};

export const deleteJob = (id: string): void => {
  const jobs = getJobs();
  const filteredJobs = jobs.filter((job) => job.id !== id);
  localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(filteredJobs));
  window.dispatchEvent(new Event('storage'));
};
