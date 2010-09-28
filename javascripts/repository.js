var Repository = Model("respository", {
  persistence: Model.JSONP("http://github.com/api/v1/json/benpickles", {
    filter: function(data) {
      return data.user.repositories
    }
  })
})
