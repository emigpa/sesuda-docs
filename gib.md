# GIB - Gestor de investigadores y becarios

El gestor de investigadores y becarios en una aplicación web que categoriza y describe al personal dedicado a la actividad de ciencia y tecnología. La información es analizada luego de converger fuentes heterogéneas de datos. Tiene como propósito ofrecer un listado de personal que pueda ser usado como punto de partida para la elaboración de informes.

## Fuentes de datos

| Dato                                             | Fuente                     | Fecha de actualización   |
| ------------------------------------------------ | -------------------------- | ------------------------ |
| Cargo docente                                    | Secretaria académica       | Diciembre de 2016        |
| Categorización del programa de incentivo docente | Comisión metropolitana     | Mayo de 2018             |
| Carrera de investigador en CONICET               | Mincyt via RACT            | Mayo de 2018             |
| Personal de apoyo CONICET                        | Mincyt via RACT            | Mayo de 2018             |
| Beca CONICET                                     | Mincyt via RACT            | Mayo de 2018             |
| Beca UNSAM                                       | Vicerrectorado             | Mayo de 2018             |
| Beca ANPCYT                                      | Vicerrectorado             | Mayo de 2018             |
| Publicaciones científicas                        | SIGEVA-UNSAM               | Actualización automática |
| Publicaciones en SCOPUS                          | SCOPUS                     | Mayo de 2018             |
| Datos personales                                 | SIGEVA-UNSAM               | Actualización automática |
| Lugar de trabajo                                 | Memoria Institucional 2016 | Julio de 2017            |
| Foto                                             | Guía de investigadores     | Mayo de 2018             |

## Definiciones

## Investigadores

Los investigadores poseen una gran trayectoria en su campo de investigación, dirigen proyectos, forman recursos humanos, divulgan y transfieren conocimento.

### Clasificación

| Orden | Fuente                                           | Comentario |
| ----- | ------------------------------------------------ | ---------- |
| 1     | CONICET - CNEA                                   |            |
| 2     | Dedicacion excl o semi                           |            |
| 3     | Categoria I, II o III                            |            |
| 4     | Director de Proyecto I+D                         |            |
| 5     | Formación de Becarios doc, posdoc o investigador |            |
| 6     | Publicaciones con referato                       |            |
| 7     | Ramón lo dijo                                    |            |

Los investigadores están clasificados por la entidad que financia su carrera como investigador, por su dedicación a la docencia o su categoria en el programa de incentivo docente.

![Diagrama Investigadores](./diagramaInvestigadores.png)

- UNSAM: investigador con dedicación semi-exclusiva o exclusiva en docencia o categoria 1, 2 o 3 en el programa de incentivo docente.
- CONICET: investigador de carrera CONICET con cargo de dedicación simple en docencia o sin cargo docente.
- CONICET-UNSAM: investigador de carrera CONICET con dedicación semi-exclusiva o exclusiva en docencia.

## Becarios (Estudiantes de posgrado)

Los becarios de investigación son estudiantes de doctorado o posdoctorado que realizan una tesis dirigida por un investigador. Pueden recibir una beca y en algunos casos tener un cargo docente de dedicación simple.

### Clasificación

Los becarios están clasificados según la entidad que financia su beca.

![Diagrama Becarios](./diagramaBecarios.png)

- Estudiantes de posgrado: estudiantes que realizan un doctorado o posdoctorado en alguna carrera acreditada por la CONEAU.
- BECARIOS UNSAM: perciben una beca de doctorado o posdoctorado financiada por UNSAM o alguna de sus dependencias.
- BECARIOS CONICET: perciben una beca financiada por CONICET con lugar de trabajo en UNSAM.
- BECARIOS CONICET-UNSAM: perciben una beca cofinanciada por CONICET Y UNSAM.
- BECARIOS ANPCYT: son miembros de un proyecto otorgado a UNSAM y financiado por ANPCYT. Deben ser estudiantes de posgrado de una carrera acreditada por la CONEAU, su director debe ser miembro del grupo no necesariamente con lugar de trabajo en UNSAM.

