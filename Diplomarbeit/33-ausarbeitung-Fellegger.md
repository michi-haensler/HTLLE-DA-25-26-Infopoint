# 1. Einführung in den Frontend-Teil

## 1.1 Frontend-spezifische Ausgangssituation und Problemstellung

Im Rahmen des Gesamtprojekts „Digitaler Infopoint“ kommt dem Frontend eine
zentrale Rolle zu, da es die Schnittstelle zwischen den bereitgestellten
Informationen und den Benutzerinnen und Benutzern darstellt. Unabhängig von
der Qualität der zugrunde liegenden Daten oder der verwendeten Hardware
entscheidet die Benutzeroberfläche darüber, ob Informationen schnell,
verständlich und effizient wahrgenommen werden können.

Viele bestehende digitale Anzeigesysteme im schulischen Umfeld sind aus
Frontend-Sicht unzureichend gestaltet. Häufig sind Oberflächen statisch,
unübersichtlich oder schlecht wartbar. Inhalte werden fest im Quellcode
hinterlegt oder können nur mit technischem Aufwand geändert werden. Dies führt
dazu, dass Informationen entweder nicht aktuell sind oder Anpassungen nur mit
Zeitverzögerung erfolgen können (vgl. @mdn_learn).

Ein weiteres Problem stellt die mangelnde Benutzerfreundlichkeit dar. Gerade
bei Infopoints, die auf großen Displays im öffentlichen Raum eingesetzt
werden, sind klare Strukturen, gute Lesbarkeit und eine intuitive Navigation
entscheidend. Ungeeignete Schriftgrößen, geringe Kontraste oder überladene
Layouts erschweren die schnelle Informationsaufnahme und mindern den Nutzen
des Systems erheblich (vgl. @nng_usability).

Aus Frontend-Sicht besteht zudem die Herausforderung, unterschiedliche
Inhaltstypen wie Texte, Bilder, Lagepläne oder Stundenpläne einheitlich und
konsistent darzustellen. Ohne ein durchdachtes Komponenten- und
Designkonzept führt dies schnell zu inkonsistenten Oberflächen und schwer
wartbarem Code. Eine moderne Frontend-Architektur ist daher notwendig, um eine
skalierbare, erweiterbare und langfristig wartbare Lösung zu ermöglichen.

Diese Ausgangssituation verdeutlicht die Notwendigkeit eines modernen,
komponentenbasierten Frontends, das dynamische Inhalte aus einem
Content-Management-System verarbeitet, eine klare Benutzerführung bietet und
gleichzeitig den Wartungsaufwand reduziert.

## 1.2 Zielsetzung des Frontend-Systems

Die Zielsetzung des Frontend-Systems besteht darin, eine benutzerfreundliche,
übersichtliche und technisch wartbare Benutzeroberfläche für den digitalen
Infopoint bereitzustellen. Das Frontend fungiert dabei als zentrale
Schnittstelle zwischen den im Hintergrund verwalteten Inhalten und den
Endnutzerinnen und Endnutzern und hat somit maßgeblichen Einfluss auf die
Nutzbarkeit des Gesamtsystems.

Ein wesentliches Ziel ist die klare und intuitive Darstellung von
Informationen. Inhalte wie Neuigkeiten, Termine, Lagepläne oder Stundenpläne
sollen so aufbereitet werden, dass sie auf großen Displays schnell erfasst
werden können. Dabei liegt der Fokus auf einer klaren Strukturierung, gut
lesbarer Typografie und einer konsistenten visuellen Gestaltung, um die
Informationsaufnahme zu erleichtern (vgl. @nng_usability).

Darüber hinaus soll das Frontend dynamische Inhalte verarbeiten können, die
über ein Content-Management-System bereitgestellt werden. Die Inhalte dürfen
nicht statisch im Quellcode hinterlegt sein, sondern müssen zur Laufzeit
geladen und dargestellt werden. Dieses Ziel stellt sicher, dass Aktualisierungen
ohne Änderungen am Frontend-Code möglich sind und der Wartungsaufwand reduziert
wird (vgl. @contentful_headless).

Ein weiteres Ziel des Frontend-Systems ist die technische Wartbarkeit und
Erweiterbarkeit. Durch eine komponentenbasierte Architektur sollen
wiederverwendbare UI-Bausteine geschaffen werden, die eine konsistente
Gestaltung ermöglichen und zukünftige Erweiterungen erleichtern. Neue Seiten
oder Funktionen sollen mit möglichst geringem Aufwand integrierbar sein (vgl.
@react_docs).

Zusätzlich spielt die Performance des Frontends eine zentrale Rolle. Kurze
Ladezeiten, flüssige Übergänge und ein responsives Verhalten sollen eine
angenehme Benutzererfahrung gewährleisten. Insbesondere bei einem öffentlich
zugänglichen Infopoint ist eine stabile und zuverlässige Darstellung der
Inhalte essenziell (vgl. @webdev_performance).

## 1.3 Anforderungen an die Web-Oberfläche

Die Web-Oberfläche des digitalen Infopoints muss sowohl funktionale als auch
nicht-funktionale Anforderungen erfüllen, um den Einsatz im schulischen Umfeld
zu ermöglichen. Eine zentrale Anforderung ist die klare und übersichtliche
Darstellung von Informationen. Da der Infopoint in öffentlich zugänglichen
Bereichen eingesetzt wird, müssen Inhalte schnell erfassbar sein, ohne dass
eine aktive Interaktion oder längere Beschäftigung mit der Oberfläche
erforderlich ist.

Ein wesentlicher Aspekt stellt die Lesbarkeit dar. Schriftgrößen, Kontraste und
Abstände müssen so gewählt werden, dass Informationen auch aus größerer
Entfernung gut erkennbar sind. Eine konsistente Typografie sowie ein
reduziertes, ruhiges Layout tragen wesentlich dazu bei, die visuelle
Wahrnehmung zu unterstützen und eine Überforderung der Benutzerinnen und
Benutzer zu vermeiden (vgl. @nng_usability).

Darüber hinaus muss die Web-Oberfläche dynamisch auf unterschiedliche
Inhaltstypen reagieren können. Texte, Bilder, Lagepläne oder Stundenpläne
werden aus einem Content-Management-System geladen und müssen einheitlich
dargestellt werden. Die Oberfläche darf dabei nicht von festen Inhalten im
Quellcode abhängig sein, sondern muss flexibel auf Änderungen reagieren können
(vgl. @contentful_headless).

Auch die Performance ist eine zentrale Anforderung an das Frontend. Die
Web-Oberfläche soll kurze Ladezeiten aufweisen und flüssig reagieren, um eine
durchgehend angenehme Benutzererfahrung zu gewährleisten. Insbesondere bei
bildlastigen Inhalten ist auf eine effiziente Darstellung zu achten, da lange
Ladezeiten die Akzeptanz des Systems negativ beeinflussen können (vgl.
@webdev_performance).

Zusätzlich spielt die Wartbarkeit des Frontends eine entscheidende Rolle. Die
Web-Oberfläche soll auf einer klaren Komponentenstruktur basieren, sodass
wiederverwendbare UI-Elemente entstehen. Diese Struktur erleichtert nicht nur
die Weiterentwicklung, sondern stellt auch sicher, dass Design- und
Funktionsanpassungen konsistent umgesetzt werden können (vgl. @react_docs).

