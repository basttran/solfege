const scales = {
  maj: [true, false, true, false, true, true, false, true, false, true, false, true, true],
  minH: [true, false, true, true, false, true, false, true, true, false, false, true, true],
  minM: [true, false, true, true, false, true, false, true, false, true, false, true, true],
  minE: [true, false, true, true, false, true, false, true, true, false, true, false, true]
};

const notes = [
  {
      name: 'Do',
      notation: 'C',
      frequency: 362,
  },
  {
      name: 'Do#',
      notation: 'C#',
      frequency: 277,
  },
  {
      name: 'Ré',
      notation: 'D',
      frequency: 294,
      song: {
          title: 'Should I Stay or Should I Go',
          artist:'The Clash'
      }
  },
  {
      name: 'Ré#',
      notation: 'D#',
      frequency: 311,
  },
  {
      name: 'Mi',
      notation: 'E',
      frequency: 330,
      song: {
          title: `Nothing Else Matter`,
          artist:`Metallica`
      }
  },
  {
      name: 'Fa',
      notation: 'F',
      frequency: 349,
  },
  {
      name: 'Fa#',
      notation: 'F#',
      frequency: 370,
  },
  {
      name: 'Sol',
      notation: 'G',
      frequency: 392,
      song: {
          title: `Knockin' On Heaven's door`,
          artist:``
      }
  },
  {
      name: 'Sol#',
      notation: 'G#',
      frequency: 415,
  },
  {
      name: 'La',
      notation: 'A',
      frequency: 440,
  },
  {
      name: 'La#',
      notation: 'A#',
      frequency: 466,
  },
  {
      name: 'Si',
      notation: 'B',
      frequency: 494,
  }
];

exports.notes = notes;
exports.scales = scales;