set ext=%CD%
set key=%CD%.pem
DEL gmbackgrounds.crx
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --pack-extension="%ext%\build" --pack-extension-key="%key%"
rename "%CD%\build.crx" gmbackgrounds.crx