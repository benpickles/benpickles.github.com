require 'repository'
require 'erb'
require 'rubygems'
require 'httparty'

class Site
  class << self
    def generate
      response = HTTParty.get('http://github.com/api/v1/json/benpickles')

      @repositories = response['user']['repositories'].select { |hash|
        %w(fewer js-model onScreen peity wapper).include?(hash['name'])
      }.map { |hash|
        Repository.new(hash)
      }.sort_by { |repository|
        repository.watchers
      }.reverse

      erb = ERB.new(template, nil, '-')

      File.open(File.expand_path('../../index.html', __FILE__), 'w') do |f|
        f.write erb.result(binding)
      end
    end

    private
      def h(string)
        string.gsub(/[&"><]/) { |char|
          {
            '&' => '&amp;',
            '>' => '&gt;',
            '<' => '&lt;',
            '"' => '&quote;'
          }[char]
        }
      end

      def template
        File.read(File.expand_path('../template.erb', __FILE__))
      end
  end
end
