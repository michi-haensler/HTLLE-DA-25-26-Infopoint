# Teilaufgabe Schüler Moser Simon
\textauthor{Moser Simon}

## Aufgabenstellung und Verantwortungsbereich
Im Rahmen dieser Diplomarbeit lag der Verantwortungsbereich in der vollständigen Konzeption, Implementierung und Dokumentation der Backend-Komponente des Infopoint-Systems sowie in der technischen Anbindung und Konfiguration des eingesetzten Content-Management-Systems (Cockpit CMS).
Ziel war es, eine stabile serverseitige Grundlage zu schaffen, die Inhalte zentral verwaltet und über klar definierte Schnittstellen für das Frontend bereitstellt.
Der Schwerpunkt der Arbeit umfasste die Entwicklung einer wartbaren Backend-Architektur mit klarer Schichtentrennung, die Definition und Umsetzung konsistenter REST-Endpunkte, die Verarbeitung und Transformation externer Datenquellen sowie die Absicherung der Datenqualität durch Validierung und strukturierte Fehlerbehandlung.
Zusätzlich umfasste der Aufgabenbereich die technische Ausgestaltung der Kommunikation zwischen Backend und externen Systemen, insbesondere die Integration von Cockpit CMS und WebUntis über HTTP-basierte Schnittstellen.
Ein weiterer zentraler Bestandteil war die Trennung von Inhaltspflege und Programmcode.
Durch die CMS-Anbindung können redaktionelle Inhalte wie News, Veranstaltungen oder weitere Informationsbausteine ohne Eingriffe in den Quellcode gepflegt und aktualisiert werden.
Damit wurde sichergestellt, dass das System im schulischen Alltag flexibel betrieben und von organisatorischen Änderungen unabhängig weiterverwendet werden kann.
Darüber hinaus umfasste der Aufgabenbereich die Definition von Betriebs- und Sicherheitsgrundlagen für den lokalen Einsatzkontext.
Das System wurde so ausgelegt, dass es lokal bzw. im Schulnetzwerk zuverlässig betrieben werden kann, nachvollziehbare API-Strukturen bietet und bei Fehlerfällen robuste, für das Frontend verwertbare Rückmeldungen liefert.
Insgesamt bestand die Teilaufgabe darin, ein technisch belastbares, erweiterbares und dokumentiertes Backend zu realisieren, das als zentrale Integrations- und Verarbeitungsschicht des gesamten Infopoint-Projekts fungiert.

## Theorie

### Grundlagen von Backend-Systemen
Das Backend, wie bereits eingangs erwähnt, bildet das "Herz" der Anwendung.
Es ist verantwortlich für alle Operationen, die nicht direkt mit der Darstellung zusammenhängen.
Hier werden Datenbanken angesprochen, Geschäftsregeln formuliert und externe Systeme angebunden.
Obwohl es für Endanwender nicht sichtbar ist, prägt die Qualität des Backends unmittelbar die Nutzererfahrung, da es Verfügbarkeit, Antwortzeiten und Datenkonsistenz bestimmt.
Eine mangelhafte Implementierung kann zu inkonsistenten Daten, langen Wartezeiten oder Ausfällen führen, selbst wenn das Frontend perfekt gestaltet ist.
Ein gut gestaltetes Backend trennt klar zwischen Schichten (Präsentation, Logik, Daten), unterstützt durch dokumentierte Schnittstellen, um zukünftige Erweiterungen und Wartung zu erleichtern.
Dieses Schichtenmodell wird in der Literatur häufig als "Layered Architecture" bezeichnet und ist Bestandteil von Architekturmuster-Katalogen. [@backend-basics]

### Abgrenzung zwischen Frontend und Backend
Bei der Entwicklung moderner Webanwendungen ist eine klare Abgrenzung zwischen Frontend und Backend von zentraler Bedeutung.
Das Frontend stellt die Benutzeroberfläche dar und ist für die visuelle Darstellung sowie die Interaktion mit dem Benutzer zuständig.
Es zeigt Inhalte an, nimmt Eingaben entgegen und leitet diese in Form von Anfragen an das Backend weiter.
Für den Benutzer ist ausschließlich das Frontend sichtbar.
Das Backend hingegen arbeitet im Hintergrund und übernimmt die gesamte Datenverarbeitung sowie die Geschäftslogik des Systems.
Es verarbeitet die vom Frontend gesendeten Anfragen, überprüft und validiert die Daten und stellt die angeforderten Informationen wieder bereit.
Zudem ist das Backend für die Verwaltung der Inhalte und deren strukturierte Bereitstellung verantwortlich, beispielsweise über eine REST-API.
Durch diese klare Trennung wird das System übersichtlicher und besser wartbar.
Änderungen an der Benutzeroberfläche können vorgenommen werden, ohne das Backend anpassen zu müssen, und umgekehrt.
Darüber hinaus ermöglicht die Abgrenzung eine parallele Entwicklung von Frontend und Backend, was den Entwicklungsprozess effizienter gestaltet.

### Client-Server-Architektur
Das Modell der Client-Server-Architektur trennt die Systeme in zwei Rollen den Client, der Dienste anfordert, und den Server, der sie bereitstellt.
Diese Trennung erlaubt eine modulare Entwicklung und eine klare Verantwortungszuweisung.
Clients können unterschiedliche Technologien verwenden, solange sie das vereinbarte Protokoll beherrschen.
In typischen Webanwendungen fungiert das Frontend als Client, das HTTP-Anfragen an ein Backend sendet.
Das Backend bearbeitet diese Anfragen, führt Geschäftslogik aus und greift bei Bedarf auf externe Systeme wie ein CMS zu.
Die Architekturschicht zwischen beiden ist durch eine klar definierte API charakterisiert.
Ein Vorteil der Client-Server-Struktur ist die Skalierbarkeit Server können unabhängig von den Clients vervielfältigt oder ausgetauscht werden, während die Clients unverändert bleiben.
Dies unterstützt spätere Erweiterungen und einen stabilen Betrieb.
Historisch gesehen geht die Client-Server-Architektur auf frühe Netzwerkanwendungen zurück und bildet die Grundlage für moderne Webarchitekturen.
Sie erlaubt auch den Einsatz von Zwischenschichten wie Proxies oder Load-Balancers, die zusätzliche Funktionen wie Caching, Sicherheitsfilter oder Verkehrsverteilung übernehmen können.
Neben dem klassischen Modell existieren Varianten wie Peer-to-Peer oder Serverless, doch für die vorliegende Anwendung bleibt das traditionelle Client-Server-Paradigma aufgrund seiner Vorhersagbarkeit und Unterstützung durch etablierte Technologien die sinnvollste Wahl. [@client-server-architecture]

### HTTP, URIs und Statuscodes
HTTP (Hypertext Transfer Protocol) bildet die Grundlage der Kommunikation zwischen Client und Server im Web.
Es definiert Methoden wie GET, POST, PUT und DELETE zur Manipulation von Ressourcen und verwendet URIs (Uniform Resource Identifiers) zur eindeutigen Adressierung dieser Ressourcen.
Statuscodes liefern dem Client unmittelbares Feedback über den Erfolg oder Misserfolg einer Anfrage.
Codes im Bereich 2xx signalisieren Erfolg, 4xx weisen auf Clientfehler hin und 5xx zeigen an, dass auf Serverseite ein Problem aufgetreten ist.
Eine konsistente Nutzung dieser Codes ist essenziell für eine verständliche und zuverlässig integrierbare API.
HTTP ist zustandslos, wird jedoch häufig durch Mechanismen wie Cookies oder Tokens erweitert, um Sitzungsinformationen zu übertragen.
Moderne Implementierungen nutzen zudem persistenten Verbindungen (Keep-Alive) und Komprimierung, um Latenzzeiten zu reduzieren.
In der praktischen Umsetzung des Backends werden Statuscodes unter anderem durch Exception-Handler in Spring Boot gesteuert, die Fehlerinformationen in JSON-Strukturen kapseln und so eine gleichmäßige Schnittstelle für das Frontend gewährleisten.
Zusätzlich werden Header wie `Content-Type` und `Cache-Control` verwendet, um das Verhalten von Clients zu steuern und eine korrekte Interpretation der Daten sicherzustellen. [@http-mdn-web-docs] [@uri-mdn-web-docs]

### REST-Architekturprinzipien
Representational State Transfer (REST) beschreibt ein Set an Designprinzipien für verteilte Systeme.
REST orientiert sich an Ressourcen, die durch URIs identifiziert und durch Repräsentationen (z. B. JSON) ausgetauscht werden.
Zustandslosigkeit bedeutet, dass jede HTTP-Anfrage alle nötigen Informationen enthält, um verarbeitet zu werden der Server speichert keinen Sitzungszustand.
Weitere REST-Charakteristika sind eine einheitliche Schnittstelle, Schichtbarkeit und Cachebarkeit.
Gemeinsam verbessern sie die Modularität und erleichtern die Entwicklung skalierbarer Systems.
In Spring Boot lassen sich diese Prinzipien durch die Verwendung von `@RestController` und passenden HTTP-Methoden direkt abbilden.
Ein erweitertes REST-Prinzip ist HATEOAS (Hypermedia as the Engine of Application State), bei dem Antworten Links enthalten, die den Client durch die verfügbaren Aktionen führen.
HATEOAS wird in der Praxis nicht in jedem Backend vollständig umgesetzt, wird jedoch in der Theorie als Möglichkeit zur Reduzierung der Kopplung zwischen Client und Server betrachtet.
In modernen Backends dient REST häufig als architektonisches Leitbild für API-Endpunkte.
Die Ressourcen wie `events` oder `news` werden konsistent benannt und über versionierte Pfade zur Verfügung gestellt, sodass das Frontend unabhängig von internen Implementierungen arbeiten kann.
Die Einhaltung von REST-Prinzipien erleichtert außerdem die Nutzung generischer HTTP-Clients und Testing-Werkzeuge. [@rest-api-architecture] [@rest-api-mdn-web-docs]

### Datenformate: JSON und Serialisierung
JSON (JavaScript Object Notation) ist das dominierende Format für den Datenaustausch in Web-APIs.
Es ist leichtgewichtig, menschenlesbar und wird von praktisch allen Programmiersprachen unterstützt.
Serialisierung bezeichnet den Prozess, ein Objekt in eine byte- oder textbasierte Repräsentation zu überführen Deserialisierung kehrt diesen Vorgang um.
In Java-Anwendungen übernimmt die Bibliothek Jackson diesen Vorgang automatisch, sobald HTTP-Nachrichten über `@RestController` verarbeitet werden.

