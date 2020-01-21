const mysqldb = require("mysql");

const db = mysqldb.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlrootpasswordhere",
    database: "marketplaceproject",
    port: "3306"
});

module.exports={
    db
}