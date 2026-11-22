# apply.ps1 - applies the complete Legal Galaxy update (sea-green theme + content fixes) in one go.
# Run from your PROJECT ROOT (E:\data-protection-galaxy):
#   Expand-Archive .\legal-galaxy-complete.zip -DestinationPath .\_lg_update -Force
#   powershell -ExecutionPolicy Bypass -File .\_lg_update\apply.ps1
$ErrorActionPreference = 'Stop'
$src  = $PSScriptRoot
$root = (Get-Location).Path
$utf8 = New-Object System.Text.UTF8Encoding($false)

if (-not (Test-Path (Join-Path $root 'package.json'))) { throw 'Run this from the project root (package.json not found).' }

Write-Host '1/6  Git branch' -ForegroundColor Cyan
if (Test-Path (Join-Path $root '.git')) {
  $branch = (git rev-parse --abbrev-ref HEAD).Trim()
  if ($branch -ne 'sea-green-theme') { git checkout -b sea-green-theme }
  git add -A; git commit -m 'checkpoint before sea-green update' --allow-empty | Out-Null
}

Write-Host '2/6  Copying files' -ForegroundColor Cyan
Get-ChildItem -Path $src -Recurse -File | Where-Object { $_.Name -ne 'apply.ps1' } | ForEach-Object {
  $rel = $_.FullName.Substring($src.Length).TrimStart('\','/')
  $dest = Join-Path $root $rel
  New-Item -ItemType Directory -Force -Path (Split-Path $dest) | Out-Null
  Copy-Item $_.FullName $dest -Force
  Write-Host "     $rel"
}

Write-Host '3/6  Recolouring leftover hard-coded blue/cyan colours' -ForegroundColor Cyan
$map = [ordered]@{
  '#00B4D8' = '#46D09B'; '#48CAE4' = '#7FE3B8'; '#0077B6' = '#0E9187';
  '#0A1A2F' = '#071A15'; '#030814' = '#03100D';
  'rgba(0, 180, 216,' = 'rgba(70, 208, 155,'; 'rgba(0,180,216,' = 'rgba(70,208,155,';
  'rgba(34,211,238,' = 'rgba(70,208,155,'; 'rgba(34, 211, 238,' = 'rgba(70, 208, 155,'
}
$changed = 0
foreach ($dir in 'app','components','lib','data') {
  $p = Join-Path $root $dir
  if (-not (Test-Path $p)) { continue }
  Get-ChildItem $p -Recurse -Include *.tsx,*.ts,*.css | ForEach-Object {
    $t = [IO.File]::ReadAllText($_.FullName, $utf8); $o = $t
    foreach ($k in $map.Keys) { $t = $t -ireplace [regex]::Escape($k), $map[$k] }
    if ($t -ne $o) { [IO.File]::WriteAllText($_.FullName, $t, $utf8); $changed++ }
  }
}
Write-Host "     $changed files recoloured"

Write-Host '4/6  Clearing .next cache' -ForegroundColor Cyan
if (Test-Path (Join-Path $root '.next')) { Remove-Item (Join-Path $root '.next') -Recurse -Force }

Write-Host '5/6  Type check' -ForegroundColor Cyan
npx tsc --noEmit
if ($LASTEXITCODE -ne 0) { Write-Host 'Type errors above - send me the output.' -ForegroundColor Yellow } else { Write-Host '     OK' -ForegroundColor Green }

Write-Host '6/6  Commit' -ForegroundColor Cyan
if (Test-Path (Join-Path $root '.git')) { git add -A; git commit -m 'Sea-green theme, scroll effects, DPDP content accuracy fixes' | Out-Null }

Write-Host ''
Write-Host 'DONE. Now run:  npx next dev --webpack   and open http://localhost:3000' -ForegroundColor Green
Write-Host 'Delete the _lg_update folder afterwards.'
