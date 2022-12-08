# Multi Docker Projekct mit Docker-Compose
Dieses Projekt beschreibt ein Muliti-Docker-Projekt für eine einfache Client-Server Applikation, in der sowohl der Server als auch der Client in jeweils einem Docker-Container gestartet werden und über eine Network-Bridge kommunizieren. Docker-Compose ist ein weiteres Command-Line-Tool mit dem Sie Mulit-Containr-Setups durchführen können. Zum Beispiel, wenn Sie Microservices aus unabhängigen Prozessen oder Back- & Front-End Applikationen trennen möchten. Ziel ist es, Applikationen, die mit mehreren Docker-Containern arbeiten, einfacher zu verwalten, starten, Abhängigkeiten definieren und zu organisieren.

## Docker Installieren
Grundvoraussetzung ist die Installation von Docker entsprechend ihres Betriebsystems: <br>
Mac: https://docs.docker.com/desktop/install/mac-install/ <br>
Win: https://docs.docker.com/desktop/install/windows-install/ <br>
Linux: https://docs.docker.com/desktop/install/linux-install/ <br>

## Installation prüfen
Mit folgenden Befehlen können Sie die aktuell installierte Dockerversion prüfen:<br>
```docker -v``` <br>
Ausgabe: Docker version 20.10.21, build baeda1f<br>
```docker-compose --version``` <br>
Ausgabe: Docker Compose version v2.12.2<br>
```docker compose``` oder <br>
```docker-compose```<br>
Ausgabe: Usage:  docker compose [OPTIONS] COMMAND .... und die Übersicht der CLI-Befehle.<br>

## API starten
```docker run -d --init -p 3000:3000 --name api api```<br>
```-d``` ---> Das Flag -d weist docker an, einen Container im Hintergrund im Detached-Modus auszuführen und die neue Container-ID  auszugeben.<br>
```--init``` ---> Der Hauptprozess des Containers ist für die Verwaltung aller Prozesse zuständig, die er startet. In einigen Fällen ist der Hauptprozess nicht gut konzipiert und kann die Kindprozesse beim Beenden des Containers nicht ordnungsgemäß stoppen. Wenn Ihr Prozess in diese Kategorie fällt, können Sie die Option --init verwenden, wenn Sie den Container starten. Die Option --init fügt einen winzigen Init-Prozess als Hauptprozess in den Container ein und kümmert sich um das stoppen aller Prozesse, wenn der Container beendet wird.<br>
```-p``` ---> Portweiterleitung: Host-Port forwarding zum Container-Port<br>
```--name``` ---> Sie können Ihren Docker-Containern mit dem Flag --name einen Namen zuweisen.<br>

## UI starten
In das Root-Verzeichnis wechseln: ```cd .. ```<br>
```docker run -d -p 4000:80 -v $(pwd)/ui:/usr/share/nginx/html:ro --name ui nginx:1.21.5-alpine```<br>
Seite testen: ```url http://localhost:4000```

# Warum Docker nutzen? Was bringt das?
Docker ist ein beliebtes Open-Source-Tool, das eine portable und konsistente Laufzeitumgebung für Softwareanwendungen bietet. Docker verwendet Container als isolierte Umgebungen im Benutzerraum, die auf Betriebssystemebene ausgeführt werden und das Dateisystem sowie die Systemressourcen gemeinsam nutzen. <br>
Docker ermöglicht eine effiziente Nutzung der Systemressourcen. Die Instanzen von containerisierten Anwendungen verbrauchen viel weniger Hauptspeicher als virtuelle Maschinen. Sie lassen sich schneller starten und stoppen und sie können viel dichter auf eine Host-Hardware gepackt werden.
## Vorteil: 
### Geringer Ressourcenverbrauch
Im Vergleich zu virtuellen Servern sind Container wesentlich ressourcenschonender. 
### Sehr skalierbar
Container sind sehr skalierbar. Werden für Workloads mehrere Container benötigt, lassen sich diese sehr schnell erstellen und bereitstellen.
### Sehr flexibel einsetzbar für Microservices
Container lassen sich optimal für Microservices nutzen. Wenn eine Anwendung oder eine Workload die Aufteilung in Microservices unterstützt, lassen sich diese auf mehrere Container verteilen, anstatt auf einzelnen, virtuellen Servern ausgeführt zu werden. 
### In hybriden Netzwerken einsetzbar
Container sind in hybriden Netzwerken, in denen mit verschiedenen Betriebssystemen gearbeitet wird, meistens besser geeignet als VMs. Der Vorteil von Containern besteht darin, dass die Technologie betriebssystemübergreifend funktioniert und auch in der Cloud eine große Verbreitung hat. 

## Nachteile
### Generelle Sicherheitsprobleme
Container stellen kein Allheilmittel für die Sicherheit dar. Im Gegenteil: Da Container in den meisten Fällen einen gemeinsamen Kernel nutzen, nämlich den Kernel des Betriebssystems, besteht generell die Gefahr, dass mehrere Container auf einmal kompromittiert werden, wenn ein Container auf einem Host angegriffen wird. 
### Kompliziert in Einrichtung und Verwaltung
Container sind komplexer, wenn es um die Einrichtung und Verwaltung geht. In Windows werden Container über die Befehlszeile und PowerShell verwaltet. 
### Noch nicht vollständig in Windows eingebunden
Unternehmen, die auf Windows setzen, können in Windows Server 2016 und Windows Server 2019 zwar die Container-Technologie installieren. Auch die Einbindung in das Windows Admin Center und System Center geht voran, allerdings sind Container im Betriebssystem noch nicht so tief verwurzelt und ausgereift wie Hyper-V.

