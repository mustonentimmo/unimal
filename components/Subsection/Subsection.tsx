import React from 'react';

interface SubSectionProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const Subsection: React.FC<SubSectionProps> = ({ title, children, className }) => {
  return (
    <section className={className}>
      <h2 className="text-md mb-1 font-bold tracking-tight text-gray-900">{title}</h2>
      {children}
    </section>
  );
};

export default Subsection;
