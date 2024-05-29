# Local Audio Transcription

Transcribes your local audio files to assist in creating captions.

Uses some cool tools 🛠️:

- 🌳 [Node.js](https://nodejs.org/en)
- 🟦 [Typescript](https://www.typescriptlang.org/)
- ☁️ [Google Cloud Speech-to-Text API](https://cloud.google.com/speech-to-text?hl=en)
  <br/><br/>
- 🧹 [Rimraf](https://www.npmjs.com/package/rimraf)
- 🌳 [ts-node](https://www.npmjs.com/package/ts-node)
- 🔄 [nodemon](https://nodemon.io/)

## Getting Started

1. `npm install` to install all dependencies
2. Replace `gc-auth.json` with your own service account key
3. Place your audio file in the root of the project, or create your directory.
4. Update the filePath variable with your audio file's name.
5. Run the application in the terminal with `npm run start:dev`

## Configuration

The `transcribeAudio function` in `index.ts` configures the Speech-to-Text API request with the following options:

- `encoding`: The audio encoding format (e.g., MP3)
- `sampleRateHertz`: The sample rate of the audio file in Hertz
- `languageCode`: The language code of the audio (e.g., 'en-US' for English)
- `maxAlternatives`: The maximum number of alternative transcriptions to return
- `enableWordTimeOffsets`: Whether to enable word-level time offset information
- `enableWordConfidence`: Whether to enable word-level confidence scores
- `enableAutomaticPunctuation`: Whether to enable automatic punctuation
  You can modify these options according to your requirements.
