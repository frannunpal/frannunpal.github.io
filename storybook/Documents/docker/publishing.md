# Publishing to GitHub Container Registry

This guide explains how to publish the production Docker image to GitHub Container Registry (ghcr.io).

## Prerequisites

### 1. Personal Access Token (PAT)

You need a GitHub Personal Access Token with `write:packages` scope.

**Create a PAT:**

1. Go to https://github.com/settings/tokens/new?scopes=write:packages
2. Set a name (e.g., "Docker Publish")
3. Ensure `write:packages` scope is selected
4. Generate and save the token securely

### 2. Docker Authentication

Before publishing, authenticate Docker with GitHub Container Registry:

```bash
# Using your PAT
echo YOUR_PAT | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
```

## Publishing

### Quick Start

```bash
bun run publish
```

### Interactive Flow

The script will guide you through the process:

1. **Authentication Check**: Verifies if you're logged in to ghcr.io
   - If not authenticated, prompts for PAT

2. **Build**: Builds the production image with your UID/GID

   ```bash
   UID=$(id -u) GID=$(id -g) docker compose build prod
   ```

3. **Tag Selection**: Prompts for the image tag

   ```
   Enter the tag for this image: v0.2.0
   ```

4. **Push**: Tags and pushes the image to ghcr.io

   ```bash
   docker tag fde-desktop-prod ghcr.io/frannunpal/fde-desktop:v0.2.0
   docker push ghcr.io/frannunpal/fde-desktop:v0.2.0
   ```

5. **URL**: Displays the package URL on GitHub

### Tag Conventions

| Pattern     | Example      | Use Case                   |
| ----------- | ------------ | -------------------------- |
| `latest`    | `latest`     | Latest stable release      |
| Version     | `v0.2.0`     | Release versions           |
| Pre-release | `v0.2.0-rc1` | Release candidates         |
| Date-based  | `2024-01-15` | Nightly/development builds |

### Examples

```bash
# Publish as latest
bun run publish
# Enter: latest

# Publish a version
bun run publish
# Enter: v0.2.0

# Publish a release candidate
bun run publish
# Enter: v0.2.0-rc1
```

## Manual Publishing (Advanced)

If you need more control, you can publish manually:

```bash
# 1. Build production image
UID=$(id -u) GID=$(id -g) docker compose build prod

# 2. Tag the image
docker tag fde-desktop-prod ghcr.io/frannunpal/fde-desktop:YOUR_TAG

# 3. Push to ghcr.io
docker push ghcr.io/frannunpal/fde-desktop:YOUR_TAG
```

## OCI Labels

The production image includes OCI labels for automatic repository linking:

| Label                                  | Value                                                     |
| -------------------------------------- | --------------------------------------------------------- |
| `org.opencontainers.image.source`      | https://github.com/frannunpal/fde-desktop                 |
| `org.opencontainers.image.description` | FDE Desktop Environment - A web-based desktop environment |
| `org.opencontainers.image.licenses`    | MIT                                                       |

These labels are defined in `docker/Dockerfile` in the production stage.

## Viewing Published Images

After publishing, view your images at:

```
https://github.com/frannunpal/fde-desktop/pkgs/container/fde-desktop
```

## Pulling Published Images

### Pull by Name (latest)

```bash
docker pull ghcr.io/frannunpal/fde-desktop:latest
```

### Pull by Version

```bash
docker pull ghcr.io/frannunpal/fde-desktop:v0.2.0
```

### Pull by Digest (immutable)

```bash
# Find digest
docker inspect ghcr.io/frannunpal/fde-desktop:v0.2.0

# Pull by digest
docker pull ghcr.io/frannunpal/fde-desktop@sha256:YOUR_DIGEST
```

## Running with Docker Compose

For users who want to run fde-desktop without building it locally, use `docker-compose.ghcr.yml`:

