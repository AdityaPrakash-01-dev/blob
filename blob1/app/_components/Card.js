function Card() {
  return (
    <div className="flex justify-center items-center py-8 bg-[#fcfaf6]">
      <div className="flex flex-row bg-white border border-[#bdbdd7] rounded-none shadow-none max-w-5xl w-full">
        {/* Image */}
        <img
          className="object-cover h-72 w-80"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
          alt="Meditation"
        />
        {/* Content */}
        <div className="flex flex-col flex-1 p-8">
          <h2 className="text-3xl font-serif text-[#191970] font-bold mb-4">
            App &amp; Down: 5 Apps to Help You Meditate
          </h2>
          <p className="text-lg text-[#191970] mb-6">
            Create a blog post subtitle that summarizes your post in a few
            short, punchy sentences and entices your audience to continue
            reading....
          </p>
          <hr className="border-[#bdbdd7] mb-4" />
          <div className="flex justify-between items-center text-[#191970] text-sm">
            <div>
              <span>0 views</span>
              <span className="mx-4">0 comments</span>
            </div>
            <div className="flex items-center gap-1">
              <span>13</span>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12.62 20.84a1.38 1.38 0 0 1-1.24 0C7.1 18.67 2 14.61 2 9.77A5.25 5.25 0 0 1 7.25 4.5c1.61 0 3.16.76 4.12 2.01A5.25 5.25 0 0 1 20 9.77c0 4.84-5.1 8.9-7.38 11.07z"
                  stroke="#F87171"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
