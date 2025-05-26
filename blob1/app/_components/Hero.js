export default function Hero() {
  return (
    <div>
      <div className="flex min-h-screen bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center">
        {/* Left Side */}
        <div className="flex-1 bg-white/70 flex flex-col justify-center items-end px-12">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-7xl font-serif text-indigo-900 leading-tight mb-8">
              Open Your
              <br />
              Mind to
              <br />
              Mindfulness
            </h1>
            <p className="text-2xl text-indigo-900 mb-10">
              The blog of here and now
            </p>
            <div>
              <div className="text-lg text-emerald-700 mb-2">
                Mind your mailbox for new posts
              </div>
              <form className="flex flex-col gap-3">
                <label className="text-emerald-700">
                  Email *
                  <input
                    type="email"
                    required
                    className="w-full mt-1 p-2 border border-emerald-200 rounded text-lg"
                  />
                </label>
                <div className="flex items-center gap-2">
                  <input type="checkbox" required className="w-5 h-5" />
                  <span className="text-emerald-700 text-base">
                    Yes, subscribe me to your newsletter. *
                  </span>
                </div>
                <button
                  type="submit"
                  className="bg-emerald-900 text-white px-8 py-2 rounded text-lg font-semibold w-fit mt-2 hover:bg-emerald-800 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center bg-white/10">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
            alt="Meditating person"
            className="max-w-[80%] max-h-[80vh] rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
