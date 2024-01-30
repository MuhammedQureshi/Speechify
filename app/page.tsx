import InputText from "@/components/InputText"

async function GetVoices() {
  const options = {method: 'GET'};

  const res = await fetch('https://api.elevenlabs.io/v1/voices', options);

  return res.json();
}

async function ToSpeech() {
  //api call to 11labs text-to-speech
  const options = {
    method: 'POST',
    headers: {
      'xi-api-key': 'c3fd96de3aab334176c7ffbd19c26f1a',
      'Content-Type': 'application/json'
    },
    body: '{"model_id":"eleven_multilingual_v2","text":"ABCDEFG","voice_settings":{"similarity_boost":0.2,"stability":0.1}}'
  };
  
  const speech = await fetch('https://api.elevenlabs.io/v1/text-to-speech/GBv7mTt0atIp3Br8iCZE', options);
  
  return speech.json();
}
 
export default async function Home() {

  const voices = await GetVoices();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="lg:w-[80rem] md:w-[50rem] h-screen text-center">
      <InputText voices={voices} />
      </div>
    </main>
  )
}