```bash
# Run with default tag (hola)
docker compose -f docker-compose.ghcr.yml up

# Run with a specific tag
IMAGE_TAG=v0.2.0 docker compose -f docker-compose.ghcr.yml up

# Run with latest
IMAGE_TAG=latest docker compose -f docker-compose.ghcr.yml up
```

This downloads the pre-built image from ghcr.io and starts the application.

### Available Tags

Check available tags at: https://github.com/frannunpal/fde-desktop/pkgs/container/fde-desktop/versions

## Permissions

### Private vs Public

By default, packages inherit visibility from the repository. To change:

1. Go to https://github.com/frannunpal/fde-desktop/pkgs/container/fde-desktop/settings
2. Change visibility to Public or Private

### Access Control

For fine-grained permissions:

1. Go to package settings
2. Add collaborators or teams
3. Set permission levels (Read, Write, Admin)

## Troubleshooting

### Authentication Failed

```bash
# Error: denied: permission_denied
# Solution: Re-authenticate with valid PAT
echo YOUR_PAT | docker login ghcr.io -u YOUR_USERNAME --password-stdin
```

### Image Already Exists

```bash
# To overwrite, you need write permissions
# Or use a different tag
```

### Build Fails

```bash
# Rebuild with no cache
docker compose build --no-cache prod
```

### Push Takes Too Long

Large images take time. The production image includes:

- Compiled framework
- Storybook
- Server bundle
- Dependencies for apps watcher

## Multi-Architecture Publishing (amd64 + arm64)

The project now supports building Docker images for **linux/amd64** and **linux/arm64** using Docker Buildx with QEMU emulation.

### Automatic CI/CD Publishing

The `release.yml` workflow includes a `docker-publish` job that automatically builds and publishes multi-arch images on every release:

- **Docker Buildx**: Creates a builder instance with QEMU for cross-platform builds
- **docker/metadata-action**: Generates automatic tags (`vX.Y.Z`, `X.Y`, `latest`)
- **GHA Cache**: Caches build layers for faster subsequent builds
- **GHCR**: Publishes to `ghcr.io/frannunpal/fde-desktop`

```yaml
# Key steps in release.yml docker-publish job
- name: Set up QEMU
  uses: docker/setup-qemu-action@v3

- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v3

- name: Build and push
  uses: docker/build-push-action@v6
  with:
    context: .
    platforms: linux/amd64,linux/arm64
    push: true
    tags: ${{ steps.meta.outputs.tags }}
    cache-from: type=gha
    cache-to: type=gha,mode=max
```

### Manual Multi-Arch Publishing

Use the updated `scripts/docker-publish.sh` script:

```bash
# Build and push multi-arch image
./scripts/docker-publish.sh v0.4.26
```

The script:

1. Sets up Docker Buildx with QEMU
2. Creates/uses a builder instance named `fde-builder`
3. Builds for `linux/amd64,linux/arm64`
4. Tags and pushes with the provided version tag

### Pulling Multi-Arch Images

Docker automatically selects the correct architecture:

```bash
# On amd64 — pulls amd64 image
docker pull ghcr.io/frannunpal/fde-desktop:latest

# On arm64 (Mac Apple Silicon) — pulls arm64 image
docker pull ghcr.io/frannunpal/fde-desktop:latest
```

### Mac ARM with Podman

The `arm64` image runs natively on Apple Silicon without Rosetta using Podman:

```bash
podman pull ghcr.io/frannunpal/fde-desktop:latest
podman-compose -f docker-compose.ghcr.yml up
```

## CI/CD Integration

For automated publishing in GitHub Actions:

```yaml
# .github/workflows/publish.yml
name: Publish Docker Image

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Login to ghcr.io
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build image
        run: docker compose build prod

      - name: Push image
        run: |
          docker tag fde-desktop-prod ghcr.io/frannunpal/fde-desktop:${{ github.event.release.tag_name }}
          docker push ghcr.io/frannunpal/fde-desktop:${{ github.event.release.tag_name }}
```

## Related Documentation

- [Production Deployment](./production.md)
- [Docker Architecture](./architecture.md)
- [Docker README](./README.md)
