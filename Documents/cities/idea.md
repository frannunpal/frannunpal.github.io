# Cities — La Idea

## La premisa

Escribes el nombre de una ciudad. La ciudad aparece.

No hay configuración, no hay datos externos, no hay API. Solo un string —`"Madrid"`, `"Akira"`, `"New Shanghai 2077"` — y una ciudad se genera: edificios con sus plantas, fachadas, tejados, y toda la información que cabría esperar de un edificio real. Residentes, gestores, direcciones IP, nivel de seguridad. Todo determinista. Misma ciudad, siempre los mismos datos.

Es una simulación de ciudad, no un mapa. La ciudad no pretende ser real. Pretende ser *coherente*.

---

## La experiencia

El usuario ve un mapa en 2D: footprints de edificios sobre un plano, con calles entre ellos. Puede hacer hover sobre un edificio y ver su tooltip — tipo de edificio, altura, número de plantas. Puede hacer click y ver el panel de detalle: todos sus atributos, su perfil de estilo, sus metadatos.

Si Three.js está disponible como peer dep, el mismo edificio se puede visualizar en 3D. El visor 3D no es obligatorio — la librería funciona sin él. Si está, aparece automáticamente.

Todo esto funciona dentro del desktop (como una app más que se abre desde el launcher) o embebido en cualquier app React propia.

---

## El corazón técnico

Por debajo, los edificios se generan a partir de la seed. Cada edificio, cada atributo, cada detalle visual es calculado de forma determinista a partir del nombre de la ciudad. El sistema de generación es procedural: parámetros como el número de plantas, dimensiones, tipo de tejado y materiales se derivan de la seed combinada con el tipo de edificio y el perfil de estilo del barrio.

La clave es que todo sale de la seed. La seed es el nombre de la ciudad. Puedes regenerar la ciudad un millón de veces y siempre obtienes lo mismo. Cambias el nombre y obtienes algo completamente distinto.

---

## Los atributos

Los edificios no son solo geometría. Tienen:

- **Número de residentes** — proporcional a las plantas y el tipo
- **Dirección IP** — una IP privada generada de forma coherente (subred por barrio)
- **Building manager** — un nombre de persona, determinista
- **Nivel de seguridad** — de 1 a 5
- **Código de edificio** — clasificación por uso y zona

Estos atributos son extensibles. Si quieres añadir `"threat_level"` o `"faction"` para tu juego, defines un schema y el sistema lo genera igual que los predefinidos.

---

## El estilo

No todos los edificios son iguales. Hay perfiles de estilo regionales — `suburban`, `downtown`, `mediterranean` — que controlan:

- Rangos de altura (1-3 plantas vs. 15-40 plantas)
- Tipos de tejado con sus probabilidades (plano, a dos aguas, con mansarda...)
- Materiales (ladrillo, vidrio, hormigón...)

El perfil se asigna por lote. La ciudad puede mezclar zonas residenciales y torres de oficinas en el mismo plano.

---

## La visualización

Dos modos, ambos siempre disponibles:

**2D (Canvas)** — un plano de planta con los footprints, coloreados por tipo o altura. Hover y click. Ligero.

**3D (Three.js)** — Three.js es una dependencia directa del paquete. La geometría viene pre-computada por el generador — el componente solo la renderiza.

---

## La integración con el desktop

La librería es completamente independiente de `@fde-desktop/fde-core`. Puedes usarla en cualquier proyecto React.

Si quieres integrarla en el desktop, una sola llamada antes de que monte el desktop:

```tsx
registerCitiesApp();

export function App() {
  return <FdeDesktop />;
}
```

La app aparece en el launcher. El usuario la abre, escribe un nombre de ciudad, la ciudad se genera. Sin más.

---

## Lo que NO es

No es un sistema GIS. No usa datos reales de OpenStreetMap ni coordenadas reales. No pretende replicar ciudades existentes con fidelidad.

No es un motor de juegos. No tiene física, no tiene agentes, no tiene simulación de tráfico.

Es un **generador de mundos ficticios coherentes**. El caso de uso principal es crear contexto: un mapa creíble para una app de ciberseguridad, un mundo para un juego de rol, un dataset procedural para una demo.

---

## La estética

Piensa en los terminales verdes de las películas de hacking de los 90, en los planos de ciudad de Ghost in the Shell, en los mapas de NetHack. La ciudad no es bonita — es *interesante*. Cada edificio tiene una historia implícita: 847 residentes, gestor: Elena Vasquez, IP: 10.4.23.187, nivel de seguridad: 4.

Los nombres de ciudad como seed son un guiño a esto: `"Zion"`, `"Midgar"`, `"Chiba City"` generan ciudades distintas, coherentes con su nombre de alguna manera imposible de articular pero real por el determinismo del hash.

---

## En una frase

Una librería que convierte el nombre de una ciudad en un mundo completo, coherente y explorable, con un mapa 2D, visualización 3D con Three.js, y metadatos extensibles — integrable en cualquier app React o en el desktop con una línea.
