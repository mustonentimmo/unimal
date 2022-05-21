import React from 'react';

interface SubSectionProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const Subsection: React.FC<SubSectionProps> = ({ title, children, className }) => {
  return (
    <section className={className}>
      <h2 className="mb-2 text-xl font-extrabold leading-8 tracking-tight text-gray-900">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Subsection;
