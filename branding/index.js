/* ==========================================================================
   90+ Studio Brand Portal JS
   ========================================================================== */

// 1. INLINE SVG DATA ENGINE (Avoids local file CORS issues for double-click viewing)
const svgDatabase = {
  c1: {
    colored_light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 97 42 A 18 18 0 1 0 61 42 A 18 18 0 1 0 97 42 M 97 42 L 97 60 A 18 18 0 0 1 79 78" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="115" y="24" width="36" height="54" rx="18" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 163 38 L 179 38 M 171 30 L 171 46" fill="none" stroke="#39FF14" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="104" fill="#000000" class="studio-text">STUDIO</text>
</svg>`,
    colored_dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 97 42 A 18 18 0 1 0 61 42 A 18 18 0 1 0 97 42 M 97 42 L 97 60 A 18 18 0 0 1 79 78" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="115" y="24" width="36" height="54" rx="18" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 163 38 L 179 38 M 171 30 L 171 46" fill="none" stroke="#39FF14" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="104" fill="#FFFFFF" class="studio-text">STUDIO</text>
</svg>`,
    mono_light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 97 42 A 18 18 0 1 0 61 42 A 18 18 0 1 0 97 42 M 97 42 L 97 60 A 18 18 0 0 1 79 78" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="115" y="24" width="36" height="54" rx="18" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 163 38 L 179 38 M 171 30 L 171 46" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="104" fill="#000000" class="studio-text">STUDIO</text>
</svg>`,
    mono_dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 97 42 A 18 18 0 1 0 61 42 A 18 18 0 1 0 97 42 M 97 42 L 97 60 A 18 18 0 0 1 79 78" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="115" y="24" width="36" height="54" rx="18" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 163 38 L 179 38 M 171 30 L 171 46" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="104" fill="#FFFFFF" class="studio-text">STUDIO</text>
</svg>`
  },
  c2: {
    colored_light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 60 24 L 60 48 L 36 48 L 36 36 A 12 12 0 0 1 48 24 Z" fill="#000000" />
  <path d="M 60 54 L 60 78 L 48 78 A 12 12 0 0 1 36 66 L 36 54 Z" fill="#000000" />
  <path d="M 66 54 L 90 54 L 90 66 A 12 12 0 0 1 78 78 L 66 78 Z" fill="#000000" />
  <path d="M 72 36 L 84 36 M 78 30 L 78 42" fill="none" stroke="#39FF14" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 158 42 A 18 18 0 1 0 122 42 A 18 18 0 1 0 158 42 M 158 42 L 158 60 A 18 18 0 0 1 140 78" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="176" y="24" width="36" height="54" rx="18" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 224 38 L 240 38 M 232 30 L 232 46" fill="none" stroke="#39FF14" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="181" y="104" fill="#000000" class="studio-text">STUDIO</text>
</svg>`,
    colored_dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 60 24 L 60 48 L 36 48 L 36 36 A 12 12 0 0 1 48 24 Z" fill="#FFFFFF" />
  <path d="M 60 54 L 60 78 L 48 78 A 12 12 0 0 1 36 66 L 36 54 Z" fill="#FFFFFF" />
  <path d="M 66 54 L 90 54 L 90 66 A 12 12 0 0 1 78 78 L 66 78 Z" fill="#FFFFFF" />
  <path d="M 72 36 L 84 36 M 78 30 L 78 42" fill="none" stroke="#39FF14" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 158 42 A 18 18 0 1 0 122 42 A 18 18 0 1 0 158 42 M 158 42 L 158 60 A 18 18 0 0 1 140 78" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="176" y="24" width="36" height="54" rx="18" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 224 38 L 240 38 M 232 30 L 232 46" fill="none" stroke="#39FF14" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="181" y="104" fill="#FFFFFF" class="studio-text">STUDIO</text>
</svg>`,
    mono_light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 60 24 L 60 48 L 36 48 L 36 36 A 12 12 0 0 1 48 24 Z" fill="#000000" />
  <path d="M 60 54 L 60 78 L 48 78 A 12 12 0 0 1 36 66 L 36 54 Z" fill="#000000" />
  <path d="M 66 54 L 90 54 L 90 66 A 12 12 0 0 1 78 78 L 66 78 Z" fill="#000000" />
  <path d="M 72 36 L 84 36 M 78 30 L 78 42" fill="none" stroke="#000000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 158 42 A 18 18 0 1 0 122 42 A 18 18 0 1 0 158 42 M 158 42 L 158 60 A 18 18 0 0 1 140 78" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="176" y="24" width="36" height="54" rx="18" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 224 38 L 240 38 M 232 30 L 232 46" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="181" y="104" fill="#000000" class="studio-text">STUDIO</text>
</svg>`,
    mono_dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 60 24 L 60 48 L 36 48 L 36 36 A 12 12 0 0 1 48 24 Z" fill="#FFFFFF" />
  <path d="M 60 54 L 60 78 L 48 78 A 12 12 0 0 1 36 66 L 36 54 Z" fill="#FFFFFF" />
  <path d="M 66 54 L 90 54 L 90 66 A 12 12 0 0 1 78 78 L 66 78 Z" fill="#FFFFFF" />
  <path d="M 72 36 L 84 36 M 78 30 L 78 42" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 158 42 A 18 18 0 1 0 122 42 A 18 18 0 1 0 158 42 M 158 42 L 158 60 A 18 18 0 0 1 140 78" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="176" y="24" width="36" height="54" rx="18" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M 224 38 L 240 38 M 232 30 L 232 46" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="181" y="104" fill="#FFFFFF" class="studio-text">STUDIO</text>
</svg>`
  },
  c3: {
    colored_light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
    <mask id="cut-out-l">
      <rect width="100%" height="100%" fill="#FFFFFF" />
      <circle cx="160" cy="32" r="14" fill="#000000" />
    </mask>
  </defs>
  <path d="M 106 42 A 18 18 0 1 0 70 42 A 18 18 0 1 0 106 42 M 106 42 L 106 60 A 18 18 0 0 1 88 78" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="124" y="24" width="36" height="54" rx="18" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" mask="url(#cut-out-l)" />
  <path d="M 150 32 L 170 32 M 160 22 L 160 42" fill="none" stroke="#39FF14" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="104" fill="#000000" class="studio-text">STUDIO</text>
</svg>`,
    colored_dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
    <mask id="cut-out-d">
      <rect width="100%" height="100%" fill="#FFFFFF" />
      <circle cx="160" cy="32" r="14" fill="#000000" />
    </mask>
  </defs>
  <path d="M 106 42 A 18 18 0 1 0 70 42 A 18 18 0 1 0 106 42 M 106 42 L 106 60 A 18 18 0 0 1 88 78" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="124" y="24" width="36" height="54" rx="18" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" mask="url(#cut-out-d)" />
  <path d="M 150 32 L 170 32 M 160 22 L 160 42" fill="none" stroke="#39FF14" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="104" fill="#FFFFFF" class="studio-text">STUDIO</text>
</svg>`,
    mono_light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
    <mask id="cut-out-ml">
      <rect width="100%" height="100%" fill="#FFFFFF" />
      <circle cx="160" cy="32" r="14" fill="#000000" />
    </mask>
  </defs>
  <path d="M 106 42 A 18 18 0 1 0 70 42 A 18 18 0 1 0 106 42 M 106 42 L 106 60 A 18 18 0 0 1 88 78" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="124" y="24" width="36" height="54" rx="18" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" mask="url(#cut-out-ml)" />
  <path d="M 150 32 L 170 32 M 160 22 L 160 42" fill="none" stroke="#000000" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="104" fill="#000000" class="studio-text">STUDIO</text>
</svg>`,
    mono_dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 120" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .studio-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 11px; letter-spacing: 14px; text-anchor: middle; }
    </style>
    <mask id="cut-out-md">
      <rect width="100%" height="100%" fill="#FFFFFF" />
      <circle cx="160" cy="32" r="14" fill="#000000" />
    </mask>
  </defs>
  <path d="M 106 42 A 18 18 0 1 0 70 42 A 18 18 0 1 0 106 42 M 106 42 L 106 60 A 18 18 0 0 1 88 78" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <rect x="124" y="24" width="36" height="54" rx="18" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" mask="url(#cut-out-md)" />
  <path d="M 150 32 L 170 32 M 160 22 L 160 42" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="104" fill="#FFFFFF" class="studio-text">STUDIO</text>
</svg>`
  },
  c4: {
    colored_light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&amp;display=swap');
      .studio-text-large { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 4px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 90 60 L 150 60 M 120 30 L 120 90" fill="none" stroke="#39FF14" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="135" fill="#000000" class="studio-text-large">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
</svg>`,
    colored_dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&amp;display=swap');
      .studio-text-large { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 4px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 90 60 L 150 60 M 120 30 L 120 90" fill="none" stroke="#39FF14" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="135" fill="#FFFFFF" class="studio-text-large">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
</svg>`,
    mono_light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&amp;display=swap');
      .studio-text-large { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 4px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 90 60 L 150 60 M 120 30 L 120 90" fill="none" stroke="#000000" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="135" fill="#000000" class="studio-text-large">90<tspan fill="#000000">+</tspan> STUDIO</text>
</svg>`,
    mono_dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 180" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700&amp;display=swap');
      .studio-text-large { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700; font-size: 15px; letter-spacing: 4px; text-anchor: middle; }
    </style>
  </defs>
  <path d="M 90 60 L 150 60 M 120 30 L 120 90" fill="none" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
  <text x="120" y="135" fill="#FFFFFF" class="studio-text-large">90<tspan fill="#FFFFFF">+</tspan> STUDIO</text>
</svg>`
  }
};

// Database of Instagram Highlights Covers (1080x1080px viewbox)
const highlightsDatabase = {
  servicios: {
    title: 'Servicios',
    desc: 'Ventana de navegador web',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="100%" height="100%">
  <rect width="1080" height="1080" fill="#0A0A0A" />
  <g>
    <rect x="380" y="420" width="320" height="240" rx="16" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="380" y1="476" x2="700" y2="476" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" />
    <circle cx="425" cy="448" r="10" fill="#FFFFFF" />
    <circle cx="460" cy="448" r="10" fill="#FFFFFF" />
    <circle cx="495" cy="448" r="10" fill="#39FF14" />
  </g>
</svg>`
  },
  proyectos: {
    title: 'Proyectos',
    desc: 'Cuadrícula de ventanas',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="100%" height="100%">
  <rect width="1080" height="1080" fill="#0A0A0A" />
  <g>
    <rect x="380" y="420" width="145" height="105" rx="12" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="555" y="420" width="145" height="105" rx="12" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="380" y="555" width="145" height="105" rx="12" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <rect x="555" y="555" width="145" height="105" rx="12" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 612 472.5 L 642 472.5 M 627 457.5 L 627 487.5" stroke="#39FF14" stroke-width="12" stroke-linecap="round" />
  </g>
</svg>`
  },
  nosotros: {
    title: 'Nosotros',
    desc: 'Perfiles de equipo',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="100%" height="100%">
  <rect width="1080" height="1080" fill="#0A0A0A" />
  <g>
    <circle cx="490" cy="460" r="40" fill="none" stroke="#FFFFFF" stroke-width="16" />
    <path d="M 420 590 A 70 70 0 0 1 560 590" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" />
    <circle cx="570" cy="440" r="50" fill="none" stroke="#FFFFFF" stroke-width="16" />
    <path d="M 480 600 A 90 90 0 0 1 660 600" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" />
    <path d="M 615 410 L 645 410 M 630 395 L 630 425" stroke="#39FF14" stroke-width="12" stroke-linecap="round" />
  </g>
</svg>`
  },
  proceso: {
    title: 'Proceso',
    desc: 'Diagrama de flujo',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="100%" height="100%">
  <rect width="1080" height="1080" fill="#0A0A0A" />
  <g>
    <circle cx="410" cy="540" r="30" fill="none" stroke="#FFFFFF" stroke-width="16" />
    <line x1="440" y1="540" x2="510" y2="540" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" />
    <circle cx="540" cy="540" r="30" fill="none" stroke="#FFFFFF" stroke-width="16" />
    <path d="M 530 540 L 550 540 M 540 530 L 540 550" stroke="#39FF14" stroke-width="10" stroke-linecap="round" />
    <line x1="570" y1="540" x2="640" y2="540" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" />
    <circle cx="670" cy="540" r="30" fill="none" stroke="#FFFFFF" stroke-width="16" />
  </g>
</svg>`
  },
  contacto: {
    title: 'Contacto',
    desc: 'Globo de chat',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="100%" height="100%">
  <rect width="1080" height="1080" fill="#0A0A0A" />
  <g>
    <rect x="390" y="430" width="300" height="200" rx="24" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 450 630 L 420 670 L 480 630" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="490" cy="530" r="10" fill="#FFFFFF" />
    <circle cx="540" cy="530" r="10" fill="#FFFFFF" />
    <circle cx="590" cy="530" r="10" fill="#39FF14" />
  </g>
</svg>`
  },
  preguntas: {
    title: 'Preguntas',
    desc: 'Signo de interrogación',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="100%" height="100%">
  <rect width="1080" height="1080" fill="#0A0A0A" />
  <g>
    <path d="M 450 480 A 90 90 0 0 1 630 480 C 630 550 540 550 540 620" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" />
    <circle cx="540" cy="670" r="14" fill="#39FF14" />
  </g>
</svg>`
  },
  testimonios: {
    title: 'Testimonios',
    desc: 'Estrella de 4 puntas',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="100%" height="100%">
  <rect width="1080" height="1080" fill="#0A0A0A" />
  <g>
    <path d="M 540 380 Q 540 540 380 540 Q 540 540 540 700 Q 540 540 700 540 Q 540 540 540 380 Z" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linejoin="round" />
    <path d="M 660 380 Q 660 420 620 420 Q 660 420 660 460 Q 660 420 700 420 Q 660 420 660 380 Z" fill="none" stroke="#39FF14" stroke-width="10" stroke-linejoin="round" />
  </g>
</svg>`
  },
  recursos: {
    title: 'Recursos',
    desc: 'Documento de texto',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="100%" height="100%">
  <rect width="1080" height="1080" fill="#0A0A0A" />
  <g>
    <rect x="400" y="360" width="280" height="360" rx="16" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="450" y1="440" x2="630" y2="440" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" />
    <line x1="450" y1="500" x2="630" y2="500" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" />
    <line x1="450" y1="560" x2="630" y2="560" stroke="#FFFFFF" stroke-width="16" stroke-linecap="round" />
    <line x1="450" y1="620" x2="540" y2="620" stroke="#39FF14" stroke-width="16" stroke-linecap="round" />
  </g>
</svg>`
  }
};

// 2. STATE MANAGER
let activeState = {
  concept: 'c1',      // c1, c2, c3, c4
  colorScheme: 'light',// light, dark, transparent
  variant: 'colored'  // colored, mono
};

// DOM Cache
const dom = {
  conceptTabs: document.querySelectorAll('.concept-tab'),
  colorOpts: document.querySelectorAll('.color-opt'),
  variantOpts: document.querySelectorAll('.variant-opt'),
  viewport: document.getElementById('viewport-bg'),
  logoContainer: document.getElementById('logo-render-box'),
  slider: document.getElementById('logo-size-slider'),
  sliderVal: document.getElementById('logo-size-val'),
  btnDownloadSvg: document.getElementById('btn-download-svg'),
  btnDownloadPng: document.getElementById('btn-download-png'),
  
  captionConcept: document.getElementById('caption-concept'),
  captionVariant: document.getElementById('caption-variant'),
  captionBg: document.getElementById('caption-bg'),
  
  // Card 3D
  card3d: document.getElementById('card-3d'),
  cardLogoContainer: document.querySelector('.card-logo'),
  
  // Web navbar mockup
  navbarLogoContainer: document.querySelector('.nav-logo-svg'),
  btnNavbarDark: document.getElementById('btn-header-dark'),
  btnNavbarLight: document.getElementById('btn-header-light'),
  navbarElement: document.getElementById('web-navbar-element'),
  
  // Color Swatches
  swatches: document.querySelectorAll('.swatch-item'),
  toast: document.getElementById('color-toast'),
  
  // Canvas PNG export
  canvas: document.getElementById('export-canvas')
};

// 3. LOGO RENDER ENGINE
function updateLogoRender() {
  const c = activeState.concept;
  const col = activeState.colorScheme;
  const v = activeState.variant;
  
  // Determine colorway key
  let colorwayKey = 'colored_light';
  if (v === 'mono') {
    colorwayKey = (col === 'dark') ? 'mono_dark' : 'mono_light';
  } else {
    colorwayKey = (col === 'dark') ? 'colored_dark' : 'colored_light';
  }
  
  // Retrieve SVG string
  const svgString = svgDatabase[c][colorwayKey];
  
  // Render inside Showroom Viewport
  dom.logoContainer.innerHTML = svgString;
  
  // Update Viewport Class Background
  dom.viewport.className = 'showroom-viewport bg-' + col;
  
  // Update Captions
  const conceptNames = { c1: '01 (Wordmark)', c2: '02 (Isotipo + WM)', c3: '03 (Monograma)', c4: '04 (Protagonista "+")' };
  dom.captionConcept.textContent = conceptNames[c];
  dom.captionVariant.textContent = (v === 'mono') ? 'Monocromática' : 'Oficial';
  dom.captionBg.textContent = col.charAt(0).toUpperCase() + col.slice(1);
  
  // Render inside Mockups (Business Card & Web Navbar)
  // For Mockups, we want to match the theme of the mockup!
  // Business Card is Dark-themed: uses 'colored_dark' (or 'mono_dark')
  const cardColorway = (v === 'mono') ? 'mono_dark' : 'colored_dark';
  dom.cardLogoContainer.innerHTML = svgDatabase[c][cardColorway];
  
  // Web Navbar theme:
  const isNavLight = dom.navbarElement.classList.contains('light-theme');
  let navColorway = 'colored_dark';
  if (v === 'mono') {
    navColorway = isNavLight ? 'mono_light' : 'mono_dark';
  } else {
    navColorway = isNavLight ? 'colored_light' : 'colored_dark';
  }
  dom.navbarLogoContainer.innerHTML = svgDatabase[c][navColorway];
}

// 4. CONTROL HANDLERS & LISTENERS
// Concept Selectors
dom.conceptTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    dom.conceptTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeState.concept = tab.dataset.concept;
    updateLogoRender();
  });
});