# 2. Grundlagen moderner Webentwicklung

## 2.1 Client-Server-Modell aus Frontend-Sicht

Das Client-Server-Modell bildet die grundlegende Architektur moderner
Webanwendungen und ist auch für das Frontend des digitalen Infopoints von
zentraler Bedeutung. Dabei übernimmt der Client, in diesem Fall der Webbrowser
auf dem Infopoint-Display, die Darstellung der Benutzeroberfläche sowie die
Interaktion mit den Benutzerinnen und Benutzern. Der Server stellt hingegen
die benötigten Daten und Dienste bereit.

Aus Frontend-Sicht besteht die Hauptaufgabe des Clients darin, Anfragen an den
Server zu senden und die empfangenen Daten in geeigneter Form darzustellen.
Diese Kommunikation erfolgt in der Regel über das HTTP-Protokoll. Der Client
fordert dabei gezielt Daten an, etwa Neuigkeiten, Termine oder Lagepläne, und
erhält diese in strukturierter Form zurück, meist als JSON-Daten (vgl.
@mdn_http).

Ein wesentliches Merkmal des Client-Server-Modells ist die klare Trennung von
Darstellung und Datenhaltung. Das Frontend ist ausschließlich für die visuelle
Aufbereitung und Benutzerinteraktion verantwortlich, während die Verwaltung
und Speicherung der Inhalte auf Serverseite erfolgt. Diese Trennung ermöglicht
es, das Frontend unabhängig vom Backend weiterzuentwickeln oder auszutauschen,
ohne die gesamte Anwendung neu gestalten zu müssen (vgl.
@client_server_wiki).

Für den digitalen Infopoint bedeutet dies, dass alle angezeigten Inhalte zur
Laufzeit vom Server geladen werden. Das Frontend reagiert dynamisch auf diese
Daten und aktualisiert die Benutzeroberfläche entsprechend, ohne dass ein
vollständiger Seitenneuladevorgang notwendig ist. Dadurch können Informationen
jederzeit aktuell gehalten werden, ohne den laufenden Betrieb des Infopoints
zu unterbrechen.

## 2.2 REST-Architektur und API-Kommunikation aus Frontend-Sicht

Für die Kommunikation zwischen Frontend und Backend des digitalen Infopoints
kommt eine REST-basierte Architektur zum Einsatz. REST (Representational State
Transfer) beschreibt einen Architekturstil für verteilte Systeme, bei dem
Ressourcen eindeutig über URLs adressiert und über standardisierte
HTTP-Methoden angesprochen werden. Aus Frontend-Sicht stellt REST eine
strukturierte und leicht verständliche Möglichkeit dar, Daten vom Server
abzurufen und weiterzuverarbeiten (vgl. @rest_api).

Im Kontext des Frontends werden hauptsächlich Lesezugriffe auf Daten
durchgeführt. Über HTTP-GET-Anfragen fordert das Frontend Inhalte wie
Neuigkeiten, Termine oder Lehrpersoneninformationen vom Server an. Die
Antworten werden typischerweise im JSON-Format übermittelt, da dieses Format
leicht zu verarbeiten ist und sich gut für die Übertragung strukturierter
Daten eignet (vgl. @mdn_fetch).

Ein wesentlicher Vorteil der REST-Architektur besteht in ihrer
Zustandslosigkeit. Jede Anfrage enthält alle notwendigen Informationen, um vom
Server verarbeitet zu werden. Das Frontend muss daher keine serverseitigen
Sitzungszustände verwalten, sondern kann Anfragen unabhängig voneinander
stellen. Dies vereinfacht die Implementierung im Frontend und erhöht die
Skalierbarkeit des Gesamtsystems (vgl. @rest_api).

Für den digitalen Infopoint bedeutet dies, dass Inhalte jederzeit aktuell vom
Server abgerufen werden können. Änderungen im Content-Management-System stehen
dem Frontend unmittelbar zur Verfügung, ohne dass Anpassungen am Quellcode
notwendig sind. Das Frontend übernimmt lediglich die Aufgabe, die empfangenen
Daten korrekt darzustellen und auf Fehler- oder Ladezustände angemessen zu
reagieren.

## 2.3 Single Page Applications (SPA)

Single Page Applications (SPA) stellen ein zentrales Konzept moderner
Frontend-Entwicklung dar und bilden die technische Grundlage für das Frontend
des digitalen Infopoints. Im Gegensatz zu klassischen Webseiten, bei denen bei
jeder Benutzerinteraktion eine neue Seite vom Server geladen wird, besteht
eine SPA aus einer einzigen HTML-Seite. Inhalte werden dynamisch nachgeladen
und innerhalb der bestehenden Seite aktualisiert (vgl. @mdn_spa).

Aus Frontend-Sicht bietet dieses Architekturkonzept wesentliche Vorteile.
Nach dem initialen Laden der Anwendung erfolgen Seitenwechsel und
Inhaltsänderungen ohne vollständigen Neuladevorgang. Dadurch entsteht ein
flüssiges und reaktionsschnelles Benutzererlebnis, das insbesondere bei einem
öffentlich zugänglichen Infopoint von großer Bedeutung ist. Kurze
Reaktionszeiten erleichtern die Informationsaufnahme und erhöhen die
Akzeptanz des Systems (vgl. @spa_wiki).

Ein weiterer Vorteil von Single Page Applications ist die klare Trennung
zwischen Daten und Darstellung. Das Frontend lädt die benötigten Daten über
API-Schnittstellen nach und ist für deren Darstellung verantwortlich. Die
Navigation innerhalb der Anwendung wird clientseitig umgesetzt, wodurch der
Server von wiederholten Seitenanfragen entlastet wird. Diese Architektur
unterstützt zudem eine modulare und komponentenbasierte Entwicklung des
Frontends.

Für den digitalen Infopoint ist das SPA-Konzept besonders geeignet, da die
Anwendung überwiegend zur Anzeige von Informationen dient und nur wenige, klar
definierte Interaktionsmöglichkeiten bietet. Inhalte wie Neuigkeiten,
Termine oder Lagepläne können dynamisch aktualisiert werden, ohne dass der
laufende Betrieb unterbrochen wird. Gleichzeitig ermöglicht die SPA-Struktur
eine einfache Erweiterung um zusätzliche Seiten oder Funktionen.

## 2.4 Vorteile moderner Frontends im Schulbetrieb

Der Einsatz moderner Frontend-Technologien bietet im schulischen Umfeld
zahlreiche Vorteile, insbesondere im Zusammenhang mit digitalen
Informationssystemen wie dem entwickelten Infopoint. Aus Frontend-Sicht
ermöglichen moderne Webanwendungen eine zeitgemäße, flexible und
benutzerfreundliche Darstellung von Informationen, die an die Anforderungen
öffentlicher Anzeige- und Informationssysteme angepasst ist.

