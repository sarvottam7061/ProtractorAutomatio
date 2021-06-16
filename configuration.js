exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    specs: ['spec1.js','spec2.js','spec3.js','spec4.js'],
    capabilities: {
      browserName: 'chrome'
    }
  };