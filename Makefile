install:
		npm ci
setup:
		npm link
brain-games:
		node bin/brain-games.js
brain-even:
		node bin/brain-even.js	
publish:
		npm publish --dry-run	
lint-fix:
		npx eslint			
