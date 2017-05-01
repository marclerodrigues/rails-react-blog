# Blog

A full featured blog using Ruby, Rails, React and Redux.

!!! Warning: This is under development! So be careful, things may change a little. !!!

# Features

* Post listing
* Post detail page
* Comments list at post show page
* Comment form at post show page
* Mark post as favorites
* Rails admin to manage posts
* Bootstrap to add styling

# Development with Docker

Run the command below to fully setup the project:

`sh bin/docker_setup`

It assumes you have your machine properly configured with docker and docker-compose.

The you can run:

`docker-compose up`

And visit: `https://localhost:3000` to see the app running.

To run the backend test just:

`docker-comopose exec web bundle exec rspec`

# Contributing

* Fork it ( https://github.com/marclerodrigues/rails-react-blog/fork )
* Create your feature branch (git checkout -b my-new-feature)
* Commit your changes (git commit -am 'Add some feature')
* Push to the branch (git push origin my-new-feature)
* Create a new Pull Request
