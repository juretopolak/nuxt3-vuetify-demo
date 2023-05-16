# Vuetify active class problem with two list menus

## Issue
When using two menus, active class of current item in `main menu` is not disappearing when clicking on item in another `user menu`. If clicking continuously on one and another (ex.: Home > User settings > Home User settings) the active class of Home disappears only every second-time.

When clicking "User settings" which is opening /user/edit (in another menu), the active main menu class is not disappearing.

For example:

1. Click on Home, click on User settings -> Home active class still visible.
2. Click on Home, click on User settings -> Home active class is gone.
3. Click on Home, click on User settings -> Home active class still visible.
4. Click on Home, click on User settings -> Home active class is gone.

Expected behavior:

When clicking on a menu item in another menu, the active class of the current item should always be gone (unless both items have the same URL path).

## Fix

When using `v-menu > v-list > v-list-item` for routing, to and value props should not be used together. Removing value prop solved the issue.

---

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```