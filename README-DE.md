# Bitcoin Meetup Kalender - Admin Anleitung

## Für Admins: Events bearbeiten und hinzufügen

### Repository bearbeiten

1. **Auf GitHub.com gehen:** https://github.com/arbadacarbaYK/bitcoin-meetup-calendar

2. **Datei bearbeiten:** 
   - Auf `public/app-calendar.js` klicken
   - "Edit" Button (Stift-Symbol) klicken
   - Änderungen vornehmen
   - Commit message eingeben (z.B. "Neue Events hinzugefügt")
   - "Commit changes" klicken

3. **Automatisches Deployment:** 
   - GitHub Pages deployed automatisch bei Änderungen
   - Website ist nach 1-2 Minuten verfügbar

### Event-Typen und Felder

**WICHTIG:** Alle Events benötigen diese Felder für vollständige Informationen:

#### 1. Bitcoin Feiertage (`bitcoin-holiday`)
```javascript
{
    id: 'bitcoin-created',
    title: 'Bitcoin wurde erschaffen',
    type: 'bitcoin-holiday',
    start: new Date('2008-10-31'),
    end: new Date('2008-10-31'),
    description: 'Satoshi Nakamoto veröffentlichte das Bitcoin Whitepaper und revolutionierte damit das Geld.',
    recurring: { type: 'yearly' },
    organizer: 'Satoshi Nakamoto',
    location: 'Internet', // Optional
    links: [
        { url: 'https://bitcoin.org/bitcoin.pdf', name: 'Bitcoin Whitepaper' }
    ]
}
```

#### 2. Meetups (`meetup-event`)
```javascript
{
    id: 'duesseldorf-meetup-jan',
    title: 'Einundzwanzig Düsseldorf Bitcoin Meetup',
    type: 'meetup-event',
    start: new Date('2025-01-10T19:00:00'),
    end: new Date('2025-01-10T22:00:00'),
    description: 'Monatliches Bitcoin Meetup in Düsseldorf. Diskussion über die neuesten Bitcoin-Nachrichten und Entwicklungen.',
    recurring: { type: 'monthly', pattern: '2nd-friday' },
    organizer: 'Einundzwanzig Düsseldorf',
    location: 'Düsseldorf',
    links: [
        { url: 'https://t.me/einundzwanzig_duesseldorf', name: 'Telegram Gruppe' }
    ]
}
```

#### 3. Konferenzen (`conference-event`)
```javascript
{
    id: 'bitcoin2025',
    title: 'Bitcoin 2025',
    type: 'conference-event',
    start: new Date('2025-05-28T09:00:00'),
    end: new Date('2025-05-31T18:00:00'),
    description: 'Die größte Bitcoin-Konferenz der Welt mit Vorträgen, Workshops und Networking.',
    recurring: { type: 'none' },
    organizer: 'Bitcoin Magazine',
    location: 'Las Vegas, NV',
    links: [
        { url: 'https://b.tc/conference', name: 'Offizielle Website' },
        { url: 'https://b.tc/tickets', name: 'Tickets kaufen' }
    ]
}
```

### Vollständige Feld-Beschreibung

#### Pflichtfelder:
- **`id`**: Eindeutige ID (z.B. 'bitcoin-created', 'duesseldorf-meetup-jan')
- **`title`**: Event-Titel (wird im Kalender angezeigt)
- **`type`**: Event-Typ (`'bitcoin-holiday'`, `'meetup-event'`, `'conference-event'`)
- **`start`**: Startdatum/Zeit als `new Date('YYYY-MM-DDTHH:MM:SS')` (internes Format)
- **`end`**: Enddatum/Zeit als `new Date('YYYY-MM-DDTHH:MM:SS')` (internes Format)
- **`description`**: Ausführliche Beschreibung (wird im Modal angezeigt)

