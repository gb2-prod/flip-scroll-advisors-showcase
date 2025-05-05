
import React from "react";
import { Button } from "@/components/ui/button";

interface AdvisorCardProps {
  name: string;
  credentials: string;
  specialty: string;
  experience: string;
}

const AdvisorCard = ({ name, credentials, specialty, experience }: AdvisorCardProps) => {
  return (
    <div className="bg-[#0D1B24] rounded-lg p-6 flex flex-col items-center w-[240px] min-w-[240px] mx-3">
      <div className="w-[120px] h-[120px] rounded-full bg-gray-300 mb-4 flex items-center justify-center">
        {/* Placeholder for profile image */}
        <span className="text-gray-500">Profile</span>
      </div>
      <h3 className="text-white font-medium text-xl mb-1">{name}</h3>
      <p className="text-gray-400 text-sm mb-4 text-center">
        {credentials}, {specialty}, {experience}
      </p>
      <Button 
        variant="outline"
        className="bg-transparent border border-gray-600 text-white hover:bg-[#1A2C39] transition-colors w-full"
      >
        Connect Now
      </Button>
    </div>
  );
};

export default AdvisorCard;
