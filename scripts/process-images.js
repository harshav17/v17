const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../assets/images');
const outputDir = path.join(__dirname, '../assets/images/lerobot-journey');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Process each image
async function processImages() {
    const files = fs.readdirSync(sourceDir).filter(file => 
        file.endsWith('.jpeg') || file.endsWith('.jpg')
    );

    for (const file of files) {
        const inputPath = path.join(sourceDir, file);
        const outputPath = path.join(outputDir, file.replace('.jpeg', '-thumb.jpeg'));

        // Create only the thumbnail version (400px width)
        await sharp(inputPath)
            .resize(400, null, { withoutEnlargement: true })
            .jpeg({ quality: 80 })
            .toFile(outputPath);
    }
}

processImages().catch(console.error); 