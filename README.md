This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# nextjs-portfolio

## To Do
    1)X  Add blog details and links
    2)X  Page Animations
    3)X  A second line with animation under 'keith' logo
    4)X  Add spacing between Project Cards
    5)X  Add Line around Project Cards
    6)X  Remove Underline hover on Project Cards
    7)X  'p' tags cannot appear inside 'ul' tags
    8)X  Make Cards for Blogs.
    9)X  Blog Card Link space is too big.
    10)X Add a seperate Card - Blog Component with blogs objects.
    11). Start Footer
    12). Add see more text with opacity.
    13). Create ListItem Component for each Items
    14). Text Darker and Larger.
    15). Highlight Active Page Name Backgroundcolor in Header

## Fixes
    1) From https://github.com/vercel/next.js/issues/17464
    
    <!-- Start Of Fix
    import Router from "next/router";

    const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
        });
    };
    tempFix();
    };

    Router.events.on("routeChangeComplete", routeChange );
    Router.events.on("routeChangeStart", routeChange );
    // End Of Fix -->