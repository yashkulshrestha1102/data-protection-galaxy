# Run from project root:  powershell -ExecutionPolicy Bypass -File scripts\fix-encoding.ps1
# Repairs corrupted characters (shows as "?250 crore", etc.) in 6 content pages.
$files = @(
 'app\rights\page.tsx','app\provisions\page.tsx','app\lawful-processing\page.tsx',
 'app\cross-border\page.tsx','app\penalties\page.tsx','app\obligations\page.tsx')
$utf8 = New-Object System.Text.UTF8Encoding($false)
foreach ($f in $files) {
  if (-not (Test-Path $f)) { Write-Host "skip $f"; continue }
  $t = [IO.File]::ReadAllText((Resolve-Path $f), $utf8)
  $t = $t -replace "�(?=\d)", [string][char]0x20AC
  $t = $t -replace "�", [string][char]0x2014
  $t = $t -replace "(?<=Up to )\?", [string][char]0x20B9
  $t = $t -replace "\?(?=\d)", [string][char]0x20B9
  $t = $t -replace ">\?</span>", (">" + [char]0x2022 + "</span>")
  $t = $t -replace "(?<=Test )\?", [string][char]0x2192
  $t = $t -replace "(?<=Compliance )\?", [string][char]0x2192
  [IO.File]::WriteAllText((Resolve-Path $f), $t, $utf8)
  Write-Host "fixed $f"
}
Write-Host "Done. Run: git diff   and check every changed line."
