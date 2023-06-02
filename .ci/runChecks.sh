set -e
set -x

npm ci
npm run lint:prettier
npm run lint:eslint
npx license-check --ignoreLicenses "(MIT OR GPL-3.0-or-later OR BlueOak-1.0.0)"
npx better-npm-audit audit --exclude 1091725
