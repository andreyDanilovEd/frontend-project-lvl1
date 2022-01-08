
install: 
	npm ci
brain-games:	
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	node bin/brain-even.js
round3:
	node src/round3.js
