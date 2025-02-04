import { useState } from "react";
import { CloseButton } from "../CloseButton";

import BugImageUrl from "../assets/lagarta.png"
import IdeiaImageUrl from "../assets/light-bulb-svgrepo-com.png"
import OtherImageUrl from "../assets/images(1).svg"


const feedbackTypes = {
    bug:{
      title: 'Problema',
      image: {
        source: BugImageUrl,
        alt: 'Imagem de um inseto'
      } ,
    },
    IDEIA: {
        title: 'Ideia',
        image: {
            source: IdeiaImageUrl,
            alt: 'Imagem de uma lampada',
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: OtherImageUrl,
            alt: 'Imagem de uma Nuvem de pensamentos',
        },
    },
}

type FeedbackProps = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackProps | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100-vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            
            {!feedbackType ? (
                <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                  return (
                      <button
                      key={key}
                      className="bg-zinc-800 ronded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-[#8257e6] focus:border-[#8257e6] focus:outline-none"
                      onClick={() => setFeedbackType(key as FeedbackProps)}
                      type="button"
                      >
                          <img src={value.image.source} alt={value.image.alt} />
                          <span>{value.title}</span>
                      </button>
                  )
                }) }
              </div>
            ) : (
                <p>Hello world</p>
            )}
            


            <footer className="text-xs text-neutral-400 flex items-center justify-center">
                Feito com &#128151; pela  <a className="underline underline-offset-2" href="#">CodebyHalls</a>
            </footer>

        </div>
    );
}