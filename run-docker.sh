# echo "Building Image"
echo "Hello $name - Before Building Image"
docker build -t fargate_sample .

# echo "Built Image Fargate Sample"

docker run -e $name fargate_sample:latest