FROM ruby:2.7.0

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
RUN mkdir /your-applicatioin

WORKDIR /your-application

ADD Gemfile /your-application/Gemfile
ADD Gemfile.lock /your-application/Gemfile.lock


RUN bundle install
ADD . /your-application

EXPOSE 8000

CMD ["rails","s"]