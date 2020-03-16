module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '******',
    database: 'dbAGP',
    difine: {
        timestamps: true,
        underscored: true, //utiliza o formato Snake case | default pascal case.
    },
};