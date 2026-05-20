[command]
ls -la
find . -type f -name "*.html" -o -name "*.css" -o -name "*.js" 2>/dev/null | head -20
</command>