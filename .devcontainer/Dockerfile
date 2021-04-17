FROM nginx

RUN set -eux; \
	apt-get update; \
	apt-get install -y --no-install-recommends git; \
	rm -rf /var/lib/apt/lists/*

# install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - ; \
	apt-get install -y nodejs; \
	rm -rf /var/lib/apt/lists/*;

# #add vscode user
# RUN useradd -ms /bin/bash vscode \
# 		&& usermod -aG www-data vscode

# WORKDIR /var/www/html
# USER www-data

# #Download WP
# RUN wp core download

# #add dirs for plugin and theme dev
# RUN mkdir -p /var/www/html/wp-content/plugins/plugin-dev; \
# 	mkdir -p /var/www/html/wp-content/themes/theme-dev;

# USER root
# RUN chown -R www-data:www-data /var/www/html/
# RUN chmod g+w -R /var/www/html/
# RUN find /var/www/html/ -type d -exec chmod g+s {} \;