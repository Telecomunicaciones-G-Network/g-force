# Makefile

# make init
init:
	bun install
	bun husky
	bunx changeset init

# make build
build:
	bun run build

# make buildDockerDevelopment TAG=dev-v0.0.9
buildDockerDevelopment:
	docker build . -t gforce:${TAG} -f docker/Dockerfile.development

# make clean
clean:
	bun clean

# make check
check:
	bun typecheck
	bun lint
	bun security:scan

# make format
format:
	bun format

install:
	bun install

# make upgradePackages
upgradePackages:
	ncu -u
	bun install

# make upgradeVersion
upgradeVersion:
	bunx changeset add
	bunx changeset version
	bunx changeset publish
