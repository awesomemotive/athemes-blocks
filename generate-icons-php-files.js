const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const ICONS_DIR = path.resolve(__dirname, 'assets/icons');
const PHP_OUTPUT_DIR = path.resolve(__dirname, 'includes/Data');

function convertToPhpArray(obj) {
    if (typeof obj !== 'object' || obj === null) {
        if (typeof obj === 'string') {
            return `'${obj.replace(/'/g, "\\'")}'`;
        }
        return obj;
    }

    if (Array.isArray(obj)) {
        const items = obj.map(item => convertToPhpArray(item));
        return `array(${items.join(', ')})`;
    }

    const items = Object.entries(obj).map(([key, value]) => {
        const phpKey = typeof key === 'string' ? `'${key}'` : key;
        return `${phpKey} => ${convertToPhpArray(value)}`;
    });
    return `array(${items.join(', ')})`;
}

async function generateIconLibrary(libraryName) {
    const libraryPath = path.join(ICONS_DIR, libraryName);
    const categories = fs.readdirSync(libraryPath);
    
    const iconLibrary = {};
    
    for (const category of categories) {
        const categoryPath = path.join(libraryPath, category);
        const files = fs.readdirSync(categoryPath);
        
        for (const file of files) {
            if (!file.endsWith('.svg')) continue;
            
            const iconName = path.basename(file, '.svg');
            const filePath = path.join(categoryPath, file);
            const svgContent = await readFile(filePath, 'utf8');
            
            // Combine category and icon name with a hyphen
            const combinedName = `${iconName}-${category}`;
            iconLibrary[combinedName] = svgContent;
        }
    }
    
    // Generate PHP file
    const phpOutputPath = path.join(PHP_OUTPUT_DIR, `${libraryName}.php`);
    const phpContent = `<?php\nreturn ${convertToPhpArray(iconLibrary)};\n`;
    await writeFile(phpOutputPath, phpContent);
    console.log(`Generated ${libraryName} icon library at ${phpOutputPath}`);
}

async function main() {
    try {
        await generateIconLibrary('box-icons');
        await generateIconLibrary('font-awesome');
        console.log('Icon generation completed successfully!');
    } catch (error) {
        console.error('Error generating icons:', error);
        process.exit(1);
    }
}

main(); 