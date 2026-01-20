# Makefile

# make init
init:
	bun install
	bun husky
	bunx changeset init

# make build
build:
	bun run build

# make buildDocker TAG=v0.0.9
buildDocker:
	docker build . -t gforce:${TAG} -f docker/Dockerfile

# make buildDockerDevelopment TAG=dev-v0.0.9
buildDockerDevelopment:
	docker build . -t gforce:${TAG} -f docker/Dockerfile.development

# make buildDockerProduction TAG=v0.0.9
buildDockerProduction:
	docker build . -t gforce:${TAG} -f docker/Dockerfile.production

# make buildDockerStaging TAG=stg-v0.0.9
buildDockerStaging:
	docker build . -t gforce:${TAG} -f docker/Dockerfile.staging

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
