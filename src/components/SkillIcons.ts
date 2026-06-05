// Inline SVG data URLs for skill icons — no external assets needed

const svg = (content: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${content}</svg>`)}`;

export const htmlIcon = svg(`
  <path d="M5 3l2.2 24.6L16 30l8.8-2.4L27 3H5z" fill="#E44D26"/>
  <path d="M16 27.6V5H5L7 27.6 16 30z" fill="#F16529"/>
  <path d="M16 13.2H11.2l-.3-3.7H16V6H7.6l.8 9.2H16v-2zM16 20.7l-.1.1-3.6-1-.2-2.5H9l.4 4.4 6.6 1.8v-3.8z" fill="#fff"/>
  <path d="M16 13.2v2H20.4l-.5 5.5-3.9 1.1v3.8l6.6-1.8 1-11.6H16zM16 9.5v3.7h7.8l.3-3.7H16z" fill="#EBEBEB"/>
`);

export const cssIcon = svg(`
  <path d="M5 3l2.2 24.6L16 30l8.8-2.4L27 3H5z" fill="#1572B6"/>
  <path d="M16 27.6V5H5L7 27.6 16 30z" fill="#33A9DC"/>
  <path d="M16 13.2H9.8l.3 3.5H16v-3.5zM16 6H7.4l.3 3.5H16V6zM16 22.1l-3.6-1-.2-2.5H9l.4 4.3 6.6 1.8v-3.6z" fill="#fff"/>
  <path d="M16 13.2v3.5h3.9l-.4 4.4L16 22.1v3.6l6.6-1.8.9-10.7H16zM16 6v3.5h8.1l.3-3.5H16z" fill="#EBEBEB"/>
`);

export const jsIcon = svg(`
  <rect width="32" height="32" fill="#F7DF1E"/>
  <path d="M19.3 25.6c.5.9 1.2 1.5 2.4 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.2c-1.7-.7-2.8-1.6-2.8-3.5 0-1.8 1.3-3.1 3.4-3.1 1.5 0 2.5.5 3.3 1.8l-1.8 1.1c-.4-.7-.8-1-1.5-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.5 1.4l.6.2c2 .9 3.1 1.7 3.1 3.6 0 2.1-1.6 3.3-3.8 3.3-2.1 0-3.5-1-4.2-2.4l1.6-1.4zM10.8 25.8c.4.7.7 1.2 1.5 1.2.7 0 1.2-.3 1.2-1.4V18h2.2v7.7c0 2.3-1.3 3.3-3.3 3.3-1.7 0-2.8-.9-3.3-2l1.7-1.2z" fill="#000"/>
`);

export const reactIcon = svg(`
  <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
  <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" stroke-width="1.5" fill="none"/>
  <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(60 16 16)"/>
  <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" stroke-width="1.5" fill="none" transform="rotate(120 16 16)"/>
`);

export const tailwindIcon = svg(`
  <path d="M16 6.4c-4.3 0-7 2.1-8 6.4 1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3.1 2.2 1.6 1.6 3.4 3.5 7.3 3.5 4.3 0 7-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3.1-2.2C21.7 8.3 19.9 6.4 16 6.4zm-8 9.6c-4.3 0-7 2.1-8 6.4 1.6-2.1 3.5-2.9 5.6-2.4 1.2.3 2.1 1.2 3.1 2.2 1.6 1.6 3.4 3.5 7.3 3.5 4.3 0 7-2.1 8-6.4-1.6 2.1-3.5 2.9-5.6 2.4-1.2-.3-2.1-1.2-3.1-2.2C13.7 17.9 11.9 16 8 16z" fill="#38BDF8"/>
`);

export const nodeIcon = svg(`
  <path d="M16 2.5L3 9.8v14.4L16 31.5l13-7.3V9.8z" fill="#3C873A"/>
  <path d="M16 2.5L3 9.8v14.4L16 31.5" fill="#3C873A"/>
  <path d="M16 2.5l13 7.3v14.4L16 31.5" fill="#3C873A"/>
  <path d="M16 7l9 5.2v10.4L16 27.8l-9-5.2V12.2z" fill="#fff" opacity=".15"/>
  <text x="16" y="20" text-anchor="middle" font-size="11" font-weight="900" fill="#fff" font-family="sans-serif">JS</text>
`);

export const mongoIcon = svg(`
  <path d="M16.1 3C11.5 3 7 8.5 7 15c0 5.1 2.7 8.7 6.3 10.6l.7 3.4h4l.7-3.4C22.3 23.7 25 20.1 25 15 25 8.5 20.7 3 16.1 3z" fill="#4DB33D"/>
  <path d="M16.1 5c3.5 0 7 4.5 7 10 0 4.3-2.3 7.5-5.5 9.2V5.1c-.5-.1-1-.1-1.5-.1z" fill="#3FA037"/>
  <path d="M15.6 5.1V24.2c-3.2-1.7-5.5-4.9-5.5-9.2 0-5.5 3.5-10 5.5-9.9z" fill="#4DB33D"/>
`);

export const pythonIcon = svg(`
  <path d="M15.9 3C10.3 3 10.7 5.4 10.7 5.4V8h5.4v.8H7.8S4 8.3 4 14c0 5.6 3.3 5.4 3.3 5.4h2v-2.6s-.1-3.3 3.2-3.3h5.5s3.1.1 3.1-3V6.4S21.7 3 15.9 3zm-3.1 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#387EB8"/>
  <path d="M16.1 29c5.6 0 5.2-2.4 5.2-2.4V24h-5.4v-.8h8.3s3.8.4 3.8-5.2c0-5.6-3.3-5.4-3.3-5.4h-2v2.6s.1 3.3-3.2 3.3h-5.5S11 18.4 11 21.4v5.2S10.3 29 16.1 29zm3.1-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFE052"/>
`);

export const gitIcon = svg(`
  <path d="M29.5 14.8L17.2 2.5a1.7 1.7 0 00-2.4 0l-2.4 2.4 3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 11-1.2 1.9 2 2 0 01-.6-1.4l-2.7-2.7v7a2 2 0 11-1.6 0V11a2 2 0 01-1.1-2.6L10.6 5.5 2.5 13.6a1.7 1.7 0 000 2.4l12.3 12.3a1.7 1.7 0 002.4 0l12.3-12.3a1.7 1.7 0 000-1.2z" fill="#F05032"/>
`);

export const figmaIcon = svg(`
  <path d="M11 29a5 5 0 005-5v-5h-5a5 5 0 000 10z" fill="#0ACF83"/>
  <path d="M6 16a5 5 0 015-5h5v10h-5a5 5 0 01-5-5z" fill="#A259FF"/>
  <path d="M6 6a5 5 0 015-5h5v10h-5a5 5 0 01-5-5z" fill="#F24E1E"/>
  <path d="M16 1h5a5 5 0 010 10h-5V1z" fill="#FF7262"/>
  <path d="M26 16a5 5 0 11-10 0 5 5 0 0110 0z" fill="#1ABCFE"/>
`);

export const djangoIcon = svg(`
  <rect width="32" height="32" rx="4" fill="#092E20"/>
  <path d="M18 5h3v18.5c0 4.5-2.1 6-5.5 6-2.1 0-3.8-.7-4.9-2l2-2.2c.7.8 1.5 1.2 2.6 1.2 1.5 0 2.3-.8 2.3-3V7.5z" fill="#44B78B"/>
  <path d="M18 9h3v3h-3zM11.5 13h3v12.5h-3V13zM11.5 9h3v3h-3z" fill="#44B78B"/>
`);

export const flutterIcon = svg(`
  <path d="M13.5 3L3 13.5l4.2 4.2 14.8-14.7z" fill="#54C5F8"/>
  <path d="M13.5 3l9 9-4.2 4.3-9-9z" fill="#01579B"/>
  <path d="M7.2 17.7l6.1 6.1-4.2 4.2L3 21.9z" fill="#54C5F8"/>
  <path d="M13.3 23.8l5.3-5.3 4.2 4.2-5.3 5.3z" fill="#54C5F8"/>
  <path d="M13.3 23.8l2.2-2.2 2.1 2.1-2.2 2.1z" fill="#01579B"/>
`);

export const cIcon = svg(`
  <rect width="32" height="32" rx="4" fill="#283593"/>
  <text x="16" y="22" text-anchor="middle" font-size="18" font-weight="900" fill="#fff" font-family="serif">C</text>
`);

export const cppIcon = svg(`
  <rect width="32" height="32" rx="4" fill="#00549d"/>
  <text x="13" y="22" text-anchor="middle" font-size="15" font-weight="900" fill="#fff" font-family="serif">C</text>
  <text x="22" y="16" text-anchor="middle" font-size="10" font-weight="900" fill="#fff" font-family="sans-serif">++</text>
`);

export const javaIcon = svg(`
  <path d="M11.5 22.5s-1.2.7.85.93c2.48.28 3.75.24 6.48-.27 0 0 .72.45 1.72.84-6.12 2.62-13.85-.15-9.05-1.5z" fill="#E76F00"/>
  <path d="M10.7 19.4s-1.35 1 .71 1.21c2.67.28 4.78.3 8.43-.4 0 0 .5.51 1.29.79-7.47 2.18-15.8.17-10.43-1.6z" fill="#E76F00"/>
  <path d="M17.9 13.5c1.52 1.75-.4 3.32-.4 3.32s3.86-1.99 2.09-4.48c-1.65-2.33-2.92-3.49 3.94-7.49 0 0-10.77 2.69-5.63 8.65z" fill="#E76F00"/>
  <path d="M25.5 24.9s.89.73-1 1.3c-3.4 1.03-14.15 1.34-17.13.04-1.07-.47.94-1.12 1.57-1.25.66-.14 1.03-.11 1.03-.11-1.19-.84-7.66 1.64-3.29 2.35 11.93 1.94 21.75-.87 18.82-2.33z" fill="#E76F00"/>
  <path d="M12 16.3s-5.47 1.3-1.94 1.77c1.5.2 4.47.15 7.25-.08 2.27-.19 4.55-.6 4.55-.6s-.8.34-1.38.74c-5.56 1.46-16.3.78-13.21-.72 2.62-1.27 4.73-1.11 4.73-1.11z" fill="#5482A2"/>
  <path d="M22.8 21.5c5.65-2.94 3.04-5.76 1.21-5.38-.45.09-.65.18-.65.18s.17-.26.48-.37c3.6-1.27 6.37 3.73-1.16 5.71 0 0 .09-.08.12-.14z" fill="#5482A2"/>
  <path d="M19.2 3S21.8 5.6 16.8 9.56C12.83 12.73 15.8 14.5 16.79 16.5c-2.63-2.37-4.56-4.46-3.26-6.41C15.29 7.36 20.43 6.02 19.2 3z" fill="#E76F00"/>
  <path d="M13.1 29s-1 .5.7.88c1.32.31 7.88.4 8.47-.05 0 0 .35.22.86.42-3.07 1.31-9.78 1.1-11.55.46-.55-.2.52-.71 1.52-1.71z" fill="#E76F00"/>
`);

export const mysqlIcon = svg(`
  <path d="M16 3C9.37 3 4 7.26 4 12.5c0 3.48 2.3 6.54 5.8 8.27V27l4.2-4.2c.65.07 1.32.1 2 .1 6.63 0 12-4.26 12-9.5S22.63 3 16 3z" fill="#00618A"/>
  <path d="M16 5c5.52 0 10 3.36 10 7.5S21.52 20 16 20s-10-3.36-10-7.5S10.48 5 16 5z" fill="#00618A"/>
  <text x="16" y="16" text-anchor="middle" font-size="7" font-weight="700" fill="#fff" font-family="sans-serif">MySQL</text>
  <path d="M10.5 8.5c0 1.1-.45 2-1 2s-1-.9-1-2 .45-2 1-2 1 .9 1 2z" fill="#F5F5F5"/>
`);

export const githubIcon = svg(`
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C8.83 3 3 8.97 3 16.3c0 5.87 3.74 10.85 8.93 12.61.65.12.89-.29.89-.64 0-.31-.01-1.15-.02-2.25-3.63.81-4.4-1.8-4.4-1.8-.59-1.54-1.45-1.95-1.45-1.95-1.19-.83.09-.81.09-.81 1.31.09 2 1.38 2 1.38 1.17 2.04 3.07 1.45 3.82 1.11.12-.86.46-1.45.83-1.78-2.9-.34-5.95-1.49-5.95-6.63 0-1.46.51-2.66 1.35-3.6-.14-.34-.59-1.7.13-3.55 0 0 1.1-.36 3.6 1.37a12.3 12.3 0 013.28-.45c1.11.01 2.23.15 3.28.45 2.5-1.73 3.59-1.37 3.59-1.37.72 1.85.27 3.21.13 3.55.84.94 1.35 2.14 1.35 3.6 0 5.15-3.06 6.29-5.97 6.62.47.41.89 1.23.89 2.48 0 1.79-.02 3.23-.02 3.67 0 .36.23.77.9.64C25.27 27.14 29 22.16 29 16.3 29 8.97 23.18 3 16 3z" fill="#fff"/>
`);

export const canvaIcon = svg(`
  <circle cx="16" cy="16" r="13" fill="#7D2AE8"/>
  <path d="M20.5 10.5c-1.6-.5-3.5.3-4.8 1.8-1.3-1.5-3.2-2.3-4.8-1.8-2 .6-3.1 2.9-2.5 5.1.6 2.3 3.6 5.6 7.3 7.6 3.7-2 6.7-5.3 7.3-7.6.6-2.2-.5-4.5-2.5-5.1z" fill="#fff"/>
`);

export const fastapiIcon = svg(`
  <circle cx="16" cy="16" r="13" fill="#009688"/>
  <path d="M17 8l-7 9h6l-1 7 7-9h-6l1-7z" fill="#fff"/>
`);

export const tensorflowIcon = svg(`
  <path d="M16 3L4 9.5v13L16 29l12-6.5v-13z" fill="#FF6F00"/>
  <path d="M16 3v26M16 3L4 9.5M16 29l12-6.5M4 9.5v13M28 9.5v13" stroke="#FF8F00" stroke-width=".5" fill="none"/>
  <path d="M16 8v16M10 11.5v9M22 11.5v9" stroke="#FFF8E1" stroke-width="1.5" fill="none"/>
  <circle cx="16" cy="16" r="2" fill="#FFF8E1"/>
`);