Ein wesentlicher Vorteil moderner Frontends liegt in der Möglichkeit, Inhalte
dynamisch darzustellen. Informationen können zur Laufzeit vom Server geladen
und aktualisiert werden, ohne dass ein Neustart der Anwendung oder ein
manueller Eingriff erforderlich ist. Dadurch stehen aktuelle Inhalte wie
Terminänderungen oder kurzfristige Ankündigungen sofort zur Verfügung, was
insbesondere im Schulbetrieb von großer Bedeutung ist (vgl.
@contentful_headless).

Darüber hinaus tragen moderne Frontends wesentlich zur Verbesserung der
Benutzerfreundlichkeit bei. Durch klare Layouts, gut lesbare Typografie und
eine konsistente visuelle Gestaltung können Informationen auch in stark
frequentierten Bereichen schnell erfasst werden. Eine intuitive
Benutzeroberfläche reduziert die kognitive Belastung der Nutzerinnen und
Nutzer und erhöht die Akzeptanz des Systems (vgl. @nng_usability).

Ein weiterer Vorteil besteht in der Wartbarkeit und Erweiterbarkeit. Moderne
Frontend-Frameworks setzen auf komponentenbasierte Architekturen, die eine
saubere Trennung von Funktionalität und Darstellung ermöglichen. Dadurch
können einzelne UI-Elemente wiederverwendet und neue Funktionen mit geringem
Aufwand ergänzt werden. Dies ist besonders im schulischen Umfeld relevant, da
Anforderungen sich im Laufe der Zeit ändern können (vgl. @react_docs).

Zusätzlich leisten moderne Frontends einen Beitrag zur Nachhaltigkeit. Durch
die digitale Bereitstellung von Informationen kann der Bedarf an gedruckten
Aushängen und Informationsblättern reduziert werden. Dies senkt nicht nur den
Materialverbrauch, sondern vereinfacht auch die Aktualisierung von Inhalten,
da Änderungen zentral vorgenommen werden können.

# 3. React als technologische Grundlage des Frontends

## 3.1 Auswahl des Frontend-Frameworks

Für die Umsetzung des Frontends des digitalen Infopoints wurde ein modernes
JavaScript-Framework benötigt, das eine komponentenbasierte Entwicklung,
dynamische Inhaltsdarstellung und eine langfristige Wartbarkeit ermöglicht.
Aus Frontend-Sicht fiel die Wahl auf React, da dieses Framework eine hohe
Flexibilität bietet und sich besonders für die Entwicklung von Single Page
Applications eignet.

Ein zentrales Kriterium bei der Auswahl des Frameworks war die
Komponentenorientierung. React ermöglicht es, die Benutzeroberfläche in
kleine, wiederverwendbare Komponenten zu unterteilen. Diese Komponenten
kapseln sowohl Logik als auch Darstellung und können unabhängig voneinander
entwickelt, getestet und erweitert werden. Dadurch entsteht eine klare
Struktur, die die Wartbarkeit des Frontends wesentlich verbessert (vgl.
@react_docs).

Ein weiterer wichtiger Aspekt ist die weite Verbreitung von React sowie die
große Community. Durch die hohe Akzeptanz des Frameworks stehen zahlreiche
Bibliotheken, Werkzeuge und Dokumentationen zur Verfügung. Dies erleichtert
die Entwicklung und reduziert das Risiko, auf proprietäre oder schlecht
unterstützte Lösungen angewiesen zu sein (vgl. @react_community).

Darüber hinaus unterstützt React eine effiziente Aktualisierung der
Benutzeroberfläche durch das Konzept des virtuellen DOM. Änderungen am
Anwendungszustand führen nicht zu einem vollständigen Neurendern der Seite,
sondern nur zu gezielten Aktualisierungen der betroffenen Komponenten. Dies
trägt wesentlich zur Performance bei und ist insbesondere für einen
dauerhaft laufenden Infopoint von Bedeutung (vgl. @react_vdom).

## 3.2 Komponentenbasierte Architektur in React

Ein zentrales Konzept von React ist die komponentenbasierte Architektur. Dabei
wird die Benutzeroberfläche nicht als monolithische Einheit entwickelt,
sondern in viele kleine, voneinander unabhängige Komponenten zerlegt. Jede
Komponente übernimmt eine klar definierte Aufgabe und ist für einen
bestimmten Teil der Benutzeroberfläche verantwortlich.

Aus Frontend-Sicht bietet dieser Ansatz erhebliche Vorteile für die
Strukturierung und Wartbarkeit des Codes. Wiederkehrende UI-Elemente wie
Navigationsleisten, Karten, Listen oder Buttons können als eigenständige
Komponenten umgesetzt und an mehreren Stellen innerhalb der Anwendung
wiederverwendet werden. Änderungen an einer Komponente wirken sich dadurch
konsistent auf alle Verwendungsstellen aus (vgl. @react_docs).

Darüber hinaus fördert die komponentenbasierte Architektur eine klare Trennung
von Verantwortlichkeiten. Jede Komponente kapselt ihre eigene Logik, ihren
Zustand sowie ihre Darstellung. Dies erleichtert nicht nur das Verständnis
des Codes, sondern auch das Testen einzelner Funktionseinheiten. Fehler können
gezielt lokalisiert und behoben werden, ohne Auswirkungen auf andere Teile
der Anwendung zu verursachen.

Für den digitalen Infopoint ist dieser Ansatz besonders geeignet, da viele
Seiten ähnlich aufgebaut sind, sich jedoch in ihren Inhalten unterscheiden.
Durch parametrisierbare Komponenten können unterschiedliche Inhalte mit
derselben Struktur dargestellt werden. Beispielsweise können Neuigkeiten,
Termine oder Lehrpersonen auf Basis derselben Kartenkomponente visualisiert
werden.

Zusätzlich unterstützt die komponentenbasierte Architektur die
Weiterentwicklung des Frontends. Neue Funktionen oder Seiten können durch
das Ergänzen weiterer Komponenten realisiert werden, ohne bestehende
Strukturen grundlegend verändern zu müssen. Dies trägt wesentlich zur
Skalierbarkeit und Zukunftssicherheit des Frontend-Systems bei (vgl.
@component_architecture).

## 3.3 State-Management im React-Frontend

Ein zentrales Element moderner Frontend-Anwendungen ist das State-Management.
Der sogenannte „State“ beschreibt dabei den aktuellen Zustand einer
Anwendung, der sich im Laufe der Nutzung verändern kann. Dazu zählen unter
anderem geladene Daten, ausgewählte Inhalte oder der aktuelle
Navigationszustand. Im Frontend des digitalen Infopoints spielt das
State-Management eine wesentliche Rolle, da Inhalte dynamisch geladen und
angezeigt werden.

React stellt mit sogenannten Hooks grundlegende Mechanismen zur Verwaltung
von Zuständen bereit. Der lokale Komponentenstate wird verwendet, um
UI-bezogene Zustände wie Ladeindikatoren, ausgewählte Elemente oder aktuell
angezeigte Inhalte zu verwalten. Dieser Ansatz ermöglicht eine klare und
übersichtliche Strukturierung des Frontend-Codes und stellt sicher, dass
Zustandsänderungen automatisch zu einer Aktualisierung der Benutzeroberfläche
führen (vgl. @react_hooks).

