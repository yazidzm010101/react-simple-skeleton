# Simple `React + TypeScript` Skeleton
## [0] Why?
These project heavily inspired from my workplace that use TDD+DDD pattern using Next.js, it make each layers of the code has it's own purpose. But, I feel the pattern was too complex for simple-medium scale, prototype, or the speedster timeline projects. So I decided to build my simplified version that was inspired after I read some of MVVP approach. You may read the general explanation [here](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel).

![MVVP](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/MVVMPattern.svg/500px-MVVMPattern.svg.png)


## [1] Getting started
Simply Install the `node_modules` first
```bash
yarn install
```
Run the development server
```bash
yarn run dev
```

Open [http://localhost:5173](http://localhost:5173)

## [2] Understanding the Project Structure
My templates project structure may broken down in to this list:
```bash
├── constants           ["Global static values such as route definition, url definition, etc."]
├── entities            ["Base model to interact within API, or within react context, basically hold most of app Interface"]
├── repositories        ["This the  data source/controller of the app"]
├── presentation        ["This is the view model of app, contains init, loading, success, error state implementation as data consumer"]
├──────────────────────
├── hooks               ["Reusable hooks that's act independent to consumed data, typically used to define UI helper such as useClickOutside, useWindowScroll, etc"]
├── assets              ["All static assets should be defined here"]
├── ui
│   ├── components      ["Holds library components"]
│   └── features        ["Holds UI separated per feature"]
├──────────────────────
├── App.tsx             ["Root of the app, use to declare route, and others library global context"]
└── main.tsx            ["Injector to react DOM"]
```

## [3] Building to Production
1. Make sure to use your own `.env` production
```plaintext
VITE_EXAMPLE_API_URL=https://pokeapi.co/api/v2/
```
2. Build the project
```bash
yarn run build
```
By running this command will generate compiled project to `./dist`, you can deploy the object to your hosted server

## [4] Use Case
Here is the use case of the skeleton:
- `USE` if you want to build small-medium scale app
- `USE` if you rely more on contract testing instead of unit testing, OR you dont have much time to actually test this code internally (maybe there are other teams that do contract testing or end-user testing (QA)). Since i don't write any unit test example in this skeleton.
- `USE` if you want to separate data fetch logic into it's own layer as much as possible, this skeleton provide custom hooks example and presentation context to share data fetch states accross component
- `USE` if you dont'care about SEO, since this skeleton built on top react-router and react-hooks. It applicable to dashboard application or some mini porto to show off your skills.
- `DON'T USE` if you care about SEO or rendering server component, you may want to use different approach such as skeleton from Next.js or Remix
- `DON'T USE` if you care about unit test and you have excessive paranoid level, excessive time, and excessive money from your manager to care for each code testability
- `RECOMMENDED` to use customizable UI library such as [shadcn/ui](https://ui.shadcn.com/) or [ChakraUI](https://www.chakra-ui.com/).
- `RECOMMENDED` to maximize use of `presentation hooks` and `react-form-hooks` to manage data fetch and data controller logic in each features.
- `RECOMMENDED` to use `axios` for API fetching

## [5] Happy coding :tada:!
Well, you've reach to the end of this page, thankyou for visiting and feel free to ask me if you have any question.

~ [mujadid](mailto:yazidzm.developer@gmail.com)