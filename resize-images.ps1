# ======================================
# Bulk Image Resizer for Travel Website
# ======================================
# Requirements:
# - ImageMagick must be installed (https://imagemagick.org)
# - Ensure "Add to PATH" was selected during install

# CONFIG
$imageFolder = "public\images"
$outputFolder = "public\images\resized"
$logFile = "resize_log.txt"

# Create output folder if it doesn’t exist
if (!(Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Force -Path $outputFolder | Out-Null
}

# Clear or create log file
"" | Out-File $logFile

# Resize parameters
$width = 1200
$height = 800
$quality = 85

Write-Host "Starting bulk image resize..."
$images = Get-ChildItem $imageFolder -Include *.jpg, *.jpeg, *.png -Recurse

foreach ($img in $images) {
    $outputPath = Join-Path $outputFolder $img.Name

    # Run ImageMagick resize command
    & magick convert $img.FullName -resize "${width}x${height}" -quality $quality $outputPath

    if (Test-Path $outputPath) {
        $msg = "Resized: $($img.Name)"
        Write-Host $msg
        Add-Content $logFile $msg
    } else {
        $msg = "❌ Failed: $($img.Name)"
        Write-Host $msg -ForegroundColor Red
        Add-Content $logFile $msg
    }
}

Write-Host "✅ All done! Resized images saved to '$outputFolder'"
Add-Content $logFile "Completed resizing $(($images).Count) images on $(Get-Date)"
