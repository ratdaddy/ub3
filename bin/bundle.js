#!/usr/bin/env node

var fs = require('fs')
var archiver = require('archiver')

var output = fs.createWriteStream('uglybox.zip')
var archive = archiver('zip')

output.on('close', () => {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);

archive.file('install/app.js', { name: 'uglybox/app.js' })
archive.file('install/package.json', { name: 'uglybox/package.json' })
archive.file('install/yarn.lock', { name: 'uglybox/yarn.lock' })
archive.file('install/install-pi', { name: 'uglybox/install-pi' })
archive.file('install/uglybox.service', { name: 'uglybox/uglybox.service' })
archive.file('install/autostart', { name: 'uglybox/autostart' })

archive.directory('dist/', 'uglybox/dist')

archive.finalize()
