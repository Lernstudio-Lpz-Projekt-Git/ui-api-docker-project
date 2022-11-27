# Installation des Images, das auf alpine basiert und damit dessen Größe minimiert
FROM node:16.14.0-alpine
# Wir verwenden als USER den Node-User und nicht den Root-User und schränken die Rechte etwas ein
# Das Arbeitsverzeichnis ist dementsprechend das HOME-NODE Verzeichnis
USER node
WORKDIR /home/node
# Wir kopieren für den zugehörigen User & die Gruppe, die beiden Konfigurationsdateien für die Installation ins HOME/NODE Verzeichnis
COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json
# Wir führen die Installation auf dem Docker-Image aus und installieren die notwendigen Packages aus der package.json-Datei
RUN npm install --production
# Am Ende kopieren wir die gesamte Anwendung (hier die app.js) in das ROOT-Verzeichnis des Dockers
COPY --chown=node:node . .
# Das folgende Shell-Command startet die App im Docker
CMD [ "node", "app.js" ]
