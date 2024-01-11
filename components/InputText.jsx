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
  
function InputText() {
    const [inputText, setInputText] = useState('');

    const handleTextChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleConvertToSpeech = () => {
      console.log("Text to convert to speech:", inputText);
    };
  
    return (

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Text to speech converter</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={inputText}
              onChange={handleTextChange}
              placeholder="Input text here"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleConvertToSpeech} className="w-full">
              Console log the text
            </Button>
          </CardFooter>
        </Card>

  )
}

export default InputText