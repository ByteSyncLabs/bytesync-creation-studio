
import React from "react";

const ContactHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <h2 className="text-bytesync-orange font-semibold tracking-wide animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        CONTACT US
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
        Let's Bring Your Vision to Life!
      </h3>
      <p className="text-muted-foreground animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
        Partner with ByteSync Labs and experience the perfect blend of creativity, technology, and functionality.
      </p>
    </div>
  );
};

export default ContactHeader;
