import React from 'react';

const Step: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="w-full sm:w-72 flex flex-col items-center p-3 m-4 bg-white rounded-lg shadow-md">
      <img src={icon} alt={title} className="w-12 h-12" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 text-center ">{description}</p>
    </div>
  );
};

const Hero2: React.FC = () => {
  const style = {
    marqueeGroup: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: '1rem',
      minWidth: '100%',
      animation: '0% { transform: translateX(2rem); } 100% { transform: translateX(var(2rem)); }',
      '--scroll-start': '0',
      '--scroll-end': 'calc(-100% - 1rem)',
    }
  }

  return (
   <section>

    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-y-0 gap-x-4 mt-2">
            <div className='text-white text-xl text-center'>
            Cliquez sur un style pour l'essayer
            </div>
            <img className="w-14 h-14 text-white scale-y-[-1] translate-y-5 z-10 pointer-events-none" src="https://roomai.com/assets/home/arrow-b15526e7156355ddd43f75105f27df50575cfb2be5ea891464aa7a4aeac6661f.svg" alt="" />
        </div>

        <div className=''>

          <div className="block">
            <div className="marqueeWrapper">
              <div className="marquee py-5 ">
                <div className=" flex justify-evenly items-center flex-wrap ">
                     
                      <a href="/dashboard"className="shrink-0 animate-bounce bg-gray-800 relative block overflow-hidden rounded-lg h-48 w-full sm:w-48 sm:my-5 group/room_style">
                        <img className="w-full h-full object-cover object-center block" src="https://resize.imagekit.co/P-orc-FRhFAKDIfM1gXr3FnPEZAcVvPnfCNyTXvVOZ8/rs:fill:220:220/dpr:3/plain/https://roomai.com/assets/styles/post_apocalyptic-f1a2d88a757a73ac9bd4afab99e4b0d1dc20565262f57e8bba344877d67bc658.jpg" alt="" />
                        <div className='select-none absolute inset-0 flex text-center items-start font-medium text-shadow-md leading-5 rounded transition-all duration-200'></div>
                        <div className="text-lg px-1 pt-4 pb-8 w-full bg-gradient-to-b from-black/80 via-black/60 to-black/0"> Tropical</div>
                        <div className='border absolute pointer-events-none w-full inset-0 rounded-lg transition-all duration-200 border-white/30 group-hover/room_style:border-2 group-hover/room_style:border-white'></div>
                      </a>

                      <a href="/dashboard" className='shrink-0 bg-gray-800 relative block overflow-hidden rounded-lg h-48 w-full sm:w-48 sm:my-5 group/room_style'>

                        <img className='w-full h-full object-cover object-center block' loading='lazy' src="https://resize.imagekit.co/3sM6ffU6uv7CrLi5HxWQj4bz3Q70GBMTyEIMQ0uuP1k/rs:fill:220:220/dpr:2/plain/https://roomai.com/assets/styles/vintage_glam-ee888e198ae8c4f767909ca9a3fd8274058d851487e73e1fab411b27da0917f8.jpg" alt=""/>


                        <div className='text-lg px-1 pt-4 pb-8 w-full  from-black/80 via-black/60 to-black/0'>
                  Moderm
                        </div>
                        <div className='border absolute pointer-events-none w-full inset-0 rounded-lg transition-all duration-200 border-white/30 group-hover/room_style:border-2 group-hover/room_style:border-white'></div>
                      </a>
                      <a href="/dashboard"className="shrink-0 bg-gray-800 relative block overflow-hidden rounded-lg h-48 w-full sm:w-48 sm:my-5 group/room_style">
                        <img className="w-full h-full object-cover object-center block" src="https://resize.imagekit.co/LM-tXWPh3dHxt4UaVIZzUKI9_d6l4MBX0JHRKihY33Q/rs:fill:220:220/dpr:1/plain/https://roomai.com/assets/styles/candy_land-83a6ca030579ce5cfded791f64ce79d701a3f3fbe272d9ffd1fbdc8df1a91c47.jpg" alt="" />
                        <div className='select-none absolute inset-0 flex text-center items-start font-medium text-shadow-md leading-5 rounded transition-all duration-200'></div>
                        <div className="text-lg px-1 pt-4 pb-8 w-full bg-gradient-to-b from-black/80 via-black/60 to-black/0"> Tropical</div>
                        <div className='border absolute pointer-events-none w-full inset-0 rounded-lg transition-all duration-200 border-white/30 group-hover/room_style:border-2 group-hover/room_style:border-white'></div>
                      </a>

                      <a href="/dashboard" className='shrink-0 bg-gray-800 relative block overflow-hidden rounded-lg h-48 w-full sm:w-48 sm:my-5 group/room_style'>

                        <img className='w-full h-full object-cover object-center block' loading='lazy' src="https://resize.imagekit.co/0Mw_REc6OOBaCcyOdKqt6hLCyvEdUHppsJ5rbnRE1KU/rs:fill:220:220/dpr:1/plain/https://roomai.com/assets/styles/modern-9e0f6e0a6358e09bb3698fc470b471af3fd3fc5074fe86054f96def790fe8812.jpg" alt="" srcSet="https://resize.imagekit.co/0Mw_REc6OOBaCcyOdKqt6hLCyvEdUHppsJ5rbnRE1KU/rs:fill:220:220/dpr:1/plain/https://roomai.com/assets/styles/modern-9e0f6e0a6358e09bb3698fc470b471af3fd3fc5074fe86054f96def790fe8812.jpg 1x, https://resize.imagekit.co/fzDw7gkesVUo_ROLrml1HxU5Bc_eNl3hZv8cNOAXa9Q/rs:fill:220:220/dpr:2/plain/https://roomai.com/assets/styles/modern-9e0f6e0a6358e09bb3698fc470b471af3fd3fc5074fe86054f96def790fe8812.jpg 2x, https://resize.imagekit.co/rJvoL38pUP-0LsaYhXwoktUCgQ8DWguT9rg27ciR5KY/rs:fill:220:220/dpr:3/plain/https://roomai.com/assets/styles/modern-9e0f6e0a6358e09bb3698fc470b471af3fd3fc5074fe86054f96def790fe8812.jpg 3x"/>


                        <div className='text-lg px-1 pt-4 pb-8 w-full  from-black/80 via-black/60 to-black/0'>
                  Moderm
                        </div>
                        <div className='border absolute pointer-events-none w-full inset-0 rounded-lg transition-all duration-200 border-white/30 group-hover/room_style:border-2 group-hover/room_style:border-white'></div>
                      </a>

               
                </div>
              
              </div>
            </div>
          </div>
        </div>
   </section>
  );
};

export default Hero2;
