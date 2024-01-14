'use client'
import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";




  
export default function InputText({ voices }: any) {

    const [inputText, setInputText] = useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("")

    const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {-
      setInputText(event.target.value);
      setValue(value);
    };
  
    const handleConvertToSpeech = () => {
      console.log("Text to convert to speech:", inputText);
      console.log('Selected voice:', value);
    };

    return (

        <Card className="w-full">
            <CardHeader>
              <CardTitle>Text to speech converter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="pb-5">
            <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between capitalize"
        >
  {value
      ? value || "Select voice..."
      : "Select voice..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
          {voices.voices.map((voice: { voice_id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
                    <CommandItem
                      key={voice.voice_id}
                      value={voice.name?.toString()}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === voice.voice_id ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {voice.name}
                    </CommandItem>
                  ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
    </div>
              <Textarea
                value={inputText}
                onChange={handleTextChange}
                placeholder="Input text here"
                className="text-1xl"
              />
            </CardContent>
            <CardFooter>
              {inputText ? 
                <Button onClick={handleConvertToSpeech} className={`w-full`}>
                  Console log the text
                </Button>   
                :
                <Button disabled onClick={handleConvertToSpeech} className={`w-full`}>
                  Console log the text
                </Button>
              }  
            </CardFooter>
        </Card>

  )
}
