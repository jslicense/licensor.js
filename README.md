Generate LICENSE and related files from `package.json`.

At the command line:

```bash
npm --global install licensor
cd your-package
licensor
```

Licensor assumes:

1. The person described by `package.json`'s `author` field is the
   copyright owner and licensor.

2. The package was created in the current calendar year.
