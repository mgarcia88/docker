const conection = async () => {
    const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    }

    const mysql = require('mysql2/promise')
    const mysqlConnection = mysql.createConnection(config)
    console.log('conectou ao banco')
    global.conection = mysqlConnection
    return mysqlConnection
}

const getAll = async () => {
    const con = await conection()
    const [results] = await con.query("SELECT * FROM People")
    con.end()
    return await results
}

const insertOne = async () => {
    const con = await conection()
    const names = ['Maiara', 'Junior', 'Valter', 'Pedro', 'Maria']
    const name = names[Math.floor(Math.random() * 5)]
    const sqlCommand = "INSERT INTO People (name) values ('" + name +"')"
    await con.query(sqlCommand)
    con.end()
}

module.exports = { getAll, insertOne }