### Jackson Serialisierungsbibliothek für Java
Jackson ist eine hochperformante Java-Bibliothek für die Verarbeitung von JSON-Daten.
Sie bietet Funktionalität für das Serialisieren (Konvertieren) von Java-Objekten in JSON und das Deserialisieren (Parsen) von JSON-Strings in Java-Objekte.
Im Kontext von Spring Boot erfolgt diese Umwandlung automatisch und transparent wenn eine Controller-Methode ein Java-Objekt zurückgibt, serialisiert Jackson es automatisch zu JSON wenn der Request-Body JSON enthält, deserialisiert Jackson ihn in das entsprechende Java-Objekt.
Jackson bietet zahlreiche Annotationen zur Steuerung dieses Prozesses. [@json-jackson]
Die Annotation `@JsonProperty` wird beispielsweise verwendet, um die JSON-Feldnamen explizit zu definieren, falls diese von den Java-Attributnamen abweichen.
`@JsonIgnore` ermöglicht es, bestimmte Felder bei der Serialisierung auszulassen dies ist besonders wichtig, um sensible Daten nicht nach außen zu geben.
`@JsonFormat` kontrolliert die Formatierung von Datumstypen oder Dezimalzahlen, während `@JsonInclude` steuert, ob null-Werte oder leere Sammlungen in der JSON-Ausgabe enthalten sein sollen. [@jackson-java]
Ein zentraler Vorteil von Jackson liegt in seiner Flexibilität und Erweiterbarkeit.
Neben einfachen Datentypen kann Jackson auch komplexe Strukturen (Listen, Maps, verschachtelte Objekte) verarbeiten.
Custom Serializer und Deserializer erlauben es, für spezielle Datentypen maßgeschneiderte Konvertierungslogik zu definieren, etwa um UTC-Zeiten korrekt zu handhaben oder proprietäre Formate zu parsen.
Die „ObjectMapper"-Klasse ist das Herzstück von Jackson.
Über sie werden Serialisierungs- und Deserialisierungsoperationen durchgeführt.
In vielen Backend-Systemen wird die ObjectMapper-Konfiguration zentralisiert, um konsistente Verhaltensweisen sicherzustellen, beispielsweise die Behandlung unbekannter Felder oder die Standardzeitzone.
Die richtige Konfiguration von Serialisierungsregeln (z. B. Formatierung von Datumstypen oder Ignorieren von Nullwerten) ist wichtig, um Kompatibilität zwischen Backend und Frontend sicherzustellen.
Ein weiterer Aspekt ist die Versionierung der Datenformate.
Änderungen an DTOs müssen so gestaltet werden, dass ältere Clients weiterhin funktionstüchtig bleiben Erweiterbare Strukturen und opt-in-Felder sind übliche Strategien. [@json-mdn-web-docs] [@serialization-json]

### Aufgaben und Verantwortlichkeiten von Backend-Systemen
Ein Backend übernimmt vielfältige Aufgaben Verwaltung von persistenten Daten, Ausführung geschäftlicher Regeln, Authentifizierung und Autorisierung, Validierung von Eingaben sowie die Orchestrierung von Drittservices.
Darüber hinaus setzt es Nicht-Funktionale Anforderungen um, beispielsweise Sicherheit, Performance und Skalierbarkeit.
Ein weiteres zentrales Thema ist die Behandlung von Nebenläufigkeit und Transaktionen.
Da mehrere Clients gleichzeitig auf geteilte Ressourcen zugreifen, muss das System Mechanismen zur Synchronisation und zum Rollback bereitstellen.
In Java-basierten Backends erfolgt dies häufig über deklarative Transaktionsverwaltung (z. B. `@Transactional`), die atomare Operationen in Datenbanken gewährleistet.
In derartigen Architekturen fungiert das Backend als Bindeglied zwischen Content-Management-System und Frontend.
Es übernimmt die Aufgabe, Inhalte zu laden, zu filtern und in geeigneter Form bereitzustellen.
Dabei sorgt es für Konsistenz, wie beispielsweise einheitliche Datumsformate und vollständige Einträge.
Zudem isoliert das Backend das Frontend von technischen Details externer Systeme.
Durch klar definierte Schnittstellen wird vermieden, dass Änderungen am CMS direkt Auswirkungen auf die Benutzeroberfläche haben.
Diese Abstraktion erleichtert die Wartung und ermöglicht unabhängigere Weiterentwicklungen.
Schließlich fungiert das Backend oft als Kontrollpunkt für Logging, Monitoring und Auditierung.
Jede wichtige Aktion wird protokolliert, wodurch sich Betriebszustände analysieren und Fehlerquellen eingrenzen lassen. [@backend-structure]

### Frameworks und Laufzeitumgebungen
Frameworks bieten wiederkehrende Bausteine und abstrahieren allgemeine Aufgaben.
Sie verkürzen die Entwicklungszeit, indem sie beispielsweise den Lebenszyklus von Komponenten, Konfiguration oder Zugriff auf Bibliotheken standardisieren.
Laufzeitumgebungen stellen die Ausführungsplattform zur Verfügung, oft einschließlich eingebetteter Webserver und Managementschnittstellen.
Die Wahl eines Frameworks beeinflusst nicht nur die Code-Architektur, sondern auch die erforderlichen Skills im Team sowie die verfügbare Dokumentation und Community-Unterstützung.
In Java-Projekten sind neben Spring Boot auch Jakarta EE (ehemals Java EE) gängig, wobei Spring Boot aufgrund seiner ausgereiften Integrationen und der aktiven Community häufig gewählt wird.
Laufzeitumgebungen wie der eingesetzte Tomcat-Servlet-Container oder eingebettete Alternativen vereinfachen Deployments, da sie zusammen mit dem Anwendungscode ausgeliefert werden können und keine externen Installationen erfordern. [@frameworks]

### Spring Boot Konzepte und Kernkomponenten
Spring Boot ist ein Framework, das auf dem Spring-Ökosystem aufbaut und die schnelle Erstellung produktionsfähiger Anwendungen ermöglicht.
Es bietet vordefinierte Konfigurationen, sogenannte "Starters", und einen eingebetteten Server, sodass Anwendungen als selbstständige JARs ausgeführt werden können.
Die Autokonfiguration übernimmt dabei die Auswahl und Einrichtung zahlreicher Komponenten basierend auf den entdeckten Bibliotheken und Einstellungen.
Dies reduziert den Konfigurationsaufwand erheblich und erlaubt es Entwicklern, sich auf die Geschäftslogik zu konzentrieren.
Kernkomponenten sind unter anderem der ApplicationContext für Bean-Management, das Web-Framework Spring MVC für REST-Endpunkte und die Unterstützung vielfältiger Datenzugriffstechnologien (JPA, JDBC, MongoDB, etc.).
Spring Boot ist zudem gut für den Aufbau von Microservices geeignet, da es modular einsetzbar ist und leichtgewichtige Anwendungen unterstützt.
In verteilten Umgebungen ist die Fähigkeit, Anwendungen schnell zu starten und mit minimaler Konfiguration zu betreiben, ein großer Vorteil.
Die umfangreiche Ökosphäre um Spring Boot, inklusive Spring Cloud, bietet zahlreiche zusätzliche Module für Konfigurationsmanagement, Service Discovery und Resilienz.
Auch wenn nicht jede Anwendung als vollständige Microservice-Architektur umgesetzt wird, erleichtert das Framework potenzielle Erweiterungen in diese Richtung. [@spring-boot] [@java-spring-boot]

### Dependency Injection und Inversion of Control
Dependency Injection (DI) ist ein Entwurfsmuster, bei dem Komponenten ihre Abhängigkeiten nicht selbst erstellen, sondern vom Framework bereitgestellt bekommen.
Diese Umkehrung der Kontrolle (Inversion of Control, IoC) ist eines der Kernprinzipien moderner anwendungsorientierter Programmierung und führt zu größerer Flexibilität, einfacher Testbarkeit und besserer Wartbarkeit.
Spring realisiert DI durch Annotationen wie `@Autowired` oder bevorzugt durch Konstruktorinjektion, wobei die Konstruktor-Variante als best practice gilt, da sie Abhängigkeiten explizit macht und unveränderliche (immutable) Objektzustände ermöglicht. [@dependency-injection-and-IoC] [@spring-boot]

#### Lose Kopplung durch Dependency Injection
Ohne Dependency Injection müssten Komponenten ihre Abhängigkeiten selbst instanziieren.
Dies führt zu enger Kopplung wenn beispielsweise ein `EventService` direkt ein `CockpitClient`-Objekt erzeugt (`new CockpitClient()`), ist die Service-Klasse fest an diese konkrete Implementierung gebunden.
Änderungen am CockpitClient wirken sich unmittelbar auf den Service aus, und das System wird schwer wartbar.
Mit Dependency Injection hingegen erhält der Service das `CockpitClient`-Objekt von außen typischerweise über einen Constructor-Parameter oder eine Setter-Methode.
Dies nennt man **lose Kopplung** (loose coupling) der Service kennt lediglich die Schnittstelle oder abstrakte Basis des Clients, nicht die konkrete Implementierung.
Das erlaubt es, verschiedene Implementierungen auszutauchen, ohne den Service-Code zu ändern.
Dies ist besonders wertvoll in größeren Projekten, wo mehrere Teams unabhängig arbeiten und Schnittstellen stabil halten müssen.
Zudem wird die Wartbarkeit erheblich verbessert, da Änderungen lokalisiert bleiben und nicht wellenartig durch das System ausbreiten. [@coupling-in-java]

#### Mock-Objekte und Testing
Ein direkter praktischer Vorteil von loser Kopplung ist die Möglichkeit, beim **Testen** Mock-Objekte zu verwenden.
Ein Mock (oder Stub) ist ein Testobjekt, das echte abhängige Komponenten imitiert, aber vordefinierte, kontrollierte Verhaltensweisen aufweist.
Als Beispiel beim Testen des `EventService` möchte der Entwickler nicht auf die echte Cockpit-API aufreifen, da dies langsam ist, externe Abhängigkeiten schafft und Tests flüchtig macht (fragile tests).
Stattdessen wird ein Mock-CockpitClient bereitgestellt, der beispielsweise immer vordefinierte Test-Events zurückgibt.
Der Service wird so getestet mit diesem Mock injiziert und verhält sich damit unabhängig von der tatsächlichen CMS-Verfügbarkeit.
Beliebte Mock-Bibliotheken in Java/Spring sind **Mockito** oder **EasyMock**, die das Erstellen und Verwalten von Mocks vereinfachen. [@mockito]
Der Service lässt sich dadurch schnell, zuverlässig und isoliert testen eine zentrale Anforderung professioneller Softwareentwicklung. [@testing-practices]

