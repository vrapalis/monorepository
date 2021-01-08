
# Postgresql tutorials

## How to run postgres via docker

1. first create data backup directory
   
   ```mkdir data```

2. second create docker network
   
   ```docker network create tmp-postgres-network```

3. third run docker command to start postgres
   
   ```docker run -d --name tmp-postgres --network=tmp-postgres-network -e POSTGRES_USER=vitali -e POSTGRES_PASSWORD=246135 -e POSTGRES_DB=vitalis_db -v $PWD/data:/var/lib/postgresql/data -p 5432:5432 postgres```

4. forth execute psql command

    ```docker exec -it tmp-postgres psql -U vitali```

5. fifth clean container
   
   ```docker kill tmp-postgres && docker rm tmp-postgres && docker network rm tmp-postgres-network```


## How to run docker via docker compose

1. first create data backup directory
   
   ```mkdir data```

2. second run docker compose command
   
   ```docker-compose up -d```

3. third clean

    ```docker-compose down```

## PSQL commands

- Show all users 
  
  ```\du+```

- Show all databses

  ```\l```