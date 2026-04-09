

## Plan: Navbar unificado con navegación completa

### Problema actual
El `Navbar` global (`src/components/Navbar.tsx`) solo hace scroll a secciones dentro de la misma página. No navega a rutas (`/consultoria`, `/soluciones/climatizacion`) ni resalta la página activa. La página de Climatización usa su propio NavBar local con estilos diferentes.

### Cambios

#### 1. Refactorizar `src/components/Navbar.tsx` — Navbar inteligente por contexto

Agregar una prop opcional `activePage` para saber en qué página está el usuario. La lógica de navegación será:
- **En Home (`/`)**: los links de Consultoría, Sectores, Casos, Contacto hacen scroll a secciones (comportamiento actual)
- **En otras páginas**: esos mismos links navegan a `/#consultoria`, `/#sectores`, etc. (usando `navigate`)
- **Soluciones**: siempre despliega dropdown con las 3 sub-páginas y navega por ruta
- **Logo**: siempre navega a `/`
- **Página activa resaltada**: el link correspondiente se muestra en color `primary` (verde)
- **Texto blanco** cuando no hay scroll (contraste con hero), oscuro al hacer scroll (fondo blanco) — ya existe esta lógica, se mantiene
- **Mobile**: mismo comportamiento de links y dropdown en el menú hamburguesa

#### 2. Actualizar `src/components/climatizacion/ClimatizacionPage.tsx`

Reemplazar `NavBar` local por el `Navbar` global con `activePage="soluciones"`.

#### 3. Actualizar `src/pages/Consultoria.tsx`

Pasar `activePage="consultoria"` al Navbar.

#### 4. Los demás cambios del plan anterior se mantienen

- Iconos en DiagnosticoSection (lucide-react)
- Sección de marcas en SolucionesSection

### Archivos modificados
- `src/components/Navbar.tsx` — lógica de navegación por ruta + resaltado de página activa
- `src/components/climatizacion/ClimatizacionPage.tsx` — usar Navbar global
- `src/pages/Consultoria.tsx` — pasar `activePage`
- `src/pages/Index.tsx` — pasar `activePage` (opcional, para consistencia)
- `src/components/climatizacion/DiagnosticoSection.tsx` — iconos lucide
- `src/components/climatizacion/SolucionesSection.tsx` — sección de marcas

