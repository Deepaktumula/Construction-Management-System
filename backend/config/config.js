module.exports = {
    // Database configuration
    dbURI: 'mongodb+srv://<UserName>:<password>@cluster0.27i1ekw.mongodb.net/<yourDatabaseName>',
  
    // // JWT configuration
    jwtSecret: 'Your-Secret-key', 
  
    // Server configuration
    port: process.env.PORT || 4000, 
  };
  