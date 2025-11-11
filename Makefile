# Makefile

# make init
init:
	bun install
	bun husky
	bunx changeset init

# make build
build:
	bun run build

# make check
check:
	bun typecheck
	bun lint
	bun security:scan

# make format
format:
	bun format

# make upgradePackages
upgradePackages:
	ncu -u
	bun install

# make upgradeVersion
upgradeVersion:
	bunx changeset add
	bunx changeset version
	bunx changeset publish
