## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Issue

When clicking "User settings" which is opening /user/edit (in another menu), the active main menu class is not disappearing.

For example:

1. Click on Home, click on User settings -> Home active class still visible.
2. Click on Home, click on User settings -> Home active class still gone.
3. Click on Home, click on User settings -> Home active class still visible.
4. Click on Home, click on User settings -> Home active class still gone.

Expected behavior:

When clicking on a menu item in another menu, the active class of the current item should always be gone (unless both items have the same URL path).