### Angular
# Angular plugin
echo Install angular plugin:
#yarn add -D @nrwl/angular

## Application
#nx g @nrwl/angular:app --help
echo Add a new angular application:

# Angular app
nx g @nrwl/angular:app angular --directory=client --routing --style=scss

## Libraries 
#nx g @nrwl/angular:lib --help
echo Add angular libraries:

# Feature list library
nx g @nrwl/angular:lib feature-list --directory=angular --routing --parentModule=apps/client/angular/src/app/app.module.ts --lazy --style=scss

# Ui components library
nx g @nrwl/angular:lib ui-components --directory=angular --style=scss

# Data-access angular library
nx g @nrwl/angular:lib data-access-angular --directory=angular --style=scss

#Utils formatter library
nx g @nrwl/angular:lib utils-formatter --directory=angular --style=scss

## Components
#nx g @nrwl/angular:component --help
echo Add angular components:

# Feature list component
nx g @nrwl/angular:component games-list --project=angular-feature-list

# Ui card component
nx g @nrwl/angular:component card --project=angular-ui-components --export

# Ui game-card component
nx g @nrwl/angular:component game-card --project=angular-ui-components --export

## Services
#nx g @nrwl/angular:service --help
nx g @nrwl/angular:service angular --project=angular-data-access-angular

## Pipes
#nx g @nrwl/angular:pipe --help
nx g @nrwl/angular:pipe game-date --project=angular-utils-formatter --export