#### Optionale Felder:
- **`organizer`**: Veranstalter/Organisator
- **`location`**: Standort (wird für btcmap.org Link verwendet)
- **`links`**: Array von Links (Website, Telegram, etc.)
- **`recurring`**: Wiederkehrende Event-Konfiguration

#### Recurring-Konfiguration:
```javascript
// Nicht wiederkehrend
recurring: { type: 'none' }

// Jährlich (gleiches Datum)
recurring: { type: 'yearly', pattern: 'same-date' }

// Monatlich (gleiches Datum)
recurring: { type: 'monthly', pattern: 'same-date' }

// Flexible monatliche Muster (alle Kombinationen unterstützt):
recurring: { type: 'monthly', pattern: '1st-monday' }    // Jeden 1. Montag
recurring: { type: 'monthly', pattern: '2nd-friday' }    // Jeden 2. Freitag
recurring: { type: 'monthly', pattern: '3rd-tuesday' }   // Jeden 3. Dienstag
recurring: { type: 'monthly', pattern: '4th-wednesday' } // Jeden 4. Mittwoch
recurring: { type: 'monthly', pattern: 'last-saturday' } // Jeden letzten Samstag

// Wöchentlich (gleicher Wochentag)
recurring: { type: 'weekly', pattern: 'same-day' }
```

### Vollständige Recurring Pattern Liste

**Alle Kombinationen werden unterstützt:**

#### 1. Bis 4. Wochentag:
- `'1st-sunday'` bis `'4th-sunday'`
- `'1st-monday'` bis `'4th-monday'`
- `'1st-tuesday'` bis `'4th-tuesday'`
- `'1st-wednesday'` bis `'4th-wednesday'`
- `'1st-thursday'` bis `'4th-thursday'`
- `'1st-friday'` bis `'4th-friday'`
- `'1st-saturday'` bis `'4th-saturday'`

#### Last Wochentag:
- `'last-sunday'`
- `'last-monday'`
- `'last-tuesday'`
- `'last-wednesday'`
- `'last-thursday'`
- `'last-friday'`
- `'last-saturday'`

#### Beispiele für Meetups:
```javascript
// Jeden 1. Montag des Monats
recurring: { type: 'monthly', pattern: '1st-monday' }

// Jeden 2. Freitag des Monats
recurring: { type: 'monthly', pattern: '2nd-friday' }

// Jeden letzten Samstag des Monats
recurring: { type: 'monthly', pattern: 'last-saturday' }
```

### Wichtige Hinweise zur Datumsformatierung

**Frontend-Anzeige:** Das Kalender-Frontend zeigt alle Daten im deutschen Format DD.MM.YYYY an.

**Code-Format:** Im Code werden Daten im ISO-Format YYYY-MM-DD gespeichert, aber die Anzeige erfolgt automatisch deutsch.

**Beispiele:**
- Code: `new Date('2025-01-10T19:00:00')`
- Anzeige: `10.01.25` (im Kalender) und `10.01.2025` (im Modal)

### Links hinzufügen

```javascript
links: [
    { url: 'https://example.com', text: 'Website' },
    { url: 'https://t.me/channel', text: 'Telegram' },
    { url: 'https://nostr.com/npub...', text: 'Nostr' },
    { url: 'https://btcmap.org/map#3/51.2277/6.7735', text: '📍 Location' }
]
```

### Standorte hinzufügen

**Automatische btcmap.org Integration:**

1. **Standort im Event hinzufügen:**
```javascript
{
    id: 'bitcoin2025',
    title: 'Bitcoin 2025',
    type: 'conference-event',
    start: new Date('2025-05-28T09:00:00'),
    end: new Date('2025-05-31T18:00:00'),
    location: 'Las Vegas, NV', // Wird automatisch zu btcmap.org Link
    organizer: 'Bitcoin Magazine'
}
```

2. **Bekannte Standorte** (werden automatisch mit Koordinaten verknüpft):
   - `'Düsseldorf'` → Deutschland
   - `'Las Vegas, NV'` → Nevada, USA
   - `'Miami, FL'` → Florida, USA
   - `'NYC, NY'` → New York, USA

