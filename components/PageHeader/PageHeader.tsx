import { useRouter } from 'next/router';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

interface PageHeaderProps {
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }: PageHeaderProps) => {
  const router = useRouter();

  return (
    <div className="flex h-[6rem] items-center justify-center pt-10 text-indigo-600">
      <a
        onClick={() => router.back()}
        className="mr-auto flex cursor-pointer items-center justify-center"
      >
        <IoIosArrowBack />
        <span className="text-lg font-medium">Tagasi</span>
      </a>
      {title && <h1 className="mr-auto text-[3rem] font-extrabold capitalize">{title}</h1>}
    </div>
  );
};

export default PageHeader;
