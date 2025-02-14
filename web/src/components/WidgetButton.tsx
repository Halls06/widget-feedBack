import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { ChatTeardropDots} from "@phosphor-icons/react"
import { WidgetForm } from "./Widgetform/Index"

export function WidgetButton(){
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      
      <PopoverPanel>
        <WidgetForm />
      </PopoverPanel>

      <PopoverButton className="bg-violet-600 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6"/>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        <span className="pl-2">
          FeedBack
        </span>
      </span>
      </PopoverButton>

    </Popover>
  )
}