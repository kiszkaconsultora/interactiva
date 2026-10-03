// Video IDs and titles extracted from the Google Sites export (docs/Stream).
// Order is the page order of the source. Untitled videos have an empty title.
// Duplicates and misattributions are kept as found in the source.
export interface StreamVideo {
  id: string;
  title: string;
}

export const streamVideos: Record<string, StreamVideo[]> = {
  'desafio-emprendedor': [
    { id: "4wbYlA2rm3I", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #3 EPISODIO" },
    { id: "F9a7LWUDDn8", title: "DESAFÍO EMPRENDEDOR TEMPORADA 2 #13 EPISODIO" },
    { id: "JbmoMzODZL8", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #10 EPISODIO" },
    { id: "odLjXMPV_f0", title: "" },
    { id: "JGOZSEHoJ64", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #3 EPISODIO" },
    { id: "GuR1W_T_pOw", title: "DESAFÍO EMPRENDEDOR TEMPORADA 2 #EPISODIO16" },
    { id: "a3Hb60txYJs", title: "DESAFÍO EMPRENDEDOR TEMPORADA 2 #EPISODIO15" },
    { id: "LUlUNPW3R70", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #5 EPISODIO" },
    { id: "Rt6ui3rrB6g", title: "DESAFÍO EMPRENDEDOR TEMPORADA 2 #14 EPISODIO" },
    { id: "scFtkHumB6o", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #6 EPISODIO - Part 1" },
    { id: "KWUhAf-IZrM", title: "DESAFÍO EMPRENDEDOR TEMPORADA 2 #EPISODIO16" },
    { id: "iVsGQi_Ml1g", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #12 EPISODIO" },
    { id: "5k4WOOOg2HI", title: "" },
    { id: "oO88Xmm-3J8", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #6 EPISODIO - Part 2" },
    { id: "ELkoCGaeenU", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #3 EPISODIO" },
    { id: "6LoeNfFKXqg", title: "MODA Y DISEÑO DE AUTOR EN DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #11 EPISODIO" },
    { id: "hNCabGmdL24", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #9 EPISODIO - Cap1" },
    { id: "is-s3tRIWdc", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #7 EPISODIO - Parte 2" },
    { id: "Mpesl07NA44", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #3 EPISODIO" },
    { id: "_lV4rKY4usM", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #8 EPISODIO" },
  ],
  'error-404': [
    { id: "FOO-GwMyKbQ", title: "" },
    { id: "5mcogAgk4Ac", title: "" },
    { id: "eu-YU2MCCY4", title: "ERROR 404 - TEMPORADA 1 - #11 EPISODIO" },
    { id: "rFL8Ac0ACJ8", title: "ERROR 404 - TEMPORADA 1 - #1 EPISODIO" },
    { id: "USmigzuZ0NQ", title: "" },
    { id: "2up7tDrrvwc", title: "" },
    { id: "EEFoW6oCl0g", title: "" },
    { id: "RJ7cOt6tEkw", title: "" },
    { id: "aGsXZPFhJ_4", title: "" },
    { id: "zlLQ2W4Rygg", title: "" },
    { id: "EuSDbgPmvlQ", title: "" },
    { id: "sjfRb8vKFAI", title: "ERROR 404 - TEMPORADA 1 - #EPISODIO12" },
    { id: "dXf-p3Jopbw", title: "" },
  ],
  'interactiva-diario': [
    { id: "4wbYlA2rm3I", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #3 EPISODIO" },
    { id: "F9a7LWUDDn8", title: "DESAFÍO EMPRENDEDOR TEMPORADA 2 #13 EPISODIO" },
    { id: "JbmoMzODZL8", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #10 EPISODIO" },
    { id: "odLjXMPV_f0", title: "" },
    { id: "JGOZSEHoJ64", title: "DESAFÍO EMPRENDEDOR - TEMPORADA 2 - #3 EPISODIO" },
    { id: "GuR1W_T_pOw", title: "DESAFÍO EMPRENDEDOR TEMPORADA 2 #EPISODIO16" },
    { id: "a3Hb60txYJs", title: "DESAFÍO EMPRENDEDOR TEMPORADA 2 #EPISODIO15" },
  ],
  'magia': [
    { id: "C1Z0172tDbM", title: "magIA✨ con Emilio Puljiz" },
    { id: "hlg51LjaeEA", title: "magIA✨ con Facundo Uferer" },
    { id: "5nX4AIxeI3k", title: "MAGIA 4to EPISODIO" },
    { id: "dGFyhGw_XLg", title: "magIA✨ con NAPSIS" },
  ],
  'teatro-de-resistencia': [
    { id: "TLH2qBENG2o", title: "" },
    { id: "SsZBccHs2vc", title: "TEATRO DE RESISTENCIA - ANTARCA PRODUCCIONES - TEMP 01 EP 01" },
    { id: "GIv1rUMlemE", title: "" },
    { id: "hmzv19uxSRc", title: "" },
    { id: "U_UnEPwBW7Y", title: "" },
    { id: "Ww74I7BI0n4", title: "" },
    { id: "9B4MchdiAuA", title: "TEATRO DE RESISTENCIA - Grupo Jopara - TEMP 01 EP 7" },
    { id: "_fz_Sl6YVE4", title: "TEATRO DE RESISTENCIA - Grupo Borde - TEMP 01 EP 8" },
    { id: "ms0Rtvvh60I", title: "TEATRO DE RESISTENCIA - Grupo Fulanxs - Angela Rodríguez y Jaqueline Romero" },
    { id: "0Kzk35aYQVk", title: "TEATRO DE RESISTENCIA Teatro del Guaran TEMP 01 EP 13" },
    { id: "m8HXMDIlX58", title: "TEATRO DE RESISTENCIA - Julieta Daga y Luciano Delprato - Bufón - Temp 1 Ep 14" },
    { id: "hFyLUnKbggA", title: "TEATRO DE RESISTENCIA - Nicolas Aucar Elenco Zingara - TEMP 01 EP 11" },
  ],
  'sesiones-de-proyecto': [
    { id: "ndqvLYa5FFE", title: "Diseño del Sistema BIM 1810 Industrial y Diseño sin Apellido en Sesiones de Proyectos" },
    { id: "hnSVsOGAQNM", title: "Bioconstrucción y Soluciones Metálicas en Sesiones de Proyectos" },
    { id: "1lcEfM70mho", title: "Ébano Steelframing y Fernández Galassi Arquitectura en Sesiones de Proyectos" },
  ],
};