// Color Scheme Selectors
dom.colorOpts.forEach(opt => {
  opt.addEventListener('click', () => {
    dom.colorOpts.forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    activeState.colorScheme = opt.dataset.color;
    updateLogoRender();
  });
});

// Variant Selector
dom.variantOpts.forEach(opt => {
  opt.addEventListener('click', () => {
    dom.variantOpts.forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
    activeState.variant = opt.dataset.variant;
    updateLogoRender();
  });
});

// Logo Resizer Slider
dom.slider.addEventListener('input', (e) => {
  const val = e.target.value;
  dom.logoContainer.style.width = val + 'px';
  dom.sliderVal.textContent = val + 'px';
});

// Mockup Header Dark/Light toggles
dom.btnNavbarDark.addEventListener('click', () => {
  dom.btnNavbarLight.classList.remove('active');
  dom.btnNavbarDark.classList.add('active');
  dom.navbarElement.className = 'web-navbar dark-theme';
  updateLogoRender();
});
dom.btnNavbarLight.addEventListener('click', () => {
  dom.btnNavbarDark.classList.remove('active');
  dom.btnNavbarLight.classList.add('active');
  dom.navbarElement.className = 'web-navbar light-theme';
  updateLogoRender();
});

// Color Copier Click Action
dom.swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    const hex = swatch.dataset.hex;
    navigator.clipboard.writeText(hex).then(() => {
      // Show Toast Notification
      dom.toast.classList.add('show');
      setTimeout(() => {
        dom.toast.classList.remove('show');
      }, 2000);
    });
  });
});

// 5. EXPORT & DOWNLOAD EXECUTIONS
// SVG Download trigger
dom.btnDownloadSvg.addEventListener('click', () => {
  const c = activeState.concept;
  const col = activeState.colorScheme;
  const v = activeState.variant;
  
  let colorwayKey = 'colored_light';
  if (v === 'mono') {
    colorwayKey = (col === 'dark') ? 'mono_dark' : 'mono_light';
  } else {
    colorwayKey = (col === 'dark') ? 'colored_dark' : 'colored_light';
  }
  
  const svgContent = svgDatabase[c][colorwayKey];
  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `90plus_studio_concept_${c}_${colorwayKey}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// PNG HD Exporter
dom.btnDownloadPng.addEventListener('click', () => {
  const c = activeState.concept;
  const col = activeState.colorScheme;
  const v = activeState.variant;
  
  let colorwayKey = 'colored_light';
  if (v === 'mono') {
    colorwayKey = (col === 'dark') ? 'mono_dark' : 'mono_light';
  } else {
    colorwayKey = (col === 'dark') ? 'colored_dark' : 'colored_light';
  }
  
  const svgContent = svgDatabase[c][colorwayKey];
  
  // Set up exporter canvas
  const canvas = dom.canvas;
  const ctx = canvas.getContext('2d');
  
  // HD standard size: 2000px width.
  // Calculate exact height depending on the concept's original viewBox aspect ratio.
  const aspectRatios = {
    c1: 120 / 240, // 0.5 (2:1)
    c2: 120 / 280, // 0.42857 (7:3)
    c3: 120 / 240, // 0.5 (2:1)
    c4: 180 / 240  // 0.75 (4:3)
  };
  const width = 2000;
  const height = Math.round(width * aspectRatios[c]);
  
  canvas.width = width;
  canvas.height = height;
  
  // Clean canvas
  ctx.clearRect(0, 0, width, height);
  
  // Draw background if not transparent
  if (col === 'light') {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);
  } else if (col === 'dark') {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
  }
  
  // Draw SVG image to canvas
  const cleanSvg = svgContent.replace(/@import\s+url\([^)]+\);/g, '');
  const img = new Image();
  const blob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  img.onload = function() {
    ctx.drawImage(img, 0, 0, width, height);
    
    // Generate high-resolution blob instead of base64 dataUrl to avoid browser security blockages
    canvas.toBlob(function(pngBlob) {
      const pngUrl = URL.createObjectURL(pngBlob);
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = `90plus_studio_concept_${c}_${colorwayKey}_hd.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      // Cleanup PNG object URL
      URL.revokeObjectURL(pngUrl);
    }, 'image/png');
    
    // Cleanup SVG object URL
    URL.revokeObjectURL(url);
  };
  
  img.src = url;
});

// 6. 3D INTERACTIVE PERSONAL CARD PHYSICS
const cardContainer = document.querySelector('.card-mockup-viewport');
const card = dom.card3d;

if (cardContainer && card) {
  cardContainer.addEventListener('mousemove', (e) => {
    const rect = cardContainer.getBoundingClientRect();
    const x = e.clientX - rect.left; // x coordinate inside container
    const y = e.clientY - rect.top;  // y coordinate inside container
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Angle range: -25deg to +25deg
    const rotateY = ((x - centerX) / centerX) * 20;
    const rotateX = -((y - centerY) / centerY) * 20;
    
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });
  
  cardContainer.addEventListener('mouseenter', () => {
    card.style.transition = 'none'; // Instant response while mouse is moving
  });
  
  cardContainer.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'; // Reset tilt
  });
}

