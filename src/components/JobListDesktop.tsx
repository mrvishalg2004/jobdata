import React from 'react';
import { Job } from '../types/Job';
import { JOB_STATUS } from '../utils/constants';
import { Trash2, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

interface JobListDesktopProps {
  jobs: Job[];
  onStatusUpdate: (id: string, status: Job['status']) => void;
  onDelete: (id: string) => void;
}

export default function JobListDesktop({ jobs, onStatusUpdate, onDelete }: JobListDesktopProps) {
  return (
    <table className="min-w-full divide-y divide-gray-200 hidden md:table">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Job Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Company
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Applied Date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {jobs.map((job) => (
          <tr key={job.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                {job.title}
                <ExternalLink size={16} />
              </a>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{job.company}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {new Date(job.appliedDate).toLocaleDateString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`font-medium ${JOB_STATUS[job.status.toUpperCase()].color}`}>
                {JOB_STATUS[job.status.toUpperCase()].label}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex space-x-2">
                <button
                  onClick={() => onStatusUpdate(job.id, 'selected')}
                  className="text-green-600 hover:text-green-800"
                  title="Mark as Selected"
                >
                  <CheckCircle size={20} />
                </button>
                <button
                  onClick={() => onStatusUpdate(job.id, 'rejected')}
                  className="text-red-600 hover:text-red-800"
                  title="Mark as Rejected"
                >
                  <XCircle size={20} />
                </button>
                <button
                  onClick={() => onDelete(job.id)}
                  className="text-gray-600 hover:text-gray-800"
                  title="Delete"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
