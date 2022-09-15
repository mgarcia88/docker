FROM mysql:8.0.30

COPY create-database.sql /tmp

CMD [ "mysqld", "--init-file=/tmp/create-database.sql" ]