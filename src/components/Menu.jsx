import React from 'react'

const Menu = () => {
  return (
    <>
      <div className="text-slate-200 grid items-center justify-center min-h-screen">

        <div className="max-w-screen-xl w-full px mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 p-6">
            <div className="relative p-4 text-white sm:col-span-2 flex grid-col lg:flex-row items-center justify-center backdrop-blur-sm">

              <img
                src="img/evolution.svg"
                alt="Planet Exploration"
                className="h-32 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />

              <div className="flex flex-col">
                <div className="p-6 text-center justify-center text-6xl font-bold">
                  Evolution
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="max-w-screen-xl w-full px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
            <div className="relative p-4 text-white sm:col-span-2 flex grid-col lg:flex-row items-center justify-center backdrop-blur-sm">

              <img
                src="img/baronas.svg"
                alt="Planet Exploration"
                className="h-32 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />

              <div className="flex flex-col">
                <div className="p-12 text-center justify-center text-6xl font-bold">
                 Baronas 
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="max-w-screen-xl w-full px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
            <div className="relative p-4 text-white sm:col-span-2 flex grid-col lg:flex-row items-center justify-center backdrop-blur-sm">

              <img
                src="img/electra.svg"
                alt="Planet Exploration"
                className="h-32 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              />

              <div className="flex flex-col">
                <div className="p-12 text-center justify-center text-6xl font-bold">
                  Electra
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Menu