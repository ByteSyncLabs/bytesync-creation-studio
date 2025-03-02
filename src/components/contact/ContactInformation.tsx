
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInformation: React.FC = () => {
  return (
    <div className="glass-panel rounded-xl p-8">
      <h4 className="text-xl font-semibold mb-6">Get in Touch</h4>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <Mail className="h-5 w-5 text-bytesync-orange" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground">bytesynclabs@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <Phone className="h-5 w-5 text-bytesync-orange" />
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-muted-foreground">7720025579</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-4 mt-1">
            <MapPin className="h-5 w-5 text-bytesync-orange" />
          </div>
          <div>
            <p className="font-medium">Address</p>
            <p className="text-muted-foreground">Pune, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
