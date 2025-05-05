
import React, { useEffect, useRef } from "react";
import AdvisorCard from "./AdvisorCard";

const advisorsData = [
  {
    id: 1,
    name: "Viral Bhatt",
    credentials: "AMFI",
    specialty: "Personal finance",
    experience: "18yrs"
  },
  {
    id: 2,
    name: "Nisha Sanghavi",
    credentials: "CFA",
    specialty: "Personal finance",
    experience: "7yrs"
  },
  {
    id: 3,
    name: "Rajeev Kumar",
    credentials: "CMA",
    specialty: "Accounting",
    experience: "10yrs"
  },
  {
    id: 4,
    name: "Rajesh Verma",
    credentials: "CFP",
    specialty: "Wealth management",
    experience: "5yrs"
  },
  {
    id: 5,
    name: "Suresh Patel",
    credentials: "MBA",
    specialty: "Investment analysis",
    experience: "12yrs"
  }
];

const ScrollingAdvisors = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1Element = row1Ref.current;
    const row2Element = row2Ref.current;
    let animationId: number;
    let position1 = 0;
    let position2 = 0;

    const animate = () => {
      if (row1Element && row2Element) {
        // First row moves right
        position1 += 0.5;
        if (position1 >= row1Element.scrollWidth / 2) {
          position1 = 0;
        }
        row1Element.scrollLeft = position1;

        // Second row moves left
        position2 += 0.5;
        if (position2 >= row2Element.scrollWidth / 2) {
          position2 = 0;
        }
        row2Element.scrollLeft = row2Element.scrollWidth / 2 - position2;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="bg-[#0D2032] text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <p className="uppercase text-sm tracking-wider mb-2">MEET OUR FINANCIAL EXPERTS</p>
        <h2 className="text-4xl font-bold mb-12">Know your Dedicated Financial Advisor</h2>
      </div>

      {/* First row - scrolling right */}
      <div 
        ref={row1Ref}
        className="flex overflow-hidden mb-6 pb-4"
      >
        <div className="flex whitespace-nowrap">
          {advisorsData.map((advisor) => (
            <AdvisorCard
              key={`row1-${advisor.id}`}
              name={advisor.name}
              credentials={advisor.credentials}
              specialty={advisor.specialty}
              experience={advisor.experience}
            />
          ))}
          {/* Duplicate set for seamless scrolling */}
          {advisorsData.map((advisor) => (
            <AdvisorCard
              key={`row1-duplicate-${advisor.id}`}
              name={advisor.name}
              credentials={advisor.credentials}
              specialty={advisor.specialty}
              experience={advisor.experience}
            />
          ))}
        </div>
      </div>

      {/* Second row - scrolling left */}
      <div 
        ref={row2Ref}
        className="flex overflow-hidden"
      >
        <div className="flex whitespace-nowrap">
          {advisorsData.map((advisor) => (
            <AdvisorCard
              key={`row2-${advisor.id}`}
              name={advisor.name}
              credentials={advisor.credentials}
              specialty={advisor.specialty}
              experience={advisor.experience}
            />
          ))}
          {/* Duplicate set for seamless scrolling */}
          {advisorsData.map((advisor) => (
            <AdvisorCard
              key={`row2-duplicate-${advisor.id}`}
              name={advisor.name}
              credentials={advisor.credentials}
              specialty={advisor.specialty}
              experience={advisor.experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingAdvisors;
