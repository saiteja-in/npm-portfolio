#!/usr/bin/env node
const clearConsole = require('clear-any-console')
// Helper function to create gradient colors
clearConsole()
const gradient = (text, startColor, endColor) => {
    const colors = [];
    const steps = text.length;
    
    for (let i = 0; i < steps; i++) {
        const r = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * (i / steps));
        const g = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * (i / steps));
        const b = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * (i / steps));
        colors.push(`\x1b[38;2;${r};${g};${b}m`);
    }
    
    return text.split('').map((char, i) => `${colors[i]}${char}`).join('') + '\x1b[0m';
};

// ASCII art name
const nameArt = `
   ███████╗ █████╗ ██╗    ████████╗███████╗     ██╗ █████╗ 
   ██╔════╝██╔══██╗██║    ╚══██╔══╝██╔════╝     ██║██╔══██╗
   ███████╗███████║██║       ██║   █████╗       ██║███████║
   ╚════██║██╔══██║██║       ██║   ██╔══╝  ██   ██║██╔══██║
   ███████║██║  ██║██║       ██║   ███████╗╚█████╔╝██║  ██║
   ╚══════╝╚═╝  ╚═╝╚═╝       ╚═╝   ╚══════╝ ╚════╝ ╚═╝  ╚═╝`;

// Modern box drawing characters
const separator = '\n' + '•'.repeat(60) + '\n';

// Create sections with consistent spacing
const createSection = (title, content) => `
${gradient(title, [147, 51, 234], [61, 217, 214])}
${content}`;

// Modern social links with icons
const socialLinks = [
    '  📦  \x1b[36mGitHub\x1b[0m     \x1b[38;5;240m→\x1b[0m  \x1b[34mhttps://github.com/saiteja-in\x1b[0m',
    '  💼  \x1b[36mLinkedIn\x1b[0m   \x1b[38;5;240m→\x1b[0m  \x1b[34mhttps://www.linkedin.com/in/vurukonda-sai-teja-279131201\x1b[0m',
    '  📝  \x1b[36mBlog\x1b[0m       \x1b[38;5;240m→\x1b[0m  \x1b[34mhttps://saiteja.blog\x1b[0m'
].join('\n');

// Skills with modern formatting
const skills = [
    '  🎯  \x1b[38;5;208mWeb Development\x1b[0m',
    '      \x1b[38;5;240m╰→\x1b[0m  \x1b[38;5;109mReact\x1b[0m  •  \x1b[38;5;109mNode.js\x1b[0m  •  \x1b[38;5;109mTypeScript\x1b[0m  •  \x1b[38;5;109mNext.js\x1b[0m',
    '',
    '  🔗  \x1b[38;5;208mProgramming\x1b[0m',
    '      \x1b[38;5;240m╰→\x1b[0m  \x1b[38;5;109mJava\x1b[0m  •  \x1b[38;5;109mC++\x1b[0m  •  \x1b[38;5;109mPython\x1b[0m',
    '',
    '  ☁️   \x1b[38;5;208mCloud Computing\x1b[0m',
    '      \x1b[38;5;240m╰→\x1b[0m  \x1b[38;5;109mAWS\x1b[0m  •  \x1b[38;5;109mDocker\x1b[0m'  
].join('\n');

// About section with modern bullet points
const about = [
    '  ✨  Building innovative solutions to real-world problems',
    '  🚀  Passionate about exploring cutting-edge technologies',
    '  🌱  Committed to continuous learning and community contribution'
].join('\n');

// Main content with improved spacing
console.log(`
${nameArt}

${gradient('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀', [147, 51, 234], [61, 217, 214])}

${createSection('                    ⚡ ABOUT ME ⚡', about)}

${separator}

${createSection('            🛠️ SKILLS & EXPERTISE 🛠️', skills)}

${separator}

${createSection('            🔗 CONNECT WITH ME 🔗', socialLinks)}

${separator}

${gradient('            Let\'s build something amazing together! 🚀', [255, 81, 47], [221, 36, 118])}
`);