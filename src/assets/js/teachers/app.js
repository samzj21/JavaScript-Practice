// Encargado de orquestar todas las funciones de los demás archivos
import { listeners } from './operations.js';

export function initializeApp() {
    listeners();
}