/**
 * Codigo.gs — Sirve el entrenador de climatización como aplicación web.
 *
 * Por qué esto y no el insertador de código de Google Sites: Sites sanea el
 * HTML que se le pega (se come las tablas) y tiene límite de tamaño, así que
 * el entrenador llegaba cortado. Servido desde aquí llega entero, y además es
 * el sitio donde luego encajan el login, los tiempos y la puntuación.
 *
 * Puesta en marcha: ver README.md de esta carpeta.
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Entrenador')
    .setTitle('Entrenador de Climatización')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    // Sin esto, Google Sites no puede mostrarlo dentro de su iframe.
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
