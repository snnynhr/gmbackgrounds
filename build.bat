rmdir build /S /Q
mkdir build
CD build/
mkdir js
mkdir util
mkdir backgrounds
mkdir icons
CD ..
XCOPY util\jquery.min.js build\util
XCOPY manifest.json build
XCOPY backgrounds\* build\backgrounds
XCOPY icons\* build\icons
call compile\minifyjs.bat
call compile\update_crx.bat
call compile\zip.bat
move gmbackgrounds.zip "build/gmbackgrounds.zip"
move gmbackgrounds.crx "build/gmbackgrounds.crx"