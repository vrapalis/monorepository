# Main repository for web projects based on angular

## Websites

### Vrapalis
**Deploy to Github:** ``nx deploy --cname='' --base-href=/monorepository/`` <br>
**Build Docker Image:** ``docker build -t vrapalis/website  -f apps/websites/vrapalis/Dockerfile . --no-cache ``<br>
**Run Docker Image:** ``docker run --rm -p 8080:80 vrapalis/website``<br>

