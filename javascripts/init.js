$(function() {
  Repository.load(function() {
    Repository.select(function() {
      return this.attr("watchers") > 1 && this.attr("forks") > 0
    }).sortBy("watchers").reverse().each(function(i) {
      $("#repositories").append(RepositoryTemplate.build(this))
    })
  })
})
