# Simple `React + TypeScript` Skeleton
These project heavily inspired from my workplace that use TDD+DDD pattern, but I feel it's pattern too complex for simple-medium scale apps or prototype level app. So I decided to build my simplified version that mimicks MVVP approach. You may read the general explanation [here](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel).

![MVVP](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/MVVMPattern.svg/500px-MVVMPattern.svg.png)


## 1. Getting started
Simply Install the `node_modules` first
```bash
yarn install
```
Run the development server
```bash
yarn run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 2. Understanding the Project Structure
My templates project structure may broken down in to this list:
```bash
├── App.tsx: ["Root of the app, use to declare route, and others library global context"]
├── main.tsx: ["Injector to react DOM"]
├── assets: ["All static assets should be defined here"]
├── constants: ["Global static values such as route definition, url definition, etc."]
├── entities: ["Base model to interact within API, or within react context, basically hold most of app Interface"]
├── hooks: ["Reusable hooks that's act independent to consumed data, typically used to define UI helper such as useClickOutside, useWindowScroll, etc"]
├── presentation: ["This is the view model of app, contains init, loading, success, error state implementation as data consumer"]
├── repositories: ["This the  data source/controller of the app"]
└── ui
    ├── components: ["Holds library components"]
    └── features: ["Holds UI separated per feature"]
```

## 3. Build to Production
1. Make sure to use your own `.env` production
```plaintext
VITE_EXAMPLE_API_URL=https://pokeapi.co/api/v2/
```
2. Build the project
```bash
yarn run build
```
By running this command will generate compiled project to `./dist`, you can deploy the object to your hosted server

## 4. Happy coding :tada:!
Feel free to e-mail me yazidzm.developer@gmail.com, if you have any question