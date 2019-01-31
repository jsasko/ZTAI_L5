const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb://taitest:zxcv1234@ds155663.mlab.com:55663/taibase',
    JwtSecret: process.env.JWT_SECRET || 'secret'
  };
  
  export default config;