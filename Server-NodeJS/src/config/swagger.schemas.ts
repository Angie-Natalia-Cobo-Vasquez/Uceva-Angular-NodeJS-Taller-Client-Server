/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Libro:
 *       type: object
 *       description: Representa un libro del sistema
 *       required:
 *         - id
 *         - titulo
 *         - autor
 *         - genero
 *         - anio
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         titulo:
 *           type: string
 *           example: Cien años de soledad
 *         autor:
 *           type: string
 *           example: Gabriel García Márquez
 *         genero:
 *           type: string
 *           enum:
 *             - Novela
 *             - Ciencia Ficcion
 *             - Fantasia
 *             - Misterio
 *           example: Novela
 *         anio:
 *           type: number
 *           example: 1967
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Musica:
 *       type: object
 *       description: Representa una canción
 *       required:
 *         - id
 *         - cancion
 *         - artista
 *         - genero
 *         - anio
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         cancion:
 *           type: string
 *           example: Piano Man
 *         artista:
 *           type: string
 *           example: Billy Joel
 *         genero:
 *           type: string
 *           example: Rock
 *         anio:
 *           type: number
 *           example: 2020
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Vuelo:
 *       type: object
 *       description: Representa un vuelo
 *       required:
 *         - id
 *         - aerolinea
 *         - aeropuerto
 *         - avion
 *         - numeroVuelo
 *         - asiento
 *         - codigoReserva
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         aerolinea:
 *           type: string
 *           example: Avianca
 *         aeropuerto:
 *           type: string
 *           example: El Dorado International Airport
 *         avion:
 *           type: string
 *           example: Boeing 737-800
 *         numeroVuelo:
 *           type: string
 *           example: AV123
 *         asiento:
 *           type: string
 *           example: 12A
 *         codigoReserva:
 *           type: string
 *           example: ABC123
 */

export {};