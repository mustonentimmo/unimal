interface CTASectionProps {
  topTitle: string;
  bottomTitle: string;
  buttonText: string;
  href: string;
}

const CTASection = ({ topTitle, bottomTitle, buttonText, href }: CTASectionProps) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto my-12 max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-20 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{topTitle}</span>
          <span className="block text-indigo-600">{bottomTitle}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href={href}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
