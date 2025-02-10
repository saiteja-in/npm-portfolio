#!/usr/bin/env node

// ANSI escape codes for colors and styling
const style = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underline: '\x1b[4m',
    // Regular colors
    cyan: '\x1b[36m',
    blue: '\x1b[34m',
    yellow: '\x1b[33m',
    green: '\x1b[32m',
    magenta: '\x1b[35m',
    white: '\x1b[37m',
    // Bright colors
    brightCyan: '\x1b[96m',
    brightBlue: '\x1b[94m',
    brightYellow: '\x1b[93m',
    brightGreen: '\x1b[92m',
    brightMagenta: '\x1b[95m'
};

// Decorative Unicode characters
const decorative = {
    star: '✦',
    diamond: '❖',
    dot: '•',
    flower: '✿',
    spark: '✧'
};

// Box drawing characters
const box = {
    topLeft: '╭',
    topRight: '╮',
    bottomLeft: '╰',
    bottomRight: '╯',
    horizontal: '─',
    vertical: '│',
    leftT: '├',
    rightT: '┤'
};

const width = 70;
const horizontalLine = box.horizontal.repeat(width - 2);

// Helper function to center text
const centerText = (text, width) => {
    const padding = Math.max(0, width - text.length) / 2;
    return ' '.repeat(Math.floor(padding)) + text + ' '.repeat(Math.ceil(padding));
};

// Helper function to create a decorated line
const decoratedLine = (char, width) => {
    const line = `${char} `.repeat(Math.floor((width - 2) / 2));
    return centerText(line, width - 2);
};

console.log(`

    ${style.brightCyan}${box.topLeft}${horizontalLine}${box.topRight}${style.reset}

    ${style.brightCyan}${box.vertical}${style.reset} ${decorative.star} ${style.bold}${style.brightYellow}Welcome to Sai Teja's Digital Space${style.reset} ${decorative.star} ${style.brightCyan}${box.vertical}${style.reset}

    ${style.brightCyan}${box.leftT}${horizontalLine}${box.rightT}${style.reset}

    ${style.cyan}${decorative.diamond} Professional Overview ${decorative.diamond}${style.reset}
    
    ${style.brightBlue}💻 ${style.italic}A passionate software developer, crafting digital solutions${style.reset}
    ${style.brightYellow}🛠️ ${style.italic}Master of modern web frameworks and architectures${style.reset}
    ${style.brightGreen}🎯 ${style.italic}Exploring the frontiers of Blockchain & Cloud computing${style.reset}
    ${style.brightMagenta}✨ ${style.italic}Active open-source contributor and community builder${style.reset}

    ${style.cyan}${decorative.diamond} Connect & Collaborate ${decorative.diamond}${style.reset}

    ${style.blue}${decorative.dot} GitHub    ${style.reset}${style.dim}https://github.com/saiteja-in${style.reset}
    ${style.blue}${decorative.dot} LinkedIn  ${style.reset}${style.dim}https://www.linkedin.com/in/vurukonda-sai-teja-279131201${style.reset}
    ${style.blue}${decorative.dot} Blog      ${style.reset}${style.dim}https://saiteja.blog${style.reset}

    ${style.brightCyan}${box.bottomLeft}${horizontalLine}${box.bottomRight}${style.reset}

    ${centerText(`${style.bold}${style.yellow}✨ Let's create something extraordinary together! ✨${style.reset}`, width)}

    ${style.dim}${decoratedLine(decorative.spark, width)}${style.reset}

`);