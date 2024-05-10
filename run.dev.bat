@echo off
start cmd /title "dev:server" /k "cd .\server && npm i && npm run dev"
start cmd /title "dev:client" /k "cd .\client && npm i && npm run dev"