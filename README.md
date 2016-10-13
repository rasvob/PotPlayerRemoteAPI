# Micro PotPlayer Remote API

NodeJS (Express) project for basic PotPlayer control over http api calls

## Usage
### First run
Install dependencies using npm
```
npm install
```
### Starting the server
Just run this and you are ready to go
```
npm start
```
> Remember to focus PotPlayer window

## Endpoints
Use GET method for all endpoints

For testing if app is running and reachable use '/' route

### Play/pause
```
/action/pause
```

### Fullscreen
```
/action/fullscreen
```

### Forward (+5s)
```
/action/forward
```

### Backward (-5s)
```
/action/backward
```

/action/forward

