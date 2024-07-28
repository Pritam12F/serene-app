import "../app/globals.css"

export function Landing() {
  return (
    <main className="flex-grow flex items-center justify-center bg-fade">
    <span className="flex flex-col text-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24">
      <div className="my-3 text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
        Serene
      </div>
      <div className="my-3 text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 typing-animation">
        Boost your productivity with serene.
      </div>
    </span>
  </main>
  );
}