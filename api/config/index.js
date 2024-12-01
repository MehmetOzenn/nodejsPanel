module.exports = {
    "LOG_LEVEL" : process.env.LOG_LEVEL || "debug",
    "CONNECTION_STRING":process.env.CONNECTION_STRING || "mongodb://localhost:27017/?retryWrites=true&loadBalanced=false&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000",
    "PORT" : process.env.PORT || "3000"
}