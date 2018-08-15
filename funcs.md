**Todo**

-   revisar si los outputs de las funciones promises es necesario que
    sean arrays en todos los casos.
-   En el caso de no tener datos: reject({}) en vez de console log para
    las funciones que no devuelven arrays.
-   revisar si hay que establecer parametros por default.
-   revisar si el output debe ser estático o depender de los parámetros
    que pueden ser opcionales


# cvstat

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
  cvstat :: { MIEMBROMEMORIA } => Promise { CVSTAT }<br/>
  </h5>Gets Sigeva CV for one Person.


| CVSTAT                                      | Object | CV de la persona |
| ------------------------------------------- |--------| -----------------|
| persona_id |                                string | Id de la persona en Sigeva|
| apellido |                                    string |   Apellido |
| nombre |                                      string |   Nombre |
| cuil |                                        string |   Cuil |
| email |                                       string |   Email |
| organizacion_tramite_id |                   string |   Id del tramite de la unidad académica |
| organizacion |                                string |   Nombre de la Unidad académica |
| sigla |                                       string |   Sigla de la Unidad académica |
| convocatoria_id |                            string |   Id de la memoria |
| convocatoria_periodo_desde |                string |   Fecha de inicio de la memoria |
| convocatoria_periodo_hasta |                string |   Fecha de finalizacion de la memoria |
| director_apellido |                          string |   Apellido del director de Memoria |
| director_nombre |                            string |   Nombre del director de Memoria |
| articulos |                                   Array |    Articulos |
| partesDeLibro |                               Array |    Partes de libro |
| libros |                                      Array |   Libros |
| trabajosEnEventosCTPublicados |               Array |    Trabajos en eventos CT publicados |
| trabajosEnEventosCTNoPublicados |             Array |    Trabajos en eventos CT no publicados |
| tesis |                                       Array |    Tesis |
| demasProduccionesCT |                         Array |    Demas producciones CT |
| serviciosCientificoTecnologicos |             Array |    Servicios cientifico tecnologicos |
| conTituloDePropIntelectual |                  Array |    Con titulo de propiedad intelectual |
| sinTituloDePropIntelectual |                  Array |    Sin titulo de propiedad intelectual |
| informesTecnicos |                            Array |    Informes tecnicos |
| formacionBecarios |                           Array |    Formacion de becarios |
| formacionTesistas |                           Array |    Formacion de tesistas |
| formacionInvestigadores |                     Array |    Formacion de investigadores |
| formacionPasantes |                           Array |    Formacion de pasantes |
| formacionPersonalDeApoyo |                    Array |    Formacion de personal de apoyo |
| actividadesDeDivulgacion |                    Array |    Actividades de divulgacion |
| extensionRuralOIndustrial |                   Array |    Extension rural o industrial |
| serviciosSociales |                           Array |    Servicios sociales |
| produccionYODivulgacionArtisticaOCultural |   Array |    Produccion y/o divulgacion artistica o cultural |
| otroTipoDeActividadDeExtension |              Array |    Otro tipo de actividad de extension |
| financiamientoCyT |                           Array |    Financiamiento CT |

<br/><br/><br/>

# memorias

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
convocatorias :: () => Promise [ { CONVOCATORIA } ]
<br/></h5>
Convocatorias de Memoria. Cada item de la convocatoria es un objeto con su informacion.

| CONVOCATORIA |                   Object |   Convocatoria |
| ------------------------------|--------|----------------------------|
| convocatoria_id |               string |   Id de la convocatoria |
| convocatoria |                   string |   Nombre de la convocatoria |
| convocatoria_periodo_desde |   string |   Fecha de inicio del periodo de la convocatoria |
| convocatoria_periodo_hasta |  string |   Fecha de finalizacion del periodo de la convocatoria |
| unidades_ejecutoras |           string |   Unidades ejecutoras (Unidades academicas) que participan de la convocatoria |
| miembros |                       Array |    Miembros participantes de la convocatoria |

