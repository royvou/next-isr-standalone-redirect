
curl http://localhost:3000/test
mv .next/standalone/restart.txt .next/standalone/restart.txt.disabled
sleep 3
curl http://localhost:3000/test 
curl http://localhost:3000/test-new