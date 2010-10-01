class Repository
  attr_reader :description, :homepage, :name, :url, :watchers

  def initialize(attributes)
    @description = attributes['description']
    @homepage = attributes['homepage']
    @name = attributes['name']
    @url = attributes['url']
    @watchers = attributes['watchers'].to_i
  end
end
