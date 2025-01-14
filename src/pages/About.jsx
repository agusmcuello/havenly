const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center animate-fadeInUp">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Comfort is
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Havenly
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-center animate-fadeIn">
        At Havenly, we transform spaces into unique homes with quality and
        stylish furniture. Our mission is to bring comfort, style, and
        functionality to every corner of your home. Discover how we can help you
        create the place you’ve always <br /> dreamed of.
      </p>
    </>
  );
};

export default About;
