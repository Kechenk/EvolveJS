import React from 'react'

const About = () => {
  return (
    <div className="bg-transparent">
      <div className="text-slate-200 flex items-center justify-center min-h-screen flex-col text-3xl">
        About Us
        <div className="text-lg mt-4 text-center max-w-screen-sm backdrop-blur-0">
        Evolution Adalah acara tahunan yang diadakan oleh Teknik Elektro Institut Teknologi Sepuluh Nopember.
        Tahun ini, Evolution 2025 Mengajak kalian menjelajah luar angkasa dengan tema "Cosmic Tech Odyssey: Shaping THhe Futures"
        Tema Ini menggabungkan misteri luasnya angkasa dengan inovasi teknologi, melambangkan potensi tanpa batas dari generasi muda untuk mendorong
        batas pengetahuan dan penjelajahan. Terinspirasi dari pemandangan kosmik, astronot, dan skena masa depan luar angkasa
        </div>
        <img
          src="img/Cosmic-Odyssey.webp"
          alt="Cosmic-Odyessey"
          className="max-w-3xl mt-12"
        />
      </div>
    </div>
  )
}

export default About