<br/><br/><br/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
cvsConvocatoria :: { CONVOCATORIA } => Promise { CONVOCATORIACVS }
<br/></h5>
Ejecuta cvstat en todos los miembros de la convocatoria.

| CONVOCATORIACVS                | Object |   Convocatoria con los CVS de los miembros |
| ------------------------------| -------- | ----------------------------------------- |
| convocatoria_id |               string |   Id de la convocatoria |
| convocatoria |                   string |   Nombre de la convocatoria |
| convocatoria_periodo_desde |   string |   Fecha de inicio del periodo de la convocatoria |
| convocatoria_periodo_hasta |   string |   Fecha de finalizacion del periodo de la convocatoria |
| unidades_ejecutoras |           string |   Unidades ejecutoras (Unidades academicas) que participan de la convocatoria |
| cvs |                            Array |    Cvs de los miembros |

<br/><br/><br/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
parseCvsConvocatoria :: { CONVOCATORIA } => Promise { MEDIR }
<br/></h5>
Analiza los cvs de la convocatoria segun los criterios de MEDIR.

| MEDIR                               | Object | Convocatoria con los criterios de MEDIR                                     |
| ----------------------------------- | ------ | ---------------------------------------------------- |
| convocatoria_id                     | string | Id de la convocatoria                                |
| convocatoria                        | string | Nombre de la convocatoria                            |
| convocatoria_periodo_desde          | string | Fecha de inicio del periodo de la convocatoria       |
| convocatoria_periodo_hasta          | string | Fecha de finalizacion del periodo de la convocatoria |
| unidades_ejecutoras                 | string | Unidades ejecutoras (Unidades academicas) que participan de la convocatoria |
| director_apellido                   | string | Apellido del director                                |
| director_nombre                     | string | Nombre del director                                                         |
| personalEnMemoriaLength             | string | Cantidad de personal en memoria                                             |
| personalRelevanteLength             | string | Cantidad de personal relevante                                              |
| personalProductivoLength            | string | Cantidad de personal productivo                                             |
| personalNuloLength                  | string | Cantidad de personal en nulo                                                |
| articulosLength                     | string | Cantidad de articulos                                                       |
| partesDeLibroLength                 | string | Cantidad de partes de libros                                                |
| librosLength                        | string | Cantidad de libros                                                          |
| trabajosEnEventosCTPublicadosLength | string | Cantidad de trabajos en eventos publicados                                  |
| demasProduccionesCTLength           | string | Cantidad de demas producciones CT                                           |
| personalEnMemoria                   | Array  | Personal en memoria                                                         |
| personalRelevante                   | Array  | Personal relevante                                                          |
| personalProductivo                  | Array  | Personal productivo                                                         |
| personalNulo                        | Array  | Personal nulo                                                               |
| articulos                           | Array  | Articulos                                                                   |
| partesDeLibro                       | Array  | Partes de libro                                                             |
| libros                              | Array  | Libros                                                                      |
| trabajosEnEventosCTPublicados       | Array  | Trabajos en eventos publicados                                              |
| demasProduccionesCT                 | Array  | Demas producciones CT                                                       |

<br/><br/><br/>

# teladevo

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
teladevo :: { CONVOCATORIA } => Promise [ { TELADEVO } ]
<br/></h5>
Busca los datos de una convocatoria para armar la devolución de
memorias.

