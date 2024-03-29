import axios from 'axios';

// Define a function called textToSpeech that takes in a string called inputText as its argument.
const textToSpeech = async (text: any) => {
  // Set the API key for ElevenLabs API.
  // Do not use directly. Use environment variables.
  const apiKey = process.env.API_ELE;

  // console.log(apiKey);
  // Set the ID of the voice to be used.
  const VOICE_ID = '21m00Tcm4TlvDq8ikWAM';

  // Set options for the API request.
  const options = {
    method: 'POST',
    url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    headers: {
      accept: 'audio/mpeg', // Set the expected response type to audio/mpeg.
      'content-type': 'application/json', // Set the content type to application/json.
      'xi-api-key': apiKey, // Set the API key in the headers.
    },
    data: {
      text: text, // Pass in the inputText as the text to be converted to speech.
    },
    responseType: 'arraybuffer' as const, // Set the responseType to arraybuffer to receive binary data as response.
  };

  // Send the API request using Axios and wait for the response.
  const speechDetails = await axios.request(options);

  // Return the binary audio data received from the API response.
  return speechDetails.data;
};

// Export the textToSpeech function as the default export of this module.
export default textToSpeech;