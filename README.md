# Deno Oak REST API

This repo was created as an example back-end for: [deno-vue-example](https://github.com/rylancole/deno-vue-example)

## Set-Up 

```
git clone https://github.com/rylancole/deno-oak-rest-api
cd deno-oak-rest-api
```

### Requirements

[Install Deno](https://deno.land/). This can be done with any of the following commands (depending on OS):

```
curl -fsSL https://deno.land/x/install/install.sh | sh  
iwr https://deno.land/x/install/install.ps1 -useb | iex  
brew install deno  
choco install deno  
scoop install deno  
cargo install deno
```

## Run

```
deno run --allow-net --allow-read --allow-write src/app.js
```

### Curl

```
curl http://localhost:8000
```

Should return "Hello World!"

### Browser 

Open http://localhost:8000, and you should see the text "Hello World!"

### Front-End

Try [deno-vue-example](https://github.com/rylancole/deno-vue-example)
