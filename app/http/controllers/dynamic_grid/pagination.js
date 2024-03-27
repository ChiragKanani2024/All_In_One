const pagination = (req, dataCount) => {
  try {
    let limit = Number(process.env.limit);
    let lastpage = Math.ceil(dataCount / limit);

    let page = 1;
    let offset = 0;
    if (req.query.page) {
      if (/^\d+$/.test(req.query.page)) {
        if (Number(req.query.page) <= lastpage) {
          page = Number(req.query.page);
          offset = limit * (page - 1);
        }
      }
    }

    return {
      currentPage: page,
      lastPage: lastpage,
      firstPage: 1,
      limit: limit,
      offSet: offset,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = pagination;