// 7. INITIALIZE INSTAGRAM HIGHLIGHTS
function initInstagramHighlights() {
  const bar = document.getElementById('instagram-stories-bar-element');
  const grid = document.getElementById('highlights-grid-container');
  if (!bar || !grid) return;

  bar.innerHTML = '';
  grid.innerHTML = '';

  Object.keys(highlightsDatabase).forEach(key => {
    const data = highlightsDatabase[key];
    
    // 1. Create Story Bubble
    const bubbleWrapper = document.createElement('div');
    bubbleWrapper.className = 'story-bubble-wrapper';
    bubbleWrapper.innerHTML = `
      <div class="story-bubble-border">
        <div class="story-bubble-inner">
          ${data.svg}
        </div>
      </div>
      <span class="story-bubble-label">${data.title}</span>
    `;
    bar.appendChild(bubbleWrapper);

    // 2. Create Grid Card
    const card = document.createElement('div');
    card.className = 'highlight-card';
    card.innerHTML = `
      <div class="highlight-preview">
        ${data.svg}
      </div>
      <div class="highlight-info">
        <span class="highlight-title">${data.title}</span>
        <span class="highlight-desc">${data.desc}</span>
      </div>
      <div class="highlight-actions">
        <button class="highlight-btn btn-download-svg" data-key="${key}">SVG</button>
        <button class="highlight-btn btn-png-accent btn-download-png" data-key="${key}">PNG HD</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // Attach Event Listeners
  grid.querySelectorAll('.btn-download-svg').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = e.currentTarget.dataset.key;
      const data = highlightsDatabase[key];
      const blob = new Blob([data.svg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `90plus_instagram_${key}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  });

  grid.querySelectorAll('.btn-download-png').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = e.currentTarget.dataset.key;
      const data = highlightsDatabase[key];
      
      const canvas = dom.canvas;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const size = 1080;
      
      canvas.width = size;
      canvas.height = size;
      
      ctx.clearRect(0, 0, size, size);
      
      const cleanSvg = data.svg.replace(/@import\s+url\([^)]+\);/g, '');
      const img = new Image();
      const blob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      img.onload = function() {
        ctx.drawImage(img, 0, 0, size, size);
        canvas.toBlob(function(pngBlob) {
          const pngUrl = URL.createObjectURL(pngBlob);
          const a = document.createElement('a');
          a.href = pngUrl;
          a.download = `90plus_instagram_${key}_hd.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(pngUrl);
        }, 'image/png');
        URL.revokeObjectURL(url);
      };
      img.src = url;
    });
  });
}

// 8. DATABASE OF INSTAGRAM STORIES (1080x1920px viewbox)
const storiesDatabase = {
  identity: {
    servicios: {
      title: 'Servicios',
      desc: 'Pantalla de bienvenida de la sección de servicios con iconos vectoriales minimalistas.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap');
      .story-font {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      }
    </style>
  </defs>
  <rect width="1080" height="1920" fill="#0A0A0A"/>
  
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="76" fill="#FFFFFF">Servicios<tspan fill="#39FF14">.</tspan></text>
    
    <text y="90" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Creamos soluciones digitales diseñadas</tspan>
      <tspan x="0" dy="48">para hacer crecer negocios.</tspan>
    </text>
    
    <g transform="translate(0, 320)">
      <g transform="translate(0, 0)">
        <circle cx="28" cy="28" r="22" fill="none" stroke="#FFFFFF" stroke-width="3"/>
        <ellipse cx="28" cy="28" rx="8" ry="22" fill="none" stroke="#FFFFFF" stroke-width="3"/>
        <line x1="6" y1="28" x2="50" y2="28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <line x1="28" y1="6" x2="28" y2="50" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <text x="88" y="38" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Desarrollo Web</text>
      </g>
      
      <g transform="translate(0, 160)">
        <path d="M 18 16 L 6 28 L 18 40 M 38 16 L 50 28 L 38 40 M 31 10 L 25 46" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="88" y="38" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Software a medida</text>
      </g>
      
      <g transform="translate(0, 320)">
        <circle cx="28" cy="28" r="9" fill="none" stroke="#FFFFFF" stroke-width="3"/>
        <path d="M 28 6 L 28 11 M 28 45 L 28 50 M 6 28 L 11 28 M 45 28 L 50 28 M 12.4 12.4 L 16 16 M 40 40 L 43.6 43.6 M 12.4 43.6 L 16 40 M 40 12.4 L 43.6 16" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <text x="88" y="38" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Automatización</text>
      </g>
      
      <g transform="translate(0, 480)">
        <rect x="10" y="10" width="36" height="36" rx="6" fill="none" stroke="#FFFFFF" stroke-width="3"/>
        <rect x="20" y="20" width="16" height="16" rx="2" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
        <path d="M 18 4 L 18 10 M 28 4 L 28 10 M 38 4 L 38 10 M 18 46 L 18 52 M 28 46 L 28 52 M 38 46 L 38 52 M 4 18 L 10 18 M 4 28 L 10 28 M 4 38 L 10 38 M 46 18 L 52 18 M 46 28 L 52 28 M 46 38 L 52 38" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
        <text x="88" y="38" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Sistemas de Gestión &amp; IA</text>
      </g>
    </g>
  </g>
  
  <g transform="translate(540, 1720)">
    <text text-anchor="middle" class="story-font" font-weight="600" font-size="24" letter-spacing="6" fill="#FFFFFF">DESLIZÁ PARA CONOCER MÁS <tspan fill="#39FF14">→</tspan></text>
  </g>
</svg>`
    },
    nosotros: {
      title: 'Nosotros',
      desc: 'Presentación institucional del estudio y sus pilares metodológicos.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap');
      .story-font {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      }
    </style>
  </defs>
  <rect width="1080" height="1920" fill="#0A0A0A"/>
  
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="76" fill="#FFFFFF">Nosotros<tspan fill="#39FF14">.</tspan></text>
    
    <text y="90" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Somos un estudio digital enfocado en crear</tspan>
      <tspan x="0" dy="48">experiencias modernas mediante diseño,</tspan>
      <tspan x="0" dy="48">desarrollo y tecnología.</tspan>
    </text>
    
    <g transform="translate(0, 360)">
      <g transform="translate(0, 0)">
        <rect x="0" y="10" width="18" height="18" rx="3" fill="#39FF14"/>
        <text x="56" y="28" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Tecnología.</text>
      </g>
      <g transform="translate(0, 140)">
        <rect x="0" y="10" width="18" height="18" rx="3" fill="#39FF14"/>
        <text x="56" y="28" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Creatividad.</text>
      </g>
      <g transform="translate(0, 280)">
        <rect x="0" y="10" width="18" height="18" rx="3" fill="#39FF14"/>
        <text x="56" y="28" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Calidad.</text>
      </g>
    </g>
  </g>
  
  <g transform="translate(540, 1720)">
    <text text-anchor="middle" class="story-font" font-weight="600" font-size="24" letter-spacing="6" fill="#FFFFFF">DESLIZÁ PARA CONOCER MÁS <tspan fill="#39FF14">→</tspan></text>
  </g>
</svg>`
    },
    proceso: {
      title: 'Proceso',
      desc: 'Nuestra metodología de trabajo explicada de forma clara y profesional.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap');
      .story-font {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      }
    </style>
  </defs>
  <rect width="1080" height="1920" fill="#0A0A0A"/>
  
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="76" fill="#FFFFFF">Proceso<tspan fill="#39FF14">.</tspan></text>
    
    <text y="90" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Cómo trabajamos con nuestros clientes,</tspan>
      <tspan x="0" dy="48">llevando orden y transparencia desde la</tspan>
      <tspan x="0" dy="48">primera reunión hasta la evolución del proyecto.</tspan>
    </text>
    
    <g transform="translate(0, 360)">
      <g transform="translate(0, 0)">
        <rect x="0" y="10" width="18" height="18" rx="3" fill="#39FF14"/>
        <text x="56" y="28" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Planificación ordenada.</text>
      </g>
      <g transform="translate(0, 140)">
        <rect x="0" y="10" width="18" height="18" rx="3" fill="#39FF14"/>
        <text x="56" y="28" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Desarrollo premium.</text>
      </g>
      <g transform="translate(0, 280)">
        <rect x="0" y="10" width="18" height="18" rx="3" fill="#39FF14"/>
        <text x="56" y="28" class="story-font" font-weight="600" font-size="34" fill="#FFFFFF">Evolución continua.</text>
      </g>
    </g>
  </g>
  
  <g transform="translate(540, 1720)">
    <text text-anchor="middle" class="story-font" font-weight="600" font-size="24" letter-spacing="6" fill="#FFFFFF">DESLIZÁ PARA CONOCER MÁS <tspan fill="#39FF14">→</tspan></text>
  </g>
</svg>`
    },
    contacto: {
      title: 'Contacto',
      desc: 'Diseño ultra-minimalista y editorial para iniciar contacto y conversar sobre nuevos proyectos.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap');
      .story-font {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      }
    </style>
  </defs>
  <rect width="1080" height="1920" fill="#0A0A0A"/>
  
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="76" fill="#FFFFFF">Contacto<tspan fill="#39FF14">.</tspan></text>
    
    <text y="120" class="story-font" font-weight="400" font-size="32" fill="#FFFFFF" xml:space="preserve">
      <tspan x="0" dy="0">¿Tenés una idea o un proyecto?</tspan>
      <tspan x="0" dy="54">Nos encantaría conocerlo y ayudarte</tspan>
      <tspan x="0" dy="48">a hacerlo realidad.</tspan>
    </text>
  </g>
  
  <g transform="translate(540, 1720)">
    <text text-anchor="middle" class="story-font" font-weight="600" font-size="24" letter-spacing="6" fill="#FFFFFF">ESCRIBINOS Y CONVERSEMOS <tspan fill="#39FF14">→</tspan></text>
  </g>
</svg>`
    },
    preguntas: {
      title: 'Preguntas Frecuentes',
      desc: 'Respuestas a las inquietudes más habituales antes de dar inicio.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap');
      .story-font {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      }
    </style>
  </defs>
  <rect width="1080" height="1920" fill="#0A0A0A"/>
  
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  
  <g transform="translate(540, 560)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="76" fill="#FFFFFF">Preguntas<tspan x="0" dy="90">frecuentes<tspan fill="#39FF14">.</tspan></tspan></text>
    
    <text y="240" text-anchor="middle" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Respondemos las consultas más comunes</tspan>
      <tspan x="0" dy="48">antes de comenzar un proyecto.</tspan>
    </text>
    
    <g transform="translate(-80, 480)">
      <line x1="0" y1="0" x2="160" y2="0" stroke="#39FF14" stroke-width="4"/>
      <text y="80" text-anchor="middle" x="80" class="story-font" font-weight="600" font-size="44" fill="#FFFFFF" xml:space="preserve">
        <tspan x="80" dy="0">Todo lo que</tspan>
        <tspan x="80" dy="64">necesitás saber.</tspan>
      </text>
    </g>
  </g>
  
  <g transform="translate(540, 1720)">
    <text text-anchor="middle" class="story-font" font-weight="600" font-size="24" letter-spacing="6" fill="#FFFFFF">DESLIZÁ PARA CONOCER MÁS <tspan fill="#39FF14">→</tspan></text>
  </g>
</svg>`
    }
  },
  process: {
    portada: {
      title: 'Portada',
      desc: 'Portada oficial de la destacada "PROCESO" con el logotipo y retícula tecnológica.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="#000000" />
  
  <!-- Grid -->
  <rect width="1080" height="1920" fill="url(#grid)" opacity="0.6" />

  <!-- Margins -->
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />

  <!-- Top Logo -->
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>

  <!-- Giant Logo Centered -->
  <g transform="translate(540, 760)">
    <!-- Scale drawing of logo 90+ -->
    <g transform="translate(-128, -128) scale(4)">
      <!-- Number 9 shape -->
      <path d="M 25 29 A 7 7 0 1 0 11 29 A 7 7 0 1 0 25 29 M 25 29 L 25 36 A 7 7 0 0 1 18 43" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Number 0 shape -->
      <rect x="31" y="22" width="14" height="21" rx="7" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Plus sign (+) -->
      <path d="M 48 27 L 54 27 M 51 24 L 51 30" fill="none" stroke="#39FF14" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  </g>

  <!-- Typography Title -->
  <g transform="translate(540, 1100)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="64" letter-spacing="24" fill="#FFFFFF">PROCESO</text>
    <text y="70" text-anchor="middle" class="story-font" font-weight="500" font-size="24" letter-spacing="8" fill="#39FF14">METODOLOGÍA DE TRABAJO</text>
  </g>

  <!-- Subtitle Editorial Paragraph -->
  <g transform="translate(540, 1440)">
    <text text-anchor="middle" class="story-font" font-weight="400" font-size="28" fill="#555555">Cómo creamos soluciones digitales premium</text>
    <text y="44" text-anchor="middle" class="story-font" font-weight="400" font-size="28" fill="#555555">desde la idea hasta el producto final.</text>
  </g>

  <!-- Footer -->
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">DESLIZÁ PARA EMPEZAR &bull; 90+ STUDIO</text>
  </g>
</svg>`
    },
    descubrimiento: {
      title: 'Descubrimiento',
      desc: 'Fase de contacto inicial, alineación de objetivos y entendimiento del negocio.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="#000000" />
  
  <!-- Grid -->
  <rect width="1080" height="1920" fill="url(#grid)" opacity="0.6" />

  <!-- Margins -->
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />

  <!-- Top Logo -->
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>

  <!-- Header -->
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">01 — DESCUBRIMIENTO</text>
    <text y="100" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">Entendemos tu negocio:</text>
  </g>

  <!-- Bullet Points -->
  <g transform="translate(120, 680)">
    <!-- Point 1 -->
    <rect x="0" y="0" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="20" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Primera reunión de alineación</text>
    
    <!-- Point 2 -->
    <rect x="0" y="70" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="90" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Entendimiento de objetivos</text>

    <!-- Point 3 -->
    <rect x="0" y="140" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="160" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Análisis del público objetivo</text>

    <!-- Paragraph -->
    <text y="310" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Escuchamos tus necesidades para definir el rumbo</tspan>
      <tspan x="0" dy="50">y alcance estratégico del proyecto.</tspan>
    </text>
  </g>

  <!-- Visual Element: Interactive briefing status -->
  <g transform="translate(180, 1180)">
    <!-- Card container -->
    <rect x="0" y="0" width="720" height="260" rx="20" fill="#0A0A0A" stroke="#171717" stroke-width="3" />
    
    <!-- Team profile icons mockup -->
    <circle cx="90" cy="130" r="44" fill="#171717" />
    <path d="M 74 136 C 74 126 80 120 90 120 C 100 120 106 126 106 136" fill="none" stroke="#39FF14" stroke-width="4" stroke-linecap="round" />
    <circle cx="90" cy="108" r="12" fill="#39FF14" />

    <circle cx="210" cy="130" r="44" fill="#171717" />
    <path d="M 194 136 C 194 126 200 120 210 120 C 220 120 226 126 226 136" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
    <circle cx="210" cy="108" r="12" fill="#FFFFFF" />
    
    <!-- Arrow -->
    <path d="M 280 130 C 310 90 350 90 380 130" fill="none" stroke="#39FF14" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 6" />
    <path d="M 380 130 L 366 120 M 380 130 L 366 140" fill="none" stroke="#39FF14" stroke-width="4" stroke-linecap="round" />
    
    <!-- Status Card -->
    <rect x="420" y="80" width="240" height="100" rx="12" fill="#111111" stroke="#222222" stroke-width="2" />
    <text x="540" y="130" class="story-font" font-weight="700" font-size="24" fill="#FFFFFF" text-anchor="middle">BRIEFING</text>
    <text x="540" y="156" class="story-font" font-weight="600" font-size="14" fill="#39FF14" text-anchor="middle" letter-spacing="2">COMPLETADO</text>
  </g>

  <!-- Footer -->
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; METODOLOGÍA</text>
  </g>
</svg>`
    },
    planificacion: {
      title: 'Planificación',
      desc: 'Estructuración de sprints, entregables, arquitectura técnica y cronograma.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="#000000" />
  
  <!-- Grid -->
  <rect width="1080" height="1920" fill="url(#grid)" opacity="0.6" />

  <!-- Margins -->
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />

  <!-- Top Logo -->
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>

  <!-- Header -->
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">02 — PLANIFICACIÓN</text>
    <text y="100" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">Definimos:</text>
  </g>

  <!-- Bullet Points -->
  <g transform="translate(120, 680)">
    <!-- Point 1 -->
    <rect x="0" y="0" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="20" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Estructura del proyecto</text>
    
    <!-- Point 2 -->
    <rect x="0" y="70" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="90" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Funcionalidades</text>

    <!-- Point 3 -->
    <rect x="0" y="140" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="160" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Tecnología</text>

    <!-- Point 4 -->
    <rect x="0" y="210" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="230" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Tiempos de trabajo</text>

    <!-- Paragraph -->
    <text y="380" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Organizamos meticulosamente cada etapa</tspan>
      <tspan x="0" dy="50">y entregable antes de escribir código.</tspan>
    </text>
  </g>

  <!-- Visual Element: Roadmap Gantt -->
  <g transform="translate(240, 1180)">
    <!-- Timeline Vertical Line -->
    <line x1="50" y1="0" x2="50" y2="300" stroke="#171717" stroke-width="4" />
    <line x1="50" y1="0" x2="50" y2="150" stroke="#39FF14" stroke-width="4" />
    
    <!-- Phase 1 -->
    <circle cx="50" cy="0" r="16" fill="#39FF14" />
    <circle cx="50" cy="0" r="6" fill="#000000" />
    <text x="100" y="10" class="story-font" font-weight="700" font-size="30" fill="#FFFFFF">UX Wireframing</text>
    <text x="100" y="44" class="story-font" font-weight="500" font-size="20" fill="#555555">Fase 1 &bull; Listo</text>
    
    <!-- Phase 2 -->
    <circle cx="50" cy="150" r="16" fill="#39FF14" />
    <circle cx="50" cy="150" r="6" fill="#000000" />
    <text x="100" y="160" class="story-font" font-weight="700" font-size="30" fill="#FFFFFF">Arquitectura y Stack</text>
    <text x="100" y="194" class="story-font" font-weight="500" font-size="20" fill="#39FF14">Fase 2 &bull; En Curso</text>
    
    <!-- Phase 3 -->
    <circle cx="50" cy="300" r="12" fill="#171717" stroke="#333333" stroke-width="3" />
    <text x="100" y="310" class="story-font" font-weight="700" font-size="30" fill="#888888">Sprint Desarrollo</text>
    <text x="100" y="344" class="story-font" font-weight="500" font-size="20" fill="#555555">Fase 3 &bull; Siguiente</text>
  </g>

  <!-- Footer -->
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; METODOLOGÍA</text>
  </g>
</svg>`
    },
    diseno: {
      title: 'Diseño UX/UI',
      desc: 'Modelado visual interactivo, wireframing de alta fidelidad y diseño premium.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="#000000" />
  
  <!-- Grid -->
  <rect width="1080" height="1920" fill="url(#grid)" opacity="0.6" />

  <!-- Margins -->
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />

  <!-- Top Logo -->
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>

  <!-- Header -->
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">03 — DISEÑO UX/UI</text>
    <text y="100" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">Creamos experiencias</text>
    <text y="180" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">digitales modernas:</text>
  </g>

  <!-- Bullet Points -->
  <g transform="translate(120, 780)">
    <!-- Point 1 -->
    <rect x="0" y="0" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="20" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Diseño atractivo</text>
    
    <!-- Point 2 -->
    <rect x="0" y="70" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="90" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Facilidad de uso</text>

    <!-- Point 3 -->
    <rect x="0" y="140" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="160" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Identidad de marca</text>

    <!-- Paragraph -->
    <text y="290" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Cada detalle está pensado meticulosamente</tspan>
      <tspan x="0" dy="50">para la interacción del usuario final.</tspan>
    </text>
  </g>

  <!-- Visual Element: Dashboard UI Mockup -->
  <g transform="translate(180, 1180)">
    <!-- Card container -->
    <rect x="0" y="0" width="720" height="320" rx="20" fill="#0A0A0A" stroke="#171717" stroke-width="3" />
    
    <!-- Avatar and lines -->
    <circle cx="60" cy="60" r="24" fill="#171717" />
    <path d="M 52 68 C 52 60 56 56 60 56 C 64 56 68 60 68 68" fill="none" stroke="#888888" stroke-width="3" stroke-linecap="round" />
    <circle cx="60" cy="48" r="8" fill="#888888" />
    
    <rect x="110" y="42" width="180" height="12" rx="6" fill="#FFFFFF" />
    <rect x="110" y="64" width="100" height="8" rx="4" fill="#39FF14" />
    
    <!-- Three control window dots -->
    <circle cx="660" cy="60" r="8" fill="#222" />
    <circle cx="630" cy="60" r="8" fill="#222" />
    
    <line x1="30" y1="110" x2="690" y2="110" stroke="#171717" stroke-width="2" />
    
    <!-- Chart data -->
    <text x="60" y="165" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">$4,820<tspan fill="#39FF14" font-size="22" font-weight="600">.90</tspan></text>
    <text x="60" y="195" class="story-font" font-weight="500" font-size="18" fill="#555555">Rendimiento Mensual</text>
    
    <!-- Line chart graphic -->
    <path d="M 360 210 Q 420 130 480 170 T 600 120 T 670 130" fill="none" stroke="#222222" stroke-width="4" stroke-linecap="round" />
    <path d="M 360 210 Q 420 130 480 170 T 600 120" fill="none" stroke="#39FF14" stroke-width="4" stroke-linecap="round" />
    <circle cx="600" cy="120" r="8" fill="#39FF14" />
    <circle cx="600" cy="120" r="18" fill="none" stroke="#39FF14" stroke-width="2" opacity="0.4" />
    
    <!-- UI Pill elements -->
    <rect x="60" y="240" width="130" height="44" rx="22" fill="#171717" stroke="#222222" stroke-width="1.5" />
    <circle cx="85" cy="262" r="12" fill="#39FF14" />
    <text x="135" y="269" class="story-font" font-weight="700" font-size="18" fill="#FFFFFF">UX</text>
    
    <rect x="210" y="240" width="130" height="44" rx="22" fill="none" stroke="#171717" stroke-width="1.5" />
    <circle cx="235" cy="262" r="10" fill="#222" />
    <text x="285" y="269" class="story-font" font-weight="700" font-size="18" fill="#555555">UI</text>
  </g>

  <!-- Footer -->
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; METODOLOGÍA</text>
  </g>
</svg>`
    },
    desarrollo: {
      title: 'Desarrollo',
      desc: 'Programación a medida, optimización para SEO y desarrollo escalable con código limpio.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="#000000" />
  
  <!-- Grid -->
  <rect width="1080" height="1920" fill="url(#grid)" opacity="0.6" />

  <!-- Margins -->
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />

  <!-- Top Logo -->
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>

  <!-- Header -->
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">04 — DESARROLLO</text>
    <text y="100" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">Convertimos diseño en</text>
    <text y="180" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">una solución funcional:</text>
  </g>

  <!-- Bullet Points -->
  <g transform="translate(120, 780)">
    <!-- Point 1 -->
    <rect x="0" y="0" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="20" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Rápidos</text>
    
    <!-- Point 2 -->
    <rect x="0" y="70" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="90" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Seguros</text>

    <!-- Point 3 -->
    <rect x="0" y="140" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="160" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Escalables</text>

    <!-- Paragraph -->
    <text y="290" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Desarrollamos utilizando tecnologías modernas</tspan>
      <tspan x="0" dy="50">y código limpio optimizado para SEO.</tspan>
    </text>
  </g>

  <!-- Visual Element: Code Mockup inside Editor -->
  <g transform="translate(160, 1180)">
    <!-- Editor Card -->
    <rect x="0" y="0" width="760" height="320" rx="16" fill="#050505" stroke="#171717" stroke-width="3" />
    
    <!-- IDE Control dots -->
    <circle cx="40" cy="35" r="8" fill="#FF5F56" />
    <circle cx="70" cy="35" r="8" fill="#FFBD2E" />
    <circle cx="100" cy="35" r="8" fill="#27C93F" />
    <text x="140" y="42" class="story-font" font-weight="600" font-size="20" fill="#555555">App.tsx</text>
    
    <!-- IDE divider -->
    <line x1="0" y1="70" x2="760" y2="70" stroke="#171717" stroke-width="2" />
    
    <!-- Syntax Highlighted Code -->
    <g transform="translate(40, 120)">
      <!-- Line 1 -->
      <text class="story-font" font-weight="500" font-size="26" fill="#39FF14">import<tspan fill="#FFFFFF"> { </tspan>buildWebsite<tspan fill="#FFFFFF"> } </tspan>from<tspan fill="#39FF14"> '90plus'</tspan>;</text>
      
      <!-- Line 2 -->
      <text y="50" class="story-font" font-weight="500" font-size="26" fill="#FFFFFF"><tspan fill="#39FF14">const</tspan> project = buildWebsite({</text>
      
      <!-- Line 3 -->
      <text y="100" x="40" class="story-font" font-weight="500" font-size="26" fill="#888888">performance: <tspan fill="#39FF14">'maximum'</tspan>,</text>
      
      <!-- Line 4 -->
      <text y="150" x="40" class="story-font" font-weight="500" font-size="26" fill="#888888">security: <tspan fill="#39FF14">true</tspan>,</text>
      
      <!-- Line 5 -->
      <text y="200" x="40" class="story-font" font-weight="500" font-size="26" fill="#888888">scale: <tspan fill="#39FF14">'infinite'</tspan></text>
      
      <!-- Line 6 -->
      <text y="250" class="story-font" font-weight="500" font-size="26" fill="#FFFFFF">});</text>
    </g>
  </g>

  <!-- Footer -->
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; METODOLOGÍA</text>
  </g>
</svg>`
    },
    lanzamiento: {
      title: 'Lanzamiento',
      desc: 'Configuración de dominios, despliegue continuo en producción e infraestructura en la nube.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="#000000" />
  
  <!-- Grid -->
  <rect width="1080" height="1920" fill="url(#grid)" opacity="0.6" />

  <!-- Margins -->
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />

  <!-- Top Logo -->
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>

  <!-- Header -->
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">05 — LANZAMIENTO</text>
    <text y="100" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">Ponemos el proyecto online</text>
    <text y="180" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">configurando:</text>
  </g>

  <!-- Bullet Points -->
  <g transform="translate(120, 780)">
    <!-- Point 1 -->
    <rect x="0" y="0" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="20" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Dominio e infraestructura</text>
    
    <!-- Point 2 -->
    <rect x="0" y="70" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="90" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Integraciones y pasarelas</text>

    <!-- Point 3 -->
    <rect x="0" y="140" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="160" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Servicios necesarios</text>

    <!-- Paragraph -->
    <text y="290" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Entregamos una solución lista para operar,</tspan>
      <tspan x="0" dy="50">configurando dominios y servicios en la nube.</tspan>
    </text>
  </g>

  <!-- Visual Element: Cloud Deploy Node -->
  <g transform="translate(240, 1180)">
    <!-- Globe network background -->
    <circle cx="300" cy="180" r="130" fill="none" stroke="#171717" stroke-width="3" />
    <ellipse cx="300" cy="180" rx="50" ry="130" fill="none" stroke="#171717" stroke-width="3" />
    <line x1="170" y1="180" x2="430" y2="180" stroke="#171717" stroke-width="3" />
    
    <!-- Uploading indicator arrow -->
    <path d="M 300 220 L 300 100 M 300 100 L 270 130 M 300 100 L 330 130" fill="none" stroke="#39FF14" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    
    <!-- Environment Server Badge -->
    <rect x="180" y="30" width="240" height="48" rx="8" fill="#111111" stroke="#39FF14" stroke-width="2" />
    <circle cx="210" cy="54" r="8" fill="#39FF14" />
    <text x="236" y="62" class="story-font" font-weight="700" font-size="20" fill="#FFFFFF">production.env</text>
    
    <line x1="300" y1="78" x2="300" y2="100" stroke="#39FF14" stroke-width="3" stroke-dasharray="4 4" />
    
    <!-- DEPLOY SUCCESSFUL toast -->
    <rect x="160" y="290" width="280" height="48" rx="24" fill="#0D0D0D" stroke="#222" stroke-width="2" />
    <circle cx="190" cy="314" r="8" fill="#39FF14" />
    <text x="214" y="321" class="story-font" font-weight="700" font-size="18" fill="#FFFFFF" letter-spacing="2">DEPLOY SUCCESS</text>
  </g>

  <!-- Footer -->
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; METODOLOGÍA</text>
  </g>
</svg>`
    },
    evolucion: {
      title: 'Evolución',
      desc: 'Mantenimiento continuo, análisis de datos de usuario y optimización de conversión.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="#000000" />
  
  <!-- Grid -->
  <rect width="1080" height="1920" fill="url(#grid)" opacity="0.6" />

  <!-- Margins -->
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />

  <!-- Top Logo -->
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>

  <!-- Header -->
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">06 — EVOLUCIÓN</text>
    <text y="100" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">Un proyecto digital no</text>
    <text y="180" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">termina en el lanzamiento:</text>
  </g>

  <!-- Bullet Points -->
  <g transform="translate(120, 780)">
    <!-- Point 1 -->
    <rect x="0" y="0" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="20" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Mejoras y optimización</text>
    
    <!-- Point 2 -->
    <rect x="0" y="70" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="90" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Nuevas funcionalidades</text>

    <!-- Point 3 -->
    <rect x="0" y="140" width="20" height="20" rx="4" fill="#39FF14" />
    <text x="50" y="160" class="story-font" font-weight="700" font-size="36" fill="#FFFFFF">Soporte técnico continuo</text>

    <!-- Paragraph -->
    <text y="290" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Acompañamos el crecimiento de tu solución</tspan>
      <tspan x="0" dy="50">analizando datos y mejorando conversiones.</tspan>
    </text>
  </g>

  <!-- Visual Element: Growth Chart -->
  <g transform="translate(180, 1180)">
    <!-- Graph Axes -->
    <line x1="40" y1="280" x2="680" y2="280" stroke="#171717" stroke-width="3" stroke-linecap="round" />
    <line x1="40" y1="40" x2="40" y2="280" stroke="#171717" stroke-width="3" stroke-linecap="round" />
    
    <!-- Grid dashed lines -->
    <line x1="40" y1="200" x2="680" y2="200" stroke="#111" stroke-width="1.5" stroke-dasharray="8 8" />
    <line x1="40" y1="120" x2="680" y2="120" stroke="#111" stroke-width="1.5" stroke-dasharray="8 8" />
    <line x1="40" y1="40" x2="680" y2="40" stroke="#111" stroke-width="1.5" stroke-dasharray="8 8" />
    
    <!-- Ascending curve path -->
    <path d="M 40 240 Q 180 220 300 140 T 540 70 T 680 40" fill="none" stroke="#39FF14" stroke-width="6" stroke-linecap="round" />
    
    <!-- Circles at points -->
    <circle cx="40" cy="240" r="8" fill="#39FF14" />
    <circle cx="300" cy="140" r="8" fill="#39FF14" />
    <circle cx="540" cy="70" r="8" fill="#39FF14" />
    <circle cx="680" cy="40" r="10" fill="#39FF14" />
    <!-- Pulse glow circle -->
    <circle cx="680" cy="40" r="20" fill="none" stroke="#39FF14" stroke-width="2" opacity="0.5" />
    
    <!-- Accent rate bubble -->
    <rect x="530" y="110" width="120" height="40" rx="8" fill="#111111" stroke="#39FF14" stroke-width="2" />
    <text x="590" y="136" class="story-font" font-weight="700" font-size="20" fill="#39FF14" text-anchor="middle">+90%</text>
    
    <!-- Labels -->
    <text x="40" y="310" class="story-font" font-weight="600" font-size="18" fill="#555555" text-anchor="middle">Lanzar</text>
    <text x="300" y="310" class="story-font" font-weight="600" font-size="18" fill="#555555" text-anchor="middle">Mes 3</text>
    <text x="540" y="310" class="story-font" font-weight="600" font-size="18" fill="#555555" text-anchor="middle">Mes 6</text>
    <text x="680" y="310" class="story-font" font-weight="600" font-size="18" fill="#39FF14" text-anchor="middle">Evolución</text>
  </g>

  <!-- Footer -->
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; METODOLOGÍA</text>
  </g>
</svg>`
    },
    cierre: {
      title: 'Cierre',
      desc: 'Cierre premium de la serie con logotipo y dirección web de la agencia.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1080" height="1920" fill="#000000" />
  
  <!-- Grid -->
  <rect width="1080" height="1920" fill="url(#grid)" opacity="0.6" />

  <!-- Margins -->
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />

  <!-- Top Mini Title -->
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>

  <!-- Header -->
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">07 — PROCESO DE TRABAJO</text>
    <text y="100" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">Llevemos tu idea al</text>
    <text y="180" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">siguiente nivel:</text>
  </g>

  <!-- Paragraph Description -->
  <g transform="translate(120, 750)">
    <text class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Diseño sofisticado, desarrollo impecable y una</tspan>
      <tspan x="0" dy="50">metodología transparente diseñada para tu éxito.</tspan>
    </text>
  </g>

  <!-- Interactive Call-To-Action Card Mockup -->
  <g transform="translate(180, 960)">
    <!-- Background Card -->
    <rect x="0" y="0" width="720" height="340" rx="20" fill="#050505" stroke="#171717" stroke-width="3" />
    
    <!-- Pulse badge in card header -->
    <rect x="220" y="40" width="280" height="48" rx="24" fill="#0F0F0F" stroke="#39FF14" stroke-width="2" />
    <circle cx="255" cy="64" r="8" fill="#39FF14" />
    <text x="380" y="71" class="story-font" font-weight="700" font-size="18" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">PROYECTOS ACTIVOS</text>
    
    <!-- Meeting Slot info -->
    <text x="360" y="150" class="story-font" font-weight="800" font-size="36" fill="#FFFFFF" text-anchor="middle">¿Comenzamos a conversar?</text>
    <text x="360" y="195" class="story-font" font-weight="500" font-size="24" fill="#555555" text-anchor="middle">Agendá una llamada de 15 minutos</text>

    <!-- Simulated CTA Button -->
    <g transform="translate(140, 230)">
      <rect x="0" y="0" width="440" height="72" rx="36" fill="#39FF14" />
      <text x="220" y="44" class="story-font" font-weight="800" font-size="22" fill="#000000" text-anchor="middle" letter-spacing="2">ESCRIBINOS AHORA →</text>
    </g>
  </g>

  <!-- Footer Link and Branding -->
  <g transform="translate(120, 1460)">
    <line x1="0" y1="0" x2="840" y2="0" stroke="#171717" stroke-width="2" />
    <text y="50" class="story-font" font-weight="400" font-size="28" fill="#555555">Visita nuestro sitio para conocer más</text>
    <text x="840" y="50" class="story-font" font-weight="700" font-size="28" fill="#39FF14" text-anchor="end">90plus.studio_</text>
  </g>

  <!-- Footer Info -->
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; METODOLOGÍA</text>
  </g>
</svg>`
    }
  },
  faq: {
    portada: {
      title: 'Portada',
      desc: 'Portada oficial de la sección de Preguntas Frecuentes.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap');
      .story-font { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
    </style>
  </defs>
  <rect width="1080" height="1920" fill="#0A0A0A"/>
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(540, 560)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="76" fill="#FFFFFF">Preguntas<tspan x="0" dy="90">frecuentes<tspan fill="#39FF14">.</tspan></tspan></text>
    <text y="240" text-anchor="middle" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Respondemos las consultas más comunes</tspan>
      <tspan x="0" dy="48">antes de comenzar un proyecto.</tspan>
    </text>
    <g transform="translate(-80, 480)">
      <line x1="0" y1="0" x2="160" y2="0" stroke="#39FF14" stroke-width="4"/>
      <text y="80" text-anchor="middle" x="80" class="story-font" font-weight="600" font-size="44" fill="#FFFFFF" xml:space="preserve">
        <tspan x="80" dy="0">Todo lo que</tspan>
        <tspan x="80" dy="64">necesitás saber.</tspan>
      </text>
    </g>
  </g>
  <g transform="translate(540, 1720)">
    <text text-anchor="middle" class="story-font" font-weight="600" font-size="24" letter-spacing="6" fill="#FFFFFF">DESLIZÁ PARA CONOCER MÁS <tspan fill="#39FF14">→</tspan></text>
  </g>
</svg>`
    },
    proceso: {
      title: 'Proceso de trabajo',
      desc: 'Metodología sin intermediarios, alineación inicial y sprints semanales.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid-faq-p" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>
  <rect width="1080" height="1920" fill="#000000" />
  <rect width="1080" height="1920" fill="url(#grid-faq-p)" opacity="0.6" />
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(120, 460)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">01 — PREGUNTAS FRECUENTES</text>
    <text y="100" class="story-font" font-weight="800" font-size="54" letter-spacing="-1" fill="#FFFFFF" xml:space="preserve">
      <tspan x="0" dy="0">¿Cómo es el proceso</tspan>
      <tspan x="0" dy="68">de trabajo?</tspan>
    </text>
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="840" height="660" rx="24" fill="#0A0A0A" stroke="#171717" stroke-width="3" />
      <circle cx="60" cy="60" r="16" fill="#39FF14" />
      <text x="96" y="68" class="story-font" font-weight="700" font-size="22" fill="#39FF14" letter-spacing="2">METODOLOGÍA DE TRABAJO</text>
      <text x="60" y="150" class="story-font" font-weight="400" font-size="32" fill="#D4D4D4" xml:space="preserve">
        <tspan x="60" dy="0">Trabajamos sin intermediarios.</tspan>
        <tspan x="60" dy="54">Iniciamos con una sesión de</tspan>
        <tspan x="60" dy="54">alineación estratégica para definir</tspan>
        <tspan x="60" dy="54">alcances y arquitectura.</tspan>
        <tspan x="60" dy="80">Luego ejecutamos en sprints</tspan>
        <tspan x="60" dy="54">semanales con entregables</tspan>
        <tspan x="60" dy="54">visibles y comunicación constante.</tspan>
      </text>
      <g transform="translate(60, 540)">
        <rect x="0" y="0" width="280" height="48" rx="24" fill="#141414" stroke="#262626" stroke-width="2" />
        <circle cx="28" cy="24" r="6" fill="#39FF14" />
        <text x="46" y="31" class="story-font" font-weight="700" font-size="16" fill="#FFFFFF" letter-spacing="2">SPRINTS SEMANALES</text>
      </g>
    </g>
  </g>
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; PREGUNTAS FRECUENTES</text>
  </g>
</svg>`
    },
    propiedad: {
      title: 'Propiedad del código',
      desc: 'Confirmación de propiedad al 100% para el cliente.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid-faq-pr" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>
  <rect width="1080" height="1920" fill="#000000" />
  <rect width="1080" height="1920" fill="url(#grid-faq-pr)" opacity="0.6" />
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(120, 460)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">02 — PREGUNTAS FRECUENTES</text>
    <text y="100" class="story-font" font-weight="800" font-size="54" letter-spacing="-1" fill="#FFFFFF" xml:space="preserve">
      <tspan x="0" dy="0">¿Quién es el dueño</tspan>
      <tspan x="0" dy="68">del código fuente?</tspan>
    </text>
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="840" height="660" rx="24" fill="#0A0A0A" stroke="#171717" stroke-width="3" />
      <rect x="60" y="50" width="340" height="54" rx="27" fill="#112911" stroke="#39FF14" stroke-width="2" />
      <text x="230" y="84" text-anchor="middle" class="story-font" font-weight="800" font-size="20" fill="#39FF14" letter-spacing="2">100% PROPIEDAD TUYA</text>
      <text x="60" y="170" class="story-font" font-weight="400" font-size="32" fill="#D4D4D4" xml:space="preserve">
        <tspan x="60" dy="0">El cliente es el único dueño del 100%</tspan>
        <tspan x="60" dy="54">del código fuente, repositorios, bases</tspan>
        <tspan x="60" dy="54">de datos e infraestructura una vez</tspan>
        <tspan x="60" dy="54">finalizado el proyecto.</tspan>
        <tspan x="60" dy="80">Entregamos todo configurado</tspan>
        <tspan x="60" dy="54">y listo para producción.</tspan>
      </text>
      <g transform="translate(60, 520)">
        <rect x="0" y="0" width="220" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="110" y="42" text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#FFFFFF">REPOSITORIO</text>
        <rect x="240" y="0" width="220" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="350" y="42" text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#FFFFFF">BASE DE DATOS</text>
        <rect x="480" y="0" width="240" height="70" rx="14" fill="#141414" stroke="#39FF14" stroke-width="2" />
        <text x="600" y="42" text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#39FF14">INFRAESTRUCTURA</text>
      </g>
    </g>
  </g>
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; PREGUNTAS FRECUENTES</text>
  </g>
</svg>`
    },
    tecnologia: {
      title: 'Tecnologías',
      desc: 'Stack técnico utilizado: Next.js, React, TypeScript, Node.js e IA.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid-faq-t" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>
  <rect width="1080" height="1920" fill="#000000" />
  <rect width="1080" height="1920" fill="url(#grid-faq-t)" opacity="0.6" />
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(120, 460)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">03 — PREGUNTAS FRECUENTES</text>
    <text y="100" class="story-font" font-weight="800" font-size="54" letter-spacing="-1" fill="#FFFFFF" xml:space="preserve">
      <tspan x="0" dy="0">¿Qué tecnologías</tspan>
      <tspan x="0" dy="68">utilizan para construir?</tspan>
    </text>
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="840" height="740" rx="24" fill="#0A0A0A" stroke="#171717" stroke-width="3" />
      <text x="50" y="60" class="story-font" font-weight="400" font-size="28" fill="#888888">Stack moderno de alto rendimiento y escalabilidad:</text>
      <g transform="translate(50, 100)">
        <rect x="0" y="0" width="230" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="115" y="42" text-anchor="middle" class="story-font" font-weight="700" font-size="22" fill="#FFFFFF">Next.js</text>
        <rect x="255" y="0" width="230" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="370" y="42" text-anchor="middle" class="story-font" font-weight="700" font-size="22" fill="#FFFFFF">React</text>
        <rect x="510" y="0" width="230" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="625" y="42" text-anchor="middle" class="story-font" font-weight="700" font-size="22" fill="#FFFFFF">TypeScript</text>
        <rect x="0" y="90" width="230" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="115" y="132" text-anchor="middle" class="story-font" font-weight="700" font-size="22" fill="#FFFFFF">Node.js</text>
        <rect x="255" y="90" width="230" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="370" y="132" text-anchor="middle" class="story-font" font-weight="700" font-size="22" fill="#FFFFFF">PostgreSQL</text>
        <rect x="510" y="90" width="230" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="625" y="132" text-anchor="middle" class="story-font" font-weight="700" font-size="22" fill="#FFFFFF">Supabase</text>
        <rect x="0" y="180" width="230" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="115" y="222" text-anchor="middle" class="story-font" font-weight="700" font-size="22" fill="#FFFFFF">Redis</text>
        <rect x="255" y="180" width="485" height="70" rx="14" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="497" y="222" text-anchor="middle" class="story-font" font-weight="700" font-size="22" fill="#FFFFFF">TailwindCSS</text>
      </g>
      <g transform="translate(50, 400)">
        <rect x="0" y="0" width="740" height="280" rx="20" fill="#0D1F0D" stroke="#39FF14" stroke-width="2" />
        <circle cx="50" cy="50" r="12" fill="#39FF14" />
        <text x="80" y="58" class="story-font" font-weight="800" font-size="22" fill="#39FF14" letter-spacing="2">INTEGRACIÓN DE INTELIGENCIA ARTIFICIAL</text>
        <text x="50" y="130" class="story-font" font-weight="400" font-size="30" fill="#FFFFFF" xml:space="preserve">
          <tspan x="50" dy="0">Conectamos modelos de IA avanzados</tspan>
          <tspan x="50" dy="50">(OpenAI / Anthropic APIs) para potenciar</tspan>
          <tspan x="50" dy="50">tus flujos de trabajo y automatizaciones.</tspan>
        </text>
      </g>
    </g>
  </g>
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; PREGUNTAS FRECUENTES</text>
  </g>
</svg>`
    },
    tiempos: {
      title: 'Tiempos de desarrollo',
      desc: 'Estimación de 2 a 4 semanas para desarrollos estándar.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid-faq-ti" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>
  <rect width="1080" height="1920" fill="#000000" />
  <rect width="1080" height="1920" fill="url(#grid-faq-ti)" opacity="0.6" />
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(120, 460)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">04 — PREGUNTAS FRECUENTES</text>
    <text y="100" class="story-font" font-weight="800" font-size="54" letter-spacing="-1" fill="#FFFFFF" xml:space="preserve">
      <tspan x="0" dy="0">¿Cuáles son los tiempos</tspan>
      <tspan x="0" dy="68">estimados de desarrollo?</tspan>
    </text>
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="840" height="660" rx="24" fill="#0A0A0A" stroke="#171717" stroke-width="3" />
      <g transform="translate(60, 50)">
        <rect x="0" y="0" width="360" height="54" rx="27" fill="#141414" stroke="#262626" stroke-width="2" />
        <circle cx="28" cy="27" r="8" fill="#39FF14" />
        <text x="50" y="34" class="story-font" font-weight="700" font-size="20" fill="#FFFFFF" letter-spacing="2">TIEMPOS ESTIMADOS</text>
      </g>
      <text x="60" y="170" class="story-font" font-weight="400" font-size="32" fill="#D4D4D4" xml:space="preserve">
        <tspan x="60" dy="0">Los proyectos estándar (landing pages,</tspan>
        <tspan x="60" dy="54">sitios institucionales o web apps</tspan>
        <tspan x="60" dy="54">iniciales) toman entre 2 y 4 semanas.</tspan>
        <tspan x="60" dy="80">Proyectos más complejos o sistemas</tspan>
        <tspan x="60" dy="54">a medida se estiman según el alcance</tspan>
        <tspan x="60" dy="54">definido en la fase inicial.</tspan>
      </text>
      <g transform="translate(60, 520)">
        <rect x="0" y="0" width="720" height="80" rx="16" fill="#111111" stroke="#39FF14" stroke-width="2" />
        <text x="40" y="48" class="story-font" font-weight="800" font-size="28" fill="#39FF14">2 A 4 SEMANAS</text>
        <text x="680" y="48" text-anchor="end" class="story-font" font-weight="600" font-size="22" fill="#888888">Desarrollo Estándar</text>
      </g>
    </g>
  </g>
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; PREGUNTAS FRECUENTES</text>
  </g>
</svg>`
    },
    soporte: {
      title: 'Soporte y mantenimiento',
      desc: 'Planes post-lanzamiento, monitoreo 24/7 y seguridad.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid-faq-s" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>
  <rect width="1080" height="1920" fill="#000000" />
  <rect width="1080" height="1920" fill="url(#grid-faq-s)" opacity="0.6" />
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(120, 460)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">05 — PREGUNTAS FRECUENTES</text>
    <text y="100" class="story-font" font-weight="800" font-size="54" letter-spacing="-1" fill="#FFFFFF" xml:space="preserve">
      <tspan x="0" dy="0">¿Ofrecen soporte y</tspan>
      <tspan x="0" dy="68">mantenimiento continuo?</tspan>
    </text>
    <g transform="translate(0, 240)">
      <rect x="0" y="0" width="840" height="660" rx="24" fill="#0A0A0A" stroke="#171717" stroke-width="3" />
      <circle cx="60" cy="60" r="16" fill="#39FF14" />
      <text x="96" y="68" class="story-font" font-weight="700" font-size="22" fill="#39FF14" letter-spacing="2">SOPORTE POST-LANZAMIENTO</text>
      <text x="60" y="160" class="story-font" font-weight="400" font-size="32" fill="#D4D4D4" xml:space="preserve">
        <tspan x="60" dy="0">Sí. Ofrecemos planes de soporte</tspan>
        <tspan x="60" dy="54">continuo, monitoreo de disponibilidad,</tspan>
        <tspan x="60" dy="54">actualizaciones de seguridad y</tspan>
        <tspan x="60" dy="54">optimización constante tras el</tspan>
        <tspan x="60" dy="54">lanzamiento oficial de tu producto.</tspan>
      </text>
      <g transform="translate(60, 480)">
        <rect x="0" y="0" width="340" height="60" rx="12" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="170" y="38" text-anchor="middle" class="story-font" font-weight="700" font-size="20" fill="#FFFFFF">Monitoreo 24/7</text>
        <rect x="360" y="0" width="360" height="60" rx="12" fill="#141414" stroke="#262626" stroke-width="2" />
        <text x="540" y="38" text-anchor="middle" class="story-font" font-weight="700" font-size="20" fill="#FFFFFF">Seguridad &amp; Updates</text>
        <rect x="0" y="75" width="720" height="60" rx="12" fill="#0D1F0D" stroke="#39FF14" stroke-width="2" />
        <text x="360" y="113" text-anchor="middle" class="story-font" font-weight="700" font-size="20" fill="#39FF14">Optimización &amp; Evolución Continua</text>
      </g>
    </g>
  </g>
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; PREGUNTAS FRECUENTES</text>
  </g>
</svg>`
    },
    cierre: {
      title: 'Cierre',
      desc: 'Invitación a resolver consultas personalizadas.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid-faq-c" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>
  <rect width="1080" height="1920" fill="#000000" />
  <rect width="1080" height="1920" fill="url(#grid-faq-c)" opacity="0.6" />
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(120, 460)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">06 — PREGUNTAS FRECUENTES</text>
    <text y="100" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">¿Tenés otra consulta?</text>
  </g>
  <g transform="translate(120, 700)">
    <text class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Cada proyecto es único. Escribinos para</tspan>
      <tspan x="0" dy="50">analizar tu idea en detalle y responder</tspan>
      <tspan x="0" dy="50">todas tus inquietudes.</tspan>
    </text>
  </g>
  <g transform="translate(180, 960)">
    <rect x="0" y="0" width="720" height="340" rx="20" fill="#050505" stroke="#171717" stroke-width="3" />
    <rect x="170" y="40" width="380" height="52" rx="26" fill="#0F0F0F" stroke="#39FF14" stroke-width="2" />
    <circle cx="205" cy="66" r="8" fill="#39FF14" />
    <text x="385" y="73" class="story-font" font-weight="700" font-size="18" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">ASESORAMIENTO DIRECTO</text>
    <text x="360" y="150" class="story-font" font-weight="800" font-size="36" fill="#FFFFFF" text-anchor="middle">¿Conversamos?</text>
    <text x="360" y="195" class="story-font" font-weight="500" font-size="24" fill="#555555" text-anchor="middle">Despejá tus dudas con nuestro equipo</text>
    <g transform="translate(140, 230)">
      <rect x="0" y="0" width="440" height="72" rx="36" fill="#39FF14" />
      <text x="220" y="44" class="story-font" font-weight="800" font-size="22" fill="#000000" text-anchor="middle" letter-spacing="2">ENVIAR MENSAJE →</text>
    </g>
  </g>
  <g transform="translate(120, 1460)">
    <line x1="0" y1="0" x2="840" y2="0" stroke="#171717" stroke-width="2" />
    <text y="50" class="story-font" font-weight="400" font-size="28" fill="#555555">Visita nuestro portal oficial</text>
    <text x="840" y="50" class="story-font" font-weight="700" font-size="28" fill="#39FF14" text-anchor="end">90plusstudio.com.ar</text>
  </g>
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; PREGUNTAS FRECUENTES</text>
  </g>
</svg>`
    }
  },
  contacto: {
    portada: {
      title: 'Portada',
      desc: 'Portada oficial de la sección de Contacto.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap');
      .story-font { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
    </style>
  </defs>
  <rect width="1080" height="1920" fill="#0A0A0A"/>
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="76" fill="#FFFFFF">Contacto<tspan fill="#39FF14">.</tspan></text>
    <text y="120" class="story-font" font-weight="400" font-size="32" fill="#FFFFFF" xml:space="preserve">
      <tspan x="0" dy="0">¿Tenés una idea o un proyecto?</tspan>
      <tspan x="0" dy="54">Nos encantaría conocerlo y ayudarte</tspan>
      <tspan x="0" dy="48">a hacerlo realidad.</tspan>
    </text>
  </g>
  <g transform="translate(540, 1720)">
    <text text-anchor="middle" class="story-font" font-weight="600" font-size="24" letter-spacing="6" fill="#FFFFFF">ESCRIBINOS Y CONVERSEMOS <tspan fill="#39FF14">→</tspan></text>
  </g>
</svg>`
    },
    canales: {
      title: 'Canales directos',
      desc: 'Contactos directos vía Web, Instagram y WhatsApp de Luciano y Facundo.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid-ct-c" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>
  <rect width="1080" height="1920" fill="#000000" />
  <rect width="1080" height="1920" fill="url(#grid-ct-c)" opacity="0.6" />
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(120, 420)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">01 — CANALES DIRECTOS</text>
    <text y="90" class="story-font" font-weight="800" font-size="54" letter-spacing="-1" fill="#FFFFFF">Hablemos directamente<tspan fill="#39FF14">.</tspan></text>
    <g transform="translate(0, 150)">
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="840" height="120" rx="20" fill="#0A0A0A" stroke="#171717" stroke-width="2" />
        <circle cx="60" cy="60" r="22" fill="#141414" stroke="#333" stroke-width="2" />
        <rect x="48" y="50" width="24" height="18" rx="3" fill="none" stroke="#39FF14" stroke-width="2" />
        <path d="M 48 52 L 60 62 L 72 52" fill="none" stroke="#39FF14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <text x="105" y="46" class="story-font" font-weight="600" font-size="16" fill="#888888" letter-spacing="2">CORREO ELECTRÓNICO</text>
        <text x="105" y="84" class="story-font" font-weight="800" font-size="28" fill="#FFFFFF">team90plusstudio@gmail.com</text>
      </g>
      <g transform="translate(0, 140)">
        <rect x="0" y="0" width="840" height="120" rx="20" fill="#0A0A0A" stroke="#171717" stroke-width="2" />
        <circle cx="60" cy="60" r="22" fill="#141414" stroke="#333" stroke-width="2" />
        <circle cx="60" cy="60" r="11" fill="none" stroke="#39FF14" stroke-width="2.5" />
        <ellipse cx="60" cy="60" rx="4.5" ry="11" fill="none" stroke="#39FF14" stroke-width="2" />
        <line x1="49" y1="60" x2="71" y2="60" stroke="#39FF14" stroke-width="2" />
        <text x="105" y="46" class="story-font" font-weight="600" font-size="16" fill="#888888" letter-spacing="2">PÁGINA WEB OFICIAL</text>
        <text x="105" y="84" class="story-font" font-weight="800" font-size="28" fill="#FFFFFF">90plusstudio.com.ar</text>
      </g>
      <g transform="translate(0, 280)">
        <rect x="0" y="0" width="840" height="120" rx="20" fill="#0A0A0A" stroke="#171717" stroke-width="2" />
        <circle cx="60" cy="60" r="22" fill="#141414" stroke="#333" stroke-width="2" />
        <rect x="48" y="48" width="24" height="24" rx="6" fill="none" stroke="#39FF14" stroke-width="2.5" />
        <circle cx="60" cy="60" r="5.5" fill="none" stroke="#39FF14" stroke-width="2" />
        <circle cx="66" cy="54" r="1.5" fill="#39FF14" />
        <text x="105" y="46" class="story-font" font-weight="600" font-size="16" fill="#888888" letter-spacing="2">INSTAGRAM</text>
        <text x="105" y="84" class="story-font" font-weight="800" font-size="28" fill="#FFFFFF">@90plusstudio_</text>
      </g>
      <g transform="translate(0, 420)">
        <rect x="0" y="0" width="840" height="350" rx="24" fill="#0A0A0A" stroke="#1D381D" stroke-width="3" />
        <rect x="45" y="30" width="290" height="42" rx="21" fill="#112911" stroke="#39FF14" stroke-width="1.5" />
        <circle cx="68" cy="51" r="5" fill="#39FF14" />
        <text x="86" y="57" class="story-font" font-weight="800" font-size="16" fill="#39FF14" letter-spacing="2">WHATSAPP DIRECTO</text>
        <g transform="translate(45, 95)">
          <rect x="0" y="0" width="750" height="95" rx="16" fill="#111111" stroke="#222" stroke-width="2" />
          <circle cx="45" cy="47.5" r="20" fill="#191919" />
          <text x="45" y="54.5" text-anchor="middle" class="story-font" font-weight="800" font-size="18" fill="#39FF14">L</text>
          <text x="85" y="40" class="story-font" font-weight="700" font-size="20" fill="#FFFFFF">Luciano</text>
          <text x="85" y="68" class="story-font" font-weight="500" font-size="22" fill="#888888">+54 9 264 565-0131</text>
        </g>
        <g transform="translate(45, 210)">
          <rect x="0" y="0" width="750" height="95" rx="16" fill="#111111" stroke="#222" stroke-width="2" />
          <circle cx="45" cy="47.5" r="20" fill="#191919" />
          <text x="45" y="54.5" text-anchor="middle" class="story-font" font-weight="800" font-size="20" fill="#39FF14">F</text>
          <text x="85" y="40" class="story-font" font-weight="700" font-size="20" fill="#FFFFFF">Facundo</text>
          <text x="85" y="68" class="story-font" font-weight="500" font-size="22" fill="#888888">+54 9 264 561-4261</text>
        </g>
      </g>
    </g>
  </g>
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; CANALES DE CONTACTO</text>
  </g>
</svg>`
    },
    cierre: {
      title: 'Iniciar proyecto',
      desc: 'Llamado a la acción final para agendar reunión o consulta.',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&amp;display=swap');
      .story-font { font-family: 'Geist', sans-serif; }
    </style>
    <pattern id="grid-ct-ci" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#171717" stroke-width="1.5" />
    </pattern>
  </defs>
  <rect width="1080" height="1920" fill="#000000" />
  <rect width="1080" height="1920" fill="url(#grid-ct-ci)" opacity="0.6" />
  <rect x="60" y="60" width="960" height="1800" fill="none" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="360" x2="1020" y2="360" stroke="#171717" stroke-width="2" />
  <line x1="60" y1="1560" x2="1020" y2="1560" stroke="#171717" stroke-width="2" />
  <g transform="translate(540, 180)">
    <text text-anchor="middle" class="story-font" font-weight="800" font-size="28" letter-spacing="12" fill="#FFFFFF">90<tspan fill="#39FF14">+</tspan> STUDIO</text>
  </g>
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="34" letter-spacing="4" fill="#39FF14">02 — INICIEMOS UN PROYECTO</text>
    <text y="100" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">Transformemos tu idea</text>
    <text y="180" class="story-font" font-weight="800" font-size="64" letter-spacing="-2" fill="#FFFFFF">en software real:</text>
  </g>
  <g transform="translate(120, 780)">
    <text class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Ponete en contacto con nuestro equipo</tspan>
      <tspan x="0" dy="50">y agendemos una reunión inicial para</tspan>
      <tspan x="0" dy="50">definir tu estrategia digital.</tspan>
    </text>
  </g>
  <g transform="translate(180, 1020)">
    <rect x="0" y="0" width="720" height="340" rx="20" fill="#050505" stroke="#171717" stroke-width="3" />
    <rect x="220" y="40" width="280" height="48" rx="24" fill="#0F0F0F" stroke="#39FF14" stroke-width="2" />
    <circle cx="255" cy="64" r="8" fill="#39FF14" />
    <text x="380" y="71" class="story-font" font-weight="700" font-size="18" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">AGENDA ABIERTA</text>
    <text x="360" y="150" class="story-font" font-weight="800" font-size="34" fill="#FFFFFF" text-anchor="middle">90plusstudio.com.ar</text>
    <text x="360" y="195" class="story-font" font-weight="500" font-size="22" fill="#555555" text-anchor="middle">Escribinos por WhatsApp o correo</text>
    <g transform="translate(140, 230)">
      <rect x="0" y="0" width="440" height="72" rx="36" fill="#39FF14" />
      <text x="220" y="44" class="story-font" font-weight="800" font-size="22" fill="#000000" text-anchor="middle" letter-spacing="2">HABLAR POR WHATSAPP →</text>
    </g>
  </g>
  <g transform="translate(540, 1790)">
    <text text-anchor="middle" class="story-font" font-weight="700" font-size="18" fill="#555555" letter-spacing="4">90+ STUDIO &bull; CONTACTO DIRECTO</text>
  </g>
</svg>`
    }
  }
};

