# Aufgabenstellung 

Die Aufgabe besteht darin, ein digitales Informationssystem für den Schulbetrieb zu konzipieren und umzusetzen. Ziel ist es, den bisherigen analogen Informationsfluss zu digitalisieren und aktuelle Informationen wie Termine, Stundenplanänderungen sowie die Aufenthaltsorte von Lehrkräften (laut Stundenplan) übersichtlich darzustellen. Zusätzlich sollen Ankündigungen, ein Social-Media-Feed und ein CMS zur Verwaltung der Inhalte bereitgestellt werden. Alle Funktionen sollen über eine benutzerfreundliche Oberfläche zugänglich sein, die sowohl für den Einsatz im Kioskbetrieb mit Touch-Bedienung als auch für die Nutzung mit Peripheriegeräten wie Maus und Tastatur optimiert ist.

## Auftraggeber

Der Auftraggeber des vorliegenden Projekts ist die HTL Leoben, eine Bildungseinrichtung, die sich kontinuierlich für die Optimierung und Modernisierung des Schulalltags einsetzt. Die HTL Leoben verfolgt mit diesem Projekt mehrere Zielsetzungen: die Verbesserung des Informationsflusses, die Reduktion papierbasierter Kommunikation im Sinne der Nachhaltigkeit sowie die Etablierung eines zentralen Anlaufpunkts für Schülerinnen und Schüler, Lehrkräfte und Besucherinnen und Besucher. Der Bedarf an einer entsprechenden Lösung ergab sich aus dem zeitaufwendigen Lokalisieren von Lehrkräften im Schulgebäude sowie aus der mangelnden Übersichtlichkeit bestehender Terminpläne und Fristen. 

## Ausgangssituation

Bei Veranstaltungen wie dem Tag der offenen Tür sowie im regulären Schulbetrieb gestaltet sich die Orientierung im Schulgebäude häufig schwierig. Besucherinnen und Besucher sowie Schülerinnen und Schüler können Räume oder Lehrpersonen nur mit erheblichem Aufwand lokalisieren. Die Informationsbereitstellung erfolgt derzeit primär über Papieraushänge, die sich als unübersichtlich und wenig flexibel erweisen. Ein modernes, digitales Informationssystem zur Behebung dieser Defizite fehlt bislang.

<!-- 
### So gehen Zitate

Hier ein einzel Zitat eines Buches das auf der Seite 17 zu finden ist:  
([@hattie_lernen_2013] S. 17) 

Zitatsammlung:  
(vergleich dazu @heise oder @t3n)  
[@hattie_lernen_2013, S. 33-35; außerdem @leeb_einfuhrung_2016, S. 6 f.]

Zitat ohne Autor  
Hattie sagte bla bla [-@hattie_lernen_2013]

Name des Autors mit Jahr in Klammern  
@hattie_lernen_2013 sagte einmal bla bla bla

Auch Videos kann man Zitieren wi Zum Biespiel hier [@Zatko15] in dieser Referenz.

Hier noch ein Zitat mit Seitenangabe [[@Zatko15] Seite 5f.]

Man darf auch ChatGPT oder andere KIs befragen um Wissen zu erlangen. Dazu muss allerdings ein PDF Log des exakten Chats in die Metadata.yaml eingetragen werden und der dort eingetragene `short-prompt` auch in der bib Datei eingefügt werden. Dann könnten indirekte Zitate so aussehen [@gpt-pandoc] oder auch so [@gpt-atomaufbau].

Wichtig ist es, das beim Author die verwendete KI eingetragen wird (mit Versionsnummern - so genau wie möglich), beim title eine kurze Referenz zum Prompt und beim Jahr - das Jahr in dem die Abfrage gemacht wurde. Das hat dem `short-prompt` aus der metadata.yaml zu entsprechen.

~~~~~
@unpublished{gpt-pandoc,
  author = {{ChatGPT 4.0}},
  title  = {Was ist Pandoc ?},
  year   = {2024},
  url={https://chat.openai.com/c/ef535195-0e39-4d5c-9c85-cdb7ec18ad03},
  urldate = {2023-02-29}
}
~~~~~ 

Oben sieht man wie ein korrekter Bibtech Eintrag für eine ChatGPT Konversation aussieht. Zusätzlich wurden hier bei URL noch die url des Chats eingetragen - was zwar praktisch ist, uns allerdings nicht von der Pflicht entbindet den Chatverlauf in der DA als PDF einzufügen.
Anzumerkein ist ebenfalls noch das wir hier ein `unpublished` Tag verwenden weil wir hier eben Quellen verwenden die in dieser Form nicht gepublished wurden.
-->

## Systembeschreibung

<!-- HINWEIS: In diesem Abschnitt sollte eine technische Beschreibung des zu entwickelnden Infopoint-Systems erfolgen. Eine Systembeschreibung umfasst typischerweise folgende Aspekte:

- **Systemarchitektur**: Beschreibung der Gesamtstruktur des Systems (Frontend, Backend, Datenbank)
- **Technologiestack**: Auflistung und Begründung der verwendeten Technologien und Frameworks
- **Systemkomponenten**: Detaillierte Beschreibung der einzelnen Module und deren Interaktion
- **Datenflüsse**: Darstellung, wie Informationen im System verarbeitet und weitergeleitet werden
- **Schnittstellen**: Beschreibung der APIs und Verbindungen zu externen Systemen (z.B. Stundenplansoftware, Social-Media-Plattformen)
- **Benutzeroberfläche**: Konzept und Gestaltungsprinzipien der Benutzerschnittstelle
- **Sicherheitskonzept**: Maßnahmen zur Gewährleistung der Datensicherheit und des Datenschutzes

Dieser Abschnitt sollte von den jeweiligen Teammitgliedern entsprechend ihrer Zuständigkeitsbereiche ausgearbeitet werden. --> 
