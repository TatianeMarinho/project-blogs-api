const httpCodeMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
  BAD_REQUEST: 400,
  ERROR_SERVER: 500,
};

const mapStatusHTTP = (status) => httpCodeMap[status] || 500;

module.exports = mapStatusHTTP;