#### ApplicationContext und Bean-Verwaltung
Der **ApplicationContext** ist das Herzstück von Spring und Dependency Injection in Java.
Als Container übernimmt der ApplicationContext die Instanziierung, Konfiguration und Verwaltung aller **Beans** (verwaltete Objekte).
Ein Bean ist in der Spring-Terminologie ein Javaobjekt, das vom Spring-Container verwaltet wird, typischerweise Services, Controller, Repositories oder Konfigurationsklassen.
Der ApplicationContext durchläuft dabei einen definierten Lifecycle: Beim Start der Anwendung werden die Klassenpfade nach Annotationen wie `@Component`, `@Service`, `@Repository` oder `@RestController` gescannt.
Für jede gefundene Klasse wird eine einzelne Instanz (Singleton) erzeugt und im Container registriert.
Danach werden Dependency-Injection-Anforderungen aufgelöst wird dabei in einem Controller ein `@Autowired EventService` gefunden, wird nach einem registrierten `EventService`-Bean gesucht, dieses bei Bedarf instanziiert und anschließend injiziert.
Dieser Prozess wird **Bean Wiring** genannt und erfolgt automatisch und deklarativ. [@spring-boot] [@spring-beans]
Ein großer Vorteil des ApplicationContext ist die zentrale Lebenszyklus-Verwaltung.
Der Container kümmert sich um Initialisierung, Abhängigkeitsauflösung und Cleanup (Destruktoren).
Entwickler müssen sich nicht um manuelle Objekt-Erzeugung kümmern, sondern definieren lediglich, welche Beans es gibt und wie sie zusammenhängen.
Dies reduziert Boilerplate-Code und Fehlerquellen. [@spring-IOC-Container]
In größeren Projekten können auch mehrere ApplicationContexte nebeneinander existieren (z. B. für Tests mit speziellen Konfigurationen), wodurch weitere Flexibilität entsteht.
In typischen Spring-Boot-Anwendungen wird ein auto-konfigurierter ApplicationContext verwendet, der basierend auf den Starter-Dependencies automatisch eine angemessene Konstellation von Beans aufbaut.

### Autokonfiguration, Starters und Typische Annotationen
Autokonfiguration ist ein Feature von Spring Boot, das basierend auf der Klassenpfad-Analyse automatisch Konfigurations-Benutzer bereitstellt.
Starters sind Sammlungen von Abhängigkeiten, die typische Funktionalitäten bündeln, z. B. `spring-boot-starter-web` für Webanwendungen.
Typische Annotationen umfassen `@SpringBootApplication` am Haupteinstiegspunkt, `@RestController` für Web-Controller, `@Service` für Geschäftslogik und `@Repository` für Datenzugriff.
Diese Annotationen sind mehr als schmückend sie werden vom Framework gelesen und bewirken spezifisches Verhalten.
Die Kombination aus Autokonfiguration und Starters erlaubt es, neue Projekte mit wenig Boilerplate-Code zu starten und dennoch bei Bedarf tiefgehende Konfigurationen vorzunehmen. [@spring-autoconfiguration]

### Erstellung von REST-APIs mit Spring Boot
Die Bereitstellung von REST-APIs ist eine der Standardanwendungen von Spring Boot.
Eine API definiert Endpunkte, über die Clients Ressourcen abrufen oder manipulieren können.
Die Konvention von URI-Strukturen und HTTP-Methoden wird dabei eingehalten.
Spring Boot stellt dafür das MVC-Modul zur Verfügung, mit dem Handler-Methoden einfach definiert werden.
Response Bodies werden automatisch in JSON konvertiert, und Request Bodies können validiert werden, bevor sie in die Geschäftslogik gelangen.
Neben der Implementierung der Endpunkte beinhaltet die API-Erstellung auch Aspekte wie Sicherheit, Dokumentation und Versionierung, die im Rahmen von Spring Boot ebenfalls unterstützt werden. [@rest-api-with-spring-boot]

### Controller, Routing und HTTP-Methoden
Controller sind Java-Klassen, die mit `@RestController` gekennzeichnet werden.
Methoden in diesen Klassen werden über Mapping-Annotationen wie `@GetMapping` oder `@PostMapping` einem URI-Pfad und einer HTTP-Methode zugeordnet. [@routes-and-controllers]
Routing kann dynamische Pfadvariablen (`@PathVariable`), Abfragen (`@RequestParam`) oder Header verarbeiten.
Die Struktur sollte intuitiv und konsistent sein, um die Entwicklung des Frontends zu erleichtern.
Die Verwendung der richtigen HTTP-Methode ist nicht nur semantisch wichtig, sondern beeinflusst auch Caching-Verhalten und Sicherheit.
Beispielsweise sollten GET-Anfragen idempotent sein, während POST für nicht-idempotente Operationen genutzt wird. [@mdn-routes-and-controllers]

### DTOs (Data Transfer Objects)
DTOs (Data Transfer Objects) trennen die interne Domänenlogik von der externen Schnittstelle.
Sie verhindern, dass interne Entitäten oder sensible Felder nach außen durchgereicht werden.
DTOs erleichtern zudem die Anpassung der API bei Änderungen an internen Modellen.
Mapping zwischen Domänenobjekten und DTOs kann manuell erfolgen oder mit Bibliotheken wie MapStruct automatisiert werden.
Validation wird in der Regel mithilfe von Bean Validation und Annotationen wie `@NotNull`, `@Size` oder `@Pattern` umgesetzt. [@DTOs-information]
Durch validierte DTOs gelangen nur korrekte Daten in die Geschäftslogik.
Fehler werden früh erkannt und in verständlichen Antworten an den Client zurückgegeben. [@dto-info]

### Fehlerbehandlung und Exception Handling
Eine konsistente Fehlerbehandlung ist für eine robuste API unverzichtbar.
In Spring lässt sich dies über `@ExceptionHandler` realisieren, um bestimmte Exceptions in strukturierte HTTP-Antworten zu transformieren. [@exeption-handling-spring]
Dabei werden intern geworfene Ausnahmen wie `IllegalArgumentException` oder eigene Domain-spezifische Exceptions abgefangen und entsprechende Statuscodes (z. B. 400 Bad Request, 404 Not Found) zurückgegeben.
Schließlich sollte die Fehlerantwort ausreichend Informationen für das Frontend oder den API-Consumer bereithalten, ohne intern zu detailliert zu werden. Log-Ausgaben ergänzen die Rückmeldungen auf Serverseite. [@exeption-handling-spring]

### XML (Extensible Markup Language)
XML ist ein textbasiertes Format zur strukturierten Darstellung und zum Austausch von Daten zwischen Systemen.
Im Gegensatz zu JSON beschreibt XML Informationen über verschachtelte Elemente, Attribute und klar definierte Öffnungs- und Schließtags.
Dadurch eignet sich XML besonders für Szenarien, in denen eine streng validierbare Dokumentstruktur benötigt wird.
Ein zentraler Vorteil ist die Möglichkeit, Daten über Schemasprachen wie XSD (XML Schema Definition) formal zu prüfen.
So kann sichergestellt werden, dass ausgetauschte Dokumente einem festgelegten Aufbau folgen und frühzeitig auf Konsistenzfehler geprüft werden.
In Integrationsszenarien spielt XML weiterhin eine wichtige Rolle, etwa bei älteren Enterprise-Schnittstellen, Konfigurationsdateien oder standardisierten Austauschformaten.
In Java-Anwendungen erfolgt die Verarbeitung typischerweise über Parser wie DOM, SAX oder StAX.
DOM (Document Object Model) lädt das gesamte XML-Dokument in eine Baumstruktur im Speicher und erlaubt dadurch einen sehr komfortablen, aber speicherintensiven Zugriff. [@xml-w3schools-docs]
SAX (Simple API for XML) verarbeitet XML ereignisbasiert beim sequentiellen Einlesen und ist dadurch besonders speichereffizient, jedoch weniger bequem bei komplexen Navigationsanforderungen.
StAX (Streaming API for XML) arbeitet ebenfalls als Stream-Parser, gibt der Anwendung aber durch ein Pull-Prinzip mehr Kontrolle über den Leseablauf als SAX.
Die Wahl zwischen diesen Ansätzen hängt daher vor allem von Dokumentgröße, Speicherbudget und dem benötigten Zugriffsmodell ab.
Für das Verständnis von Backend-Architekturen ist XML daher relevant, weil viele Systeme parallel mit JSON- und XML-basierten Schnittstellen arbeiten und beide Formate sicher verarbeitet werden müssen. [@xml-w3schools-docs]

### Grundlangen von Maven
Maven ist ein weit verbreitetes Build- und Projektmanagement-Tool für Java.
Es verwaltet Abhängigkeiten, führt den Build-Prozess durch und unterstützt Plug-ins für zusätzliche Aufgaben wie Testing oder Dokumentation.
Grundlage ist die deklarative `pom.xml`.
Maven ermöglicht reproduzierbare Builds durch ein einheitliches Verzeichnislayout und einen festgelegten Lifecycle mit Phasen wie `compile`, `test`, `package` und `install`. [@Maven-Docs]
Plugins können an diese Phasen angehängt werden, um zusätzliche Schritte auszuführen.
Die Abhängigkeitsscopes (`compile`, `provided`, `test`, `runtime`) steuern, welche Bibliotheken in welchen Phasen des Build- und Laufzeitprozesses zur Verfügung stehen.
Transitive Abhängigkeiten werden automatisch aufgelöst, was die Verwaltung vereinfacht, aber gelegentlich zu Konflikten führt, die dann über das Enforcer-Plugin oder Version-Management gelöst werden müssen.
In solchen Projekten wird unter anderem das Compiler-Plugin zur Festlegung der Java-Version konfiguriert.
Zusätzlich sorgt das Spring Boot Maven Plugin dafür, dass beim Package-Schritt ein ausführbares JAR inklusive aller benötigten Abhängigkeiten entsteht. [@Maven-Docs]

### pom.xml, Lebenszyklus und Plugins
Die `pom.xml` enthält Gruppennamen, Artifakt-IDs, Versionsangaben sowie die Liste der Abhängigkeiten. [@pom-inhalt]
Sie definiert auch Properties und Profile, die je nach Umgebung unterschiedliche Konfigurationen erlauben.
Plugins steuern einzelne Teile des Build-Prozesses. Das Spring Boot Maven Plugin erzeugt beispielsweise ein ausführbares JAR und kann den Anwendungstart im Entwicklungskontext unterstützen.
Durch das Festlegen von Versionsnummern und die Nutzung von Repositories wird sichergestellt, dass alle Entwickler und CI-Server dieselben Abhängigkeiten verwenden. [@Maven-Docs]

### WebClient
`WebClient` ist Teil von Spring WebFlux und ermöglicht asynchrone, nicht-blockierende HTTP-Anfragen. Im Vergleich zum älteren `RestTemplate` bietet es eine reaktive API und bessere Skalierbarkeit. [@spring-webclient]
Die reaktive Programmierung von `WebClient` basiert auf dem Projekt Reactor und verwendet die Typen `Mono` und `Flux` zur Darstellung von Einzelergebnissen bzw. Datenströmen. Durch die deklarative Fehlerbehandlung und die Möglichkeit, Rückgriff auf Backpressure zu nehmen, lassen sich robuste Integrationen implementieren.
In Backend-Anwendungen wird `WebClient` häufig zur Kommunikation mit externen Systemen verwendet.
Dieser erlaubt die Konfiguration von Timeouts, Fehlerbehandlung und die Anpassung der In-Memory-Größe für große Antworten.
Durch die Nutzung von `WebClient` kann das Backend auch bei hoher Last stabil bleiben, da Threads nicht blockiert werden während auf Antworten gewartet wird.
Außerdem erleichtert die einheitliche Schnittstelle die Implementierung von Retry-Mechanismen, Logging und Metriken, da alle HTTP-Aufrufe über denselben Typ ablaufen. [@spring-webclient]