// 9. INSTAGRAM STORIES CONTROLLER
let activePackKey = 'identity';
let activeStoryKey = 'servicios';

function updateStoryRender() {
  const container = document.getElementById('story-render-box');
  const titleEl = document.getElementById('story-meta-title');
  const descEl = document.getElementById('story-meta-desc');
  if (!container || !titleEl || !descEl) return;
  
  const data = storiesDatabase[activePackKey][activeStoryKey];
  container.innerHTML = data.svg;
  titleEl.textContent = data.title;
  descEl.textContent = data.desc;

  // Precomputar descargas de forma asíncrona preventiva para evitar bloqueos del navegador en clicks
  const btnSvg = document.getElementById('btn-download-story-svg');
  const btnPng = document.getElementById('btn-download-story-png');
  
  if (btnSvg) {
    const cleanSvg = data.svg.replace(/&bull;/g, '•');
    const svgBlob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
    const oldUrl = btnSvg.getAttribute('href');
    if (oldUrl && oldUrl.startsWith('blob:')) {
      URL.revokeObjectURL(oldUrl);
    }
    btnSvg.href = URL.createObjectURL(svgBlob);
    btnSvg.download = `90plus_story_${activePackKey}_${activeStoryKey}.svg`;
  }
  
  if (btnPng) {
    btnPng.style.opacity = '0.5';
    btnPng.style.pointerEvents = 'none';
    
    const canvas = document.getElementById('export-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const width = 1080;
      const height = 1920;
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      
      const cleanSvg = data.svg.replace(/@import\s+url\([^)]+\);/g, '').replace(/&bull;/g, '•');
      const img = new Image();
      const svgBase64 = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(cleanSvg)));
      
      img.onload = function() {
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(function(pngBlob) {
          if (pngBlob) {
            const oldUrl = btnPng.getAttribute('href');
            if (oldUrl && oldUrl.startsWith('blob:')) {
              URL.revokeObjectURL(oldUrl);
            }
            btnPng.href = URL.createObjectURL(pngBlob);
            btnPng.download = `90plus_story_${activePackKey}_${activeStoryKey}_hd.png`;
          }
          btnPng.style.opacity = '1';
          btnPng.style.pointerEvents = 'auto';
        }, 'image/png');
      };
      img.onerror = function() {
        btnPng.style.opacity = '1';
        btnPng.style.pointerEvents = 'auto';
      };
      img.src = svgBase64;
    } else {
      btnPng.style.opacity = '1';
      btnPng.style.pointerEvents = 'auto';
    }
  }
}

