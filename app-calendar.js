console.log('🚀 Bitcoin Meetup Calendar loading...');

// Ensure all required libraries are loaded
if (typeof React === 'undefined' || typeof ReactDOM === 'undefined' || typeof moment === 'undefined') {
    console.error('❌ One or more required libraries are not loaded. Please check CDN links.');
} else {
    console.log('✅ All required libraries loaded');
}

// Function to initialize the calendar
function initializeCalendar() {
    console.log('📅 Initializing Bitcoin Meetup Calendar...');

    // Load Bitcoin historical events from our comprehensive dataset
    const events = [
        // January Events
        {
            id: 'jan-03-bitcoin-birthday',
            title: 'Bitcoins Geburtstag!',
            start: new Date(2025, 0, 3),
            end: new Date(2025, 0, 3),
            type: 'bitcoin-holiday',
            description: 'Am 3. Januar 2009 wurde der Genesis-Block von Bitcoin gemined. Dies markiert den offiziellen Geburtstag von Bitcoin.',
            links: [
                { name: 'Bitcoin Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf' },
                { name: 'Genesis Block', url: 'https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'jan-03-proof-of-keys',
            title: 'Proof of Keys Day',
            start: new Date(2025, 0, 3),
            end: new Date(2025, 0, 3),
            type: 'bitcoin-holiday',
            description: 'Ein Tag, an dem Bitcoin-Besitzer ihre privaten Schlüssel beweisen und ihre Coins von Börsen abheben.',
            links: [
                { name: 'Proof of Keys Website', url: 'https://www.proofofkeys.com/' },
                { name: 'Proof of Keys Wikipedia', url: 'https://en.wikipedia.org/wiki/Proof_of_Keys' },
                { name: 'Trace Mayer X', url: 'https://x.com/TraceMayer' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'jan-08-lightning-pay',
            title: 'Lightning Pay Day',
            start: new Date(2025, 0, 8),
            end: new Date(2025, 0, 8),
            type: 'bitcoin-holiday',
            description: 'Am 8. Januar 2018 wurde die erste echte Zahlung über das Lightning Network für ein TorGuard VPN-Abonnement gesendet.',
            links: [{ name: 'Lightning Network', url: 'https://lightning.network/' }],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'jan-10-running-bitcoin',
            title: 'Running Bitcoin Day!',
            start: new Date(2025, 0, 10),
            end: new Date(2025, 0, 10),
            type: 'bitcoin-holiday',
            description: 'Am 10. Januar 2009 twitterte Hal Finney legendär "Running bitcoin". Dies war der erste Tweet über Bitcoin und markierte den Beginn einer revolutionären Technologie.',
            links: [
                { name: 'Hal Finney Tweet', url: 'https://x.com/halfin/status/1110302988' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'jan-11-genesis-transaction',
            title: 'Genesis Transaction Day',
            start: new Date(2025, 0, 11),
            end: new Date(2025, 0, 11),
            type: 'bitcoin-holiday',
            description: 'Am 11. Januar 2009 wurde die erste Transaktion über das Bitcoin-Netzwerk von Satoshi Nakamoto an Hal Finney gesendet. Dies war der erste echte Werttransfer in der Geschichte der digitalen Währungen.',
            links: [
                { name: 'Genesis Transaction', url: 'https://blockstream.info/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'jan-14-lightning-whitepaper',
            title: 'Lightning Whitepaper Day',
            start: new Date(2025, 0, 14),
            end: new Date(2025, 0, 14),
            type: 'bitcoin-holiday',
            description: 'Am 14. Januar 2016 veröffentlichten Joseph Poon und Thaddeus Dryja das Lightning Network Whitepaper. Diese Technologie ermöglicht schnelle und günstige Bitcoin-Zahlungen.',
            links: [
                { name: 'Lightning Network Whitepaper', url: 'https://lightning.network/lightning-network-paper.pdf' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'jan-19-lightning-torch',
            title: 'Lightning Network Torch',
            start: new Date(2025, 0, 19),
            end: new Date(2025, 0, 19),
            type: 'bitcoin-holiday',
            description: 'Am 19. Januar 2019 startete der pseudonyme X-Nutzer @hodlonaut den Lightning Torch - ein globales Experiment, bei dem Bitcoin über das Lightning Network von Person zu Person weitergegeben wurde. Es demonstrierte die Machbarkeit von Mikrozahlungen.',
            links: [
                { name: 'Lightning Torch Geschichte', url: 'https://lightningtorch.com/' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'jan-21-ross-pardoned',
            title: 'Ross Ulbricht Begnadigt',
            start: new Date(2025, 0, 21),
            end: new Date(2025, 0, 21),
            type: 'bitcoin-holiday',
            description: 'Am 21. Januar 2025 erhielt Ross Ulbricht eine vollständige Begnadigung von Präsident Donald J. Trump. Ulbricht war der Gründer von Silk Road, einem frühen Marktplatz, der Bitcoin als Zahlungsmittel verwendete.',
            links: [
                { name: 'Free Ross Ulbricht', url: 'https://freeross.org/' },
                { name: 'Bitcoin Magazine Artikel', url: 'https://bitcoinmagazine.com/culture/ross-ulbricht-pardon-trump-silk-road' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'jan-27-silk-road',
            title: 'Silk Road Day',
            start: new Date(2025, 0, 27),
            end: new Date(2025, 0, 27),
            type: 'bitcoin-holiday',
            description: 'Der Tag, an dem der Silk Road Marktplatz online ging. Ein Beweis für Bitcoins Unabhängigkeit und Zensurresistenz. Silk Road war einer der ersten großen Anwendungsfälle für Bitcoin als Zahlungsmittel.',
            links: [
                { name: 'Silk Road Wikipedia', url: 'https://en.wikipedia.org/wiki/Silk_Road_(marketplace)' },
                { name: 'Bitcoin Magazine Artikel', url: 'https://bitcoinmagazine.com/culture/silk-road-bitcoin-history' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // February Events
        {
            id: 'feb-13-zap-nip',
            title: 'Zap NIP Day',
            start: new Date(2025, 1, 13),
            end: new Date(2025, 1, 13),
            type: 'bitcoin-holiday',
            description: 'Der Tag, an dem das Bitcoin Lightning Network mit dem Nostr-Netzwerk verbunden wurde. Dies ermöglichte Lightning-Zahlungen direkt über Nostr-Nachrichten.',
            links: [
                { name: 'NIP-57 Specification', url: 'https://github.com/nostr-protocol/nips/blob/master/57.md' },
                { name: 'Lightning Zaps auf Nostr', url: 'https://nostr.com/blog/lightning-zaps' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'feb-09-dollar-parity',
            title: 'Dollar Parity Day',
            start: new Date(2025, 1, 9),
            end: new Date(2025, 1, 9),
            type: 'bitcoin-holiday',
            description: 'Am 9. Februar 2011 erreichte Bitcoin erstmals Parität mit dem US-Dollar (1 BTC = 1 USD). Dies war ein wichtiger Meilenstein für die Akzeptanz von Bitcoin als Währung.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'feb-19-trillion-dollar',
            title: 'The Trillion Dollar Day',
            start: new Date(2025, 1, 19),
            end: new Date(2025, 1, 19),
            type: 'bitcoin-holiday',
            description: 'Am 19. Februar 2021 überschritt die Marktkapitalisierung des gesamten Bitcoin-Netzwerks 1 Billion USD.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'feb-24-mtgox-death',
            title: 'The death of Mt. Gox',
            start: new Date(2025, 1, 24),
            end: new Date(2025, 1, 24),
            type: 'bitcoin-holiday',
            description: 'Am 24. Februar 2014 ging Mt. Gox, die größte Bitcoin-Börse der Welt, offline aufgrund von Insolvenz. Dies führte zu einem wichtigen Lerneffekt: "Not your keys, not your coins".',
            links: [
                { name: 'Mt. Gox Wikipedia', url: 'https://en.wikipedia.org/wiki/Mt._Gox' },
                { name: 'Bitcoin Magazine Artikel', url: 'https://bitcoinmagazine.com/culture/mt-gox-collapse-bitcoin-history' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'feb-25-lightning-pizza',
            title: 'Lightning Pizza Day',
            start: new Date(2025, 1, 25),
            end: new Date(2025, 1, 25),
            type: 'bitcoin-holiday',
            description: 'Acht Jahre nach dem ersten echten Bitcoin-Pizza-Kauf kehrte Lazlo Hanyecz zurück, um Pizza über das Lightning Network zu kaufen. Dies demonstrierte die Evolution von Bitcoin-Zahlungen.',
            links: [
                { name: 'Lightning Pizza Artikel', url: 'https://bitcoinmagazine.com/culture/lightning-pizza-day-laszlo-hanyecz' },
                { name: 'Original Bitcoin Pizza Day', url: 'https://en.wikipedia.org/wiki/Bitcoin_Pizza_Day' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // March Events
        {
            id: 'mar-03-gold-parity',
            title: 'Gold Parity Day',
            start: new Date(2025, 2, 3),
            end: new Date(2025, 2, 3),
            type: 'bitcoin-holiday',
            description: 'Am 3. März 2017 übertraf 1 Bitcoin erstmals den Preis von 1 Unze Gold.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'mar-07-not-dorian',
            title: 'I am not Dorian Nakamoto',
            start: new Date(2025, 2, 7),
            end: new Date(2025, 2, 7),
            type: 'bitcoin-holiday',
            description: 'Am 7. März 2014 erklärte Dorian Nakamoto öffentlich, dass er nicht Satoshi Nakamoto sei.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'mar-12-block-rollback',
            title: '24 block rollback',
            start: new Date(2025, 2, 12),
            end: new Date(2025, 2, 12),
            type: 'bitcoin-holiday',
            description: 'Am 12. März 2013 führte ein Bug zu einem Fork zwischen Bitcoin-Versionen 0.7 und 0.8. Ein Rollback von 24 Blöcken verhinderte einen Netzwerk-Fork.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'mar-25-moscow-time',
            title: 'Moscow time',
            start: new Date(2025, 2, 25),
            end: new Date(2025, 2, 25),
            type: 'bitcoin-holiday',
            description: 'Am 25. März 2019 entstand das "Moscow Time" Meme, als Jack Dorsey bei einer Kongress-Anhörung scherzte, dass Bitcoin-Mining zu "Moscow Time" stattfindet. Es wurde zu einem beliebten Meme über die globale Natur von Bitcoin.',
            links: [
                { name: 'Dorsey Kongress Anhörung', url: 'https://www.youtube.com/watch?v=7qP6U3B0hOo' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'mar-28-billion-dollar',
            title: 'The Billion Dollar Day',
            start: new Date(2025, 2, 28),
            end: new Date(2025, 2, 28),
            type: 'bitcoin-holiday',
            description: 'Am 28. März 2013 überschritt die Marktkapitalisierung des gesamten Bitcoin-Netzwerks erstmals 1 Milliarde USD.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // April Events
        {
            id: 'apr-18-altcoin-genesis',
            title: 'Altcoin Genesis Day',
            start: new Date(2025, 3, 18),
            end: new Date(2025, 3, 18),
            type: 'bitcoin-holiday',
            description: 'Am 18. April 2011 minte der erste Altcoin, Namecoin, seinen Genesis-Block.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'apr-23-bitcoin-good-hands',
            title: 'Bitcoin in Good Hands',
            start: new Date(2025, 3, 23),
            end: new Date(2025, 3, 23),
            type: 'bitcoin-holiday',
            description: 'Am 23. April 2011 machte Satoshi Nakamoto seinen letzten und finalen Post, in dem er erklärte, dass Bitcoin "in guten Händen" sei.',
            links: [
                { name: 'Satoshi Final Post', url: 'https://bitcointalk.org/index.php?topic=7.msg119#msg119' },
                { name: 'Satoshi Mystery', url: 'https://www.bitcoinmagazine.com/culture/satoshi-nakamoto-final-post-bitcoin-good-hands' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // May Events
        {
            id: 'may-02-bitcoin-atm',
            title: 'Bitcoin ATM Day',
            start: new Date(2025, 4, 2),
            end: new Date(2025, 4, 2),
            type: 'bitcoin-holiday',
            description: 'Am 2. Mai 2013 wurde der erste Bitcoin-Geldautomat in einem Vancouver-Café installiert.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'may-10-lightning-ltc',
            title: 'First Lightning payment on LTC',
            start: new Date(2025, 4, 10),
            end: new Date(2025, 4, 10),
            type: 'bitcoin-holiday',
            description: 'Christian Decker von Blockstream machte die erste vollständige, sichere Lightning-Zahlung auf einem Nicht-Testnetzwerk.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'may-22-bitcoin-pizza',
            title: 'Bitcoin Pizza Day',
            start: new Date(2025, 4, 22),
            end: new Date(2025, 4, 22),
            type: 'bitcoin-holiday',
            description: 'Der erste echte Kauf mit Bitcoin wurde von Lazlo Hanyecz gemacht, der zwei Pizzen von Jeremy Sturdivant für 10.000 Bitcoin kaufte.',
            links: [
                { name: 'Bitcoin Pizza Story', url: 'https://bitcoinmagazine.com/culture/bitcoin-pizza-day-celebrating-the-first-bitcoin-transaction' },
                { name: 'Original Forum Post', url: 'https://bitcointalk.org/index.php?topic=137.0' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'may-23-ny-disagreement',
            title: 'NY Disagreement Day',
            start: new Date(2025, 4, 23),
            end: new Date(2025, 4, 23),
            type: 'bitcoin-holiday',
            description: 'Das Bitcoin Scaling Agreement, besser bekannt als New York Agreement, löste den Blocksize-Krieg von 2017 aus.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'may-25-craig-wright-fraud',
            title: 'Craig Wright is a Fraud Day',
            start: new Date(2025, 4, 25),
            end: new Date(2025, 4, 25),
            type: 'bitcoin-holiday',
            description: 'Ein Tag, der die Blamage von Craig Steven Wright feiert, dem berüchtigten Lügner und Satoshi Nakamoto-Imitator.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // June Events
        {
            id: 'jun-09-el-salvador-law',
            title: 'Law declaring bitcoin legal tender in El Salvador passes',
            start: new Date(2025, 5, 9),
            end: new Date(2025, 5, 9),
            type: 'bitcoin-holiday',
            description: 'Am 9. Juni 2021 stimmte El Salvadors Parlament dafür, Bitcoin als gesetzliches Zahlungsmittel im Land einzuführen.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'jun-12-bitcoin-bubble-2011',
            title: 'The great bitcoin bubble of 2011',
            start: new Date(2025, 5, 12),
            end: new Date(2025, 5, 12),
            type: 'bitcoin-holiday',
            description: 'Der Preis von 1 Bitcoin erreichte während der Blase von 2011 einen Höchststand von 31,91 USD, bevor er den schärfsten Fall seiner Geschichte erlebte.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // July Events
        {
            id: 'jul-03-shitcoin-day',
            title: 'Shitcoin Day',
            start: new Date(2025, 6, 3),
            end: new Date(2025, 6, 3),
            type: 'bitcoin-holiday',
            description: 'Am 3. Juli 2013 startete Mastercoin (später Omni), das erste "Utility Token" ICO. Dies markierte den Beginn der Altcoin-Ära und führte zur Prägung des Begriffs "Shitcoin" für minderwertige Kryptowährungen. Es erinnert daran, dass Bitcoin das einzige digitale Gold ist.',
            links: [
                { name: 'Mastercoin History', url: 'https://en.wikipedia.org/wiki/Omni_Layer' },
                { name: 'Altcoin Origins', url: 'https://bitcoinmagazine.com/culture/altcoin-history-mastercoin-first-ico' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // August Events
        {
            id: 'aug-01-bitcoin-independence',
            title: 'Bitcoin Independence Day',
            start: new Date(2025, 7, 1),
            end: new Date(2025, 7, 1),
            type: 'bitcoin-holiday',
            description: 'Am 1. August 2017 endeten die Bitcoin "Blocksize-Kriege" mit der Abspaltung von Bitcoin Cash. Dies war ein wichtiger Moment für Bitcoin\'s Unabhängigkeit - die Community wählte Dezentralisierung über größere Blöcke. Bitcoin blieb unverändert und bewahrte seine Kernprinzipien.',
            links: [
                { name: 'Bitcoin Cash Fork', url: 'https://en.wikipedia.org/wiki/Bitcoin_Cash' },
                { name: 'Blocksize Wars', url: 'https://bitcoinmagazine.com/culture/bitcoin-blocksize-wars-history' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'aug-08-segwit-lockin',
            title: 'SegWit Lock-in Day',
            start: new Date(2025, 7, 8),
            end: new Date(2025, 7, 8),
            type: 'bitcoin-holiday',
            description: 'Am 8. August 2017 wurde Segregated Witness (SegWit) durch User-Activated Soft Fork (UASF) im Bitcoin-Netzwerk aktiviert. SegWit war ein wichtiger Upgrade, der Transaktionskapazität erhöhte und das Lightning Network ermöglichte, ohne die Blockgröße zu erhöhen.',
            links: [
                { name: 'SegWit BIP', url: 'https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki' },
                { name: 'UASF Movement', url: 'https://bitcoinmagazine.com/technical/uasf-user-activated-soft-fork-explained' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'aug-11-bitcoin-meetup-duesseldorf',
            title: 'Bitcoin Meetup Düsseldorf gegründet',
            start: new Date(2025, 7, 11),
            end: new Date(2025, 7, 11),
            type: 'bitcoin-holiday',
            description: 'Am 11. August 2021 wurde das Bitcoin Meetup Düsseldorf gegründet. Eine lokale Community für Bitcoin-Enthusiasten im Rheinland, die sich regelmäßig trifft, um über Bitcoin zu diskutieren und voneinander zu lernen.',
            links: [
                { name: 'Einundzwanzig Düsseldorf', url: 'https://t.me/einundzwanzig_duesseldorf' },
                { name: 'Einundzwanzig Meetups', url: 'https://einundzwanzig.space/meetups' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'aug-18-bitcoin-org-registered',
            title: 'Bitcoin.org Registered',
            start: new Date(2025, 7, 18),
            end: new Date(2025, 7, 18),
            type: 'bitcoin-holiday',
            description: 'Am 18. August 2008 registrierte Satoshi Nakamoto die Domain Bitcoin.org, bevor das offizielle Whitepaper veröffentlicht wurde. Diese Domain wurde zur zentralen Informationsquelle für Bitcoin und beherbergt bis heute das ursprüngliche Bitcoin-Whitepaper.',
            links: [
                { name: 'Bitcoin.org', url: 'https://bitcoin.org/' },
                { name: 'Bitcoin Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'aug-20-satoshi-emails-adam',
            title: 'Satoshi Emails Adam Back',
            start: new Date(2025, 7, 20),
            end: new Date(2025, 7, 20),
            type: 'bitcoin-holiday',
            description: 'Am 20. August 2008 kontaktierte Satoshi Nakamoto Adam Back, den Erfinder von Hashcash, um ihn über das Bitcoin-Whitepaper zu informieren und die korrekte Zitierinformation zu bestätigen. Hashcash war eine wichtige Grundlage für Bitcoins Proof-of-Work-Algorithmus.',
            links: [
                { name: 'Hashcash Paper', url: 'http://hashcash.org/papers/hashcash.pdf' },
                { name: 'Adam Back Twitter', url: 'https://x.com/adam3us' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'aug-21-bitcoin-infinity',
            title: 'Bitcoin Infinity Day',
            start: new Date(2025, 7, 21),
            end: new Date(2025, 7, 21),
            type: 'bitcoin-holiday',
            description: 'Am 21. August feiert die Bitcoin-Community den "Bitcoin Infinity Day" - ein Tag, der das Konzept der Unendlichkeit (∞) und die begrenzte Gesamtmenge von 21 Millionen Bitcoin symbolisiert. Es erinnert daran, dass Bitcoin eine endliche Ressource ist, während traditionelles Fiat-Geld unendlich gedruckt werden kann.',
            links: [
                { name: 'Bitcoin Supply Limit', url: 'https://bitcoin.org/en/bitcoin-paper' },
                { name: '21 Million Bitcoin', url: 'https://bitcoinmagazine.com/guides/why-bitcoin-limited-21-million' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'aug-23-segwit-activation',
            title: 'SegWit Activation Day',
            start: new Date(2025, 7, 23),
            end: new Date(2025, 7, 23),
            type: 'bitcoin-holiday',
            description: 'Am 23. August 2017 um 1:57 UTC aktivierte sich Segregated Witness (SegWit) offiziell im Bitcoin-Mainnet bei Blockhöhe 481.824. Dies war ein historischer Moment, der Bitcoin\'s Skalierbarkeit verbesserte und den Weg für das Lightning Network ebnete.',
            links: [
                { name: 'SegWit Activation Block', url: 'https://blockstream.info/block/0000000000000000001c8018d9cb3b742ef25114f27563e3fc4a1902167f9893' },
                { name: 'SegWit Benefits', url: 'https://bitcoinmagazine.com/technical/segwit-benefits-bitcoin-network' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // September Events
        {
            id: 'sep-07-el-salvador-legal',
            title: 'Bitcoin becomes legal tender in El Salvador',
            start: new Date(2025, 8, 7),
            end: new Date(2025, 8, 7),
            type: 'bitcoin-holiday',
            description: 'Am 7. September 2021 wurde Bitcoin in El Salvador gesetzliches Zahlungsmittel, 90 Tage nach der Veröffentlichung des Gesetzes.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'sep-13-hfsp-day',
            title: 'HFSP Day',
            start: new Date(2025, 8, 13),
            end: new Date(2025, 8, 13),
            type: 'bitcoin-holiday',
            description: 'An diesem Tag sagte Udi zu Bitaroo "have fun staying poor" (HFSP). HFSP wird jetzt gegenüber Skeptikern und Kritikern verwendet.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // October Events
        {
            id: 'oct-01-free-ross',
            title: 'Free Ross Day',
            start: new Date(2025, 9, 1),
            end: new Date(2025, 9, 1),
            type: 'bitcoin-holiday',
            description: 'Ross Ulbricht wurde gefangen genommen und für seine Rolle bei der Erstellung der Silk Road-Website inhaftiert.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'oct-06-bearwhale',
            title: 'The Slaying of the BearWhale',
            start: new Date(2025, 9, 6),
            end: new Date(2025, 9, 6),
            type: 'bitcoin-holiday',
            description: 'An diesem glorreichen Tag der Schlacht postete ein Bitcoin-Wal eine 30.000 BTC Verkaufsmauer, was zu einem epischen Gefecht zwischen Hodlern und dem BearWhale führte.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'oct-31-bitcoin-whitepaper',
            title: 'Bitcoin Whitepaper Day',
            start: new Date(2025, 9, 31),
            end: new Date(2025, 9, 31),
            type: 'bitcoin-holiday',
            description: 'Satoshi Nakamoto veröffentlichte das Bitcoin-Whitepaper an die Kryptographie-Mailingliste und markierte damit seine offizielle Einführung in die Welt.',
            links: [{ name: 'Bitcoin Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf' }],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // November Events
        {
            id: 'nov-01-diffie-hellman',
            title: 'Diffie-Hellman day',
            start: new Date(2025, 10, 1),
            end: new Date(2025, 10, 1),
            type: 'bitcoin-holiday',
            description: 'Am 1. November 1976 veröffentlichten Whitfield Diffie und Martin Hellman ihr bahnbrechendes Kryptographie-Papier. Diese Grundlagen ermöglichten später die sichere digitale Kommunikation und Bitcoin.',
            links: [
                { name: 'Diffie-Hellman Paper', url: 'https://ee.stanford.edu/~hellman/publications/24.pdf' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'nov-08-bitcoin-logo',
            title: 'Bitcoin Logo Day',
            start: new Date(2025, 10, 8),
            end: new Date(2025, 10, 8),
            type: 'bitcoin-holiday',
            description: 'Am 8. November 2009 wurde das ikonische Bitcoin-Logo (₿) von Satoshi Nakamoto entworfen und in der Bitcoin-Software implementiert. Es wurde zum weltweiten Symbol für digitale Freiheit.',
            links: [
                { name: 'Bitcoin Logo Wikipedia', url: 'https://en.wikipedia.org/wiki/Bitcoin#Logo' },
                { name: 'Bitcoin Logo Design History', url: 'https://bitcoinmagazine.com/culture/bitcoin-logo-design-history' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'nov-11-this-is-gentlemen',
            title: 'These are Gentlemen!',
            start: new Date(2025, 10, 11),
            end: new Date(2025, 10, 11),
            type: 'bitcoin-holiday',
            description: 'Am 11. November 2014 wurde ein berühmter Reddit-Post veröffentlicht, der versehentlich "This is gentlemen!" anstatt "These are gentlemen!" schrieb. Das Meme wurde zu einem Kult-Phänomen in der Bitcoin-Community.',
            links: [
                { name: 'Reddit Post', url: 'https://www.reddit.com/r/Bitcoin/comments/2m6j8j/this_is_gentlemen/' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'nov-15-bitconnect',
            title: 'Bitconnect!',
            start: new Date(2025, 10, 15),
            end: new Date(2025, 10, 15),
            type: 'bitcoin-holiday',
            description: 'Am 15. November 2016 startete BitConnect, einer der berüchtigsten Krypto-Scams der Geschichte. Das Ponzi-Schema brach 2018 zusammen und kostete Investoren Milliarden.',
            links: [
                { name: 'BitConnect Wikipedia', url: 'https://en.wikipedia.org/wiki/BitConnect' },
                { name: 'BitConnect Collapse', url: 'https://bitcoinmagazine.com/culture/bitconnect-collapse-what-happened' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'nov-17-s2x-failure',
            title: 'S2X Failure to Launch Day',
            start: new Date(2025, 10, 17),
            end: new Date(2025, 10, 17),
            type: 'bitcoin-holiday',
            description: 'Am 17. November 2017 wurde SegWit2X (S2X) abgesagt, nachdem sich die Bitcoin-Community gegen die geplante Verdoppelung der Blockgröße ausgesprochen hatte. Dies war ein wichtiger Sieg für Dezentralisierung und Konsens.',
            links: [
                { name: 'SegWit2X Wikipedia', url: 'https://en.wikipedia.org/wiki/SegWit2x' },
                { name: 'Bitcoin Magazine SegWit2X', url: 'https://bitcoinmagazine.com/guides/what-is-segwit2x' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'nov-14-taproot-upgrade',
            title: 'Taproot Upgrade Day',
            start: new Date(2025, 10, 14),
            end: new Date(2025, 10, 14),
            type: 'bitcoin-holiday',
            description: 'Am 14. November 2021 wurde der Taproot-Upgrade im Bitcoin-Netzwerk aktiviert. Dies war der größte Bitcoin-Upgrade seit SegWit und verbesserte Privatsphäre, Skalierbarkeit und Smart Contract-Funktionalität.',
            links: [
                { name: 'Taproot Wikipedia', url: 'https://en.wikipedia.org/wiki/Taproot_(Bitcoin)' },
                { name: 'Taproot BIP', url: 'https://github.com/bitcoin/bips/blob/master/bip-0341.mediawiki' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'nov-28-haters-disbelief',
            title: 'Haters in Disbelief Day',
            start: new Date(2025, 10, 28),
            end: new Date(2025, 10, 28),
            type: 'bitcoin-holiday',
            description: 'Bitcoin ist 2013 erstmals vierstellig!',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'nov-21-23-bitfest-2025',
            title: 'BitFest 2025',
            start: new Date(2025, 10, 21),
            end: new Date(2025, 10, 23),
            type: 'conference-event',
            description: 'Eine vierteilige Feier von Bitcoin, Kreativität und Open-Source-Kultur vom 21-23. November 2025 in Manchester, UK.',
            location: 'Manchester, UK',
            organizer: 'BitFest UK',
            links: [
                { name: 'Website', url: 'https://bitfest.uk/' },
                { name: 'Discount Code: makerbits21', url: 'https://bitfest.uk/' }
            ]
        },

        // December Events
        {
            id: 'dec-10-bitcoin-mailing-list',
            title: 'The Bitcoin Mailing List Begins',
            start: new Date(2025, 11, 10),
            end: new Date(2025, 11, 10),
            type: 'bitcoin-holiday',
            description: 'Satoshi Nakamoto begann die Bitcoin-Mailingliste auf http://sourceforge.net mit der Nachricht "Willkommen zur Bitcoin-Mailingliste!"',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        {
            id: 'dec-12-satoshi-final-message',
            title: 'La Fuga - Satoshi\'s Final Message',
            start: new Date(2025, 11, 12),
            end: new Date(2025, 11, 12),
            type: 'bitcoin-holiday',
            description: 'An diesem Tag im Jahr 2010 sandte Satoshi ihre letzte Nachricht an die Welt und stellte dann die öffentliche Kommunikation mit der Bitcoin-Community ein. "La Fuga" bedeutet "Die Flucht" - Satoshi verschwand nach diesem letzten Post.',
            links: [
                { name: 'Satoshi Final Post', url: 'https://bitcointalk.org/index.php?topic=2216.msg29479#msg29479' },
                { name: 'Satoshi Mystery', url: 'https://bitcoinmagazine.com/culture/satoshi-nakamoto-final-post-bitcoin-good-hands' }
            ],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
 
        {
            id: 'dec-18-hodl-day',
            title: 'HODL day',
            start: new Date(2025, 11, 18),
            end: new Date(2025, 11, 18),
            type: 'bitcoin-holiday',
            description: 'An diesem Tag im Jahr 2013 beschloss ein sehr betrunkener Nutzer in den bitcointalk.org-Foren, einen Beitrag darüber zu schreiben, warum er trotz des fallenden Preises nicht verkauft.',
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },

        // Sample recurring meetup events
        {
            id: 'meetup-duesseldorf-2nd-friday',
            title: 'Einundzwanzig Meetup Düsseldorf',
            start: new Date(2025, 0, 10, 18, 0, 0), // January 10, 2025 (2nd Friday), 6 PM
            end: new Date(2025, 0, 10, 21, 0, 0),   // January 10, 2025, 9 PM
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Düsseldorf. Diskussion über die neuesten Bitcoin-Nachrichten und Entwicklungen.',
            location: 'Düsseldorf',
            organizer: 'Einundzwanzig Düsseldorf',
            links: [{ name: 'Telegram Gruppe', url: 'https://t.me/einundzwanzig_duesseldorf' }],
            recurring: {
                type: 'monthly',
                pattern: '2nd-friday'
            }
        },
        {
            id: 'meetup-duesseldorf-4th-wednesday',
            title: 'Einundzwanzig Meetup Düsseldorf',
            start: new Date(2025, 0, 22, 19, 0, 0), // January 22, 2025 (4th Wednesday), 7 PM
            end: new Date(2025, 0, 22, 22, 0, 0),   // January 22, 2025, 10 PM
            type: 'meetup-event',
            description: 'Regelmäßiges Bitcoin Meetup in Düsseldorf. Technische Diskussionen und Networking.',
            location: 'Bitcoin Space Düsseldorf',
            organizer: 'Einundzwanzig Düsseldorf',
            links: [{ name: 'Telegram Gruppe', url: 'https://t.me/einundzwanzig_duesseldorf' }],
            recurring: {
                type: 'monthly',
                pattern: '4th-wednesday'
            }
        },
        
        // NRW Recurring Meetups (from einundzwanzig.space/meetups)
        
        // 1st of the month meetups
        {
            id: 'meetup-dortmund-1st-monday',
            title: 'Einundzwanzig Dortmund',
            start: new Date(2025, 0, 6, 19, 0, 0), // January 6, 2025 (1st Monday), 7 PM
            end: new Date(2025, 0, 6, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Dortmund. Diskussion über Bitcoin und Networking.',
            location: 'Dortmund',
            organizer: 'Einundzwanzig Dortmund',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_dortmund' }],
            recurring: { type: 'monthly', pattern: '1st-monday' }
        },
        {
            id: 'meetup-gummersbach-1st-wednesday',
            title: 'Einundzwanzig Gummersbach',
            start: new Date(2025, 0, 1, 19, 0, 0), // January 1, 2025 (1st Wednesday), 7 PM
            end: new Date(2025, 0, 1, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Gummersbach.',
            location: 'Gummersbach',
            organizer: 'Einundzwanzig Gummersbach',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_gummersbach' }],
            recurring: { type: 'monthly', pattern: '1st-wednesday' }
        },
        {
            id: 'meetup-bonn-1st-thursday',
            title: 'Einundzwanzig Bonn',
            start: new Date(2025, 0, 2, 19, 0, 0), // January 2, 2025 (1st Thursday), 7 PM
            end: new Date(2025, 0, 2, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Bonn.',
            location: 'Bonn',
            organizer: 'Einundzwanzig Bonn',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_bonn' }],
            recurring: { type: 'monthly', pattern: '1st-thursday' }
        },
        {
            id: 'meetup-moers-1st-thursday',
            title: 'Einundzwanzig Moers',
            start: new Date(2025, 0, 2, 19, 0, 0), // January 2, 2025 (1st Thursday), 7 PM
            end: new Date(2025, 0, 2, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Moers.',
            location: 'Moers',
            organizer: 'Einundzwanzig Moers',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_moers' }],
            recurring: { type: 'monthly', pattern: '1st-thursday' }
        },
        
        // 2nd of the month meetups
        {
            id: 'meetup-hennef-2nd-tuesday',
            title: 'Einundzwanzig Hennef',
            start: new Date(2025, 0, 14, 19, 0, 0), // January 14, 2025 (2nd Tuesday), 7 PM
            end: new Date(2025, 0, 14, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Hennef.',
            location: 'Hennef',
            organizer: 'Einundzwanzig Hennef',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_hennef' }],
            recurring: { type: 'monthly', pattern: '2nd-tuesday' }
        },
        {
            id: 'meetup-essen-2nd-wednesday',
            title: 'Einundzwanzig Essen',
            start: new Date(2025, 0, 8, 19, 0, 0), // January 8, 2025 (2nd Wednesday), 7 PM
            end: new Date(2025, 0, 8, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Essen.',
            location: 'Essen',
            organizer: 'Einundzwanzig Essen',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_essen' }],
            recurring: { type: 'monthly', pattern: '2nd-wednesday' }
        },
        {
            id: 'meetup-niederrhein-2nd-friday',
            title: 'Einundzwanzig Niederrhein',
            start: new Date(2025, 0, 10, 19, 0, 0), // January 10, 2025 (2nd Friday), 7 PM
            end: new Date(2025, 0, 10, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup am Niederrhein.',
            location: 'Niederrhein',
            organizer: 'Einundzwanzig Niederrhein',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_niederrhein' }],
            recurring: { type: 'monthly', pattern: '2nd-friday' }
        },
        {
            id: 'meetup-aachen-2nd-sunday',
            title: 'Einundzwanzig Aachen',
            start: new Date(2025, 0, 12, 19, 0, 0), // January 12, 2025 (2nd Sunday), 7 PM
            end: new Date(2025, 0, 12, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Aachen.',
            location: 'Aachen',
            organizer: 'Einundzwanzig Aachen',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_aachen' }],
            recurring: { type: 'monthly', pattern: '2nd-sunday' }
        },
        
        // 3rd of the month meetups
        {
            id: 'meetup-koeln-3rd-wednesday',
            title: 'Einundzwanzig Köln',
            start: new Date(2025, 0, 15, 19, 0, 0), // January 15, 2025 (3rd Wednesday), 7 PM
            end: new Date(2025, 0, 15, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Köln.',
            location: 'Köln',
            organizer: 'Einundzwanzig Köln',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_koeln' }],
            recurring: { type: 'monthly', pattern: '3rd-wednesday' }
        },
        {
            id: 'meetup-vreden-3rd-thursday',
            title: 'Einundzwanzig Vreden',
            start: new Date(2025, 0, 16, 19, 0, 0), // January 16, 2025 (3rd Thursday), 7 PM
            end: new Date(2025, 0, 16, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Vreden.',
            location: 'Vreden',
            organizer: 'Einundzwanzig Vreden',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_vreden' }],
            recurring: { type: 'monthly', pattern: '3rd-thursday' }
        },
        {
            id: 'meetup-siegen-3rd-thursday',
            title: 'Einundzwanzig Siegen',
            start: new Date(2025, 0, 16, 19, 0, 0), // January 16, 2025 (3rd Thursday), 7 PM
            end: new Date(2025, 0, 16, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Siegen.',
            location: 'Siegen',
            organizer: 'Einundzwanzig Siegen',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_siegen' }],
            recurring: { type: 'monthly', pattern: '3rd-thursday' }
        },
        {
            id: 'meetup-ostwestfalen-lippe-3rd-friday',
            title: 'Einundzwanzig Ostwestfalen-Lippe',
            start: new Date(2025, 0, 17, 19, 0, 0), // January 17, 2025 (3rd Friday), 7 PM
            end: new Date(2025, 0, 17, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Ostwestfalen-Lippe.',
            location: 'Ostwestfalen-Lippe',
            organizer: 'Einundzwanzig Ostwestfalen-Lippe',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_ostwestfalen_lippe' }],
            recurring: { type: 'monthly', pattern: '3rd-friday' }
        },
        {
            id: 'meetup-bochum-3rd-sunday',
            title: 'Einundzwanzig Bochum',
            start: new Date(2025, 0, 19, 19, 0, 0), // January 19, 2025 (3rd Sunday), 7 PM
            end: new Date(2025, 0, 19, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Bochum.',
            location: 'Bochum',
            organizer: 'Einundzwanzig Bochum',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_bochum' }],
            recurring: { type: 'monthly', pattern: '3rd-sunday' }
        },
        
        // 4th of the month meetups
        {
            id: 'meetup-heinsberg-4th-monday',
            title: 'Einundzwanzig Heinsberg',
            start: new Date(2025, 0, 27, 19, 0, 0), // January 27, 2025 (4th Monday), 7 PM
            end: new Date(2025, 0, 27, 22, 0, 0),
            type: 'meetup-event',
            description: 'Monatliches Bitcoin Meetup in Heinsberg.',
            location: 'Heinsberg',
            organizer: 'Einundzwanzig Heinsberg',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_heinsberg' }],
            recurring: { type: 'monthly', pattern: '4th-monday' }
        },
        {
            id: 'meetup-duesseldorf-4th-wednesday-alt',
            title: 'Einundzwanzig Düsseldorf (4th Wednesday)',
            start: new Date(2025, 0, 22, 19, 0, 0), // January 22, 2025 (4th Wednesday), 7 PM
            end: new Date(2025, 0, 22, 22, 0, 0),
            type: 'meetup-event',
            description: 'Zusätzliches monatliches Bitcoin Meetup in Düsseldorf (4th Wednesday).',
            location: 'Düsseldorf',
            organizer: 'Einundzwanzig Düsseldorf',
            links: [{ name: 'Telegram', url: 'https://t.me/einundzwanzig_duesseldorf' }],
            recurring: { type: 'monthly', pattern: '4th-wednesday' }
        },
        
        {
            id: 'conference-bitcoin-conf',
            title: 'Bitcoin Conference',
            start: new Date(2025, 4, 15, 9, 0, 0), // May 15, 2025, 9 AM
            end: new Date(2025, 4, 17, 18, 0, 0),  // May 17, 2025, 6 PM
            type: 'conference-event',
            description: 'Jährliche Bitcoin Konferenz mit internationalen Speakern und Workshops.',
            location: 'Las Vegas, NV',
            organizer: 'Bitcoin Conference',
            links: [{ name: 'Website', url: 'https://b.tc/conference' }],
            recurring: {
                type: 'yearly',
                pattern: 'same-date'
            }
        },
        // Bitcoin Conferences 2025
        {
            id: 'jan-17-18-bitcoin-medellin',
            title: 'Bitcoin Medellin',
            start: new Date(2025, 0, 17),
            end: new Date(2025, 0, 18),
            type: 'conference-event',
            description: 'Bitcoin Conference in Medellin, Colombia',
            location: 'Medellin, COL',
            links: [{ name: 'Website', url: 'https://bitcoinmedellin.com' }],
        },
        {
            id: 'jan-18-bitcoin-day-naples',
            title: 'Bitcoin Day Naples',
            start: new Date(2025, 0, 18),
            end: new Date(2025, 0, 18),
            type: 'conference-event',
            description: 'Bitcoin Day Conference in Naples, Florida',
            location: 'Naples, FL',
            links: [{ name: 'Website', url: 'https://bitcoinday.io' }],
        },
        {
            id: 'jan-24-25-adopting-bitcoin-cape-town',
            title: 'Adopting Bitcoin Cape Town',
            start: new Date(2025, 0, 24),
            end: new Date(2025, 0, 25),
            type: 'conference-event',
            description: 'Adopting Bitcoin Conference in Cape Town, South Africa',
            location: 'Cape Town, ZAF',
            links: [{ name: 'Website', url: 'https://za25.adoptingbitcoin.org/' }],
        },
        {
            id: 'jan-30-31-nashville-energy-mining',
            title: 'Nashville Energy & Mining Summit',
            start: new Date(2025, 0, 30),
            end: new Date(2025, 0, 31),
            type: 'conference-event',
            description: 'Energy & Mining Summit in Nashville, Tennessee',
            location: 'Nashville, TN',
            links: [{ name: 'Website', url: 'https://www.meetup.com/bitcoinpark/events/304092624/' }],
        },
        {
            id: 'feb-13-15-bitcoin-freedom-festival',
            title: 'Bitcoin Freedom Festival',
            start: new Date(2025, 1, 13),
            end: new Date(2025, 1, 15),
            type: 'conference-event',
            description: 'Bitcoin Freedom Festival in Uvita, Costa Rica',
            location: 'Uvita, CRI',
            links: [{ name: 'Website', url: 'https://www.bitcoinfreedomfestival.com/' }],
        },
        {
            id: 'feb-19-22-bitcoin-plus-plus-floripa',
            title: 'bitcoin++ catches some waves',
            start: new Date(2025, 1, 19),
            end: new Date(2025, 1, 22),
            type: 'conference-event',
            description: 'bitcoin++ Conference in Florianópolis, Brazil',
            location: 'Florianópolis, BRA',
            links: [{ name: 'Website', url: 'https://btcplusplus.dev/conf/floripa' }],
        },
        {
            id: 'feb-25-28-bitcoin-investor-week',
            title: 'Bitcoin Investor Week',
            start: new Date(2025, 1, 25),
            end: new Date(2025, 1, 28),
            type: 'conference-event',
            description: 'Bitcoin Investor Week in New York City',
            location: 'NYC, NY',
            links: [{ name: 'Website', url: 'https://lu.ma/bitcoininvestorweek' }],
        },
        {
            id: 'feb-27-28-bitcoin-renaissance',
            title: 'Bitcoin Renaissance',
            start: new Date(2025, 1, 27),
            end: new Date(2025, 1, 28),
            type: 'conference-event',
            description: 'Bitcoin Renaissance Conference in Denver, Colorado',
            location: 'Denver, CO',
            links: [{ name: 'Website', url: 'https://bitcoin-renaissance.com/' }],
        },
        {
            id: 'mar-5-9-bitcoin-ski-summit',
            title: 'Bitcoin Ski Summit',
            start: new Date(2025, 2, 5),
            end: new Date(2025, 2, 9),
            type: 'conference-event',
            description: 'Bitcoin Ski Summit in Teton Village, Wyoming',
            location: 'Teton Village, WY',
            links: [{ name: 'Website', url: 'https://www.apres.tech/bitcoin-ski-summit-2024' }],
        },
        {
            id: 'mar-8-bitcoin-alive',
            title: 'Bitcoin Alive',
            start: new Date(2025, 2, 8),
            end: new Date(2025, 2, 8),
            type: 'conference-event',
            description: 'Bitcoin Alive Conference in Sydney, Australia',
            location: 'Sydney, AUS',
            links: [{ name: 'Website', url: 'https://bitcoinalive.io/' }],
        },
        {
            id: 'mar-9-16-btc-vortex',
            title: 'BTC Vortex',
            start: new Date(2025, 2, 9),
            end: new Date(2025, 2, 16),
            type: 'conference-event',
            description: 'BTC Vortex Conference in Miami, USA',
            location: 'Miami, US',
            links: [{ name: 'Website', url: 'btcvortex.com' }],
        },
        {
            id: 'mar-14-bitcoin-takeover',
            title: 'Bitcoin Takeover',
            start: new Date(2025, 2, 14),
            end: new Date(2025, 2, 14),
            type: 'conference-event',
            description: 'Bitcoin Takeover Conference in Austin, USA',
            location: 'Austin, US',
            links: [{ name: 'Website', url: 'https://bitcointakeover.org/' }],
        },
        {
            id: 'mar-28-30-bush-bash',
            title: 'Bush Bash',
            start: new Date(2025, 2, 28),
            end: new Date(2025, 2, 30),
            type: 'conference-event',
            description: 'Bitcoin Bush Bash in Beechworth, Australia',
            location: 'Beechworth, AUS',
            links: [{ name: 'Website', url: 'https://bitcoinbushbash.info/' }],
        },
        {
            id: 'mar-29-opt-out-conf',
            title: 'Opt Out Conf',
            start: new Date(2025, 2, 29),
            end: new Date(2025, 2, 29),
            type: 'conference-event',
            description: 'Opt Out Conference in Buenos Aires, Argentina',
            location: 'Buenos Aires, AR',
            links: [{ name: 'Website', url: 'https://optoutconf.com/' }],
        },
        {
            id: 'apr-3-6-bitblockboom',
            title: 'BitBlockBoom!',
            start: new Date(2025, 3, 3),
            end: new Date(2025, 3, 6),
            type: 'conference-event',
            description: 'BitBlockBoom Conference in Dallas, Texas',
            location: 'Dallas, TX',
            links: [{ name: 'Website', url: 'https://bitblockboom.com/' }],
        },
        {
            id: 'apr-5-6-mit-bitcoin-expo',
            title: 'MIT Bitcoin Expo',
            start: new Date(2025, 3, 5),
            end: new Date(2025, 3, 6),
            type: 'conference-event',
            description: 'MIT Bitcoin Expo in Cambridge, Massachusetts',
            location: 'Cambridge, MA',
            links: [{ name: 'Website', url: 'https://mitbtcexpo.org/' }],
        },
        {
            id: 'apr-11-12-opnext',
            title: 'OPNEXT',
            start: new Date(2025, 3, 11),
            end: new Date(2025, 3, 12),
            type: 'conference-event',
            description: 'OPNEXT Conference in Tysons, Virginia',
            location: 'Tysons, VA',
            links: [{ name: 'Website', url: 'https://opnext.dev/' }],
        },
        {
            id: 'apr-11-13-cheatcode-conference',
            title: 'CheatCode Conference',
            start: new Date(2025, 3, 11),
            end: new Date(2025, 3, 13),
            type: 'conference-event',
            description: 'CheatCode Conference in Bedford, UK',
            location: 'Bedford, UK',
            links: [{ name: 'Website', url: 'https://www.cheatcode.co.uk/' }],
        },
        {
            id: 'apr-15-bitcoin-strategic-reserve',
            title: 'Bitcoin Strategic Reserve Summit',
            start: new Date(2025, 3, 15),
            end: new Date(2025, 3, 15),
            type: 'conference-event',
            description: 'Bitcoin Strategic Reserve Summit (Online)',
            location: 'Online',
            links: [{ name: 'Website', url: 'https://bitcoinreservesummit.com/' }],
        },
        {
            id: 'apr-24-27-swiss-bitcoin-conference',
            title: 'Swiss Bitcoin Conference',
            start: new Date(2025, 3, 24),
            end: new Date(2025, 3, 27),
            type: 'conference-event',
            description: 'Swiss Bitcoin Conference in Kreuzlingen, Switzerland',
            location: 'Kreuzlingen, CHE',
            links: [{ name: 'Website', url: 'https://swiss-bitcoin-conference.com/' }],
        },
        {
            id: 'apr-28-29-bitcoin-oasis',
            title: 'Bitcoin Oasis',
            start: new Date(2025, 3, 28),
            end: new Date(2025, 3, 29),
            type: 'conference-event',
            description: 'Bitcoin Oasis Conference in Dubai, UAE',
            location: 'Dubai, UAE',
            links: [{ name: 'Website', url: 'www.bitcoin-oasis.com' }],
        },
        {
            id: 'may-6-7-bitcoin-for-corporations',
            title: 'Bitcoin for Corporations',
            start: new Date(2025, 4, 6),
            end: new Date(2025, 4, 7),
            type: 'conference-event',
            description: 'Bitcoin for Corporations [MicroStrategy World] in Las Vegas',
            location: 'Las Vegas, NV',
            links: [{ name: 'Website', url: 'Bitcoin for Corporations | May 6-7 | Strategy World 2025' }],
        },
        {
            id: 'may-7-8-tuscany-lightning-summit',
            title: 'Tuscany Lightning Summit',
            start: new Date(2025, 4, 7),
            end: new Date(2025, 4, 8),
            type: 'conference-event',
            description: 'Tuscany Lightning Summit in Viareggio, Italy',
            location: 'Viareggio, IT',
            links: [{ name: 'Website', url: 'https://tuscanysummit.com/' }],
        },
        {
            id: 'may-7-9-bitcoin-plus-plus-atx',
            title: 'bitcoin++ dives deep',
            start: new Date(2025, 4, 7),
            end: new Date(2025, 4, 9),
            type: 'conference-event',
            description: 'bitcoin++ Conference in Austin, USA',
            location: 'Austin, US',
            links: [{ name: 'Website', url: 'https://btcplusplus.dev/conf/atx25' }],
        },
        {
            id: 'may-10-bitcare-forum',
            title: 'BitCare Forum',
            start: new Date(2025, 4, 10),
            end: new Date(2025, 4, 10),
            type: 'conference-event',
            description: 'BitCare Forum in Brescia, Italy',
            location: 'Brescia, Italy',
            links: [{ name: 'Website', url: 'https://bitcareforum.it/' }],
        },
        {
            id: 'may-22-pizza-day-prague',
            title: 'Pizza Day Prague',
            start: new Date(2025, 4, 22),
            end: new Date(2025, 4, 22),
            type: 'conference-event',
            description: 'Pizza Day Conference in Prague, Czech Republic',
            location: 'Prague, Czech Republic',
            links: [{ name: 'Website', url: 'https://pizzaday.cz/' }],
        },
        {
            id: 'may-23-25-bitcoin-filmfest',
            title: 'Bitcoin Filmfest 2025',
            start: new Date(2025, 4, 23),
            end: new Date(2025, 4, 25),
            type: 'conference-event',
            description: 'Bitcoin Filmfest 2025 in Warsaw, Poland',
            location: 'Warsaw, POL',
            links: [{ name: 'Website', url: 'https://bitcoinfilmfest.com/' }],
        },
        {
            id: 'may-24-bitcoin-ireland',
            title: 'Bitcoin Ireland Conference',
            start: new Date(2025, 4, 24),
            end: new Date(2025, 4, 24),
            type: 'conference-event',
            description: 'Bitcoin Ireland Conference in Dublin, Ireland',
            location: 'Dublin, IRE',
            links: [{ name: 'Website', url: 'https://www.bitcoinireland.eu/' }],
        },
        {
            id: 'may-26-28-oslo-freedom-forum',
            title: 'Oslo Freedom Forum',
            start: new Date(2025, 4, 26),
            end: new Date(2025, 4, 28),
            type: 'conference-event',
            description: 'Oslo Freedom Forum in Oslo, Norway',
            location: 'Oslo, NOR',
            links: [{ name: 'Website', url: 'https://oslofreedomforum.com/' }],
        },
        {
            id: 'may-27-29-bitcoin-2025',
            title: 'Bitcoin 2025 Conference',
            start: new Date(2025, 4, 27),
            end: new Date(2025, 4, 29),
            type: 'conference-event',
            description: 'Bitcoin 2025 Conference (BTC Inc.) in Las Vegas',
            location: 'Las Vegas, NV',
            links: [{ name: 'Website', url: 'https://b.tc/conference/2025' }],
        },
        {
            id: 'may-30-jun-1-bitcoin-economic-forum',
            title: 'Bitcoin Economic Forum',
            start: new Date(2025, 4, 30),
            end: new Date(2025, 5, 1),
            type: 'conference-event',
            description: 'Bitcoin Economic Forum in Bretagne, France',
            location: 'Bretagne, BZH',
            links: [{ name: 'Website', url: 'https://www.breizhbitcoin.com/bitcoin-economic-forum/' }],
        },
        {
            id: 'jun-4-6-bitcoin-seoul',
            title: 'Bitcoin Seoul Conference',
            start: new Date(2025, 5, 4),
            end: new Date(2025, 5, 6),
            type: 'conference-event',
            description: 'Bitcoin Seoul Conference in Seoul, Korea',
            location: 'Seoul, Korea',
            links: [{ name: 'Website', url: 'http://bitcoinseoul.kr' }],
        },
        {
            id: 'jun-14-bitcoin-day-tampa',
            title: 'Bitcoin Day Tampa',
            start: new Date(2025, 5, 14),
            end: new Date(2025, 5, 14),
            type: 'conference-event',
            description: 'Bitcoin Day Conference in Tampa, Florida',
            location: 'Tampa, FL',
            links: [{ name: 'Website', url: 'https://bitcoinday.io' }],
        },
        {
            id: 'jun-14-sound-money-soiree',
            title: 'Sound Money Soiree',
            start: new Date(2025, 5, 14),
            end: new Date(2025, 5, 14),
            type: 'conference-event',
            description: 'Sound Money Soiree in Tampa, Florida',
            location: 'Tampa, FL',
            links: [{ name: 'Website', url: 'https://www.bitcoinbay.live/sound-money-soiree' }],
        },
        {
            id: 'jun-19-21-btc-prague',
            title: 'BTC Prague',
            start: new Date(2025, 5, 19),
            end: new Date(2025, 5, 21),
            type: 'conference-event',
            description: 'BTC Prague Conference in Prague, Czech Republic',
            location: 'Prague, CZE',
            links: [{ name: 'Website', url: 'https://btcprague.com/' }],
        },
        {
            id: 'jun-20-bitcoin-corporate-day',
            title: 'Bitcoin Corporate Day',
            start: new Date(2025, 5, 20),
            end: new Date(2025, 5, 20),
            type: 'conference-event',
            description: 'Bitcoin Corporate Day in Prague, Czech Republic',
            location: 'Prague, CZE',
            links: [{ name: 'Website', url: 'https://www.bitcoincorporateday.com/' }],
        },
        {
            id: 'jun-25-bitcoin-policy-summit',
            title: 'Bitcoin Policy Institute Summit',
            start: new Date(2025, 5, 25),
            end: new Date(2025, 5, 25),
            type: 'conference-event',
            description: 'Bitcoin Policy Institute Summit in Washington DC',
            location: 'Washington DC',
            links: [{ name: 'Website', url: 'https://www.btcpolicysummit.org/' }],
        },
        {
            id: 'jun-28-29-bitcoin-rodeo',
            title: 'The Bitcoin Rodeo',
            start: new Date(2025, 5, 28),
            end: new Date(2025, 5, 29),
            type: 'conference-event',
            description: 'The Bitcoin Rodeo in Calgary, Alberta',
            location: 'Calgary, AB',
            links: [{ name: 'Website', url: 'BitcoinRodeo.com' }],
        },
        {
            id: 'jul-10-13-mallorca-blockchain',
            title: 'Mallorca Blockchain Days V',
            start: new Date(2025, 6, 10),
            end: new Date(2025, 6, 13),
            type: 'conference-event',
            description: 'Mallorca Blockchain Days V in Palma, Spain',
            location: 'Palma, ESP',
            links: [{ name: 'Website', url: 'https://mallorcablockchaindays.com/' }],
        },
        {
            id: 'jul-24-27-bitcoin-zitadelle',
            title: 'Bitcoin Zitadelle',
            start: new Date(2025, 6, 24),
            end: new Date(2025, 6, 27),
            type: 'conference-event',
            description: 'Bitcoin Zitadelle Conference in Hannover, Germany',
            location: 'Hannover, DEU',
            links: [{ name: 'Website', url: 'https://x.com/BTCZitadelle' }],
        },
        {
            id: 'aug-1-bitcoin-is-for-everyone',
            title: 'Bitcoin is for Everyone',
            start: new Date(2025, 7, 1),
            end: new Date(2025, 7, 1),
            type: 'conference-event',
            description: 'Bitcoin is for Everyone Conference in Portland, Oregon',
            location: 'Portland, OR',
            links: [{ name: 'Website', url: 'http://www.bitcoinisforeveryone.com' }],
        },
        {
            id: 'aug-2-lake-satoshi-campout',
            title: 'Lake Satoshi Campout',
            start: new Date(2025, 7, 2),
            end: new Date(2025, 7, 2),
            type: 'conference-event',
            description: 'Lake Satoshi Campout in Lansing, Michigan',
            location: 'Lansing, MI',
            links: [{ name: 'Website', url: 'https://x.com/LakeSatoshi' }],
        },
        {
            id: 'aug-7-8-bitcoin-plus-plus-riga',
            title: 'bitcoin++ goes private',
            start: new Date(2025, 7, 7),
            end: new Date(2025, 7, 8),
            type: 'conference-event',
            description: 'bitcoin++ Conference in Riga, Latvia',
            location: 'Riga, LVA',
            links: [{ name: 'Website', url: 'https://btcplusplus.dev/conf/riga' }],
        },
        {
            id: 'aug-8-9-budapest-bitcoin',
            title: 'Budapest Bitcoin',
            start: new Date(2025, 7, 8),
            end: new Date(2025, 7, 9),
            type: 'conference-event',
            description: 'Budapest Bitcoin Conference in Budapest, Hungary',
            location: 'Budapest, HUN',
            links: [{ name: 'Website', url: 'https://budapestbitcoin.com/' }],
        },
        {
            id: 'aug-9-10-baltic-honeybadger',
            title: 'Baltic Honeybadger',
            start: new Date(2025, 7, 9),
            end: new Date(2025, 7, 10),
            type: 'conference-event',
            description: 'Baltic Honeybadger Conference in Riga, Latvia',
            location: 'Riga, LVA',
            links: [{ name: 'Website', url: 'https://baltichoneybadger.com/' }],
        },
        {
            id: 'aug-12-bitcoin-treasuries-digital',
            title: 'Bitcoin Treasuries Digital Conference',
            start: new Date(2025, 7, 12),
            end: new Date(2025, 7, 12),
            type: 'conference-event',
            description: 'Bitcoin Treasuries Digital Conference (Online)',
            location: 'Online',
            links: [{ name: 'Website', url: 'https://lu.ma/qt9p5v1g' }],
        },
        {
            id: 'aug-15-16-btchel',
            title: '₿TCHEL',
            start: new Date(2025, 7, 15),
            end: new Date(2025, 7, 16),
            type: 'conference-event',
            description: '₿TCHEL Conference in Helsinki, Finland',
            location: 'Helsinki, FIN',
            links: [{ name: 'Website', url: 'https://btchel.com/' }],
        },
        {
            id: 'aug-16-17-learning-bitcoin',
            title: 'Learning Bitcoin',
            start: new Date(2025, 7, 16),
            end: new Date(2025, 7, 17),
            type: 'conference-event',
            description: 'Learning Bitcoin Conference in Vancouver, Canada',
            location: 'Vancouver, CAN',
            links: [{ name: 'Website', url: 'https://www.learningbitcoin.ca/' }],
        },
        {
            id: 'aug-28-29-bitcoin-asia',
            title: 'Bitcoin Asia',
            start: new Date(2025, 7, 28),
            end: new Date(2025, 7, 29),
            type: 'conference-event',
            description: 'Bitcoin Asia Conference in Hong Kong, China',
            location: 'Hong Kong, CHN',
            links: [{ name: 'Website', url: 'https://b.tc/conference/asia' }],
        },
        {
            id: 'sep-3-5-bitcoin-plus-plus-istanbul',
            title: 'bitcoin++ scales',
            start: new Date(2025, 8, 3),
            end: new Date(2025, 8, 5),
            type: 'conference-event',
            description: 'bitcoin++ Conference in Istanbul, Turkey',
            location: 'Istanbul, TUR',
            links: [{ name: 'Website', url: 'https://btcplusplus.dev/conf/istanbul' }],
        },
        {
            id: 'sep-5-bitcoin-indonesia',
            title: 'Bitcoin Indonesia Conference',
            start: new Date(2025, 8, 5),
            end: new Date(2025, 8, 5),
            type: 'conference-event',
            description: 'Bitcoin Indonesia Conference + Bitcoin Bali Week',
            location: 'Bali, IDN',
            links: [{ name: 'Website', url: 'http://bitcoinweekbali.xyz' }],
        },
        {
            id: 'sep-15-16-accelerating-bitcoin',
            title: 'Accelerating Bitcoin',
            start: new Date(2025, 8, 15),
            end: new Date(2025, 8, 16),
            type: 'conference-event',
            description: 'Accelerating Bitcoin Conference in Asuncion, Paraguay',
            location: 'Asuncion, PRY',
            links: [{ name: 'Website', url: 'https://acelerandobitcoin.com/' }],
        },
        {
            id: 'sep-17-bitcoin-treasuries-nyc',
            title: 'Bitcoin Treasuries NYC Unconference',
            start: new Date(2025, 8, 17),
            end: new Date(2025, 8, 17),
            type: 'conference-event',
            description: 'Bitcoin Treasuries NYC Unconference in New York City',
            location: 'NYC, NY',
            links: [{ name: 'Website', url: 'https://lu.ma/z176rgsb?tk=MPliHW' }],
        },
        {
            id: 'sep-30-oct-1-btcindc',
            title: 'BTCinDC',
            start: new Date(2025, 8, 30),
            end: new Date(2025, 9, 1),
            type: 'conference-event',
            description: 'BTCinDC Conference in Washington, DC',
            location: 'Washington, DC',
            links: [{ name: 'Website', url: 'https://btcindc.com' }],
        },
        {
            id: 'oct-2-4-lightning-plus-plus',
            title: 'lightning++ strikes',
            start: new Date(2025, 9, 2),
            end: new Date(2025, 9, 4),
            type: 'conference-event',
            description: 'lightning++ Conference in Berlin, Germany',
            location: 'Berlin, DEU',
            links: [{ name: 'Website', url: 'https://btcplusplus.dev/conf/berlin25' }],
        },
        {
            id: 'oct-3-5-watch-out-bitcoin',
            title: 'Watch out, Bitcoin!',
            start: new Date(2025, 9, 3),
            end: new Date(2025, 9, 5),
            type: 'conference-event',
            description: 'Watch out, Bitcoin! Conference in Madrid, Spain',
            location: 'Madrid, ESP',
            links: [{ name: 'Website', url: 'https://wobitcoin.org/' }],
        },
        {
            id: 'oct-7-9-global-bitcoin-summit',
            title: 'Global Bitcoin Summit',
            start: new Date(2025, 9, 7),
            end: new Date(2025, 9, 9),
            type: 'conference-event',
            description: 'Global Bitcoin Summit in Nashville, Tennessee',
            location: 'Nashville, TN',
        },
        {
            id: 'oct-10-13-massadoption',
            title: 'MassAdoption',
            start: new Date(2025, 9, 10),
            end: new Date(2025, 9, 13),
            type: 'conference-event',
            description: 'MassAdoption Conference in New Hampshire',
            location: 'New Hampshire',
            links: [{ name: 'Website', url: 'https://www.campnakamoto.com/' }],
        },
        {
            id: 'oct-13-16-tabconf',
            title: 'TABConf',
            start: new Date(2025, 9, 13),
            end: new Date(2025, 9, 16),
            type: 'conference-event',
            description: 'TABConf Conference in Atlanta, Georgia',
            location: 'Atlanta, GA',
            links: [{ name: 'Website', url: 'https://tabconf.com/' }],
        },
        {
            id: 'oct-16-17-bitcoin-alpha',
            title: 'Bitcoin Alpha',
            start: new Date(2025, 9, 16),
            end: new Date(2025, 9, 17),
            type: 'conference-event',
            description: 'Bitcoin Alpha Conference in Santa Monica, California',
            location: 'Santa Monica, CA',
            links: [{ name: 'Website', url: 'https://bitcoinalpha.org/' }],
        },
        {
            id: 'oct-16-18-canadian-bitcoin',
            title: 'Canadian Bitcoin Conference',
            start: new Date(2025, 9, 16),
            end: new Date(2025, 9, 18),
            type: 'conference-event',
            description: 'Canadian Bitcoin Conference in Montreal, Canada',
            location: 'Montreal, CAN',
            links: [{ name: 'Website', url: 'https://canadianbitcoinconf.com/' }],
        },
        {
            id: 'oct-17-18-bitcoin-financial-services',
            title: 'Bitcoin for Financial Services Summit',
            start: new Date(2025, 9, 17),
            end: new Date(2025, 9, 18),
            type: 'conference-event',
            description: 'Bitcoin for Financial Services Summit in Denver, Colorado',
            location: 'Denver, CO',
            links: [{ name: 'Website', url: 'https://denver.space/bitcoin_financial_summit' }],
        },
        {
            id: 'oct-21-bitcoin-treasuries-digital-oct',
            title: 'Bitcoin Treasuries Digital Conference',
            start: new Date(2025, 9, 21),
            end: new Date(2025, 9, 21),
            type: 'conference-event',
            description: 'Bitcoin Treasuries Digital Conference (Online)',
            location: 'Online',
        },
        {
            id: 'oct-24-25-plan-b-forum',
            title: 'Plan B Forum',
            start: new Date(2025, 9, 24),
            end: new Date(2025, 9, 25),
            type: 'conference-event',
            description: 'Plan B Forum in Lugano, Switzerland',
            location: 'Lugano, CHE',
            links: [{ name: 'Website', url: 'https://planb.lugano.ch/planb-forum/' }],
        },
        {
            id: 'nov-5-bitcoin-dev-summit',
            title: 'Bitcoin Dev Summit',
            start: new Date(2025, 10, 5),
            end: new Date(2025, 10, 5),
            type: 'conference-event',
            description: 'Bitcoin Dev Summit by Vinteum in São Paulo, Brazil',
            location: 'São Paulo, BRA',
            links: [{ name: 'Website', url: 'https://satsconf.com.br/devsummit' }],
        },
        {
            id: 'nov-7-8-satsconf',
            title: 'Satsconf',
            start: new Date(2025, 10, 7),
            end: new Date(2025, 10, 8),
            type: 'conference-event',
            description: 'Satsconf Conference in São Paulo, Brazil',
            location: 'São Paulo, BRA',
            links: [{ name: 'Website', url: 'http://satsconf.com.br/' }],
        },
        {
            id: 'nov-13-14-bitcoin-amsterdam',
            title: 'Bitcoin Amsterdam',
            start: new Date(2025, 10, 13),
            end: new Date(2025, 10, 14),
            type: 'conference-event',
            description: 'Bitcoin Amsterdam Conference in Amsterdam, Netherlands',
            location: 'Amsterdam, NED',
            links: [{ name: 'Website', url: 'https://www.bitcoin.amsterdam/' }],
        },
        {
            id: 'nov-14-15-adopting-bitcoin-el-salvador',
            title: 'Adopting Bitcoin El Salvador',
            start: new Date(2025, 10, 14),
            end: new Date(2025, 10, 15),
            type: 'conference-event',
            description: 'Adopting Bitcoin Conference in San Salvador, El Salvador',
            location: 'San Salvador, ESP',
            links: [{ name: 'Website', url: 'https://sv25.adoptingbitcoin.org' }],
        },
        {
            id: 'nov-18-25-bitchill-retreat',
            title: 'Bitchill 🏝️ retreat',
            start: new Date(2025, 10, 18),
            end: new Date(2025, 10, 25),
            type: 'conference-event',
            description: 'Bitchill retreat - week-long retreat for 20-50 attendees in Roatan, Honduras',
            location: 'Roatan, HON',
            links: [{ name: 'Website', url: 'https://lu.ma/swx92134' }],
        },
        {
            id: 'nov-23-buidl-tokyo',
            title: 'BUIDL@Tokyo Bitcoin Base',
            start: new Date(2025, 10, 23),
            end: new Date(2025, 10, 23),
            type: 'conference-event',
            description: 'BUIDL@Tokyo Bitcoin Base (Dev Day) in Tokyo, Japan',
            location: 'Tokyo, JPN',
            links: [{ name: 'Website', url: 'https://btc-jpn.com' }],
        },
        {
            id: 'nov-24-bitcoin-japan',
            title: 'Bitcoin Japan',
            start: new Date(2025, 10, 24),
            end: new Date(2025, 10, 24),
            type: 'conference-event',
            description: 'Bitcoin Japan Conference in Tokyo, Japan',
            location: 'Tokyo, JPN',
            links: [{ name: 'Website', url: 'https://btc-jpn.com' }],
        },
        {
            id: 'dec-3-5-africa-bitcoin',
            title: 'Africa Bitcoin Conference',
            start: new Date(2025, 11, 3),
            end: new Date(2025, 11, 5),
            type: 'conference-event',
            description: 'Africa Bitcoin Conference in Mauritius',
            location: 'MUS',
            links: [{ name: 'Website', url: 'https://www.afrobitcoin.org/' }],
        },
        {
            id: 'dec-5-6-mayan-bitcoin',
            title: 'Mayan Bitcoin Conference',
            start: new Date(2025, 11, 5),
            end: new Date(2025, 11, 6),
            type: 'conference-event',
            description: 'Mayan Bitcoin Conference in Merida, Mexico',
            location: 'Merida, MEX',
            links: [{ name: 'Website', url: 'https://www.mayanbitcoinconference.com' }],
        },
        {
            id: 'dec-8-9-bitcoin-mena',
            title: 'Bitcoin MENA',
            start: new Date(2025, 11, 8),
            end: new Date(2025, 11, 9),
            type: 'conference-event',
            description: 'Bitcoin MENA Conference in Abu Dhabi, UAE',
            location: 'Abu Dhabi, UAE',
            links: [{ name: 'Website', url: 'https://b.tc/conference/mena' }],
        },
        {
            id: 'dec-15-17-bitcoin-plus-plus-taipei',
            title: 'bitcoin++ stands sovereign',
            start: new Date(2025, 11, 15),
            end: new Date(2025, 11, 17),
            type: 'conference-event',
            description: 'bitcoin++ Conference in Taipei, Taiwan',
            location: 'Taipei, TWN',
            links: [{ name: 'Website', url: 'https://btcplusplus.dev/conf/taipei' }],
        },
        // Bitcoin Conferences 2026
        {
            id: 'jan-22-23-bitcoin-treasuries-unconference-nyc-2026',
            title: 'Bitcoin Treasuries Unconference NYC',
            start: new Date(2026, 0, 22),
            end: new Date(2026, 0, 23),
            type: 'conference-event',
            description: 'Bitcoin Treasuries Unconference in New York City (500 attendees)',
            location: 'New York City, NY',
            links: [{ name: 'Website', url: 'https://bitcointreasuries.media' }],
        },
        {
            id: 'jan-30-31-adopting-bitcoin-cape-town-2026',
            title: 'Adopting Bitcoin',
            start: new Date(2026, 0, 30),
            end: new Date(2026, 0, 31),
            type: 'conference-event',
            description: 'Adopting Bitcoin Conference in Cape Town, South Africa (450 attendees)',
            location: 'Cape Town, ZAF',
            links: [{ name: 'Website', url: 'https://za26.adoptingbitcoin.org/' }],
        },
        {
            id: 'feb-23-25-strategy-bitcoin-for-corporations-2026',
            title: 'Strategy Bitcoin for Corporations',
            start: new Date(2026, 1, 23),
            end: new Date(2026, 1, 25),
            type: 'conference-event',
            description: 'Strategy Bitcoin for Corporations Conference in Las Vegas (350 attendees)',
            location: 'Las Vegas, NV',
            links: [{ name: 'Website', url: 'https://www.strategysoftware.com/world25/bitcoin-for-corporations' }],
        },
        {
            id: 'apr-27-29-bitcoin-2026',
            title: 'Bitcoin 2026',
            start: new Date(2026, 3, 27),
            end: new Date(2026, 3, 29),
            type: 'conference-event',
            description: 'Bitcoin 2026 Conference in Las Vegas (30,000 attendees)',
            location: 'Las Vegas, NV',
            links: [{ name: 'Website', url: 'https://b.tc/conference/2026' }],
        },
        {
            id: 'jun-4-7-bitcoin-film-festival-2026',
            title: 'Bitcoin Film Festival',
            start: new Date(2026, 5, 4),
            end: new Date(2026, 5, 7),
            type: 'conference-event',
            description: 'Bitcoin Film Festival in Warsaw, Poland (210 attendees)',
            location: 'Warsaw, POL',
            links: [{ name: 'Website', url: 'https://bitcoinfilmfest.com' }],
        },
        {
            id: 'jun-11-13-btc-prague-2026',
            title: 'BTC Prague 2026',
            start: new Date(2026, 5, 11),
            end: new Date(2026, 5, 13),
            type: 'conference-event',
            description: 'BTC Prague 2026 Conference in Prague, Czechia (9,000 attendees)',
            location: 'Prague, Czechia',
            links: [{ name: 'Website', url: 'https://btcprague.com/' }],
        },
    ];

    const CalendarComponent = () => {
        const [currentDate, setCurrentDate] = React.useState(new Date());
        
        const getDaysInMonth = (date) => {
            const year = date.getFullYear();
            const month = date.getMonth();
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const daysInMonth = lastDay.getDate();
            const startingDayOfWeek = firstDay.getDay();
            
            const days = [];
            
            // Add empty cells for days before the first day of the month
            for (let i = 0; i < startingDayOfWeek; i++) {
                days.push(null);
            }
            
            // Add days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                days.push(day);
            }
            
            return days;
        };
        
        // Helper function to get the nth occurrence of a day of the week in a month
        const getNthDayOfWeek = (year, month, dayOfWeek, nth) => {
            const firstDay = new Date(year, month, 1);
            const firstDayOfWeek = firstDay.getDay();
            const daysToAdd = (dayOfWeek - firstDayOfWeek + 7) % 7;
            const firstOccurrence = new Date(year, month, 1 + daysToAdd);
            
            // Calculate the nth occurrence
            const nthOccurrence = new Date(firstOccurrence);
            nthOccurrence.setDate(firstOccurrence.getDate() + (nth - 1) * 7);
            
            // Check if the nth occurrence is still in the same month
            if (nthOccurrence.getMonth() === month) {
                return nthOccurrence.getDate();
            }
            return null;
        };

        const getDayOfWeekNumber = (dayName) => {
            const days = {
                'sunday': 0, 'monday': 1, 'tuesday': 2, 'wednesday': 3,
                'thursday': 4, 'friday': 5, 'saturday': 6
            };
            return days[dayName.toLowerCase()];
        };

        const getLastOccurrence = (year, month, dayOfWeek) => {
            // Get the last day of the month
            const lastDay = new Date(year, month + 1, 0).getDate();
            
            // Find the last occurrence of the day of week
            for (let day = lastDay; day >= 1; day--) {
                const date = new Date(year, month, day);
                if (date.getDay() === dayOfWeek) {
                    return day;
                }
            }
            return null;
        };

        // Helper function to check if a date matches a recurring pattern
        const matchesRecurringPattern = (event, targetDate) => {
            if (!event.recurring) return false;
            
            const eventStart = new Date(event.start);
            const { type, pattern } = event.recurring;
            
            switch (type) {
                case 'yearly':
                    if (pattern === 'same-date') {
                        return eventStart.getDate() === targetDate.getDate() && 
                               eventStart.getMonth() === targetDate.getMonth();
                    }
                    break;
                    
                case 'monthly':
                    if (pattern === 'same-date') {
                        return eventStart.getDate() === targetDate.getDate();
                    } else {
                        // Parse flexible patterns like "1st-monday", "2nd-friday", "last-saturday", etc.
                        const patternMatch = pattern.match(/^(\d+)(?:st|nd|rd|th)?-(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$|^last-(monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/i);
                        
                        if (patternMatch) {
                            let dayOfWeek, nth;
                            
                            if (patternMatch[1] && patternMatch[2]) {
                                // Pattern like "1st-monday", "2nd-friday"
                                nth = parseInt(patternMatch[1]);
                                dayOfWeek = getDayOfWeekNumber(patternMatch[2]);
                            } else if (patternMatch[3]) {
                                // Pattern like "last-saturday"
                                dayOfWeek = getDayOfWeekNumber(patternMatch[3]);
                                nth = getLastOccurrence(targetDate.getFullYear(), targetDate.getMonth(), dayOfWeek);
                                return nth === targetDate.getDate();
                            }
                            
                            if (dayOfWeek !== undefined && nth !== undefined) {
                                const nthDay = getNthDayOfWeek(targetDate.getFullYear(), targetDate.getMonth(), dayOfWeek, nth);
                                return nthDay === targetDate.getDate();
                            }
                        }
                        
                        // Fallback to old hardcoded patterns for backward compatibility
                        if (pattern === '2nd-friday') {
                            const secondFriday = getNthDayOfWeek(targetDate.getFullYear(), targetDate.getMonth(), 5, 2);
                            return secondFriday === targetDate.getDate();
                        } else if (pattern === '4th-wednesday') {
                            const fourthWednesday = getNthDayOfWeek(targetDate.getFullYear(), targetDate.getMonth(), 3, 4);
                            return fourthWednesday === targetDate.getDate();
                        }
                    }
                    break;
                    
                case 'weekly':
                    if (pattern === 'same-day') {
                        return eventStart.getDay() === targetDate.getDay();
                    }
                    break;
            }
            
            return false;
        };
        
        const getEventsForDate = (day) => {
            if (!day) return [];
            const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            
            return events.filter(event => {
                const eventStart = new Date(event.start);
                
                // Check if event has recurring pattern
                if (event.recurring) {
                    return matchesRecurringPattern(event, targetDate);
                }
                
                // For non-recurring events, check exact date match
                return eventStart.getDate() === day && 
                       eventStart.getMonth() === currentDate.getMonth() && 
                       eventStart.getFullYear() === currentDate.getFullYear();
            });
        };
        
        const navigateMonth = (direction) => {
            const newDate = new Date(currentDate);
            newDate.setMonth(newDate.getMonth() + direction);
            setCurrentDate(newDate);
        };

        // Function to search for Nostr events and create njump.me links
        window.searchNostrEvents = (event) => {
            if (!event) return null;
            
            try {
                const eventTitle = event.title.toLowerCase();
                console.log('Searching Nostr for event:', eventTitle);
                
                // Known Nostr npubs for events
                window.nostrEvents = {
                    'einundzwanzig meetup düsseldorf': 'npub1dus2ljc6fn5dt6psatnsce7uckzgdvl3q3s73u00vedl87vnclwqdllq5k'
                };
                
                // Search for matching Nostr events
                for (const [pattern, npub] of Object.entries(window.nostrEvents)) {
                    console.log('Checking pattern:', pattern, 'against:', eventTitle);
                    if (eventTitle.includes(pattern)) {
                        const link = `https://nostr.com/${npub}`;
                        console.log('Found match! Generated link:', link);
                        return link;
                    }
                }
                
                console.log('No Nostr match found for:', eventTitle);
                return null;
                
            } catch (error) {
                console.log('Error searching Nostr events:', error);
                return null;
            }
        };


        // Function to get logo URL for events
        window.getEventLogo = (event) => {
            if (!event) return null;
            
            // Conference logos - only verified working favicons
            const conferenceLogos = {
                // Only include favicons that actually exist and work
                'BitFest 2025': 'https://bitfest.uk/favicon.ico',
                'Bitcoin 2025 Conference': 'https://b.tc/favicon.ico',
                'Bitcoin 2026': 'https://b.tc/favicon.ico',
                'BTC Prague': 'https://btcprague.com/favicon.ico',
                'BTC Prague 2026': 'https://btcprague.com/favicon.ico',
                'Bitcoin Amsterdam': 'https://www.bitcoin.amsterdam/favicon.ico',
                'Adopting Bitcoin': 'https://adoptingbitcoin.org/favicon.ico',
                'Adopting Bitcoin Cape Town': 'https://adoptingbitcoin.org/favicon.ico',
                'Adopting Bitcoin El Salvador': 'https://adoptingbitcoin.org/favicon.ico',
                'Bitcoin Conference': 'https://b.tc/favicon.ico',
                'Bitcoin MENA': 'https://b.tc/favicon.ico',
                'Bitcoin Asia': 'https://b.tc/favicon.ico',
                
                // These are the only ones that definitely work
                // Removed all the broken/unverified favicon URLs
            };
            
            // Meetup logos - use Einundzwanzig logo for all their meetups
            const meetupLogos = {
                // All Einundzwanzig meetups use the main logo
                'Einundzwanzig Meetup Düsseldorf': 'logo.png',
                'Einundzwanzig Dortmund': 'logo.png',
                'Einundzwanzig Gummersbach': 'logo.png',
                'Einundzwanzig Bonn': 'logo.png',
                'Einundzwanzig Moers': 'logo.png',
                'Einundzwanzig Hennef': 'logo.png',
                'Einundzwanzig Essen': 'logo.png',
                'Einundzwanzig Niederrhein': 'logo.png',
                'Einundzwanzig Aachen': 'logo.png',
                'Einundzwanzig Köln': 'logo.png',
                'Einundzwanzig Vreden': 'logo.png',
                'Einundzwanzig Siegen': 'logo.png',
                'Einundzwanzig Ostwestfalen-Lippe': 'logo.png',
                'Einundzwanzig Bochum': 'logo.png',
                'Einundzwanzig Heinsberg': 'logo.png'
            };
            
            // Check for conference logo first
            if (event.type === 'conference-event' && conferenceLogos[event.title]) {
                return conferenceLogos[event.title];
            }
            
            // Check for meetup logo
            if (event.type === 'meetup-event' && meetupLogos[event.title]) {
                return meetupLogos[event.title];
            }
            
            // For conferences without specific logos, return null
            return null;
        };

        // Function to generate btcmap.org link for location
        window.generateLocationLink = (location) => {
            if (!location) return null;
            
            // Clean location string
            const cleanLocation = location.trim();
            
            // Known locations with coordinates for better mapping
            const knownLocations = {
                'Düsseldorf': { lat: 51.2277, lng: 6.7735 },
                'CoWo Düsseldorf': { lat: 51.2277, lng: 6.7735 },
                'Bitcoin Space Düsseldorf': { lat: 51.2277, lng: 6.7735 },
                'Berlin': { lat: 52.5200, lng: 13.4050 },
                'München': { lat: 48.1351, lng: 11.5820 },
                'Hamburg': { lat: 53.5511, lng: 9.9937 },
                'Frankfurt': { lat: 50.1109, lng: 8.6821 },
                'Köln': { lat: 50.9375, lng: 6.9603 },
                'Las Vegas': { lat: 36.1699, lng: -115.1398 },
                'Las Vegas, NV': { lat: 36.1699, lng: -115.1398 },
                'New York': { lat: 40.7128, lng: -74.0060 },
                'New York City': { lat: 40.7128, lng: -74.0060 },
                'NYC': { lat: 40.7128, lng: -74.0060 },
                'NYC, NY': { lat: 40.7128, lng: -74.0060 },
                'Prague': { lat: 50.0755, lng: 14.4378 },
                'Prague, CZE': { lat: 50.0755, lng: 14.4378 },
                'Warsaw': { lat: 52.2297, lng: 21.0122 },
                'Warsaw, POL': { lat: 52.2297, lng: 21.0122 },
                'Amsterdam': { lat: 52.3676, lng: 4.9041 },
                'Amsterdam, NED': { lat: 52.3676, lng: 4.9041 },
                'Austin': { lat: 30.2672, lng: -97.7431 },
                'Austin, US': { lat: 30.2672, lng: -97.7431 },
                'Miami': { lat: 25.7617, lng: -80.1918 },
                'Miami, US': { lat: 25.7617, lng: -80.1918 },
                'Denver': { lat: 39.7392, lng: -104.9903 },
                'Denver, CO': { lat: 39.7392, lng: -104.9903 },
                'Dallas': { lat: 32.7767, lng: -96.7970 },
                'Dallas, TX': { lat: 32.7767, lng: -96.7970 },
                'Nashville': { lat: 36.1627, lng: -86.7816 },
                'Nashville, TN': { lat: 36.1627, lng: -86.7816 },
                'Cape Town': { lat: -33.9249, lng: 18.4241 },
                'Cape Town, ZAF': { lat: -33.9249, lng: 18.4241 },
                'Medellin': { lat: 6.2442, lng: -75.5812 },
                'Medellin, COL': { lat: 6.2442, lng: -75.5812 },
                'Naples': { lat: 26.1420, lng: -81.7948 },
                'Naples, FL': { lat: 26.1420, lng: -81.7948 },
                'Dubai': { lat: 25.2048, lng: 55.2708 },
                'Dubai, UAE': { lat: 25.2048, lng: 55.2708 },
                'Hong Kong': { lat: 22.3193, lng: 114.1694 },
                'Hong Kong, CHN': { lat: 22.3193, lng: 114.1694 },
                'Tokyo': { lat: 35.6762, lng: 139.6503 },
                'Tokyo, JPN': { lat: 35.6762, lng: 139.6503 },
                'Seoul': { lat: 37.5665, lng: 126.9780 },
                'Seoul, Korea': { lat: 37.5665, lng: 126.9780 },
                'Bali': { lat: -8.3405, lng: 115.0920 },
                'Bali, IDN': { lat: -8.3405, lng: 115.0920 },
                'Montreal': { lat: 45.5017, lng: -73.5673 },
                'Montreal, CAN': { lat: 45.5017, lng: -73.5673 },
                'Vancouver': { lat: 49.2827, lng: -123.1207 },
                'Vancouver, CAN': { lat: 49.2827, lng: -123.1207 },
                'Calgary': { lat: 51.0447, lng: -114.0719 },
                'Calgary, AB': { lat: 51.0447, lng: -114.0719 },
                'Helsinki': { lat: 60.1699, lng: 24.9384 },
                'Helsinki, FIN': { lat: 60.1699, lng: 24.9384 },
                'Riga': { lat: 56.9496, lng: 24.1052 },
                'Riga, LVA': { lat: 56.9496, lng: 24.1052 },
                'Budapest': { lat: 47.4979, lng: 19.0402 },
                'Budapest, HUN': { lat: 47.4979, lng: 19.0402 },
                'Madrid': { lat: 40.4168, lng: -3.7038 },
                'Madrid, ESP': { lat: 40.4168, lng: -3.7038 },
                'Barcelona': { lat: 41.3851, lng: 2.1734 },
                'Barcelona, ESP': { lat: 41.3851, lng: 2.1734 },
                'Palma': { lat: 39.5696, lng: 2.6502 },
                'Palma, ESP': { lat: 39.5696, lng: 2.6502 },
                'Hannover': { lat: 52.3759, lng: 9.7320 },
                'Hannover, DEU': { lat: 52.3759, lng: 9.7320 },
                'Portland': { lat: 45.5152, lng: -122.6784 },
                'Portland, OR': { lat: 45.5152, lng: -122.6784 },
                'Lansing': { lat: 42.7325, lng: -84.5555 },
                'Lansing, MI': { lat: 42.7325, lng: -84.5555 },
                'Santa Monica': { lat: 34.0195, lng: -118.4912 },
                'Santa Monica, CA': { lat: 34.0195, lng: -118.4912 },
                'Atlanta': { lat: 33.7490, lng: -84.3880 },
                'Atlanta, GA': { lat: 33.7490, lng: -84.3880 },
                'New Hampshire': { lat: 43.1939, lng: -71.5724 },
                'Washington': { lat: 38.9072, lng: -77.0369 },
                'Washington DC': { lat: 38.9072, lng: -77.0369 },
                'Washington, DC': { lat: 38.9072, lng: -77.0369 },
                'Lugano': { lat: 46.0101, lng: 8.9600 },
                'Lugano, CHE': { lat: 46.0101, lng: 8.9600 },
                'São Paulo': { lat: -23.5505, lng: -46.6333 },
                'São Paulo, BRA': { lat: -23.5505, lng: -46.6333 },
                'San Salvador': { lat: 13.6929, lng: -89.2182 },
                'San Salvador, ESP': { lat: 13.6929, lng: -89.2182 },
                'Roatan': { lat: 16.3249, lng: -86.5319 },
                'Roatan, HON': { lat: 16.3249, lng: -86.5319 },
                'Merida': { lat: 20.9674, lng: -89.5926 },
                'Merida, MEX': { lat: 20.9674, lng: -89.5926 },
                'Abu Dhabi': { lat: 24.2992, lng: 54.6973 },
                'Abu Dhabi, UAE': { lat: 24.2992, lng: 54.6973 },
                'Taipei': { lat: 25.0330, lng: 121.5654 },
                'Taipei, TWN': { lat: 25.0330, lng: 121.5654 },
                'Cambridge': { lat: 42.3736, lng: -71.1097 },
                'Cambridge, MA': { lat: 42.3736, lng: -71.1097 },
                'Tysons': { lat: 38.9179, lng: -77.2311 },
                'Tysons, VA': { lat: 38.9179, lng: -77.2311 },
                'Bedford': { lat: 52.1344, lng: -0.4663 },
                'Bedford, UK': { lat: 52.1344, lng: -0.4663 },
                'Kreuzlingen': { lat: 47.6508, lng: 9.1750 },
                'Kreuzlingen, CHE': { lat: 47.6508, lng: 9.1750 },
                'Viareggio': { lat: 43.8667, lng: 10.2500 },
                'Viareggio, IT': { lat: 43.8667, lng: 10.2500 },
                'Brescia': { lat: 45.5416, lng: 10.2118 },
                'Brescia, Italy': { lat: 45.5416, lng: 10.2118 },
                'Dublin': { lat: 53.3498, lng: -6.2603 },
                'Dublin, IRE': { lat: 53.3498, lng: -6.2603 },
                'Oslo': { lat: 59.9139, lng: 10.7522 },
                'Oslo, NOR': { lat: 59.9139, lng: 10.7522 },
                'Bretagne': { lat: 48.2020, lng: -2.9326 },
                'Bretagne, BZH': { lat: 48.2020, lng: -2.9326 },
                'Tampa': { lat: 27.9506, lng: -82.4572 },
                'Tampa, FL': { lat: 27.9506, lng: -82.4572 },
                'Asuncion': { lat: -25.2637, lng: -57.5759 },
                'Asuncion, PRY': { lat: -25.2637, lng: -57.5759 },
                'Istanbul': { lat: 41.0082, lng: 28.9784 },
                'Istambul, TUR': { lat: 41.0082, lng: 28.9784 },
                'Berlin, DEU': { lat: 52.5200, lng: 13.4050 },
                
                // NRW Cities (North Rhine-Westphalia, Germany)
                'Dortmund': { lat: 51.5136, lng: 7.4653 },
                'Gummersbach': { lat: 51.0281, lng: 7.5646 },
                'Bonn': { lat: 50.7374, lng: 7.0982 },
                'Moers': { lat: 51.4516, lng: 6.6262 },
                'Hennef': { lat: 50.7753, lng: 7.2831 },
                'Essen': { lat: 51.4556, lng: 7.0116 },
                'Niederrhein': { lat: 51.4556, lng: 6.5194 }, // Central Niederrhein region
                'Aachen': { lat: 50.7753, lng: 6.0839 },
                'Vreden': { lat: 52.0379, lng: 6.8299 },
                'Siegen': { lat: 50.8756, lng: 8.0243 },
                'Ostwestfalen-Lippe': { lat: 51.8994, lng: 8.5481 }, // Central OWL region
                'Bochum': { lat: 51.4818, lng: 7.2162 },
                'Heinsberg': { lat: 51.0631, lng: 6.0974 },
                
                // UK Cities
                'Manchester': { lat: 53.4808, lng: -2.2426 },
                'Manchester, UK': { lat: 53.4808, lng: -2.2426 },
                
                'Online': null // Special case for online events
            };
            
            // Check if we have coordinates for this location
            const coords = knownLocations[cleanLocation];
            
            if (coords === null) {
                // Online events - return a general Bitcoin map link
                return 'https://btcmap.org/map';
            }
            
            if (coords) {
                // Use coordinates to create a focused btcmap.org link
                // btcmap.org uses OpenStreetMap, so we can use lat/lng parameters
                return `https://btcmap.org/map#15/${coords.lat}/${coords.lng}`;
            }
            
            // Fallback: try to search for the location
            // This might still open the general map, but it's better than nothing
            return `https://btcmap.org/map?q=${encodeURIComponent(cleanLocation)}`;
        };

        const downloadCalendar = (type) => {
            let filteredEvents = events;
            
            if (type === 'meetups') {
                filteredEvents = events.filter(event => event.type === 'meetup-event');
            } else if (type === 'holidays') {
                filteredEvents = events.filter(event => event.type === 'bitcoin-holiday');
            } else if (type === 'conferences') {
                filteredEvents = events.filter(event => event.type === 'conference-event');
            }
            
            // Generate iCalendar content
            let icalContent = 'BEGIN:VCALENDAR\n';
            icalContent += 'VERSION:2.0\n';
            icalContent += 'PRODID:-//Bitcoin Meetup Kalender//EN\n';
            icalContent += 'CALSCALE:GREGORIAN\n';
            icalContent += 'METHOD:PUBLISH\n';
            
            filteredEvents.forEach(event => {
                const startDate = new Date(event.start);
                const endDate = new Date(event.end);
                
                icalContent += 'BEGIN:VEVENT\n';
                icalContent += `UID:${event.id}@bitcoin-meetup.de\n`;
                icalContent += `DTSTART:${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z\n`;
                icalContent += `DTEND:${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z\n`;
                icalContent += `SUMMARY:${event.title}\n`;
                icalContent += `DESCRIPTION:${event.description}\n`;
                icalContent += `CATEGORIES:${event.type}\n`;
                if (event.recurring) {
                    icalContent += `RRULE:FREQ=YEARLY\n`;
                    icalContent += `COMMENT:Recurring event (${event.recurring.type})\n`;
                } else {
                    icalContent += `COMMENT:One-time event\n`;
                }
                if (event.location) {
                    icalContent += `LOCATION:${event.location}\n`;
                }
                if (event.organizer) {
                    icalContent += `ORGANIZER:${event.organizer}\n`;
                }
                if (event.links && event.links.length > 0) {
                    event.links.forEach(link => {
                        icalContent += `URL:${link.url}\n`;
                    });
                }
                const nostrLink = window.searchNostrEvents(event);
                if (nostrLink) {
                    icalContent += `URL:${nostrLink}\n`;
                }
                icalContent += 'END:VEVENT\n';
            });
            
            icalContent += 'END:VCALENDAR\n';
            
            // Create and download file
            const blob = new Blob([icalContent], { type: 'text/calendar' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `bitcoin-meetup-${type}-${new Date().getFullYear()}.ics`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        };
        
        const monthNames = [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
            'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ];
        
        const dayNames = ['SO', 'MO', 'DI', 'MI', 'DO', 'FR', 'SA'];
        
        const days = getDaysInMonth(currentDate);
        
        return React.createElement('div', { className: 'calendar-container' },
            // Calendar Content
            React.createElement('div', { className: 'calendar-content' },
            // Header
            React.createElement('div', { className: 'calendar-header' },
                React.createElement('div', { className: 'calendar-title' },
                    React.createElement('a', { 
                        href: 'https://einundzwanzig.space/meetups',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'logo-link'
                    },
        React.createElement('img', { 
            src: 'logo.png?v=' + Date.now() + '&r=' + Math.random() + '&t=' + performance.now() + '&force=' + Math.random(),
            alt: 'Einundzwanzig Bitcoin Meetup Düsseldorf',
            className: 'main-logo',
            style: {
                background: '#000000 !important',
                backgroundColor: '#000000 !important',
                backgroundImage: 'none !important',
                border: 'none !important',
                boxShadow: 'none !important',
                filter: 'none !important',
                mixBlendMode: 'multiply !important',
                opacity: '1 !important'
            }
        })
                    ),
                    React.createElement('span', { className: 'calendar-name' }, 'Bitcoin Meetup Kalender'),
                    React.createElement('span', { className: 'month-year' }, 
                        `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                    )
                ),
                React.createElement('div', { className: 'calendar-actions' },
                    React.createElement('button', { 
                        className: 'action-button download',
                        onClick: () => downloadCalendar('all')
                    }, 'Alle Events'),
                    React.createElement('button', { 
                        className: 'action-button download',
                        onClick: () => downloadCalendar('meetups')
                    }, 'Nur Meetups'),
                    React.createElement('button', { 
                        className: 'action-button download',
                        onClick: () => downloadCalendar('holidays')
                    }, 'Nur Feiertage'),
                    React.createElement('button', { 
                        className: 'action-button download',
                        onClick: () => downloadCalendar('conferences')
                    }, 'Nur Konferenzen')
                )
            ),
            
            // Calendar Controls (positioned absolutely at bottom right)
            React.createElement('div', { className: 'calendar-controls' },
                React.createElement('button', { 
                    className: 'nav-button',
                    onClick: () => navigateMonth(-1)
                }, '←'),
                React.createElement('button', { 
                    className: 'nav-button',
                    onClick: () => navigateMonth(1)
                }, '→')
            ),
            
            // Calendar Grid
            React.createElement('div', { className: 'calendar-grid' },
                // Day headers
                React.createElement('div', { className: 'day-headers' },
                    ...dayNames.map(day => 
                        React.createElement('div', { key: day, className: 'day-header' }, day)
                    )
                ),
                
                // Calendar cells
                React.createElement('div', { className: 'calendar-cells' },
                    ...days.map((day, index) => {
                        const dayEvents = getEventsForDate(day);
                        return React.createElement('div', { 
                            key: index, 
                            className: `calendar-cell ${day ? 'has-day' : 'empty'}`
                        },
                            day && React.createElement('div', { className: 'day-number' }, day),
                            dayEvents.map(event => {
                                // Try to get location from event data or extract from website
                                const getEventLocation = () => {
                                    return event.location || null;
                                };
                                
                                // Search for Nostr events
                                const nostrLink = window.searchNostrEvents(event);
                                if (nostrLink) {
                                    console.log('Nostr link generated for event:', event.title, 'Link:', nostrLink);
                                }
                                
                                const eventLocation = getEventLocation();
                                
                                // Create consolidated links row
                                const linksRow = [];
                                if (event.links && event.links.length > 0) {
                                    linksRow.push(React.createElement('span', {
                                        key: 'link',
                                        className: 'event-link',
                                        onClick: (e) => {
                                            e.stopPropagation();
                                            window.open(event.links[0].url, '_blank', 'noopener,noreferrer');
                                        },
                                        style: { cursor: 'pointer', marginRight: '0.3rem' }
                                    }, '🔗'));
                                }
                                if (nostrLink) {
                                    console.log('Adding Nostr link to UI:', nostrLink);
                                    linksRow.push(React.createElement('span', {
                                        key: 'nostr',
                                        className: 'event-nostr',
                                        onClick: (e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            console.log('Nostr link clicked:', nostrLink);
                                            // Use window.open directly
                                            window.open(nostrLink, '_blank', 'noopener,noreferrer');
                                        },
                                        style: { cursor: 'pointer', marginRight: '0.3rem' }
                                    }, '🌐'));
                                }
                                if (eventLocation) {
                                    linksRow.push(React.createElement('span', {
                                        key: 'location',
                                        className: 'event-location',
                                        onClick: (e) => {
                                            e.stopPropagation();
                                            const locationUrl = generateLocationLink(eventLocation);
                                            if (locationUrl) {
                                                window.open(locationUrl, '_blank', 'noopener,noreferrer');
                                            }
                                        },
                                        style: { cursor: 'pointer' }
                                    }, '📍'));
                                }

                                return React.createElement('div', { 
                                    key: event.id, 
                                    className: `event-item ${event.type}`,
                                    onClick: () => {
                                        window.dispatchEvent(new CustomEvent('openModal', { detail: event }));
                                    },
                                    style: { cursor: 'pointer' }
                                },
                                    React.createElement('div', { className: 'event-title' }, event.title),
                                    React.createElement('div', { className: 'event-description' }, event.description.substring(0, 50) + '...'),
                                    linksRow.length > 0 && 
                                        React.createElement('div', { className: 'event-links-row' }, ...linksRow)
                                );
                            })
                        );
                    })
                )
            )
            ) // Close calendar-content div
        );
    };

    const container = document.getElementById('calendar');
    if (container) {
        ReactDOM.render(React.createElement(CalendarComponent), container);
        
        // Render modal outside the calendar container using a portal
        const modalContainer = document.createElement('div');
        modalContainer.id = 'modal-root';
        document.body.appendChild(modalContainer);
        
        // Create a separate component for the modal
        const ModalComponent = () => {
            const [selectedEvent, setSelectedEvent] = React.useState(null);
            
            // Listen for modal state changes from the main calendar
            React.useEffect(() => {
                const handleModalState = (event) => {
                    setSelectedEvent(event.detail);
                };
                const handleCloseModal = () => setSelectedEvent(null);
                
                window.addEventListener('openModal', handleModalState);
                window.addEventListener('closeModal', handleCloseModal);
                return () => {
                    window.removeEventListener('openModal', handleModalState);
                    window.removeEventListener('closeModal', handleCloseModal);
                };
            }, []);
            
            if (!selectedEvent) return null;
            
            return React.createElement('div', { 
                className: 'event-modal-overlay',
                onClick: () => {
                    setSelectedEvent(null);
                    window.dispatchEvent(new CustomEvent('closeModal'));
                },
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }
            },
                React.createElement('div', {
                    className: 'event-modal',
                    onClick: (e) => e.stopPropagation(),
                    style: {
                        backgroundColor: '#1a1a1a',
                        border: '2px solid #333333',
                        borderRadius: '8px',
                        padding: '2rem',
                        maxWidth: '600px',
                        width: '90%',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        color: '#ffffff'
                    }
                },
                        React.createElement('div', {
                        style: { display: 'flex', alignItems: 'center', marginBottom: '1rem' }
                    },
                        // Event logo
                        (() => {
                            const logoUrl = window.getEventLogo(selectedEvent);
                            if (logoUrl) {
                                return React.createElement('img', {
                                    src: logoUrl,
                                    alt: `${selectedEvent.title} Logo`,
                                    style: {
                                        width: '48px',
                                        height: '48px',
                                        marginRight: '1rem',
                                        borderRadius: selectedEvent.type === 'conference-event' ? '4px' : '50%',
                                        objectFit: 'cover'
                                    }
                                });
                            }
                            return null;
                        })(),
                        
                        React.createElement('h2', { 
                            style: { 
                                margin: '0',
                                color: selectedEvent.type === 'bitcoin-holiday' ? '#f7931a' : 
                                       selectedEvent.type === 'meetup-event' ? '#ffd700' : '#9d4edd'
                            }
                        }, selectedEvent.title)
                    ),
                    
                    React.createElement('p', { 
                        style: { 
                            margin: '0 0 1rem 0',
                            lineHeight: '1.5'
                        }
                    }, selectedEvent.description),
                    
                    selectedEvent.organizer && React.createElement('p', { 
                        style: { 
                            margin: '0 0 1rem 0',
                            fontSize: '0.9rem',
                            color: '#cccccc'
                        }
                    }, `Organisator: ${selectedEvent.organizer}`),
                    
                    selectedEvent.location && React.createElement('p', { 
                        style: { 
                            margin: '0 0 1rem 0',
                            fontSize: '0.9rem',
                            color: '#cccccc'
                        }
                    }, `Ort: ${selectedEvent.location}`),
                    
                    selectedEvent.links && selectedEvent.links.length > 0 && React.createElement('div', {
                        style: { marginTop: '1rem' }
                    },
                        React.createElement('h3', { style: { margin: '0 0 0.5rem 0', fontSize: '1rem' } }, 'Links:'),
                        ...selectedEvent.links.map((link, index) =>
                            React.createElement('a', {
                                key: index,
                                href: link.url,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                style: {
                                    display: 'block',
                                    margin: '0.25rem 0',
                                    color: '#f7931a',
                                    textDecoration: 'none'
                                }
                            }, `🔗 ${link.name}`)
                        )
                    ),
                    
                    // Location link
                    selectedEvent.location && React.createElement('div', {
                        style: { marginTop: '1rem' }
                    },
                        React.createElement('a', {
                            href: window.generateLocationLink(selectedEvent.location),
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            style: {
                                display: 'block',
                                margin: '0.25rem 0',
                                color: '#f7931a',
                                textDecoration: 'none'
                            }
                        }, '📍 Auf Karte anzeigen')
                    ),
                    
                    // Nostr link
                    (() => {
                        const nostrLink = window.searchNostrEvents(selectedEvent);
                        if (nostrLink) {
                            return React.createElement('div', {
                                style: { marginTop: '1rem' }
                            },
                                React.createElement('a', {
                                    href: nostrLink,
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                    style: {
                                        display: 'block',
                                        margin: '0.25rem 0',
                                        color: '#f7931a',
                                        textDecoration: 'none'
                                    }
                                }, '🌐 Nostr')
                            );
                        }
                        return null;
                    })(),
                    
                    React.createElement('button', {
                        onClick: () => {
                            setSelectedEvent(null);
                            window.dispatchEvent(new CustomEvent('closeModal'));
                        },
                        style: {
                            marginTop: '1.5rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#333333',
                            color: '#ffffff',
                            border: '1px solid #555555',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }
                    }, 'Schließen')
                )
            );
        };
        
        ReactDOM.render(React.createElement(ModalComponent), modalContainer);
        
    } else {
        console.error('❌ Calendar container not found');
    }
}

// Run initialization when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeCalendar);

console.log('🎉 Bitcoin Meetup Calendar script loaded');
