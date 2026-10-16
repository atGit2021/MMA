# Met Museum of Art Gallery

## Application Description

The goal of this application is to showcase the artwork available at the Met Museum for Art.
The build plan is to start with the following two core features:

1.  A paginated view of objects
2.  A detailed view of a specific object

Once the core features are completed then the following features will be incorporated:

3. Department filtering
4. Search by Title or Object ID

## Application Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Implementation strategy

The intial two core features will be built using Next.js Server Components utilizing Next.js built in data caching since there is not much user interaction or data state management needs. Once completed, the application behavior, such as pagination, can be reviewed as to whether TanStack Quey caching should be integrated to optimize the more interactive features such as filtering, search and pagination.

In regards to my approach, I like to start with the data access layer in order to get the API integration done first. This allows me to have data to work with as I build out the rest of the application. I then like to wire in the routes and server components and finish with the UI presentation components and styling.

## Running the application

- Install Node.js 20 or later
- Run npm install
- Run npm run dev
- Verify app is running by navigating to http://localhost:3000 in a browser

## Scripts

| Script  | Command         | Description                          |
| ------- | --------------- | ------------------------------------ |
| `dev`   | `npm run dev`   | Start the Next.js development server |
| `build` | `npm run build` | Create a production build            |
| `start` | `npm run start` | Serve the production build           |
| `lint`  | `npm run lint`  | Run ESLint across the project        |

## Project structure

```text
app/                  # Next.js App Router routes and layouts
  artwork/[id]/      # Artwork detail page and not-found UI
  page.tsx            # Paginated gallery home page
components/
  artwork/            # Artwork detail UI
  gallery/            # Gallery grid, cards, and pagination
  page-shell.tsx      # Shared page layout wrapper
lib/met/              # Met Collection API client, types, and helpers
```

## Project status

| Feature                            | Status             |
| ---------------------------------- | ------------------ |
| Paginated view of objects          | Done               |
| Detailed view of a specific object | Done               |
| Department filtering               | Unable to complete |
| Search by title or object ID       | Unable to complete |

I was not able to complete all the functionality in the challenge, but I went over the four hours because I did want to complete at least the two core use cases of displaying a paginated view and the detailed artwork page.
