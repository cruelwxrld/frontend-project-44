install:
		npm ci
start:
		node bin/brain-games.js
		npm link
publish:
		npm publish --dry-run		
