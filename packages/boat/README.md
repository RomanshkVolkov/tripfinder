# TripFinder Boat Documentation

## Introduction

Fastest E-commerce template built with `React`, `NextJS`, `TypeScript` and `Tailwind CSS`. It's very easy to use, we used `static` data. You can setup your api endpoint's very easily and your frontend team will love using it.

## Requirements

- node(20.9.0 or later)
- pnpm(version 9.5.0)
- editor: Visual Studio Code(recommended)

## Tech We Have Used

Tech specification for this template is given below

- [React](https://reactjs.org/)
- [NextJs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started & Installation

For getting started with the template you have to follow the below procedure. First navigate to the `boat` directory.

### Step 1 : Configure your env file

Within the project directory you'll find a `.env.example` file just rename it as `.env.local`.

** NOTE : ** This file contain `env values` for local development but when you want to use this template for your needs you need to replace this value with `your own real API endpoint`.

** NOTE : ** To get the map in development mode, go to your `.env.local` file and put your google map api key there like `NEXT_PUBLIC_GOOGLE_API_KEY= put your api key`

<br/>

### Step 2 : Running the project

Run below command for getting started with this template.

```bash
# on tripfinder or in root directory
$ pnpm install

$ pnpm start:boat
# which will running the boat template for development
```

If you want to test your production build in local environment then run the below commands.

```bash
# build for production
pnpm build:boat

#start template in production mode
pnpm serve:boat
```

## Folder Structure & Customization

- To setup you site's basic information like **[Logo,Site title,Description etc]** go to -> `boat/src/app/layout.tsx` file
- To customize tailwind configuration go to -> `tailwind.config.js` file .
- `/public`: This folder contains `all the static data` used in this project.
- `/src/app`: This folder contains all the pages and layouts.
- `/src/components`: This folder contains all the template related ui components.
- `/src/components/ui`: This folder contains all the common sections related components.
- `/src/contexts`: This folder contains all necessary context for this template . Like `modal, drawer, gallery` etc.
- `/src/styles`: Overwrites some third party packages CSS files and our custom CSS in the `global.css` file.
- `/src/hooks` : This folder contains `hooks` etc.
- `/src/config` : This folder contains `routes, api-endpoints, constants` etc.
- `/src/pages` : This folder contains `404.tsx` file for not found or unmatching routes.
- `/src/types` : This folder contains common used types arround this project.

<br/>
<br/>
<br/>