Neben lokalem State kann es erforderlich sein, Zustände über mehrere
Komponenten hinweg zu teilen. In solchen Fällen bietet React mit der Context
API eine Möglichkeit, globale Zustände zentral bereitzustellen. Dies ist
insbesondere dann sinnvoll, wenn mehrere Komponenten auf dieselben Daten
zugreifen müssen, etwa auf global geladene Inhalte oder Konfigurationswerte
des Infopoints (vgl. @react_context).

Für den digitalen Infopoint ist ein bewusst einfach gehaltenes
State-Management ausreichend, da die Anwendung primär zur Anzeige von
Informationen dient und nur begrenzte Interaktionsmöglichkeiten bietet. Der
Verzicht auf komplexe externe State-Management-Bibliotheken reduziert die
Komplexität des Frontends und verbessert die Wartbarkeit. Gleichzeitig bleibt
die Anwendung übersichtlich und leicht nachvollziehbar.

Zusätzlich ist ein kontrollierter Umgang mit asynchronen Zuständen
erforderlich. Beim Laden von Daten über API-Schnittstellen müssen Lade- und
Fehlerzustände berücksichtigt werden, um der Benutzerin oder dem Benutzer
angemessenes Feedback zu geben. Eine klare Trennung zwischen Ladezustand,
Fehlerzustand und erfolgreicher Datenanzeige trägt wesentlich zur Stabilität
und Benutzerfreundlichkeit des Frontends bei.

## 3.4 Routing und Navigation im React-Frontend

Für die Strukturierung und Navigation innerhalb des Frontends des digitalen
Infopoints ist ein clientseitiges Routing erforderlich. Da die Anwendung als
Single Page Application umgesetzt ist, erfolgt der Seitenwechsel nicht durch
das erneute Laden einzelner HTML-Seiten, sondern durch das dynamische Anzeigen
unterschiedlicher Komponenten innerhalb der bestehenden Anwendung.

Das Routing übernimmt im React-Umfeld eine zentrale Bibliothek, die es
ermöglicht, URLs bestimmten Komponenten zuzuordnen. Aus Frontend-Sicht
erlaubt dies eine klare Trennung der einzelnen Seitenbereiche, wie etwa
Startseite, Neuigkeiten, Termine oder Lagepläne. Jede Route repräsentiert
dabei einen klar abgegrenzten Anwendungszustand, der direkt über die URL
angesprochen werden kann (vgl. @react_router).

Ein wesentlicher Vorteil des clientseitigen Routings ist die verbesserte
Benutzererfahrung. Seitenwechsel erfolgen ohne vollständigen Neuladevorgang,
was zu kurzen Reaktionszeiten und flüssigen Übergängen führt. Gerade bei einem
öffentlich zugänglichen Infopoint ist dies entscheidend, da die Anwendung
dauerhaft verfügbar sein und schnell reagieren muss.

Darüber hinaus ermöglicht das Routing eine strukturierte Navigation innerhalb
der Anwendung. Navigationskomponenten wie eine feste Menüleiste oder
klickbare Karten können gezielt auf definierte Routen verweisen. Dadurch wird
eine intuitive Benutzerführung unterstützt und die Orientierung innerhalb der
Anwendung erleichtert (vgl. @spa_navigation).

Für den digitalen Infopoint ist ein bewusst einfach gehaltenes
Navigationskonzept ausreichend. Die Anzahl der verfügbaren Seiten ist
überschaubar, und die Navigation soll auf das Wesentliche reduziert bleiben.
Dies minimiert die Komplexität des Frontends und trägt dazu bei, dass
Informationen schnell gefunden werden können.

## 3.5 Datenbindung und Rendering in React

Ein zentrales Merkmal von React ist die enge Verknüpfung von Daten und
Benutzeroberfläche. Änderungen an den zugrunde liegenden Daten führen
automatisch zu einer Aktualisierung der dargestellten Inhalte. Dieser Prozess
wird als deklaratives Rendering bezeichnet und stellt eine wesentliche
Vereinfachung gegenüber klassischen, imperativen Ansätzen dar.

Aus Frontend-Sicht bedeutet deklaratives Rendering, dass der gewünschte
Zustand der Benutzeroberfläche beschrieben wird, ohne explizit festzulegen,
wie einzelne DOM-Elemente aktualisiert werden müssen. React übernimmt diese
Aufgabe intern und sorgt dafür, dass Änderungen am State effizient in der
Benutzeroberfläche dargestellt werden. Dies reduziert die Fehleranfälligkeit
und erhöht die Nachvollziehbarkeit des Codes (vgl. @react_rendering).

Die Datenbindung erfolgt in React in der Regel über Props und State. Props
werden verwendet, um Daten von einer übergeordneten Komponente an
untergeordnete Komponenten weiterzugeben. Der State hingegen beschreibt den
lokalen oder globalen Zustand der Anwendung und kann sich im Laufe der
Nutzung verändern. Durch diese klare Trennung lassen sich Datenflüsse im
Frontend gut nachvollziehen und kontrollieren (vgl. @react_props_state).

Für den digitalen Infopoint ist dieses Konzept besonders relevant, da Inhalte
dynamisch aus einer API geladen werden. Sobald neue Daten empfangen werden,
aktualisiert React automatisch die entsprechenden UI-Komponenten. Dadurch
können beispielsweise Neuigkeiten, Termine oder Lagepläne ohne manuelle
DOM-Manipulation dargestellt werden.

Ein weiterer wichtiger Aspekt ist die effiziente Aktualisierung der
Benutzeroberfläche. React vergleicht den aktuellen Zustand der UI mit dem
vorherigen Zustand und nimmt nur jene Änderungen am DOM vor, die tatsächlich
erforderlich sind. Dieses Verfahren trägt wesentlich zur Performance bei und
ist insbesondere für Anwendungen relevant, die dauerhaft in Betrieb sind
(vgl. @react_vdom).

## 3.6 Styling und UI-Gestaltung im React-Frontend

Die visuelle Gestaltung der Benutzeroberfläche spielt eine zentrale Rolle für
die Akzeptanz und Nutzbarkeit des digitalen Infopoints. Aus Frontend-Sicht
besteht die Aufgabe des Stylings darin, Inhalte nicht nur ästhetisch
ansprechend, sondern vor allem übersichtlich, konsistent und gut lesbar
darzustellen. Insbesondere bei öffentlich zugänglichen Displays ist eine klare
visuelle Struktur entscheidend.

Moderne React-Anwendungen bieten unterschiedliche Möglichkeiten zur Umsetzung
von Styling-Konzepten. Ziel ist es dabei, Styles möglichst modular und
wartbar zu gestalten. Durch die Kapselung von Styles auf Komponentenebene kann
verhindert werden, dass sich Designänderungen ungewollt auf andere Teile der
Anwendung auswirken. Dieser Ansatz unterstützt eine saubere Trennung von
Darstellung und Logik und verbessert die Wartbarkeit des Frontends (vgl.
@css_modular).

Ein weiterer wichtiger Aspekt der UI-Gestaltung ist die Konsistenz. Farben,
Schriftarten, Abstände und UI-Elemente müssen einheitlich verwendet werden, um
eine klare visuelle Sprache zu schaffen. Ein konsistentes Design erleichtert
den Benutzerinnen und Benutzern die Orientierung und trägt dazu bei, Inhalte
schneller zu erfassen (vgl. @material_design).

