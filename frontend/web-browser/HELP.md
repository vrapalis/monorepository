# Help

## How to run entryou project

- First set system environment variables (because of docker configuration) <br/>
``source ./apps/entryou/app/src/.env-dev.sh``
  <br/>
  <br/>
- Second replace environment variables of env.js file <br/>
``envsubst < ./apps/entryou/app/src/assets/scripts/env.template.js > ./apps/entryou/app/src/assets/scripts/env.js``
  <br/>
  <br/>
- Last run project <br/>
``nx serve --project=entryou-app``

## CLI

- **Adds** support for an **external library** to your project.<br/>
  `ng add @angular/pwa --project=projectName`
  <br/><br/>
- **Rename Project**<br/>
  `nx g @nrwl/workspace:move --project shared-auth-feature-registration shared/auth/feature/sing-up`
  <br/><br/>
- **Delete Project**<br/>
  `nx generate remove entryou-auth-util`
  <br/>
  <br/>
- **Linting**
  <br/>
  `nx lint projectName` or `nx run projectName:lint`
  <br/>
  <br/>
- **Ngrx**
  <br/>
  <br/>
  ***Store***
  <br/>
  `nx generate @ngrx/schematics:store UiState --module=shared-ui.module.ts --statePath=state --project=shared-ui`
  <br/>
  <br/>
  ***Action***
  <br/>
  `nx generate @ngrx/schematics:action state/ui-action --api --skipTests --project=shared-ui`
  <br/>
  <br/>
  ***Reducer***
  <br/>
  `nx generate @ngrx/schematics:userReducer store/store --api --skipTests --reducers=index.ts --project=entryou-app`
------
