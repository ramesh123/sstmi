call npm run build
call aws s3 rm s3://sstmi-website-main --recursive
call aws s3 sync out/ s3://sstmi-website-main/
call aws s3 ls s3://sstmi-website-main --recursive
call aws cloudfront create-invalidation --distribution-id E2MQAIFG3HWDL2 --paths "/*"
@echo off
echo Calling Lambda function to update xml for slideshows...
powershell -Command "$url = 'https://ddxjbi5yf5fo5yrz3svssaowzi0pblny.lambda-url.us-east-1.on.aws/'; $body = '{}'; $response = Invoke-RestMethod -Uri $url -Method POST -Body $body -ContentType 'application/json'; Write-Output $response"
