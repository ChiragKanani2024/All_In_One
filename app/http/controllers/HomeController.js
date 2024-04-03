const HomeController = () => {
  return {
    getHome(req, res) {
      try {
        res.render("component/home");
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = HomeController;
