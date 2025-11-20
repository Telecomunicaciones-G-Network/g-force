TODO: Debo traducir este archivo completamente a Ingles

# Clean Architecture

## Overview

- [Flow clean architecture](#flow-clean-architecture)

## Flow clean architecture frontend

1. The **data output** is the followind:

```bash
[UI] => TModel {I} (si no se necesita aplicar reglas de negocio en el usecase se puede pasar el TRequest)
  [Query | Command] => TModel {I} (Si no se neceista aplicar reglas de negocio no saltamos esto y enviamos al caso de uso)
    [Adapter] => TRequest {D}
      [Query | Command] => TRequest {D}
        [Usecase] => TRequest {D}
          [Repository] => TRequest {D} (Si no es necesario transformar la data y no se aplico reglas de negocio en el usecase enviar directo a external)
            [Mapper] => TDTO {I}
              [Repository] => TDTO {I}
                [External] => TDTO {I}
```

2. The **data input** is the following:

```bash
[External] => TDTO {I}
  [Repository] => TDTO {I} (Aqui se debe comprobar con esta data si hay algun error para lanzarlo como un error base estandarizado)
    [Mapper] => TResponse {D}
      [Repository] => TResponse {D}
        [Usecase] => TResponse {D} (maneja la excepcion controlada que llegara a la ui en base a la excepcion base y sus status code)
          [Query | Command] => TResponse {D}
            [Presenter] => TViewModel {I}
              [Query | Command] => TViewmodel {I}
                [UI] => TViewModel {I}
```
