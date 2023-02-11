#!/bin/bash
git checkout gh-pages
touch .nojekyll
gh-pages -d dist