Für den digitalen Infopoint ist zudem die Anpassung an große Displays von
Bedeutung. Bedienelemente müssen ausreichend groß dimensioniert sein, und die
Anordnung der Inhalte sollte auch aus größerer Entfernung gut wahrnehmbar
bleiben. Eine reduzierte Gestaltung ohne überflüssige visuelle Effekte
unterstützt die schnelle Informationsaufnahme und verhindert Ablenkungen.

Zusätzlich spielt die Trennung von globalen und komponentenspezifischen Styles
eine wichtige Rolle. Während grundlegende Designvorgaben wie Farben oder
Schriftarten global definiert werden, sollten spezifische Layout- und
Darstellungsregeln direkt an den jeweiligen Komponenten verankert sein. Dieser
Ansatz erleichtert die Pflege des Designs und unterstützt eine konsistente
Weiterentwicklung der Benutzeroberfläche.

# 4. Praktische Umsetzung des Frontends

## 4.1 Projektsetup und Entwicklungsumgebung

Zu Beginn der praktischen Umsetzung des Frontends wurde eine geeignete
Projektstruktur geschaffen, die eine übersichtliche Entwicklung und eine
langfristige Wartbarkeit ermöglicht. Das Frontend wurde als eigenständiges
Projekt aufgesetzt und unabhängig vom Backend entwickelt, um eine klare
Trennung der Verantwortlichkeiten sicherzustellen.

Für die Entwicklung wurde eine moderne JavaScript-Entwicklungsumgebung
verwendet, die schnelle Build-Zeiten, ein effizientes Hot-Reloading sowie eine
einfache Erweiterbarkeit bietet. Dadurch konnten Änderungen an der
Benutzeroberfläche unmittelbar überprüft werden, was den Entwicklungsprozess
beschleunigte und die iterative Verbesserung des Frontends unterstützte.

Die Projektstruktur wurde von Beginn an klar gegliedert. Wiederverwendbare
UI-Komponenten, seitenbezogene Komponenten, statische Assets sowie
Service-Module zur API-Kommunikation wurden in getrennten Verzeichnissen
organisiert. Diese Struktur erleichtert die Orientierung im Code und stellt
sicher, dass einzelne Bestandteile des Frontends unabhängig voneinander
weiterentwickelt werden können.

Zusätzlich wurde ein Versionsverwaltungssystem eingesetzt, um Änderungen am
Quellcode nachvollziehbar zu dokumentieren und eine strukturierte
Zusammenarbeit im Team zu ermöglichen. Durch die Verwendung von klaren
Commit-Strukturen konnten Entwicklungsschritte sauber nachvollzogen und bei
Bedarf rückgängig gemacht werden.

Insgesamt bildet das initiale Projektsetup die Grundlage für eine stabile und
strukturierte Frontend-Entwicklung. Eine saubere Entwicklungsumgebung sowie
eine durchdachte Projektstruktur sind entscheidend, um die Anforderungen des
digitalen Infopoints effizient umsetzen und das Frontend langfristig pflegen
zu können.

## 4.2 Projekt- und Ordnerstruktur des Frontends

Eine klare und nachvollziehbare Projekt- und Ordnerstruktur ist eine zentrale
Voraussetzung für die Wartbarkeit und Erweiterbarkeit des Frontends. Bereits zu
Beginn der Implementierung wurde darauf geachtet, den Quellcode logisch zu
gliedern und Verantwortlichkeiten eindeutig zu trennen. Dies erleichtert nicht
nur die eigene Entwicklung, sondern auch die Zusammenarbeit im Team.

Das Frontend ist in mehrere Hauptverzeichnisse unterteilt, die jeweils eine
klar definierte Aufgabe erfüllen. Wiederverwendbare UI-Komponenten sind in
einem eigenen Komponentenverzeichnis zusammengefasst. Diese Komponenten
bilden die grundlegenden Bausteine der Benutzeroberfläche, wie beispielsweise
Navigationsleisten, Karten oder Layout-Container, und werden an verschiedenen
Stellen der Anwendung eingesetzt.

Seitenbezogene Komponenten, die jeweils eine vollständige Ansicht des
Infopoints repräsentieren, sind in einem separaten Verzeichnis organisiert.
Jede Seite bündelt die Logik und Darstellung für einen bestimmten
Funktionsbereich, etwa die Startseite, die Anzeige von Neuigkeiten oder die
Darstellung von Lageplänen. Durch diese Trennung bleibt der Aufbau der
Anwendung übersichtlich und leicht verständlich.

Statische Ressourcen wie Bilder, Icons oder Schriftarten werden in einem
eigenen Asset-Verzeichnis verwaltet. Dies ermöglicht eine zentrale Pflege
dieser Dateien und verhindert eine unstrukturierte Verteilung statischer
Inhalte im gesamten Projekt. Änderungen an grafischen Elementen können so
gezielt vorgenommen werden, ohne den Anwendungscode zu beeinflussen.

Die Kommunikation mit dem Backend und dem Content-Management-System ist in
eigenen Service- oder Utility-Modulen gekapselt. Diese Module übernehmen das
Laden der Daten über API-Schnittstellen und stellen sie dem restlichen
Frontend in strukturierter Form zur Verfügung. Durch diese Abstraktion bleibt
die Darstellungsebene vom technischen Zugriff auf externe Datenquellen
getrennt.

## 4.3 Umsetzung der Navigation und des Routings

Die Navigation stellt ein zentrales Element des Frontends dar, da sie den
Benutzerinnen und Benutzern den Zugriff auf die verschiedenen Funktionen des
digitalen Infopoints ermöglicht. Bei der Umsetzung wurde besonderer Wert auf
Übersichtlichkeit und eine einfache Bedienung gelegt, da der Infopoint im
öffentlichen Raum eingesetzt wird und schnell verständlich sein muss.

Die Navigation wurde als eigene, wiederverwendbare Komponente umgesetzt und
ist auf allen relevanten Seiten des Frontends präsent. Sie bietet einen
direkten Zugriff auf die wichtigsten Bereiche der Anwendung, wie etwa die
Startseite, Neuigkeiten, Termine, Lagepläne oder Stundenpläne. Durch die
zentrale Platzierung der Navigation wird eine konsistente Benutzerführung
gewährleistet.

Das Routing innerhalb der Anwendung erfolgt clientseitig. Jeder
Navigationspunkt ist einer definierten Route zugeordnet, die wiederum eine
konkrete Seitenkomponente rendert. Dadurch wird sichergestellt, dass
Seitenwechsel ohne vollständigen Neuladevorgang stattfinden und die Anwendung
reaktionsschnell bleibt. Die URL-Struktur ist dabei klar und logisch
aufgebaut, sodass einzelne Seiten direkt aufgerufen werden können.

Zusätzlich wurde darauf geachtet, die Navigation möglichst einfach zu halten.
Da der Infopoint keine komplexen Benutzerinteraktionen erfordert, wurde auf
verschachtelte Menüs oder überladene Navigationsstrukturen verzichtet. Diese
Reduktion auf das Wesentliche erleichtert die Orientierung und trägt dazu bei,
dass Informationen schnell gefunden werden können.

