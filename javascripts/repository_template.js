var RepositoryTemplate = {
  build: function(repository) {
    var elem = $("<li><h2><a></a></h2></li>")

    elem.find("a")
      .attr("href", repository.attr("homepage"))
      .text(repository.attr("name"))

    elem
      .append($("<blockquote>", { text: repository.attr("description") }))
      .append(
        $("<p>Source: <a></a></p>").find("a")
          .attr("href", repository.attr("url"))
          .text(repository.attr("url"))
        .end()
      )

    return elem
  }
}
