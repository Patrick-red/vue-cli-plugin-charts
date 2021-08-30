module.exports = [
  {
    type: 'list',
    name: 'import',
    message: 'How do you want to import Echarts?',
    choices: [
      { name: 'Fully import', value: 'full' },
      { name: 'Import on demand', value: 'partial' }
    ],
    default: 'full',
  },
  {
    type: 'list',
    name: 'personal',
    message: 'How is your day?',
    choices: [
      { name: 'Great', value: 'great'},
      { name: 'Awful', value: 'awful'}
    ],
    default: 'Great',
  }
]
