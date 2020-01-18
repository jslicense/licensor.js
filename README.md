Generate LICENSE, related files, and headers from `package.json`.

At the command line:

```bash
npm --global install licensor
cd your-package
licensor --width 72
```

Licensor assumes:

1. The person described by `package.json`'s `author` field is the
   copyright owner and licensor.

2. The package was created in the current calendar year.

3. All `*.js` source files, except those in `node_modules`, are the
   author's work.

 > Note: Running `npm audit --only=dev` will report security vulnerabilities due to dev dependencies of the [tap](https://www.npmjs.com/package/tap) test library. The project requires version `10.7.2` to support Node versions 4 to 8, which are incompatible with newer releases, which as of January 18, 2020 is version 14.10.6. Running `npm audit --production` should report no vulnerabilities.
