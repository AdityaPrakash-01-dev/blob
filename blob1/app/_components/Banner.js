function Banner() {
  return (
    <section className="bg-[#f3fae7] flex justify-center items-center py-24">
      <div className="flex flex-row max-w-5xl w-full mx-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80"
            alt="Meet Tammy Gallaway"
            className="w-[400px] h-[480px] object-cover"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center pl-12 flex-1">
          <div className="relative">
            <h2 className="text-6xl font-serif text-[#191970] font-normal leading-tight mb-2">
              Meet Tammy
              <br />
              Gallaway
            </h2>
            {/* SVG Curve */}
            <svg
              className="absolute right-[-80px] top-[-60px] w-[180px] h-[180px] z-0"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90 170c30-40 80-60 70-110-10-50-80-60-100-10-20 50 40 120 90 80 50-40-10-120-70-80"
                stroke="#191970"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <p className="text-xl text-[#191970] mt-8 mb-8 max-w-xl">
            I'm a paragraph. Click here to add your own text and edit me. Just
            click “Edit Text” or double click me to add your own content and
            make changes to the font.
          </p>
          <button className="bg-[#236c4a] text-white text-xl font-semibold px-10 py-3 rounded-none w-fit hover:bg-[#174c32] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