### Content-Management-Systeme (Cockpit)
Content-Management-Systeme trennen die Inhalte einer Anwendung von deren Darstellung und Logik.
Das Cockpit CMS ermöglicht Redakteuren, Inhalte zu erstellen und zu pflegen, ohne direkt in den Quellcode eingreifen zu müssen. [@cockpit]
Backends können Cockpit über eine REST-API integrieren.
Ein dedizierter `CockpitClient` kapselt die Kommunikation, sodass Änderungen am CMS minimalen Einfluss auf den Anwendungscode haben.
Wichtige Aspekte der Integration sind Authentifizierung mittels API-Schlüssel, Umgang mit paginierten Ergebnissen und Caching, um die Performance zu verbessern und Ausfallzeiten des CMS abzufangen. [@what-is-a-cms]

### Sicherheit im Backend
Sicherheit umfasst sowohl Authentifizierung als auch Autorisierung.
In REST-APIs werden häufig Token-basierte Verfahren wie JWT oder OAuth2 eingesetzt.
Zusätzlich zur klassischen Authentifizierung sollte die Anwendung auch gegen gängige Angriffe wie Cross-Site Scripting (XSS), SQL-Injection oder CSRF geschützt sein.
Dies wird teils durch Framework-Funktionalitäten und teils durch explizite Prüfungen realisiert.
Regelmäßige Updates der verwendeten Bibliotheken reduzieren zudem das Risiko bekannter Sicherheitslücken.

### Sicherheit durch Netzwerk-Isolation
Ein wesentlicher Sicherheitsvorteil vieler lokal betriebener Systeme ist ihre Netzwerk-Isolation.
Das Backend läuft auf dem lokalen Gerät (Localhost), auf dem sich auch die Benutzeroberfläche befindet.
Das System ist ausschließlich im **Schulnetzwerk** erreichbar und damit physisch wie technisch von außen abgeschottet.
Dies bedeutet konkret, dass externe Angreifer aus dem Internet grundsätzlich keinen Zugriff auf das Backend haben können.
Angriffe müssen daher von Geräten im Schulnetzwerk ausgehen, was das Angriffsrisiko drastisch reduziert.
Durch diese Architektur entfallen viele der klassischen Sicherheitsmaßnahmen, die für öffentlich erreichbare Systeme notwendig wären.
Dennoch sollten auch in solchen Backends Schutzmechanismen implementiert werden, um vor internen Fehlverwendungen und potenziellen Risiken zu bewahren.
Diese Netzwerk-basierte Sicherheit ist oft unter dem Begriff **Perimeter Security** oder **Defense in Depth** bekannt und stellt eine erste Verteidigungslinie dar. [@perimeter-security]

### Datenschutz und Eingabevalidierung
Das beschriebene Backend stellt primär öffentliche Daten bereit (z. B. Events, Neuigkeiten, Stundenpläne).
Dennoch wurden Mechanismen implementiert, um administrative Endpunkte oder interne Funktionen schützen zu können.
Eingehende Datenvalidierung ist dabei ein wesentlicher Sicherheitsaspekt.
Die Validierung erfolgt nicht nur auf der Oberfläche (Frontend), sondern auch serverseitig im Backend, um bösartige oder fehlerhaft formatierte Eingaben zu unterbinden.
Dies verhindert beispielsweise, dass ungültige Datumsangaben zu Fehlern führen oder dass Inhalte vom CMS mit unerwarteten Datentypen das System beschädigen.

### Konfiguration und Profile (z. B. application.properties / application.yml)
Konfigurationseigenschaften ermöglichen das Parametrisieren einer Anwendung ohne Codeänderungen.
Spring Boot liest hierfür die Dateien `application.properties` oder `application.yml` ein und unterstützt Profile wie `dev`, `test` oder `prod`. [@spring-application.properties]
Das Profil `dev` steht für die lokale Entwicklungsumgebung und enthält typischerweise Werte, die eine schnelle Entwicklung unterstützen, etwa ausführlichere Logs oder lokale Service-URLs.
Das Profil `test` wird für automatisierte und manuelle Testläufe verwendet und stellt reproduzierbare Testkonfigurationen bereit, damit Tests unabhängig von produktiven Systemen durchgeführt werden können.
Das Profil `prod` beschreibt die Produktivumgebung mit stabilen, abgesicherten Einstellungen für den Echtbetrieb, beispielsweise restriktivere Logging-Levels und verbindliche Zielsysteme.
Durch diese Profiltrennung kann dieselbe Anwendung in unterschiedlichen Umgebungen mit jeweils passenden Konfigurationswerten betrieben werden, ohne den Quellcode zu verändern.
Über Profile kann z. B. die Basis-URL des CMS oder ein API-Key pro Umgebung festgelegt werden.
In sensiblen Produktionsumgebungen sollten solche Werte über Umgebungsvariablen oder spezielle Secret-Manager eingespielt werden
Die Trennung von Konfiguration und Code erleichtert den Wechsel zwischen Entwicklungs- und Produktionsumgebungen und minimiert das Risiko, vertrauliche Daten irrtümlich zu veröffentlichen. [@spring-application.properties]

#### Containerisierung (Docker) und docker-compose
Docker ermöglicht das Verpacken der Anwendung samt aller Abhängigkeiten in einem Container. Dies garantiert, dass sie in verschiedenen Umgebungen identisch ausgeführt wird. `docker-compose` vereinfacht die lokale Entwicklung durch Orchestrierung mehrerer Services wie Backend, CMS und Datenbank.
Im Projekt enthält die Backend-Docker-Datei Anweisungen zum Bauen und Starten des Spring-Boot-JARs sowie zur Konfiguration der Netzwerkverbindungen zu anderen Containern.
Das Zusammenspiel mit `docker-compose` erlaubt das schnelle Aufsetzen einer vollständigen Testumgebung inklusive Cockpit und optionalen Datenbanken. [@docker-compose] [@docker]

### API-Dokumentation und Versionierung
Eine klare API-Dokumentation ist für die Zusammenarbeit zwischen Backend- und Frontend-Teams essentiell.
OpenAPI/Swagger bietet sowohl maschinenlesbare Spezifikationen als auch eine interaktive Benutzeroberfläche.
Versionierung der API, z. B. durch Pfadsegmente wie `/api/v1/`, stellt sicher, dass bestehende Clients bei Erweiterungen oder Änderungen weiter funktionieren.
Langfristig können so mehrere Versionen parallel betrieben werden. [@spring-api-versioning]
In vielen Anwendungen wird dies über Pfadsegmente realisiert.

### Schichten und Designmuster
Typische Schichten umfassen die Präsentationsschicht (Controller/Rest), die Geschäftslogikschicht (Services) und die Persistenzschicht (Repository/DAO).
Diese klare Trennung ermöglicht es, einzelne Schichten unabhängig zu testen und auszutauschen. [@schichten-architektur]
Zudem finden sich innerhalb dieser Schichten wiederkehrende Designmuster wie Factory, Singleton oder Strategy, die bewährte Lösungen für häufige Probleme bieten.
Besonders wichtig ist die Verwendung von Data Transfer Objects (DTOs) und Boundary-Interfaces, die die interne Domäne vom externen API-Contract abkoppeln.
Dadurch bleibt das Backend resistent gegenüber Veränderungen in der Datenrepräsentation und ermöglicht parallele Entwicklungen an Front- und Backend.
Ein Backend kann entweder vertikal skalieren (mehr Ressourcen pro Instanz) oder horizontal (mehr Instanzen).
Statelose Architekturen erleichtern letzteren Ansatz und eignen sich hervorragend für Cloud-Umgebungen, in denen Auto-Scaling genutzt wird.
Persistente Zustände werden in externen, dafür optimierten Systemen gehalten (Datenbanken), um die Kopplung zwischen Instanzen zu minimieren.
Hochverfügbarkeit erreicht man durch Redundanz (mehrere Instanzen über mehrere Verfügbarkeitszonen) sowie durch Monitoring und Self-Healing.
Cloud-Anbieter bieten hierfür native Dienste an, doch auch on-premises können Load-Balancer und Cluster-Technologien dieses Ziel unterstützen.
Diese erweiterten Grundlagen legen ein fundiertes Verständnis dafür, weshalb der praktische Teil dieser Arbeit so strukturiert und umgesetzt wurde.
Die nachfolgenden Kapitel erläutern im Detail, wie die hier beschriebenen Prinzipien in einer konkreten Backend-Implementierung realisiert wurden und welche Entscheidungen zu treffen waren, um die beschriebenen Anforderungen zu erfüllen. [@schichten-architektur]



## Praktische Arbeit

### Überblick über die praktische Umsetzung
Der praktische Teil beschreibt die konkrete Umsetzung der zuvor im Theorie-Teil definierten Konzepte.
Im Mittelpunkt stehen der technische Aufbau des Spring-Boot-Backends, die Anbindung von Cockpit CMS und WebUntis, die Strukturierung der API-Endpunkte sowie die Verarbeitung und Aufbereitung der gelieferten Inhalte für den Infopoint.
Die Umsetzung begann mit der fachlichen Abstimmung der tatsächlich benötigten Datenobjekte und ihrer Feldstrukturen.
Darauf aufbauend wurden konkrete Endpunkte, Antwortformate und Validierungsregeln festgelegt, damit das Frontend die Daten konsistent abrufen und ohne zusätzliche Nachbearbeitung anzeigen kann.
Neben der reinen Implementierung lag der Fokus auf nachvollziehbaren Datenflüssen, reproduzierbarer Konfiguration und einer klaren Trennung zwischen Integrationslogik, Geschäftslogik und API-Ausgabe.

### Systemgrenzen und Verantwortlichkeiten
Die Systemgrenzen wurden so definiert, dass jede Komponente eine eindeutige Aufgabe erfüllt.
Das Cockpit CMS dient ausschließlich der redaktionellen Pflege von Inhalten.
Das Backend übernimmt den technischen Zugriff auf diese Inhalte, führt Plausibilitätsprüfungen und Transformationen durch und stellt die Ergebnisse über versionierte REST-Endpunkte bereit. Das Frontend übernimmt ausschließlich Darstellung und Interaktion.
Ein typischer Ablauf verdeutlicht diese Trennung nach der Erfassung eines Events im CMS wird der Datensatz über den Backend-Integrationslayer geladen, im Service validiert und in ein geeignetes DTO überführt. Erst anschließend erfolgt die Bereitstellung über `/api/v1/events`, sodass im Frontend eine konsistente und bereits aufbereitete Darstellung möglich ist. Durch diese Abgrenzung bleiben Änderungen in einer Schicht lokal und führen nicht zu unnötigen Anpassungen in den übrigen Systemteilen.

