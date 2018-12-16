var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "Deutsch",
  title: "Ardublockly",
  blocks: "Blöcke",
  /* Menu */
  open: "Laden",
  save: "Speichern",
  deleteAll: "Alles Löschen",
  settings: "Einstellungen",
  documentation: "Dokumentation",
  reportBug: "Bug melden",
  examples: "Beispiele",
  /* Settings */
  compilerLocation: "Compiler Pfad",
  compilerLocationDefault: "Compiler Pfad unbekannt",
  sketchFolder: "Sketch Ordner",
  sketchFolderDefault: "Sketch Ordner unbekannt",
  arduinoBoard: "Arduino Board",
  arduinoBoardDefault: "Arduino Board unknown",
  comPort: "COM Port",
  comPortDefault: "COM Port unknown",
  defaultIdeButton: "Default IDE Button",
  defaultIdeButtonDefault: "IDE options unbekannt",
  language: "Sprache",
  languageDefault: "Sprache unbekannt",
  sketchName: "Sketch Name",
  /* Arduino console output */
  arduinoOpMainTitle: "Arduino IDE Ausgabeoutput",
  arduinoOpWaiting: "Warte auf IDE Ausgabe...",
  arduinoOpUploadedTitle: "Sketch hochgeladen",
  arduinoOpVerifiedTitle: "Sketch überprüft",
  arduinoOpOpenedTitle: "Sketch in IDE geöffnet",
  arduinoOpOpenedBody: "Sketch sollte in Arduino IDE geladen werden.",
  arduinoOpErrorTitle: "Es gab einen Fehler",
  arduinoOpErrorIdContext_0: "Kein Fehler.",
  arduinoOpErrorIdContext_1: "Build oder Upload Fehlgeschlagen.",
  arduinoOpErrorIdContext_2: "Sketch nicht gefunden.",
  arduinoOpErrorIdContext_3: "Invalid command line argument.",
  arduinoOpErrorIdContext_4: "Preference passed to 'get-pref' flag does not exist.",
  arduinoOpErrorIdContext_5: "Not Clear, but Arduino IDE sometimes errors with this.",
  arduinoOpErrorIdContext_50: "Unexpected error code from Arduino IDE",
  arduinoOpErrorIdContext_51: "Could not create sketch file",
  arduinoOpErrorIdContext_52: "Invalid path to internally created sketch file",
  arduinoOpErrorIdContext_53: "Arduino IDE nicht gefunden<br>" +
                              "The compiler directory has not been set correctly.<br>" +
                              "Please ensure the path is correct in the Settings.",
  arduinoOpErrorIdContext_54: "What should we do with the Sketch?<br>" +
                              "The launch IDE option has not been set.<br>" +
                              "Please select an IDE option in the Settings.",
  arduinoOpErrorIdContext_55: "Serial Port unavailable<br>" +
                              "The Serial Port is not accessible.<br>" +
                              "Please check if the Arduino is correctly connected to the PC and select the Serial Port in the Settings.",
  arduinoOpErrorIdContext_56: "Unknown Arduino Board<br>" +
                              "Es wurde kein Arduino Board ausgewählthas not been set.<br>" +
                              "Please select the appropriate Arduino Board from the settings.",
  arduinoOpErrorIdContext_52: "Unerwarteter Server Fehler.",
  arduinoOpErrorIdContext_64: "JSON kann nicht geparsed werden",
  arduinoOpErrorUnknown: "Unerwarteter Fehler",
  /* Modals */
  noServerTitle: "Ardublockly app not running",
  noServerTitleBody: "<p>Um alle Ardublockly Features verwenden zu können muß die Ardublockly Desktopanwendung auf Ihrem dem Computer laufen.</p>" +
                     "<p>Wenn Sie die Online-Version nutzen, können sie weder Einstellungen ändern, noch Code in einen Arduino laden.</p>" +
                     "<p>Installationsanweisungen finden Sie im <a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly Repository</a>.</p>" +
                     "<p>Falls Sie Ardublockly bereits installiert haben, stellen Sie sicher, dass die Anwendung gestartet ist.</p>",
  noServerNoLangBody: "Die Sprache kann nur geändert werden wenn die Ardublockly Anwendung läuft.",
  addBlocksTitle: "Zusätzliche Blocks",
  /* Alerts */
  loadNewBlocksTitle: "Neue Blocks laden?",
  loadNewBlocksBody: "Das Laden eines neuen XML Files wird die im Arbeitsbereich enthaltenen Blöcke ersetzen.<br>" +
                     "Sind Sie sicher?",
  discardBlocksTitle: "Blöcke löschen?",
  discardBlocksBody: "Es sind %1 Blocks im Arbeitsbereich.<br>" +
                     "Wollen Sie diese wirklich löschen ?",
  invalidXmlTitle: "Ungültige XML",
  invalidXmlBody: "Da XML File konnte nicht in Blocks gewandelt werden. Bitte überprüfen Sie den XML Code.",
  /* Tooltips */
  uploadingSketch: "Lade Sketch in Arduino...",
  uploadSketch: "Sketch in Arduino laden",
  verifyingSketch: "Überprüfe Sketch...",
  verifySketch: "Sketch Überprüfen",
  openingSketch: "Öffne Sketch in Arduino IDE...",
  openSketch: "Öffne Sketch in IDE",
  notImplemented: "Funktion nicht implementiert",
  /* Prompts */
  ok: "OK",
  okay: "Okay",
  cancel: "Abbruch",
  return: "Zurück",
  /* Cards */
  arduinoSourceCode: "Arduino Quellcode",
  blocksXml: "Blocks XML",
  /* Toolbox Categories*/
  catLogic: "Logik",
  catLoops: "Schleifen",
  catMath: "Mathematik",
  catText: "Text",
  catVariables: "Variablen",
  catFunctions: "Funktionen",
  catInputOutput: "Ein-/Ausgabe",
  catTime: "Zeit",
  catAudio: "Töne",
  catMotors: "Motoren",
  catComms: "Kommunikation",
};
