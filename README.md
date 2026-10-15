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

## Running the application

- Install Node.js 20 or later
- Run npm install
- Run npm run dev
- Verify app is running by navigating to http://localhost:3000 in a browser
