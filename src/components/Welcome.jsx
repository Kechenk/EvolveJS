import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col">
        <img
          src="img/evolution.svg"
          alt="Evolution Logo"
          className="reveal-text w-32 h-32 mb-6 md:w-48 md:h-48"
        />

        <div className="text-center text-slate-200 font-bold space-y-4">
          <h1 className="reveal-text text-4xl md:text-5xl">Evolve 25</h1>
          <h2 className="reveal-text text-2xl md:text-4xl">Cosmic Tech Odyssey</h2>
          <h3 className="reveal-text text-xl md:text-3xl">Shaping The Future</h3>
        </div>

        <div className="reveal-again reveal-text mt-8 space-y-4 text-center">
          <a
            href="#"
            className="block py-3 px-12 rounded-full text-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95 transition-all shadow-md"
          >
            Daftar
          </a>

          <div className="text-slate-400 text-sm">
            <span>Sudah punya akun? </span>
            <a href="#" className="text-indigo-400 underline hover:text-indigo-300">
              Masuk
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
