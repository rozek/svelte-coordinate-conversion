# svelte-coordinate-conversion #

converts coordinates between viewport, document and element coordinate systems (not only in Svelte)
 
**NPM users**: please consider the [Github README](https://github.com/rozek/svelte-viewport-info/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

> Just a small note: if you like this module and plan to use it, consider "starring" this repository (you will find the "Star" button on the top right of this page), so that I know which of my repositories to take most care of.

## Installation ##

`svelte-coordinate-conversion` may be used as an ECMAScript module (ESM), a CommonJS or AMD module or from a global variable.

You may either install the package into your build environment using [NPM](https://docs.npmjs.com/) with the command

```
npm install svelte-coordinate-conversion
```

or load the plain script file directly

```
<script src="https://unpkg.com/svelte-coordinate-conversion"></script>
```

## Access ##

How to access the package depends on the type of module you prefer

* ESM (or Svelte): `import Conversion from 'svelte-coordinate-conversion'`
* CommonJS: `const Conversion = require('svelte-coordinate-conversion')`
* AMD: `require(['svelte-coordinate-conversion'], (Conversion) => {...})`

Alternatively, you may access the global variable `Conversion` directly.

Note for ECMAScript module users: all module functions and values are exported individually, thus allowing your bundler to perform some "tree-shaking" in order to include actually used functions or values (together with their dependencies) only.

## Usage within Svelte ##

For Svelte it is recommended to import the package within a module context:

```
<script context="module">
  import { fromLocalTo,fromViewportTo,fromDocumentTo } from 'svelte-coordinate-conversion'
  import { onMount } from 'svelte'
</script>

<script>
  let TargetElement // element, whose local position is to be read or set
  let localPosition, ViewportPosition, DocumentPosition
  
  onMount(() => {
    localPosition    = { left:0, top:0 } // local position to be converted
    ViewportPosition = fromLocalTo('viewport',localPosition,TargetElement)
    DocumentPosition = fromLocalTo('document',localPosition,TargetElement)

    ViewportPosition = { left:0, top:0 } // viewport position to be converted
    localPosition    = fromViewportTo('local',   ViewportPosition,TargetElement)
    DocumentPosition = fromViewportTo('document',ViewportPosition)

    DocumentPosition = { left:0, top:0 } // document position to be converted
    localPosition    = fromDocumentTo('local',   DocumentPosition,TargetElement)
    ViewportPosition = fromDocumentTo('viewport',DocumentPosition)
  })
</script>

<div bind:this={TargetElement}></div>
```

## Usage as ECMAscript Module ##

Using `svelte-coordinate-conversion` as an ECMAscript module looks very similar to the Svelte use case:

```
import { fromLocalTo,fromViewportTo,fromDocumentTo } from 'svelte-coordinate-conversion'

let TargetElement // element, whose local position is to be read or set
let localPosition, ViewportPosition, DocumentPosition
  
localPosition    = { left:0, top:0 } // local position to be converted
ViewportPosition = fromLocalTo('viewport',localPosition,TargetElement)
DocumentPosition = fromLocalTo('document',localPosition,TargetElement)

ViewportPosition = { left:0, top:0 } // viewport position to be converted
localPosition    = fromViewportTo('local',   ViewportPosition,TargetElement)
DocumentPosition = fromViewportTo('document',ViewportPosition)

DocumentPosition = { left:0, top:0 } // document position to be converted
localPosition    = fromDocumentTo('local',   DocumentPosition,TargetElement)
ViewportPosition = fromDocumentTo('viewport',DocumentPosition)
```

## Usage as CommonJS or AMD Module (or as a global Variable) ##

Let's assume that you already "required" or "imported" (or simply loaded) the module according to your local environment. In that case, you may use it as follows:

```
let TargetElement // element, whose local position is to be read or set
let localPosition, ViewportPosition, DocumentPosition
  
localPosition    = { left:0, top:0 } // local position to be converted
ViewportPosition = Conversion.fromLocalTo('viewport',localPosition,TargetElement)
DocumentPosition = Conversion.fromLocalTo('document',localPosition,TargetElement)

ViewportPosition = { left:0, top:0 } // viewport position to be converted
localPosition    = Conversion.fromViewportTo('local',   ViewportPosition,TargetElement)
DocumentPosition = Conversion.fromViewportTo('document',ViewportPosition)

DocumentPosition = { left:0, top:0 } // document position to be converted
localPosition    = Conversion.fromDocumentTo('local',   DocumentPosition,TargetElement)
ViewportPosition = Conversion.fromDocumentTo('viewport',DocumentPosition)
```

## Example ##

An example is available on the Svelte REPL - feel free to play with it!

* [svelte-coordinate-conversion](https://svelte.dev/repl/269fa097ebfb4175990b129b25e9dafa)

## Background Information ##

From time to time it becomes necessary to covert browser coordinates between various coordinate systems, e.g., from relative to an element to relative to the current viewport or the whole document. This package simplifies such conversions.

### JavaScript API ###

The package offers a JavaScript `default` export, which may be imported as follows

  `import Conversion from 'svelte-coordinate-conversion'`

With such an import, the JavaScript API can be used as follows:

* **`Conversion.fromLocalTo('viewport',localPosition,TargetElement)`**<br>converts `localPosition` (which is relative to the `TargetElement`) into a position relative to the current viewport
* **`Conversion.fromLocalTo('document',localPosition,TargetElement)`**<br>converts `localPosition` (which is relative to the `TargetElement`) into a position relative to the document
* **`Conversion.fromViewportTo('local',ViewportPosition,TargetElement)`**<br>converts `ViewportPosition` (which is relative to the current viewport) into a position relative to element `TargetElement`
* **`Conversion.fromViewportTo('document',ViewportPosition)`**<br>converts `ViewportPosition` (which is relative to the current viewport) into a position relative to the document
* **`Conversion.fromDocumentTo('local',DocumentPosition,TargetElement)`**<br>converts `DocumentPosition` (which is relative to the document) into a position relative to element `TargetElement`
* **`Conversion.fromDocumentTo('viewport',DocumentPosition)`**<br>converts `DocumentPosition` (which is relative to the document) into a position relative to the current viewport

## Build Instructions ##

You may easily build this package yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/svelte-coordinate-conversion/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build

You may also look into the author's [build-configuration-study](https://github.com/rozek/build-configuration-study) for a general description of his build environment.

## License ##

[MIT License](LICENSE.md)
