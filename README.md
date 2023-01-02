
# Lendsqr Frontend task

This is a demo poject built with react, typescript and sass. The project utilizes modern web development practices


## Installation

Make sure you have yarn installed, to successfully install the dependencies

#### Step1: Clone the project

```bash
  git clone https://github.com/RehkMansa/lendsqr-frontend-task.git
  
  cd  lendsqr-frontend-task
```

#### Step2: Install packages with yarn or npm

```bash
  yarn  or npm i
```

#### Step3: Start the project

```bash
  yarn  start or npm start
```


## Scripts

#### Check lint

```bash
  yarn lint or npm run lint
```

#### Fix lint errors

```bash
  yarn lint:fix or npm run lint:fix
```

#### Check files with prettier

```bash
  yarn prettier or npm run prettier
```

#### Format files with prettier

```bash
  yarn prettier:fix or npm run prettier:fix
```

## Folder structure
The Project's folder structure is arranged in the following order:
- The src folder which contains all the code files
- Assets folder which contains images and icons
- Components which contains Layout files and High Order Components, Individual components called Elements e.g Input and Button, and Reusable repeating components called Block e.g Sidebar and Header
- Hooks folder contains custom hooks: useFetch and useOnclickOutside
- Pages contains the different pages: the login, and user details page
- Routes contains the route definition for each page, this helps organize the different routes in one location
- styles folder containing global and utility stylesheets
- Types folder containing type definitions
- utils folder which contains different helper functions used across different parts of the application

## Project Stack
The project uses React, Typescript, Sass, React-router-dom for routing and css modules for styling 