|TELADEVO|                                    Object|   Convocatoria con los datos de devolucion|
|------------------------------------------- |--------| -------------------------------------------------|
|convocatoria|                                string|   Nombre de la convocatoria|
|convocatoria_id|                            string|   Id de la memoria|
| convocatoria_periodo_desde|                string|   Fecha de inicio de la memoria|
| convocatoria_periodo_hasta|                string|   Fecha de finalizacion de la memoria|
| organizacion_tramite_id|                   string|   Id del tramite de la unidad académica|
| organizacion|                                string|   Nombre de la Unidad académica|
| sigla|                                       string|   Sigla de la Unidad académica|
| miembros|                                    Array|    Miembros participantes de la convocatoria|
| articulos|                                   Array|    Articulos|
| partesDeLibro|                               Array|    Partes de libro|
| libros|                                      string|   Array|
| trabajosEnEventosCTPublicados|               Array|    Trabajos en eventos CT publicados|
| trabajosEnEventosCTNoPublicados|             Array|    Trabajos en eventos CT no publicados|
| tesis|                                       Array|    Tesis|
| demasProduccionesCT|                         Array|    Demas producciones CT|
| serviciosCientificoTecnologicos|             Array|    Servicios cientifico tecnologicos|
| conTituloDePropIntelectual|                  Array|    Con titulo de propiedad intelectual|
| sinTituloDePropIntelectual|                  Array|    Sin titulo de propiedad intelectual|
| informesTecnicos|                            Array|    Informes tecnicos|
| formacionBecarios|                           Array|    Formacion de becarios|
| formacionTesistas|                           Array|    Formacion de tesistas|
| formacionInvestigadores|                     Array|    Formacion de investigadores|
| formacionPasantes|                           Array|    Formacion de pasantes|
| formacionPersonalDeApoyo|                    Array|    Formacion de personal de apoyo|
| actividadesDeDivulgacion|                    Array|    Actividades de divulgacion|
| extensionRuralOIndustrial|                   Array|    Extension rural o industrial|
| serviciosSociales|                           Array|    Servicios sociales|
| produccionYODivulgacionArtisticaOCultural|   Array|    Produccion y/o divulgacion artistica o cultural|
| otroTipoDeActividadDeExtension|              Array|    Otro tipo de actividad de extension|
| financiamientoCyT|                           Array|    Financiamiento CT|

<br/><br/><br/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
teladevoPersona :: { PERSONA } => Promise [ { TELADEVOPERSONA } ]
<br/></h5>
Busca los datos de una persona para armar la devolución de memorias.

|TELADEVOPERSONA|      Object|   Convocatoria con los datos de devolucion|
|--------------------| --------| ------------------------------------------|
|persona_id|          string|   Id de la persona|
|apellido|             string|   Apellido de la persona|
|nombre|               string|   Nombre de la persona|
|cuil|                 string|   Cuil de la persona|
|email|                string|   Email de la persona|
|cargoGestion|         Array|    Cargo de gestion|
|cargoOrgCyt|          Array|    Cargo en Organismo CT|
|cargoIncentivo|       Array|    Cargo en programa de incentivo docente|
|cargoUniversitario|   Array|    Cargo en universidad|
|edad|                 Array|    edad|

<br/><br/><br/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
convocatorias :: () => Promise [ { CONVOCATORIA } ]
<br/></h5>
Convocatorias ordenadas en un array de dos dimensiones, la primera es la
convocatoria, la segunda es la unidad ejecutora.

|CONVOCATORIA|                   Object|   Convocatoria|
|------------------------------| --------| -----------------------------------------------------------------|
|convocatoria_id|               string|   Id de la convocatoria|
|convocatoria|                   string|   Nombre de la convocatoria|
|organizacion_tramite_id|      string|   Id del tramite (convocatoria específica) de la unidad académica|
|convocatoria_periodo_desde|   string|   Fecha de inicio del periodo de la convocatoria|
|convocatoria_periodo_hasta|   string|   Fecha de finalizacion del periodo de la convocatoria|
|director_apellido|             string|   Apellido del director de Memoria|
|director_nombre|               string|   Nombre del director de Memoria|
|organizacion|                   string|   Nombre de la unidad académica|
|sigla|                          string|   Sigla de la unidad académica|
|miembros|                       Array|    Miembros participantes de la convocatoria|

<br/><br/><br/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
teladevoConvocatorias :: [ { CONVOCATORIA } ] => Promise [ { TELADEVOCONVOCATORIA } ]
<br/></h5>
Ejecuta teladevo en cada CONVOCATORIA.

