#!/usr/bin/env sh

# abort on errors
set -e
rm -rf dist
# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<huynhkhanh226>.github.io
#git push -f git@github.com:<huynhkhanh226>/<huynhkhanh226>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:huynhkhanh226/dhr2020.git master:gh-pages
read
