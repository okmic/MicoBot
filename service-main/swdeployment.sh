pm2 del micobotMain
git reset --hard HEAD
git pull origin main
npm i
git checkout main
npm run build
cp .env build/
pm2 start build/index.js
pm2 startup
pm2 save
pm2 logs