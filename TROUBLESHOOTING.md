# Troubleshooting instructions

## Something went wrong installing the "sharp" module

Given you run `npm start`, `npm run develop` or `gatsby develop`, when you find this on Terminal:

```
Something went wrong installing the "sharp" module

Module did not self-register.
```

1. Check if you are running Node version 10.13.0 or higher (12.14.1 or higher is recommended);
2. If you are using `nvm`, change to a higher version (e.g. `nvm use 12`);
3. Delete sharp directory with `rm -rf node_modules/sharp/`
4. Call `npm install`;
5. Run `npm start`, `npm run develop` or `gatsby develop`.
