import React from 'react'

const AudioPlayer = ({audioSrc}: any) => {
  return (
    <div className="bg-background-light/90 dark:bg-background-dark/90 overflow-hidden w-full rounded-xl border border-gray-200/70 dark:border-white/10 ring-2 ring-gray-100 dark:ring-white/5">
    <div className="flex w-full px-4 py-2 space-x-4 items-center border-b border-gray-100/70 dark:border-white/5 rounded-t-xl">
      <div className="flex flex-1 space-x-4 items-center font-bold justify-center">        
      Audio Player
      </div>
      <a
        className="group p-1 cursor-pointer"
        href="blob:https://elevenlabs.io/bab80f66-ada1-4c88-ad4c-84ead0b390a6"
        download="api-response.mpga"
      >
        <svg
          className="w-4 h-4 bg-gray-400 group-hover:bg-gray-700 dark:bg-white/30 dark:group-hover:bg-white/50"
          style={{
            maskImage:'url("https://mintlify.b-cdn.net/v6.4.0/regular/arrow-down-to-line.svg")',
            maskRepeat: 'no-repeat',
            maskPosition: 'center center',
          }}
        ></svg>
      </a>
    </div>
    <div className="bg-response-body flex p-12 items-center rounded-b-xl">
      <audio controls className="w-full" src={audioSrc}></audio>
    </div>
  </div>
  )
}

export default AudioPlayer