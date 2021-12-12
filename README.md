# Marvel Search application
A Marvel Heroes search app

## How to start the app
You'll need:
- a Marvel Developer API key (public and private keys). [You can have one here](https://developer.marvel.com/).
- A Docker daemon running as the app is packaged with it
- A working internet connection

The app starts with the following command:

`docker run -e MARVEL_PUBLIC_KEY=<your public key> -e MARVEL_PRIVATE_KEY=<your private key> -p 3000:3000 -ti xgourmandin/marvel`

When the app is started, go to [localhost:3000](http://localhost:3000)

## Code organisation
This app is composed of a backend in NodeJS using NestJS framework and a frontend using Vue 2
### Backend
The backend code organisation is inspired by the [Hexagonal Architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)) with some adaptation due to the project size.

Each use case (search for heroes and search for comics a hero appears in) is separated in two 'packages': usecase and adapter.
No entity package has been created because this app does not contain entities with business rules.

This software architecture allows for great modularity of each component, ensuring that the use case code does not depend on the infrastructure being used.

In this case, the only adapters implemented are the one which calls the Marvel API directly. One can implement new ones (like querying a database for example) without any impact on other parts of the code.

### Frontend

The frontend is basically a Vue application. It mainly uses two libraries:
- Vuetify : A component library to ease the display of data 
- Vuex : A state management library to maintain the frontend data state