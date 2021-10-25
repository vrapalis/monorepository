
# Postgresql tutorials

## How to run postgres via docker

1. Create docker network <br/> ```docker network create postgres-dev-db-nt```
2. Create docker volume and uncomment in docker-compose <br/> ```docker volume create pgdata```
3. Run docker compose <br/> ```docker-compose up -d```
4. Run another postgres with psql tool <br/> ```docker run -it --rm --network postgres-dev-db-nt postgres:alpine psql -h postgres-dev-db -U admin admin_db```

## PSQL commands

- Show all users 
  
  ```\du+```

- Show all databses

  ```\l```

  - Switch database

    `` \l database_name ``