## Otros cargos

- SIMPLES-UNSAM: docente con dedicación simple que realiza alguna ACYT.
- CPA-CONICET: personal de apoyo CONICET.
- OTROS CARGOS ACYT: personal sin cargo docente, contratados, becarios CIN, etc.

## Archivos

| ARCHIVO                         | ORIGEN                            | DATOS                                                                                                                                                                        | NOMBRE EN BASE DE DATOS      |
| ------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| BECARIOS-UNSAM.csv              | datos sacados de listas de Romina | dni, cuil, apellido, nombre, escalafon, unidad, tipo, convocatoria, fechaAlta, fechaBaja                                                                                     | personal_becariosunsam       |
| CONICET-UNSAM.csv               | datos que otorgó Ract             | cuil, apellido, nombre, escalafon                                                                                                                                            | personal_conicet             |
| DEDICACION-UNSAM-DIC2016.csv    | datos de Sec Academica            | legajo, apellido, nombre, cargoId, dni, cuil, dependencia, sede, dedicacion, porcentaje, estado, antiguedad, caracter, planta, categoria, fechaAlta, fechaBaja, contratacion | personal_docentes            |
| PERSONALCORRECCIONUUAA.csv      | correcion a mano de UUAA          | cuil, apellido, nombre, unidad                                                                                                                                               | personal_correccionuuaa      |
| PERSONALCORRECCIONESCALAFON.csv | correcion a mano de escalafon     | cuil, escalafon, comentario                                                                                                                                                  | personal_correccionescalafon |

## Datos

1. Memoria 2016 (/lib/personal): define el personal informado por UUAA.
2. personal_conicet (pouchGib): agrega escalafon.
3. personal_becariosunsam: agrega info de becarios no conicet.
4. personal_correccionuuaa: agrega la UUAA a los que falta identificar.
5. personal_correccionescalafon: Corrije el escalafon.
6. personal_docentes: agrega info de dedicacion docente.
7. personal_categorizados (pouchUpdateCategorizados): agrega info de categorizacion.
8. personal_conicetnominaweb

1 + 2 + 3 = listado total de personas.

## Types

```javascript
const escalafon =
  'INVESTIGADOR_CONICET' ||
  'INVESTIGADOR_CONICET_UNSAM' ||
  'INVESTIGADOR_UNSAM' ||
  'BECARIO_CONICET' ||
  'BECARIO_CONICET_UNSAM' ||
  'BECARIO_UNSAM' ||
  'BECARIO_ANPCYT' ||
  'CPA_CONICET' ||
  'SIMPLE_UNSAM' ||
  'OTRO_CARGO_ACYT'
```

## Prototype

```javascript
gibPrototype = {
  gib: {
    fecha: 'now',
    memoria: {
      status: true,
      email: '',
      unidad: '',
      usuario: ''
    },
    personal_conicet: {
      status: true,
      escalafon: ''
    },
    // personal_conicetnominaweb: {
    //   status: true,
    //   escalafon: '',
    //   unidad: '',
    //   organizacion_id: ''
    // },
    personal_becariosunsam: {
      status: true,
      escalafon: '',
      unidad: '',
      tipo: '',
      convocatoria: '',
      fechaAlta: '',
      fechaBaja: ''
    },
    personal_docentes: {
      status: true,
      cargos: [
        {
          legajo: '',
          dependencia: '',
          sede: '',
          dedicacion: '',
          estado: '',
          antiguedad: '',
          caracter: '',
          categoria: '',
          fechaAlta: '',
          fechaBaja: ''
        }
      ]
    },
    personal_categorizados: {
      status: true,
      categoria: '',
      anio: ''
    },
    personal_correccionuuaa: {
      status: true,
      unidad: ''
    },
    personal_correccionescalafon: {
      status: true,
      escalafon: '',
      comentario: ''
    }
  },
  cuil: '',
  apellido: '',
  nombre: '',
  unidad: '',
  escalafon: '',
  categoria: '',
  cargo: ''
}
```