### Projektsetup und Entwicklungsumgebung
Zu Beginn der praktischen Umsetzung des Backends wurde eine strukturierte und stabile Basis geschaffen.
Das Backend wurde als eigenständiges Spring-Boot-Projekt umgesetzt und klar vom Frontend getrennt.
Diese Trennung ermöglicht eine unabhängige Weiterentwicklung beider Systeme und sorgt für eine saubere Aufgabenteilung innerhalb des Projekts.
Als Entwicklungsumgebung wurde **IntelliJ IDEA** verwendet.
IntelliJ bietet eine umfassende Unterstützung für Spring Boot und Maven und erleichtert dadurch die Entwicklung erheblich.
Funktionen wie automatische Code-Vervollständigung, integrierte Fehleranalyse, Refactoring-Werkzeuge sowie eine direkte Integration von Build- und Run-Konfigurationen ermöglichen eine effiziente und strukturierte Arbeitsweise.
Das Projekt wurde mit **Maven** verwaltet, wodurch alle Abhängigkeiten zentral in der `pom.xml` definiert sind.
IntelliJ übernimmt dabei automatisch das Laden und Verwalten der benötigten Libraries (**dependencies**) [@Maven-Docs].
Änderungen an Dependencies werden direkt erkannt und in das Projekt integriert.
Dies sorgt für eine konsistente und reproduzierbare Entwicklungsumgebung.
Ein weiterer wichtiger Bestandteil der Entwicklungsumgebung war die Nutzung eines Versionsverwaltungssystems (Git) [@Git-Docs].
Dadurch konnten Änderungen am Backend nachvollziehbar dokumentiert, Zwischenstände gesichert und bei Bedarf frühere Versionen wiederhergestellt werden.
Dies unterstützte sowohl die eigene Arbeitsweise als auch die Zusammenarbeit im Team.
Insgesamt bildete die gewählte Entwicklungsumgebung die Grundlage für eine effiziente und strukturierte Backend-Entwicklung.
Durch die Kombination aus **IntelliJ** und **Maven** konnte eine stabile, gut wartbare und reproduzierbare Projektstruktur geschaffen werden.

### Projekt- und Ordnerstruktur des Backends
Bei der Umsetzung des Backends wurde von Beginn an auf eine klare und nachvollziehbare Projektstruktur geachtet.
Eine saubere Ordnerstruktur ist besonders bei größeren Anwendungen wichtig, da sie die Wartbarkeit verbessert und neuen Entwicklern eine schnelle Orientierung im Projekt ermöglicht.
Das Backend basiert auf einem typischen Spring-Boot-Projektaufbau.
Der Quellcode befindet sich im Verzeichnis `src/main/java`, während Konfigurationsdateien wie die `application.yml` bzw. `application.properties` im Ordner `src/main/resources` abgelegt sind.
Innerhalb des Hauptpakets wurde der Code zusätzlich logisch gegliedert.
Die wichtigsten Unterpakete sind:

- `controller` - Enthält die REST-Controller, welche die HTTP-Anfragen entgegennehmen.
- `service` - Beinhaltet die Geschäftslogik der Anwendung.
- `clients` - Enthält externe Schnittstellen, z. B. den CockpitClient und WebUntisClient.
- `dto` - Definiert Data Transfer Objects zur strukturierten Datenübertragung.
- `config` - Beinhaltet Konfigurationsklassen (z. B. für WebClient oder CMS-Zugriff).
- `util` - Stellt Hilfsklassen zur leichteren Verarbeitung von Daten (z.B. TimeConverter)

Diese klare Trennung sorgt dafür, dass jede Klasse eine eindeutige Aufgabe hat und Verantwortlichkeiten nicht vermischt werden.
Änderungen an einer Schicht, beispielsweise an der API oder an der CMS-Anbindung, können dadurch durchgeführt werden, ohne andere Teile des Systems unnötig zu beeinflussen.
Die durchdachte Projektstruktur bildet somit eine wichtige Grundlage für eine stabile, erweiterbare und langfristig wartbare Backend-Architektur.

![Projektstruktur\label{fig:Projektstruktur}](img/Backend_Projektstruktur.PNG){width=100%}

### Vorgehen und erstellte Artefakte
Im Rahmen der Umsetzung sind mehrere sogenannte **Artefakte** entstanden.  
Als Artefakte bezeichnet man alle greifbaren Ergebnisse, die während eines Entwicklungsprozesses erstellt werden.
Dabei handelt es sich nicht nur um fertigen Programmcode, sondern auch um Konzepte, Entwürfe, Definitionen oder Dokumentationen, die für die Umsetzung notwendig sind.  
Artefakte helfen dabei, das System strukturiert zu planen, nachvollziehbar umzusetzen und später leichter zu warten oder zu erweitern.
Sie dienen außerdem als gemeinsame Grundlage für die Abstimmung im Team, insbesondere zwischen Backend- und Frontend-Entwicklung.
Die Umsetzung erfolgte in klaren Schritten.
Zu Beginn stand die Ressourcen-Definition, bei der die relevanten Datenobjekte fachlich abgegrenzt und in ihrer Struktur beschrieben wurden.
Diese Vorarbeit war notwendig, damit die spätere API nicht nur technisch funktioniert, sondern auch die inhaltlichen Anforderungen des Frontends exakt abbildet.
Darauf aufbauend wurde ein konsistenter API-Entwurf erstellt.
Für jede Ressource wurden Endpunkte, HTTP-Methoden, Parameter und Antwortstrukturen festgelegt, beispielsweise für `GET /api/v1/events` zur Listenansicht und `GET /api/v1/events/{id}` zur Detailansicht.
Besonderes Augenmerk lag dabei auf einer einheitlichen Benennung, klaren URI-Struktur und stabilen Antwortformaten, damit die Schnittstelle auch bei späteren Erweiterungen wartbar bleibt.
Parallel dazu wurde ein DTO-Konzept ausgearbeitet, um interne Datenstrukturen sauber von der externen API-Darstellung zu trennen.
Interne Modelle können zusätzliche technische Felder enthalten, etwa interne IDs, Verarbeitungsstatus oder Metadaten aus Fremdsystemen.
Nach außen werden jedoch nur jene Informationen bereitgestellt, die für die Anzeige am Infopoint tatsächlich benötigt werden.
Dadurch entsteht eine stabile, leicht verständliche API, die das Frontend von internen Änderungen im Backend entkoppelt.
Ein weiterer zentraler Artefakt-Bereich betraf Validierung und Fehlerformat.
Für Eingaben und externe Datenquellen wurden Regeln definiert, die unvollständige oder fehlerhafte Daten frühzeitig erkennen.
Bei Verletzung dieser Regeln werden standardisierte und für das Frontend verständliche Fehlerrückgaben erzeugt, etwa ein `400 Bad Request` bei fehlenden Pflichtfeldern.
Durch diese Standardisierung konnten Fehlersituationen sowohl im Entwicklungskontext als auch im laufenden Betrieb schneller analysiert werden.
Ergänzend wurde die API-Dokumentation als eigenständiges Artefakt gepflegt.
Die Dokumentation diente nicht nur als technische Referenz, sondern auch als verbindliche Kommunikationsgrundlage zwischen Backend- und Frontend-Entwicklung.

### Planung und Systemarchitektur
Die Planung der Systemarchitektur folgte dem Prinzip einer klaren Schichtentrennung, um Verantwortlichkeiten eindeutig zuzuordnen und Änderungen kontrollierbar zu halten.
In der Controller-Schicht werden HTTP-Anfragen entgegengenommen, Parameter geprüft und standardisierte Responses zurückgegeben.
Die eigentliche Geschäftslogik liegt in der Service-Schicht, in der Daten zusammengeführt, fachlich verarbeitet und für die Ausgabe vorbereitet werden.
Die Datenübertragung zwischen den Schichten erfolgt über DTOs, damit die API nur wohldefinierte und stabile Strukturen nach außen liefert.
Diese Trennung verhindert, dass interne Modelländerungen ungewollt auf die öffentliche Schnittstelle durchschlagen.
Gleichzeitig erleichtert sie Tests, da jede Schicht unabhängig geprüft und validiert werden kann.
Die CMS-Anbindung wurde als eigener Integrationsbereich umgesetzt, der den Zugriff auf Cockpit kapselt und dadurch den restlichen Anwendungscode von externen API-Details entlastet. Änderungen an CMS-Endpoints, Authentifizierungsmechanismen oder Datenformaten können damit lokal im Integrationslayer vorgenommen werden, ohne Controller- oder Service-Code umfassend anpassen zu müssen.
Insgesamt erhöht diese Architektur die Wartbarkeit, da Änderungen in der Regel auf eine Schicht begrenzt bleiben.
Zusätzlich verbessert sie die Erweiterbarkeit, weil neue Ressourcen, Endpunkte oder externe Datenquellen nach demselben Muster integriert werden können, ohne die bestehende Struktur aufzubrechen.

### Implementierung des Backends
Die Implementierung des Backends erfolgte nach dem Prinzip der klaren Schichtentrennung.
Ziel war es, eine übersichtliche und wartbare Struktur zu schaffen, bei der jede Schicht eine klar definierte Aufgabe übernimmt.
Eine typische Anfrage durchläuft dabei einen klaren, reproduzierbaren Verarbeitungspfad zunächst trifft die HTTP-Anfrage im Controller ein, wo Parameter entgegengenommen, formale Eingaben geprüft und die zuständige Service-Methode aufgerufen wird.
Anschließend erfolgt in der Service-Schicht die fachliche Verarbeitung der Daten, einschließlich der Kommunikation mit externen Quellen wie Cockpit CMS oder WebUntis sowie der Anwendung projektspezifischer Regeln.
Nach der Verarbeitung werden die Ergebnisse in geeignete DTOs überführt, um eine stabile und konsistente Ausgabe gegenüber dem Frontend sicherzustellen.
Der Controller erstellt darauf basierend eine standardisierte HTTP-Antwort mit passendem Statuscode und strukturierter JSON-Nutzlast.
Durch diesen Ablauf bleibt die technische Verantwortung zwischen den Schichten klar getrennt, was nicht nur die Wartbarkeit verbessert, sondern auch Tests vereinfacht, da jede Schicht isoliert überprüft werden kann.
Zusätzlich wurde der Implementierungsablauf so gestaltet, dass Fehlerfälle frühzeitig erfasst und kontrolliert behandelt werden.
Ungültige Eingaben, fehlende Daten oder externe Ausfälle führen damit nicht zu unkontrollierten Abbrüchen, sondern zu nachvollziehbaren Rückmeldungen an den Client.
Diese Kombination aus Schichtentrennung, standardisiertem Datenfluss und strukturierter Fehlerbehandlung bildet die Grundlage für einen stabilen Betrieb im schulischen Alltag.

### Umsetzung der Controller-Schicht im Backend
Die Controller-Schicht bildet die Schnittstelle zwischen dem Backend und dem Frontend.
Sie ist dafür verantwortlich, eingehende HTTP-Anfragen entgegenzunehmen, diese an die entsprechende Service-Schicht weiterzuleiten und die Antwort in strukturierter Form zurückzugeben.
In Spring Boot werden Controller typischerweise mit der Annotation `@RestController` definiert.
Diese ermöglicht es, REST-Endpunkte einfach zu erstellen und JSON-Antworten automatisch zu serialisieren (vgl. [@Spring-Boot-Docs]).
Jeder Controller ist einer bestimmten Ressource zugeordnet, beispielsweise `events` oder `news`.
Über `@RequestMapping` wird ein gemeinsamer Basispfad definiert, etwa `/api/v1/events`.
Konkrete Endpunkte werden anschließend mit Annotationen wie `@GetMapping`, `@PostMapping`, `@PutMapping` oder `@DeleteMapping` umgesetzt (vgl. [@Spring-Boot-Docs]).
Dadurch wird klar festgelegt, welche HTTP-Methode welche Funktion ausführt.
Die Controller enthalten bewusst keine Geschäftslogik.
Ihre Aufgabe besteht ausschließlich darin, Anfragen zu validieren, Parameter entgegenzunehmen und diese an die Service-Schicht weiterzugeben.
Diese klare Trennung zwischen Controller und Service erhöht die Wartbarkeit des Systems und sorgt für eine übersichtliche Struktur.

