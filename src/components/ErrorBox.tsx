'use client'
import React from 'react';
import { motion } from "framer-motion";

interface PropsError {
  message: string;
}


const ErrorBox = ({message}:PropsError) => {
    return (
        <div>
             <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="max-w-xl mx-auto bg-red-50 border border-red-200 rounded-lg p-4 shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.723-1.36 3.488 0l5.454 9.69A1.75 1.75 0 0 1 16.999 15H3.001a1.75 1.75 0 0 1-1.2-2.211l5.456-9.69zM11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1-6.5a.9.9 0 0 0-.9.9v3.2a.9.9 0 1 0 1.8 0V7.4a.9.9 0 0 0-.9-.9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800">Failed to load</h3>
          <p className="mt-1 text-sm text-red-700">{message}</p>

          <div className="mt-3 flex items-center gap-2">
      
            <button
              onClick={() => typeof window !== "undefined" && window.location.reload()}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-red-200 text-red-700 rounded-md text-sm hover:bg-red-50"
            >
              Refresh page
            </button>
          </div>
        </div>
      </div>
    </motion.div>
        </div>
    );
};

export default ErrorBox;