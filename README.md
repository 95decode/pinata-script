# Pinata script
This repo makes pinata sdk easier to use.

## Environments Setting
Visit the [Pinata API Keys](https://app.pinata.cloud/keys) page to generate new keys.

```sh
cd pinata-script
cp .env.example .env
vi .env
```

## Usage
Pinning a single File
```sh
npm run start -- pinFile ./assets test.json
```

Pinning a directory
```sh
npm run start -- pinDir ./assets
```

Unpinning
```sh
npm run start -- unpin Qmb1TTYKTyrw3LAVin46eNM2NaBbB3gzFDYDhXTpYNorPW
```