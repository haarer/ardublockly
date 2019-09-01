# Mein Fork von Ardublockly
Ardublockly ist eine grafische Programmierumgebung für Arduinos. Es basiert auf einem Fork von Google's [Blockly][1], der geändert wurde um [Arduino][15] Code zu erzeugen.

Mein Fork des [Hauptrepositorys][18] hat folgende Änderungen:
* Übersetzung in die deutsche Sprache
* zum compilieren wird [arduino-cli][19] benutzt statt der Arduino IDE 
* zusätzliche Blöcke für 
  * WS2812 LED Strips, benötigt die Adafruit NeoPixel Library
  * Schrittmotoren, z.B. auf einem GRBL shield.
* die unterstützten Boards werden nun aus den Board.txt Dateien ausgelesen. Deshalb kann man nun alle Boards auswählen.Allerdings sind nur für folgende Boards Pinkonfigurationen vorhanden(daran habe ich noch nichts geändert)
  * Arduino Uno standard compatible board
  * Arduino Nano with ATmega328 board
  * Arduino Duemilanove with ATmega168p compatible board
  * Arduino Duemilanove with ATmega328p compatible board
  * Arduino Mega-compatible board
  * Arduino Leonardo-compatible board
  * Arduino Yun compatible board
  * Atmel atmega328p Xplained mini
  * Atmel atmega168pb Xplained mini
  * Adafruit Feather HUZZAH
  * Wemos D1



Das ArdublocklyServer Python Modul startet einen lokalen Server um den Arduino Code zu übersetzen und in einen Arduino zu laden. Dazu wird eine als Voraussetzung installierte [Arduino IDE][2] benötigt.

Es gibt auch eine Desktopanwendung die die Funktionen zusammenfaßt. Sie kann für Windows, Mac OS X, and Linux gebaut werden, ich teste aber nur Windows und Linux

![Screenshot deutsch](https://raw.github.com/haarer/haarer.github.io/master/_posts/2018-12-12-Ardublockly.png)


## Features
* Erzeugt Arduino code mittels drag-und-drop von Blöcken
* Lädt den Code in eine an Arduino Board
* Hilfreiche "Code Block Warnungen"
* Kompatibel mit  vielen der von der Arduino IDE unterstützten Boards
* Läuft auf Windows / Linux / Mac OS X

Ardublockly befindet sich in Entwicklung und einige Features sind noch nicht implementiert. Eine to-do List des Hauptprojekts ist im [TODO.md][3] file.

Aktuell getestet unter Windows mit Python 2.7 und 3.5 and in Linux and MacOS X with Python 2.7.

## Klonen des Repositorys
Bitte beachten Sie, daß das Repository Submodule enthält, die initialisiert werden müssen. Das Ardublockly Repository muß also auf folgende Weise geklont werden:

```
git clone https://github.com/haarer/ardublockly.git
cd ardublockly
git submodule update --init --recursive
```


## Installation
Die Desktop Anwendung ist für Windows/Mac/Linux verfügbar und läuft als "stand-alone" Executable. 

Derzeit sind für meinen Fork keine Binärreleases verfügbar. 

Es wird zusätzlich  [arduino-cli][19] benötigt. Arduino-cli ist ein Kommandozeilenprogramm.

### Installation einer platform mittels arduino-cli

```
arduino-cli core install arduino:avr
arduino-cli core install esp8266:esp8266
```
### boardmanager urls hinzufügen
```
arduino-cli core update-index --additional-urls https://dl.espressif.com/dl/package_esp32_index.json
arduino-cli core install esp32:esp32 --additional-urls https://dl.espressif.com/dl/package_esp32_index.json
```

## "Core version" (Python Server)
Die Kernapplikation kann verwendet werden indem man nur den Python Server startet, falls Sie das bevorzugen. Das Webinterface wird dann in einem lokalen Browser dargestellt (Chrome empfohlen).

Die komplette Installationsanweisung finden Sie {hier][5].

Für eilige: Klonen Sie das Repository, initialisieren Sie die Submodule und führen Sie folgendes aus:

```
python start.py
```

Das funktioniert auf Windows, Linux (auch ARM) und Mac OS X, mit Python >2.7 or >3.4


## Starten
1. [Installieren Sie Ardublockly][5].
1. Installieren Sie die [Arduino IDE][2] version 1.6.x oder neuer (am Besten die aktuelle).
1. Starten Sie Ardublockly (wie oben beschrieben, oder starten Sie die Desktopanwendung 
1. Konfigurieren Sie Ardublockly (Auswahl der Arduino IDE, Board, Port, Sprache..).


## Dokumentation
Die Dokumentation ist derzeit nur in englischer Sprache im [Ardublockly GitHub repository Wiki][7] verfügbar.

Um die Dokumentation herunterzuladen können Sie das Wiki einfach klonen

```
git clone https://github.com/haarer/ardublockly.wiki.git
```


## Credit
Dies ist ein Fork von carlospreate's [Ardublockly][18], Copyright (c) 2016 carlosperate https://github.com/carlosperate/

Sein Projekt ist inspiriert durch [BlocklyDuino][16].

Blockly original source : Copyright of Google Inc. [https://developers.google.com/blockly/][1]. Eine Liste der Änderungen ist im [Blockly Unterverzeichnis README][17] file.


## Lizenz

Änderungen gegenüber dem Hauptprojekt in diesem Fork
Copyright (c) 2018 haarer https://github.com/haarer/

Unless stated otherwise, the source code of this projects is
licensed under the Apache License, Version 2.0 (the "License");
you may not use any of the licensed files within this project
except in compliance with the License.

The full document can be found in the [LICENSE][9] file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


[1]: https://developers.google.com/blockly/
[2]: http://www.arduino.cc/en/main/software/
[3]: TODO.md
[4]: https://github.com/carlosperate/ardublockly/releases/
[5]: https://haarer.github.io/arduino,blockly/2018/12/12/forking-ardublockly.html
[6]: https://github.com/carlosperate/ardublockly/wiki/Configure-Ardublockly
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: https://github.com/carlosperate/ardublockly/compare/blockly-original...master
[9]: https://github.com/carlosperate/ardublockly/blob/master/LICENSE
[10]: http://ardublockly.embeddedlog.com/demo/index.html
[11]: http://ardublockly.embeddedlog.com/demo/classic/index.html
[12]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=linux/
[13]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=windows/
[14]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=mac/
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md
[18]: https://github.com/carlosperate/ardublockly/
[19]: https://github.com/arduino/arduino-cli

[desktop_screeshot]: http://haarer.github.io/ardublockly/images/screenshot_desktop_1.png
[web_screenshot_responsive]: http://haarer.github.io/ardublockly/images/screenshot_material_all_small.jpg
[web_screenshot_classic]: http://haarer.github.io/ardublockly/images/screenshot_1.png