Die Umsetzung der Navigation und des Routings bildet somit eine wichtige
Grundlage für die Benutzerfreundlichkeit des Frontends. Durch eine klare
Struktur, kurze Reaktionszeiten und eine konsistente Darstellung wird der
digitale Infopoint den Anforderungen des schulischen Einsatzes gerecht.

## 4.4 Umsetzung der Startseite und zentraler UI-Komponenten

Die Startseite des digitalen Infopoints bildet den ersten Berührungspunkt für
die Benutzerinnen und Benutzer und übernimmt somit eine zentrale Rolle im
Frontend. Ziel der Umsetzung war es, eine übersichtliche Einstiegsseite zu
schaffen, von der aus alle wichtigen Funktionen des Infopoints schnell
erreichbar sind. Die Startseite dient dabei als zentrale Übersicht über die
angebotenen Inhalte und Funktionen.

Die Gestaltung der Startseite basiert auf einem kartenbasierten Layout.
Zentrale Funktionen wie Neuigkeiten, Termine, Lagepläne oder Stundenpläne
werden in Form von klar strukturierten UI-Elementen dargestellt. Diese
Karten sind visuell voneinander abgegrenzt und ermöglichen einen direkten
Zugriff auf die jeweiligen Bereiche. Durch diese Darstellung wird eine
intuitive Bedienung unterstützt und die Orientierung erleichtert.

Zentrale UI-Komponenten wurden als wiederverwendbare Bausteine umgesetzt.
Dazu zählen unter anderem Karten, Buttons, Container-Elemente sowie
Layout-Komponenten. Diese Komponenten kapseln ihre jeweilige Darstellung und
Logik und können flexibel in verschiedenen Bereichen des Frontends eingesetzt
werden. Änderungen an Design oder Verhalten einer Komponente wirken sich somit
konsistent auf alle Verwendungsstellen aus.

Bei der Umsetzung wurde darauf geachtet, die Komponenten möglichst generisch
zu gestalten. Inhalte wie Texte, Bilder oder Zielseiten werden über Parameter
übergeben, sodass dieselbe Komponente für unterschiedliche Zwecke verwendet
werden kann. Dieser Ansatz reduziert Code-Duplikate und erhöht die
Wartbarkeit des Frontends.

Die Startseite und die zentralen UI-Komponenten bilden gemeinsam die visuelle
Grundlage des digitalen Infopoints. Durch die Kombination aus klarer
Struktur, Wiederverwendbarkeit und reduzierter Gestaltung wird eine
benutzerfreundliche Oberfläche geschaffen, die den schnellen Zugriff auf
Informationen unterstützt und den Anforderungen des schulischen Einsatzes
gerecht wird.

## 4.5 Anbindung an das Content-Management-System (CMS)

Ein zentraler Bestandteil der praktischen Umsetzung des Frontends ist die
Anbindung an ein Content-Management-System. Das CMS dient als zentrale
Datenquelle für alle Inhalte, die im digitalen Infopoint angezeigt werden.
Dazu zählen unter anderem Neuigkeiten, Termine, Lagepläne, Stundenpläne sowie
weitere informationsrelevante Inhalte.

Die Kommunikation zwischen Frontend und CMS erfolgt über klar definierte
API-Schnittstellen. Das Frontend ruft die benötigten Inhalte zur Laufzeit ab
und verarbeitet die empfangenen Daten, um sie in der Benutzeroberfläche
darzustellen. Durch diesen Ansatz sind die dargestellten Inhalte nicht fest im
Quellcode hinterlegt, sondern können unabhängig vom Frontend gepflegt und
aktualisiert werden.

Bei der Implementierung wurde darauf geachtet, den Zugriff auf das CMS in
eigenen Service-Modulen zu kapseln. Diese Module übernehmen die Verantwortung
für das Laden der Daten und stellen sie den jeweiligen Seiten- oder
UI-Komponenten in strukturierter Form zur Verfügung. Dadurch bleibt die
Darstellungsebene vom technischen Zugriff auf das CMS getrennt, was die
Wartbarkeit des Frontends erhöht.

Ein weiterer wichtiger Aspekt ist der Umgang mit Lade- und Fehlerzuständen.
Da die Inhalte asynchron geladen werden, muss das Frontend auf unterschiedliche
Zustände reagieren können. Während des Ladevorgangs werden entsprechende
Hinweise angezeigt, und bei Fehlern in der Kommunikation mit dem CMS wird eine
geeignete Fehlermeldung ausgegeben. Dieser Ansatz trägt zur Stabilität und
Zuverlässigkeit des Infopoints bei.

Durch die Anbindung an das Content-Management-System wird sichergestellt, dass
der digitale Infopoint jederzeit aktuelle Inhalte anzeigen kann. Gleichzeitig
wird der Pflegeaufwand reduziert, da Änderungen an Inhalten ohne Anpassungen
am Frontend-Code möglich sind. Die CMS-Anbindung bildet somit eine wesentliche
Grundlage für den flexiblen und langfristigen Betrieb des Frontends.

## 4.6 Umsetzung der Inhaltsseiten (Neuigkeiten, Termine, Lagepläne)

Die Inhaltsseiten des digitalen Infopoints bilden den Kern der dargestellten
Informationen. Dazu zählen insbesondere die Seiten für Neuigkeiten, Termine
und Lagepläne. Ziel der Umsetzung war es, diese unterschiedlichen
Inhaltstypen einheitlich darzustellen und gleichzeitig deren spezifische
Anforderungen zu berücksichtigen.

Die Seite für Neuigkeiten dient der Anzeige aktueller schulischer
Informationen. Die Inhalte werden in übersichtlicher Form dargestellt, wobei
Titel, Veröffentlichungsdatum und eine Kurzbeschreibung sichtbar sind. Durch
eine klare Strukturierung können Benutzerinnen und Benutzer schnell erfassen,
welche Informationen neu oder besonders relevant sind. Bei Bedarf kann eine
Detailansicht aufgerufen werden, in der der vollständige Inhalt angezeigt
wird.

Die Terminseite ist auf die chronologische Darstellung von Veranstaltungen
ausgelegt. Termine werden sortiert dargestellt und enthalten neben dem Titel
auch Angaben zu Datum, Uhrzeit und gegebenenfalls Ort. Durch diese klare
Darstellung wird sichergestellt, dass bevorstehende Ereignisse auf einen Blick
erkennbar sind und nicht in einer unübersichtlichen Informationsmenge
untergehen.

Für die Darstellung von Lageplänen wurde eine eigene Inhaltsseite umgesetzt,
die auf bildbasierte Inhalte ausgelegt ist. Lagepläne werden großflächig
angezeigt, um eine gute Lesbarkeit zu gewährleisten. Falls mehrere Pläne
vorhanden sind, etwa für unterschiedliche Stockwerke, kann zwischen diesen
gewechselt werden. Dadurch wird die Orientierung im Schulgebäude
unterstützt.

Alle Inhaltsseiten greifen auf dieselben grundlegenden UI-Komponenten zurück,
beispielsweise Karten- oder Container-Komponenten. Dieser Ansatz sorgt für
eine konsistente Gestaltung über alle Seiten hinweg und reduziert den
Implementierungsaufwand. Unterschiede zwischen den Seiten ergeben sich
ausschließlich durch die jeweiligen Inhalte und deren Struktur.

