# FunctionApps
Used to develop Function As A Service Apps in support of Alpha.CA.gov.

## Deployment

- The api.alpha.ca.gov domain is used to point at the ```FA-GO-ALPH-D-002``` Azure FAAS
- Code changes checked into master are also automatically deployed to ```FA-GO-ALPH-D-001``` Azure FAAS automatically but there is no subdomain in use there

# Setup 
## Install "Azure Functions" Extention
Id: ms-azuretools.vscode-azurefunctions
Publisher: Microsoft
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions

## Install Azure Functions Core Tools
- https://github.com/Azure/azure-functions-core-tools#installing

### HomeBrew Installation (For Debugging)
- /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
- brew tap azure/functions           
- brew install azure-functions-core-tools@3                                                         

# Reference
## Azure Javascript Reference
- https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node

## Running Production Service
- https://fa-go-alph-d-001.azurewebsites.net/ConnectionTest

## Postman Documentation
- https://documenter.getpostman.com/view/9918160/SWLb8Uep

## Github Repo
- https://github.com/cagov/FunctionApps
