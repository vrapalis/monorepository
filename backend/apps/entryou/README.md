# Entryou

## Docker

### Local development
Run docker-compose in docker dir <br/>
`` docker-compose -f docker-compose.yml -f local/docker-comopse-local.yml up``
<br/><br/>
Psql connect <br/>
`` docker run -it --rm --network postgres-local-nt postgres:alpine psql -h postgres-local -U admin oauth2_local_db ``