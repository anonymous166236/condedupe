# Summary

This project is a mock UI application for a movie streaming website. It utilises the [TMDB API] to display the data. User can browse three different categories and view details of any movie in that category.

Application is server side rendered for better SEO and page loads. Temporarily, it utilises `sessionStorage` for storing wishlist data.

Following are some features implemented:

- Responsive design.
- Route wise code splitting JS files.
- Lazy load wishlist component to keep the bundle even smaller.
- Memoized header component.
- Sharable movie details page.
- External fonts for different fonts based on movie genre.
- Session storage to store wishlist data.
- Lazy loading movie-thumbnails which aren't in the carousel view.
- Lazy loading poster image in description page.

## Improvements Required

- Movie IDs can be hashed before making the URL.
- Route based CSS splitting in future when all the "beautification" CSS will be added. ([custom config])
- Beautification <3.
- Testing. Although I believe the project struture and modularisation is fairly testable, there is not enough test coverage at the moment. For eg. utilities can be unit tested, visual regression testing for different dimensions of screen, etc.
- Some loading animations would help improve the percieved performance.

## Installation

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/odus-ex/movie-streaming-client.git
```

Create a file in root of the folder with name `.env.local`

Add your TMDB API key in `.env.local` as `TMDB_key=<<your api key>>`

```sh
npm i
npm run dev
...starts on port 3000
```

For production builds:

```sh
npm run build
npm run start
....starts on port 8899
```

## [Live Demo]

[tmdb api]: https://developers.themoviedb.org/3/
[live demo]: https://movie-client-pi.vercel.app
[custom config]: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
