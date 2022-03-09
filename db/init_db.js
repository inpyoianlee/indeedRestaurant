const { client } = require("./client");

async function dropTables() {
    try {
        console.log("Dropping All Tables");
        await client.query(`
            DROP TABLE IF EXISTS ...;
        `)
    } catch (error) {
        console.error("Error while dropping tables")
        throw error;
    }
}

async function createTables() {
    console.log("Starting to build tables...");

    try { 
        await client.query(`
            CREATE TABLE users(

            )
        `)
    } catch (error) {
        console.error("Error building tables");
        throw error;
    }
}

async function buildTables() {
    try {
        client.connect();
        await dropTables();
        await createTables();
    } catch (error) {
        throw error;
    }
}

async function populateInitialData() {
    try {
        // create useful starting data
        console.log("")
        
    } catch (error) {
        throw error;
    }
}

buildTables()
    .then(populateInitialData)
    .catch(console.error)
    .finally(() => client.end())