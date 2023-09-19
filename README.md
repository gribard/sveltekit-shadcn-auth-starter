<p align="center">
 <img align="center" src="https://raw.githubusercontent.com/huntabyte/shadcn-svelte/main/apps/www/static/android-chrome-192x192.png" height="96" />
 <h1 align="center">
  sveltekit-shadcn-auth-starter
 </h1>
</p>

![hero](/static/auth.png)

This is a SvelteKit starter project with basic user authentication functionality using [Lucia](https://lucia-auth.com/), Prisma, Zod, SuperForms and PostgreSQL:

1. Signin and Signup
2. Mail verification
3. Password reset
4. Profile Page
5. If the user changes their email, send an email to re-verify it.

Additional Feeatures:

1. i18n through [https://inlang.com/](https://inlang.com/)

# Develop

I have commented out the email functionality in `src/lib/server/email-send.ts` for testing purposes.

## Minimal Setup

1. Start a docker container with postgreSQL
    ```
    docker run -d \
    --name mypostgresdb \
    -e POSTGRES_PASSWORD=mysecretpassword \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    -p 5432:5432 \
    postgres
    ```
2. Rename `sample.env` from the root directory to `.env` and edit the POSTGRES_PRISMA_URL:
    ```
    POSTGRES_PRISMA_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"
    ```
3. Install dependencies
    ```
    pnpm i
    ```
4. Run initial Prisma migration
    ```
    npx prisma migrate dev --name init
    ```
5. Start the app
    ```
    pnpm run dev
    ```
6. Create an account

    6.1 Go to [http://localhost:5173/](http://localhost:5173/) and create an account. After clicking the "Sign up" button you will be redirected to the Email Confirmation Page.

    6.2 If you haven't configured the nodemailer in the .env file, open Prisma Studio:

    ```
    npx prisma studio
    ```

    go to the AuthUser table and set the verified field to true. Save.

    6.3 go back to the Email Confirmation Page and refresh. You should be logged in into your account now.

# Credits

This project is based on 2 wonderful projects [shadcn-svelte](https://www.shadcn-svelte.com/) and [sveltekit-auth-starter](https://github.com/delay/sveltekit-auth-starter). Thank you @huntabyte, @delay and @shadcn!

## Documentation

Visit https://shadcn-svelte.com/docs to view the documentation of the UI components.

Visit https://github.com/delay/sveltekit-auth-starter to view more documentation on authentication components.

## License

Licensed under the [MIT license](https://github.com/gribard/ui/blob/main/LICENSE.md).
