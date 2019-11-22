### Express
# Express plugin
 echo Install react plugin:
 #yarn add -D @nrwl/express 

 ## Application
 #nx g @nrwl/express:app --help
 echo Add a new express Application

 # Api app
 nx g @nrwl/express:app react --frontendProject=client-react --directory=server
 nx g @nrwl/express:app angular --frontendProject=client-angular --directory=server