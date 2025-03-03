# It's been a while, huh?

So, you haven't updated anything on the website in a bit and you forgot how to debug or deploy your changes?

To debug changes:

- 'cd' into the 'website' directory
- run 'npm run start' to serve the non-production build
  - this debug build is reactive (React, duh) and reloads on file save

To prepare the production build:

- 'cd' into the 'website' directory if you haven't already
- run 'npm run build' to create the production build
- then run 'serve -s build' to serve a local production build preview on '<http://localhost:3000>'

To deploy the production build:

- run 'firebase deploy' to push the production build online
