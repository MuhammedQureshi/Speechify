import InputText from "@/components/InputText"

async function GetVoices() {
  const options = {method: 'GET'};

  const res = await fetch('https://api.elevenlabs.io/v1/voices', options);

  return res.json();
}
 
export default async function Home() {

  const Voices = await GetVoices();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="lg:w-[80rem] md:w-[50rem] h-screen text-center">
      <InputText voices={Voices} />
      </div>
    </main>
  )
}
