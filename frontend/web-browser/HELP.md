# Help

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
