### React
# React plugin
echo Install react plugin
#yarn add -D @nrwl/react

## Application
#nx g @nrwl/react:app --help
echo Add a new react Application

#React app
nx g @nrwl/react:app react --directory=client --routing --style=styled-components

## Libraries
#nx g @nrwl/react:lib --help
echo Add react libraries

# Feature library
nx g @nrwl/react:lib feature-list --directory=react --appProject=client-react

# Feature details library
nx g @nrwl/react:lib feature-details --directory=react --appProject=client-react

# Ui components library
nx g @nrwl/react:lib ui-components --directory=react

# Data-access react library
nx g @nrwl/react:lib data-access-react --directory=react

# Utils formatter library
nx g @nrwl/react:lib utils-formatter --directory=react

## Components
#nx g @nrwl/react:component --help
echo Add react components

# Ui card component
nx g @nrwl/react:component --project=react-ui-components card --directory=card --export

# Ui game-card component
nx g @nrwl/react:component --project=react-ui-components game-card --directory=game-card --export

# Ui game-placeholder component
nx g @nrwl/react:component --project=react-ui-components game-placeholder --directory=game-placeholder --export

# Data-access use-game component
nx g @nrwl/react:component --project=react-data-access-react use-game --directory=use-game --export

# Data-access use-games component
nx g @nrwl/react:component --project=react-data-access-react use-games --directory=use-games --export