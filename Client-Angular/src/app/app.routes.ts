import { Routes } from '@angular/router';

import { UsersPage } from './pages/users/users.page';

import { ProductsPage } from './pages/products/products.page';

import { LibrosPage } from './pages/libros/libros.page';

import { MusicaPage } from './pages/musica/musica.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 * @see {@link LibrosPage}
 * @see {@link MusicaPage}
 */
export const routes: Routes = [
  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de libros.
   *
   * @remarks
   * Renderiza el componente `LibrosPage`, encargado
   * de mostrar y gestionar el listado de libros.
   */
  { path: 'libros', component: LibrosPage },

  /**
   * Ruta de música.
   *
   * @remarks
   * Renderiza la página que obtiene y muestra el listado de música.
   */
  { path: 'musica', component: MusicaPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];
