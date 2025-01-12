// Storage keys
export const STORAGE_KEYS = {
  JOBS: 'jobs',
} as const;

// Status types and their display properties
export const JOB_STATUS = {
  APPLIED: {
    value: 'applied',
    color: 'text-blue-600',
    label: 'Applied',
  },
  SELECTED: {
    value: 'selected',
    color: 'text-green-600',
    label: 'Selected',
  },
  REJECTED: {
    value: 'rejected',
    color: 'text-red-600',
    label: 'Rejected',
  },
} as const;
