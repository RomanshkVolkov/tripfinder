# Introduction

## TripFinder. - A React Next Rental and Listing Template

This template built with React, NextJS, TypeScript, Styled-Components, HeadlessUI, TailwindCSS, Google Map API, & AntDesign. It's a very easy to use template, comes with ready made beautiful components, those helps you to build your amazing react next js application.

#### Demo Link:

- https://tripfinder-boat.vercel.app/
- https://tripfinder-hotel.vercel.app/

#### Support Link: https://redqsupport.ticksy.com/

<br>

# Getting Started

After downloading the file from ThemeForest, You will find tripfinder.zip file. Unzip the tripfinder.zip and Follow the Installation guideline.

<br>

## Installation

Make sure you have **Node** & **pnpm** installed in your system. Recommended node version >=v20.9.0 and pnpm latest. You check your ones by running these commands-

```
node -v

pnpm -v
```

If it's not installed in your system then please install them by checking official documentation of,

1. https://nodejs.org/en/
2. https://pnpm.io/installation

> ### Before starting the project, you need to configure the .env.local file for the every one of our packages.

<br/>

## Configuration

### Hotel

For configuring hotel package, go to `packages/hotel/` and create `.env.local` file and configure it with your information in the `.env.local` file.

```
VITE_APP_GOOGLE_MAP_API_KEY=YOUR_GOOGLE_MAP_API_KEY
```

### Hotel Next

After creating a `.env.local` file at the root of the hotel-next directory then copy and paste below env variables and replace those variable values with your information.

```
NEXT_PUBLIC_REACT_APP_GOOGLE_MAP_API_KEY=https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY
NEXT_PUBLIC_SERVER_API=YOUR_SERVER_API_ENDPOINT
```

You can add `http://localhost:3001/` as your NEXT_PUBLIC_SERVER_API endpoint.

### Boat

Please read the README.md file to configure the Boat package

## Start the project

After all the configurations, Install Package dependency by running below command at the root directory `TripFinder` to get started with the project,

```
pnpm install
```

For starting **development server** run the below command at the root directory
For hotel you need to run,

```
pnpm start:hotel
```

For hotel-next you need to run,

```
pnpm start:hotel-next
```

For boat you need to run,

```
pnpm start:boat
```

For starting **production server** run the below command at the root directory
For hotel you need to run,

```
pnpm build:hotel
```

For hotel-next you need to run,

```
pnpm build:hotel-next
```

For boat you need to run,

```
pnpm build:boat
```
