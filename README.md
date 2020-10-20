# Deno Oak REST API

## Set-Up 

```
git clone https://github.com/rylancole/deno-oak-rest-api
cd deno-oak-rest-api
```

### Requirements

[Install Deno](https://deno.land/)

```
brew install deno
```

## Run

```
deno run --allow-net --allow-read --allow-write src/app.js
```

Now you should be running on http://localhost:8000, where you should see the text "Hello World!"

### Curl

```
curl http://localhost:8000
```

Should return "Hello World!"

