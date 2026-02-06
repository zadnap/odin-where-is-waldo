export const getPagination = (queryPage, queryLimit) => {
  const page = Math.max(parseInt(queryPage, 10) || 1, 1);
  const limit = Math.min(Math.max(parseInt(queryLimit, 10) || 10, 1), 100);

  const skip = (page - 1) * limit;

  return {
    page,
    limit,
    skip,
  };
};
