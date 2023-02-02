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
Pinning a single File.
```sh
npm run start -- pinFile ./assets test.json
```

Pinning a directory.
```sh
npm run start -- pinDir ./assets
```

Unpinning CID.
```sh
npm run start -- unpin Qmb1TTYKTyrw3LAVin46eNM2NaBbB3gzFDYDhXTpYNorPW
```

## logger
Actions are recorded in log file.

```
{"level":"error","message":{"function":"unPin","result":{"details":"The current user has not pinned the cid: Qmb1TTYKTyrw3LAVin46eNM2NaBbB3gzFDYDhXTpYNorPW","reason":"CURRENT_USER_HAS_NOT_PINNED_CID"}},"service":"log","timestamp":"2023-02-02T02:43:01.139Z"}
{"level":"info","message":{"function":"pinDir","result":{"IpfsHash":"Qmb1TTYKTyrw3LAVin46eNM2NaBbB3gzFDYDhXTpYNorPW","PinSize":65,"Timestamp":"2023-02-02T02:43:25.626Z"}},"service":"log","timestamp":"2023-02-02T02:43:26.635Z"}
```