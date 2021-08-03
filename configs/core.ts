export default {
  port: process.env.PORT || 3000,
  host: process.env.HOST || '127.0.0.1',
  secret: process.env.JWT || 'template_jwt',
};