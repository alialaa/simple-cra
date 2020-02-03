FROM php:7.4.2

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN composer --version && php -v

ENTRYPOINT ["composer", '-v']
