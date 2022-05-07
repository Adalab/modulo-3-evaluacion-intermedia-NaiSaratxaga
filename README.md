# Hola <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30px"> , soy Naiara

**Y este es mi ejercicio de evaluación intermedia del módulo 3 de React.**

### Frases de Friends

Vamos a recordar la serie de televisión **"Friends"**, y vamos a hacer una aplicación que nos permita gestionar
la frases de los personajes de esta serie, y lo vamos a hacer con React!

----

## Especificaciones

### 1º Pintar el listado de frases

Para empezar el ejercicio queremos:
- Pintar una cabecera con un título que ponga Frases de Friends.
- Pintar el listado de frases inicial. Para ello os facilitamos los datos en la siguiente API:
https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json
Os recomendamos que primero copiéis el contenido del API y los peguéis en un fichero json en vuestro
proyecto. Más adelante os encargaréis del fetch(). De momento lo importáis en vuestro componente App y
lo guardáis en el estado.

Después, generar el HTML de la página con los datos que habéis importado del json.

### 2º Añadir una nueva frase
A continuación queremos añadir un nueva frase. Para ello:
- Crear un formulario con los campos:
**Frase.**
**Personaje**
Un botón para **Añadir** la nueva frase.
- Cuando la usuaria pulse en el botón hay que añadir la frase al listado de frases para que este
aparezca en el listado.

Te queremos dar unas pistas en forma de preguntas. Antes de que la usuaria pulse en el botón de Añadir
una nueva frase debes pensar:

¿Vas a guardar los datos del formulario en algún sitio?
¿Qué tipo de datos vas a guardar?
¿Qué valores iniciales tienen estos datos?

### 3º Filtrar el listado de frases (bonus)
A continuación queremos filtrar las alumnas por nombre y por tutora. Intenta hacer uno de los dos y,
cuando lo tengas controlado, implementa el restante. Para ello:
Para filtrar por frase:
. Añade un recuadro sobre el listado de frases donde la usuaria pueda escribir texto.
. Añade la funcionalidad para que, cuando la usuaria escriba en ese <input>, el listado de frases se
re-pinte mostrando solo las que incluyan el texto que ha escrito la usuaria (aplicando también el
filtrado por personaje, si ya lo tuvieras implementado).

Para filtrar por personaje:
. Añade un select a la cabecera que tenga las siguientes opciones:
Todos
Ross
Monica
Joey
Phoebe
Chandler
Rachel
. Añade la funcionalidad para que cuando la usuaria cambie este select el listado de frases se repinte
mostrando solo los que coincidan con la opción seleccionada.

Más pistas, esta vez sobre ese <input> y ese <select>:
¿Vas a guardar los datos del select en algún sitio? ¿y del input?
¿Qué tipo de datos vas a guardar?
¿Qué valor inicial le vas a poner?
Y siempre que filtramos algo debemos hacernos las preguntas:
  
  ¿Qué datos de cada frase tienes que comparar con la opción seleccionada por la usuaria, para saber
si una frase cumple o no con el filtro?
¿Hay alguna opción del select con la que deba mostrar todos las frases?
¿Hay alguna opción del select con la que no deba mostrar ninguna frase?
¿Debo guardar las frases flitradas en algún sitio o puedo calcularlos al vuelo?


### 4º Maqueta a tu gusto (bonus)
No te vamos a decir cómo debes poner bonita tu web porque tienes más estilo y flow que nosotras.

---
### Dónde se puede ver 👀

### **[Friends]()**

---

#### Este proyecto ha sido desarrollado con:

<p>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/>
<a href="https://github.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt=“github” width="40" height="40"/> </a> 
</p>

---

#### Guía para arrancar el proyecto

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/) para trabajar con este Starter Kit.

**Pasos a seguir :**

1. _Clonar este repositorio_
2. _Abrir una terminal en la carpeta raíz del repositorio_
3. _Instalar las dependencias locales ejecutando en la terminal el comando:_

```bash
npm install
```

**Arrancar el proyecto con el comando**

```bash
npm start
```

---

### Autora:

[Naiara Saratxaga](https://github.com/NaiSaratxaga)
