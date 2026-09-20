/* ===========================================================================
   datos-leon.js — Seat León 1P · Climatronic
   Esquema de referencia: 1P1-016020407 (WI-XML, pág. 16/2)

   ESTO NO ES UNA IMAGEN: es la topología en datos. El motor calcula las
   lecturas recorriendo este grafo, así que un esquema nuevo son datos nuevos,
   no código nuevo.

   Etiquetado epistemológico de cada valor:
     Medido      — tomado por el profesor sobre el vehículo real
     OEM         — publicado por el fabricante
     Inferido    — rango típico de esa familia de componente, SIN CONTRASTAR
   =========================================================================== */

var VEHICULO = {
  marca: 'Seat', modelo: 'León 1P', sistema: 'Climatronic',
  esquema: '1P1-016020407', pagina: '16/2'
};

/* --- Nodos accesibles con la punta del polímetro ------------------------- */
var NODOS = {
  'J255:T20c/19': { et: 'J255 · T20c/19', desc: 'Salida de mando a N280 (lado alto)', lado: 'uce' },
  'J255:T20c/18': { et: 'J255 · T20c/18', desc: 'Retorno de N280 hacia la UCE',      lado: 'uce' },
  'T4t/3':        { et: 'T4t/3',  desc: 'Conector 4 vías, cerca del motor de arranque', lado: 'mazo' },
  'T4t/4':        { et: 'T4t/4',  desc: 'Conector 4 vías, cerca del motor de arranque', lado: 'mazo' },
  'N280:2':       { et: 'N280 · 2', desc: 'Válvula reguladora del compresor, pin 2', lado: 'componente' },
  'N280:1':       { et: 'N280 · 1', desc: 'Válvula reguladora del compresor, pin 1', lado: 'componente' },
  'MASA85':       { et: 'Masa 85', desc: 'Conexión a masa -1-, mazo del vano motor', lado: 'masa' }
};

/* --- Tramos del circuito (aristas del grafo) ----------------------------- */
/* r: resistencia en ohmios. Los cables ~0. La bobina lleva su banda.        */
var TRAMOS = [
  { de: 'J255:T20c/19', a: 'T4t/3', r: 0.1, cable: { sec: 0.35, color: 'li' } },
  { de: 'T4t/3', a: 'N280:2',       r: 0.1, cable: { sec: 1.0,  color: 'gn/sw' }, porConector: 'T4t' },
  { de: 'N280:2', a: 'N280:1',      componente: 'N280',
    r: { min: 8, max: 14, unidad: 'Ω', origen: 'Inferido' } },
  { de: 'N280:1', a: 'T4t/4',       r: 0.1, cable: { sec: 1.0,  color: 'br/sw' }, porConector: 'T4t' },
  { de: 'T4t/4', a: 'J255:T20c/18', r: 0.1, cable: { sec: 0.5,  color: 'br' } }
];

/* --- Qué puede fallar ---------------------------------------------------- */
var AVERIAS = {
  ninguna:        { et: 'Sin avería', efecto: null },
  bobina_cortada: { et: 'Bobina de N280 cortada', efecto: { tramo: 'N280:2|N280:1', r: Infinity } },
  cable_cortado:  { et: 'Cable gn/sw cortado entre T4t/3 y N280', efecto: { tramo: 'T4t/3|N280:2', r: Infinity } },
  sin_mando:      { et: 'La UCE no da mando (sin señal en T20c/19)', efecto: { sinMando: true } }
};

/* --- Alimentación: qué tensión hay en el lado alto ----------------------- */
var ALIMENTACION = { min: 11.5, max: 14.5, unidad: 'V', origen: 'Inferido' };
