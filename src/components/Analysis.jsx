import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const AnalysisDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <h1 className="text-2xl font-bold mb-6">Analysis Dashboard</h1>

      {/* Automated Analysis Section */}
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Automated Analysis</h2>
        <button className="px-6 py-2 bg-black text-white rounded-md mb-4">
          Start Analysis
        </button>
        <div className="h-2 bg-gray-200 rounded-full mt-4">
          <div className="h-full bg-gray-400 rounded-full" style={{ width: "50%" }}></div>
        </div>
      </div>

      {/* File Analysis & Threat Detection Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* File Analysis Card */}
        <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-2">File Analysis</h2>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFileAlt} className="text-gray-800 w-6 h-6" />
            <span className="text-gray-500">Total Files Scanned</span>
          </div>
          <p className="text-2xl font-bold mt-2">1,234,567</p>
        </div>

        {/* Threat Detection Card */}
        <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-2">Threat Detection</h2>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="text-red-600 w-6 h-6"
            />
            <span className="text-gray-500">Potential Threats Identified</span>
          </div>
          <p className="text-2xl font-bold text-red-600 mt-2">23</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex gap-6 mb-6">
        <button className="px-6 py-2 rounded-md bg-gray-100 font-medium">
          AI/ML Insights
        </button>
        <button className="px-6 py-2 rounded-md bg-gray-100 font-medium">
          Indicators of Compromise
        </button>
      </div>

      {/* AI/ML Analysis Results Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold">AI/ML Analysis Results</h2>
        <p className="text-gray-500 mt-4">Details of the analysis results will appear here.</p>
      </div>
    </div>
  );
};

export default AnalysisDashboard;