# Estructura

```
.
├─ config
├─ docs
├─ docs-dev
├─ lib
|  ├─ api
|  ├─ cvstat
|  ├─ gib
|  ├─ memoria
|  ├─ merger
|  ├─ migrate
|  ├─ parser
|  ├─ personal
|  ├─ routes
|  ├─ scopus
|  └─ utils
├─ models
|  └─ pouch
├─ private
├─ public
├─ scripts
├─ static
└─ temp
```

- config: configuraciones del server.
- docs: documentacion compilada.
- docs-dev: documentacion sin compilar.
- lib: logica específica.
- api: funciones que trabajan como layer entre sesuda y la web. (getters)
- routes: rutas de la api web.
- models: todo lo que tiene que ver con escritura y lectura de bases de datos.
- private: archivos de datos originales.
- public: archivos exportados.
- scripts: scripts SQL.
- static: web apps montadas.
- temp: archivos temporarios.
