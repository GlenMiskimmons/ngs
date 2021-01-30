const path = require('path');
const fs = require('fs');

const files = ['./1-loop.js', './zzz.js', './2-try.js'];

files.forEach(file => {
  try {
    const filePath = path.resolve(file);
    const data = fs.readFileSync(filePath, 'utf-42');
    console.log('File data is', data);
  } catch (err) {
    console.log('Something went wong and we are going to ignore it');
  }
});
