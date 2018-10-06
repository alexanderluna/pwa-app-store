# PWA App Store

This is the repository for a Progressive Web App store. PWAs are web apps that are completely or partially capable of functioning offline. They can be installed by the user on mobile devices and can be very close to native apps. The goal of this open source project is to build a common place ("App Store") for users to search and install PWAs and give common people access this growing development trend.

## Index
1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Bugs](#bugs)

## Installation

```bash
git clone git@github.com:alexanderluna/pwa-app-store.git
cd pwa-app-store

yarn install
yarn start
```

to deploy the app to github pages:

```bash
yarn deploy
```

## Project Structure

As this projects start to grow in complexity in terms of custom components and views I decided upon this project structure to make both debugging and organizing easier.

```bash
tree .
.
├── App.test.js
├── components
│   ├── Card
│   │   └── CardComponents
│   ├── List
│   │   └── ListComponents
│   └── Navigation
│       └── NavigationComponents
├── data
│   └── DataForProject
├── index.js
├── registerServiceWorker.js
├── services
│   └── ApiCalls
├── styles
│   └── App.css
└── views
    ├── Home
    └── About
```

Each Application has the following data structure:

```json
{
  "name": "Example",
  "author": "Alexander",
  "link": "https://github.com/alexanderluna",
  "description": "A lengthy description of what this app does",
  "logo": "https://example.com/app_logo.png",
  "screenshots": [
    "https://example.com/screenshot1.png",
    "https://example.com/screenshot2.png",
    "https://example.com/screenshot3.png"
  ]
}
```
## Bugs
