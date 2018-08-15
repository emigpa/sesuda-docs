# Estructura de base de datos

[[toc]]

::: warning Aclaración
todas las funciones que se ejecutan en la base de datos, tienen como valor de retorno el status del resultado.
:::

## Bases de datos

### personal

::: tip Convención acerca del título de la base de datos.
Las db que contienen caracterizaciones sobre el personal como titulo deben empezar con 'personal' + '\_' + 'nombre específico sin espacios en minúscula'.
:::

- **personal_categorizados**
- **personal_conicet**
- **personal_docentes**
- **personal_becariosunsam**
- **personal_correccionuuaa**
- **personal_conicetnominaweb**
- **personal_gib**: listado de personas en gib.

### sigeva

::: tip Convención acerca del título de la base de datos.
Las db que contienen datos de sigeva deben empezar con 'sigeva' + '\_' + 'nombre específico sin espacios en minúscula'.
:::

- **sigeva_bdd**
- **sigeva_proyectos**

### scopus

::: tip Convención acerca del título de la base de datos.
Las db que contienen datos de scopus deben empezar con 'scopus' + '\_' + 'nombre específico sin espacios en minúscula'.
:::

- **scopus_investigadoresunsam**
- **scopus_gib**: data sacada de scopus buscado segun listado de personal en gib.
- **scopus_gibapi**: data para usar en la app, período 2013-2018.
