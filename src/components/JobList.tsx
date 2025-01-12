import React from 'react';
import { Job } from '../types/Job';
import { updateJob, deleteJob } from '../services/firebase/db';
import { JOB_STATUS } from '../utils/constants';
import { Trash2, CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import JobListDesktop from './JobListDesktop';
import JobListMobile from './JobListMobile';

interface JobListProps {
  jobs: Job[];
  onUpdate: () => void;
}

export default function JobList({ jobs, onUpdate }: JobListProps) {
  const handleStatusUpdate = async (id: string, status: Job['status']) => {
    try {
      await updateJob(id, { status });
      onUpdate();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteJob(id);
      onUpdate();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  if (jobs.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-500">
        No job applications yet. Start by adding one!
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="bg-white shadow-md rounded-lg">
        <JobListMobile
          jobs={jobs}
          onStatusUpdate={handleStatusUpdate}
          onDelete={handleDelete}
        />
        <JobListDesktop
          jobs={jobs}
          onStatusUpdate={handleStatusUpdate}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