Die Umsetzung der Inhaltsseiten zeigt, wie unterschiedliche Informationen
innerhalb eines einheitlichen Frontend-Konzepts dargestellt werden können.
Durch klare Strukturen, wiederverwendbare Komponenten und die dynamische
Anbindung an das CMS wird eine übersichtliche und benutzerfreundliche
Darstellung der Inhalte im digitalen Infopoint erreicht.

## 4.7 Umsetzung spezieller Funktionen (Lehrersuche und Screensaver)

Neben den klassischen Inhaltsseiten wurden im Frontend des digitalen
Infopoints auch spezielle Funktionen umgesetzt, die den praktischen Nutzen
des Systems im Schulalltag deutlich erhöhen. Dazu zählen insbesondere die
Lehrersuche sowie ein automatischer Screensaver-Modus.

Die Lehrersuche ermöglicht es Benutzerinnen und Benutzern, gezielt nach
Lehrpersonen zu suchen, ohne das Schulgebäude durchsuchen oder andere
Personen befragen zu müssen. Die Suche erfolgt über eine einfache
Eingabemöglichkeit, bei der die eingegebenen Zeichen direkt mit den geladenen
Daten abgeglichen werden. Die Suchergebnisse werden dynamisch aktualisiert,
sodass relevante Treffer bereits während der Eingabe angezeigt werden.

Die Darstellung der Suchergebnisse erfolgt übersichtlich und kompakt.
Angezeigt werden grundlegende Informationen wie Name und gegebenenfalls
weitere zugeordnete Daten. Durch diese klare Darstellung kann schnell erkannt
werden, ob die gesuchte Lehrperson vorhanden ist. Die Umsetzung der
Lehrersuche zeigt den praktischen Einsatz von State-Management und
dynamischem Rendering im Frontend.

Zusätzlich wurde ein Screensaver-Modus implementiert, der den Infopoint bei
Inaktivität automatisch in einen Präsentationsmodus versetzt. Dieser Modus
dient dazu, den Bildschirm aktiv zu nutzen, wenn keine direkte Interaktion
stattfindet. Im Screensaver werden beispielsweise Bilder der Schule oder
allgemeine Informationen angezeigt, die in regelmäßigen Abständen wechseln.

Die Steuerung des Screensaver-Modus erfolgt zeitgesteuert. Nach einer
definierten Phase ohne Benutzereingabe wird der Screensaver aktiviert. Sobald
eine Interaktion erfolgt, kehrt das Frontend automatisch zur regulären
Ansicht zurück. Diese Funktion ist besonders für den dauerhaften Einsatz des
Infopoints im öffentlichen Raum geeignet und trägt zu einer ansprechenden
Darstellung bei.

Die Umsetzung der speziellen Funktionen verdeutlicht die Flexibilität des
Frontends. Durch den gezielten Einsatz von React-State, wiederverwendbaren
Komponenten und zeitgesteuerten Abläufen konnten Funktionen realisiert
werden, die den digitalen Infopoint über eine reine Informationsanzeige
hinaus erweitern und den Schulalltag effektiv unterstützen.

## 4.8 Fehlerbehandlung, Ladezustände und Benutzerfeedback

Bei der praktischen Umsetzung des Frontends wurde besonderer Wert auf einen
robusten Umgang mit Lade- und Fehlersituationen gelegt. Da der digitale
Infopoint seine Inhalte dynamisch über API-Schnittstellen bezieht, können
Verzögerungen oder Fehler bei der Datenübertragung auftreten. Diese Zustände
müssen im Frontend korrekt behandelt werden, um einen stabilen Betrieb
sicherzustellen.

Beim Laden von Inhalten wird der Benutzerin oder dem Benutzer ein klar
erkennbarer Ladezustand angezeigt. Dadurch wird signalisiert, dass die
Anwendung aktiv arbeitet und Inhalte in Kürze verfügbar sind. Diese
Rückmeldung ist insbesondere bei langsameren Netzwerkverbindungen wichtig,
um Unsicherheit oder Fehlinterpretationen zu vermeiden.

Für den Fall, dass Inhalte nicht erfolgreich geladen werden können, wurden
Fehlerzustände vorgesehen. Anstatt einer leeren oder fehlerhaften Darstellung
zeigt das Frontend eine verständliche Fehlermeldung an. Diese informiert
darüber, dass ein Problem aufgetreten ist, ohne technische Details
preiszugeben. Dadurch bleibt die Benutzeroberfläche auch in Ausnahmefällen
übersichtlich und nutzerfreundlich.

Zusätzlich wurde darauf geachtet, Lade- und Fehlerzustände klar vom regulären
Inhaltszustand zu trennen. Erst wenn Daten erfolgreich geladen wurden, werden
die entsprechenden UI-Komponenten gerendert. Dieser Ansatz verhindert
Inkonsistenzen in der Darstellung und trägt zur Stabilität der Anwendung bei.

Die konsequente Umsetzung von Fehlerbehandlung und Benutzerfeedback erhöht die
Zuverlässigkeit des digitalen Infopoints erheblich. Auch bei temporären
Problemen in der Datenanbindung bleibt das Frontend kontrollierbar und
verständlich, was für den dauerhaften Einsatz im schulischen Umfeld von
großer Bedeutung ist.

## 4.9 Performanceoptimierung im Frontend

Die Performance des Frontends ist ein entscheidender Faktor für den
reibungslosen Betrieb des digitalen Infopoints. Da die Anwendung dauerhaft
läuft und von vielen Personen genutzt wird, müssen Ladezeiten möglichst kurz
gehalten und eine flüssige Darstellung der Inhalte gewährleistet werden. Eine
gute Performance trägt wesentlich zur Benutzerzufriedenheit und zur
Zuverlässigkeit des Systems bei.

Ein zentraler Ansatz zur Performanceoptimierung besteht in der Reduktion der
initialen Ladezeit. Das Frontend wurde so aufgebaut, dass nur jene Ressourcen
geladen werden, die für den Start der Anwendung erforderlich sind. Weitere
Inhalte werden erst dann nachgeladen, wenn sie tatsächlich benötigt werden.
Dadurch wird der Start des Infopoints beschleunigt und die Anwendung ist
schneller einsatzbereit.

Auch beim Umgang mit Daten wurde auf Effizienz geachtet. Inhalte aus dem
Content-Management-System werden gezielt abgerufen und im Frontend
zwischengespeichert, um unnötige wiederholte Anfragen zu vermeiden. Dies
reduziert die Belastung der Schnittstellen und verbessert die Reaktionszeit
der Anwendung, insbesondere bei häufig aufgerufenen Seiten.

Bei der Darstellung von Bildern und anderen medienintensiven Inhalten wurde
darauf geachtet, diese in geeigneter Größe und Qualität einzubinden. Große
Dateien können die Ladezeit erheblich beeinträchtigen und wurden daher
entsprechend optimiert oder erst bei Bedarf geladen. Dieser Ansatz trägt dazu
bei, die Darstellung auch auf weniger leistungsstarker Hardware stabil zu
halten.

