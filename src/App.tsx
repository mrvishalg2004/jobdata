import React, { useState, useEffect } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import Footer from './components/Footer';
import { getJobs } from './utils/storage';
import { Briefcase } from 'lucide-react';

export default function App() {
  const [jobs, setJobs] = useState([]);

  const loadJobs = () => {
    setJobs(getJobs());
  };

  useEffect(() => {
    loadJobs();
    // Add event listener for storage changes
    window.addEventListener('storage', loadJobs);
    return () => window.removeEventListener('storage', loadJobs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="text-blue-600" size={40} />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Job Application Tracker</h1>
          <p className="text-gray-600">Keep track of your job applications in one place</p>
        </div>

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