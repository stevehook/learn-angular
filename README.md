##Summary

This is a learning project to better understand angular.js.

It is forked from a project that I originally created to learn backbone.js.
Its a very simple application, in the spirit of the TODO list
backbone.js sample app. It consists of a single-page Web app and a
Sinatra back-end. All it does is store and retrieve 'documents' from the
server. The 'database' is just an in-memory list so when you restart the
server all your work will be lost, and replaced with 3 seed
documents that the database is primed with. This project is not a
production-ready content management system.

##Instructions

You'll need an installation of ruby together with the activesupport,
sinatra and haml gems. You can use bundler to set these up.

Clone the repository, run `bundle install` and start the server from the projects root directory:

    # ruby app.rb

Then point your browser at:

    http://localhost:4567

##Tests

