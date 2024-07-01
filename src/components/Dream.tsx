
'use client'
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { UrlBuilder } from "@bytescale/sdk";
import { UploadWidgetConfig } from "@bytescale/upload-widget";
import { UploadDropzone } from "@bytescale/upload-widget-react";
import { CompareSlider } from "./CompareSlider";
import LoadingDots from "./LoadingDots";
import ResizablePanel from "./ResizablePanel";
import Toggle from "./Toggle";
import appendNewToName from "../../utils/appendNewToName";
import downloadPhoto from "../../utils/downloadPhoto";
import DropDown from "./DropDown";
import { roomType, rooms, themeType, themes } from "../../utils/dropdownTypes";




const options: UploadWidgetConfig = {
    apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
        ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
        : "free",
    maxFileCount: 1,
    mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
    editor: { images: { crop: false } },
    styles: {
      colors: {
        primary: "#2563EB", // Boutons et liens principaux
        error: "#d23f4d", // Messages d'erreur
        shade100: "#333", // Texte standard
        shade200: "#333e", // Texte du bouton secondaire
        shade300: "#333d", // Texte du bouton secondaire (survol)
        shade400: "#333c", // Texte de bienvenue
        shade500: "#3339", // Bouton de fermeture de la modal
        shade600: "#3337", // Bordure
        shade700: "#3332", // Arrière-plan de l'indicateur de progression
        shade800: "#3331", // Arrière-plan de l'élément de fichier
        shade900: "#333f", // Divers (boutons de recadrage glissables, etc.)
      },
    },
  };
  
   export default function DreamPage() {
    const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
    const [restoredImage, setRestoredImage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
    const [sideBySide, setSideBySide] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [photoName, setPhotoName] = useState<string | null>(null);
    const [theme, setTheme] = useState<themeType>('Minimalist');
    const [room, setRoom] = useState<roomType>('Bathroom');
  
    const UploadDropZone = () => (
      <UploadDropzone
        options={options}
        onUpdate={({ uploadedFiles }) => {
          if (uploadedFiles.length !== 0) {
            const image = uploadedFiles[0];
            const imageName = image.originalFile.originalFileName;
            const imageUrl = UrlBuilder.url({
              accountId: image.accountId,
              filePath: image.filePath,
              options: {
                transformation: "preset",
                transformationPreset: "thumbnail"
              }
            });
            setPhotoName(imageName);
            setOriginalPhoto(imageUrl);
            generatePhoto(imageUrl);
          }
        }}
        width="670px"
        height="250px"
      />
    );
  
    async function generatePhoto(fileUrl: string) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setLoading(true);
      const res = await fetch("/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl: fileUrl, theme, room }),
      });
      console.log(res);
      let newPhoto = await res.json();
      
      
      if (res.status !== 200) {
        setError(newPhoto);
      } else {
        setRestoredImage(newPhoto[1]);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1300);
    }
  
    return (
      <div className="flex  flex-col   py-2 min-h-screen bg-white">
  
        <main className="flex flex-col   text-center px-4 mt-4 sm:mb-0 mb-8">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">
          Créez votre intérieur de rêve avec  <span className="text-blue-600">House Design</span>
          </h1>
          <ResizablePanel>
            <AnimatePresence mode="wait">
              <motion.div className="flex justify-between items-center w-full flex-col mt-4">
                {!restoredImage && (
                  <>
                    <div className="space-y-4 w-full max-w-sm">
                      <div className="flex mt-3 items-center space-x-3">
                        <Image
                          src="/number-1-white.svg"
                          width={30}
                          height={30}
                          alt="1 icon"
                        />
                        <p className="text-left font-medium text-xl">
                        Étape 1 -  Choisissez le thème .
                        </p>
                      </div>
                      <DropDown
                        theme={theme}
                        setTheme={(newTheme) =>
                          setTheme(newTheme as typeof theme)
                        }
                        themes={themes}
                      />
                    </div>
                    <div className="space-y-4 w-full max-w-sm">
                      <div className="flex mt-10 items-center space-x-3">
                        <Image
                          src="/number-2-white.svg"
                          width={30}
                          height={30}
                          alt="1 icon"
                        />
                        <p className="text-left font-medium text-xl">
                        Étape 2 - Choisissez la pièce.
                        </p>
                      </div>
                      <DropDown
                        theme={room}
                        setTheme={(newRoom) => setRoom(newRoom as typeof room)}
                        themes={rooms}
                      />
                    </div>
                    <div className="mt-4 w-full max-w-sm">
                      <div className="flex mt-6 w-96 items-center space-x-3">
                        <Image
                          src="/number-3-white.svg"
                          width={30}
                          height={30}
                          alt="1 icon"
                        />
                        <p className="text-center  font-medium text-xl">
                        Étape 3 - Téléchargez la photo 
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {restoredImage && (
                  <div>
                    Voici votre <b>{room.toLowerCase()}</b> remodelé dans le thème{" "}
                    <b>{theme.toLowerCase()}</b>!{" "}
                  </div>
                )}
                <div
                  className={`${
                    restoredLoaded ? "visible mt-6 -ml-8" : "invisible"
                  }`}
                >
                  <Toggle
                    className={`${restoredLoaded ? "visible mb-6" : "invisible"}`}
                    sideBySide={sideBySide}
                    setSideBySide={(newVal) => setSideBySide(newVal)}
                  />
                </div>
                {restoredLoaded && sideBySide && (
                  <CompareSlider
                    original={originalPhoto!}
                    restored={restoredImage!}
                  />
                )}
                {!originalPhoto && <UploadDropZone />}
                {originalPhoto && !restoredImage && (
                  <Image
                    alt="photo originale"
                    src={originalPhoto}
                    className="rounded-2xl h-96"
                    width={475}
                    height={475}
                  />
                )}
                {restoredImage && originalPhoto && !sideBySide && (
                  <div className="flex sm:space-x-4 sm:flex-row flex-col">
                    <div>
                      <h2 className="mb-1 font-medium text-lg">Chambre Originale</h2>
                      <Image
                        alt="photo originale"
                        src={originalPhoto}
                        className="rounded-2xl relative w-full h-96"
                        width={475}
                        height={475}
                      />
                    </div>
                    <div className="sm:mt-0 mt-8">
                      <h2 className="mb-1 font-medium text-lg">Chambre Générée</h2>
                      <a href={restoredImage} target="_blank" rel="noreferrer">
                        <Image
                          alt="photo restaurée"
                          src={restoredImage}
                          className="rounded-2xl relative sm:mt-0 mt-2 cursor-zoom-in w-full h-96"
                          width={475}
                          height={475}
                          onLoadingComplete={() => setRestoredLoaded(true)}
                        />
                      </a>
                    </div>
                  </div>
                )}
                {loading && (
                  <button
                    disabled
                    className="bg-blue-500 rounded-full text-black font-medium px-4 pt-2 pb-3 mt-8 w-40"
                  >
                    <span className="pt-4">
                      <LoadingDots color="black" style="large" />
                    </span>
                  </button>
                )}
                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mt-8"
                    role="alert"
                  >
                    <span className="block sm:inline">{error}</span>
                  </div>
                )}
                <div className="flex space-x-2 justify-center">
                  {originalPhoto && !loading && (
                    <button
                      onClick={() => {
                        setOriginalPhoto(null);
                        setRestoredImage(null);
                        setRestoredLoaded(false);
                        setError(null);
                      }}
                      className="bg-blue-500 rounded-full text-black font-medium px-4 py-2 mt-8 hover:bg-blue-500/80 transition"
                    >
                      Générer Nouvelle Chambre
                    </button>
                  )}
                  {restoredLoaded && (
                    <button
                      onClick={() => {
                        downloadPhoto(
                          restoredImage!,
                          appendNewToName(photoName!)
                        );
                      }}
                      className="bg-white rounded-full text-black border font-medium px-4 py-2 mt-8 hover:bg-gray-100 transition"
                    >
                      Télécharger Chambre Générée
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </ResizablePanel>
        </main>
      </div>
    );
  }
