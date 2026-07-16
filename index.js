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
  const img = new Image();
  const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
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
      
      const img = new Image();
      const blob = new Blob([data.svg], { type: 'image/svg+xml;charset=utf-8' });
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
  
  <g transform="translate(120, 480)">
    <text class="story-font" font-weight="800" font-size="76" fill="#FFFFFF">Preguntas<tspan x="0" dy="90">frecuentes<tspan fill="#39FF14">.</tspan></tspan></text>
    
    <text y="240" class="story-font" font-weight="400" font-size="32" fill="#888888" xml:space="preserve">
      <tspan x="0" dy="0">Respondemos las consultas más comunes</tspan>
      <tspan x="0" dy="48">antes de comenzar un proyecto.</tspan>
    </text>
    
    <g transform="translate(0, 480)">
      <line x1="0" y1="0" x2="160" y2="0" stroke="#39FF14" stroke-width="4"/>
      <text y="80" class="story-font" font-weight="600" font-size="44" fill="#FFFFFF" xml:space="preserve">
        <tspan x="0" dy="0">Todo lo que</tspan>
        <tspan x="0" dy="64">necesitás saber.</tspan>
      </text>
    </g>
  </g>
  
  <g transform="translate(540, 1720)">
    <text text-anchor="middle" class="story-font" font-weight="600" font-size="24" letter-spacing="6" fill="#FFFFFF">DESLIZÁ PARA CONOCER MÁS <tspan fill="#39FF14">→</tspan></text>
  </g>
</svg>`
  }
};

// 9. INSTAGRAM STORIES CONTROLLER
let activeStoryKey = 'servicios';

function updateStoryRender() {
  const container = document.getElementById('story-render-box');
  const titleEl = document.getElementById('story-meta-title');
  const descEl = document.getElementById('story-meta-desc');
  if (!container || !titleEl || !descEl) return;
  
  const data = storiesDatabase[activeStoryKey];
  container.innerHTML = data.svg;
  titleEl.textContent = data.title;
  descEl.textContent = data.desc;
}

function initInstagramStories() {
  const tabs = document.querySelectorAll('.story-tab');
  const btnSvg = document.getElementById('btn-download-story-svg');
  const btnPng = document.getElementById('btn-download-story-png');
  
  if (!tabs.length) return;
  
  // Set initial render
  updateStoryRender();
  
  // Tab Switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeStoryKey = tab.dataset.story;
      updateStoryRender();
    });
  });
  
  // Download SVG
  if (btnSvg) {
    btnSvg.addEventListener('click', () => {
      const data = storiesDatabase[activeStoryKey];
      const blob = new Blob([data.svg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `90plus_story_${activeStoryKey}.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }
  
  // Download PNG HD (1080x1920)
  if (btnPng) {
    btnPng.addEventListener('click', () => {
      const data = storiesDatabase[activeStoryKey];
      const canvas = document.getElementById('export-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      
      const width = 1080;
      const height = 1920;
      canvas.width = width;
      canvas.height = height;
      
      ctx.clearRect(0, 0, width, height);
      
      const img = new Image();
      const blob = new Blob([data.svg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      
      img.onload = function() {
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(function(pngBlob) {
          const pngUrl = URL.createObjectURL(pngBlob);
          const a = document.createElement('a');
          a.href = pngUrl;
          a.download = `90plus_story_${activeStoryKey}_hd.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(pngUrl);
        }, 'image/png');
        URL.revokeObjectURL(url);
      };
      img.src = url;
    });
  }
}

// 10. INITIALIZE ALL PORTAL COMPONENT ACTIONS
document.addEventListener('DOMContentLoaded', () => {
  updateLogoRender();
  initInstagramHighlights();
  initInstagramStories();
});