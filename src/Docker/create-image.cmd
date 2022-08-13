docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss33/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss33/app ../..
