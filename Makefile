SHELL := /bin/bash -euo pipefail
PATH := node_modules/.bin:$(PATH)

.DELETE_ON_ERROR:

node_modules: package.json
	npm prune
	npm install
	touch $@

.PHONY: clean
clean:
	rm -rf node_modules

.PHONY: lint
lint: node_modules
	jshint .
