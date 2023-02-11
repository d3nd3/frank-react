#!/bin/bash
git checkout gh-pages || echo 'unable to deploy' && exit 1
touch .nojekyll
gh-pages -d dist
