# Gestor de investigadores y becarios

[[toc]]

## Definiciones

### Investigadores

![Diagrama Investigadores](./diagramaInvestigadores.png)

- UNSAM: investigador con dedicación semi-exclusiva o exclusiva en docencia.
- CONICET: investigador de carrera CONICET con cargo de dedicación simple en docencia.
- CONICET-UNSAM: investigador de carrera CONICET con dedicación semi-exclusiva o exclusiva en docencia.

### Becarios (Estudiantes de posgrado)

![Diagrama Becarios](./diagramaBecarios.png)

<!-- $\forall BU \in EPU$ -->

- Estudiantes de posgrado: estudiantes que realizan un doctorado o posdoctorado en alguna carrera acreditada por la CONEAU.
- BECARIOS UNSAM: perciben una beca de doctorado o posdoctorado financiada por UNSAM o alguna de sus dependencias.
- BECARIOS CONICET: perciben una beca financiada por CONICET con lugar de trabajo en UNSAM.
- BECARIOS CONICET-UNSAM: perciben una beca cofinanciada por CONICET Y UNSAM.
- BECARIOS ANPCYT: son miembros de un proyecto otorgado a UNSAM y financiado por ANPCYT. Deben ser estudiantes de posgrado de una carrera acreditada por la CONEAU, su director debe ser miembro del grupo no necesariamente con lugar de trabajo en UNSAM.

### Otros cargos

- SIMPLES-UNSAM: docente con dedicación simple que realiza alguna ACYT.
- CPA-CONICET: personal de apoyo CONICET.
- Otros: personal sin cargo docente, contratados, etc.

## Archivos

| ARCHIVO                      | ORIGEN                            | DATOS                                                                                                                                                                        |
| ---------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BECARIOS-UNSAM.csv           | datos sacados de listas de Romina | dni, cuil, apellido, nombre, convocatoria, unidad                                                                                                                            |
| CONICET-UNSAM.CSV            | datos que otorgó Ract             | cuil, apellido, nombre, escalafon                                                                                                                                            |
| DEDICACION-UNSAM-DIC2016.CSV | datos de Sec Academica            | legajo, apellido, nombre, cargoId, dni, cuil, dependencia, sede, dedicacion, porcentaje, estado, antiguedad, caracter, planta, categoria, fechaAlta, fechaBaja, contratacion |
| PERSONALCORRECCIONUUAA.CSV   | correcion a mano de UUAA          | cuil, apellido, nombre, unidad                                                                                                                                               |

## Orden de precedencia

1. Memoria 2016 (/lib/personal): define el personal base.
2. CONICET-UNSAM y NOMINA CONICET WEB (pouchGib): agrega escalafon.
3. BECARIOS-UNSAM: agrega info de becarios no conicet.
4. DEDICACION-UNSAM: agrega info de dedicacion docente.
5. Categorizados (pouchUpdateCategorizados): agrega info de categorizacion.
6. PERSONALCORRECCIONUUAA: agrega la UUAA a los que falta identificar.
