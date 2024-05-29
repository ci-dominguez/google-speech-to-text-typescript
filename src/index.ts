import * as fs from 'fs';
import speech, { protos } from '@google-cloud/speech';

const filePath = './test-audio.mp3';

const client = new speech.SpeechClient({
  keyFilename: './gc-auth.json',
});

async function transcribeAudio(filePath: string) {
  const file = fs.readFileSync(filePath);
  const audioBytes = file.toString('base64');

  const audio: protos.google.cloud.speech.v1.IRecognitionAudio = {
    content: audioBytes,
  };

  const config: protos.google.cloud.speech.v1.IRecognitionConfig = {
    encoding: protos.google.cloud.speech.v1.RecognitionConfig.AudioEncoding.MP3,
    sampleRateHertz: 16000,
    languageCode: 'en-US',
    maxAlternatives: 1,
    enableWordTimeOffsets: true,
    enableWordConfidence: true,
    enableAutomaticPunctuation: true,
  };

  const request: protos.google.cloud.speech.v1.IRecognizeRequest = {
    audio,
    config,
  };

  try {
    const [response] = await client.recognize(request);

    const transcription = response
      .results!.map((result) => result.alternatives![0].transcript)
      .join('\n');

    console.log(`Full audio transcription:\n "${transcription}"`);
  } catch (error) {
    console.error('There was an error transcribing your audio:', error);
  }
}

transcribeAudio(filePath).catch(console.error);
