$(function() {
  Repository.load(function() {
    Repository.each(function(i) {
      $("#" + this.attr("name") + " h2").append(
        $("<span>", {
          text: this.attr("watchers") + " watchers, " +
                this.attr("forks") + " forks"
        })
      )
    })
  })
})