3. **Neue Standorte hinzufügen:** In `generateLocationLink` Funktion in `knownLocations` Objekt
4. **Links werden automatisch generiert:** `https://btcmap.org/map#zoom/lat/lng`
5. **Im Modal angezeigt:** Als "📍 Auf Karte anzeigen" Button
6. **Im Export enthalten:** Als `LOCATION` Feld in iCalendar

### Nostr Integration

Für Events mit Nostr-Profilen:

1. **Nostr npub hinzufügen** in das `nostrEvents` Objekt:
```javascript
window.nostrEvents = {
    'einundzwanzig meetup düsseldorf': 'npub1dus2ljc6fn5dt6psatnsce7uckzgdvl3q3s73u00vedl87vnclwqdllq5k',
    'bitcoin konferenz 2025': 'npub1abc123...' // Neuer Eintrag
};
```

2. **Automatische Erkennung:** Das System sucht automatisch nach passenden Mustern im Event-Titel
3. **Links werden automatisch generiert:** `https://nostr.com/npub1...`
4. **Im Modal angezeigt:** Nostr-Links erscheinen als "🌐 Nostr" Button
5. **Im Export enthalten:** Nostr-Links werden in die iCalendar-Datei exportiert

### GitHub Pages Deployment

- Automatisches Deployment bei Änderungen
- Website verfügbar unter: `https://arbadacarbaYK.github.io/bitcoin-meetup-calendar/`

### Wichtige Hinweise

- **Datum Format:** `YYYY-MM-DD` (ISO Format)
- **IDs:** Eindeutig und beschreibend
- **Titel:** Kurz und prägnant
- **Links:** Immer `url` und `text` Felder
- **Recurring:** Nur bei wiederkehrenden Events

### Event-Export

**Vollständige iCalendar Export-Funktion:**

Benutzer können Kalender in iCalendar Format exportieren mit **allen** Event-Informationen:

#### Export-Optionen:
- **Alle Events** - Alle Event-Typen
- **Nur Meetups** - Nur meetup-event Events  
- **Nur Feiertage** - Nur bitcoin-holiday Events
- **Nur Konferenzen** - Nur conference-event Events

#### Exportierte Informationen:
✅ **Grunddaten:**
- Event-Titel (`SUMMARY`)
- Beschreibung (`DESCRIPTION`)
- Event-Typ (`CATEGORIES`)
- Standort (`LOCATION`)

✅ **Zeitangaben:**
- Startdatum/Zeit (`DTSTART`)
- Enddatum/Zeit (`DTEND`)
- Wiederkehrende Events (`RRULE`)

✅ **Zusätzliche Details:**
- Veranstalter (`ORGANIZER`)
- Website-Links (`URL`)
- Nostr-Links (`URL`)
- Wiederkehrende Info (`COMMENT`)

#### Workflow für Admins:

1. **Event hinzufügen:** Alle Felder ausfüllen (Pflicht- und Optionalfelder)
2. **Links hinzufügen:** Website, Telegram, etc. in `links` Array
3. **Standort hinzufügen:** Für automatische btcmap.org Integration
4. **Nostr hinzufügen:** In `nostrEvents` Objekt für Nostr-Profil Links
5. **Commit:** Änderungen über GitHub Web-Frontend committen
6. **Auto-Deploy:** GitHub Pages deployed automatisch
7. **Export verfügbar:** Benutzer können sofort alle Event-Details exportieren

#### Wichtige Hinweise:

- **Vollständige Informationen:** Je mehr Felder ausgefüllt sind, desto nützlicher ist der Export
- **Automatische Links:** Standort- und Nostr-Links werden automatisch generiert
- **iCalendar Standard:** Kompatibel mit Google Calendar, Outlook, Apple Calendar
- **Sofort verfügbar:** Export-Funktion funktioniert sofort nach Commit