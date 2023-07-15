import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tfSpeechCommands from '@tensorflow-models/speech-commands';
import script from '../../constants/script.json';
import ModalComponent from './Modal'

function Speech() {
  const [sentences, setSentences] = useState([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [recognizedText, setRecognizedText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [recognitionModel, setRecognitionModel] = useState(null);
  const [isVideoCallComplete, setIsVideoCallComplete] = useState(false);


  const startRecording = async () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsRecording(true);
      console.log('Recording started');
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      const recognized = finalTranscript || interimTranscript;
      setRecognizedText(recognized);

      highlightText(recognized, getCurrentSentence());
    };

    recognition.onerror = (event) => {
      console.log('Error:', event.error);
    };

    recognition.onend = () => {
      setIsRecording(false);
      console.log('Recording stopped');
    };

    await recognitionModel.ensureModelLoaded();
    recognition.start();
  };


  useEffect(() => {
    const loadModel = async () => {
      const recognizer = await tfSpeechCommands.create('BROWSER_FFT');
      await recognizer.ensureModelLoaded();

      setModelLoaded(true);
      setRecognitionModel(recognizer);
    };

    loadModel();

    // Fetch script from json file
    setSentences(script);
  }, []);


  useEffect(() => {
    if (recognizedText) {
      const currentSentence = getCurrentSentence();
      const matchingPercentage = getMatchingPercentage(recognizedText, currentSentence);

      if (matchingPercentage >= 80) {
        if (currentSentenceIndex < sentences.length - 1) {
          setIsRecording(false); // Stop recording temporarily
          setTimeout(() => {
            setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
            setRecognizedText('');
            setIsRecording(true); // Resume recording after the delay
          }, 1000); // Delay of 1 seconds
        } else {
          setIsVideoCallComplete(true);
        }
      } 
    }
  }, [recognizedText]);


  const getCurrentSentence = () => {
    return sentences[currentSentenceIndex] || '';
  };

  const getMatchingPercentage = (recognizedText, sentence) => {
    if (!recognizedText || !sentence) {
      return 0;
    }
    const recognizedWords = recognizedText.toLowerCase().split(' ');
    const sentenceWords = sentence.toLowerCase().split(' ');

    const matchedWords = recognizedWords.filter((word) => sentenceWords.includes(word));

    return (matchedWords.length / sentenceWords.length) * 100;
  };

  const highlightText = (recognizedText, sentence) => {
    if (!sentence) {
      // No sentences to compare against
      return null;
    }

    //Highlight to keep a track of sentence completetion for the user
    const highlightedSentence = sentence
      .split(' ')
      .map((word, index) => {
        if (recognizedText && recognizedText.toLowerCase().includes(word.toLowerCase())) {
          return <span key={index} style={{ backgroundColor: 'yellow' }}>{word} </span>;
        } else {
          return <span key={index}>{word} </span>;
        }
      });

    return highlightedSentence;
  };

  const handleNextSentence = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
      setRecognizedText('');
    } else {
      setIsVideoCallComplete(true);
    }
  };



  const handleModalClose = () => {
    setIsVideoCallComplete(false);
    window.location.reload();
  };

  return (
    <div>
      <p>Sentence: {highlightText(recognizedText, getCurrentSentence())}</p>
      {!isRecording && (
        <button onClick={startRecording} disabled={!modelLoaded}>
          Start Recording
        </button>
      )}
      <button onClick={handleNextSentence} disabled={!modelLoaded || isVideoCallComplete}>
        Next Sentence
      </button>
      <p>Recognized Text: {recognizedText}</p>
      <ModalComponent open={isVideoCallComplete} handleClose={handleModalClose} />
    </div>
  );
}

export default Speech;
