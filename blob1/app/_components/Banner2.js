function Banner2() {
  return (
    <section className="bg-[#fcfaf6] py-24 flex flex-col items-center">
      {/* SVG Flower/Curve */}
      <div className="flex justify-center mb-8">
        <svg
          width="160"
          height="120"
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <ellipse
            cx="70"
            cy="70"
            rx="32"
            ry="38"
            fill="#e6f2d8"
            opacity="0.7"
          />
          <path
            d="M80 100 Q90 60 120 60 Q150 60 120 80 Q90 100 100 40 Q110 0 130 40 Q150 80 80 60 Q10 40 60 40 Q110 40 80 100 Z"
            stroke="#191970"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <blockquote className="text-[#191970] text-4xl md:text-6xl font-serif text-center max-w-5xl mx-auto mb-12">
        “Our life is shaped by our mind,
        <br />
        for we become what we think.”
      </blockquote>
      <div className="text-[#191970] text-2xl font-serif text-center">
        Buddha
      </div>
    </section>
  );
}

export default Banner2;
