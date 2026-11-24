# Run from project root:  .\_lg_update2\apply2.ps1
$ErrorActionPreference='Stop'
$src=$PSScriptRoot; $root=(Get-Location).Path
if (-not (Test-Path (Join-Path $root 'package.json'))) { throw 'Run from project root' }
Get-ChildItem $src -Recurse -File | Where-Object { $_.Name -ne 'apply2.ps1' } | ForEach-Object {
  $rel=$_.FullName.Substring($src.Length).TrimStart('\','/'); $d=Join-Path $root $rel
  New-Item -ItemType Directory -Force -Path (Split-Path $d) | Out-Null
  Copy-Item $_.FullName $d -Force; Write-Host "copied $rel" }
Remove-Item (Join-Path $root '.next') -Recurse -Force -ErrorAction SilentlyContinue
npx tsc --noEmit
if ($LASTEXITCODE -eq 0) { git add -A; git commit -m 'Add DPBI portal insight and PetBoard case study; newest-first ordering' | Out-Null; Write-Host 'OK - run: npx next dev --webpack' -ForegroundColor Green }
