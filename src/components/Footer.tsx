import Link from "next/link";



export default function Footer() {
  return (
   <footer className="p-8 sm:p-12 border-t border-gray-800 text-gray-400 bg-black">

      <section className="container flex justify-around">
          <div className="block">
            <img src="/logohousedesign7.png" width={100}/>
            
          </div>

          {/* <div className="block">
            <h3 className="text-lg font-semibold text-gray-100">Resources</h3>
            <div className="flex flex-col gap-1 mt-2">
              <a href="" className="text-gray-400 hover:text-white hover:underline">
              Interior Design Advice
              </a>
              <a href="" className="text-gray-400 hover:text-white hover:underline">
              Interior Design Glossary              </a>
              <a href="" className="text-gray-400 hover:text-white hover:underline">
              Interior Design Podcast              </a>
            </div>
          </div> */}

          <div className="block">
          <p className="text-lg text-gray-100 my-4">Créez votre intérieur de rêve avec l'IA.</p>
            <p className="mt-2">
              © 2024 Tous droits réservés</p>
              <p className="sm">House Design AI®.</p>
              <div className="sm:whitespace-nowrap">
              Maroc, Marrakech
              </div>
          </div>
          <div className="block">
          <p className="text-lg text-gray-100 my-4">Contactez Nous</p>
            <p className="mt-2">
                Téléphone : +212 6 65 84 64 65 
             </p>
              <p className="sm">
                  Email : contact@housebooking.ma
              </p>
              <div className="sm:whitespace-nowrap">
                Conciergerie : <a className="text-blue-500" href="https://housebooking.ma"> housebooking.ma</a>
              </div>
          </div>
      </section>
   </footer>
  );
}
