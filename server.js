const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util")
//start server
async function startServer(){
    try{
        await MongoDB.connect(config.db.uri);
        console.log("Connect to the database");

        //định nghĩa hằng PORT là số hiệu cổng được cấu hình trong app/config/index.js
        const PORT = config.app.port;

        //Hàm được chạy khi server bắt đầu lắng nghe yêu cầu
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch(err){
        console.log("Cannot connect to the database", err);
        process.exit();
    }
}

startServer();