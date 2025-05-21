const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const minimatch = require('minimatch');

// Configuration: set your plugin folder and exclusions here
const pluginDir = __dirname;
const outputZip = path.join(path.dirname(pluginDir), 'athemes-blocks.zip');

// List of globs or paths to exclude (relative to pluginDir)
const exclude = [
    'node_modules',
    '.cursor',
    '.github',
    '.git',
    '.gitignore',
    'assets/js/src',
    'assets/js/**/*.js.map',
    'webpack.config.js',
    'zip-plugin.js',
    'package-lock.json',
    'package.json',
    '.packages',
    '.env',
    '*.log',
    '*.code-workspace',
    'generate-icons-php-files.js',
    'phpcs.xml',
    'phpdoc.xml',
    'phpstan.neon',
    'vendor'
];

// Helper to check if a file should be excluded
function isExcluded(filePath) {
    return exclude.some(pattern => minimatch.minimatch(filePath, pattern));
}

function addDirToArchive(archive, dir, baseDir = '') {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const relPath = path.relative(pluginDir, fullPath);
        
        if (isExcluded(relPath)) return;
        
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            addDirToArchive(archive, fullPath, baseDir);
        } else {
            archive.file(fullPath, { name: relPath });
        }
    });
}

function zipPlugin() {
    const output = fs.createWriteStream(outputZip);
    const archive = archiver('zip', { zlib: { level: 9 } });
    
    output.on('close', () => {
        console.log(`Created ${outputZip} (${archive.pointer()} total bytes)`);
    });
    
    archive.on('error', err => { throw err; });
    
    archive.pipe(output);
    
    addDirToArchive(archive, pluginDir);
    
    archive.finalize();
}

zipPlugin(); 