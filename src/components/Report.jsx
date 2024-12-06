import React, { useState } from "react";

const ReportGeneration = () => {
  const [reportFormat, setReportFormat] = useState("PDF");
  const [sections, setSections] = useState({
    executiveSummary: true,
    eventTimeline: true,
    fileAnalysis: true,
    networkAnalysis: true,
    indicatorsOfCompromise: true,
    aiRecommendations: true,
  });

  const generatedReports = [
    { name: "Case_1234_Full_Report.pdf", format: "PDF" },
    { name: "Case_1234_IOC_Summary.json", format: "JSON" },
  ];

  const handleSectionToggle = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Report Generation</h1>

        {/* Configure Report Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Configure Report</h2>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Report Format</label>
            <select
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 transition duration-300 ease-in-out"
              value={reportFormat}
              onChange={(e) => setReportFormat(e.target.value)}
            >
              <option value="PDF">PDF</option>
              <option value="JSON">JSON</option>
              <option value="CSV">CSV</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Include Sections</label>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(sections).map((sectionKey) => (
                <div key={sectionKey} className="flex items-center">
                  <input
                    type="checkbox"
                    id={sectionKey}
                    checked={sections[sectionKey]}
                    onChange={() => handleSectionToggle(sectionKey)}
                    className="mr-2"
                  />
                  <label htmlFor={sectionKey} className="text-gray-600">
                    {sectionKey
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Reports Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Generated Reports</h2>
          <div className="space-y-2">
            {generatedReports.map((report, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-50 border rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <span>{report.name}</span>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Report Button */}
        <div className="text-right">
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-600 transition transform hover:scale-105">
            Generate New Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportGeneration;
