function calculateDelaysAndReverb(bpm) {
    const baseDelay = 60000 / bpm;
  
    function convertToNumber(string) {
      return parseFloat(string).toFixed(2);
    }
  
    function roundNumericValues(obj) {
        for (let key in obj) {
          if (typeof obj[key] === "object") {
            obj[key] = transformValues(obj[key]);
          } else if (typeof obj[key] === "number") {
            obj[key] = parseFloat(obj[key].toFixed(2));
          }
        }
        return obj;
      }
      
  
    const rawResults = {
      // Regular Note Delays
      wholeNote: baseDelay * 4,
      halfNote: baseDelay * 2,
      quarterNote: baseDelay,
      eighthNote: baseDelay / 2,
      sixteenthNote: baseDelay / 4,
      thirtySecondNote: baseDelay / 8,
      sixtyFourthNote: baseDelay / 16,
      oneHundredTwentyEighthNote: baseDelay / 32,
      twoHundredFiftySixthNote: baseDelay / 64,
      fiveHundredTwelfthNote: baseDelay / 128,
  
      // Dotted Note Delays
      dottedWholeNote: baseDelay * 4 * 1.5,
      dottedHalfNote: baseDelay * 2 * 1.5,
      dottedQuarterNote: baseDelay * 1.5,
      dottedEighthNote: (baseDelay / 2) * 1.5,
      dottedSixteenthNote: (baseDelay / 4) * 1.5,
      dottedThirtySecondNote: (baseDelay / 8) * 1.5,
      dottedSixtyFourthNote: (baseDelay / 16) * 1.5,
      dottedOneHundredTwentyEighthNote: (baseDelay / 32) * 1.5,
      dottedTwoHundredFiftySixthNote: (baseDelay / 64) * 1.5,
      dottedFiveHundredTwelfthNote: (baseDelay / 128) * 1.5,
  
      // Triplet Delays
      tripletWholeNote: baseDelay * 4 * (2 / 3),
      tripletHalfNote: baseDelay * 2 * (2 / 3),
      tripletQuarterNote: baseDelay * (2 / 3),
      tripletEighthNote: (baseDelay / 2) * (2 / 3),
      tripletSixteenthNote: (baseDelay / 4) * (2 / 3),
      tripletThirtySecondNote: (baseDelay / 8) * (2 / 3),
      tripletSixtyFourthNote: (baseDelay / 16) * (2 / 3),
      tripletOneHundredTwentyEighthNote: (baseDelay / 32) * (2 / 3),
      tripletTwoHundredFiftySixthNote: (baseDelay / 64) * (2 / 3),
      tripletFiveHundredTwelfthNote: (baseDelay / 128) * (2 / 3),
  
      // Regular Note Frequencies
      wholeNoteFreq: 1000 / (baseDelay * 4),
      halfNoteFreq: 1000 / (baseDelay * 2),
      quarterNoteFreq: 1000 / baseDelay,
      eighthNoteFreq: 1000 / (baseDelay / 2),
      sixteenthNoteFreq: 1000 / (baseDelay / 4),
      thirtySecondNoteFreq: 1000 / (baseDelay / 8),
      sixtyFourthNoteFreq: 1000 / (baseDelay / 16),
      oneHundredTwentyEighthNoteFreq: 1000 / (baseDelay / 32),
      twoHundredFiftySixthNoteFreq: 1000 / (baseDelay / 64),
      fiveHundredTwelfthNoteFreq: 1000 / (baseDelay / 128),
  
      // Dotted Note Frequencies
      dottedWholeNoteFreq: 1000 / (baseDelay * 4 * 1.5),
      dottedHalfNoteFreq: 1000 / (baseDelay * 2 * 1.5),
      dottedQuarterNoteFreq: 1000 / (baseDelay * 1.5),
      dottedEighthNoteFreq: 1000 / ((baseDelay / 2) * 1.5),
      dottedSixteenthNoteFreq: 1000 / ((baseDelay / 4) * 1.5),
      dottedThirtySecondNoteFreq: 1000 / ((baseDelay / 8) * 1.5),
      dottedSixtyFourthNoteFreq: 1000 / ((baseDelay / 16) * 1.5),
      dottedOneHundredTwentyEighthNoteFreq: 1000 / ((baseDelay / 32) * 1.5),
      dottedTwoHundredFiftySixthNoteFreq: 1000 / ((baseDelay / 64) * 1.5),
      dottedFiveHundredTwelfthNoteFreq: 1000 / ((baseDelay / 128) * 1.5),
  
      // Triplet Note Frequencies
      tripletWholeNoteFreq: 1000 / (baseDelay * 4 * (2 / 3)),
      tripletHalfNoteFreq: 1000 / (baseDelay * 2 * (2 / 3)),
      tripletQuarterNoteFreq: 1000 / (baseDelay * (2 / 3)),
      tripletEighthNoteFreq: 1000 / ((baseDelay / 2) * (2 / 3)),
      tripletSixteenthNoteFreq: 1000 / ((baseDelay / 4) * (2 / 3)),
      tripletThirtySecondNoteFreq: 1000 / ((baseDelay / 8) * (2 / 3)),
      tripletSixtyFourthNoteFreq: 1000 / ((baseDelay / 16) * (2 / 3)),
      tripletOneHundredTwentyEighthNoteFreq: 1000 / ((baseDelay / 32) * (2 / 3)),
      tripletTwoHundredFiftySixthNoteFreq: 1000 / ((baseDelay / 64) * (2 / 3)),
      tripletFiveHundredTwelfthNoteFreq: 1000 / ((baseDelay / 128) * (2 / 3)),
    };
  
    return roundNumericValues(rawResults);
  }
  
  function displayResults() {
    const bpm = parseFloat(document.getElementById('bpmInput').value);
  
    if (isNaN(bpm)) {
      alert('Please enter a valid BPM value.');
      return;
    }
  
    const results = calculateDelaysAndReverb(bpm);
 // Update delays section in HTML
const delaysDiv = document.getElementById('delays');
delaysDiv.innerHTML = `
  <p>1/1 Delay: ${results.wholeNote} ms</p>
  <p>1/2 Delay: ${results.halfNote} ms</p>
  <p>1/4 Delay: ${results.quarterNote} ms</p>
  <p>1/8 Delay: ${results.eighthNote} ms</p>
  <p>1/16 Delay: ${results.sixteenthNote} ms</p>
  <p>1/32 Delay: ${results.thirtySecondNote} ms</p>
  <p>1/64 Delay: ${results.sixtyFourthNote} ms</p>
  <p>1/128 Delay: ${results.oneHundredTwentyEighthNote} ms</p>
  <p>1/256 Delay: ${results.twoHundredFiftySixthNote} ms</p>
  <p>1/512 Delay: ${results.fiveHundredTwelfthNote} ms</p>
`;

// Update frequencies section in HTML
const frequenciesDiv = document.getElementById('frequencies');
frequenciesDiv.innerHTML = `
  <p>1/1 Frequency: ${results.wholeNoteFreq.toFixed(2)} Hz</p>
  <p>1/2 Frequency: ${results.halfNoteFreq.toFixed(2)} Hz</p>
  <p>1/4 Frequency: ${results.quarterNoteFreq.toFixed(2)} Hz</p>
  <p>1/8 Frequency: ${results.eighthNoteFreq.toFixed(2)} Hz</p>
  <p>1/16 Frequency: ${results.sixteenthNoteFreq.toFixed(2)} Hz</p>
  <p>1/32 Frequency: ${results.thirtySecondNoteFreq.toFixed(2)} Hz</p>
  <p>1/64 Frequency: ${results.sixtyFourthNoteFreq.toFixed(2)} Hz</p>
  <p>1/128 Frequency: ${results.oneHundredTwentyEighthNoteFreq.toFixed(2)} Hz</p>
  <p>1/256 Frequency: ${results.twoHundredFiftySixthNoteFreq.toFixed(2)} Hz</p>
  <p>1/512 Frequency: ${results.fiveHundredTwelfthNoteFreq.toFixed(2)} Hz</p>
`;
  }