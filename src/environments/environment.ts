// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  localhost: {
    url: 'localhost:61419'
  }
};

export const endpoints = {
  pessoas: window.location.protocol + '//'+ environment.localhost.url + '/api/v1/pessoas/'
};

export const methods = {
  cadastrar: endpoints.pessoas + 'cadastrar',
  listadepessoas: endpoints.pessoas + 'getpessoas',
  deletarpessoa: endpoints.pessoas + 'deletar',
  editarpessoa: endpoints.pessoas + 'editar'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
