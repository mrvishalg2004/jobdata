import React from 'react';
import { Job } from '../types/Job';
import { updateJobStatus, deleteJob } from '../utils/storage';
import { JOB_STATUS } from '../utils/constants';
import { Trash2, CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import JobListDesktop from './JobListDesktop';
import JobListMobile from './JobListMobile';

interface JobListProps {
  jobs: Job[];
  onUpdate: () => void;
}

export default function JobList({ jobs, onUpdate }: JobListProps) {
  const handleStatusUpdate = (id: string, status: Job['status']) => {
    updateJobStatus(id, status);
    onUpdate();
  };

  const handleDelete = (id: string) => {
    deleteJob(id);
    onUpdate();
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