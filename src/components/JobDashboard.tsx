import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import JobForm from './JobForm';
import JobList from './JobList';
import { getUserJobs } from '../services/jobService';
import { Job } from '../types/Job';
import { Briefcase } from 'lucide-react';
import Footer from './Footer';

export default function JobDashboard() {
  const { currentUser, logout } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      loadJobs();
    }
  }, [currentUser]);

  const loadJobs = async () => {
    if (currentUser) {
      setLoading(true);
      try {
        const userJobs = await getUserJobs(currentUser.uid);
        setJobs(userJobs);
      } catch (error) {
        // Error is handled in getUserJobs
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Briefcase className="text-blue-600 mr-2" size={24} />
            <h1 className="text-2xl font-bold text-gray-900">Job Tracker</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">{currentUser?.email}</span>
            <button
              onClick={() => logout()}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <h2 className="text-2xl font-semibold mb-4">Add New Application</h2>
            <JobForm onSave={loadJobs} />
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Your Applications</h2>
            <JobList jobs={jobs} onUpdate={loadJobs} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
