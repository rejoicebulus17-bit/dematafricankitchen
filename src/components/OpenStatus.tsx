import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const OpenStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const checkOpenStatus = () => {
      // Get current time in Qatar (UTC+3)
      const now = new Date();
      const qatarTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Qatar"}));
      
      const currentDay = qatarTime.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const currentHour = qatarTime.getHours();
      const currentMinute = qatarTime.getMinutes();
      const currentTimeInMinutes = currentHour * 60 + currentMinute;
      
      // Format current time for display
      const timeString = qatarTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Qatar'
      });
      setCurrentTime(timeString);

      let openTime, closeTime;
      
      // Define operating hours based on day
      if (currentDay >= 1 && currentDay <= 4) {
        // Monday-Thursday: 10am-11pm
        openTime = 10 * 60; // 10:00 AM in minutes
        closeTime = 23 * 60; // 11:00 PM in minutes
      } else if (currentDay === 5) {
        // Friday: 12pm-11pm
        openTime = 12 * 60; // 12:00 PM in minutes
        closeTime = 23 * 60; // 11:00 PM in minutes
      } else {
        // Saturday-Sunday: 10am-11pm
        openTime = 10 * 60; // 10:00 AM in minutes
        closeTime = 23 * 60; // 11:00 PM in minutes
      }
      
      // Check if currently open
      const open = currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime;
      setIsOpen(open);
    };

    // Check status immediately
    checkOpenStatus();
    
    // Update every minute
    const interval = setInterval(checkOpenStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Clock className="w-4 h-4 text-gray-600" />
      <span className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
        {currentTime} Qatar Time
      </span>
      <span className="text-sm font-medium px-2 py-1 rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
        <span className={`inline-flex items-center ${isOpen ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'} px-2 py-1 rounded-full`}>
          <span className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
          {isOpen ? 'Open Now' : 'Closed'}
        </span>
      </span>
    </div>
  );
};

export default OpenStatus;