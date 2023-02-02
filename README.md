# Pinata script
This repo makes pinata sdk easier to use.

## Environments Setting
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