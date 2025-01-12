import React from 'react';
import { Job } from '../types/Job';
import { JOB_STATUS } from '../utils/constants';
import { Trash2, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

interface JobListMobileProps {
  jobs: Job[];
  onStatusUpdate: (id: string, status: Job['status']) => void;
  onDelete: (id: string) => void;
}

export default function JobListMobile({ jobs, onStatusUpdate, onDelete }: JobListMobileProps) {
  return (
    <div className="md:hidden">
      {jobs.map((job) => (
        <div key={job.id} className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <ExternalLink size={18} />
            </a>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">
                {new Date(job.appliedDate).toLocaleDateString()}
              </p>
              <span className={`text-sm font-medium ${JOB_STATUS[job.status.toUpperCase()].color}`}>
                {JOB_STATUS[job.status.toUpperCase()].label}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => onStatusUpdate(job.id, 'selected')}
                className="text-green-600 hover:text-green-800 p-1"
                title="Mark as Selected"
              >
                <CheckCircle size={20} />
              </button>
              <button
                onClick={() => onStatusUpdate(job.id, 'rejected')}
                className="text-red-600 hover:text-red-800 p-1"
                title="Mark as Rejected"
              >
                <XCircle size={20} />
              </button>
              <button
                onClick={() => onDelete(job.id)}
                className="text-gray-600 hover:text-gray-800 p-1"
                title="Delete"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
