# Implementación de Detección Facial con clmtrackr

Este proyecto implementa la detección facial utilizando la biblioteca clmtrackr en una aplicación Angular. La biblioteca clmtrackr permite seguir y detectar características faciales en tiempo real utilizando una transmisión de video.

## Pasos Realizados:

1. Instalación de clmtrackr@1.1.2 utilizando npm.
2. Agregar el script clmtrackr al archivo `angular.json`:
   "node_modules/clmtrackr/build/clmtrackr.js"
3. Importar la funcionalidad de JavaScript en el componente:
   `declare var clm: any;`
4. Agregar estilos CSS para superponer el canvas (el cuadro que sigue el rostro) sobre el video.

En este proyecto, hemos implementado la detección facial utilizando la biblioteca clmtrackr en una aplicación Angular. La biblioteca clmtrackr nos permite rastrear y detectar características faciales en tiempo real utilizando una transmisión de video.

El proceso de seguimiento facial es el siguiente:
1. Se agrega el script `clmtrackr.js` al proyecto, el cual proporciona la funcionalidad principal para el seguimiento facial.
2. En el componente, importamos la funcionalidad necesaria de la biblioteca clmtrackr mediante `declare var clm: any;`.
3. La plantilla HTML del componente contiene un elemento de video para mostrar la transmisión de video y un elemento de canvas para dibujar el cuadro que sigue el rostro.
4. En el componente, iniciamos el seguimiento facial accediendo a la transmisión de video mediante `getUserMedia` e inicializando el rastreador de clmtrackr.
5. La función `drawLoop()` actualiza continuamente el canvas con la posición del rostro rastreado, dibujando el cuadro correspondiente.

Al superponer el canvas sobre el video mediante CSS, podemos ver visualmente cómo el cuadro sigue el rostro detectado en tiempo real.

Ten en cuenta que esta implementación asume que la biblioteca clmtrackr ha sido instalada e importada correctamente en el proyecto. Además, se deben conceder los permisos necesarios de la cámara para acceder a la transmisión de video del usuario y permitir la detección facial.

Recuerda ajustar los estilos y otras configuraciones según tus necesidades específicas.
