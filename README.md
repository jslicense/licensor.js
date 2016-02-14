Generate LICENSE and related files from `package.json`.

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
