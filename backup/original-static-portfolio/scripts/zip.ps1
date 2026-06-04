# Zip the site into d:\project\vandan-deploy.zip
$source = "d:\project\vandan\*"
$dest = "d:\project\vandan-deploy.zip"
if (Test-Path $dest) { Remove-Item $dest -Force }
Compress-Archive -Path $source -DestinationPath $dest -Force
Write-Output "Created $dest"