|TELADEVOCONVOCATORIA|           Object|   Convocatoria con la info de teladevo.|
|------------------------------| ------|---------------------------------------------|
|convocatoria_id|               string|   Id de la convocatoria|
|convocatoria|                   string|   Nombre de la convocatoria|
|convocatoria_periodo_desde|   string|   Fecha de inicio del periodo de la convocatoria|
|convocatoria_periodo_hasta|   string|   Fecha de finalizacion del periodo de la convocatoria|
|unidades_ejecutoras|           string|   Unidades ejecutoras (Unidades academicas) que participan de la convocatoria|
|ueData|                         Array|    Teladevo de la unidad ejecutora.|

<br/><br/><br/>

# personal

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
personalMemoria :: (unidadId, CUIL) => Promise [ { MIEMBRO } ]
<br/></h5>
Busca miembros integrantes de la convocatoria de memoria.

|Param|      Type|     Desc|
|----------| --------| ----------------------------------------------|
|unidadId|   string|   Id de la unidad ejecutora (Unidad academica)|
|CUIL|       string|   Cuil de la persona|

|MIEMBRO|            Object|   Miembro de unidad ejecutora|
|------------------| --------| -------------------------------|
|persona_id|        string|   Id de la persona|
|apellido|           string|   Apellido de la persona|
|nombre|             string|   Nombre de la persona|
|cuil|               string|   Cuil de la persona|
|email|              string|   Email de la persona|
|organizacion_id|   string|   Id de la unidad ejecutora|
|organizacion|       string|   Nombre de la unidad ejecutora|

<br/><br/><br/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
personalSigeva :: () => Promise [ { PERSONA } ]
<br/></h5>
Busca personas registradas en Sigeva.

|PERSONA|       Object|   Persona registrada en Sigeva|
|-------------| --------| -----------------------------------|
|persona_id|   string|   Id de la persona|
|apellido|      string|   Apellido de la persona|
|nombre|        string|   Nombre de la persona|
|cuil|          string|   Cuil de la persona|
|email|         string|   Email de la persona|
|sexo|          string|   Sexo de la persona|
|fecha_nac|    Date|     Fecha de nacimiento de la persona|

<br/><br/><br/>

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
personalSigeva :: () => Promise [ { MIEMBROMEMORIA } ]
<br/></h5>
Busca miembros de convocatorias de memoria.

|MIEMBROMEMORIA|                 Object|   Miembro de convocatoria de memoria|
|------------------------------| --------| -----------------------------------------------------------------|
|convocatoria_id|               string|   Id de la memoria|
|convocatoria|                   string|   Nombre de la convocatoria|
|convocatoria_periodo_desde|   string|   Fecha de inicio de la memoria|
|convocatoria_periodo_hasta|   string|   Fecha de finalizacion de la memoria|
|organizacion_tramite_id|      string|   Id del tramite (convocatoria específica) de la unidad académica|
|organizacion_id|               string|   Id de la unidad académica|
|organizacion|                   string|   Nombre de la unidad académica|
|sigla|                          string|   Sigla de la unidad académica|
|director_apellido|             string|   Apellido del director de Memoria|
|director_nombre|               string|   Nombre del director de Memoria|
|persona_id|                    string|   Id de la persona en Sigeva|
|cuil|                           string|   Cuil|
|apellido|                       string|   Apellido|
|nombre|                         string|   Nombre|
|email|                          string|   Email|

<br/><br/><br/>

# migrate

<h5 style="margin: 10px 0px; border-width: 5px 0px; padding: 5px; border-style: solid;">
Cv :: { PERSONA } => Promise { CV }
<br/></h5>
Extrae el CV completo de la persona con los datos del Banco de datos de
Sigeva.

