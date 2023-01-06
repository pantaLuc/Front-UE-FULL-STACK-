import React from 'react';

const Home = () => {
    return (
        <div>
          <div>
  <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2">
        <div className="flex flex-col justify-between lg:order-2">
          <div className="flex-1">
            <span className="inline-flex items-center rounded-xl bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600"> #1 Vos boutiques en ligne en un clic </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight xl:text-7xl"> Le commerce le plus proche de chez vous.</h1>
          </div>

          <div className="mt-6 lg:mt-auto">
            <p className="text-lg leading-7 text-gray-700 lg:text-xl lg:leading-8">Creez & Administrez vos boutiques une experiences unique pour vous</p>
            <div className="mt-10">
              <a href="#" title="" className="inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" role="button"> Bahh Clic Moi et Decouvre </a>
            </div>
          </div>
        </div>

        <div className="lg:order-1">
          <div className="relative mx-auto w-full max-w-sm">
            <img className="relative mx-auto w-full max-w-xs rounded-2xl sm:max-w-sm" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/5/portrait-girl.png" alt="" />

            <div className="absolute bottom-0 left-0 mb-12 -ml-2 w-72 rounded-2xl bg-white shadow-2xl sm:mb-24 sm:-ml-24 lg:-ml-12 xl:-ml-24">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-start">
                  
                  <div className="ml-4">
                    <p className="text-3xl font-semibold text-gray-900">3500</p>
                    <p className="mt-1 text-lg font-normal text-gray-700">Produits disponibles pour vous.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  
        </div>
    );
};

export default Home;