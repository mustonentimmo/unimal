const Subsection = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900">{title}</h2>
      {children}
    </section>
  );
};

export default Subsection;
