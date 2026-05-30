@echo off
cd /d "%~dp0"
echo Namecard site running at http://127.0.0.1:8000
echo Keep this window open while viewing the page.
node server.mjs
pause
