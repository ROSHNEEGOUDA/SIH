import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faExclamationTriangle,
  faBell,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const EventTimeline = () => {
  const events = [
    { time: "2023-06-15 14:30:22", type: "yellow", message: "Suspicious login attempt" },
    { time: "2023-06-15 14:45:10", type: "red", message: "File access in restricted directory" },
    { time: "2023-06-15 15:12:05", type: "orange", message: "Outbound connection to unknown IP" },
    { time: "2023-06-15 15:30:18", type: "blue", message: "System configuration change" },
    { time: "2023-06-15 16:05:33", type: "yellow", message: "Large data transfer initiated" },
  ];

  const stats = [
    { label: "Total Events", value: 152, color: "text-gray-800" },
    { label: "Critical Events", value: 3, color: "text-red-600" },
    { label: "Alerts", value: 12, color: "text-orange-600" },
    { label: "Warnings", value: 37, color: "text-yellow-500" },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "yellow":
        return <FontAwesomeIcon icon={faExclamationCircle} className="text-yellow-500" />;
      case "red":
        return <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-600" />;
      case "orange":
        return <FontAwesomeIcon icon={faBell} className="text-orange-600" />;
      case "blue":
        return <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500" />;
      default:
        return <FontAwesomeIcon icon={faExclamationCircle} className="text-gray-400" />;
    }
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-xl font-bold">Event Timeline</h1>

      {/* Interactive Timeline */}
      <div className="mt-6 p-4 bg-white border rounded-md">
        <h2 className="text-lg font-semibold">Interactive Timeline</h2>
        <ul className="mt-4">
          {events.map((event, index) => (
            <li key={index} className="flex items-center gap-4 mb-4">
              <span>{getIcon(event.type)}</span>
              <span className="text-sm text-gray-500">{event.time}</span>
              <span className="text-sm">{event.message}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Event Statistics */}
      <div className="mt-6 p-4 bg-white border rounded-md">
        <h2 className="text-lg font-semibold">Event Statistics</h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <select className="border px-4 py-2 rounded-md focus:outline-none">
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
        <button className="px-4 py-2 bg-black text-white rounded-md">Export Timeline</button>
      </div>
    </div>
  );
};

export default EventTimeline;