|CV|                                               Object|   Cv|
|------------------------------------------------| ------| ----------|
|persona_id|                                      string|   Id de la persona en Sigeva|
|apellido|                                         string|   Apellido|
|nombre|                                           string|   Nombre|
|cuil|                                             string|   Cuil|
|email|                                            string|   Email|
|identificacion|                                   Array|    Datos personales: Identificacion|
|direccionResidencial|                             Array|    Datos personales: Direccion residencial|
|lugarTrabajo|                                     Array|    Datos personales: Lugar de trabajo|
|experticiaCyT|                                    Array|    Datos personales: Experticia en CyT|
|formacionNivelDoctorado|                          Array|    Formacion academica: Nivel universitario de posgrado/doctorado|
|formacionNivelMaestria|                           Array|    Formacion academica: Nivel universitario de posgrado/maestria|
|formacionNivelEspecializacion|                    Array|    Formacion academica: Nivel universitario de posgrado/especializacion|
|formacionNivelGrado|                              Array|    Formacion academica: Nivel universitario de grado|
|formacionNivelTerciario|                          Array|    Formacion academica: Nivel terciario no universitario|
|formacionNivelMedio|                              Array|    Formacion academica: Nivel medio|
|formacionNivelBasico|                             Array|    Formacion academica: Nivel basico|
|formacionEspecialidadOrganismoSalud|              Array|    Formacion complementaria: Especialidad certificada por organismo/s de salud|
|formacionPosdoctorado|                            Array|    Formacion complementaria: Posdoctorado|
|formacionCursoPosgrado|                           Array|    Formacion complementaria: Cursos de posgrado y/o capacitaciones extracurriculares|
|formacionIdiomas|                                 Array|    Formacion complementaria: Idiomas|
|cargosNivelUniversitarioYOPosgrado|               Array|    Cargos Docencia: Nivel superior universitario y/o posgrado|
|cargosNivelTerciario|                             Array|    Cargos Docencia: Nivel terciario no universitario|
|cargosBasico|                                     Array|    Cargos Docencia: Nivel básico y/o medio|
|cursosPosgradoYCapacitacionesExtracurriculares|   Array|    Cargos Docencia: Cursos de posgrado y capacitaciones extracurriculares|
|cargosGestionInstitucional|                       Array|    Cargos en gestión institucional|
|cargosOrganismosCyT|                              Array|    Cargos I+D: Cargos en organismos científico-tecnológicos|
|categorizacionProgramaIncentivos|                 Array|    Cargos I+D: Categorización del programa de incentivos|
|cargosIDOtroTipoInstituciones|                    Array|    Cargos I+D: Cargos de I+D en otro tipo de instituciones|
|cargosOtrosCargos|                                Array|    Cargos: Otros cargos|
|formadorBecarios|                                 Array|    Antecedentes: Formacion de recursos humanos en Cyt: Becarios|
|formadorTesistas|                                 Array|    Antecedentes: Formacion de recursos humanos en Cyt: Tesistas|
|formadorInvestigadores|                           Array|    Antecedentes: Formacion de recursos humanos en Cyt: Investigadores|
|formadorPasantes|                                 Array|    Antecedentes: Formacion de recursos humanos en Cyt: Pasantes de I+D y/o formación académica|
|formadorPersonalDeApoyo|                          Array|    Antecedentes: Formacion de recursos humanos en Cyt: Personal de apoyo a la I+D|
|financiamientoCyT|                                Array|    Financiamiento Cientifico y Tecnologico|
|actividadesDeDivulgacion|                         Array|    Extension: Actividades de divulgación CyT|
|extensionRuralOIndustrial|                        Array|    Extension: Extensión rural o industrial|
|prestacionServiciosSociales|                      Array|    Extension: Prestación de servicios sociales y/o comunitarios|
|produccionYODivulgacionArtisticaOCultural|        Array|    Extension: Producción y/o divulgación artística o cultural|
|otroTipoDeActividadDeExtension|                   Array|    Extension: Otro tipo de actividad de extensión|
|evaluacionPersonalCyT|                            Array|    Evaluacion: Evaluación de personal CyT y jurado de tesis y/o premios|
|evaluacionProyectos|                              Array|    Evaluacion: Evaluación de programas/proyectos de I+D y/o extensión|
|gestionEditorialEvaluacionTrabajosRevistasCyT|    Array|    Evaluacion: Gestión editorial y evaluación de trabajos en revistas CyT|
|evaluacionInstitucional|                          Array|    Evaluacion: Evaluación institucional|
|otroTipoEvaluacion|                               Array|    Evaluacion: Otro tipo de evaluación|
|becas|                                            Array|    Becas|
|estanciasYPasantias|                              Array|    Otras actividades CyT: Estancias y pasantías|
|operacionYMantenimientoSistemas|                  Array|    Otras actividades CyT: Operación y mantenimiento de sistemas de alta complejidad|
|produccion|                                       Array|    Otras actividades CyT: Producción|
|normalizacion|                                    Array|    Otras actividades CyT: Normalización|
|ejercicioEnAmbitoNoAcademico|                     Array|    Otras actividades CyT: Ejercicio de la profesión en el ámbito no académico|
|otraActividadCyT|                                 Array|    Otras actividades CyT: Otra actividad CyT|
|articulos|                                        Array|    Produccion cientifica: Artículos publicados en revistas|
|libros|                                           Array|    Produccion cientifica: Libros|
|partesDeLibro|                                    Array|    Produccion cientifica: Partes de libros|
|trabajosEnEventosCTPublicados|                    Array|    Produccion cientifica: Trabajos en eventos CT publicados|
|trabajosEnEventosCTNoPublicados|                  Array|    Produccion cientifica: Trabajos en eventos CT no publicados|
|tesis|                                            Array|    Produccion cientifica: Tesis|
|demasProduccionesCT|                              Array|    Produccion cientifica: Demas producciones CT|
|conTituloDePropIntelectual|                       Array|    Produccion tecnologica: Con titulo de propiedad intelectual|
|sinTituloDePropIntelectual|                       Array|    Produccion tecnologica: Sin titulo de propiedad intelectual|
|serviciosCientificoTecnologicos|                  Array|    Produccion tecnologica: Servicio cientifico tecnologicos|
|informesTecnicos|                                 Array|    Produccion tecnologica: Informe tecnico|
|musicalSonora|                                    Array|    Produccion artistica: Musical-sonora|
|visual|                                           Array|    Produccion artistica: Visual|
|audiovisualMultimedial|                           Array|    Produccion artistica: Audiovisual multimedial|
|corporalTeatral|                                  Array|    Produccion artistica: Corporal teatral|
|generoLiterarioNarrativo|                         Array|    Produccion artistica: Género literario narrativo|
|generoLiterarioDramaticoPoeticoEnsayo|            Array|    Produccion artistica: Género literario dramático, poético o ensayo|
|generoLiterarioGuion|                             Array|    Produccion artistica: Género literario guión|
|generoLiterarioOtro|                              Array|    Produccion artistica: Otro tipo de género literario|
|otraProduccionArtistica|                          Array|    Produccion artistica: Otra producción artística|
|participacionUOrganizacionEventosCyT|             Array|    Otros antecedentes: Participación u organización de eventos CyT |
|membresiasAsociacionesCyTOProfesionales|          Array|    Otros antecedentes: Mebresías, redes y/o programas de cooperación: Membresías en asociaciones C-T y/o profesionales|
|participacionRedesTematicasOInstitucionales|      Array|    Otros antecedentes: Mebresías, redes y/o programas de cooperación: Participación en redes temáticas o institucionales|
|coordinacionProyectosCooperacionAcademicaOCyT|    Array|    Otros antecedentes: Mebresías, redes y/o programas de cooperación: Coordinación de proyectos de cooperación académica o C-T|
|premios|                                          Array|    Premios y/o distinciones|