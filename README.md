# VUE-AUTH-SKELETON
This project is a side product of testing and examining my next fullstuck environment, programing language... for web application development
#### Server - JWT implementation using KNEX and Express on Node.js
#### Client - Vue.js using Vue-router, Vuex and Axios
## ;TLDR
After meny years of using Microsoft Visual Studio, coding c#, asp.net for IIS & MS-SQL on windows machines, I'm looking for an open-source solution.
I decided that my next fullstuck template will be node.js based.
front-end: Vue.js [Shell](https://developers.google.com/web/updates/2015/11/app-shell) that supports most [PWA](https://developers.google.com/web/progressive-web-apps/) features on client side.
server-side: Express.js for REST API.

In order to understend the current web technology arichtecture let's take a brief of the [evolution of the web](http://www.evolutionoftheweb.com) or "[FROM STATIC TO DYNAMIC](http://royal.pingdom.com/2007/12/07/a-history-of-the-dynamic-web)".

My first server side language was ASP3.
Things got match better when .NET born, the simple WS SOAP based integration, OOP, separation between layout and logic was great!
But the basic architecture did not chage, Microsoft ASP.NET (web forms) was still postback based, the old school architecture was to render the HTML for every click, and then load the complete page, witch mean low performence specially because the IIS renders the whole page for every click.
Since then, more and more open source libraries take significant part on both client and server side and Microsoft release MVC and other open source inspired or combind starter-kits and good solutions like web api.

This project architecture is a Single Page Web Application, that makes Http json/bson request to REST APIs from different sources, some public and some Token based - the SPA layout loads only one time, and content change by replacing only the data inside the selected layout commponent, driven by a callback response or user action.
A big gratitude to [Haim Lankry](https://github.com/haimlankry) for guiding and supporting my C# => JavaScript transformation.

# Install


## Server
I'm developing on Linux Ubuntu 16.04

postgres sql [instalation](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)

create db: sudo -u postgres createdb pgmem. 

config knexfile.js (user and pass). 

npm install. 

npm run knex migrate:latest. 

npm run dev. 

## Client
npm install. 

npm run dev. 

because i'm running both project on same localhost machine, it is nessesary to open two instance of node.js, and run each on a different port, there for the client code must be modify [here](https://github.com/yanivduke/vue-auth-skeleton/blob/8ef69f71cf0d05671528660036989686d375d13a/client/src/store/modules/auth.js#L18).

# Production 
npm run build, and then copy the file to /home/ubuntu/example/dist/
### SSL
sudo apt-get install python-certbot-nginx 

add-apt-repository ppa:certbot/certbot 

sudo certbot --nginx -d domainname.com 

sudo certbot renew --dry-runsudo certbot renew --dry-run 
### nginx
sudo apt-get install nginx -y
sudo nano /etc/nginx/sites-available/default
```javascript
# Virtual Host configuration for example.com
#
# You can move that to a different file under sites-available/ and symlink that
# to sites-enabled/ to enable it.
#
server {
	listen 80;
	listen [::]:80;
	server_name example.com;
	location / {
		return 301 https://example.com$request_uri;
	}
}

server {
	server_name example.com;
	listen 443 ssl http2 default_server;
	listen [::]:443 ssl http2 default_server ipv6only=on;

	ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
	ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
	ssl_trusted_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
#	include /etc/nginx/snippets/ssl.conf;

	location /dev {
          proxy_pass http://localhost:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
        }

	location /api {
	  proxy_pass http://localhost:3001;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;	
	}

	location / {
	  alias /home/ubuntu/example/dist/;
          index index.html;
	  try_files $uri $uri/ index.html =404;
	  expires max;
          add_header Pragma public;
          add_header Cache-Control "public, must-revalidate, proxy-revalidate";
	}

  location service-worker.js {
    add_header Last-Modified $date_gmt;
    add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
    if_modified_since off;
       expires off;
       etag off;
  }
}
```
Other important commands:

sudo ufw status 

sudo ufw allow 'Nginx HTTP' 

sudo ufw deny {portnum} 

sudo nginx -t 

sudo systemctl restart nginx 

systemctl status nginx 




