const Development = process.env.NODE_ENV === 'development';
const Production = process.env.NODE_ENV === 'production';

module.exports = { Development, Production };
