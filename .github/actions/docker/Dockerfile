FROM php:7.4.2


COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /usr/src/app
COPY . .
RUN sudo apt-get update
RUN apt-get install zip
RUN composer install

ENTRYPOINT ["php", 'script.php']
