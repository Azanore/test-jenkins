FROM jenkins/jenkins:lts

USER root

# Installe NodeJS et npm (exemple avec Node 16)
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
  && apt-get install -y nodejs

USER jenkins
