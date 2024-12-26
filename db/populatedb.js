const {Client} = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
    ('Besar'),
    ('Besim'),
    ('Eda'),
    ('Erdi');
`;

async function main() {
    console.log('Seeding...')

    const dbUrl = process.argv[2];

    if (!dbUrl) {
        console.error("Error: No database URL provided.");
        console.log("Usage: node script.js <database-url>");
        process.exit(1); // Exit with failure code
    }

    const client = new Client({
        connectionString: dbUrl,
        ssl: { rejectUnauthorized: false }
    })

    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('Done')
}

main()