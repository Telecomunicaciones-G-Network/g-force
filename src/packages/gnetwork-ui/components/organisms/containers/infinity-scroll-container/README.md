# InfinityScrollContainer

Contenedor de scroll infinito que carga más datos cuando el usuario llega al final de la lista. Usa **Intersection Observer** con el propio contenedor como `root`, un elemento centinela al final y la opción de exigir un primer scroll del usuario antes de disparar la carga.

## Características

- **Scroll infinito**: dispara `onLoadMore` cuando el centinela (sentinel) entra en vista dentro del contenedor.
- **Root = contenedor**: el observer usa el div del contenedor como `root`, no el viewport, ideal para listas dentro de un área con scroll propio.
- **Require user scroll**: evita cargar más datos al montar si la lista es corta; solo carga después de que el usuario haya scrolleado al menos una vez.
- **Evita doble carga**: no llama a `onLoadMore` mientras `isLoading` es `true`.
- **Indicador de carga**: muestra `InfinityScrollLoader` cuando hay más página, el centinela está visible y está cargando.

## Uso básico

```tsx
import { InfinityScrollContainer } from '@gnetwork-ui/components/organisms/containers/infinity-scroll-container';

function ContactList() {
  const [items, setItems] = useState([]);
  const [nextPage, setNextPage] = useState<string | null>('page-2');
  const [isLoading, setIsLoading] = useState(false);

  const onLoadMore = async () => {
    if (!nextPage || isLoading) return;
    setIsLoading(true);
    try {
      const { data, next } = await fetchPage(nextPage);
      setItems((prev) => [...prev, ...data]);
      setNextPage(next);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <InfinityScrollContainer
      nextPage={nextPage}
      isLoading={isLoading}
      onLoadMore={onLoadMore}
    >
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </InfinityScrollContainer>
  );
}
```

## Props

| Prop        | Tipo                    | Default | Descripción |
|------------|-------------------------|---------|-------------|
| `children` | `ReactNode`             | —       | Contenido de la lista (y del contenedor con scroll). |
| `className`| `string`                | `''`    | Clases CSS adicionales para el contenedor. |
| `isLoading`| `boolean`               | `false` | Si hay una carga en curso; evita llamadas duplicadas a `onLoadMore`. |
| `nextPage` | `string \| null`        | `null`  | Identificador de la siguiente página. Si es `null`, no se muestra el centinela ni se dispara carga. |
| `onLoadMore` | `() => void \| Promise<void>` | — | Se llama cuando el centinela es visible, hay más datos y no está cargando. |
| `ref`      | `Ref<HTMLDivElement>`   | —       | Ref opcional al elemento contenedor. Si no se pasa, se usa la ref interna. |

El componente extiende las props nativas de un `div` (`ReactDiv`), por lo que puedes pasar cualquier prop HTML válida para un div (por ejemplo `style`, `data-*`, etc.).

## Comportamiento

1. **Contenedor**: El componente renderiza un `div` con scroll (`overflow: auto`), estilos base y padding (`pb-4 px-4 tablet:pb-[27px] tablet:px-8 lg:p-0`).
2. **Centinela**: Si existe `nextPage`, se renderiza un div al final que actúa como centinela. La ref `sentinelRef` se asigna a este elemento.
3. **Observer**: `useIntersectionObserver` observa el centinela usando como `root` el propio contenedor. Cuando el centinela entra en vista (`isIntersecting`) y se cumplen las condiciones, se llama a `onLoadMore`.
4. **Require user scroll**: Internamente se usa `requireUserScroll: true`. La primera carga extra solo se dispara después de que el usuario haya hecho scroll (se marca en `onScroll` del contenedor).
5. **Loader**: El `InfinityScrollLoader` se muestra solo cuando hay `nextPage`, el usuario ya ha scrolleado, el centinela está en vista y `isLoading` es `true`.

## Hooks y archivos relacionados

- **`useInfinityScrollContainer`**: Gestiona `containerRef`, `sentinelRef`, `hasUserScrolledRef` y la lógica de cuándo llamar a `onLoadMore`.
- **`useIntersectionObserver`**: Hook genérico que observa un elemento respecto a un `root` (aquí el contenedor) y expone `isIntersecting` y `ref` para el centinela.
- **`InfinityScrollLoader`**: Componente de carga usado al final del contenedor mientras se cargan más datos.

## Estilos

Los estilos del contenedor están en `infinity-scroll-container.module.css`:

- `.base`: `display: flex`, `flex-direction: column`, `flex: 1`, `overflow: auto`.

Puedes sobrescribir o ampliar con la prop `className`.
