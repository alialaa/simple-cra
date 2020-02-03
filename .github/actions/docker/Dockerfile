FROM 7.4.2-cli-buster

COPY --from=composer /usr/bin/composer /usr/bin/composer

ENTRYPOINT ["composer", '-v']
