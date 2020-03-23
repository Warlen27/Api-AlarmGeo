
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '******',
    database: 'dbAlarmGeo',
    define: {
      timestamps: true,
      underscored: true, //utiliza o formato Snake case | default pascal case.
    },
  };