function renderStoryTabs() {
  const container = document.getElementById('story-tabs-container');
  if (!container) return;
  
  container.innerHTML = '';
  const packStories = storiesDatabase[activePackKey];
  
  let isFirst = true;
  Object.keys(packStories).forEach((key, index) => {
    const data = packStories[key];
    const button = document.createElement('button');
    button.className = `story-tab${isFirst ? ' active' : ''}`;
    button.dataset.story = key;
    
    const num = String(index).padStart(2, '0');
    button.innerHTML = `
      <span class="tab-num">${num}</span>
      <span class="tab-name">${data.title}</span>
    `;
    
    if (isFirst) {
      activeStoryKey = key;
      isFirst = false;
    }
    
    button.addEventListener('click', () => {
      document.querySelectorAll('.story-tab').forEach(t => t.classList.remove('active'));
      button.classList.add('active');
      activeStoryKey = key;
      updateStoryRender();
    });
    
    container.appendChild(button);
  });
  
  updateStoryRender();
}

function initInstagramStories() {
  const packTabs = document.querySelectorAll('.pack-tab');
  
  // Set initial tabs rendering
  renderStoryTabs();
  
  // Pack Switching
  if (packTabs.length) {
    packTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        packTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activePackKey = tab.dataset.pack;
        renderStoryTabs();
      });
    });
  }
}