### Ablauf einer Anfrage (Beispiel: Events abrufen)
Um die Funktionsweise zu verdeutlichen, wird im Folgenden ein typischer Ablauf für das Abrufen von Events beschrieben.
Dabei wird sichtbar, wie die Schichten im Backend zusammenarbeiten und an welcher Stelle welche Verantwortung liegt.
Ein Client sendet eine HTTP-GET-Anfrage an den Endpunkt `GET /api/v1/events/{limit}`.
Der Pfadparameter `limit` gibt an, wie viele Einträge maximal zurückgegeben werden sollen.
Dadurch kann das Frontend gezielt steuern, ob beispielsweise nur die nächsten fünf oder zehn Veranstaltungen angezeigt werden.
Die Anfrage wird vom Controller entgegengenommen.
Der Controller hat in diesem Ablauf die Aufgabe, die eingehenden Parameter entgegenzunehmen und den Aufruf an die Service-Schicht weiterzuleiten.
Fachliche Verarbeitung oder externe Kommunikation finden an dieser Stelle bewusst nicht statt.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="REST-Controller für Events" .java}
@RestController
@RequestMapping("/api/v1/events")
public class EventsController {

    private final EventService eventService; // <-- Service für Events

    public EventsController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/{limit}")
    public List<CockpitEvent> get(@PathVariable int limit) {
        return eventService.get(limit);
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im Code kennzeichnet `@RestController` die Klasse als REST-Controller, sodass Rückgabewerte automatisch als JSON serialisiert werden können.
Mit `@RequestMapping("/api/v1/events")` wird der Basispfad definiert, auf den sich alle Methoden der Klasse beziehen.
Die Abhängigkeit `EventService` wird über den Konstruktor injiziert.
Dadurch bleibt der Controller testbar und lose gekoppelt, weil keine direkte Instanziierung innerhalb der Klasse erfolgt.
Die Methode `get(@PathVariable int limit)` ist über `@GetMapping("/{limit}")` an GET-Anfragen mit Pfadparameter gebunden.
Nach dem Methodenaufruf `eventService.get(limit)` wird das Ergebnis als `List<CockpitEvent>` zurückgegeben und von Spring/Jackson in eine JSON-Antwort umgewandelt.
In der Praxis folgt danach die weitere Verarbeitung in der Service-Schicht dort werden die Events aus der angebundenen Quelle geladen, bei Bedarf gefiltert oder sortiert und anschließend an den Controller zurückgegeben.
Der Controller liefert auf dieser Basis die standardisierte HTTP-Antwort an das Frontend.
Auf diese Weise bleibt der Datenfluss klar nachvollziehbar und die Rollen der einzelnen Schichten sind sauber getrennt.

### Umsetzung der Service-Schicht im Backend
Die Service-Schicht bildet das zentrale Element der Geschäftslogik im Backend.
Während die Controller-Schicht ausschließlich für die Entgegennahme und Rückgabe von HTTP-Anfragen zuständig ist, übernimmt die Service-Schicht die eigentliche Verarbeitung der Daten.
Sie koordiniert die Kommunikation mit externen Clients (CockpitClient oder WebUntisClient), wendet Geschäftsregeln an und bereitet die Daten für die Weitergabe an die Controller-Schicht auf.
Ein wesentliches Konzept innerhalb der Service-Schicht ist die Verwendung von Data Transfer Objects (DTOs).
DTOs dienen dazu, Daten strukturiert und kontrolliert zwischen den einzelnen Schichten zu übertragen, ohne interne Implementierungsdetails preiszugeben. [@DTOs-information]
Dadurch wird sichergestellt, dass das Backend klar zwischen interner Datenstruktur und externer API-Darstellung unterscheidet.
Die Service-Schicht greift nicht direkt auf HTTP-Mechanismen zu, sondern arbeitet rein logisch.
Dadurch bleibt sie unabhängig von der konkreten API-Implementierung und kann leichter getestet oder erweitert werden.
Zudem ermöglicht diese Struktur eine saubere Trennung der Verantwortlichkeiten (Separation of Concerns), was die Wartbarkeit und Übersichtlichkeit des Systems deutlich verbessert.

### Service-Schicht (Geschäftslogik)
Die Service-Schicht übernimmt die eigentliche fachliche Verarbeitung der Daten.
In dieser Schicht wird festgelegt, welche Inhalte aus dem CMS geladen werden, nach welchen Regeln diese gefiltert oder sortiert werden und in welcher Form sie für die API-Ausgabe vorbereitet werden.
Sie bildet damit die zentrale Stelle, an der technische Eingabedaten in fachlich nutzbare Informationen überführt werden.
Ein zentraler Bestandteil ist die Kommunikation mit dem Cockpit CMS.
Dafür wird eine eigene Client-Klasse (`CockpitClient`) eingesetzt, die die externe HTTP-Kommunikation kapselt und vom restlichen Service-Code entkoppelt.
Dadurch bleiben die Service-Methoden auf Geschäftslogik fokussiert, während Details wie Endpunkte, Header oder Fehler der externen API im Integrationslayer gebündelt bleiben.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Service mit Dependency Injection" .java}
@Service
public class EventService {

	private final CockpitClient cockpitClient; // <-- Verbindung zu Cockpit

    public EventService(CockpitClient cockpitClient) {
        this.cockpitClient = cockpitClient;
    }

    public List<CockpitEvent> get(int limit) {
        return cockpitClient.getAppointments(limit); // <-- holt Events
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In diesem Beispiel ruft die Methode `get(int limit)` die Methode `getAppointments(limit)` des `CockpitClient` auf.
Der Service selbst enthält keine direkte HTTP-Logik, sondern delegiert diese Aufgabe vollständig an den Client.
Diese Aufgabentrennung erhöht die Wartbarkeit, da Änderungen an der CMS-Anbindung nicht zwangsläufig Anpassungen in der Geschäftslogik erfordern.
Der gezeigte Code verdeutlicht dieses Muster die Annotation `@Service` markiert die Klasse als Spring-Bean der Geschäftslogik.
Über den Konstruktor wird der `CockpitClient` injiziert, wodurch eine lose Kopplung entsteht.
Die Methode `get(int limit)` fungiert als fachliche Service-Schnittstelle und steuert, wie viele Datensätze angefordert werden.
In einer erweiterten Ausbaustufe können an dieser Stelle zusätzliche Regeln umgesetzt werden, etwa eine Begrenzung ungültiger Werte, Sortierlogik nach Datum oder die Umwandlung in API-spezifische DTOs.
Durch diese Struktur bleibt der Datenfluss klar nachvollziehbar der Controller delegiert den Aufruf an den Service, der Service beschafft und verarbeitet die Daten über den Client, und das Ergebnis wird anschließend in standardisierter Form an den Controller zurückgegeben.
Damit wird eine saubere Trennung zwischen Transportebene, Geschäftslogik und externer Integration erreicht.

### Umsetzung und Einsatz von DTOs (Data Transfer Objects)
Im Backend werden **DTOs (Data Transfer Objects)** eingesetzt, um Daten kontrolliert zwischen den einzelnen Schichten (Controller, Service) und nach außen zur REST API zu übertragen. 
Ein DTO ist dabei ein eigenes, meist einfaches Objekt, das nur jene Felder enthält, die das Frontend wirklich benötigt.
Dadurch wird verhindert, dass interne Strukturen oder unnötige Informationen direkt über die API sichtbar werden.
Außerdem macht diese Trennung den Code übersichtlicher und reduziert das Risiko, dass sich Änderungen an internen Klassen direkt auf die API auswirken (vgl. [@DTOs-information]).

In der praktischen Umsetzung werden DTOs vor allem in zwei Situationen verwendet: Erstens bei **Antworten** an das Frontend (Response-DTO), damit das Frontend eine klare und stabile Struktur erhält. 
Zweitens bei **Anfragen** an das Backend (Request-DTO), um Eingabedaten sauber entgegenzunehmen und direkt validieren zu können.
Die Umwandlung von internen Objekten (z. B. Cockpit-Datenmodelle) in DTOs passiert typischerweise in der Service-Schicht, da dort die Geschäftslogik liegt.
So bleibt der Controller möglichst schlank und konzentriert sich auf die HTTP-Ebene.


### Verwendung von DTOs
DTOs (Data Transfer Objects) dienen dazu, nur die Daten nach außen zu geben, die das Frontend wirklich benötigt. [@DTOs-information] 
Interne Felder oder CMS-spezifische Informationen werden nicht direkt weitergegeben. 
Ein Event-Datensatz im CMS enthält in der Regel deutlich mehr Informationen, als für die reine Anzeige im Frontend erforderlich sind.
Neben inhaltlichen Feldern wie Titel oder Beschreibung können auch technische Metadaten enthalten sein, beispielsweise interne Kennungen, Zeitstempel zur Erstellung und Aktualisierung oder systeminterne Zusatzinformationen.
Diese Daten sind für interne Verarbeitungsschritte hilfreich, sollen jedoch nicht ungefiltert an die API-Konsumenten weitergegeben werden.
Durch den Einsatz von DTOs wird deshalb bewusst festgelegt, welche Informationen die API tatsächlich veröffentlicht.
Für die Ausgabe am Infopoint stehen vor allem fachlich relevante Inhalte im Vordergrund, etwa Titel, zeitlicher Rahmen, Ort, Typ und Beschreibung eines Events.
Dadurch entsteht eine stabile und verständliche Schnittstelle, die unabhängig von internen Modelländerungen weiterverwendet werden kann.
Gleichzeitig wird verhindert, dass sensible oder technisch irrelevante Felder unbeabsichtigt nach außen gelangen.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Data Transfer Object für Events" .java}
public record EventDto(
        Long id,
        String title,
        Instant start,
        Instant end,
        String location,
        String type,
        String description,
        String imageUrl
) {}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Der gezeigte `EventDto` ist als Java-Record umgesetzt.
Diese Form eignet sich besonders für Transferobjekte, da Records kompakt, unveränderlich und klar strukturiert sind.
Jedes Feld beschreibt dabei explizit einen Teil der API-Antwort.
Zeitangaben wie `start` und `end` werden als `Instant` modelliert, wodurch eine eindeutige und zeitzonenunabhängige Repräsentation möglich ist.
In der praktischen Verarbeitung werden interne Datenmodelle in diesen DTO-Typ transformiert, bevor eine Antwort an das Frontend gesendet wird.
Dadurch bleibt die API konsistent, auch wenn sich interne Entitäten oder externe CMS-Felder ändern.
Zusätzlich erleichtert dieses Vorgehen die Versionierung der Schnittstelle Erweiterungen können gezielt über neue DTO-Felder erfolgen, ohne bestehende Clients zu brechen.

### CockpitClient (CMS-Anbindung)
Der CockpitClient bildet die zentrale Integrationskomponente zwischen Backend und Cockpit CMS.
Seine Aufgabe besteht darin, Inhalte wie News, Events, Karten oder Laborpläne aus dem CMS abzurufen und in der Anwendung als Java-Objekte bereitzustellen.
Dadurch wird die gesamte externe Kommunikation an einer Stelle gebündelt.
Controller und Services müssen damit keine CMS-spezifischen URLs, Header oder Request-Details kennen.
Sie rufen lediglich fachlich benannte Methoden wie `getNews(...)` oder `getAppointments(...)` auf.
Die Zugriffsdaten wie Basis-URL und API-Key werden über die Konfiguration `CockpitConfig` eingebunden.
Dadurch bleiben sensible Werte außerhalb des Anwendungscodes und können je nach Umgebung getrennt verwaltet werden.
Zusätzlich wurde die maximale In-Memory-Größe des `WebClient` erhöht.
Diese Anpassung ist wichtig, damit auch größere Responses oder Medieninhalte stabil verarbeitet werden können.
Im Fehlerfall, etwa bei ungültigem API-Key oder kurzfristiger Nichterreichbarkeit des CMS, werden Ausnahmen kontrolliert behandelt.
Der Client liefert dann sichere Rückgabewerte wie `List.of()` oder `null` zurück.
Damit bleibt das Backend auch bei externen Störungen lauffähig und das Frontend erhält definierte Antworten statt unkontrollierter Exceptions.

**CockpitClient - Beispiel für den Abruf von News über REST** [@SLF4J-Docs]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="CMS-Integrationscomponent (CockpitClient)" .java}
@Component
public class CockpitClient {

    private final WebClient webClient;
    private final CockpitConfig cockpitConfig;
    private static final Logger log = LoggerFactory.getLogger(CockpitClient.class);

    public CockpitClient(WebClient.Builder builder, CockpitConfig cockpitConfig) {
        this.webClient = builder
                .codecs(c -> c.defaultCodecs().maxInMemorySize(16 * 1024 * 1024))
                .build();
        this.cockpitConfig = cockpitConfig;
    }

    public List<CockpitNews> getNews(int limit) {
        try {
            return webClient.get()
                    .uri(cockpitConfig.getUrl() + "/api/content/items/news?limit=" + limit)
                    .header("api-key", cockpitConfig.getApiKey())
                    .retrieve()
                    .bodyToMono(new ParameterizedTypeReference<List<CockpitNews>>() {})
                    .block();
        } catch (WebClientResponseException e) {
            return List.of();
        }
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im gezeigten Code markiert `@Component` die Klasse als Spring-Bean.
Dadurch kann der Client im Service per Dependency Injection verwendet werden.
Der Konstruktor übernimmt zwei zentrale Abhängigkeiten.
Über `WebClient.Builder` wird der HTTP-Client konfiguriert.
Über `CockpitConfig` werden URL und API-Key bereitgestellt.
In der Methode `getNews(int limit)` wird ein GET-Request auf den Cockpit-Endpunkt aufgebaut.
Der Parameter `limit` steuert die maximale Anzahl der zurückgegebenen Datensätze.
Der Header `api-key` authentifiziert den Zugriff auf das CMS.
Mit `retrieve()` wird die Antwort verarbeitet und per `bodyToMono(...)` in eine typisierte Liste von `CockpitNews` umgewandelt.
Der Aufruf `block()` wandelt den reaktiven Rückgabewert in ein synchrones Ergebnis für den aktuellen Anwendungsfluss um.
Die `try-catch`-Struktur stellt sicher, dass HTTP-Fehler nicht unkontrolliert bis in höhere Schichten durchgereicht werden.
Stattdessen wird ein definierter Fallback zurückgegeben.
Diese Strategie reduziert die Kopplung zwischen externer Verfügbarkeit und interner Stabilität.
Gleichzeitig bleibt das Fehlerverhalten für Services und Controller konsistent und vorhersehbar.

### WebUntisClient (Stundenplan Anbindung)
Der WebUntisClient bildet die Integrationsschicht zwischen dem Backend und dem externen Stundenplansystem WebUntis.
Seine Aufgabe besteht darin, die für den Infopoint benötigten Tagesübersichten stabil abzurufen und als verarbeitbares JSON bereitzustellen.
Dadurch bleibt die WebUntis-spezifische Kommunikation in einer dedizierten Klasse gekapselt.
Service- und Controller-Klassen müssen damit keine Details zu Endpunkten, Headern oder Request-Formaten kennen.
Die eigentliche Geschäftslogik bleibt dadurch klar von der externen Systemkommunikation getrennt.
Im Gegensatz zur Cockpit-Anbindung werden in diesem Fall Monitor-Daten über einen POST-Aufruf auf `/monitor/dayoverview/data` geladen.
Die Request enthält die Parameter `date` und `format`, mit denen der gewünschte Tagesausschnitt präzise festgelegt wird.
Da Datumswerte vom Frontend fehlerhaft übergeben werden können, wird das Eingabedatum vor dem Abruf über `normalizeDate(...)` vereinheitlicht.
Dieses Vorgehen reduziert Folgeschäden in späteren Verarbeitungsschritten und erhöht die Robustheit der Schnittstelle.
Zusätzlich enthält der Client eine Fallback-Strategie für unterschiedliche WebUntis-Formatbezeichnungen.
Zuerst wird der Abruf mit `"Tagesübersicht Klass"` versucht.
Falls dieser Aufruf fehlschlägt, erfolgt automatisch ein zweiter Versuch mit `"Tagesübersicht Klassen"`.
Damit können variationsbedingte Unterschiede in der externen Datenquelle abgefangen werden, ohne dass der Aufrufpfad im restlichen Backend angepasst werden muss.
Eine weitere Schutzebene liegt in `safeFetchDayOverview(...)`.
Bei Verbindungsproblemen oder unerwarteten Antwortformaten wird kein unkontrollierter Fehler bis in die API-Schicht durchgereicht.
Stattdessen wird ein definiertes, gültiges JSON-Objekt zurückgegeben, sodass das Frontend weiterhin arbeitsfähig bleibt.
Dieses Fehlerverhalten ist für den Schulbetrieb wesentlich, weil kurzfristige Störungen externer Systeme dadurch nicht unmittelbar zu einem Ausfall der Anzeige führen.

**WebUntisClient - Abruf der Tagesübersicht für Klassen mit Fallback** 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Stundenplan-Integrationscomponent (WebUntisClient)" .java}
@Component
public class WebUntisClient {

    private final WebClient webClient;
    private static final Logger log = LoggerFactory.getLogger(CockpitClient.class);

    public WebUntisClient(WebClient.Builder webClient) {
        this.webClient = webClient
                .baseUrl("https://htlleoben.webuntis.com/WebUntis")
                .build();
    }

    public JsonNode getClassOverview(String date) {
        String normalizedDate = normalizeDate(date);
        try {
            return safeFetchDayOverview(normalizedDate, "Tagesübersicht Klass");
        } catch (Exception ignored) {
            return safeFetchDayOverview(normalizedDate, "Tagesübersicht Klassen");
        }
    }

    private JsonNode fetchDayOverviewByFormat(String date, String format) {
        Map<String, String> requestBody = Map.of("date", date, "format", format);
        return webClient.post()
                .uri(uriBuilder -> uriBuilder
                        .path("/monitor/dayoverview/data")
                        .queryParam("school", "htlleoben")
                        .build())
                .header("X-Requested-With", "XMLHttpRequest")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(JsonNode.class)
                .block();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im gezeigten Code markiert `@Component` die Klasse als Spring-Bean und ermöglicht die Nutzung per Dependency Injection in höheren Schichten.
Im Konstruktor wird ein `WebClient` mit fixer `baseUrl` aufgebaut, wodurch alle Requests konsistent gegen denselben WebUntis-Host ausgeführt werden.
Die Methode `getClassOverview(String date)` übernimmt die Eingabevalidierung auf Integrationsniveau, indem der Datumswert zunächst normalisiert wird.
Anschließend wird ein zweistufiger Abruf durchgeführt, der unterschiedliche Formatwerte tolerant behandelt.
Die Methode `fetchDayOverviewByFormat(...)` erstellt den Request-Body über ein `Map`-Objekt und sendet den Aufruf als HTTP-POST.
Über den URI-Builder werden Pfad und Query-Parameter (`school=htlleoben`) reproduzierbar zusammengesetzt.
Der Header `X-Requested-With` bildet das erwartete Request-Profil der Zielschnittstelle nach.
Mit `retrieve()` und `bodyToMono(JsonNode.class)` wird die Antwort in eine JSON-Struktur überführt.
Der abschließende Aufruf `block()` wandelt den reaktiven Rückgabewert in ein synchrones Ergebnis um, das im aktuellen Service-Ablauf direkt weiterverarbeitet werden kann.
In Kombination mit dem Safe-Fetch-Ansatz entsteht damit eine widerstandsfähige Integrationskomponente mit kontrollierbarem Fehlerverhalten.

### Utility-Klassen im Backend
Neben Controller-, Service- und DTO-Klassen wurden im Backend gezielt Utility-Klassen für wiederverwendbare Hilfslogik implementiert.
Diese Klassen bündeln technische Querschnittsaufgaben, die mehrfach benötigt werden, jedoch nicht in die fachliche Kernlogik einzelner Services gehören.
Typische Anwendungsfälle sind die strukturierte Verarbeitung von WebUntis-JSON, Such- und Filteroperationen innerhalb verschachtelter Datenstrukturen sowie Zeitumrechnungen in systemkompatible Formate.
Durch diese Auslagerung bleibt der übrige Anwendungscode übersichtlich, da wiederkehrende Verarbeitungsschritte nicht mehrfach in unterschiedlichen Klassen dupliziert werden müssen.
Die Utility-Schicht trägt damit wesentlich zur Wartbarkeit bei, weil Änderungen an Hilfslogik zentral erfolgen können.
Da WebUntis-Daten als JSON vorliegen, basieren diese Hilfsklassen stark auf `JsonNode` und defensiven Zugriffsmustern wie `node.path(...)`.
Dieses Vorgehen reduziert das Risiko von Laufzeitfehlern bei fehlenden oder optionalen Feldern und erhöht die Stabilität der gesamten Datenpipeline. [@Jackson-Docs]

#### ClassFinder
`ClassFinder` übernimmt die Aufgabe, aus der WebUntis-Tagesübersicht gezielt Klasseninformationen zu extrahieren und für die weitere Verarbeitung aufzubereiten.
Die Suche erfolgt über die `rows`-Einträge im JSON, wobei der jeweilige `header` als Klassenbezeichnung ausgewertet wird.
Zusätzlich wird ermittelt, ob zum aktuellen Zeitpunkt eine Unterrichtseinheit aktiv ist.
Dafür wird die aktuelle Uhrzeit in das Untis-Zeitformat umgerechnet und mit den Zeitgrenzen `startTime` und `endTime` verglichen.
Ergänzend werden besondere Einträge wie Veranstaltungen oder Abweichungen im Stundenverlauf aus den Periodendaten gesammelt.
Bei unregelmäßigen Zeitfenstern können diese Informationen als Anzeigehinweis in den resultierenden DTOs verwendet werden.
Dadurch steht dem Frontend nicht nur eine reine Trefferliste, sondern eine fachlich angereicherte Sicht auf den Klassenstatus zur Verfügung.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Klassensuche mit Zeitfilter" .java}
public static List<ClassInfoDTO> search(JsonNode root, String query) {
    String q = query.toLowerCase();
    int now = ConvertToUntisTimeUtil.nowAsUntisTime();

    for (JsonNode row : root.path("payload").path("rows")) {
        String header = row.path("header").asText("").trim(); // Klassenname
        if (!header.toLowerCase().contains(q)) continue;

        // ... periods durchsuchen und aktuelle Stunde finden (now in start/end)
    }
    return results;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im Code zeigt die Methode `search(...)` den zentralen Ablauf der Klassenfilterung.
Der Suchbegriff wird zunächst vereinheitlicht, damit Vergleiche unabhängig von Groß- und Kleinschreibung erfolgen.
Mit `ConvertToUntisTimeUtil.nowAsUntisTime()` wird eine vergleichbare Zeitrepräsentation für den Abgleich mit Untis-Zeitfeldern erzeugt.
Die Iteration über `root.path("payload").path("rows")` stellt sicher, dass auch bei fehlenden Zwischenknoten kein sofortiger Fehler ausgelöst wird.
Über `header.toLowerCase().contains(q)` wird eine tolerante Teilstring-Suche umgesetzt.
Treffer können anschließend um Zusatzinformationen wie laufende Stunde, Fach oder Ereignisse erweitert und in `ClassInfoDTO` überführt werden.

### ConvertToUntisTimeUtil
`ConvertToUntisTimeUtil` stellt eine kompakte, aber zentrale Hilfsfunktion für zeitabhängige Logik bereit.
WebUntis verwendet Zeitangaben häufig als Ganzzahlen im Format `HHmm`, beispielsweise `0815` oder `1340`.
Für Vergleiche mit Stundenplaneinträgen ist daher eine einheitliche Umrechnung der aktuellen Systemzeit in dieses Schema erforderlich.
Genau diese Aufgabe übernimmt die Utility-Methode `nowAsUntisTime()`.
Die Verwendung einer festen Zeitzone (`Europe/Vienna`) verhindert inkonsistente Ergebnisse bei abweichenden Server- oder Container-Defaults.
Damit bleibt das Verhalten auch in unterschiedlichen Laufzeitumgebungen reproduzierbar.
Die Implementierung basiert auf der `java.time`-API und folgt damit dem aktuellen Standard für sichere und präzise Zeitverarbeitung in Java. [@Java-Time-Docs]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Zeitformat-Konvertierung für WebUntis" .java}
public class ConvertToUntisTimeUtil {

    private static final ZoneId SCHOOL_ZONE = ZoneId.of("Europe/Vienna");

    public static int nowAsUntisTime() {
        LocalTime now = ZonedDateTime.now(SCHOOL_ZONE).toLocalTime();
        return now.getHour() * 100 + now.getMinute();
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im gezeigten Ausschnitt definiert `SCHOOL_ZONE` die projektrelevante Referenzzeitzone als Konstante.
Die Methode `nowAsUntisTime()` liest den aktuellen Zeitpunkt zonensicher aus und reduziert ihn auf die lokale Uhrzeit.
Der Ausdruck `hour * 100 + minute` erzeugt anschließend genau jenes numerische Format, das in den WebUntis-Daten für Zeitfenstervergleiche erwartet wird.
Dadurch kann die Fachlogik in Such- und Parser-Klassen direkt mit kompatiblen Werten arbeiten, ohne eigene Zeitkonvertierungen duplizieren zu müssen.

### TeacherFinder
`TeacherFinder` übernimmt die Suche und Verdichtung von Lehrerdaten aus derselben WebUntis-Quelle.
Die Klasse orientiert sich konzeptionell am `ClassFinder`, erweitert die Verarbeitung jedoch um lehrerspezifische Informationen wie Kürzel, Vorname und Nachname.
Ziel ist die Erzeugung strukturierter DTOs, die innerhalb des Backends konsistent weiterverarbeitet oder direkt über die API ausgegeben werden können.
Ein wichtiger Robustheitsbaustein ist die Methode `firstNonBlank(...)`.
Da WebUntis je nach Datensatz unterschiedliche Feldnamen für inhaltlich ähnliche Informationen liefern kann, werden mehrere Schlüssel in definierter Reihenfolge geprüft.
Zurückgegeben wird der erste nicht-leere Wert, wodurch uneinheitliche Datenstrukturen ohne zusätzlichen Spezialfallcode abgefangen werden.
Dieses Vorgehen erhöht die Fehlertoleranz und verhindert, dass einzelne fehlende Felder die gesamte Lehreransicht beeinträchtigen.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Defensive Feldauswahl bei JSON-Verarbeitung" .java}
private static String firstNonBlank(JsonNode node, String... keys) {
    for (String key : keys) {
        String value = node.path(key).asText("");
        if (!value.isBlank()) {
            return value.trim();
        }
    }
    return "";
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im Code wird dieses Prinzip durch die Schleife über `keys` sichtbar.
Jeder potenzielle Schlüssel wird über `node.path(key).asText("")` sicher gelesen.
Sobald ein verwertbarer Inhalt gefunden wird, wird dieser bereinigt und unmittelbar zurückgegeben.
Falls kein Feld belegt ist, liefert die Methode einen leeren String als definierten Standardwert.
Damit bleibt das Aufruferverhalten vorhersagbar, auch wenn Eingangsdaten unvollständig sind.

### TeacherHeaderParser
`TeacherHeaderParser` ist für die Zerlegung des von WebUntis gelieferten Header-Strings verantwortlich.
Dieser Header enthält typischerweise kombinierte Angaben zu Nachname, Vorname und Kürzel in einem einzigen Textfeld.
Für die strukturierte Extraktion wird ein regulärer Ausdruck eingesetzt.
Mit diesem Ansatz lassen sich feste Textmuster zuverlässig in Einzelbestandteile auftrennen, ohne umfangreiche manuelle Stringoperationen zu benötigen. [@Java-Regex-Docs]
Gleichzeitig berücksichtigt die Implementierung, dass externe Systeme nicht immer konsistente Formate liefern.
Wenn ein Header nicht dem erwarteten Muster entspricht, wird dennoch ein gültiges `TeacherInfoDTO` mit Default-Werten erzeugt.
Dadurch werden harte Abbrüche vermieden und die Oberfläche bleibt trotz unvollständiger Eingangsdaten funktionsfähig.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{caption="Regex-basierter Parser für Lehrerinformationen" .java}
public class TeacherHeaderParser {

    private static final Pattern PATTERN =
            Pattern.compile("(.+?),\\s*(.+?)\\s*\\((.+?)\\)");

    public static TeacherInfoDTO parse(String header) {
        Matcher m = PATTERN.matcher(header);
        if (!m.matches()) {
            return new TeacherInfoDTO(header, "", "", "", null);
        }
        return new TeacherInfoDTO(
                header,
                m.group(1).trim(), // Nachname
                m.group(2).trim(), // Vorname
                m.group(3).trim(), // Kürzel
                null
        );
    }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Im gezeigten Ausschnitt definiert `PATTERN` das erwartete Strukturformat des Header-Strings.
Die Methode `parse(String header)` führt zunächst ein vollständiges Muster-Matching durch.
Bei fehlender Übereinstimmung wird kontrolliert ein DTO mit Ersatzwerten zurückgegeben.
Bei erfolgreicher Übereinstimmung werden die Gruppeninhalte extrahiert, bereinigt und in ein strukturiertes `TeacherInfoDTO` überführt.
Diese defensive Parsing-Strategie unterstützt eine robuste Verarbeitung heterogener WebUntis-Daten im laufenden Betrieb.

### Fazit und Ausblick des Backend-Teils
Im Rahmen dieser Teilaufgabe wurde ein Backend entwickelt, das als zentrale Integrations- und Verarbeitungsschicht des Infopoint-Systems fungiert.
Die klare Trennung von Controller, Service, Client und DTO führte zu einer nachvollziehbaren und wartbaren Architektur.
Anfragen folgen einem konsistenten Verarbeitungspfad, wodurch fachliche Logik, externe Kommunikation und API-Ausgabe sauber voneinander getrennt bleiben.
Dadurch konnte eine stabile Grundlage geschaffen werden, die sowohl den laufenden Betrieb als auch spätere Erweiterungen unterstützt.
Ein wesentlicher Schwerpunkt lag auf der Anbindung externer Systeme.
Über den CockpitClient werden redaktionelle Inhalte aus dem CMS kontrolliert geladen und in ein für das Frontend nutzbares Format überführt.
Über den WebUntisClient werden Stundenplaninformationen robust abgerufen und bei Fehlern über definierte Fallback-Mechanismen abgesichert.
Diese Integrationsstrategie reduziert die Kopplung zwischen Frontend und Fremdsystemen und erhöht zugleich die Ausfallsicherheit der Anwendung.
Zusätzlich wurde Wert auf Datenqualität und kontrollierbare Fehlerbehandlung gelegt.
Eingaben werden validiert, Antworten werden über DTOs standardisiert und Fehlersituationen werden als konsistente Rückmeldungen bereitgestellt.
Damit wurde sichergestellt, dass das Backend nicht nur funktional korrekt arbeitet, sondern auch unter realistischen Betriebsbedingungen verlässlich bleibt.
Für den weiteren Ausbau bestehen mehrere sinnvolle Entwicklungspfade.
Dazu zählen die Erweiterung zusätzlicher Ressourcenendpunkte und die Vertiefung von Monitoring Funktionen.
Ebenso bietet die gewählte Architektur eine gute Basis für eine feinere Konfiguration je Zielumgebung.
Insgesamt stellt das Backend damit eine belastbare und zukunftsfähige Grundlage für den digitalen Infopoint im schulischen Alltag dar.

### Kurze Reflexion
Die Umsetzung des Backend-Teils hat gezeigt, wie entscheidend eine klare Architektur für Wartbarkeit und Erweiterbarkeit ist.
Besonders die saubere Trennung zwischen Integrationslogik und Geschäftslogik erwies sich im Projektverlauf als zentraler Qualitätsfaktor.
Die Arbeit mit externen Systemen wie Cockpit und WebUntis verdeutlichte zudem, dass robuste Fehlerbehandlung und definierte Fallbacks im praktischen Betrieb unverzichtbar sind.
Insgesamt entstand dadurch ein vertieftes Verständnis dafür, wie theoretische Architekturprinzipien unter realen Randbedingungen zielgerichtet in eine belastbare Backend-Lösung überführt werden können.
