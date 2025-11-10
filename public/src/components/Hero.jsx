const Hero = props => {
  const title = props.title;
  const image = props.image;

  return (
    <div className="pt-20 pb-10 ">
      <main>
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl rounded-2xl overflow-hidden mr-10 ml-10">
                <div className="absolute inset-0">
                  <img className="h-full w-full object-cover" src={image} />
                  <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-6 sm:px-6 sm:py-24 lg:py-25 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
                    <span className="block text-white">{title}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