// 9. INSTAGRAM FEED POSTS ENGINE (4:5 / 1080x1350)
const feedDatabase = {
  renderizado_js: {
    s1: {
      title: "01: El Gancho",
      desc: "Portada estratégica de alto impacto técnico e invisibilidad web.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800;900&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .f-bg { fill: #0A0A0A; }
      .f-badge { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 700; fill: #39FF14; letter-spacing: 4px; text-transform: uppercase; }
      .f-title { font-family: 'Geist', sans-serif; font-size: 68px; font-weight: 800; fill: #FFFFFF; line-height: 1.15; }
      .f-accent { fill: #39FF14; }
      .f-body { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 26px; font-weight: 400; fill: #A1A1AA; line-height: 1.5; }
      .f-tag { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 600; fill: #71717A; letter-spacing: 2px; }
      .f-brand { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 700; fill: #FFFFFF; letter-spacing: 6px; }
    </style>
  </defs>
  <rect width="1080" height="1350" class="f-bg" />
  
  <!-- Grid background -->
  <path d="M 0 150 L 1080 150 M 0 300 L 1080 300 M 0 450 L 1080 450 M 0 600 L 1080 600 M 0 750 L 1080 750 M 0 900 L 1080 900 M 0 1050 L 1080 1050 M 0 1200 L 1080 1200" stroke="#141416" stroke-width="1.5" />
  <path d="M 150 0 L 150 1350 M 300 0 L 300 1350 M 450 0 L 450 1350 M 600 0 L 600 1350 M 750 0 L 750 1350 M 900 0 L 900 1350" stroke="#141416" stroke-width="1.5" />
  
  <!-- Header (Safe Top Margin: 100px) -->
  <text x="90" y="110" class="f-brand">90+ <tspan fill="#39FF14">STUDIO</tspan></text>
  <text x="990" y="110" class="f-tag" text-anchor="end">SEO TÉCNICO • 01/08</text>
  
  <!-- Graphic Element Box -->
  <g transform="translate(90, 180)">
    <rect width="900" height="380" rx="20" fill="#121215" stroke="#27272A" stroke-width="2.5" />
    <circle cx="45" cy="40" r="7" fill="#FF5F56" />
    <circle cx="70" cy="40" r="7" fill="#FFBD2E" />
    <circle cx="95" cy="40" r="7" fill="#27C93F" />
    <text x="855" y="46" fill="#52525B" font-family="'Geist', sans-serif" font-size="16" text-anchor="end">googlebot-crawler.js</text>
    <line x1="0" y1="70" x2="900" y2="70" stroke="#27272A" stroke-width="2" />
    
    <text x="45" y="130" fill="#27C93F" font-family="monospace" font-size="26">HTTP/1.1 200 OK</text>
    <text x="45" y="185" fill="#71717A" font-family="monospace" font-size="22">&lt;div id="app"&gt;&lt;/div&gt; <tspan fill="#F59E0B">&lt;!-- &lt; 1KB Raw HTML --&gt;</tspan></text>
    <text x="45" y="240" fill="#EF4444" font-family="monospace" font-size="22">&lt;script src="bundle.js"&gt;&lt;/script&gt; <tspan fill="#EF4444">[JS Execution Timeout]</tspan></text>
    
    <rect x="45" y="285" width="810" height="55" rx="10" fill="#2D0607" stroke="#EF4444" stroke-width="1.5" />
    <text x="70" y="320" fill="#FCA5A5" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="600">⚠️ Estado: Tu contenido es INVISIBLE para el buscador.</text>
  </g>
  
  <!-- Main Typography -->
  <g transform="translate(90, 630)">
    <text class="f-badge" x="0" y="0">El error silencioso de $10,000</text>
    <text class="f-title" x="0" y="80">Tu web es <tspan class="f-accent">hermosa</tspan>,</text>
    <text class="f-title" x="0" y="160">pero Google la ve</text>
    <text class="f-title" x="0" y="240">totalmente <tspan fill="#EF4444">en blanco.</tspan></text>
    
    <text class="f-body" x="0" y="320">
      <tspan x="0" dy="0">El mito del renderizado de JavaScript que arruina</tspan>
      <tspan x="0" dy="38">el SEO de cientos de empresas sin que sus dueños lo sepan.</tspan>
    </text>
  </g>

  <!-- Footer (Safe Bottom Margin: 1250px) -->
  <g transform="translate(90, 1250)">
    <text x="0" y="0" class="f-tag">Desliza para entender qué pasa →</text>
  </g>
</svg>`
    },
    s2: {
      title: "02: El Problema",
      desc: "El mito del diseño visual vs. cómo navegan las arañas de búsqueda.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .f-bg { fill: #0A0A0A; }
      .f-title { font-family: 'Geist', sans-serif; font-size: 54px; font-weight: 800; fill: #FFFFFF; line-height: 1.2; }
      .f-accent { fill: #39FF14; }
      .f-body { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 25px; font-weight: 400; fill: #D4D4D8; line-height: 1.6; }
      .f-tag { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 600; fill: #71717A; letter-spacing: 2px; }
      .f-brand { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 700; fill: #FFFFFF; letter-spacing: 6px; }
    </style>
  </defs>
  <rect width="1080" height="1350" class="f-bg" />
  <text x="90" y="110" class="f-brand">90+ <tspan fill="#39FF14">STUDIO</tspan></text>
  <text x="990" y="110" class="f-tag" text-anchor="end">02/08</text>

  <g transform="translate(90, 190)">
    <text class="f-title" x="0" y="0">El Mito: "Si yo la veo en mi</text>
    <text class="f-title" x="0" y="65">pantalla, <tspan class="f-accent">Google también."</tspan></text>
  </g>

  <g transform="translate(90, 340)">
    <rect x="0" y="0" width="430" height="500" rx="20" fill="#121215" stroke="#27272A" stroke-width="2" />
    <text x="30" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700" fill="#39FF14">Lo que ves TÚ (Navegador)</text>
    <rect x="30" y="85" width="370" height="175" rx="12" fill="#1E1E24" />
    <text x="50" y="145" font-family="'Geist', sans-serif" font-size="30" font-weight="800" fill="#FFFFFF">Sitio Web Premium</text>
    <text x="50" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#A1A1AA">
      <tspan x="50" dy="0">Diseño interactivo, animaciones</tspan>
      <tspan x="50" dy="24">y catálogo activo.</tspan>
    </text>
    <rect x="30" y="290" width="370" height="175" rx="12" fill="#052E16" stroke="#39FF14" stroke-width="1.5" />
    <text x="50" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700" fill="#39FF14">✓ 100% Funcional</text>
    <text x="50" y="380" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#A1A1AA">
      <tspan x="50" dy="0">El usuario interactúa sin notar</tspan>
      <tspan x="50" dy="24">problemas aparentes.</tspan>
    </text>

    <rect x="470" y="0" width="430" height="500" rx="20" fill="#121215" stroke="#EF4444" stroke-width="2" />
    <text x="500" y="50" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700" fill="#EF4444">Lo que lee GOOGLEBOT</text>
    <rect x="500" y="85" width="370" height="175" rx="12" fill="#18181B" />
    <text x="520" y="145" font-family="monospace" font-size="20" fill="#EF4444">&lt;div id="root"&gt;&lt;/div&gt;</text>
    <text x="520" y="185" font-family="monospace" font-size="16" fill="#71717A">&lt;!-- Sin HTML semántico --&gt;</text>
    <rect x="500" y="290" width="370" height="175" rx="12" fill="#450A0A" stroke="#EF4444" stroke-width="1.5" />
    <text x="520" y="340" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700" fill="#FCA5A5">✗ Página Vacía</text>
    <text x="520" y="380" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#FCA5A5">
      <tspan x="520" dy="0">La araña indexa un cascarón</tspan>
      <tspan x="520" dy="24">sin texto ni enlaces.</tspan>
    </text>
  </g>

  <g transform="translate(90, 900)">
    <text class="f-body" x="0" y="0">
      <tspan x="0" dy="0">Muchas plantillas web modernas de bajo costo están construidas</tspan>
      <tspan x="0" dy="38">como <tspan font-weight="700" fill="#FFFFFF">Single Page Applications (SPA)</tspan> 100% dinámicas.</tspan>
      <tspan x="0" dy="76">Todo el contenido depende de que un script se ejecute en el cliente.</tspan>
      <tspan x="0" dy="114">Si el robot pasa antes de ejecutarlo, para Google tu negocio no existe.</tspan>
    </text>
  </g>

  <g transform="translate(90, 1250)">
    <text x="0" y="0" class="f-tag">Desliza para continuar →</text>
  </g>
</svg>`
    },
    s3: {
      title: "03: ¿Por qué ocurre?",
      desc: "Explicación técnica simplificada: El proceso de 2 fases de Googlebot.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .f-bg { fill: #0A0A0A; }
      .f-title { font-family: 'Geist', sans-serif; font-size: 52px; font-weight: 800; fill: #FFFFFF; line-height: 1.2; }
      .f-accent { fill: #39FF14; }
      .f-body { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 25px; font-weight: 400; fill: #D4D4D8; line-height: 1.6; }
      .f-tag { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 600; fill: #71717A; letter-spacing: 2px; }
      .f-brand { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 700; fill: #FFFFFF; letter-spacing: 6px; }
    </style>
  </defs>
  <rect width="1080" height="1350" class="f-bg" />
  <text x="90" y="110" class="f-brand">90+ <tspan fill="#39FF14">STUDIO</tspan></text>
  <text x="990" y="110" class="f-tag" text-anchor="end">03/08</text>

  <g transform="translate(90, 190)">
    <text class="f-title" x="0" y="0">¿Por qué ocurre este desastre?</text>
    <text class="f-title" x="0" y="65">Google indexa en <tspan class="f-accent">2 FASES separadas.</tspan></text>
  </g>

  <g transform="translate(90, 340)">
    <rect x="0" y="0" width="900" height="230" rx="20" fill="#121215" stroke="#27272A" stroke-width="2" />
    <rect x="30" y="25" width="160" height="36" rx="8" fill="#39FF14" />
    <text x="110" y="49" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#000000" text-anchor="middle">FASE 1: RÁPIDA</text>
    <text x="210" y="51" font-family="'Geist', sans-serif" font-size="26" font-weight="700" fill="#FFFFFF">Descarga del HTML Raw (Inmediato)</text>
    <text x="30" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" fill="#A1A1AA">
      <tspan x="30" dy="0">Google lee el código puro de inmediato. Si tu sitio entrega un HTML vacío</tspan>
      <tspan x="30" dy="30">(dependiente de JS), indexa una página sin palabras ni valor de búsqueda.</tspan>
    </text>
    <text x="30" y="185" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="600" fill="#EF4444">⚠️ Tiempo de espera: 0 segundos.</text>

    <rect x="0" y="260" width="900" height="250" rx="20" fill="#121215" stroke="#F59E0B" stroke-width="2" />
    <rect x="30" y="285" width="180" height="36" rx="8" fill="#F59E0B" />
    <text x="120" y="309" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#000000" text-anchor="middle">FASE 2: DIFERIDA</text>
    <text x="230" y="311" font-family="'Geist', sans-serif" font-size="26" font-weight="700" fill="#FFFFFF">Renderizado de JavaScript (WRS)</text>
    <text x="30" y="365" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" fill="#A1A1AA">
      <tspan x="30" dy="0">Ejecutar JS consume gigavatios de cómputo para Google. Por eso, coloca</tspan>
      <tspan x="30" dy="30">tu web en una cola de espera que puede tardar días o semanas.</tspan>
    </text>
    <text x="30" y="450" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="600" fill="#F59E0B">⏳ Demora: De 3 días hasta 3 semanas (o nunca si agotas presupuesto).</text>
  </g>

  <g transform="translate(90, 910)">
    <text class="f-body" x="0" y="0">
      <tspan x="0" dy="0">Resultado: Durante semanas, Google posiciona a tus competidores</tspan>
      <tspan x="0" dy="38">mientras tu página espera su turno de renderizado.</tspan>
    </text>
  </g>

  <g transform="translate(90, 1250)">
    <text x="0" y="0" class="f-tag">Desliza para continuar →</text>
  </g>
</svg>`
    },
    s4: {
      title: "04: Consecuencias Reales",
      desc: "El impacto en dólares y posicionamiento para el negocio.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .f-bg { fill: #0A0A0A; }
      .f-title { font-family: 'Geist', sans-serif; font-size: 52px; font-weight: 800; fill: #FFFFFF; line-height: 1.2; }
      .f-accent { fill: #EF4444; }
      .f-body { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 25px; font-weight: 400; fill: #D4D4D8; line-height: 1.6; }
      .f-tag { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 600; fill: #71717A; letter-spacing: 2px; }
      .f-brand { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 700; fill: #FFFFFF; letter-spacing: 6px; }
    </style>
  </defs>
  <rect width="1080" height="1350" class="f-bg" />
  <text x="90" y="110" class="f-brand">90+ <tspan fill="#39FF14">STUDIO</tspan></text>
  <text x="990" y="110" class="f-tag" text-anchor="end">04/08</text>

  <g transform="translate(90, 190)">
    <text class="f-title" x="0" y="0">Las Consecuencias Reales</text>
    <text class="f-title" x="0" y="65">para la <tspan class="f-accent">facturación de tu empresa:</tspan></text>
  </g>

  <g transform="translate(90, 340)">
    <rect x="0" y="0" width="900" height="150" rx="16" fill="#121215" stroke="#27272A" stroke-width="2" />
    <text x="35" y="48" font-family="'Geist', sans-serif" font-size="24" font-weight="700" fill="#EF4444">1. Desperdicio del Crawl Budget</text>
    <text x="35" y="92" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" fill="#A1A1AA">
      <tspan x="35" dy="0">Googlebot asigna un tiempo limitado. Si consume ese tiempo procesando</tspan>
      <tspan x="35" dy="28">scripts pesados, abandona el sitio sin indexar tus productos.</tspan>
    </text>

    <rect x="0" y="175" width="900" height="150" rx="16" fill="#121215" stroke="#27272A" stroke-width="2" />
    <text x="35" y="223" font-family="'Geist', sans-serif" font-size="24" font-weight="700" fill="#EF4444">2. Páginas Huérfanas Invisibles</text>
    <text x="35" y="267" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" fill="#A1A1AA">
      <tspan x="35" dy="0">Los enlaces dinámicos por JS no se descubren a tiempo. Tus nuevos</tspan>
      <tspan x="35" dy="28">artículos o servicios quedan completamente en el olvido.</tspan>
    </text>

    <rect x="0" y="350" width="900" height="150" rx="16" fill="#121215" stroke="#27272A" stroke-width="2" />
    <text x="35" y="398" font-family="'Geist', sans-serif" font-size="24" font-weight="700" fill="#EF4444">3. Quema de Presupuesto en Ads</text>
    <text x="35" y="442" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" fill="#A1A1AA">
      <tspan x="35" dy="0">Dependes exclusivamente de tráfico pagado porque tu tráfico orgánico</tspan>
      <tspan x="35" dy="28">es prácticamente nulo.</tspan>
    </text>
  </g>

  <g transform="translate(90, 910)">
    <rect x="0" y="0" width="900" height="140" rx="16" fill="#2A080C" stroke="#EF4444" stroke-width="1.5" />
    <text x="35" y="45" font-family="'Geist', sans-serif" font-size="20" font-weight="700" fill="#FCA5A5">DATO TÉCNICO COMPROBADO:</text>
    <text x="35" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#FCA5A5">
      <tspan x="35" dy="0">El 40% del contenido basado puramente en JS tarda más de 20 días en ser</tspan>
      <tspan x="35" dy="26">procesado por el crawler de Google en sitios sin autoridad masiva.</tspan>
    </text>
  </g>

  <g transform="translate(90, 1250)">
    <text x="0" y="0" class="f-tag">Desliza para ver la solución →</text>
  </g>
</svg>`
    },
    s5: {
      title: "05: La Solución Técnica",
      desc: "Server-Side Rendering (SSR) y Static Site Generation (SSG).",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .f-bg { fill: #0A0A0A; }
      .f-title { font-family: 'Geist', sans-serif; font-size: 52px; font-weight: 800; fill: #FFFFFF; line-height: 1.2; }
      .f-accent { fill: #39FF14; }
      .f-body { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 25px; font-weight: 400; fill: #D4D4D8; line-height: 1.6; }
      .f-tag { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 600; fill: #71717A; letter-spacing: 2px; }
      .f-brand { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 700; fill: #FFFFFF; letter-spacing: 6px; }
    </style>
  </defs>
  <rect width="1080" height="1350" class="f-bg" />
  <text x="90" y="110" class="f-brand">90+ <tspan fill="#39FF14">STUDIO</tspan></text>
  <text x="990" y="110" class="f-tag" text-anchor="end">05/08</text>

  <g transform="translate(90, 190)">
    <text class="f-title" x="0" y="0">La Solución Profesional:</text>
    <text class="f-title" x="0" y="65"><tspan class="f-accent">SSR</tspan> &amp; <tspan class="f-accent">Hidratación Progresiva.</tspan></text>
  </g>

  <g transform="translate(90, 340)">
    <rect x="0" y="0" width="900" height="500" rx="20" fill="#121215" stroke="#39FF14" stroke-width="2" />
    <text x="35" y="55" font-family="'Geist', sans-serif" font-size="26" font-weight="700" fill="#39FF14">Servidor / CDN (90+ Studio Architecture)</text>
    
    <rect x="35" y="90" width="830" height="105" rx="12" fill="#1E1E24" />
    <text x="60" y="130" font-family="'Geist', sans-serif" font-size="22" font-weight="700" fill="#FFFFFF">1. Pre-renderizado en Servidor (SSR/SSG)</text>
    <text x="60" y="162" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#A1A1AA">Entregamos el HTML 100% completo e indexable en menos de 50 milisegundos.</text>
    
    <rect x="35" y="215" width="830" height="105" rx="12" fill="#1E1E24" />
    <text x="60" y="255" font-family="'Geist', sans-serif" font-size="22" font-weight="700" fill="#FFFFFF">2. Googlebot lee el HTML completo al instante</text>
    <text x="60" y="287" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#39FF14">✓ Indexación inmediata en Fase 1 sin esperar render diferido.</text>
    
    <rect x="35" y="340" width="830" height="120" rx="12" fill="#052E16" stroke="#39FF14" stroke-width="1" />
    <text x="60" y="380" font-family="'Geist', sans-serif" font-size="22" font-weight="700" fill="#39FF14">3. Hidratación en el Navegador</text>
    <text x="60" y="412" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" fill="#D4D4D8">El JavaScript se carga después en segundo plano para dar interactividad fluida.</text>
  </g>

  <g transform="translate(90, 910)">
    <text class="f-body" x="0" y="0">
      <tspan x="0" dy="0">Esto es exactamente la diferencia entre una plantilla comercial barata</tspan>
      <tspan x="0" dy="38">y una <tspan font-weight="700" fill="#FFFFFF">arquitectura de software a medida</tspan> optimizada para SEO.</tspan>
    </text>
  </g>

  <g transform="translate(90, 1250)">
    <text x="0" y="0" class="f-tag">Desliza para la comparación →</text>
  </g>
</svg>`
    },
    s6: {
      title: "06: Plantilla vs. Arquitectura",
      desc: "Por qué una web profesional vale más que una plantilla barata.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .f-bg { fill: #0A0A0A; }
      .f-title { font-family: 'Geist', sans-serif; font-size: 52px; font-weight: 800; fill: #FFFFFF; line-height: 1.2; }
      .f-accent { fill: #39FF14; }
      .f-body { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 25px; font-weight: 400; fill: #D4D4D8; line-height: 1.6; }
      .f-tag { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 600; fill: #71717A; letter-spacing: 2px; }
      .f-brand { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 700; fill: #FFFFFF; letter-spacing: 6px; }
    </style>
  </defs>
  <rect width="1080" height="1350" class="f-bg" />
  <text x="90" y="110" class="f-brand">90+ <tspan fill="#39FF14">STUDIO</tspan></text>
  <text x="990" y="110" class="f-tag" text-anchor="end">06/08</text>

  <g transform="translate(90, 190)">
    <text class="f-title" x="0" y="0">Por qué una web profesional</text>
    <text class="f-title" x="0" y="65"><tspan class="f-accent">supera a cualquier plantilla:</tspan></text>
  </g>

  <g transform="translate(90, 340)">
    <rect x="0" y="0" width="430" height="500" rx="20" fill="#121215" stroke="#27272A" stroke-width="2" />
    <text x="30" y="50" font-family="'Geist', sans-serif" font-size="22" font-weight="800" fill="#EF4444">Plantilla Genérica ($100)</text>
    
    <text x="30" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✗ HTML vacío (Client Rendering)</text>
    <text x="30" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✗ 5MB+ de librerías JS inútiles</text>
    <text x="30" y="220" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✗ Dependiente de Fase 2 de bot</text>
    <text x="30" y="275" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✗ Bajo score Core Web Vitals</text>
    <text x="30" y="330" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✗ Sin estructura semántica</text>
    
    <rect x="30" y="390" width="370" height="75" rx="10" fill="#2E0A0E" />
    <text x="45" y="435" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#FCA5A5">Barata hoy, costosa mañana.</text>

    <rect x="470" y="0" width="430" height="500" rx="20" fill="#121215" stroke="#39FF14" stroke-width="2" />
    <text x="500" y="50" font-family="'Geist', sans-serif" font-size="22" font-weight="800" fill="#39FF14">90+ Custom Engineering</text>
    
    <text x="500" y="110" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✓ HTML 100% Pre-renderizado</text>
    <text x="500" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✓ Zero Bloatware / Código Limpio</text>
    <text x="500" y="220" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✓ Indexación inmediata (Fase 1)</text>
    <text x="500" y="275" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✓ Puntajes 90+ en Lighthouse</text>
    <text x="500" y="330" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">✓ Schemas y datos estructurados</text>
    
    <rect x="500" y="390" width="370" height="75" rx="10" fill="#052E16" />
    <text x="515" y="435" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#39FF14">Un activo que genera ROI.</text>
  </g>

  <g transform="translate(90, 910)">
    <text class="f-body" x="0" y="0">
      <tspan x="0" dy="0">Un sitio web no es solo lo que tus ojos ven.</tspan>
      <tspan x="0" dy="38">Es la <tspan font-weight="700" fill="#FFFFFF">infraestructura invisible</tspan> que trabaja 24/7 para atraer clientes.</tspan>
    </text>
  </g>

  <g transform="translate(90, 1250)">
    <text x="0" y="0" class="f-tag">Desliza para el checklist →</text>
  </g>
</svg>`
    },
    s7: {
      title: "07: Conclusión & Checklist",
      desc: "Cómo auditar tu web actual en 3 pasos sencillos.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .f-bg { fill: #0A0A0A; }
      .f-title { font-family: 'Geist', sans-serif; font-size: 52px; font-weight: 800; fill: #FFFFFF; line-height: 1.2; }
      .f-accent { fill: #39FF14; }
      .f-body { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 25px; font-weight: 400; fill: #D4D4D8; line-height: 1.6; }
      .f-tag { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 600; fill: #71717A; letter-spacing: 2px; }
      .f-brand { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 24px; font-weight: 700; fill: #FFFFFF; letter-spacing: 6px; }
    </style>
  </defs>
  <rect width="1080" height="1350" class="f-bg" />
  <text x="90" y="110" class="f-brand">90+ <tspan fill="#39FF14">STUDIO</tspan></text>
  <text x="990" y="110" class="f-tag" text-anchor="end">07/08</text>

  <g transform="translate(90, 190)">
    <text class="f-title" x="0" y="0">Auditá tu sitio web hoy mismo</text>
    <text class="f-title" x="0" y="65">en <tspan class="f-accent">3 simples pasos:</tspan></text>
  </g>

  <g transform="translate(90, 340)">
    <rect x="0" y="0" width="900" height="150" rx="16" fill="#121215" stroke="#27272A" stroke-width="2" />
    <text x="35" y="48" font-family="'Geist', sans-serif" font-size="24" font-weight="700" fill="#39FF14">Paso 1: Desactiva JavaScript en tu navegador</text>
    <text x="35" y="92" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" fill="#A1A1AA">
      <tspan x="35" dy="0">Entra a devtools (F12) y desactiva JS. Recarga la página.</tspan>
      <tspan x="35" dy="28">¿Tu contenido de texto desapareció por completo?</tspan>
    </text>

    <rect x="0" y="175" width="900" height="150" rx="16" fill="#121215" stroke="#27272A" stroke-width="2" />
    <text x="35" y="223" font-family="'Geist', sans-serif" font-size="24" font-weight="700" fill="#39FF14">Paso 2: Usa la Inspección de URLs</text>
    <text x="35" y="267" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" fill="#A1A1AA">
      <tspan x="35" dy="0">En Google Search Console, haz clic en "Ver página probada"</tspan>
      <tspan x="35" dy="28">&gt; "HTML renderizado" y verifica el resultado.</tspan>
    </text>

    <rect x="0" y="350" width="900" height="150" rx="16" fill="#121215" stroke="#27272A" stroke-width="2" />
    <text x="35" y="398" font-family="'Geist', sans-serif" font-size="24" font-weight="700" fill="#39FF14">Paso 3: Verifica la velocidad del servidor (TTFB)</text>
    <text x="35" y="442" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" fill="#A1A1AA">
      <tspan x="35" dy="0">Un TTFB mayor a 600ms indica infraestructura deficiente</tspan>
      <tspan x="35" dy="28">que ahuyenta a los robots de búsqueda.</tspan>
    </text>
  </g>

  <g transform="translate(90, 910)">
    <rect x="0" y="0" width="900" height="140" rx="16" fill="#121215" stroke="#39FF14" stroke-width="1.5" />
    <text x="35" y="45" font-family="'Geist', sans-serif" font-size="20" font-weight="700" fill="#FFFFFF">CONCLUSIÓN CONTUNDENTE:</text>
    <text x="35" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" fill="#D4D4D8">
      <tspan x="35" dy="0">El diseño atrae a las personas, pero el código atrae a Google.</tspan>
      <tspan x="35" dy="26">Sin ambos, tu web es solo un gasto sin retorno.</tspan>
    </text>
  </g>

  <g transform="translate(90, 1250)">
    <text x="0" y="0" class="f-tag">Desliza para el cierre →</text>
  </g>
</svg>`
    },
    s8: {
      title: "08: Cierre y CTA",
      desc: "Llamado a guardar la publicación e interactuar.",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1350" width="100%" height="100%">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800&amp;family=Plus+Jakarta+Sans:wght@500;600;700&amp;display=swap');
      .f-bg { fill: #0A0A0A; }
      .f-title { font-family: 'Geist', sans-serif; font-size: 60px; font-weight: 800; fill: #FFFFFF; line-height: 1.15; }
      .f-accent { fill: #39FF14; }
      .f-body { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 26px; font-weight: 400; fill: #A1A1AA; line-height: 1.6; }
      .f-tag { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 20px; font-weight: 600; fill: #71717A; letter-spacing: 2px; }
      .f-brand { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 28px; font-weight: 700; fill: #FFFFFF; letter-spacing: 6px; }
    </style>
  </defs>
  <rect width="1080" height="1350" class="f-bg" />
  
  <path d="M 0 300 L 1080 300 M 0 600 L 1080 600 M 0 900 L 1080 900" stroke="#141416" stroke-width="1.5" />
  <path d="M 300 0 L 300 1350 M 600 0 L 600 1350 M 900 0 L 900 1350" stroke="#141416" stroke-width="1.5" />

  <text x="90" y="110" class="f-brand">90+ <tspan fill="#39FF14">STUDIO</tspan></text>
  <text x="990" y="110" class="f-tag" text-anchor="end">08/08</text>

  <g transform="translate(90, 210)">
    <text class="f-title" x="0" y="0">¿Tu web aprueba el</text>
    <text class="f-title" x="0" y="75">test del <tspan class="f-accent">HTML invisible?</tspan></text>
    
    <text class="f-body" x="0" y="170">
      <tspan x="0" dy="0">Guarda esta publicación para realizar la prueba en tu negocio</tspan>
      <tspan x="0" dy="38">cuando estés frente a tu computadora.</tspan>
    </text>
  </g>

  <g transform="translate(90, 500)">
    <rect x="0" y="0" width="900" height="320" rx="24" fill="#121215" stroke="#39FF14" stroke-width="2" />
    
    <path d="M 70 50 L 105 50 L 105 105 L 87.5 92 L 70 105 Z" fill="none" stroke="#39FF14" stroke-width="4" stroke-linejoin="round" />
    <text x="135" y="80" font-family="'Geist', sans-serif" font-size="30" font-weight="700" fill="#FFFFFF">Guarda este post</text>
    <text x="135" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" fill="#A1A1AA">
      <tspan x="135" dy="0">Consúltalo cuando audites tu sitio web</tspan>
      <tspan x="135" dy="28">o converses con tu equipo técnico.</tspan>
    </text>
    
    <line x1="40" y1="160" x2="860" y2="160" stroke="#27272A" stroke-width="2" />
    
    <path d="M 70 215 C 70 200 85 188 105 188 C 125 188 140 200 140 215 C 140 230 125 242 105 242 L 85 250 L 90 232 C 78 228 70 222 70 215 Z" fill="none" stroke="#39FF14" stroke-width="4" stroke-linejoin="round" />
    <text x="135" y="215" font-family="'Geist', sans-serif" font-size="30" font-weight="700" fill="#FFFFFF">Comenta "AUDITORÍA"</text>
    <text x="135" y="250" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" fill="#A1A1AA">
      <tspan x="135" dy="0">Si quieres saber si tu web actual sufre</tspan>
      <tspan x="135" dy="28">de renderizado diferido de JS.</tspan>
    </text>
  </g>

  <g transform="translate(90, 940)">
    <text font-family="'Geist', sans-serif" font-size="24" font-style="italic" font-weight="600" fill="#FFFFFF">
      <tspan x="0" dy="0">"La excelencia técnica no se ve a simple vista,</tspan>
      <tspan x="0" dy="36">pero se refleja en los resultados de tu negocio."</tspan>
    </text>
    <text font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="700" fill="#39FF14" x="0" y="90">— 90+ Studio</text>
  </g>
</svg>`
    }
  }
};

let activeFeedPackKey = 'renderizado_js';
let activeFeedSlideKey = 's1';

function updateFeedRender() {
  const container = document.getElementById('feed-render-box');
  const titleEl = document.getElementById('feed-meta-title');
  const descEl = document.getElementById('feed-meta-desc');
  if (!container || !titleEl || !descEl) return;

  const data = feedDatabase[activeFeedPackKey][activeFeedSlideKey];
  container.innerHTML = data.svg;
  titleEl.textContent = data.title;
  descEl.textContent = data.desc;

  const btnSvg = document.getElementById('btn-download-feed-svg');
  const btnPng = document.getElementById('btn-download-feed-png');

  if (btnSvg) {
    const cleanSvg = data.svg;
    const svgBlob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
    const oldUrl = btnSvg.getAttribute('href');
    if (oldUrl && oldUrl.startsWith('blob:')) {
      URL.revokeObjectURL(oldUrl);
    }
    btnSvg.href = URL.createObjectURL(svgBlob);
    btnSvg.download = `90plus_feed_${activeFeedPackKey}_${activeFeedSlideKey}.svg`;
  }

  if (btnPng) {
    btnPng.style.opacity = '0.5';
    btnPng.style.pointerEvents = 'none';

    const canvas = document.getElementById('export-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const width = 1080;
      const height = 1350;
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);

      const cleanSvg = data.svg.replace(/@import\s+url\([^)]+\);/g, '');
      const img = new Image();
      const svgBase64 = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(cleanSvg)));

      img.onload = function() {
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(function(pngBlob) {
          if (pngBlob) {
            const oldUrl = btnPng.getAttribute('href');
            if (oldUrl && oldUrl.startsWith('blob:')) {
              URL.revokeObjectURL(oldUrl);
            }
            btnPng.href = URL.createObjectURL(pngBlob);
            btnPng.download = `90plus_feed_${activeFeedPackKey}_${activeFeedSlideKey}_hd.png`;
          }
          btnPng.style.opacity = '1';
          btnPng.style.pointerEvents = 'auto';
        }, 'image/png');
      };
      img.onerror = function() {
        btnPng.style.opacity = '1';
        btnPng.style.pointerEvents = 'auto';
      };
      img.src = svgBase64;
    } else {
      btnPng.style.opacity = '1';
      btnPng.style.pointerEvents = 'auto';
    }
  }
}

function renderFeedTabs() {
  const container = document.getElementById('feed-slide-tabs-container');
  if (!container) return;

  container.innerHTML = '';
  const slides = feedDatabase[activeFeedPackKey];

  let isFirst = true;
  Object.keys(slides).forEach((key, index) => {
    const data = slides[key];
    const button = document.createElement('button');
    button.className = `story-tab${isFirst ? ' active' : ''}`;
    button.dataset.slide = key;

    const num = String(index + 1).padStart(2, '0');
    button.innerHTML = `
      <span class="tab-num">${num}</span>
      <span class="tab-name">${data.title}</span>
    `;

    if (isFirst) {
      activeFeedSlideKey = key;
      isFirst = false;
    }

    button.addEventListener('click', () => {
      document.querySelectorAll('#feed-slide-tabs-container .story-tab').forEach(t => t.classList.remove('active'));
      button.classList.add('active');
      activeFeedSlideKey = key;
      updateFeedRender();
    });

    container.appendChild(button);
  });

  updateFeedRender();
}

function initInstagramFeed() {
  const packTabs = document.querySelectorAll('.feed-pack-tab');
  renderFeedTabs();

  if (packTabs.length) {
    packTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        packTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeFeedPackKey = tab.dataset.pack;
        renderFeedTabs();
      });
    });
  }
}

// 10. INITIALIZE ALL PORTAL COMPONENT ACTIONS
function initializeAll() {
  updateLogoRender();
  initInstagramHighlights();
  initInstagramStories();
  initInstagramFeed();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAll);
} else {
  initializeAll();
}