Zusätzlich wurde die Anzahl unnötiger Neurender-Vorgänge minimiert. Durch eine
klare Strukturierung der Komponenten und einen bewussten Umgang mit
Zustandsänderungen werden nur jene Teile der Benutzeroberfläche aktualisiert,
die tatsächlich betroffen sind. Dies verbessert die Performance und sorgt für
eine gleichmäßige Darstellung der Inhalte.

Insgesamt stellen die umgesetzten Maßnahmen zur Performanceoptimierung sicher,
dass das Frontend des digitalen Infopoints auch bei längerem Betrieb stabil,
reaktionsschnell und zuverlässig bleibt und den Anforderungen des schulischen
Einsatzes gerecht wird.

## 4.10 Deployment und Betrieb des Frontends

Nach Abschluss der Entwicklungsarbeiten wurde das Frontend für den produktiven
Einsatz vorbereitet und deployt. Ziel des Deployments ist es, die Anwendung
stabil, zuverlässig und dauerhaft auf der vorgesehenen Hardware des
Infopoints betreiben zu können. Dabei wurde darauf geachtet, den
Bereitstellungsprozess möglichst einfach und reproduzierbar zu gestalten.

Im Rahmen des Deployments wird das Frontend in einer optimierten
Produktionsversion bereitgestellt. Diese Version enthält ausschließlich die
für den Betrieb notwendigen Dateien und ist hinsichtlich Ladezeiten und
Performance optimiert. Entwicklungswerkzeuge und Debug-Funktionen werden in
diesem Schritt entfernt, um eine schlanke und stabile Anwendung zu erhalten.

Der Betrieb des Frontends erfolgt im Kiosk- bzw. Präsentationsmodus, sodass
die Anwendung automatisch gestartet wird und ohne Benutzeranmeldung
verfügbar ist. Nach einem Neustart der Hardware steht der digitale Infopoint
somit unmittelbar wieder zur Verfügung. Dieser Ansatz ist besonders für den
Einsatz im öffentlichen Raum geeignet, da keine manuelle Bedienung
erforderlich ist.

Ein weiterer wichtiger Aspekt ist die Wartung im laufenden Betrieb. Da Inhalte
über ein Content-Management-System verwaltet werden, können inhaltliche
Aktualisierungen vorgenommen werden, ohne das Frontend neu deployen zu müssen.
Dies reduziert Ausfallzeiten und erleichtert den langfristigen Betrieb des
Infopoints erheblich.

Zusätzlich wurde darauf geachtet, das Frontend so zu betreiben, dass es auch
bei längerer Laufzeit stabil bleibt. Durch die zuvor umgesetzten Maßnahmen zur
Fehlerbehandlung und Performanceoptimierung wird ein zuverlässiger Betrieb
sichergestellt. Das Deployment und der Betrieb des Frontends bilden somit den
abschließenden Schritt der praktischen Umsetzung und stellen sicher, dass der
digitale Infopoint dauerhaft einsatzbereit ist.

## 4.11 Herausforderungen und Lösungsansätze im Frontend

Während der Entwicklung des Frontends für den digitalen Infopoint traten
verschiedene technische und konzeptionelle Herausforderungen auf, die im
Laufe des Projekts analysiert und gelöst werden mussten. Diese
Herausforderungen betrafen sowohl die technische Umsetzung als auch die
Benutzerfreundlichkeit der Anwendung.

Eine zentrale Herausforderung bestand in der Darstellung unterschiedlicher
Inhaltstypen innerhalb einer einheitlichen Benutzeroberfläche. Inhalte wie
Texte, Bilder, Lagepläne oder Stundenpläne unterscheiden sich stark in ihrer
Struktur und ihren Anforderungen an die Darstellung. Um diesem Problem zu
begegnen, wurde ein komponentenbasierter Ansatz gewählt, bei dem wiederverwendbare
UI-Komponenten flexibel konfiguriert werden können. Dadurch konnten
unterschiedliche Inhalte konsistent dargestellt werden, ohne für jeden
Inhaltstyp eigene Strukturen entwickeln zu müssen.

Eine weitere Herausforderung war der Umgang mit asynchron geladenen Daten.
Da alle Inhalte über API-Schnittstellen bezogen werden, mussten Lade- und
Fehlerzustände zuverlässig erkannt und korrekt dargestellt werden. Dieses
Problem wurde durch eine klare Trennung von Lade-, Fehler- und
Erfolgszuständen im State-Management gelöst. Dadurch bleibt die Anwendung auch
bei temporären Problemen stabil und verständlich für die Benutzerinnen und
Benutzer.

Auch die Performance stellte eine relevante Herausforderung dar, insbesondere
bei der Darstellung bildlastiger Inhalte wie Lageplänen oder im
Screensaver-Modus. Durch gezieltes Nachladen von Inhalten, optimierte
Bildgrößen und eine reduzierte Anzahl an Neurender-Vorgängen konnte eine
flüssige Darstellung erreicht werden.

Darüber hinaus musste die Benutzeroberfläche an den Einsatz im öffentlichen
Raum angepasst werden. Große Displays, unterschiedliche Lichtverhältnisse und
kurze Nutzungsdauer erfordern eine andere Gestaltung als klassische
Desktop-Anwendungen. Diese Herausforderung wurde durch eine reduzierte
Gestaltung, große Bedienelemente und eine klare visuelle Hierarchie gelöst.

## 4.12 Fazit und Ausblick des Frontend-Teils

Im Rahmen dieser Diplomarbeit wurde das Frontend eines digitalen Infopoints
konzipiert und umgesetzt, der den Informationsfluss im Schulalltag nachhaltig
verbessert. Ziel war es, eine moderne, übersichtliche und wartbare
Benutzeroberfläche zu entwickeln, die sowohl Schülerinnen und Schülern als
auch Lehrkräften und Besuchern einen schnellen Zugriff auf relevante
Informationen ermöglicht.

Durch den Einsatz moderner Webtechnologien und eines komponentenbasierten
Architekturansatzes konnte ein Frontend realisiert werden, das flexibel
erweiterbar und langfristig wartbar ist. Die klare Trennung von Darstellung,
Logik und Datenanbindung erleichtert nicht nur die Weiterentwicklung, sondern
auch die Anpassung an zukünftige Anforderungen.

Die praktische Umsetzung hat gezeigt, dass insbesondere die dynamische
Anbindung an ein Content-Management-System einen wesentlichen Mehrwert bietet.
Inhalte können zentral gepflegt und ohne erneutes Deployment im Infopoint
angezeigt werden. Dadurch wird der administrative Aufwand reduziert und die
Aktualität der dargestellten Informationen sichergestellt.

Auch spezielle Funktionen wie die Lehrersuche oder der automatische
Screensaver tragen zur Alltagstauglichkeit des Systems bei. Sie zeigen, dass
das Frontend nicht nur als passive Anzeige dient, sondern aktiv zur
Orientierung und Information innerhalb des Schulgebäudes beiträgt.

Im Ausblick bietet das Frontend zahlreiche Erweiterungsmöglichkeiten. Denkbar
sind unter anderem zusätzliche Informationsbereiche, eine weiterführende
Mehrsprachigkeit oder die Anpassung des Layouts an unterschiedliche
Bildschirmgrößen. Aufgrund der gewählten Architektur können solche
Erweiterungen mit vergleichsweise geringem Aufwand umgesetzt werden.

