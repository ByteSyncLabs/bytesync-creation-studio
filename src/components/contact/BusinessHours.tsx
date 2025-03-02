
import React from "react";

const BusinessHours: React.FC = () => {
  return (
    <div className="glass-panel rounded-xl p-8">
      <h4 className="text-xl font-semibold mb-4">Our Hours</h4>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span className="text-muted-foreground">Monday - Friday</span>
          <span>9:00 AM - 6:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span className="text-muted-foreground">Saturday</span>
          <span>10:00 AM - 4:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span className="text-muted-foreground">Sunday</span>
          <span>Closed</span>
        </li>
      </ul>
    </div>
  );
};

export default BusinessHours;
