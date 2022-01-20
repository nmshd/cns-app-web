set -e
set -x

npm ci
npm run lint:prettier
npm run lint:eslint
npx license-check --ignoreLicenses "(MIT OR GPL-3.0-or-later)"
npx better-npm-audit audit --exclude 1004876,1006883,1006886
