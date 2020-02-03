FROM php:7.4.2


COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /usr/src/app
COPY . .
RUN composer install --prefer-dist

ENTRYPOINT ["php", 'script.php']
