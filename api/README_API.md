# Packages für dieses Multi Docker Projekct
Neben dem Grundgerüst und den Pflichtattributen 'name' & 'version' verwendet dieses Projekt folgende Packages:<br>
```"cors": "^2.8.5"``` <br>
CORS möglich dem Front-End auf das Back-End zuzugreifen. Durch den Aufruf von use(cors()) wird der Express-Server in die Lage versetzt, auf Preflight-Anfragen zu antworten. Eine Preflight-Anfrage ist im Grunde eine OPTION-Anfrage, die an den Server geschickt wird, bevor die eigentliche Anfrage gesendet wird, um zu prüfen, welche Herkunft und welche Anfrageoptionen der Server akzeptiert. CORS sind also im Grunde eine Reihe von Headern, die der Server an den Browser sendet.<br>
```"express": "^4.18.2"```<br>
Express ist ein Node-Js-Framework für Webanwendungen, das umfassende Funktionen für die Erstellung von Web- und Mobilanwendungen bietet. Es wird verwendet, um eine einzelne Seite, mehrere Seiten und hybride Webanwendungen zu erstellen. Es ist eine Schicht, die auf Node js aufbaut und bei der Verwaltung von Servern und Routen hilft.<br>
```"flaschenpost": "^5.1.1"```<br>
flaschenpost ist ein Logger für cloudbasierte Anwendungen. Mit diesem Logger können Sie jetzt Nachrichten protokollieren, indem Sie dessen fatal, error, info, warn und debug Funktionen verwenden. Um beispielsweise eine Info-Nachricht zu protokollieren, rufen Sie die an info()-Funktion mit einer entsprechenden Protokollmeldung: <br>  ```logger.info('Server started.');``` Mehr Infos unter: https://www.npmjs.com/package/flaschenpost<br>

# Build des Images und Run des API Docker Container
## Images erstellen
```docker build -t api .```<br>
docker build erstellt ein Docker-Image, -t tapen: ermöglicht einen besseren Zugriff (api) und befindet sich im aktuellen Verzeichnis (.) <br>
```docker images```<br>
docker images listet alle vorhandenen Docker-Images mit Image-Name, Image-Id und Image-Size auf.<br>
```docker run -d --init -p 3000:3000 --name api api```<br>
```docker run``` startet das Image. <br>
```-d``` die Option Detached-Mode bedeutet, dass ein Docker-Container im Hintergrund des Terminals ausgeführt wird. Er erwartet keine Eingaben und zeigt keine Ausgaben an,<br>
```--init``` Führen Sie ein Init innerhalb des Containers aus, das Ereignisse weiterleitet und Daten entgegen nimmt und verarbeitet,<br>
```-p``` Port(s) eines Containers auf dem Host:Container freigeben, beschreibt das PORT-Forwarding: von Port 3000 des Host zu Port 3000 des Containers,<br>
```--name``` gibt den Container einen Namen damit der Zugriff vereinfacht wird,<br>
```api``` ist der Name des zuvor erzeugten Images.