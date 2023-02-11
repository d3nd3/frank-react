#!/bin/bash
git checkout gh-pages || exit 1
#touch .nojekyll
gh-pages -d dist
