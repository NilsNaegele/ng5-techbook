// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAtFDUpld6_f9eF9_CVGZF_Vf3msMNUbSc',
    authDomain: 'ng5-techbook.firebaseapp.com',
    databaseURL: 'https://ng5-techbook.firebaseio.com',
    projectId: 'ng5-techbook',
    storageBucket: 'ng5-techbook.appspot.com',
    messagingSenderId: '417532687249'
  }
};
