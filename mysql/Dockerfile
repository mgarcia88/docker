FROM mysql:8.0.30

COPY my.cnf /etc/mysql/conf.d
# comment out !includedir /etc/mysql/conf.d/ to stop recursion
RUN sed -i 's/!includedir \/etc\/mysql\/conf\.d\//#!includedir \/etc\/mysql\/conf\.d\//' /etc/mysql/conf.d/my.cnf
COPY create-database.sql /docker-entrypoint-initdb.d/