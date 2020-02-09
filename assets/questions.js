const questions = [
  {
    questionText: 'Entzündungen sind komplexe Gewebsreaktionen, die mit der Freisetzung von Zytokinen, Leukotrienen, Prostaglandinen und Peptiden einhergehen. Die bei der Entzündung beteiligten Prostaglandine werden durch welches der folgenden Enzyme am ehesten aus der Arachidonsäure gebildet?',
    answers: [
      {
        answerText: 'Cyclooxygenase 1',
        correct: false
      },
      {
        answerText: 'Cyclooxygenase 2.',
        correct: true
      },
      {
        answerText: 'Glutathion-S-transferase.',
        correct: false
      },
      {
        answerText: 'Lipoxygenase.',
        correct: false
      },
      {
        answerText: 'Phospholipase A2.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Im zentralen Nervensystem ist zyklisches 5`-AMP ein diffusibler „second messenger“ („zweiter Botenstoff“) nach Aktivierung der',
    answers: [
      {
        answerText: 'M1-Cholinozeptoren.',
        correct: false
      },
      {
        answerText: 'Beta1-Adrenozeptoren.',
        correct: true
      },
      {
        answerText: '5-HT3-Rezeptoren.',
        correct: false
      },
      {
        answerText: 'GABAA-Rezeptoren.',
        correct: false
      },
      {
        answerText: 'Glutamat-NMDA-Rezeptoren.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Die Pharmakokinetik einer neuen Substanz wird an einem Studierenden untersucht. Die Substanz habe eine Kinetik erster Ordnung und man nimmt ein Ein-Kompartment-Modell an. Die Substanz hat eine Halbwertszeit von 3 Stunden. Sie beginnen eine intravenöse Infusion der Substanz um genau 08:00 Uhr morgens. Eine Blutprobe wird 14:00 Uhr nachmittags am selben Tag genommen und daran messen Sie eine Substanzkonzentration von 60 µg/ml. Welches ist am wahrscheinlichsten die Plasmakonzentration der Substanz im Gleichgewichtszustand (Steady-State) in µg/ml?',
    answers: [
      {
        answerText: '100',
        correct: false
      },
      {
        answerText: '60',
        correct: false
      },
      {
        answerText: '80',
        correct: true
      },
      {
        answerText: '30',
        correct: false
      },
      {
        answerText: '40',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie sind in der Pharmaentwicklung tätig und wollen verschiedene Generika (genannt A, B, C, D, E) an gesunden Studierenden vergleichen. Dieselbe Dosis des jeweiligen neuen Medikaments wird intravenös und peroral am selben Studierenden an zwei verschiedenen Tagen gegeben. In der folgenden Tabelle sehen Sie die Ergebnisse. Welche der untersuchten Generika hat die höchste Bioverfügbarkeit?\n\n| Substanz | AUC (oral) in mg*h/l | AUC (i.v.) in mg*h/l |\n| -------- | -------------------- | -------------------- |\n| Substanz A | 50 | 600 |\nSubstanz B | 200 | 2000 |\nSubstanz C | 30 | 400 |\nSubstanz D | 100 | 120 |\nSubstanz E | 45 | 90 |',
    answers: [
      {
        answerText: 'A',
        correct: false
      },
      {
        answerText: 'B',
        correct: false
      },
      {
        answerText: 'C',
        correct: false
      },
      {
        answerText: 'D',
        correct: true
      },
      {
        answerText: 'E',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 74-jähriger wird mit einem Myokardinfarkt und schweren akuten kardialen Arrhythmien in die Notaufnahme aufgenommen. Sie entscheiden sich den Patienten mit Lidocain als Antiarrhythmikum zu behandeln. Sie geben eine Dauerinfusion intravenös von 1,92 mg/Minute. Diese Infusion starten Sie um 08:00 Uhr am Morgen. Die typischen pharmakokinetischen Messgrößen von Lidocain seien: Verteilungsvolumen 77 Liter, Clearance 640 ml/Minute und Halbwertszeit 1,4 Stunden. Welche Gleichgewichtsplasmakonzentration (Steady State) erwarten Sie am ehesten?',
    answers: [
      {
        answerText: '40 mg/l',
        correct: false
      },
      {
        answerText: '3,0 mg/l',
        correct: true
      },
      {
        answerText: '0,025 mg/l',
        correct: false
      },
      {
        answerText: '7,2 mg/l',
        correct: false
      },
      {
        answerText: '3,46 mg/l',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 25-jährige Frau kommt zu Ihnen mit Schlaflosigkeit und der Befürchtung, daß irgendetwas mit ihrem Herzen nicht stimmt. Sie beschreibt ihr Herz als „ihr aus der Brust springend“. Sie ist sonst von ihrer eigenen Beschreibungher gesund und hält sich für sehr energiegeladen. Die Laboruntersuchung weist auf eine Hyperthyreose hin. Mit welcher der folgenden Substanzen können Sie am ehesten dauerhaft die Aktivität der Schilddrüse reduzieren?',
    answers: [
      {
        answerText: '131Jod.',
        correct: true
      },
      {
        answerText: 'Metamizol.',
        correct: false
      },
      {
        answerText: 'Propylthiouracil.',
        correct: false
      },
      {
        answerText: 'Thiocyanat.',
        correct: false
      },
      {
        answerText: 'Thyreoglobulin.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie verschrieben einer 34-jährigen Frau mit ulzerativer Kolitis über mehrere Monate pharmakologische Dosen eines Glucocorticoids. Welche der folgenden unerwünschten Effekte ist am ehesten eine Folge einer lang dauernden Glucocorticoidtherapie in pharmakologischer Dosierung?',
    answers: [
      {
        answerText: 'Lupus erythematodes-ähnliches Syndrom.',
        correct: false
      },
      {
        answerText: 'Neoplasma der Nebennieren.',
        correct: false
      },
      {
        answerText: 'Hepatotoxizität.',
        correct: false
      },
      {
        answerText: 'Osteoporose.',
        correct: true
      },
      {
        answerText: 'vorzeitige Pubertät bei Kindern.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen ist am ehesten eine allgemein anerkannte Wirkung von NO?',
    answers: [
      {
        answerText: 'Arrhythmien.',
        correct: false
      },
      {
        answerText: 'Bronchokonstriktion.',
        correct: false
      },
      {
        answerText: 'Verstopfung.',
        correct: false
      },
      {
        answerText: 'Hemmung einer akuten Abstoßungsreaktion nach Transplantation.',
        correct: false
      },
      {
        answerText: 'pulmonale Vasodilatation.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein 49 Jahre alter Mann mit einem akuten Koronarsyndrom bekommt im Krankenhaus notfallmäßig einen Stent. Welche der folgenden Substanzen könnte am ehesten unerwartete Blutspiegelergebnisse liefern, wenn der Patient den CYP2C19 Genotyp genetisch besitzt?',
    answers: [
      {
        answerText: 'Clopidogrel.',
        correct: true
      },
      {
        answerText: 'Codein.',
        correct: false
      },
      {
        answerText: 'Prasugrel.',
        correct: false
      },
      {
        answerText: 'Ticagrelor.',
        correct: false
      },
      {
        answerText: 'Phenprocoumon.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 75-jährige Frau wird aufgenommen wegen Brustkrebs. Sie wurde bewusstlos im Bett von der Schwester gefunden. Die Diagnose Herzstillstand wurde gestellt und eine Wiederbelebung wurde initial ohne Erfolg gestartet. Das EKG zeigt eine Asystolie. Eine intrakardiale Injektion von Adrenalin wurde gegeben. Welche der folgenden Post-Rezeptor- Mechanismen ist die am ehesten akzeptierte Erklärung für die Wirkung von Adrenalin auf die Kontraktionskraft bei dieser Patientin?',
    answers: [
      {
        answerText: 'Öffnung von ligandengesteuerten Kaliumkanälen.',
        correct: false
      },
      {
        answerText: 'Öffnung von ligandengesteuerten Natriumkanälen.',
        correct: false
      },
      {
        answerText: 'Aktivierung der Phospholispase C.',
        correct: false
      },
      {
        answerText: 'Aktivierung der Phospholipase A2.',
        correct: false
      },
      {
        answerText: 'Aktivierung der Adenylatcyclase.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein 37-jähriger Bauarbeiter wird in die Notaufnahme gebracht. Er hat sich eine Verletzung des Rückenmarks zugezogen. In der Notfallbehandlung erhält er u.a. eine intravenöse Infusion einer geringen Dosis von Dopamin. Welche der folgenden Effekte der Substanz beruht am ehesten auf der Aktivierung von Dopamin-D1-Rezeptoren?',
    answers: [
      {
        answerText: 'verstärkte Diurese.',
        correct: true
      },
      {
        answerText: 'Übelkeit und Erbrechen.',
        correct: false
      },
      {
        answerText: 'Verengung der Hautgefäße.',
        correct: false
      },
      {
        answerText: 'Zunahme der Herzfrequenz.',
        correct: false
      },
      {
        answerText: 'Zunahme des Schlagvolumens des Herzens.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 35-jährige Frau wird in die Notfallaufnahme aufgenommen. Sie klagt über Atemnot und generalisiertes Juckgefühl. Sie sehen eine Schwellung der Lippen, der Augen und der Zunge. Die Symptome traten wenige Minuten nach intramuskulärer Injektion eines Impfstoffes auf. Sie begannen eine passende Therapie. Diese beinhaltete auch die intramuskuläre Injektion von Adrenalin. Welche der Effekte dieses Stoffes sind am ehesten β2-Adrenozeptor-vermittelt?',
    answers: [
      {
        answerText: 'Hemmung der Insulinfreisetzung.',
        correct: false
      },
      {
        answerText: 'Erweiterung der Gefäße der Haut.',
        correct: false
      },
      {
        answerText: 'Mydriasis.',
        correct: false
      },
      {
        answerText: 'Kontraktion des Sphinkters der Blase.',
        correct: false
      },
      {
        answerText: 'vermehrte Glykogenolyse.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein Patient wird aufgrund einer bakteriellen Infektion mit Penicillin behandelt. Wenige Minuten nach der Penicillin-Injektion zeigt er eine starke Bronchokonstriktion, laryngeale Ödeme und einen Blutdruckabfall. Der Patient überlebt durch schnelle Injektion von Adrenalin. Welche der folgenden immunologischen Reaktionen wird am ehesten durch eine Penicillin-Reaktion bei diesem Patienten hervorgerufen worden sein?',
    answers: [
      {
        answerText: 'Autoimmunsyndrom.',
        correct: false
      },
      {
        answerText: 'zell-mediierte Reaktion.',
        correct: false
      },
      {
        answerText: 'Typ2-Arzneimittelallergie.',
        correct: false
      },
      {
        answerText: 'IgG-mediierte Reaktion.',
        correct: true
      },
      {
        answerText: 'Serumkrankheit.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage über Vancomycin tritt am ehesten zu?',
    answers: [
      {
        answerText: 'Es ist wirksam gegen Methicillin-resistente Staphylokokken.',
        correct: true
      },
      {
        answerText: 'Es wirkt bakteriostatisch.',
        correct: false
      },
      {
        answerText: 'Es bindet an Penicillin-bindende Proteine (PBP).',
        correct: false
      },
      {
        answerText: 'Es wird hepatisch metabolisiert.',
        correct: false
      },
      {
        answerText: 'Es ist peroral bioverfügbar.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Aminoglykosiden trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Sie sind bakteriostatisch.',
        correct: false
      },
      {
        answerText: 'Sie binden an die 50S-ribosomale Untereinheit.',
        correct: false
      },
      {
        answerText: 'Sie bewirken das so genannte „misreading“ des Codes der t-RNA.',
        correct: true
      },
      {
        answerText: 'Sie hemmen die Peptidyltransferase.',
        correct: false
      },
      {
        answerText: 'Sie stabilisieren Polysome.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten ein Penicillinase-resistentes Penicillin?',
    answers: [
      {
        answerText: 'Aztreonam.',
        correct: false
      },
      {
        answerText: 'Ceftazidim.',
        correct: false
      },
      {
        answerText: 'Cloxacillin.',
        correct: true
      },
      {
        answerText: 'Piperacillin.',
        correct: false
      },
      {
        answerText: 'Vancomycin.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten ein Cephalosporin der dritten Generation, das wirksam ist gegen Pseudomonas aeruginosa?',
    answers: [
      {
        answerText: 'Aztreonam.',
        correct: false
      },
      {
        answerText: 'Ceftazidim.',
        correct: true
      },
      {
        answerText: 'Cloxacillin.',
        correct: false
      },
      {
        answerText: 'Piperacillin.',
        correct: false
      },
      {
        answerText: 'Vancomycin.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Tieren wurde intramuskulär Propranolol gegeben. Nach einer Stunde erhielt jedes identisch behandelte Tier eine Substanz mit Wirkung auf das autonome Nervensystem. Welche der folgenden Medikamenten-induzierten Effekte wurde am wahrscheinlichsten durch die Vorbehandlung mit Propranolol vermindert?',
    answers: [
      {
        answerText: 'Isoprenalin-induzierte Hyperglykämie.',
        correct: true
      },
      {
        answerText: 'Nikotin-induzierte Abnahme der Durchblutung der Haut.',
        correct: false
      },
      {
        answerText: 'Noradrenalin-induzierte Reflexbradykardie.',
        correct: false
      },
      {
        answerText: 'Phenylephrin-induzierte Mydriasis.',
        correct: false
      },
      {
        answerText: 'Pilocarpin-induzierte Kontraktion der Bronchialmuskultur.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 44-jährige Frau leidet an einem Offenwinkelglaukom. Sie haben ihr vor drei Monaten Augentropfen mit Timolol verschrieben. Was ist am ehesten der Wirkungsmechanismus dieser Substanz bei dieser Erkrankung?',
    answers: [
      {
        answerText: 'Öffnung von Liganden-gesteuerten Kalium-Kanälen.',
        correct: false
      },
      {
        answerText: 'vermehrte Synthese von Diacylglycerol.',
        correct: false
      },
      {
        answerText: 'verminderte Synthese von cGMP.',
        correct: false
      },
      {
        answerText: 'verminderte Aktivität der Adenylatzyklase.',
        correct: true
      },
      {
        answerText: 'vermehrte Synthese von Tyrosinkinase.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Das gesuchte Medikament hemmt Cholinesterasen sowohl in der Peripherie als auch im zentralen Nervensystem. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Acetylcholin.',
        correct: false
      },
      {
        answerText: 'Carbachol.',
        correct: false
      },
      {
        answerText: 'Edrophonium.',
        correct: false
      },
      {
        answerText: 'Neostigmin.',
        correct: false
      },
      {
        answerText: 'Physostigmin.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein 58-jähriger Mann wird in das Krankenhaus aufgenommen zur laparoskopischen Operation einer Hernie. Die Allgemeinanästhesie wird begonnen mit intravenösem Diazepam und der Patient verliert das Bewusstsein nach einer Minute. Er gewinnt das Bewusstsein nach etwa 35 Minuten zurück. Sie wissen jetzt aber, daß die Halbwertszeit von Diazepam 40 Stunden beträgt. Wie erklären Sie am ehesten die kurze Wirkungsdauer der Substanz?',
    answers: [
      {
        answerText: 'schneller Abbau der Substanz im zentralen Nervensystem',
        correct: true
      },
      {
        answerText: 'schnelle Ausscheidung der Substanz über die Niere',
        correct: false
      },
      {
        answerText: 'Umverteilung der Substanz aus dem zentralen Nervensystem in andere Gewebe',
        correct: false
      },
      {
        answerText: 'Abbau der Substanz in inaktive Metabolite',
        correct: false
      },
      {
        answerText: 'schnelle Entwicklung einer Toleranz gegenüber der Substanz',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 59-jähriger Mann, bei dem Sie eine Belastungs-Angina diagnostiziert haben, wird mit Verapamiltabletten (1 x täglich) behandelt. Welche von den folgenden Calciumkanälen sind am ehesten der Angriffspunkt dieser Substanz bei diesem Mann?',
    answers: [
      {
        answerText: 'Liganden-gesteuerte Kanäle in der Zellmembran',
        correct: false
      },
      {
        answerText: 'sogenannte Store-operated Kanäle in den Mitochondrien',
        correct: false
      },
      {
        answerText: 'spannungsgesteuerte Kanäle im sarkoplasmatischen Retikulum',
        correct: false
      },
      {
        answerText: 'spannungsgesteuerte Kanäle in der äußeren Zellmembran',
        correct: true
      },
      {
        answerText: 'Liganden-gesteuerte Kanäle im sarkoplasmatischen Retikulum',
        correct: false
      }
    ]
  },
  {
    questionText: 'Die Substanz erhöht die cAMP-Bildung im Herzen. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Captopril.',
        correct: false
      },
      {
        answerText: 'Digoxin.',
        correct: false
      },
      {
        answerText: 'Dobutamin.',
        correct: true
      },
      {
        answerText: 'Furosemid.',
        correct: false
      },
      {
        answerText: 'Losartan.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 68-jähriger Mann mit kürzlich diagnostizierter systolischer Herzinsuffizienz NYHA Klasse III bekommt eine Therapie mit Metoprolol, Losartan, Furosemid und Digoxin. Welche der folgenden Aussagen beschreibt am ehesten den positiv inotropen Wirkungsmechanismus von Digoxin?',
    answers: [
      {
        answerText: 'Schließen von Calcium-Kanälen im Sarkolemma.',
        correct: false
      },
      {
        answerText: 'Erhöhung der Freisetzung von Calciumionen aus dem sarkoplasmtischen Retikulum in der Systole.',
        correct: true
      },
      {
        answerText: 'Aktivierung der Natrium-Kalium-ATPase.',
        correct: false
      },
      {
        answerText: 'Aktivierung des Natrium-Calcium-Austauschers im Sarkolemma.',
        correct: false
      },
      {
        answerText: 'Öffnung von Kaliumkanälen im Sarkolemma.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie geben einem 57-jährigen Patienten mit persistierendem Vorhofflimmern Digoxin (einmal täglich). Über welchen Rezeptor wird der erwünschte therapeutische Effekt bei dem Patienten am ehesten vermittelt?',
    answers: [
      {
        answerText: 'β2-Adrenozeptor',
        correct: false
      },
      {
        answerText: 'M2-cholinerger Rezeptor',
        correct: true
      },
      {
        answerText: 'D1-dopaminerger Rezeptor',
        correct: false
      },
      {
        answerText: '5HT-serotoninerger Rezeptor',
        correct: false
      },
      {
        answerText: 'nikotinischer Rezeptor',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 68-jährige Frau, die seit kurzem als Patientin mit systolischer Herzinsuffizienz NYHA III diagnostiziert wurde, erhält Digoxin. Sie wissen, daß die Clearance von Digoxin etwa 7 Liter/Stunde beträgt und die orale Bioverfügbarkeit 70 %. Welche der folgenden Tages-Dosierungen (in mg) werden am ehesten notwendig sein, um im Gleichgewicht eine Plasmakonzentration von 1 µg/l zu erzielen?',
    answers: [
      {
        answerText: '1,4',
        correct: false
      },
      {
        answerText: '0,125',
        correct: false
      },
      {
        answerText: '0,24',
        correct: true
      },
      {
        answerText: '2,0',
        correct: false
      },
      {
        answerText: '0,5',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten ein kompetitiver Inhibitor von Renin?',
    answers: [
      {
        answerText: 'Enalapril.',
        correct: false
      },
      {
        answerText: 'Losartan.',
        correct: false
      },
      {
        answerText: 'Spironolacton.',
        correct: false
      },
      {
        answerText: 'Verapamil.',
        correct: false
      },
      {
        answerText: 'Aliskiren.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten ein Kalium-Kanal-Öffner in der glatten Muskulatur?',
    answers: [
      {
        answerText: 'Aliskiren.',
        correct: false
      },
      {
        answerText: 'Clonidin.',
        correct: false
      },
      {
        answerText: 'Diazoxid.',
        correct: true
      },
      {
        answerText: 'Enalapril.',
        correct: false
      },
      {
        answerText: 'Amlodipin.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen hat am ehesten Stickstoffmonoxid als aktiven Metaboliten?',
    answers: [
      {
        answerText: 'α-Methyl-Dopa.',
        correct: false
      },
      {
        answerText: 'Nifedipin.',
        correct: false
      },
      {
        answerText: 'Nitroprussid.',
        correct: true
      },
      {
        answerText: 'Prazosin.',
        correct: false
      },
      {
        answerText: 'Propranolol.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Während einer Routineuntersuchung fand eine 65-jährige Frau heraus, daß sie einen Blutdruck von 150/90 mmHg hat. Relevante Vorbefunde sind ein AV-Block 2. Grades und eine Osteoporose. Vor einem Jahr erlitt sie eine schwere Episode eines Angioödems. Welches der folgenden antihypertensiven Medikamente wäre bei dieser Frau am ehesten angebracht?',
    answers: [
      {
        answerText: 'Captopril.',
        correct: false
      },
      {
        answerText: 'Propranolol.',
        correct: false
      },
      {
        answerText: 'Verapamil.',
        correct: false
      },
      {
        answerText: 'Chlorthalidon.',
        correct: true
      },
      {
        answerText: 'Minoxidil.',
        correct: false
      }
    ]
  },
  {
    questionText: 'An einem gesunden Freiwilligen wird die Pharmakokinetik einer neuen Substanz untersucht. Sie hat eine Kinetik nullter Ordnung. Drei Stunden nach der intravenösen Gabe der neuen Substanz beträgt deren Plasmakonzentration 8 mg/l und eine weitere Stunde später 7 mg/l. Was war am wahrscheinlichsten die Substanzkonzentration in mg/l unmittelbar nach der intravenösen Injektion?',
    answers: [
      {
        answerText: '9',
        correct: false
      },
      {
        answerText: '32',
        correct: false
      },
      {
        answerText: '11',
        correct: true
      },
      {
        answerText: '16',
        correct: false
      },
      {
        answerText: '64',
        correct: false
      }
    ]
  },
  {
    questionText: 'Es stellt sich bei Ihnen eine Patientin mit einer ambulant erworbenen Pneumonie vor. Sie ist 24 Jahre alt und nimmt Loratadin gegen ihre Allergie und Eisentabletten ein. Sie trinkt bis zu sechs Tassen koffeinhaltigen Kaffee pro Tag. Falls Sie diese Patientin mit Erythromycin behandeln würden, müssten Sie am ehesten folgendes beachten:',
    answers: [
      {
        answerText: 'Der Patientin sagen, sie soll sich nicht dem Sonnenlicht aussetzen.',
        correct: false
      },
      {
        answerText: 'Ihr sagen, sie soll die Eisentabletten absetzen.',
        correct: false
      },
      {
        answerText: 'Ihr raten, weniger koffeinhaltige Getränke zu sich zu nehmen.',
        correct: false
      },
      {
        answerText: 'Ihr raten, den Gesamtharnstoff und Kreatinin im Blut überprüfen zu lassen.',
        correct: false
      },
      {
        answerText: 'Ihr raten, vorübergehend Loratadin abzusetzen.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein Patient wird in die Notaufnahme gebracht, nachdem er eine Überdosierung einer unbekannten Menge eines Theophyllin-Präparates zwei Stunden zuvor peroral geschluckt hat. Er hat gastrointestinale Störungen mit Übelkeit, ist erregt und zeigt Hyperreflexie und Blutdruckabfall. Sie lassen unmittelbar nach Aufnahme die Theophyllin-Spiegel zu 80 mg/l messen. Die orale Bioverfügbarkeit von Theophyllin ist praktisch vollständig, die Clearance 50 ml/min, das Verteilungsvolumen 35 Liter und die Eliminationshalbwertszeit 7,5 Stunden. Welche Menge von Theophyllin hat er am ehesten initial zu sich genommen?',
    answers: [
      {
        answerText: '0,3 g',
        correct: false
      },
      {
        answerText: '0,6 g',
        correct: false
      },
      {
        answerText: '1,6 g',
        correct: false
      },
      {
        answerText: '2,8 g',
        correct: true
      },
      {
        answerText: '8 g',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 43-jähriger Mann leidet an einem Phäochromozytom. Deshalb hat man die Behandlung mit einem Medikament begonnen, das einen deutlichen Abfall der Adrenalin- und Noradrenalinkonzentrationen im Blut hervorrufen wird, weil es den ersten geschwindigkeitsbestimmenden Schritt in der Katecholaminbiosynthese hemmt. Welches Enzym wird am ehesten durch diese Substanz gehemmt?',
    answers: [
      {
        answerText: 'Aromatische-L-Aminosäuredecarboxylase',
        correct: false
      },
      {
        answerText: 'Dopamin-β-Hydroxylase',
        correct: false
      },
      {
        answerText: 'Tyrosin-Hydroxylase',
        correct: true
      },
      {
        answerText: 'Phenylethanolamin-N-Methyltransferase',
        correct: false
      },
      {
        answerText: 'Monoaminoxidase',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 24-jährige Frau wird in die Notaufnahme nach einem Autounfall gebracht. Die Diagnose ist neurogener Schock durch Verletzung des Rückenmarks. Als Notfallmaßnahme geben Sie Noradrenalin. Welche der folgenden Effekte der Substanz wird am ehesten durch Aktivierung von peripheren postsynaptischen β1-Rezeptoren hervorgerufen?',
    answers: [
      {
        answerText: 'Bronchodilatation',
        correct: false
      },
      {
        answerText: 'Uterusrelaxation',
        correct: false
      },
      {
        answerText: 'vermehrte Gluconeogenese in der Leber',
        correct: false
      },
      {
        answerText: 'vermehrte Reninsekretion',
        correct: true
      },
      {
        answerText: 'vermehrtes Schwitzen der Innenfläche der Hände',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 24-jährige junge Frau wird in die Notaufnahme gebracht, nachdem sie in ihrem Zimmer mit niedrigem Blutdruck und Krämpfen gefunden wurde. In der Notaufnahme lassen Sie ein EKG schreiben und sehen ventrikuläre Arrhythmien. Eine Überdosierung welcher der folgenden Substanzen hat am ehesten diese Symptome hervorgerufen?',
    answers: [
      {
        answerText: 'Paracetamol',
        correct: false
      },
      {
        answerText: 'Amitriptylin',
        correct: true
      },
      {
        answerText: 'Diazepam',
        correct: false
      },
      {
        answerText: 'Ethylenglykol',
        correct: false
      },
      {
        answerText: 'Morphin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 16-jähriges Mädchen hat paroxysimale Anfälle von hoher Herzfrequenz mit Palpitationen und Atemnot. Die Episoden enden manchmal spontan, andere führen zur Einweisung in die Notaufnahme des örtlichen Krankenhauses. In ihrem EKG sehen Sie während der symptomatischen Phasen eine AV-Knoten-Tachykardie. Die Behandlung der Wahl wäre hier am ehesten',
    answers: [
      {
        answerText: 'Adenosin.',
        correct: true
      },
      {
        answerText: 'Amiodaron.',
        correct: false
      },
      {
        answerText: 'Flecainid.',
        correct: false
      },
      {
        answerText: 'Propranolol.',
        correct: false
      },
      {
        answerText: 'Verapamil.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 45-jähriger Mann wird von Ihnen in der Notaufnahme aufgenommen und hat ein abnormales EKG. Sie vermuten, dem läge die Überdosierung eines Antiarrhythmikums zugrunde. Für welche der folgenden Substanzen ist die Zuordnung mit den typischen EKG-Veränderungen am ehesten richtig?',
    answers: [
      {
        answerText: 'Chinidin – erhöht die PR-Intervalle und QT-Intervalle',
        correct: false
      },
      {
        answerText: 'Flecainid – erhöht die PR-Intervalle, QRS-Intervalle und QT-Intervalle',
        correct: false
      },
      {
        answerText: 'Verapamil – verlängert die PR-Intervalle',
        correct: true
      },
      {
        answerText: 'Lidocain – vermindert QRS-Intervalle und PR-Intervalle',
        correct: false
      },
      {
        answerText: 'Metoprolol – verlängert die Dauer des QRS-Komplexes',
        correct: false
      }
    ]
  },
  {
    questionText: 'Die gesuchte Substanz wird zu 90% mit dem Urin in unveränderter Form ausgeschieden. Ihre Urinlöslichkeit ist gering und deshalb sollten die Patienten viel trinken, um eine Nephrotoxizität zu vermeiden. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Aciclovir',
        correct: true
      },
      {
        answerText: 'Efavirenz',
        correct: false
      },
      {
        answerText: 'Indinavir',
        correct: false
      },
      {
        answerText: 'Trifluridin',
        correct: false
      },
      {
        answerText: 'Zidovudin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Pyrantelpamoat ist am ehesten zutreffend?',
    answers: [
      {
        answerText: 'Es wirkt als ein Antagonist an GABA-Rezeptoren der Würmer.',
        correct: false
      },
      {
        answerText: 'Es ist genauso wirksam wie Niclosamid zur Behandlung von Bandwurminfektionen.',
        correct: false
      },
      {
        answerText: 'Es eradiziert den erwachsenen Wurm im Colon, aber nicht die Eier.',
        correct: true
      },
      {
        answerText: 'Die Hepatotoxizität ist dosisbegrenzend.',
        correct: false
      },
      {
        answerText: 'Es wirkt synergistisch mit Praziquantel bei Cestodeninfektionen.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Resistenz von Plasmodium falciparum gegenüber Chloroquin kann man am ehesten erklären durch',
    answers: [
      {
        answerText: 'Veränderungen in der Rezeptorstruktur.',
        correct: false
      },
      {
        answerText: 'verminderte Akkumulation der Substanz in den Vakuolen.',
        correct: true
      },
      {
        answerText: 'vermehrte DNA-Reparaturmechanismen.',
        correct: false
      },
      {
        answerText: 'eine erhöhte Bildung von Hydrofolatreduktase.',
        correct: false
      },
      {
        answerText: 'eine Induktion von arzneimittelabbauenden Enzymen des P450-Systems in der Leber.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden unerwünschten Wirkungen tritt eher unter der Therapie mit Sirolimus als unter der Therapie mit Cyclosporin auf?',
    answers: [
      {
        answerText: 'anaphylaktische Reaktionen',
        correct: false
      },
      {
        answerText: 'Hypertonus',
        correct: false
      },
      {
        answerText: 'Osteoporose',
        correct: false
      },
      {
        answerText: 'Niereninsuffizienz',
        correct: false
      },
      {
        answerText: 'Thrombozytopenie',
        correct: true
      }
    ]
  },
  {
    questionText: 'Sie behandeln einen 60-jährigen Patienten mit erstmalig aufgetretener Hypercholesterinämie. Sie haben ein halbes Jahr vergeblich versucht, mit Ernährungsberatung und Gruppentherapie das Cholesterin zu senken. Daraufhin entschließen Sie sich gemeinsam mit dem Patienten Atorvastatin zu versuchen. Welchen der folgenden Laborparameter müssen Sie regelmäßig am ehesten testen?',
    answers: [
      {
        answerText: 'Kreatinin im Blut',
        correct: false
      },
      {
        answerText: 'Aktivität der Alanin- und Aspartat-Aminotransferase',
        correct: true
      },
      {
        answerText: 'Plättchenkonzentration',
        correct: false
      },
      {
        answerText: 'Konzentration von roten Blutzellen',
        correct: false
      },
      {
        answerText: 'Harnsäurekonzentration',
        correct: false
      }
    ]
  },
  {
    questionText: 'Für welche der folgenden Substanzen ist am ehesten gezeigt worden, daß sie die Lebenserwartung von Patienten mit systolischer Herzinsuffizienz erhöhen obwohl die Substanz einen negativ inotropen Effekt hat?',
    answers: [
      {
        answerText: 'Carvedilol',
        correct: true
      },
      {
        answerText: 'Digoxin',
        correct: false
      },
      {
        answerText: 'Dobutamin',
        correct: false
      },
      {
        answerText: 'Enalapril',
        correct: false
      },
      {
        answerText: 'Furosemid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 9-jähriges Kind hat Lernschwierigkeiten in der Schule. Es hat immer wieder Anfälle von Bewußtlosigkeit mit Flattern der Augenlider (was etwa 5-10 Minuten dauert). Ein EEG (Elektro-Enzephalogramm) zeigt kurze 3 Hertz Spike-and-Wave-Komplexe synchron in allen Ableitungen. Welche Substanz ist am ehesten bei dem Kind wirksam, ohne allzu starke Sedation oder zu schnelle Toleranzentwicklung zu bedingen?',
    answers: [
      {
        answerText: 'Clonazepam',
        correct: false
      },
      {
        answerText: 'Diazepam',
        correct: false
      },
      {
        answerText: 'Ethosuximid',
        correct: true
      },
      {
        answerText: 'Gabapentin',
        correct: false
      },
      {
        answerText: 'Phenobarbital',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Bei chronischer Gabe der gesuchten Substanz zur Behandlung von Krampfanfällen findet man gehäuft unerwünschte Wirkungen wie vergröberte Gesichtsstrukturen, Hirsutismus und Gingivahyperplasie.',
    answers: [
      {
        answerText: 'Carbamazepin',
        correct: false
      },
      {
        answerText: 'Ethosuximid',
        correct: false
      },
      {
        answerText: 'Phenytoin',
        correct: true
      },
      {
        answerText: 'Tiagabin',
        correct: false
      },
      {
        answerText: 'Zonisamid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten sehr effektiv wirksam bei der notfallmäßigen Behandlung der malignen Hyperthermie?',
    answers: [
      {
        answerText: 'Atropin',
        correct: false
      },
      {
        answerText: 'Dantrolen',
        correct: true
      },
      {
        answerText: 'Haloperidol',
        correct: false
      },
      {
        answerText: 'Succinylcholin',
        correct: false
      },
      {
        answerText: 'Vecuronium',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 30-jähriger Patient wird aufgrund eines psychiatrischen Problems mit der gesuchten Substanz behandelt. Unter der Behandlung fühlt er sich emotional verflacht und ist öfter verwirrt. Er hat an Gewicht zugenommen und sein Sexualleben ist eingeschränkt. Sie sehen bei dem Gespräch, dass er einen Tremor in den Händen hat. Er sagt auf Nachfrage, daß er seit Therapiebeginn öfter als zuvor durstig ist und häufig urinieren muss. Welche Substanz hat der Patient am ehesten erhalten?',
    answers: [
      {
        answerText: 'Carbamazepin',
        correct: true
      },
      {
        answerText: 'Clozapin',
        correct: false
      },
      {
        answerText: 'Lithiumionen',
        correct: false
      },
      {
        answerText: 'Risperidon',
        correct: false
      },
      {
        answerText: 'Valproinsäure',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 27-jähriger Mann beschwert sich während der Visite bei Ihnen, dass er sich verlangsamt fühlt und einen bilateralen Tremor der Hand entwickelt hat, der schwächer wird, wenn er versucht eine Tasse Kaffee in die Hand zu nehmen. Der Mann leidet seit geraumer Zeit an einer paranoiden Schizophrenie und wird zurzeit ambulant therapiert. Die körperliche Untersuchung zeigt ein Zahnradphänomen an den Händen und einen unsicheren Gang. Welches der folgenden Medikamente zur Behandlung seiner Grunderkrankung könnte diese unerwünschten Wirkungen am ehesten hervorgerufen haben?',
    answers: [
      {
        answerText: 'Clozapin',
        correct: false
      },
      {
        answerText: 'Haloperidol',
        correct: true
      },
      {
        answerText: 'Metoclopramid',
        correct: false
      },
      {
        answerText: 'Olanzapin',
        correct: false
      },
      {
        answerText: 'Aripiprazol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 26-jährige Frau stellt sich Ihnen mit Amenorrhö und Galaktorrhö vor. Ihr Prolaktinwert ist stark erhöht und zwar liegt er bei 200 ng/ml (Labornormbereich 20 ng/ml). Welches der folgenden Medikamente ist am ehesten sinnvoll bei dieser Patientin mit Hyperprolaktinämie einzusetzen?',
    answers: [
      {
        answerText: 'Bromocriptin',
        correct: true
      },
      {
        answerText: 'Cimetidin',
        correct: false
      },
      {
        answerText: 'Ergotamin',
        correct: false
      },
      {
        answerText: 'Ketanserin',
        correct: false
      },
      {
        answerText: 'Sumatriptan',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Sie behandeln einen 51-jährigen Patienten der an Morbus Parkinson leidet mit einer Kombination von Levodopa und Carbidopa. Zusätzlich geben sie ihm in letzter Zeit noch niedrige Dosen von Tolcapon. Trotzdem hat er immer wieder Perioden von Akinesie. Die am ehesten einsetzbare Substanz bei diesem Patienten, um diese Akinesien zumindest kurzzeitig zu unterbrechen, ist',
    answers: [
      {
        answerText: 'Apomorphin.',
        correct: false
      },
      {
        answerText: 'Benzatropin.',
        correct: true
      },
      {
        answerText: 'Morphin.',
        correct: false
      },
      {
        answerText: 'Pramipexol.',
        correct: false
      },
      {
        answerText: 'Selegilin.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Patient reagiert auf seine Chemotherapie mit hämorrhagischer Zystitis. Welches der folgenden Zytostatika hat er am ehesten eingenommen?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: true
      },
      {
        answerText: 'Doxorubicin',
        correct: false
      },
      {
        answerText: 'Fluoruracil',
        correct: false
      },
      {
        answerText: 'Methotrexat',
        correct: false
      },
      {
        answerText: 'Tamoxifen',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Patient wird mit Cisplatin behandelt. Er hat jetzt typische gastrointestinale Störungen mit starkem Erbrechen unter dieser Substanz. Welches Medikament hätten Sie ihm prophylaktisch am ehesten geben sollen?',
    answers: [
      {
        answerText: 'Mesna',
        correct: false
      },
      {
        answerText: 'Methotrexat',
        correct: false
      },
      {
        answerText: 'Misoprostol',
        correct: false
      },
      {
        answerText: 'Ondansetron',
        correct: true
      },
      {
        answerText: 'Sucralfat',
        correct: false
      }
    ]
  },
  {
    questionText: 'Alle der folgenden Medikamente sind erfolgreich in der Chemotherapie von Brustkrebs eingesetzt worden. Welches Medikament aber ist am ehesten aktiv für eine besondere Sub-Gruppe von Patientinnen?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: false
      },
      {
        answerText: 'Doxorubicin',
        correct: false
      },
      {
        answerText: 'Fluoxymesteron',
        correct: false
      },
      {
        answerText: 'Methotrexat',
        correct: false
      },
      {
        answerText: 'Trastuzumab',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein 34 Jahre alter Patient hat von Ihnen Citalopram zur Behandlung einer Depression verschrieben bekommen, möchte aber die Substanz nicht mehr einnehmen. Als Sie ihn nach einer Begründung fragen, erklärt er, daß vor allem seine sexuelle Aktivität stark in Mitleidenschaft gezogen worden sei. Weiter sagt er, daß er auch mit dem Rauchen aufhören wolle. Welche Substanz wäre am ehesten bei diesem Patienten indiziert?',
    answers: [
      {
        answerText: 'Amitriptylin',
        correct: false
      },
      {
        answerText: 'Bupropion',
        correct: true
      },
      {
        answerText: 'Fluoxetin',
        correct: false
      },
      {
        answerText: 'Imipramin',
        correct: false
      },
      {
        answerText: 'Venlafaxin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welcher Stoff kann am ehesten die folgenden Symptome hervorrufen: Gingivitis, Verfärbung des Gaumens und Zahnausfall bei chronischer Anwendung?',
    answers: [
      {
        answerText: 'Arsen',
        correct: false
      },
      {
        answerText: 'Eisen',
        correct: false
      },
      {
        answerText: 'Quecksilber',
        correct: true
      },
      {
        answerText: 'Tetrachlorkohlenstoff',
        correct: false
      },
      {
        answerText: 'Thallium',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Patient kommt zu Ihnen und beklagt sich über Kopfschmerzen, chronische Müdigkeit, Appetitverlust und Verstopfung. Er hat eine kleine Schwäche der Extensoren in der oberen Extremität, sein Hämoglobin ist vermindert, das Koproporphyrin im Harn und auch die Delta-Aminolävulinsäure im Urin sind erhöht. Was ist die wahrscheinlichste Diagnose bei diesem Patienten?',
    answers: [
      {
        answerText: 'Arsenvergiftung',
        correct: false
      },
      {
        answerText: 'Hexanvergiftung',
        correct: false
      },
      {
        answerText: 'Vergiftung mit anorganischem Blei',
        correct: true
      },
      {
        answerText: 'Eisenvergiftung',
        correct: false
      },
      {
        answerText: 'Quecksilberchloridvergiftung',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 56-jährige Frau mit systemischen Lupus erythematodes wurde neun Monate lang mit pharmakologischen Dosen von Prednison behandelt. Ihre Krankheit geht in Remission und sie möchte langsam beginnen, Prednison abzusetzen. Warum darf man Prednison am ehesten nicht plötzlich absetzen, sondern nur langsam?wieder normalisiert.',
    answers: [
      {
        answerText: 'Um zu erreichen, daß sich die reduzierte Freisetzung von Insulin aus den Pankreaszellen',
        correct: false
      },
      {
        answerText: 'Damit die Hämatopoese im Knochenmark sich langsam wieder normalisiert.',
        correct: false
      },
      {
        answerText: 'Damit sich die Osteoblastenfunktion normalisiert.',
        correct: false
      },
      {
        answerText: 'Zur erleichterten Kontrolle von Vasopressin bei der Wasserexkretion.',
        correct: false
      },
      {
        answerText: 'Damit sich das hypothalamisch-hypophysäre Nebennierensystem wieder normalisieren kann.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Bei der akuten Behandlung eines Patienten der eine schwere Ketoazidose im Rahmen eines schlecht eingestellten Typ-1-Diabetes erlitten hat, haben Sie ihm Altinsulin parenteral gegeben. Was ist die häufigste und am ehesten lebensgefährliche Komplikation bei diesem Patienten?',
    answers: [
      {
        answerText: 'Eine durch Verdünnung hervorgerufene Hyponatriämie.',
        correct: false
      },
      {
        answerText: 'Eine Hypoglykämie.',
        correct: true
      },
      {
        answerText: 'Eine hohe Blutungsneigung.',
        correct: false
      },
      {
        answerText: 'Eine Pankreatitis.',
        correct: false
      },
      {
        answerText: 'Ein schwerer Hypertonus.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 53-jährige Frau hat vor kurzem die Diagnose Gicht-Arthritis erhalten. Man gibt ihr jetzt eine Substanz, die die Leukozytenmigration und Phagozytose als Folge einer Hemmung der Tubulin Polymerisation hemmt. Welche der folgenden Substanzen ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Indometacin',
        correct: false
      },
      {
        answerText: 'Prednison',
        correct: false
      },
      {
        answerText: 'Colchizin',
        correct: true
      },
      {
        answerText: 'Allopurinol',
        correct: false
      },
      {
        answerText: 'Probenezid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 34-jähige Frau geht zum Zahnarzt. Er will eine Wurzelbehandlung durchführen. Bevor er damit beginnt, spritzt der Zahnarzt der Patientin eine Mischung aus Lidocain und Adrenalin in die Nähe des Zahns. Die Adrenalin-induzierte verlängerte Wirkung des Lidocains beruht am ehesten auf der Aktivierung welches Rezeptors?',
    answers: [
      {
        answerText: 'β1',
        correct: false
      },
      {
        answerText: 'β2',
        correct: false
      },
      {
        answerText: 'β3',
        correct: false
      },
      {
        answerText: 'α1',
        correct: true
      },
      {
        answerText: 'α2',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 16-jähriges Mädchen wird mit Augentropfen behandelt, um eine augenärztliche Untersuchung durchzuführen. Nach 15 Minuten mißt die Augenärztin den Durchmesser der Pupillen und findet in der Tat eine Pupillenerweiterung jedoch keine messbaren Veränderungen der Beugung der Linsen und des intraokulären Drucks. Welche der folgenden Substanzen hat die Ärztin am ehesten in den Augentropfen gehabt?',
    answers: [
      {
        answerText: 'Phenylephrin',
        correct: true
      },
      {
        answerText: 'Timolol',
        correct: false
      },
      {
        answerText: 'Acetylcholin',
        correct: false
      },
      {
        answerText: 'Clonidin',
        correct: false
      },
      {
        answerText: 'Adrenalin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 72-jähriger Mann mit bekannter Prostatahyperplasie hat frei verkäufliche Nasentropfen zur Abschwellung der Nasenschleimhaut im Zuge einer Erkältung zu sich genommen. Jetzt kommt er zu Ihnen und beklagt sich über Dysurie. Welches Medikament in den Nasentropfen hat am ehesten zu diesen Beschwerden geführt?',
    answers: [
      {
        answerText: 'Fenoterol',
        correct: false
      },
      {
        answerText: 'Phenylephrin',
        correct: true
      },
      {
        answerText: 'Clonidin',
        correct: false
      },
      {
        answerText: 'Noradrenalin',
        correct: false
      },
      {
        answerText: 'Salmeterol',
        correct: false
      }
    ]
  },
  {
    questionText: 'An einem gesunden Probanden wurde ein neues Medikament, das auf adrenerge Rezeptoren wirkt, getestet. Es gelangt nicht durch die Blut-Hirn-Schranke. Folgende Veränderungen fielen auf: der mittlere arterielle Blutdruck fiel von 90 mmHg auf 80mm Hg, die Herzfrequenz stieg von 70 Schlägen/Minute auf 110 Schlägen/Minute, das Herzzeitvolumen stieg von 5,5 Liter/Minute auf 6,5 Liter/Minute, die kardiale Ejektionsfraktion stieg von 60 % auf 80 %. Welchem der folgenden Medikamente ähnelt das neue Medikament am ehesten?',
    answers: [
      {
        answerText: 'Salbutamol',
        correct: false
      },
      {
        answerText: 'Kokain',
        correct: false
      },
      {
        answerText: 'Orciprenalin',
        correct: true
      },
      {
        answerText: 'Noradrenalin',
        correct: false
      },
      {
        answerText: 'Phenylephrin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen erhöht am ehesten die Toxizität von Methotrexat, indem es seine renale Ausscheidung reduziert?',
    answers: [
      {
        answerText: 'Erythromycin',
        correct: false
      },
      {
        answerText: 'Fluoxetin',
        correct: false
      },
      {
        answerText: 'Ibuprofen',
        correct: true
      },
      {
        answerText: 'Lovastatin',
        correct: false
      },
      {
        answerText: 'Theophyllin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 51-jähriger Patient erhält eine intravenöse Infusion von Isoprenalin nach der Beendigung einer erfolgreichen Herztransplantation im OP. Welche der folgenden Veränderungen wird einige Minuten nach Beginn der Infusion am ehesten auftreten?',
    answers: [
      {
        answerText: 'Stimulation der Renin-Sekretion',
        correct: true
      },
      {
        answerText: 'Hemmung der Insulin-Freisetzung',
        correct: false
      },
      {
        answerText: 'Zunahme des gesamten peripheren Widerstandes',
        correct: false
      },
      {
        answerText: 'Reflextachykardie',
        correct: false
      },
      {
        answerText: 'Stimulation der Plättchenaggregation',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 44-jähriger Mann mit Typ-1-Diabetes will eine intensivierte Therapie durchführen. Das sollte seine Prognose verbessern. Für welche der folgenden unerwünschten Wirkungen birgt diese Vorgehensweise am ehesten ein erhöhtes Risiko?',
    answers: [
      {
        answerText: 'Visusverlust',
        correct: false
      },
      {
        answerText: 'Hypertonus',
        correct: false
      },
      {
        answerText: 'Nephropathie',
        correct: false
      },
      {
        answerText: 'Hypoglykämie',
        correct: true
      },
      {
        answerText: 'allergische Reaktionen',
        correct: false
      }
    ]
  },
  {
    questionText: 'Die Substanz ist am ehesten ein Hemmstoff der Aktivität eines Enzyms an der äußeren Oberfläche des intestinalen Epithels. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Tolbutamid',
        correct: false
      },
      {
        answerText: 'Pioglitazon',
        correct: false
      },
      {
        answerText: 'Glibenclamid',
        correct: false
      },
      {
        answerText: 'Miglitol',
        correct: true
      },
      {
        answerText: 'Repaglinid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 30-jähriger Mann ist ein Marathonläufer. Er nimmt seit seinem 20. Lebensjahr anabole Steroide, um seine sportliche Leistung zu verbessern. Das Risiko für welche unerwünschten Effekte erhöht der Mann am ehesten durch dieses Doping?',
    answers: [
      {
        answerText: 'Osteoporose',
        correct: false
      },
      {
        answerText: 'angioneurotisches Ödem',
        correct: false
      },
      {
        answerText: 'hämolytische Anämie',
        correct: false
      },
      {
        answerText: 'Lebertumore',
        correct: true
      },
      {
        answerText: 'Nierenversagen',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 59-jährige übergewichtige Frau stellt sich wegen kolikartiger Schmerzen im rechten Lumbalbereich in der Notaufnahme vor. Die Frau hat eine lange Anamnese von Osteoarthritis. Sie hat oft schwere arthritische Schmerzen, für die sie verschiedenste Schmerzmittel täglich über das gesamte vergangene Jahr eingenommen hat. Die gegenwärtige Medikation umfasst Atorvastatin und Ezetimib für eine bekannte Hyperlipidämie und Hydrochlorothiazid für einen milden Hypertonus. Sie machen eine Nierenbiopsie und der Pathologe bestätigt die Diagnose papillare Nekrose und tubulointerstitielle Entzündung der biopsierten Niere. Welche der folgenden Arzneimittel sind am ehesten für die Krankenhausaufnahme der Frau verantwortlich?',
    answers: [
      {
        answerText: 'Codein',
        correct: false
      },
      {
        answerText: 'Tramadol',
        correct: false
      },
      {
        answerText: 'Diclofenac',
        correct: true
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: false
      },
      {
        answerText: 'Atorvastatin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten eine Indikation für die Gabe von Interleukin 2?',
    answers: [
      {
        answerText: 'Graft-versus-host Reaktion bei Patienten mit hämatopoetischer Stammzelltransplantation',
        correct: false
      },
      {
        answerText: 'Psoriasis',
        correct: false
      },
      {
        answerText: 'Nierenzellkarzinom',
        correct: true
      },
      {
        answerText: 'rheumatoide Arthritis',
        correct: false
      },
      {
        answerText: 'oberflächliches Blasenkarzinom',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage in Bezug auf Barbiturate ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Eine Abhängigkeit von Phenobarbital ist bisher nicht beschrieben worden.',
        correct: false
      },
      {
        answerText: 'Alkalisierung des Harns beschleunigt die renale Elimination von Phenobarbital.',
        correct: true
      },
      {
        answerText: 'Barbiturate können die Halbwertszeit von Substanzen die in der Leber metabolisiert werden verlängern.',
        correct: false
      },
      {
        answerText: 'Verglichen mit Benzodiazepinen sind Barbiturate weniger toxisch.',
        correct: false
      },
      {
        answerText: 'Die Atemlähmung durch Überdosierung bedingt durch eine Barbituratvergiftung kann man mit Flumazenil wieder aufheben.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 52-jährige Frau leidet an schwerem Bronchialasthma. Kürzlich wurde bei ihr ein Offenwinkelglaukom diagnostiziert. Die Augenärztin hat eine entsprechende lokale Therapie verschrieben. Welche der folgenden Substanzen könnte am ehesten verschrieben worden sein?',
    answers: [
      {
        answerText: 'Carbachol',
        correct: true
      },
      {
        answerText: 'Adrenalin',
        correct: false
      },
      {
        answerText: 'Propranolol',
        correct: false
      },
      {
        answerText: 'Pilocarpin',
        correct: false
      },
      {
        answerText: 'Timolol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 42-jährige Frau klagt bei Ihnen über Muskelzittern, unregelmäßige Herzaktion und Angstgefühle. Bei der Frau hatten Sie vor einiger Zeit schweres Bronchialasthma festgestellt. Vor zwei Wochen haben Sie eine den Leitlinien entsprechende Therapie begonnen. Welche der Substanzen, die Sie der Patientin verschrieben haben, hat am ehesten die jetzigen Symptome hervorgerufen?',
    answers: [
      {
        answerText: 'Isoprenalin',
        correct: false
      },
      {
        answerText: 'Salmeterol',
        correct: true
      },
      {
        answerText: 'Propranolol',
        correct: false
      },
      {
        answerText: 'Dobutamin',
        correct: false
      },
      {
        answerText: 'Prazosin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 22-jährige Frau, bei der man vor kurzem eine mildes persistierendes Asthma festgestellt hat, wird behandelt mit Salbutamol nach Bedarf und oralem Zileuton. Welche der folgenden molekularen Mechanismen vermittelt am ehesten den therapeutischen Effekt des Zileutons bei der Krankheit der Frau?',
    answers: [
      {
        answerText: 'Aktivierung von β2-Rezeptoren',
        correct: false
      },
      {
        answerText: 'Hemmung 5-Lipoxygenase',
        correct: true
      },
      {
        answerText: 'kompetitive Blockade von Leukotrien-Rezeptoren',
        correct: false
      },
      {
        answerText: 'Hemmung von Cyclooxygenase 2',
        correct: false
      },
      {
        answerText: 'kompetitive Blockade von muscarinischen M3-Rezeptoren',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 24-jähriger Mann wird ins Krankenhaus aufgenommen wegen eines schweren Erythems, das ein paar Minuten nach einem Sonnenbad auftrat. Er sagte, früher habe er das Problem beim Sonnenbaden nicht gehabt, aber vor drei Tagen habe er ein Antibiotikum eingenommen für eine nicht-gonokokkale Urethritis. Welches der folgenden Antibiotika hat am ehesten das Erythem des Mannes hervorgerufen?',
    answers: [
      {
        answerText: 'Cefotetan',
        correct: false
      },
      {
        answerText: 'Gentamycin',
        correct: false
      },
      {
        answerText: 'Metronidazol',
        correct: false
      },
      {
        answerText: 'Doxycyclin',
        correct: true
      },
      {
        answerText: 'Amoxicillin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 36-jährige Frau wird wegen chronischer myeloischer Leukämie behandelt. Sie nehmen sie wieder in Ihr Krankenhaus auf, weil sie sich über Fieberanfälle, reduzierten Allgemeinzustand und Unwohlsein beklagt. Sie machen eine Blutkultur und finden in der Gram-Färbung gram-negative Bazillen. Sie stellen die initiale Diagnose Bakteriämie und halten parenterale Antibiotika für indiziert. In der Krankenakte finden Sie, dass die Patientin vor sechs Monaten einen urtikariellen Ausschlag, Blutdruckabfall und Atembeschwerden nach oraler Gabe von Penicillin V hatte. Aufgrund dessen ist jetzt am ehesten eine empirische Therapie sinnvoll mit',
    answers: [
      {
        answerText: 'Aztreonam',
        correct: true
      },
      {
        answerText: 'Ceftriaxon',
        correct: false
      },
      {
        answerText: 'Meropenem',
        correct: false
      },
      {
        answerText: 'Oxacillin',
        correct: false
      },
      {
        answerText: 'Tricarcillin und Clavulansäure',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 10-jähriger Junge wird in die Notaufnahme gebracht mit der Einweisungsdiagnose bakterielle Meningitis. Weitere Untersuchungen bestätigen es als Meningokokken-Meningitis. Das gesuchte Medikament wurde prophylaktisch allen Personen im Krankenhaus, die mit dem Jungen in Berührung gekommen waren verordnet. Ferner sagte man dem weiblichen Krankenhauspersonal das hormonale Kontrazeptiva nicht wirksam seien, wenn sie mit dieser Substanz zusammen genommen werden, weil die gesuchte Substanz die Plasmakonzentration von Östrogen und Progestin auf unwirksame Werte senkt. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Ceftriaxon',
        correct: true
      },
      {
        answerText: 'Ciprofloxacin',
        correct: false
      },
      {
        answerText: 'Erythromycin',
        correct: false
      },
      {
        answerText: 'Ketoconazol',
        correct: false
      },
      {
        answerText: 'Rifampicin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 33-jährige Frau wird ins Krankenhaus aufgenommen wegen einer erhöhten Körpertemperatur von 39,7 °C und Schüttelfrost. Sie ist mental verwirrt, erbricht, hat Durchfall. Vor einer Woche ist sie aus einem Urlaub aus Zentralafrika zurückgekommen. Eine Giemsa-Färbung bestätigt die Diagnose Plasmodium falciparum-bedingte Malaria. Weil die Frau aus einer Region mit Multi-drug resistenten Stämmen von dem Erreger kommt, wird eine parenterale Chinidinbehandlung begonnen. Welche der folgenden Substanzen kann man am ehesten zusätzlich geben?',
    answers: [
      {
        answerText: 'Imipenem',
        correct: false
      },
      {
        answerText: 'Azithromycin',
        correct: false
      },
      {
        answerText: 'Doxycyclin',
        correct: true
      },
      {
        answerText: 'Gentamicin',
        correct: false
      },
      {
        answerText: 'Piperacillin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 49-jährige Frau hat vor kurzem die Diagnose Harnwegsinfekt bekommen und wird mit einer Kombination von Trimethoprim und Sulfamethoxazol behandelt. Normalerweise soll man Medikamente nicht kombinieren, sondern initial eine Monotherapie versuchen. Warum beginnt man bei diesen Medikamenten gleich mit einer dualen Therapie?',
    answers: [
      {
        answerText: 'Um die Biotransformation der Medikamente zu verringern',
        correct: false
      },
      {
        answerText: 'Um das Risiko allergischer Reaktionen zu reduzieren.',
        correct: false
      },
      {
        answerText: 'Um die Compliance des Patienten zu verbessern.',
        correct: false
      },
      {
        answerText: 'Um einen bakteriziden Effekt zu erzielen, der mit der Monotherapie nicht erzielbar ist.',
        correct: true
      },
      {
        answerText: 'Um eine längere Wirkungsdauer von Sulfamethoxazol zu erreichen.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 60-jähriger Patient stellt sich bei Ihnen mit starkem Thoraxschmerz vor. Vor allem treten die Schmerzen bei kaltem Wetter auf dem Weg bergauf zu seiner Wohnung auf. Der Schmerz geht in Ruhe weg. Sie besprechen mit ihm die Diagnose und mögliche medikamentöse Behandlungsoptionen. Gemeinsam entschließen sie sich zur Gabe von Nitroglyzerin. Welche der folgenden Wirkungen tritt am ehesten unter therapeutischer Dosierung von Nitroglyzerin auf und kommt entweder direkt oder indirekt zustande?',
    answers: [
      {
        answerText: 'Senkung der Herzfrequenz',
        correct: false
      },
      {
        answerText: 'Senkung der venösen Kapazität',
        correct: true
      },
      {
        answerText: 'Zunahme der Nachlast (Afterload)',
        correct: false
      },
      {
        answerText: 'Erhöhung der Herzkraft',
        correct: false
      },
      {
        answerText: 'Erhöhung der diastolischen Wandspannung des Herzens',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 52-jähriger Mann mit einer langen Anamnese von chronisch obstruktiver Lungenerkrankung hat sich bei ihnen vorgestellt und Sie diagnostizieren Vorhofflimmern. Welche der folgenden Substanzen wäre am ehesten als Antiarrhythmikum geeignet?',
    answers: [
      {
        answerText: 'Amiodaron',
        correct: false
      },
      {
        answerText: 'Verapamil',
        correct: true
      },
      {
        answerText: 'Nifedipin',
        correct: false
      },
      {
        answerText: 'Lidocain',
        correct: false
      },
      {
        answerText: 'Sotalol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie behandeln einen Patienten für einige Monate mit Nitroglyzerin aufgrund seiner Angina-pectoris-Anfälle. Jetzt stellt er sich Ihnen erneut vor und möchte ein Mittel haben, das zur Vorbeugung und Unterdrückung von Angina-pectoris-Anfällen geeignet ist. Welche der folgenden Substanzen würden Sie ihm am ehesten verschreiben wollen?',
    answers: [
      {
        answerText: 'Nitroprussid',
        correct: false
      },
      {
        answerText: 'Esmolol',
        correct: true
      },
      {
        answerText: 'sublinguale Gabe von Isosorbiddinitrat',
        correct: false
      },
      {
        answerText: 'sublinguale Gabe von Nitroglyzerin',
        correct: false
      },
      {
        answerText: 'Verapamil',
        correct: true
      }
    ]
  },
  {
    questionText: 'Eine 45-jährige Frau behandeln Sie seit einigen Jahren wegen ihrer Migränekopfschmerzen. Jetzt kommt sie zu Ihnen wegen einer Angina pectoris. Welches der folgenden Substanzen, die man zur Behandlung der Angina pectoris theoretisch einsetzen könnte, wäre bei ihr aufgrund der Migränekopfschmerzen am ehesten kontraindiziert?',
    answers: [
      {
        answerText: 'Amlodipin',
        correct: false
      },
      {
        answerText: 'Amlodipin',
        correct: false
      },
      {
        answerText: 'Metoprolol',
        correct: false
      },
      {
        answerText: 'Nitroglyzerin',
        correct: true
      },
      {
        answerText: 'Verapamil',
        correct: false
      }
    ]
  },
  {
    questionText: 'Man kombiniert zur Behandlung einer Angina pectoris häufig verschiedene Nitrate mit weiteren Substanzgruppen, wie β-Blockern und Calciumantagonisten. In welcher Kombination gibt es nur additive Wirkungen?',
    answers: [
      {
        answerText: 'β-Blocker und Nitrate auf den enddiastolischen kardialen Durchmesser',
        correct: false
      },
      {
        answerText: 'β-Blocker und Nitrate auf die Herzfrequenz',
        correct: false
      },
      {
        answerText: 'β-Blocker und Nitrate auf den venösen Tonus',
        correct: true
      },
      {
        answerText: 'Calciumantagonisten und β-Blocker auf die Kontraktionskraft',
        correct: false
      },
      {
        answerText: 'Calciumantagonisten und Nitrate auf die Herzfrequenz',
        correct: false
      }
    ]
  },
  {
    questionText: 'Einige Substanzen sollten bei Patienten nicht verwendet werden, die aufgrund einer Angina pectoris mit Nitraten behandelt werden. Der Grund besteht in einem möglicherweise tödlichen Abfall des Blutdruckes. Welche der folgenden Substanzen interagieren am ehesten mit Nitraten, wie Nitroglyzerin, indem sie den Metabolismus von cGMP hemmen?',
    answers: [
      {
        answerText: 'Atenolol',
        correct: false
      },
      {
        answerText: 'Hydralazin',
        correct: false
      },
      {
        answerText: 'Isosorbidmononitrat',
        correct: false
      },
      {
        answerText: 'Nifedipin',
        correct: false
      },
      {
        answerText: 'Sildenafil',
        correct: true
      }
    ]
  },
  {
    questionText: 'Eine 51-jährige Frau kommt in die Klinik mit einer einmonatigen Anamnese von Herzrhythmusstörungen, Schlaflosigkeit, Nervosität, Abgespanntheit, Durchfall und Hitzeintoleranz. Die körperliche Untersuchung zeigt Hyperreflexie und milden Tremor. Der Blutdruck ist 160/60 mmHg und die Herzfrequenz 95 Schläge/Minute. Welche Substanz würden Sie der Patientin in diesem Zusammenhang am ehesten verschreiben?',
    answers: [
      {
        answerText: 'Salbutamol',
        correct: false
      },
      {
        answerText: 'Propranolol',
        correct: true
      },
      {
        answerText: 'Labetalol',
        correct: false
      },
      {
        answerText: 'Prazosin',
        correct: false
      },
      {
        answerText: 'Phenoxybenzamin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 65-jähriger Mann mit kürzlich diagnostizierter Prostatahyperplasie erhält von Ihnen eine Verschreibung von Prazosin (1 Tablette einmal täglich). Vor welcher fast sicher auftretenden unerwünschten Wirkung, welche vor allem in den ersten Tagen auftritt, müssen Sie den Patienten deshalb waren?',
    answers: [
      {
        answerText: 'Mydriasis',
        correct: false
      },
      {
        answerText: 'Miktionsstörungen',
        correct: false
      },
      {
        answerText: 'blasse, kalte Haut',
        correct: false
      },
      {
        answerText: 'Bronchokonstriktion',
        correct: false
      },
      {
        answerText: 'Ohnmachtsgefühle beim schnellen Aufstehen aus dem Bett',
        correct: true
      }
    ]
  },
  {
    questionText: 'Eine 51-jährige Frau, die an Typ-2-Diabetes leidet, kommt in die Notaufnahme mit seit kurzem bestehenden Schmerzen im Auge. Das Auge ist gerötet mit eingeschränkter Sicht. Sie hat farbige Halluzinationen und muß Erbrechen. Notfallmäßig machen Sie eine Ophthalmoskopie und sehen eine Entzündung der vorderen Kammer des Auges. Eine Tonometrie des rechten Auges findet einen Druck von 48 mmHg (normal bis 20 mmHg). Sie stellen die Diagnose akuter Glaukomanfall. Sie instillieren zwei Substanzen in die Konjunktivalsack. Eine andere Substanz geben Sie 15 Minuten über denselben Applikationsweg. Welche der folgenden Substanzkombinationen sollten Sie am ehesten nehmen?',
    answers: [
      {
        answerText: 'Timolol, Apraclonidin und Pilocarpin',
        correct: true
      },
      {
        answerText: 'Homatropin, Carbachol, und Timolol',
        correct: false
      },
      {
        answerText: 'Scopolamin, Dorzolamid und Phenylephrin',
        correct: false
      },
      {
        answerText: 'Homatropin, Carbachol und Dorzolamid',
        correct: false
      },
      {
        answerText: 'Prazosin, Physostigmin und Mannitol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 77-jährige Frau hat erhöhten intraokulären Druck bei einer Routineuntersuchung. Anamnetisch stellt sich heraus, daß sie seit kurzem eine Reihe von anti-muscarinischen Medikamenten bekommt, um eine Blasenhyperreflexie zu behandeln. Sie erklären ihr, daß Sie glauben, der erhöhte Augeninnendruck sei eine unerwünschte Wirkung dieser Medikationen. Was ist wahrscheinlich der zugrundeliegende Mechanismus?',
    answers: [
      {
        answerText: 'Relaxation des Ziliarmuskels.',
        correct: true
      },
      {
        answerText: 'Zunahme der Augenwasserproduktion.',
        correct: false
      },
      {
        answerText: 'Erweiterung der Gefäße des Ziliarkörpers.',
        correct: false
      },
      {
        answerText: 'Relaxation der radialen Muskeln in der Iris.',
        correct: false
      },
      {
        answerText: 'Verminderter Ausfluss von Augenflüssigkeit.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 43-Jähriger Mann wird nach einem Autounfall in die Notaufnahme gebracht. Er hat nur kleine Verletzungen, ist aber sehr ängstlich und aufgeregt. Anamnestisch litt der Patient an Epilepsie und wurde seit mehreren Jahren bis jetzt einschließlich mit Phenobarbital behandelt. Der Arzt in der Notaufnahme gibt intravenös eine sedative Substanz. Nach einigen Minuten wird der Patient zyanotisch und apnoeisch. Der Blutdruck ist nur 100/55 mmHg. Welche Substanz ist am ehesten vom Notarzt gespritzt worden?',
    answers: [
      {
        answerText: 'Buspiron',
        correct: false
      },
      {
        answerText: 'Haloperidol',
        correct: false
      },
      {
        answerText: 'Diazepam',
        correct: true
      },
      {
        answerText: 'Fluoxetin',
        correct: false
      },
      {
        answerText: 'Thiopental',
        correct: false
      }
    ]
  },
  {
    questionText: 'Die gesuchte Substanz hat eine hohe Affinität, aber keine intrinsische Aktivität an Opioid-Rezeptoren?',
    answers: [
      {
        answerText: 'Loperamid',
        correct: false
      },
      {
        answerText: 'Methadon',
        correct: false
      },
      {
        answerText: 'Morphin',
        correct: false
      },
      {
        answerText: 'Naloxon',
        correct: true
      },
      {
        answerText: 'Tramadol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 78-jähriger Mann leidet an einem metastasierenden HNO-Karzinom. Er hat die charakteristischen stecknadelgroßen Pupillen nach einer subkutanen Infusion von Morphin in einer tragbaren Pumpe. Die Stimulation welches Gehirnareals ist am ehesten für diesen Effekt verantwortlich?',
    answers: [
      {
        answerText: 'Locus caeruleus',
        correct: false
      },
      {
        answerText: 'Nucleus ambiguus',
        correct: false
      },
      {
        answerText: 'Edinger-Westphal nucleus',
        correct: true
      },
      {
        answerText: 'Area postrema',
        correct: false
      },
      {
        answerText: 'Nucleus accumbens',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 57-jähriger Mann ist Alkoholiker mit einer schweren Leberzirrhose und wird auf Ihre allgemeine Notaufnahme und später aufgrund von zweiwöchigem Blutstuhl mit rotem Blut auf die Intensivstation gebracht. Die Ösophagoskopie zeigt drei große Varizen im unteren Ösophagusbereich mit Zeichen kürzlicher Blutungen. Sie führten eine Therapie mit einer Substanz aus, die den portalen Druck reduzieren sollte. Welche der folgenden Substanzen haben Sie am ehesten gegeben?',
    answers: [
      {
        answerText: 'Salbutamol',
        correct: false
      },
      {
        answerText: 'Propranolol',
        correct: true
      },
      {
        answerText: 'α-Methyldopa',
        correct: false
      },
      {
        answerText: 'Clonidin',
        correct: false
      },
      {
        answerText: 'Prazosin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Frau Müller, eine 62-jährige Patientin, ist von Ihnen aufgrund eines Kolonkarzinoms operiert worden. Technisch lief die Operation zufriedenstellend. Nach vier Tagen hat die Patientin immer noch keine Darmbewegungen. Sie sprechen deshalb von einem Ileus und wollen diesen durch intramuskuläre Injektion von Neostigmin behandeln. Durch Stimulation welcher Rezeptoren ist der erwünschte therapeutische Effekt am ehesten erklärbar?',
    answers: [
      {
        answerText: 'Stimulation von N-Cholinozeptoren und M2-Cholinozeptoren.',
        correct: false
      },
      {
        answerText: 'Stimulation von nikotinischen und M3-cholinergen Rezeptoren.',
        correct: true
      },
      {
        answerText: 'Stimulation von β2- und M3-cholinergen Rezeptoren.',
        correct: false
      },
      {
        answerText: 'Stimulation von nikotinischen, cholinergen und α1-Rezeptoren.',
        correct: false
      },
      {
        answerText: 'Stimulation von β2-Adrenozeptoren und N-cholinergen Rezeptoren.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 43-jähriger Mann kommt zur Aufnahme zur radiologischen Untersuchung seines Kolons ins Krankenhaus. Er erhält zur Vorbereitung intramuskulär eine Injektion von Scopolamin, um den Darm zu relaxieren. Welche unerwünschte Wirkung kann der Patient am ehesten innerhalb von Minuten entwickeln?',
    answers: [
      {
        answerText: 'Salivation',
        correct: false
      },
      {
        answerText: 'abdominale Schmerzen',
        correct: false
      },
      {
        answerText: 'Rhythmusstörungen',
        correct: true
      },
      {
        answerText: 'Priapismus',
        correct: false
      },
      {
        answerText: 'Harninkontinenz',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 71-jähriger Mann klagt über Müdigkeit, Atemlosigkeit und Erschöpfung. Vor vier Jahren ist eine totale Gastrektomie wegen fortgeschrittenen Zollinger-Ellison Syndrom durchgeführt worden. Eine Blutanalyse zeigte eine Megaloblastenanämie. Welche der folgenden Aussagen erklärt am ehesten, warum eine Folsäuregabe bei diesem Mann eher kontraindiziert ist?',
    answers: [
      {
        answerText: 'Die Substanz würde die Zeichen eines Vitamin B12-Mangel verschleiern.',
        correct: false
      },
      {
        answerText: 'Die Substanz hemmt die Vitamin B12-Wirkung im zentralen Nervensystem.',
        correct: false
      },
      {
        answerText: 'Die Substanz kann den Metabolismus von Vitamin B12 erhöhen.',
        correct: true
      },
      {
        answerText: 'Ältere Patienten sind besonders geneigt Folsäure schlecht zu vertragen.',
        correct: false
      },
      {
        answerText: 'Eine Gastrektomie hemmt vollständig die Folsäureaufnahme.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 62-jähriger Mann klagt über epigastrische Schmerzen. Der Mann hat mehrere Tabletten Ibuprofen eingenommen. Er habe diese jeden Tag an den letzten zwei Wochen aufgrund von arthritischen Schmerzen eingenommen. Eine Endoskopie zeigt zwei oberflächliche Geschwüre in der Nähe des Antrums des Magens. Verstärkte Sekretion im Magen von welcher der folgenden Verbindungen hat am ehesten zu der Erkrankung des Mannes beigetragen?',
    answers: [
      {
        answerText: 'Gastrin',
        correct: false
      },
      {
        answerText: 'Salzsäure',
        correct: true
      },
      {
        answerText: 'Bicarbonatsekretion',
        correct: false
      },
      {
        answerText: 'gastrischer Mukus',
        correct: false
      },
      {
        answerText: 'Cholecystokinin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 77-jähriger Mann hat von Ihnen Ipratropiumbromid per Inhalation verschrieben bekommen zur Behandlung einer chronisch obstruktiven Lungenerkrankung. Er ist langjähriger Raucher. Kurz nachdem er mit dem Inhalator die Substanz zu sich genommen hat, sprüht er aus Versehen auch etwas in sein Gesicht. Was wird am ehesten als unerwünschte Wirkung von ihm berichtet werden?',
    answers: [
      {
        answerText: 'starke Inkontinenz',
        correct: false
      },
      {
        answerText: 'Schläfrigkeit',
        correct: false
      },
      {
        answerText: 'Salivation',
        correct: false
      },
      {
        answerText: 'AV-Block',
        correct: false
      },
      {
        answerText: 'Akkomodationsschwierigkeiten',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen blockiert am ehesten die letzten zwei Schritte in der Synthese von Tetrahydrofolsäure?',
    answers: [
      {
        answerText: 'Ciprofloxacin',
        correct: false
      },
      {
        answerText: 'Metronidazol',
        correct: false
      },
      {
        answerText: 'Sulfadiazin',
        correct: false
      },
      {
        answerText: 'Sulfamethoxazol',
        correct: false
      },
      {
        answerText: 'Trimethoprim',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche Substanz ist am ehesten gemeint? Resistenz gegenüber dieser Substanz beruht möglicherweise auf einer Hemmung der DNA-Gyrase.',
    answers: [
      {
        answerText: 'Ciprofloxacin',
        correct: true
      },
      {
        answerText: 'Metronidazol',
        correct: false
      },
      {
        answerText: 'Sulfadiazin',
        correct: false
      },
      {
        answerText: 'Sulfamethoxazol',
        correct: false
      },
      {
        answerText: 'Trimethoprim',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 64-jähriger Mann wird ins Krankenhaus aufgenommen wegen einer dreitägigen Anamnese mit Fieber, Thoraxschmerzen, Husten, Übelkeit, Erbrechen und Durchfall. Der Mann ist starker Raucher. In der Anamnese ergibt sich weiterhin, dass er vor kurzem eine Operation an der Prostata hatte und Makrolidantibiotika nicht verträgt. Der Blutdruck ist 135/80 mmHg, Puls 50 Schläge/Minute, Atemfrequenz 16 Züge/Minute und die Körpertemperatur beträgt 38,8 °C. Ein Röntgen-Thorax zeigte fleckige Infiltrate im unteren linken Lungenlappen. Die Urinuntersuchung zeigt eine Mikrohämaturie. Welches der folgenden Medikamente sollte der Mann jetzt am ehesten erhalten?',
    answers: [
      {
        answerText: 'Vancomycin',
        correct: false
      },
      {
        answerText: 'Gentamicin',
        correct: false
      },
      {
        answerText: 'Piperacillin',
        correct: false
      },
      {
        answerText: 'Ciprofloxacin',
        correct: true
      },
      {
        answerText: 'Erythromycin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 47-jähriger Mann wird ins Krankenhaus aufgenommen mit 39,5 °C Körpertemperatur, schweren Kopfschmerzen, Schwäche im rechten Arm und Bein und zunehmender Schläfrigkeit. Anamnestisch litt der Mann an chronischen Sinusitiden, die mit verschiedenen Medikamenten behandelt worden sind. Die letzte Sinusitis trat vor einem Monat auf und schien vollständig mit Clindamycinbehandlung abzuheilen. Ein CT des Kopfes zeigt eine linksfrontale Läsion mit einem kleinen Umgebungsödem. Sie stellen die Diagnose Hirnabzeß und der Neurochirurg macht eine stereotaktische Aspiration des Abszeßes unter Lokalanästhesie. Welches der folgenden Antibiotika würde man in der initialen post-chirurgischen Therapie des Mannes am ehesten geben?',
    answers: [
      {
        answerText: 'Amikacin',
        correct: false
      },
      {
        answerText: 'Metronidazol',
        correct: true
      },
      {
        answerText: 'Erythromycin',
        correct: false
      },
      {
        answerText: 'Aztreonam',
        correct: false
      },
      {
        answerText: 'Vancomycin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 66-jährige Frau wird nach einem Autounfall in die Notaufnahme gebracht. Ihr linkes Bein muss operiert werden. Bei der Aufnahme hatte sie Gentamicin bekommen wegen eines infizierten Harntraktes, Timolol und Latanoprost zur Therapie ihres Glaukoms und Lovastatin gegen eine Hypercholesterinämie. Die Allgemeinanästhesie wurde mit Thiopental eingeleitet, erhalten mit Isofluran und Stickstoffmonoxid. Zusätzlich gab man ihr Vecuronium. Welches der folgenden Medikamente der Patientin wird die Wirkung von Vecuronium verstärken können?',
    answers: [
      {
        answerText: 'Gentamicin',
        correct: false
      },
      {
        answerText: 'Timolol',
        correct: true
      },
      {
        answerText: 'Latanoprost',
        correct: false
      },
      {
        answerText: 'Lovastatin',
        correct: false
      },
      {
        answerText: 'Stichstoffmonoxid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 12-jähriger Junge, bei dem vor kurzem eine akute lymphatische Leukämie diagnostiziert wurde, erhält eine Behandlung mit mehreren Substanzen, die auch Prednison umschließt. Der therapeutische Effekt dieser Substanz ist sehr wahrscheinlich über Medikament-Rezeptorkomplexe vermittelt, die an welche der folgenden molekularen Strukturen am ehesten binden?',
    answers: [
      {
        answerText: 'Eine finale Sequenz auf der Peptidyl-RNA.',
        correct: false
      },
      {
        answerText: 'Spezifische Nukleotidsequenzen auf der DNA.',
        correct: false
      },
      {
        answerText: 'Finale Sequenzen an der ribosomalen RNA.',
        correct: false
      },
      {
        answerText: 'Phospholipase A2',
        correct: true
      },
      {
        answerText: 'Cyclooxygenase 2',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 25-jährige Frau stellt sich in der gynäkologischen Ambulanz vor. Die Diagnose vaginale Candida-Infektion wird gestellt. Anamnestisch ergibt sich, daß die Frau wegen einer Akne seit zwei Monaten das gesuchte Antibiotikum eingenommen hat. Welches der folgenden Antibiotika, das die Candida-Infektion wahrscheinlicher gemacht hat, hat diese Frau zu sich genommen?',
    answers: [
      {
        answerText: 'Cefazolin',
        correct: false
      },
      {
        answerText: 'Amikacin',
        correct: false
      },
      {
        answerText: 'Aztreonam',
        correct: false
      },
      {
        answerText: 'Fluconazol',
        correct: false
      },
      {
        answerText: 'Tetrazyklin',
        correct: true
      }
    ]
  },
  {
    questionText: 'Einem 25-jährigen Mann, bei dem vor kurzen eine Akne im Gesicht, Rücken und auf dem Thorax festgestellt wurde, wurde Tetrazyklin verschrieben. Der Dermatologe sagte, der Mann solle Milch und Milchprodukte vor der Einnahme des Medikamentes vermeiden. Warum hat der Dermatologe diese Aussage am ehesten gemacht?',
    answers: [
      {
        answerText: 'Weil es sonst zu verminderter Bindung von Tetrazyklin an bakterielle Ribosomen kommt.',
        correct: false
      },
      {
        answerText: 'Weil die Toxizität von Tetrazyklin sonst erhöht wird.',
        correct: false
      },
      {
        answerText: 'Weil die Elimination von Tetrazyklin sonst beschleunigt wird.',
        correct: false
      },
      {
        answerText: 'Weil das Tetrazyklin sonst schlechter in das Innere der Bakterien hineingelangt.',
        correct: false
      },
      {
        answerText: 'Weil die orale Bioverfügbarkeit von Tetrazyklin vermindert wird.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Substanzen ist am ehesten ein Pro-Drug und wird von den Bakterien selbst aktiviert?',
    answers: [
      {
        answerText: 'Ciprofloxacin',
        correct: false
      },
      {
        answerText: 'Metronidazol',
        correct: false
      },
      {
        answerText: 'Sulfadiazin',
        correct: true
      },
      {
        answerText: 'Sulfamethoxazol',
        correct: false
      },
      {
        answerText: 'Trimethoprim',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 59-jähriger Mann klagt über Hautjucken am ganzen Körper. Vor zwei Wochen hatte er eine antibiotische Therapie wegen einer akuten Pharyngitis begonnen. Die körperliche Untersuchung zeigt einen diffusen makulopapulären Ausschlag. Welche der folgenden Substanzen kann am ehesten die Dermatitis des Mannes erklären?',
    answers: [
      {
        answerText: 'Aztreonam',
        correct: false
      },
      {
        answerText: 'Piperacillin',
        correct: true
      },
      {
        answerText: 'Trimethoprim-Sulfamethoxazol',
        correct: false
      },
      {
        answerText: 'Vancomycin',
        correct: false
      },
      {
        answerText: 'Gentamicin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 50-jähriger übergewichtiger Mann klagt über einen starken Schmerz in seiner linken Wade. Anamnestisch hat er seit einer Woche ein Medikament gegen akute Prostatitis genommen. Die körperliche Untersuchung zeigt, daß eine Achillessehnenruptur vorliegt. Welche der folgenden Medikamente hat der Mann am ehesten eingenommen?',
    answers: [
      {
        answerText: 'Ampicillin',
        correct: false
      },
      {
        answerText: 'Doxycyclin',
        correct: false
      },
      {
        answerText: 'Ceftriaxon',
        correct: false
      },
      {
        answerText: 'Erythromycin',
        correct: false
      },
      {
        answerText: 'Ciprofloxacin',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein Patient kommt zu Ihnen mit bekannter Angina pectoris. Sie haben ihm bisher Nitrate verschrieben. Jetzt möchte der Patient zusätzlich eine Substanz zur Prophylaxe von Angina -pectoris-Anfällen bekommen. Sie verschreiben ihm Metoprolol. Worauf beruht bei diesem Patienten am ehesten die erwünschte antianginöse Wirkung von Metoprolol?',
    answers: [
      {
        answerText: 'Blockade einer belastungsbedingten Tachykardie',
        correct: true
      },
      {
        answerText: 'Senkung des enddiastolischen ventrikulären Volumens',
        correct: false
      },
      {
        answerText: 'erhöhtes Doppelprodukt aus Kraft und Frequenz',
        correct: false
      },
      {
        answerText: 'erhöhte ventrikuläre Kontraktionskraft (positiv inotroper Effekt)',
        correct: false
      },
      {
        answerText: 'verminderte ventrikuläre Ejektionszeit',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen haben Theophyllin, Nitroglyzerin und Isoprenalin, obwohl sie gänzlich verschiedene Wirkungsmechanismen haben, als gemeinsame physiologische Wirkung?',
    answers: [
      {
        answerText: 'direkte Erhöhung der Kontraktionskraft (positive inotroper Effekt)',
        correct: false
      },
      {
        answerText: 'Tachykardie',
        correct: true
      },
      {
        answerText: 'Bronchodilatation',
        correct: false
      },
      {
        answerText: 'starker Blutdruckabfall nach dem Aufstehen (posturale Hypotension)',
        correct: false
      },
      {
        answerText: 'starke, vaskulär bedingte Kopfschmerzen',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches ist am ehesten keine unerwünschte Wirkung von Chloroquin bei Malaria?',
    answers: [
      {
        answerText: 'Magen-Darm-Störungen',
        correct: false
      },
      {
        answerText: 'Porphyrie',
        correct: true
      },
      {
        answerText: 'Hautausschläge',
        correct: false
      },
      {
        answerText: 'Schwarzwasserfieber (intravaskuläre Hämolyse)',
        correct: false
      },
      {
        answerText: 'Kopfschmerzen',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 7-jähriges Kind kommt in die Notaufnahme. Anamnestisch ist bekannt, daß es eine Bienengiftallergie hat. Jetzt ist es vor kurzem von drei Bienen gestochen worden. Welches der folgenden Medikamente stellt am ehesten die richtige sofortige Behandlung der Wahl bei diesem Kind dar?',
    answers: [
      {
        answerText: 'Diphenhydramin',
        correct: false
      },
      {
        answerText: 'Ephedrin',
        correct: false
      },
      {
        answerText: 'Adrenalin',
        correct: true
      },
      {
        answerText: 'Isoprenalin',
        correct: false
      },
      {
        answerText: 'Dexamethason',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie nehmen einen Patienten wegen Verdacht auf Medikamentenüberdosierung in die Notaufnahme auf. Er präsentiert sich mit einer massiven Hypotension und schwerer Bradykardie. Es ist bekannt, daß dem Patienten vorher Medikamente sowohl gegen einen Hypertonus als auch gegen Angina pectoris verschrieben worden sind. Welches der hierfür in Frage kommenden Medikamente könnte am ehesten bei Überdosierung diese massive Bradykardie hervorrufen?',
    answers: [
      {
        answerText: 'Amlodipin',
        correct: false
      },
      {
        answerText: 'Isosorbiddinitrat',
        correct: false
      },
      {
        answerText: 'Nitroglyzerin',
        correct: false
      },
      {
        answerText: 'Prazosin',
        correct: false
      },
      {
        answerText: 'Verapamil',
        correct: true
      }
    ]
  },
  {
    questionText: 'Für welche der folgenden Substanzen ist am ehesten gezeigt worden, daß sie die Lebenserwartung von Patienten mit systolischer Herzinsuffizienz erhöht, obwohl die Substanz einen negativ inotropen Effekt hat?',
    answers: [
      {
        answerText: 'Carvedilol',
        correct: true
      },
      {
        answerText: 'Digoxin',
        correct: false
      },
      {
        answerText: 'Dobutamin',
        correct: false
      },
      {
        answerText: 'Enalapril',
        correct: false
      },
      {
        answerText: 'Furosemid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 23-jährige schwangere Frau wird von Ihnen betreut. Bei ihr ist eine Anämie aufgetreten. Sie ist im 4. Monat der Schwangerschaft und hat keine Anämie in der Geschichte – nur Ihr Großvater hatte eine perniziöse Anämie. Sie hat jetzt einen Hämoglobinwert von 10 g/dl (Normalwert lt. Labor 12-16 g/dl). Falls diese Frau eine makrozytäre Anämie hat, eine Zunahme der Serumkonzentration von Transferrin und eine normale Serumkonzentration von Vitamin B12, der Mangel an welcher der folgenden Substanzen wäre dann die wahrscheinlichste Ursache für ihre Symptome?',
    answers: [
      {
        answerText: 'Cobalamin',
        correct: false
      },
      {
        answerText: 'Erythropoietin',
        correct: false
      },
      {
        answerText: 'Folsäure',
        correct: true
      },
      {
        answerText: 'intrinsischer Faktor',
        correct: false
      },
      {
        answerText: 'Eisen',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen beschleunigt am ehesten die Umwandlung von Plasminogen zu Plasmin?',
    answers: [
      {
        answerText: 'Epsilon-Aminocapronsäure',
        correct: false
      },
      {
        answerText: 'Heparin',
        correct: false
      },
      {
        answerText: 'Argatroban',
        correct: false
      },
      {
        answerText: 'Reteplase',
        correct: true
      },
      {
        answerText: 'Phenprocoumon',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 24-jährige Frau hat sich einer Nierentransplantation unterzogen. Nach einer Woche entwickelte sie eine akute Abwehrreaktion vom humoralen Typ. Sie wird erfolgreich mit Tacrolimus und dem gesuchten Immunsuppressivum behandelt. Welche der folgenden Substanzen ist am ehesten das gesuchte Immunsuppressivum, welches die Funktion von B- und T-Lymphozyten wohl mittels Hemmung der Aktivität von Inosin-monophosphat-Dehydrogenase reduziert?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: false
      },
      {
        answerText: 'Methotrexat',
        correct: false
      },
      {
        answerText: 'Mycophenolat-Mofetil',
        correct: true
      },
      {
        answerText: 'Prednison',
        correct: false
      },
      {
        answerText: 'Tacrolimus',
        correct: false
      }
    ]
  },
  {
    questionText: 'Man verwendet manchmal Finasterid, um eine androgene Alopezie zu verlangsamen oder zu verhindern. Wodurch kommt diese erwünschte Wirkung des Finasterids am ehesten zustande?',
    answers: [
      {
        answerText: 'Durch kompetitiven Antagonsimus an Androgenrezeptoren.',
        correct: false
      },
      {
        answerText: 'Durch Hemmung der Freisetzung von Gonadotropinen.',
        correct: false
      },
      {
        answerText: 'Durch Erhöhung der Serumkonzentrationen von geschlechtshormonbindenden Globulinen.',
        correct: false
      },
      {
        answerText: 'Durch Hemmung der Synthese von Testosteron.',
        correct: false
      },
      {
        answerText: 'Durch Verminderung der Produktion von Dihydrotestosteron.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Einer Ihrer Kommilitonen plant einen Gewaltaufstieg eines hohen Berges in den Anden. Er wird keine Zeit haben, sich lang an die Höhe zu akklimatisieren. Welche Substanz können Sie ihm am ehesten empfehlen, um sich vor dem Entstehen der Höhenkrankheit zu schützen?',
    answers: [
      {
        answerText: 'Amilorid',
        correct: false
      },
      {
        answerText: 'Desmopressin',
        correct: false
      },
      {
        answerText: 'Furosemid',
        correct: false
      },
      {
        answerText: 'Acetazolamid',
        correct: true
      },
      {
        answerText: 'Demeclocyclin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie nehmen einen 5-jährigen Jungen in die Klinik auf. Bei der körperlichen Untersuchung notieren Sie kutane Xanthome und lassen deshalb die Fettwerte untersuchen. Es kommt dabei ein Gesamtcholesteringehalt des Serums des Kindes mit 936 mg/dl zurück. Nach weiteren Untersuchungen stellen Sie die Diagnose homozygote familiäre Hypercholesterinämie: ein nicht funktionierender LDL-Rezeptor ist die Ursache. Welches der folgenden Medikamente wäre zumindest als Monotherpie am wenigsten wirksam, um das Cholesterin bei diesem Kind zu senken, weil das Medikament auf einen funktionierenden LDL-Rezeptor angewiesen ist?',
    answers: [
      {
        answerText: 'Atorvastatin',
        correct: false
      },
      {
        answerText: 'Ezetimib',
        correct: false
      },
      {
        answerText: 'Niazin (=Niacin)',
        correct: false
      },
      {
        answerText: 'Mipomersen',
        correct: false
      },
      {
        answerText: 'PCSK9-Hemmer Alirocumab',
        correct: true
      }
    ]
  },
  {
    questionText: 'Typischerweise gibt man Patienten, die Zytostatika erhalten, zusätzlich noch Filgrastim (G-CSF: Granulozyten-stimulierender Faktor). Was verspricht man sich am ehesten davon?',
    answers: [
      {
        answerText: 'Unterdrückung von allergischen Reaktionen',
        correct: false
      },
      {
        answerText: 'Verhinderung der Ausbildung eines Zweittumors',
        correct: false
      },
      {
        answerText: 'Verhinderung übermäßigen Blutens',
        correct: false
      },
      {
        answerText: 'Verhinderung einer zellulären Hypoxie in gesunden Geweben',
        correct: false
      },
      {
        answerText: 'Hemmung von systemischen Infektionen',
        correct: true
      }
    ]
  },
  {
    questionText: 'Unter chronischem Alkoholkonsum kann es zur Leberschädigung kommen. Diese Leberschädigung kann zu erhöhter Empfindlichkeit des Patienten gegenüber Paracetamol führen. Was ist der am ehesten zugrunde liegende Mechanismus?',
    answers: [
      {
        answerText: 'Bei Leberzirrhose ist der Metabolismus von Paracetamol gehemmt.',
        correct: true
      },
      {
        answerText: 'Bei Alkoholismus kommt es zu Thiaminmangel.',
        correct: false
      },
      {
        answerText: 'Bei Alkoholismus wird Paracetamol leichter von der Bindung an Plasmaproteine gelöst.',
        correct: false
      },
      {
        answerText: 'Alkohol bedingt eine Induktion der Paracetamol-abbauenden Enzyme und damit die vermehrte Bildung toxischer Metabolite des Paracetamols in der Leber.',
        correct: false
      },
      {
        answerText: 'Chronische Alkoholgabe hemmt die renale Clearance von Paracetamol stark.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Der antiepileptische Effekt von Carbamazepin beruht am ehesten auf',
    answers: [
      {
        answerText: 'der Hemmung von Natriumionenkanälen.',
        correct: true
      },
      {
        answerText: 'der Hemmung von Calciumionenkanälen.',
        correct: false
      },
      {
        answerText: 'der Erleichterung der Wirkung von GABA an Chloridionenkanälen.',
        correct: false
      },
      {
        answerText: 'dem Antagonismus an Glutamatrezeptoren.',
        correct: false
      },
      {
        answerText: 'der Hemmung der Aktivität der GABA-Transaminase.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 27-jähriger Mann wurde beim Wandern durch die Innenstadt halb angezogen aufgegriffen. Er beklagte sich, Stimmen zu hören. Seine Gedanken schienen bizarr. Nach Einweisung in eine psychiatrische Abteilung wurde er aggressiv. Er drohte den Krankenpflegern mit körperlicher Gewalt. Sie planen jetzt eine Therapie, die unter anderem die parenterale Gabe der gesuchten Substanz umfaßt. Welche Substanz würden Sie am ehesten geben?',
    answers: [
      {
        answerText: 'Lithium',
        correct: false
      },
      {
        answerText: 'Diphenhydramin',
        correct: false
      },
      {
        answerText: 'Risperidon',
        correct: true
      },
      {
        answerText: 'Fluoxetin',
        correct: false
      },
      {
        answerText: 'Zolpidem',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 32-jährige Frau wird in das Krankenhaus gebracht, nachdem sie bewußtlos im Stadtpark an einem heißen Sommertag gefunden wurde. Die Frau wird stationär in der psychiatrischen Klinik Ihres Unikrankenhauses seit einem Jahr behandelt. Sie hat eine Anamnese einer chronischen psychiatrischen Erkrankung, die sich in letzter Zeit stark verbessert hat. Deshalb durfte sie außerhalb des Krankenhauses im Stadtpark zwei Stunden pro Tag joggen. Ihre Rektaltemperatur war, als sie im Stadtpark aufgefunden wurde, 40,6°C und Sie machen die Diagnose eines Hitzeschlags. Welche der folgenden Substanzen, die zur Therapie der psychiatrischen Krankheit der Patientin im Prinzip sinnvoll wäre, könnte am ehesten zu dem Hitzeschlag bei der Patientin beigetragen haben?',
    answers: [
      {
        answerText: 'Amitriptylin',
        correct: false
      },
      {
        answerText: 'Clozapin',
        correct: true
      },
      {
        answerText: 'Buspiron',
        correct: false
      },
      {
        answerText: 'Diazepam',
        correct: false
      },
      {
        answerText: 'Fluoxetin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 37-jährige Frau kommt ins Krankenhaus, nachdem sie ihren Nachbarn angegriffen hatte. Sie zeigt jetzt einen akut psychotischen Zustand und hat zwei Krankenpfleger angegriffen. Sie wissen, daß die Patientin seit ihrem 22. Lebensjahr zusätzlich immer wieder tonisch-klonische Krämpfe erlitten hat. Sie hat aber ihre antiepileptischen Tabletten vor zwei Monaten abgesetzt, weil sie seit drei Monaten anfallsfrei war. Was für eine Kombinationstherapie sollte man ihr jetzt am ehesten geben, um beide Grundkrankheiten zu behandeln?',
    answers: [
      {
        answerText: 'Haloperidol und Clonazepam',
        correct: false
      },
      {
        answerText: 'Fluphenazin und Lamotrigin',
        correct: true
      },
      {
        answerText: 'Clozapin und Ethosuximid',
        correct: false
      },
      {
        answerText: 'Thioridazin und Ethosuximid',
        correct: false
      },
      {
        answerText: 'Fluphenazin und Phenobarbital',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine zuvor gesunde 40-jährige Frau leidet mit einem Mal unter einem Mangel an Koordination und Handbewegungen, die nicht rhythmisch sind. Ferner leidet sie an der fälschlichen Vorstellung, sie werde verfolgt. Sie hat anamnetisch keine neurologischen oder psychiatrischen Vorerkrankungen. Obwohl weitere diagnostische Untersuchungen nötig sein werden, ist allein aus der Anamnese sehr wahrscheinlich, daß ihr Verfolgungswahn am ehesten mit welcher der folgenden Substanzen sinnvoll behandelt werden kann?',
    answers: [
      {
        answerText: 'Amantadin',
        correct: false
      },
      {
        answerText: 'Bromocriptin',
        correct: false
      },
      {
        answerText: 'Diazepam',
        correct: false
      },
      {
        answerText: 'Haloperidol',
        correct: true
      },
      {
        answerText: 'Levodopa',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 30-jähriger Patient ist von Ihnen mit akuter Schizophrenie diagnostiziert worden und Sie haben die Therapie mit Benperidol begonnen. Jetzt stellt er sich wieder vor und klagt über Muskelkrämpfe. Sie sehen einen Torticollis spasticus. Wie können Sie dem Patienten am ehesten schnell helfen?',
    answers: [
      {
        answerText: 'Zusätzliche Injektion von Risperidon.',
        correct: false
      },
      {
        answerText: 'Absetzung von Benperidol.',
        correct: false
      },
      {
        answerText: 'Orale Gabe von Diphenhydramin.',
        correct: false
      },
      {
        answerText: 'Umsetzen des Patienten auf intravenöses Fluphenazin.',
        correct: false
      },
      {
        answerText: 'Injektion von Benzatropin.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein 42-jähriger Mann leidet an einer allgemeinen Angststörung. Sie haben ihm erst Sertralin verschrieben. Wegen sexueller Dysfunktion nach Sertralin haben Sie sich entschieden, jetzt auf Alprazolam umzustellen. Welche der folgenden molekularen Wirkungen an neuronalen Membranen werden am ehesten für die therapeutischen Wirkungen der Substanz Alprazolam bei diesem Patienten verantwortlich gemacht?',
    answers: [
      {
        answerText: 'Verminderter Auswärtsstrom von Natrium.',
        correct: false
      },
      {
        answerText: 'Erhöhter Einwärtsstrom von Chlorid.',
        correct: true
      },
      {
        answerText: 'Verminderter Auswärtsstrom von Kalium.',
        correct: false
      },
      {
        answerText: 'Erhöhter Einwärtsstrom von Calcium.',
        correct: false
      },
      {
        answerText: 'Erhöhter Einwärtsprotonenstrom.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Um bei der Therapie von Brustkrebs wirksam zu sein, muss Tamoxifen durch das Cytochrom CYP2D6 in seine Wirkform überführt werden. Es ist also ein Prodrug. Es sind Fälle beschrieben worden, bei denen die Behandlung des Brustkrebs durch Tamoxifen nicht funktioniert hat, weil welche der folgenden Substanzen am ehesten gleichzeitig gegeben wurde und die Bildung des aktiven Metaboliten von Tamoxifen stark vermindert hatte?',
    answers: [
      {
        answerText: 'Amitriptylin',
        correct: true
      },
      {
        answerText: 'Bupropion',
        correct: false
      },
      {
        answerText: 'Fluoxetin',
        correct: false
      },
      {
        answerText: 'Mirtazapin',
        correct: false
      },
      {
        answerText: 'Moclobemid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Die gesuchte Substanz hemmt die Phosphodiesterase 3 (oder römisch III genannt) und bedingt zusätzlich noch eine periphere Vasodilatation. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Furosemid',
        correct: false
      },
      {
        answerText: 'Losartan',
        correct: false
      },
      {
        answerText: 'Milrinon',
        correct: true
      },
      {
        answerText: 'Sildenafil',
        correct: false
      },
      {
        answerText: 'Propranolol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Der chronische Gebrauch dieses Aldosteron-Antagonisten kann die Mortalität von Patienten mit schwerer Herzinsuffizienz reduzieren. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Losartan',
        correct: false
      },
      {
        answerText: 'Milrinon',
        correct: false
      },
      {
        answerText: 'Finasterid',
        correct: false
      },
      {
        answerText: 'Flutamid',
        correct: false
      },
      {
        answerText: 'Eplerenon',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche Substanz kann am ehesten die Parasympathikus-Aktivität aus dem zentralen Nervensystem in kardial relevanter Weise erhöhen?',
    answers: [
      {
        answerText: 'Captopril',
        correct: false
      },
      {
        answerText: 'Digoxin',
        correct: true
      },
      {
        answerText: 'Dobutamin',
        correct: false
      },
      {
        answerText: 'Furosemid',
        correct: false
      },
      {
        answerText: 'Losartan',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 44-jähriger Mann beklagt sich bei seiner Ärztin über Müdigkeit, Nervosität und Angespanntheit. Er hat häufig Magenprobleme und Durchfall. Er verneint, in der Vergangenheit oder Gegenwart Probleme mit illegalen Drogen oder Alkohol gehabt zu haben. In der Anamnese fällt die Angabe zu einem mit Omeprazol behandelten Magengeschwür und einer Myasthenia gravis, die mit Neostigmin behandelt wird, auf. Nach weiteren klinischen Untersuchungen stellt man die Diagnose einer generalisierten Angststörung und eine adäquate Therapie wird begonnen. Welches der folgenden Medikamente ist am ehesten relativ kontraindiziert als Mittel gegen die Angststörung bei diesem Patienten?',
    answers: [
      {
        answerText: 'Venlafaxin',
        correct: false
      },
      {
        answerText: 'Buspiron',
        correct: false
      },
      {
        answerText: 'Paroxetin',
        correct: false
      },
      {
        answerText: 'Diazepam',
        correct: true
      },
      {
        answerText: 'Sertralin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Patient ist mit einer Intoxikation durch Theophyllin aufgenommen worden. Er hat einer Tachykardie, Erbrechen, niedrigen Blutdruck und überschießende Reflexe. Welches kurzzeitwirksame Antidot wäre zur Behandlung seiner Tachykardie am ehesten geeignet?',
    answers: [
      {
        answerText: 'Acetylcystein',
        correct: false
      },
      {
        answerText: 'Deferoxamin',
        correct: false
      },
      {
        answerText: 'Esmolol',
        correct: true
      },
      {
        answerText: 'Fomepizol',
        correct: false
      },
      {
        answerText: 'Pralidoxim',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Arbeiter in der Landwirtschaft war zufällig auf dem Feld, als Parathion (=Organophosphat) aus der Luft versprüht wurde. Er wurde jetzt in die Notaufnahme gebracht. Welche der folgenden Möglichkeiten ist am ehesten die Therapie der Wahl bei diesem Patienten?',
    answers: [
      {
        answerText: 'antiepileptische Substanzen',
        correct: false
      },
      {
        answerText: 'Atropin und Pralidoxim',
        correct: true
      },
      {
        answerText: 'Hämodialyse',
        correct: false
      },
      {
        answerText: 'hyperbarer Sauerstoff',
        correct: false
      },
      {
        answerText: 'Maßnahmen, um Lungenödeme zu reduzieren',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Kind kommt in Ihre Notaufnahme. Es hat im Urlaub im fernen Ausland eine schwere perorale Bleivergiftung erlitten und zeigt Zeichen einer Enzephalopathie. Welches Arzneimittel sollten Sie dem Kind am ehesten geben?',
    answers: [
      {
        answerText: 'Acetylcystein',
        correct: false
      },
      {
        answerText: 'Deferoxamin',
        correct: false
      },
      {
        answerText: 'Ethylendiamin-Tetra-Essigsäure Salz',
        correct: false
      },
      {
        answerText: 'Penicillamin',
        correct: true
      },
      {
        answerText: 'Succimer',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 55-jähriger Mann beklagt sich bei Ihnen über einen kutanen Ausschlag, den er seit dem vorherigen Tag an Thorax und Beinen hat. Man hatte bei diesem Patienten vor einiger Zeit eine Hyperurikämie diagnostiziert und hat diese seit zwei Wochen mit Allopurinol behandelt. Sie glauben, daß der Patient den Ausschlag aufgrund des Allopurinols hat und geben stattdessen Probenecid. Sie müssen dem Patienten darauf hinweisen, daß er welche der folgenden Substanzen zur Zeit am ehesten nicht neu einnehmen sollte, weil dann mit zusätzlichen unerwünschten Arzneimittelwirkungen typischerweise gerechnet werden müßte?',
    answers: [
      {
        answerText: 'Paracetamol',
        correct: false
      },
      {
        answerText: 'Ibuprofen',
        correct: false
      },
      {
        answerText: 'Phenylephrin',
        correct: false
      },
      {
        answerText: 'Acetylsalicylsäure',
        correct: true
      },
      {
        answerText: 'Diphenhydramin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist kein Neurotransmitter im zentralen Nervensystem?',
    answers: [
      {
        answerText: 'Acetylcholin',
        correct: false
      },
      {
        answerText: 'zyklisches AMP',
        correct: true
      },
      {
        answerText: 'Dopamin',
        correct: false
      },
      {
        answerText: 'Glycin',
        correct: false
      },
      {
        answerText: 'Substanz P',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Eine wichtige Wirkung von Insulin ist',
    answers: [
      {
        answerText: 'die vermehrte Umwandlung von Aminosäuren in Glukose.',
        correct: false
      },
      {
        answerText: 'die vermehrte Gluconeogenese.',
        correct: false
      },
      {
        answerText: 'der vermehrte Glukose-Einwärtstransport in Zellen.',
        correct: true
      },
      {
        answerText: 'die Hemmung der Lipoproteinlipase.',
        correct: false
      },
      {
        answerText: 'die Stimulation der Glykogenolyse.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Was ist ein Zeichen bzw. Symptom einer chronischen Gabe von zu hohen Dosierungen von exogen zugegebenemT4 bei einem Patienten?',
    answers: [
      {
        answerText: 'Bradykardie',
        correct: false
      },
      {
        answerText: 'trockene Haut',
        correct: false
      },
      {
        answerText: 'große Zunge und hängende Augenlider',
        correct: false
      },
      {
        answerText: 'Lethargie und Schläfrigkeit',
        correct: false
      },
      {
        answerText: 'Gewichtsverlust',
        correct: true
      }
    ]
  },
  {
    questionText: 'Eine 27-jährige Frau hat sich einer Thyreoidektomie unterzogen. Sie behandeln sie mit Levothyroxin. Welches Hormon wird in den peripheren Geweben produziert, wenn Sie der Patientin Levothyroxin geben?',
    answers: [
      {
        answerText: 'Methimazol',
        correct: false
      },
      {
        answerText: 'T3',
        correct: true
      },
      {
        answerText: 'T4',
        correct: false
      },
      {
        answerText: 'TSH',
        correct: false
      },
      {
        answerText: 'FSH',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen betrachtet man am ehesten als selektiven α-Adrenozeptor-Agonisten?',
    answers: [
      {
        answerText: 'Isoprenalin',
        correct: false
      },
      {
        answerText: 'α-Methyldopa',
        correct: true
      },
      {
        answerText: 'Noradrenalin',
        correct: false
      },
      {
        answerText: 'Phenylephrin',
        correct: false
      },
      {
        answerText: 'Salmeterol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie wollen eine 54-jährige Frau behandeln, die zum ersten Mal mit einem frühen Stadium der rheumatoiden Arthritis zu Ihnen kommt. Sie überlegen ihr Celecoxib zu verschreiben. Welche der folgenden anamnestischen Information würde Sie am ehesten davon abbringen der Patientin Celecoxib zu verordnen?',
    answers: [
      {
        answerText: 'anamnestisch Alkoholabusus bekannt',
        correct: false
      },
      {
        answerText: 'anamnestisch Gicht bekannt',
        correct: false
      },
      {
        answerText: 'anamnestisch Zustand nach Myokardinfarkt und weiter bestehender Angina pectoris',
        correct: true
      },
      {
        answerText: 'anamnestisch Osteoporose bekannt',
        correct: false
      },
      {
        answerText: 'anamnestisch Zustand nach behandelten Duodenalulzera',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten ein nicht selektiver β-Rezeptor-Agonist?',
    answers: [
      {
        answerText: 'Salmeterol',
        correct: false
      },
      {
        answerText: 'Clonidin',
        correct: false
      },
      {
        answerText: 'Dopamin',
        correct: false
      },
      {
        answerText: 'Isoprenalin',
        correct: true
      },
      {
        answerText: 'α-Methyldopa',
        correct: false
      }
    ]
  },
  {
    questionText: 'Tieren wurde intramuskulär Propranolol gegeben. Nach einer Stunde erhielt jedes identisch behandelte Tier eine Substanz mit Wirkung auf das autonome Nervensystem. Welche der folgenden Medikamenten-induzierten Effekte wurde am wahrscheinlichsten durch die Vorbehandlung mit Propranolol vermindert?',
    answers: [
      {
        answerText: 'Isoprenalin-induzierte Hyperglykämie',
        correct: true
      },
      {
        answerText: 'Nikotin-induzierte Abnahme der Durchblutung der Haut',
        correct: false
      },
      {
        answerText: 'Noradrenalin-induzierte Reflexbradykardie',
        correct: false
      },
      {
        answerText: 'Phenylephrin-induzierte Mydriasis',
        correct: false
      },
      {
        answerText: 'Pilocarpin-induzierte Kontraktion der Bronchialmuskultur',
        correct: false
      }
    ]
  },
  {
    questionText: 'Clarithromycin und Erythromycin sind sich chemisch sehr ähnlich. Klinisch ist der am ehesten relevante Vorteil von Clarithromyin welcher?',
    answers: [
      {
        answerText: 'Das Cytochrom P450-System in der Leber wird überhaupt nicht gehemmt.',
        correct: false
      },
      {
        answerText: 'Es kann bei einmaliger Gabe Mykoplasmeninfektionen aufheben.',
        correct: false
      },
      {
        answerText: 'Es ist wirksamer als Erythromycin gegen Helicobacter pylori.',
        correct: true
      },
      {
        answerText: 'Es ist wirksam gegen methicillin-resistente Stämme von Staphylokokken.',
        correct: false
      },
      {
        answerText: 'Es ist wirksam gegen Stämme von Streptokokken die resistent gegenüber Erythromycin sind.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie stellen eine Patientin mit stattgefundener venöser Thrombose zuerst auf Enoxaparin ein und stellen sie dann auf Phenprocoumon um. Zwei Wochen später kommt sie mit starken Nasenblutungen in die Klinik. Sie bestimmen die INR zu 7,0. Um eine weitere Blutung zu verhindern müssten Sie Phenprocoumon absetzen: Womit müssten Sie die Patientin alternativ zusätzlich am ehesten behandeln?',
    answers: [
      {
        answerText: 'Aminocapronsäure',
        correct: false
      },
      {
        answerText: 'Desmopressin',
        correct: false
      },
      {
        answerText: 'Faktor VIII',
        correct: false
      },
      {
        answerText: 'Protamin',
        correct: false
      },
      {
        answerText: 'Vitamin K1',
        correct: true
      }
    ]
  },
  {
    questionText: 'Sie stellen eine Patientin mit stattgefundener venöser Thrombose zuerst auf Enoxaparin ein und stellen sie dann auf Phenprocoumon um. Zwei Wochen später kommt sie mit starken Nasenblutungen in die Klinik. Sie bestimmen die INR zu 7,0. Um eine weitere Blutung zu verhindern müssten Sie Phenprocoumon absetzen. Welche der folgenden Substanzen sollten Sie am ehesten vermeiden?',
    answers: [
      {
        answerText: 'Colestyramin',
        correct: false
      },
      {
        answerText: 'Ezetimib',
        correct: true
      },
      {
        answerText: 'Fenofibrat',
        correct: false
      },
      {
        answerText: 'Niacin',
        correct: false
      },
      {
        answerText: 'Pravastatin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der unten aufgeführten Substanzen hemmt die Thromboxansynthese viel effektiver als die Prostacyclinsynthese?',
    answers: [
      {
        answerText: 'Acetylsalicylsäure',
        correct: true
      },
      {
        answerText: 'Hydrocortison',
        correct: false
      },
      {
        answerText: 'Ibuprofen',
        correct: false
      },
      {
        answerText: 'Indometacin',
        correct: false
      },
      {
        answerText: 'Zileuton',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie wollen einen 82-jährigen verwirrten und deliranten Patienten behandeln. Sie finden in der zerebrospinalen Flüssigkeit Listeria monocytogenes. Was ist am ehesten die adäquate Behandlung?',
    answers: [
      {
        answerText: 'Ampicillin',
        correct: true
      },
      {
        answerText: 'Cefoxitin',
        correct: false
      },
      {
        answerText: 'Ceftriaxon',
        correct: false
      },
      {
        answerText: 'Fosfomycin',
        correct: false
      },
      {
        answerText: 'Vancomycin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Der Wirkungsmechanismus welcher der folgenden Substanzen beruht am ehesten auf der Bildung von Poren in der Zellmembran der zu behandelnden Zellen?',
    answers: [
      {
        answerText: 'Caspofungin',
        correct: false
      },
      {
        answerText: 'Flucytosin',
        correct: false
      },
      {
        answerText: 'Griseofulvin',
        correct: false
      },
      {
        answerText: 'Nystatin',
        correct: true
      },
      {
        answerText: 'Terbinafin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Nachdem Sie ihre Patientin mit nicht -steroidalen Antiphlogistika und Methotrexat aufgrund der rheumatoiden Arthritis behandelt haben, sehen Sie im Röntgenbild zunehmende eine Zerstörung der Gelenke in einigen Fingern. Sie überlegen sich jetzt eine Substanz der zweiten Wahl zu verschreiben. Die gesuchte Substanz zeichnet sich durch einen Antagonismus gegenüber dem Tumornekrosefaktor α aus. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Cyclosporin',
        correct: false
      },
      {
        answerText: 'Etanercept',
        correct: true
      },
      {
        answerText: 'Penicillamin',
        correct: false
      },
      {
        answerText: 'Phenylbutazon',
        correct: false
      },
      {
        answerText: 'Sulfasalazin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage über die antibakterielle Wirkung von Amikazin trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Seine antibakterielle Wirksamkeit ist reduziert in Gegenwart von Penicillin.',
        correct: false
      },
      {
        answerText: 'Seine antibakterielle Wirkung ist nicht konzentrationsabhängig.',
        correct: false
      },
      {
        answerText: 'Seine antibakterielle Wirkung ist typischerweise zeitabhängig.',
        correct: true
      },
      {
        answerText: 'Seine antibakterielle Wirkung ist direkt proportional zur Dauer der Zeit in der die Plasmakonzentration höher als die minimale Hemmkonzentration ist.',
        correct: false
      },
      {
        answerText: 'Die Substanz hat noch einen antibakteriellen Effekt auch dann wenn seine Plasmakonzentration unter messbare Konzentrationen gefallen ist.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage zur Toxizität der Aminoglykoside ist am ehesten zutreffend?',
    answers: [
      {
        answerText: 'Gentamycin und Tobramycin rufen am wenigsten wahrscheinlich Nierenschädigungen hervor.',
        correct: false
      },
      {
        answerText: 'Die Ototoxizität durch Amikazin und Gentamycin umschließt auch eine vestibuläre Dysfunktion und ist oft irreversibel.',
        correct: true
      },
      {
        answerText: 'Die Ototoxizität wird reduziert durch gleichzeitige Einnahme von Furosemid.',
        correct: false
      },
      {
        answerText: 'Verminderte Blut-Kreatininspiegel sind ein frühes Zeichen der Aminoglykosidnephrotoxizität.',
        correct: false
      },
      {
        answerText: 'Hautveränderungen sind sehr selten nach topischer Anwendung von Neomycin.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 44-jährige Frau leidet an rheumatoider Arthritis. Kürzlich wurde ihr zusätzlich Leflunomid zu Methotrexat verschrieben. Welche Enzymhemmung trägt am ehesten zur erwünschten therapeutischen Wirkung dieser Substanz bei dieser Patientin bei?',
    answers: [
      {
        answerText: 'Cyclooxygenase-1',
        correct: false
      },
      {
        answerText: 'Typ II Topoisomerase',
        correct: false
      },
      {
        answerText: 'Dihydrofolat-Reduktase',
        correct: true
      },
      {
        answerText: 'Dihydroorotat-Dehydrogenase',
        correct: false
      },
      {
        answerText: 'Reverse Transkriptase',
        correct: false
      }
    ]
  },
  {
    questionText: 'In die Notaufnahme wird ein 13-jähriger Junge mit bekanntem Typ-1-Diabetes gebracht. Ihm ist sehr schwindelig. Die Laborbefunde zeigen eine Hyperglykämie, Azidose und einen pH-Wert im Blut von 7,15. Welche der folgenden therapeutischen Maßnahmen ist notfallmäßig als erstes durchzuführen?',
    answers: [
      {
        answerText: 'Gabe von Altinsulin',
        correct: true
      },
      {
        answerText: 'Gabe von Glibenclamid',
        correct: false
      },
      {
        answerText: 'Gabe von Insulin glargin',
        correct: false
      },
      {
        answerText: 'Gabe von NPH Insulin',
        correct: false
      },
      {
        answerText: 'Gabe von Tolbutamid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 39-jährige Frau beklagte sich bei ihrem Arzt über Gelenkschmerzen, die letzten Monat schlechter geworden sind. Die Schmerzen waren am Morgen am schlimmsten und beeinträchtigten sie bei ihrer Arbeit und im Haushalt. Sie hatte Ibuprofen 3 x täglich zwei Wochen lang versucht aber hatte wenig Linderung erfahren. Sie hat die Tabletten abgesetzt, weil sie epigastrische Schmerzen bekam. Weiter ist anamnestisch bekannt, daß die Patientin an Hepatitis B leidet und gegenwärtig mit Lamivudin behandelt wird. Bei der körperlichen Untersuchung fühlt sich die Patientin unwohl. Ihre Armgelenke, die Metacarpophalangealgelenke und die Knie zeigten bilaterale symmetrische Schwellung, Schmerzhaftigkeit und Erwärmung. Weitere Untersuchungen bestätigten die Verdachtsdiagnose und eine Pharmakotherapie wurde verschrieben. Welches der folgenden Medikamente sollte diese Patientin am ehesten bekommen haben?',
    answers: [
      {
        answerText: 'Methotrexat',
        correct: true
      },
      {
        answerText: 'Acetylsalicylsäure',
        correct: false
      },
      {
        answerText: 'Etanercept',
        correct: false
      },
      {
        answerText: 'Piperacillin',
        correct: false
      },
      {
        answerText: 'Ciprofloxacin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Bei einem 32-jährigen Mann wurde eine rheumatoide Arthritis diagnostiziert. Er hat jetzt zwei Monate Methotrexat eingenommen. Zum Anfang wurde die Krankheit zwar kontrolliert, aber der Schmerz ist wieder aufgetreten. Seine Rheumatologin entschließt sich eine weitere Substanz zusätzlich zu geben. Diese gesuchte zweite Substanz ist am ehesten ein rekombinantes Fusionsprotein bestehend aus einem extrazellulären Teil von zwei Tumornekrosefaktor-Rezeptorbestandteilen. Es handelt am ehesten um welche Substanz?',
    answers: [
      {
        answerText: 'Infliximab',
        correct: false
      },
      {
        answerText: 'Etanercept',
        correct: true
      },
      {
        answerText: 'Leflunomid',
        correct: false
      },
      {
        answerText: 'Triamcinolon',
        correct: false
      },
      {
        answerText: 'Cyclosporin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Patient hat eine heterozygote familiäre Hypercholesterinämie. Gleichzeitig ist bei ihm Gicht bekannt. Welche der folgenden Substanzen würde die Symptomatik Gicht am ehesten weiter verschlechtern?',
    answers: [
      {
        answerText: 'Colestipol',
        correct: false
      },
      {
        answerText: 'Ezetimib',
        correct: false
      },
      {
        answerText: 'Gemfibrozil',
        correct: false
      },
      {
        answerText: 'Niacin',
        correct: true
      },
      {
        answerText: 'Simvastatin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie haben einen Patienten sechs Monate mit Atorvastatin behandelt. Sie sind sicher, daß der Patient compliant ist;dennoch ist das Cholesterin grenzwertig erhöht und er hat weiterhin Angina pectoris-Anfälle. Sie entschließen gemeinsam mit dem Patienten zusätzlich Ezetimib zu geben. Welche der folgenden Sätze beschreibt am ehesten den Wirkungsmechanismus von Ezetimib?',
    answers: [
      {
        answerText: 'Es senkt die Lipidsynthese in Fettzellen.',
        correct: false
      },
      {
        answerText: 'Es senkt die Sekretion von VLDL durch die Leber.',
        correct: false
      },
      {
        answerText: 'Es erhöht die endogene Synthese von HDL in der Leber.',
        correct: false
      },
      {
        answerText: 'Es senkt die gastrointestinale Aufnahme von Cholesterin.',
        correct: true
      },
      {
        answerText: 'Es steigert die Lipidhydrolyse durch eine Lipoproteinlipase.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 32-jährige Frau kommt in die Klinik, weil sie zwei Tage lang Kopfschmerzen hat sowie Gelenkschmerzen und Muskelschmerzen. Die körperliche Untersuchung zeigt eine Rigidität der Nackenmuskulatur und petechiale Blutungen an der unteren Extremität. Sie ordnen eine Spinalpunktion an. Eine Gram-Färbung der Spinalflüssigkeit zeigt viele Neutrophile und viele gram-negative bohnenförmige Diplokokken. Was ist am ehesten die Therapie bei dieser Patientin?',
    answers: [
      {
        answerText: 'Tetracyclin',
        correct: false
      },
      {
        answerText: 'Penicillin G',
        correct: true
      },
      {
        answerText: 'Erythromycin',
        correct: false
      },
      {
        answerText: 'Aztreonam',
        correct: false
      },
      {
        answerText: 'Tobramycin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 16-jähriges Mädchen kommt in die Notaufnahme als Folge einer Acetylsalicylsäureüberdosierung, die sie in suizidaler Absicht eingenommen hat. Welche der folgenden Symptome erwarten Sie am ehesten?',
    answers: [
      {
        answerText: 'Knochenmarksdepression und aplastische Anämie',
        correct: false
      },
      {
        answerText: 'Fieber, Leberdysfunktion und Enzephalopathie',
        correct: false
      },
      {
        answerText: 'Hyperthermie, metabolische Azidose und Koma',
        correct: true
      },
      {
        answerText: 'schnelles fulminantes Leberversagen',
        correct: false
      },
      {
        answerText: 'kutaner Ausschlag, interstitielle Nephritis und akutes Nierenversagen',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente kann gleichzeitig eingenommen schon in üblichen Dosen die Konzentration von Methotrexat, einer schwachen Säure, die im Wesentlichen renal ausgeschieden wird, erhöhen?',
    answers: [
      {
        answerText: 'Paracetamol',
        correct: false
      },
      {
        answerText: 'Allopurinol',
        correct: false
      },
      {
        answerText: 'Colchizin',
        correct: false
      },
      {
        answerText: 'Hydroxychloroquin',
        correct: false
      },
      {
        answerText: 'Probenecid',
        correct: true
      }
    ]
  },
  {
    questionText: 'Das gesuchte Medikament hemmt Cholinesterasen sowohl in der Peripherie als auch im zentralen Nervensystem. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Acetylcholin',
        correct: false
      },
      {
        answerText: 'Carbachol',
        correct: false
      },
      {
        answerText: 'Edrophonium',
        correct: false
      },
      {
        answerText: 'Neostigmin',
        correct: false
      },
      {
        answerText: 'Physostigmin',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein 53-jähriger Mann hat die Diagnose Belastungsangina-pectoris erhalten und Sie verschrieben ihm Nitroglyzerin als Inhalator und orales Isosorbidmononitrat. Welche der folgenden molekularen Mechanismen liegt der Wirkung der Nitrate bei diesem Mann am ehesten zugrunde?',
    answers: [
      {
        answerText: 'Umwandlung von Nitritionen in N2O',
        correct: true
      },
      {
        answerText: 'Erhöhung der intrazellulären Calciumkonzentration',
        correct: false
      },
      {
        answerText: 'Aufnahme von Calcium in das endoplasmatische Retikulum',
        correct: false
      },
      {
        answerText: 'verminderte Synthese von Guanylatzyklase',
        correct: false
      },
      {
        answerText: 'verminderte Aktivität der cGMP-abhängigen Proteinkinase',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 43-jähriger Mann kommt ins Krankenhaus aufgrund von rektaler Blutung zur Koloskopie. Intravenös wird ihm Diazepam zur Einleitung einer Sedation gespritzt. Welche der folgenden Erscheinungen wird am ehesten nach Erholung von der Sedation eintreten?',
    answers: [
      {
        answerText: 'Übelkeit und Erbrechen',
        correct: false
      },
      {
        answerText: 'erhöhte Respirationsrate',
        correct: false
      },
      {
        answerText: 'anterograde Amnesie',
        correct: true
      },
      {
        answerText: 'Spasmen der Beine',
        correct: false
      },
      {
        answerText: 'Halluzinationen',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 68-jähriger Mann mit kürzlich diagnostizierter systolischer Herzinsuffizienz NYHA 3 bekommt eine Therapie mit Metoprolol, Losartan, Furosemid und Digoxin. Welche der folgenden Aussagen beschreibt am ehesten den positiv inotropen Wirkungsmechanismus von Digoxin?',
    answers: [
      {
        answerText: 'Schließen von Calciumkanälen im Sarkolemma',
        correct: false
      },
      {
        answerText: 'Erhöhung der Freisetzung von Calcium aus dem sarkoplasmatischen Retikulum in der Systole',
        correct: true
      },
      {
        answerText: 'Aktivierung der Natrium-Kalium-ATPase',
        correct: false
      },
      {
        answerText: 'Aktivierung des Natrium-Calcium-Austauschers im Sarkolemma',
        correct: false
      },
      {
        answerText: 'Öffnung von Kaliumkanälen im Sarkolemma',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen bewirkt eine Vasodilatation die durch Atropin blockierbar ist?',
    answers: [
      {
        answerText: 'Benzatropin',
        correct: false
      },
      {
        answerText: 'Carbachol',
        correct: true
      },
      {
        answerText: 'Botulinumtoxin',
        correct: false
      },
      {
        answerText: 'Neostigmin',
        correct: false
      },
      {
        answerText: 'Pralidoxim',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 65-jährige Frau kommt zu Ihnen mit bekannter eingeschränkter Nierenfunktion und nekrotischen Ulzerationen an der Sohle des rechten Fußes. Sie hat schon lange einen Diabetes Typ 2. Sie möchten jetzt die Retina nach möglichen diabetischen vaskulären Schädigungen untersuchen lassen. Welche der folgenden Substanzen würden Sie am ehesten geben um eine Dilatation der Pupillen aber keine Zykloplegie zu erzielen?',
    answers: [
      {
        answerText: 'Isoprenalin',
        correct: false
      },
      {
        answerText: 'Noradrenalin',
        correct: true
      },
      {
        answerText: 'Phenylephrin',
        correct: false
      },
      {
        answerText: 'Pilocarpin',
        correct: false
      },
      {
        answerText: 'Tropicamid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie geben Ihrem Patienten Phentolamin. Welcher der folgenden Effekte würde dadurch am ehesten blockiert werden?',
    answers: [
      {
        answerText: 'Eine durch Phenylephrin bedingte Bradykardie.',
        correct: true
      },
      {
        answerText: 'Bronchodilatation durch Noradrenalin.',
        correct: false
      },
      {
        answerText: 'Positiv inotroper Effekt durch Noradrenalin.',
        correct: false
      },
      {
        answerText: 'Eine Myosis vermittelt durch Carbachol.',
        correct: false
      },
      {
        answerText: 'Eine Vasodilatation ausgelöst durch Isoprenalin.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen trifft am ehesten zu, wenn Sie einen Patienten mit essentiellem Hypertonus mit Nifedipin behandeln?',
    answers: [
      {
        answerText: 'Nifedipin blockiert kompetitiv den Rezeptor für Angiotensin 2.',
        correct: false
      },
      {
        answerText: 'Nifedipin reduziert den Calcium-Reflux aus Skelettmuskelzellen.',
        correct: false
      },
      {
        answerText: 'Nifedipin senkt die Renin-Konzentration im Blut',
        correct: false
      },
      {
        answerText: 'Nifedipin senkt den Calcium-Einstrom in glatte Muskelzellen.',
        correct: true
      },
      {
        answerText: 'Nifedipin senkt den Calcium-Verlust über den Urin.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welcher der folgenden Effekte wird am ehesten sowohl von Prazosin als auch von Atenolol hervorgerufen?',
    answers: [
      {
        answerText: 'Senkung der Herzfrequenz',
        correct: false
      },
      {
        answerText: 'Erhöhung des Cardiac Outputs (Herz-Zeit-Volumen)',
        correct: false
      },
      {
        answerText: 'Senkung der Renin-Produktion',
        correct: false
      },
      {
        answerText: 'Erhöhung der Aktivität der sympathischen Efferenzen aus dem zentralen Nervensystem',
        correct: false
      },
      {
        answerText: 'orthostatischer Blutdruckabfall',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden blutdrucksenkenden Stoffe, die man intravenös geben muss, bewirkt eine Freisetzung von NO für wenige Minuten?',
    answers: [
      {
        answerText: 'Metoprolol',
        correct: false
      },
      {
        answerText: 'Lisinopril',
        correct: false
      },
      {
        answerText: 'Minoxidil',
        correct: false
      },
      {
        answerText: 'Hydralazin',
        correct: false
      },
      {
        answerText: 'Nitroprussid',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente wird am ehesten die Wirkung eines oralen Kontrazeptivums aufheben?',
    answers: [
      {
        answerText: 'Amikazin',
        correct: false
      },
      {
        answerText: 'Ethambutol',
        correct: false
      },
      {
        answerText: 'Isoniazid',
        correct: false
      },
      {
        answerText: 'Pyrazinamid',
        correct: false
      },
      {
        answerText: 'Rifampicin',
        correct: true
      }
    ]
  },
  {
    questionText: 'Das hauptsächliche endogene Substrat für die NO-Synthase ist am ehesten?',
    answers: [
      {
        answerText: 'Acetylcholin',
        correct: false
      },
      {
        answerText: 'Angiotensinogen',
        correct: false
      },
      {
        answerText: 'Arginin',
        correct: true
      },
      {
        answerText: 'Citrullin',
        correct: false
      },
      {
        answerText: 'Häm',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten zur Therapie bei einem 5-jährigen Kind mit chronischer Niereninsuffizienz notwendig?',
    answers: [
      {
        answerText: 'Cyanocobalamin',
        correct: false
      },
      {
        answerText: 'Deferoxamin',
        correct: false
      },
      {
        answerText: 'Erythropoietin',
        correct: true
      },
      {
        answerText: 'Filgrastim',
        correct: false
      },
      {
        answerText: 'Oprelvekin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Man nimmt heute an, daß die Entstehung eines Morbus Basedow im Wesentlichen auf der Produktion eines Antikörpers beruht der am ehesten welchen der folgenden Effekte ausübt?',
    answers: [
      {
        answerText: 'Er aktiviert die Rezeptoren in der Hypophyse und führt zur TSH-Freisetzung.',
        correct: false
      },
      {
        answerText: 'Er aktiviert in der Schilddrüse den TSH-Rezeptor.',
        correct: true
      },
      {
        answerText: 'Er aktiviert TSH-Rezeptoren in peripheren Geweben.',
        correct: false
      },
      {
        answerText: 'Er bindet an das Thyreoglobulin der Schilddrüse und beschleunigt die Proteolyse und damit die Freisetzung von T4 und T3.',
        correct: false
      },
      {
        answerText: 'Er bindet an Thyroid-bindendes Globulin und verdrängt T4 und T3.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie sind vor einer Pharmakologieprüfung sehr nervös und haben mit einem Mal einen Anfall von Diarrhö. Sie informieren sich und wollen sich ein freiverkäufliches Opioid mit antidiarrhoischer Wirkung kaufen. Sie fragen am ehesten den Apotheker nach welcher der folgenden Substanzen?',
    answers: [
      {
        answerText: 'Codein',
        correct: false
      },
      {
        answerText: 'Dextromethorphan',
        correct: false
      },
      {
        answerText: 'Diphenoxylat',
        correct: false
      },
      {
        answerText: 'Loperamid',
        correct: true
      },
      {
        answerText: 'Nalbuphin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Genetische Polymorphismen in bestimmten Leberenzymen, die für den Metabolismus von Arzneistoffen verantwortlich sind, sind eine gut beschriebene Ursache in der analgetischen Wirkung von',
    answers: [
      {
        answerText: 'Buprenorphin.',
        correct: false
      },
      {
        answerText: 'Codein.',
        correct: false
      },
      {
        answerText: 'Fentanyl.',
        correct: true
      },
      {
        answerText: 'Methadon.',
        correct: false
      },
      {
        answerText: 'Tramadol.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Gegenüber vielen Wirkungen von Morphin gibt es bei der chronischen Behandlung von schweren Schmerzen eine Toleranzentwicklung. Dies trifft aber am ehesten nicht zu gegenüber der Wirkung auf welches der folgenden Systeme?',
    answers: [
      {
        answerText: 'Die Wirkung auf die glatte Muskulatur der Gallenwege.',
        correct: false
      },
      {
        answerText: 'Emesis',
        correct: false
      },
      {
        answerText: 'Konstriktion der Pupillen (Stecknadelpupillen)',
        correct: false
      },
      {
        answerText: 'Sedation',
        correct: false
      },
      {
        answerText: 'Harnverhalt',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am wenigsten effektiv in der Behandlung einer Candidiasis des Ösophagus, wenn man sie peroral gibt?',
    answers: [
      {
        answerText: 'Clotrimazol',
        correct: false
      },
      {
        answerText: 'Griseofulvin',
        correct: true
      },
      {
        answerText: 'Ketoconazol',
        correct: false
      },
      {
        answerText: 'Itraconazol',
        correct: false
      },
      {
        answerText: 'Nystatin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen erhöht am ehesten die Wirkung von GABA in Nematoden und bewirkt so durch Muskelparalyse das Absterben und Ausscheiden des Wurmes?',
    answers: [
      {
        answerText: 'Albendazol',
        correct: false
      },
      {
        answerText: 'Diethylcarbamazin',
        correct: false
      },
      {
        answerText: 'Ivermectin',
        correct: false
      },
      {
        answerText: 'Oxamniquin',
        correct: false
      },
      {
        answerText: 'Pyrantel pamoat',
        correct: true
      }
    ]
  },
  {
    questionText: 'Sie wollen ein Kind behandeln, daß sowohl eine Infektion mit Ascaris lumbricoidis als auch mit Necator americanus erlitten hat. Welches der folgenden Medikamente würden Sie am ehesten einsetzen?',
    answers: [
      {
        answerText: 'Diethylcarbamazin',
        correct: false
      },
      {
        answerText: 'Ivermectin',
        correct: false
      },
      {
        answerText: 'Mebendazol',
        correct: true
      },
      {
        answerText: 'Niclosamid',
        correct: false
      },
      {
        answerText: 'Praziquantel',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 65-jährige Patientin war im Ausland und hat sich dort eine bakterielle Diarrhoe zugezogen. Sie vermuten als Pathogen einen gram-negativen Bazillus. Welches Medikament der Folgenden wäre am ehesten indiziert?',
    answers: [
      {
        answerText: 'Ampicillin',
        correct: true
      },
      {
        answerText: 'Ofloxacin',
        correct: false
      },
      {
        answerText: 'Sulfadiazin',
        correct: false
      },
      {
        answerText: 'Trimethoprim',
        correct: false
      },
      {
        answerText: 'Vancomycin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Was beschreibt am besten das Glucocorticoid Response Element?',
    answers: [
      {
        answerText: 'Es ist ein regulatorisches Protein, daß die Interaktion zwischen einem aktivierten Steroidrezeptor und der DNA kontrolliert.',
        correct: true
      },
      {
        answerText: 'Es ist eine kurze Sequenz der DNA, die fest an die RNA-Polymerase bindet.',
        correct: false
      },
      {
        answerText: 'Es ist ein kleines Protein, das an ein nicht-besetztes Steroidrezeptorprotein bindet.',
        correct: false
      },
      {
        answerText: 'Es ist eine spezifische Nukleotidsequenz, die von einem Steroidhormonrezeptorhormonkomplex erkannt wird.',
        correct: false
      },
      {
        answerText: 'Es ist ein Teil des Steroidrezeptors der an die DNA bindet.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage über Flucytosin ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Flucytosin kann auch bei Niereninsuffizienz gegeben werden.',
        correct: false
      },
      {
        answerText: 'Die gleichzeitige Gabe von Cytosinarabinosid verstärkt seine Wirkung.',
        correct: false
      },
      {
        answerText: 'Es wird durch die Cytosinpermease in die Pilzzelle aufgenommen.',
        correct: true
      },
      {
        answerText: 'Es wird von einer Cytosindesaminase zu 5-Fluor-Adenin umgewandelt.',
        correct: false
      },
      {
        answerText: 'Es stimuliert die DNA-Synthese.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Patient kommt zu Ihnen mit einer außerhalb des Krankenhauses erworbenen Lungenentzündung. Wegen seiner bestehenden COPD nimmt er ein theophyllinhaltiges Präparat. Welches der folgenden Antibiotika sollten Sie ihm am ehesten verordnen?',
    answers: [
      {
        answerText: 'Azithromycin',
        correct: true
      },
      {
        answerText: 'Glindamycin',
        correct: false
      },
      {
        answerText: 'Doxycyclin',
        correct: false
      },
      {
        answerText: 'Erythromycin',
        correct: false
      },
      {
        answerText: 'Vancomycin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Perorale Medikamente werden gern zur Therapie von Asthma bei Kindern eingesetzt, weil Kinder oft Probleme haben mit Aerosol-inhalatoren zurechtzukommen. Welches der folgenden oral wirksamen Substanzen in diesem Zusammenhang ist ein Hemmstoff am Leukotrien-Rezeptor?',
    answers: [
      {
        answerText: 'Salmeterol',
        correct: false
      },
      {
        answerText: 'Aminophyllin',
        correct: false
      },
      {
        answerText: 'Ipratropiumbromid',
        correct: false
      },
      {
        answerText: 'Montelukast',
        correct: true
      },
      {
        answerText: 'Zileuton',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 50-jährige Frau leidet seit 30 Jahren an Asthma. Sie kommt in die Notaufnahme mit zunehmender Atemlosigkeit und Husten. Sie auskultieren ihren Thorax und hören bilateral inspiratorisches und exspiratorisches Giemen und Brummen. Sie geben der Patientin Sauerstoff und ein Salbutamol- und Ipratropiumbromid-enthaltendes Aerosol zum Inhalieren. Intravenös geben Sie ihr 40 mg Methylprednisolon. Was ist am ehesten die pharmakologische Wirkung des exogen gegebenen Glucocorticoids bei dieser Patientin?',
    answers: [
      {
        answerText: 'erhöhte Muskelmasse',
        correct: false
      },
      {
        answerText: 'Hypoglykämie',
        correct: false
      },
      {
        answerText: 'Hemmung der Leukotriensynthese',
        correct: true
      },
      {
        answerText: 'verbesserte Wundheilung',
        correct: false
      },
      {
        answerText: 'vermehrte Exkretion von Salz und Wasser',
        correct: false
      }
    ]
  },
  {
    questionText: 'Der Wirkungsmechanismus welcher der folgenden Substanzen beruht am ehesten auf der Bildung von Poren in der Zellmembran der zu behandelnden Zellen?',
    answers: [
      {
        answerText: 'Caspofungin',
        correct: false
      },
      {
        answerText: 'Flucytosin',
        correct: false
      },
      {
        answerText: 'Griseofulvin',
        correct: false
      },
      {
        answerText: 'Nystatin',
        correct: true
      },
      {
        answerText: 'Terbinafin',
        correct: false
      }
    ]
  },
  {
    questionText: 'In Ihrer Ambulanz sehen Sie eine 23-jährige, schwangere Frau, die an Gonorrhö erkrankt ist. In der Anamnese finden Sie eine anaphylaktische Reaktion gegenüber Amoxicillin. Welche Substanz sollten Sie ihr am ehesten verschreiben?',
    answers: [
      {
        answerText: 'Azithromycin',
        correct: true
      },
      {
        answerText: 'Cefixim',
        correct: false
      },
      {
        answerText: 'Ceftriaxon',
        correct: false
      },
      {
        answerText: 'Ciprofloxacin',
        correct: false
      },
      {
        answerText: 'Doxycyclin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Zu Ihnen kommt ein 30-jähriger männlicher Patient, der HIV positiv ist, Symptome zeigt und eine Virus-RNA-Belastung von 15000 Kopien/ml aufweist. Die Behandlung umfasst Zidovudin, Didanosin und Ritonavir. Zusätzlich nimmt der Patient gegen Herpesinfektionen noch Aciclovir und Ketoconazol gegen orale Candidiasis. Er kommt zu Ihnen, weil er anorektisch ist, Übelkeit und Erbrechen aufweist und abdominale Schmerzen hat. Vor allem im epigastrischen Raum ist er druckschmerzhaft. Seine Amylase ist stark erhöht und Sie stellen die Diagnose akute Pankreatitis. Welche Substanz würde dem Patienten am ehesten seine Symptome erklären?',
    answers: [
      {
        answerText: 'Aciclovir',
        correct: false
      },
      {
        answerText: 'Didanosin',
        correct: true
      },
      {
        answerText: 'Ketoconazol',
        correct: false
      },
      {
        answerText: 'Ritonavir',
        correct: false
      },
      {
        answerText: 'Zidovudin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 27-jährige stillende Mutter kommt zu Ihnen mit der Diagnose genitaler Herpes. Sie hatte diese Infektion schon öfter, anamnestisch. In der Vergangenheit hat sie auf eine lokale Medikamententherapie angesprochen. Abgesehen davon hat die Patientin einen guten Gesundheitszustand. Welche oral einnehmbare Substanz würden Sie ihr am ehesten verschreiben?',
    answers: [
      {
        answerText: 'Amantadin',
        correct: false
      },
      {
        answerText: 'Foscarnet',
        correct: false
      },
      {
        answerText: 'Ritonavir',
        correct: false
      },
      {
        answerText: 'Trifluridin',
        correct: false
      },
      {
        answerText: 'Valaciclovir',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der unten aufgeführten Substanzen hemmt die Thromboxansynthese viel effektiver als die Prostacyclinsynthese?',
    answers: [
      {
        answerText: 'Acetylsalicylsäure',
        correct: true
      },
      {
        answerText: 'Hydrocortison',
        correct: false
      },
      {
        answerText: 'Ibuprofen',
        correct: false
      },
      {
        answerText: 'Indometacin',
        correct: false
      },
      {
        answerText: 'Zileuton',
        correct: false
      }
    ]
  },
  {
    questionText: 'Bei Ihnen zur Aufnahme kommt 33-jähriger Mann. Er klagt über Dysurie und Austritt von gelbem Eiter beim Wasserlassen. Er hat ein schmerzloses Geschwür am Penis und eine nicht schmerzhafte Vergrößerung von regionalen Lymphknoten. Sie machen eine Färbung und finden gram-negative Diplokokken im urethralem Exsudat in polymorphkernigen Zellen. Der Patient sagt er sei arbeitslos und hätte die letzten zwei Tage nichts gegessen. Die am ehesten passende Behandlung bei diesem Patienten wäre welche der folgenden?',
    answers: [
      {
        answerText: 'einmalige intramuskuläre Gabe von Ceftriaxon',
        correct: true
      },
      {
        answerText: 'siebentägige perorale Gabe von Amoxicillin',
        correct: false
      },
      {
        answerText: 'intramuskuläre Gabe von Procain-penicillin G und perorale Gabe von Probenezid',
        correct: false
      },
      {
        answerText: 'siebentägige perorale Gabe von Meropenem',
        correct: false
      },
      {
        answerText: 'einmalige intramuskuläre Gabe von Vancomycin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie wollen einen Patienten mit Erythromycin behandeln. Was müssen Sie ihm am ehesten sagen?',
    answers: [
      {
        answerText: 'Er solle sich nicht dem Sonnenlicht aussetzen.',
        correct: false
      },
      {
        answerText: 'Er solle auf Eisentabletten in der Selbstmedikation verzichten.',
        correct: false
      },
      {
        answerText: 'Er sollte weniger koffeinhaltige Getränke zu sich nehmen.',
        correct: true
      },
      {
        answerText: 'Er sollte seinen Gesamtharnstoff und seinen Kreatinin vor Beginn der Behandlung überprüfen lassen.',
        correct: false
      },
      {
        answerText: 'Er sollte darauf verzichten gleichzeitig Loratadin zu nehmen.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Der PKS- Wert von Lidocain sei 7,7. In einem infizierten Gewebe liege ein pH-Wert von 6,7 vor. Der prozentuale Anteil des Arzneimittels im nicht-ionisierten Zustand wird dann bei',
    answers: [
      {
        answerText: '1 % liegen.',
        correct: false
      },
      {
        answerText: '10 % liegen.',
        correct: false
      },
      {
        answerText: '50 % liegen.',
        correct: false
      },
      {
        answerText: '90 % liegen.',
        correct: true
      },
      {
        answerText: '99 % liegen.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie wollen einer Patientin mit Vorhofflimmern aus prophylaktischen Gründen Apixaban verschreiben. Normalerweise müssen Sie keine regelmäßigen Blutuntersuchungen durchführen, wenn es aber klinische Gründe gibt doch den Koagulationsstatus dieser Patientin unter dieser Therapie zu überprüfen, welcher der folgenden Tests ist am ehesten geeignet?',
    answers: [
      {
        answerText: 'aPTT',
        correct: false
      },
      {
        answerText: 'Faktor X Test',
        correct: true
      },
      {
        answerText: 'Bestimmung des INR',
        correct: false
      },
      {
        answerText: 'PT-Test',
        correct: false
      },
      {
        answerText: 'Bestimmung der Aktivität von Faktor III',
        correct: false
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten der Wirkungsmechanismus von Gemfibrozil?',
    answers: [
      {
        answerText: 'vermerkte Exkretion von Gallensäuren',
        correct: false
      },
      {
        answerText: 'vermehrte Expression hochaffiner LDL-Rezeptoren',
        correct: false
      },
      {
        answerText: 'vermehrte Sekretion von LDL durch die Leber',
        correct: false
      },
      {
        answerText: 'gesteigerte Triglyzeridhydrolyse durch die Lipoproteinlipase',
        correct: true
      },
      {
        answerText: 'reduzierte Aufnahme von Cholesterol aus der Nahrung über den Darm',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie wollen einen Patienten mit Hypertonus und Angina pectoris behandeln. Sie schwanken zwischen dem verschreiben von Metoprolol und Verapamil. Welche der folgenden beschriebenen Wirkungen und/oder Nebenwirkungen treten sowohl bei Metoprolol als auch bei Verapamil auf?',
    answers: [
      {
        answerText: 'Diarrhö',
        correct: false
      },
      {
        answerText: 'Hypoglykämie',
        correct: false
      },
      {
        answerText: 'verlängertes PR-Intervall',
        correct: true
      },
      {
        answerText: 'Tachykardie',
        correct: false
      },
      {
        answerText: 'Thyreotoxikose',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 5-jähriger Mann mit bekanntlich schlecht eingestelltem Hypertonus wird jetzt in die Notaufnahme gebracht. Er hat einen Blutdruck von 220/160 mmHg und retinale Einblutungen. Es handelt sich also um einen schweren hypertensiven Notfall. Es steht eine Reihe von Substanzen zur Verfügung. Welche der folgenden Substanzen wäre in diesem Fall am ehesten vertretbar, hätte eine kurze Wirkungsdauer, wirkt über einen G-Protein gekoppelten Rezeptor und muss intravenös gegeben werden?',
    answers: [
      {
        answerText: 'Isosorbiddinitrat',
        correct: false
      },
      {
        answerText: 'Nitroprussidnatrium',
        correct: false
      },
      {
        answerText: 'Nifedipin',
        correct: false
      },
      {
        answerText: 'Clonidin',
        correct: true
      },
      {
        answerText: 'Furosemid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente zur Therapie eines Typ-2-Diabetes ist am typischsten mit dem Entstehen von Hypoglykämien verknüpft?',
    answers: [
      {
        answerText: 'Acarbose',
        correct: false
      },
      {
        answerText: 'Canagliflozin',
        correct: false
      },
      {
        answerText: 'Glibenclamid',
        correct: true
      },
      {
        answerText: 'Metformin',
        correct: false
      },
      {
        answerText: 'Pioglitazon',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 81-jährige Dame kommt bei Ihnen zur Notaufnahme. Sie leidet an Diabetes Typ 2, ist jetzt komatös mit Tachykardie, Blutruckabfall und schwerer Lactatazidose neun Stunden nach Einnahme der letzten Metformintablette. Die Serumglukosekonzentration beträgt 248 mg/dl. Metformin ist eine Base mit einen pKa-Wert von 12,4. Welche der folgenden Maßnahmen ist am ehesten geeignet zur Therapie dieser Patientin?',
    answers: [
      {
        answerText: 'Gabe von Aktivkohle',
        correct: false
      },
      {
        answerText: 'Gabe von Glucagon',
        correct: true
      },
      {
        answerText: 'Gabe von Ipecacuanha Sirup',
        correct: false
      },
      {
        answerText: 'Magenspülung',
        correct: false
      },
      {
        answerText: 'Hämodialyse',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Diuretika ist am ehesten sinnvoll zur Behandlung eines akut komatös gewordenen Patienten aufgrund einer Hirnverletzung mit einem zerebralen Ödem durch einen Autounfall?',
    answers: [
      {
        answerText: 'Acetazolamid',
        correct: false
      },
      {
        answerText: 'Amilorid',
        correct: false
      },
      {
        answerText: 'Chlorthalidon',
        correct: false
      },
      {
        answerText: 'Furosemid',
        correct: false
      },
      {
        answerText: 'Mannit',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen beschreibt eine wichtige Wirkung von Insulin?',
    answers: [
      {
        answerText: 'vermehrte Umwandlung von Aminosäuren in Glukose',
        correct: false
      },
      {
        answerText: 'vermehrte Gluconeogenese',
        correct: false
      },
      {
        answerText: 'vermehrter Glukose-Einwärtstransport in Zellen',
        correct: true
      },
      {
        answerText: 'Hemmung der Lipoproteinlipase',
        correct: false
      },
      {
        answerText: 'Stimulation der Glykogenolyse',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 2-jähriges Mädchen wird in Ihre Notaufnahme gebracht. Es hat eine Stunde zuvor unbekannte Tabletten aus dem Kühlschrank zu sich genommen. Die Symptome umschließen starke gastrointestinale Schmerzen, Übelkeit mit Hämatemisis und epigastrischem Schmerz. Ferner finden Sie eine metabolische Azidose und Leukozytose. Welche Tabletten hat das Mädchen am ehesten eingenommen?',
    answers: [
      {
        answerText: 'Paracetamol',
        correct: false
      },
      {
        answerText: 'Acetylsalicylsäure',
        correct: false
      },
      {
        answerText: 'Diphenhydramin',
        correct: false
      },
      {
        answerText: 'Eisen',
        correct: true
      },
      {
        answerText: 'Vitamin C',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie arbeiten im Krankenhaus St. Georg in Hamburg und ein junger Mann wird in die Notaufnahme gebracht. Er ist nervös und erregt. Er informiert Sie, daß er sich vor zwölf Stunden intravenös eine „Straßendroge“ injiziert habe. Jetzt fällt Ihnen auch auf, daß der Patient sich erbrechen muss, dass er hyperventiliert und die Pupillen größer sind als normal. Sie messen eine Hyperthermie. Was ist die am ehesten wahrscheinliche Verdachtsdiagnose?',
    answers: [
      {
        answerText: 'Dieser Patient hat sich Dextroamphetamin injiziert.',
        correct: true
      },
      {
        answerText: 'Dieser Patient hat Hepatitis B.',
        correct: false
      },
      {
        answerText: 'Dieser Patient hat sich überdosiert mit einem Opioid.',
        correct: false
      },
      {
        answerText: 'Dieser Patient zeigt Zeichen und Symptome eines Opioidentzugssyndroms.',
        correct: false
      },
      {
        answerText: 'Diese Zeichen kommen durch die Kontamination von Straßenheroin mit MPPT.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie haben auf der Notaufnahme einen Patienten der eine akute Morphin-Entzugssymptomatik präsentiert. Welches der folgenden Medikamente würden Sie ihm aus therapeutischen Gründen am ehesten geben?',
    answers: [
      {
        answerText: 'Buprenorphin',
        correct: false
      },
      {
        answerText: 'Codein',
        correct: false
      },
      {
        answerText: 'Methadon',
        correct: false
      },
      {
        answerText: 'Naltrexon',
        correct: true
      },
      {
        answerText: 'Tramadol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Tramadol trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Tramadol ist erst in Stufe 3 der Schmerztherapie nach WHO-Stufenschema empfohlen.',
        correct: false
      },
      {
        answerText: 'Tramadol ist als R-Enantiomer im Handel.',
        correct: false
      },
      {
        answerText: 'Eine Übelkeit unter Tramadol ist im Gegensatz zum Morphin nicht beschrieben worden.',
        correct: false
      },
      {
        answerText: 'Bei Einnahme von Tramadol kann ein Serotoninsyndrom auftreten.',
        correct: true
      },
      {
        answerText: 'Bei Niereninsuffizienz muss die Dosis von Tramadol erfreulicherweise nicht reduziert werden.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage über den möglichen Einsatz von Isoniazid zur Therapie einer Tuberkulose ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Wenn man Isoniazid verschreibt und gleichzeitig tyraminhaltige Nahrungsmittel zu sich nimmt so kann es leicht zu Gesichtsrötungen, Magenverstimmungen, Herzrhythmusstörungen und Schwitzen kommen.',
        correct: false
      },
      {
        answerText: 'Patienten aus Südostasien brauchen im Allgemeinen niedrige Erhaltungsdosen von Isoniazid.',
        correct: false
      },
      {
        answerText: 'Unter der Behandlung mit Isoniazid kann eine periphere Neuritis entstehen.',
        correct: false
      },
      {
        answerText: 'Der Patient mit Isoniazid sollte zusätzlich Pyridoxin erhalten.',
        correct: false
      },
      {
        answerText: 'Das Risiko eines Patienten unter Isoniazid eine Hepatitis zu entwickeln liegt bei weniger als 2%.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein 10-jähriger Junge leidet an einer unkomplizierten Lungentuberkulose. Er wurde von Ihnen zu Beginn im Krankenhaus behandelt und ist nach Hause geschickt worden. Im Arztbrief steht Rifampicin, Isoniazid und Ethambutol. Welche Aussage zu diesem Fall trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Bevor Sie mit der Therapie beginnen, müssen Sie die Hörfunktion testen lassen.',
        correct: false
      },
      {
        answerText: 'Seine Mutter, die sich um ihn kümmert, braucht keine Isoniazidprophylaxe.',
        correct: false
      },
      {
        answerText: 'Sein 3-jähriger Bruder sollte eine Isoniazidprophylaxe erhalten.',
        correct: false
      },
      {
        answerText: 'Polyarthralgie ist eine mögliche unerwünschte Wirkung bei einer der Substanzen die der Patient erhält.',
        correct: false
      },
      {
        answerText: 'Eine mögliche Nephrotoxizität der verschriebenen Substanzen zwingt zu einer regelmäßigen Überprüfung der Nierenfunktion.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der aufgeführten Antibiotika ist am sichersten bei einer Schwangeren einzusetzen?',
    answers: [
      {
        answerText: 'Amikazin',
        correct: false
      },
      {
        answerText: 'Azithromycin',
        correct: false
      },
      {
        answerText: 'Ciprofloxacin',
        correct: false
      },
      {
        answerText: 'Erythromycin',
        correct: true
      },
      {
        answerText: 'Tetracyclin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen hat einen langsamen Wirkungsbeginn, aber eine lange Wirkungsdauer und sollte immer in Kombination mit einem Corticosteroid zur Behandlung von Asthma eingesetzt werden?',
    answers: [
      {
        answerText: 'Theophyllin',
        correct: false
      },
      {
        answerText: 'Cromoglicinsäure',
        correct: false
      },
      {
        answerText: 'Adrenalin',
        correct: false
      },
      {
        answerText: 'Ipratropiumbromid',
        correct: false
      },
      {
        answerText: 'Salmeterol',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein erwachsener Patient wird wegen akuter Leukämie mit Cyclophosphamid, Mercaptopurin, Methotrexat, Vincristin und Prednison behandelt. Er erhält gegen Übelkeit Ondansetron und Chlorhexidin-Mundspüllösung gegen Mukusitis sowie Laxative gegen Obstipation. Jetzt kommt der Patient zu Ihnen und beklagt sich über Missempfindungen wie Nadelstiche in den Extremitäten und Muskelschwäche. Er ist nicht in der Lage aus dem Stuhl aufzustehen ohne seine Armmuskeln zu benutzen. Weiter klagt er über zunehmende Verstopfung. Welches der folgenden Substanzen ist für seine unerwünschten Wirkungen am ehesten verantwortlich?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: false
      },
      {
        answerText: 'Mercaptopurin',
        correct: false
      },
      {
        answerText: 'Methotrexat',
        correct: false
      },
      {
        answerText: 'Vincristin',
        correct: true
      },
      {
        answerText: 'Prednison',
        correct: false
      }
    ]
  },
  {
    questionText: 'Die gesuchte Substanz wird in der Kombinationstherapie von Hodgkin-Lymphomen gegeben. Aufgrund seiner hohen Selektivität ist es weniger myelosuppressiv als klassische Moleküle. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Methotrexat',
        correct: false
      },
      {
        answerText: 'Paclitaxel',
        correct: false
      },
      {
        answerText: 'Procarbazin',
        correct: false
      },
      {
        answerText: 'Rituximab',
        correct: true
      },
      {
        answerText: 'Vincristin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Die gesuchte Substanz ist ein Antimetabolit, der die DNA -Polymerase hemmt. Es ist eine der wichtigsten Arzneistoffe zur Behandlung von verschiedenen Leukämien. Die dosisbegrenzende unerwünschte Wirkung ist die Myelosuppression. Darüber hinaus kann es aber auch zu Störungen in der Zwerchfellfunktion führen, die sich als Ataxien manifestieren können. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Bleomycin',
        correct: false
      },
      {
        answerText: 'Cytarabin',
        correct: true
      },
      {
        answerText: 'Dacarbazin',
        correct: false
      },
      {
        answerText: 'Doxorubicin',
        correct: false
      },
      {
        answerText: 'Etoposid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist ein chimärer monoklonaler Antikörper der TNFα bindet und seine Wirkung hemmt?',
    answers: [
      {
        answerText: 'Etanercept',
        correct: false
      },
      {
        answerText: 'Infliximab',
        correct: true
      },
      {
        answerText: 'Sirolimus',
        correct: false
      },
      {
        answerText: 'Trastuzumab',
        correct: false
      },
      {
        answerText: 'Thalidomid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Das gesuchte Medikament wird bei Patienten mit HIV-Infektionen eingesetzt und seinen hemmenden Einfluß auf den Arzneimittelmetabolismus in der Leber hat man sich therapeutisch zu Nutze gemacht. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Lovastatin',
        correct: false
      },
      {
        answerText: 'Tranylcypromin',
        correct: false
      },
      {
        answerText: 'Rifampicin',
        correct: false
      },
      {
        answerText: 'Ritonavir',
        correct: true
      },
      {
        answerText: 'Theophyllin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 68-jähriger Mann wird in das Krankenhaus wegen fortgeschrittener Niereninsuffizienz eingewiesen und zeigt jetzt eine Pneumonie durch Pseudomonas aeruginosa. Eine adäquate antibiotische Therapie wird geplant, aber die Dosierung der gesuchten Substanz muß verringert werden, weil die Halbwertszeit der gesuchten Substanz bei Patienten mit Nierenfunktionsstörungen das 20-40-Fache betragen kann. Welche der folgenden Substanzen ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Ampicillin',
        correct: false
      },
      {
        answerText: 'Amikacin',
        correct: true
      },
      {
        answerText: 'Erythromycin',
        correct: false
      },
      {
        answerText: 'Clindamycin',
        correct: false
      },
      {
        answerText: 'Metronidazol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Für welche Substanz trifft am ehesten die Aussage zu, daß der Wirkmechanismus die Hemmung der Synthese von β-Glucan, einer essentiellen Komponente der Wand von Pilzen, beinhaltet?',
    answers: [
      {
        answerText: 'Amphotericin B',
        correct: false
      },
      {
        answerText: 'Caspofungin',
        correct: true
      },
      {
        answerText: 'Fluconazol',
        correct: false
      },
      {
        answerText: 'Flucytosin',
        correct: false
      },
      {
        answerText: 'Griseofulvin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 34-jähriger Mann mit AIDS stellt sich bei Ihnen vor wegen Fieber von 39,7 °C, allgemeinem Schwächegefühl, Muskelschmerzen, Übelkeit und Durchfall. Vor drei Wochen hat der Mann eine hochaktive antiretrovirale Therapie begonnen. Er sagt Ihnen, daß seine Symptome besonders ausgeprägt seien nach jeder Dosis und die Symptome scheinen von Dosis zu Dosis und Tag zu Tag schwerer zu sein. Die körperliche Untersuchung zeigt einen kleinen makulopapillären Ausschlag über dem Gesicht, dem Thorax und den Armen. Welches der folgenden Medikamente ist am ehesten für dieses Syndrom bei diesem Mann verantwortlich?',
    answers: [
      {
        answerText: 'Zidovudin',
        correct: false
      },
      {
        answerText: 'Ribavirin',
        correct: false
      },
      {
        answerText: 'Foscarnet',
        correct: false
      },
      {
        answerText: 'Abacavir',
        correct: true
      },
      {
        answerText: 'Lamivudin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 6-jähriges Mädchen, bei dem vor kurzem eine Enterobiasis festgestellt wurde, ist mit Mebendazol behandelt worden, aber trotzdem findet man immer noch Würmer in ihrem Stuhl. Man entschließt sich eine andere Therapie durchzuführen. Welche der folgenden Substanzen würde man am ehesten verordnen?',
    answers: [
      {
        answerText: 'Pyrantelpamoat',
        correct: true
      },
      {
        answerText: 'Praziquantel',
        correct: false
      },
      {
        answerText: 'Diethylcarbamazin',
        correct: false
      },
      {
        answerText: 'Metronidazol',
        correct: false
      },
      {
        answerText: 'Albendazol',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 30-jähriger Mann mit AIDS wird ins Krankenhaus aufgenommen mit der Einweisungsdiagnose Pneumonie. Die weiteren Untersuchungen grenzen das näher ein auf Toxoplasmose und eine adäquate Kombinationsbehandlung wird begonnen. Die Hemmung welches der folgenden Protozoen-Enzyme ist am ehesten für die therapeutische Wirkung bei diesem Mann verantwortlich?',
    answers: [
      {
        answerText: 'Purin-Phosphoribosyl-Transferase',
        correct: false
      },
      {
        answerText: 'Ornithin-Decarboxylase',
        correct: false
      },
      {
        answerText: 'Ferredoxin-Oxidoreduktase',
        correct: false
      },
      {
        answerText: 'Glukose-6-Phosphat-Dehydrogenase',
        correct: false
      },
      {
        answerText: 'Dihydrofolat-Reduktase',
        correct: true
      }
    ]
  },
  {
    questionText: 'Eine 24-jährige Frau mit einer langen Anamnese von Epilepsien in Form von Absencen ist jahrelang erfolgreich mit Valproinsäure behandelt worden. Sie hat vor kurzem geheiratet und hat jetzt Kinderwunsch. Welche Substanz würden sie ihr jetzt am ehestens alternativ verordnen wollen?',
    answers: [
      {
        answerText: 'Carbamazepin',
        correct: false
      },
      {
        answerText: 'Clonazepam',
        correct: false
      },
      {
        answerText: 'Phenytoin',
        correct: false
      },
      {
        answerText: 'Ethosuximid',
        correct: true
      },
      {
        answerText: 'Phenobarbital',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 10-jähriges Mädchen mit akuter lymphatischer Leukämie erhält den ersten Zyklus der Induktions-Chemotherapie zu der auch Asparaginase gehört. Welche der folgenden unerwünschten Wirkungen ist durch Asparaginase am wahrscheinlichsten?',
    answers: [
      {
        answerText: 'Myelosuppression',
        correct: false
      },
      {
        answerText: 'Nierenversagen',
        correct: false
      },
      {
        answerText: 'Hypoglykämie',
        correct: false
      },
      {
        answerText: 'Herzversagen',
        correct: false
      },
      {
        answerText: 'Hypersensitivitätsreaktion',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein 56-jähriger Mann war kürzlich zur jährlichen Routineuntersuchung. Der Test zeigte eine Gesamtzahl von weißen Blutkörperchen von 52000/mm³ (normal 4500-11000/mm³). Bei der körperlichen Untersuchung fiel nur eine Splenomegalie auf. Eine Punktion des Knochenmarks zeigte ein hyperzelluläres Knochenmark mit 15 % Blasten und die zytogenetische Anamnese zeigte die Anwesenheit eines Philadelphia-Chromosoms. Eine Diagnose wird gestellt und eine Therapie wird begonnen. Welche der folgenden Substanzen sollte man dem Mann am ehesten geben?',
    answers: [
      {
        answerText: 'Trastuzumab',
        correct: false
      },
      {
        answerText: 'Bleomycin',
        correct: false
      },
      {
        answerText: 'Etoposid',
        correct: false
      },
      {
        answerText: 'Asparaginase',
        correct: false
      },
      {
        answerText: 'Imatinib',
        correct: true
      }
    ]
  },
  {
    questionText: 'Eine 48-jährige Frau wird ins Krankenhaus aufgenommen mit der Einweisungsdiagnose polymorphe ventrikuläre Tachykardie. Die Frau leidet an Depressionen und wird seit drei Monaten mit Amitriptylin behandelt. Vor drei Tagen ging die Frau zu ihrem Hausarzt und klagte über Fieber, Halsschmerzen und bekam ein Antibiotikum.Welches der folgenden Medikamente hat der Hausarzt am ehesten verschrieben und damit wahrscheinlich die Tachykardie hervorgerufen?',
    answers: [
      {
        answerText: 'Vancomycin',
        correct: false
      },
      {
        answerText: 'Erythromycin',
        correct: true
      },
      {
        answerText: 'Gentamycin',
        correct: false
      },
      {
        answerText: 'Ceftriaxon',
        correct: false
      },
      {
        answerText: 'Ampicillin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente ist am ehesten ein peroral verfügbarer D2 (Dopaminrezeptor)-Agonist, der heutzutage zur Therapie des Morbus Parkinson geeignet zu sein scheint?',
    answers: [
      {
        answerText: 'Ergotamin',
        correct: false
      },
      {
        answerText: 'Bromocriptin',
        correct: false
      },
      {
        answerText: 'Selegilin',
        correct: false
      },
      {
        answerText: 'Ropinirol',
        correct: true
      },
      {
        answerText: 'Entacapon',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche antineoplastische Substanz wirkt am ehesten hauptsächlich durch ihre Affinität für die Dihydrofolatreduktase?',
    answers: [
      {
        answerText: 'Fluoruracil',
        correct: false
      },
      {
        answerText: 'Methotrexat',
        correct: true
      },
      {
        answerText: 'Mechlorethamin',
        correct: false
      },
      {
        answerText: 'Dactinomycin',
        correct: false
      },
      {
        answerText: 'Vincristin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie werden zu einer Patientin gerufen, die einen INR von 6.1 aufweist (Ziel INR hier sei:2-3). Ihr geht bei grober körperlicher Untersuchung eigentlich gut und Sie bemerken keine offensichtlichen Blutungen. Sie hat in der letzten Woche zur Therapie einer Bronchialentzündung mehrere Tage lang Erythromycin-Tabletten zu sich genommen. Anamnestisch hat sie vor sechs Monaten einen Herzinfarkt erlitten und seitdem auch Vorhofflimmern. Sie nimmt zur Zeit 2,5 mg Bisoprolol einmal am Tag und Phenprocoumon 3 mg einmal täglich (beide Medikamente peroral). Wie gehen Sie jetzt am ehesten vor?',
    answers: [
      {
        answerText: 'Absetzen von Bisoprolol.',
        correct: false
      },
      {
        answerText: 'Gabe von Vitamin K 5 mg intravenös.',
        correct: false
      },
      {
        answerText: 'Reduktion des Phenprocoumons auf 2 mg täglich.',
        correct: true
      },
      {
        answerText: 'Erhöhung des Phenprocoumons auf 5 mg täglich, dann neue Bestimmung des INR.',
        correct: false
      },
      {
        answerText: 'Absetzen des Phenprocoumons, dann neue Bestimmung des INR.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 62-jähriger Mann leidet an Vorhofflimmern. Es wird eine elektrische Kardioversion durchgeführt und er wird entlassen mit einem Medikament zur Rhythmuskontrolle. Das gesuchte Medikament blockiert primär aktivierte Natriumkanäle und hat keine Wirkung auf die Dauer des Aktionspotentiales. Welches der folgenden Medikamente wurde am ehesten gegeben?',
    answers: [
      {
        answerText: 'Amiodaron',
        correct: false
      },
      {
        answerText: 'Flecainid',
        correct: true
      },
      {
        answerText: 'Lidocain',
        correct: false
      },
      {
        answerText: 'Adenosin',
        correct: false
      },
      {
        answerText: 'Diltiazem',
        correct: false
      }
    ]
  },
  {
    questionText: 'Aufgrund welcher Nebenwirkung wird in Deutschland im Gegensatz zu England am ehesten selten Probenecid zur Therapie einer klinisch relevanten Hyperurikämie verwendet?',
    answers: [
      {
        answerText: 'Ototoxizität',
        correct: false
      },
      {
        answerText: 'Hepatotoxizität',
        correct: true
      },
      {
        answerText: 'Nephrotoxizität',
        correct: false
      },
      {
        answerText: 'Agranulozytose',
        correct: false
      },
      {
        answerText: 'Herzinsuffizienz',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 76 Jahre alter Mann mit bekannter stabiler Angina stellt sich in der Notaufnahme vor. Er klagt über seit 30 min bestehenden Thoraxschmerzen. Er schwitzt stark und hat erbrochen. Die körperliche Untersuchung ist unauffällig. Der Patient ist klinisch stabil. Im sofort gemachten Oberflächen EKG sehen Sie einen anterolateralen Anstieg der ST-Strecken. Was machen Sie am ehesten als nächstes?',
    answers: [
      {
        answerText: 'Gabe von Paracetamol 1 g oral',
        correct: false
      },
      {
        answerText: 'Gabe von Morphinsulfat 10 mg intravenös',
        correct: false
      },
      {
        answerText: 'Gabe von Molsidomin',
        correct: false
      },
      {
        answerText: 'Gabe von Glyceroltrinitrat Spray, zwei Hübe sublingual.',
        correct: true
      },
      {
        answerText: 'Gabe von Glyceroltrinitrat-Infusion (50 mg) intravenös in 50 ml isotoner Kochsalzlösung bei einer Flußrate von 2-10 ml in der Stunde nach Wirkung.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Was ist/sind am ehesten die dosisbegrenzende unerwünschte Wirkung/en von Ethambutol?',
    answers: [
      {
        answerText: 'Hepatotoxizität',
        correct: false
      },
      {
        answerText: 'Knochenmarkssuppression',
        correct: false
      },
      {
        answerText: 'Sehstörungen',
        correct: true
      },
      {
        answerText: 'zentral-nervöse unerwünschte Wirkungen',
        correct: false
      },
      {
        answerText: 'Nephrotoxizität',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Ivabradin kann Phosphene hervorrufen.',
        correct: false
      },
      {
        answerText: 'Ivabradin aktiviert den If-Kanal.',
        correct: true
      },
      {
        answerText: 'Ivabradin kann auch bei AV Block I Grades im Gegensatz zu Verapamil gegeben werden.',
        correct: false
      },
      {
        answerText: 'Tachykardie ist eine typische unerwünschte Wirkung von Ivabradin.',
        correct: false
      },
      {
        answerText: 'Ivabradin wird im Menschen nicht metabolisiert.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Auf Ihrer Station wird eine Patientin (56 Jahre) eingewiesen mit Zustand nach (vor drei Monaten) Schlaganfall und einer Anamnese von Migräne mit Aura sowie Diabetes. Die Schwestern finden die Medikation auf dem Einweisungsarztbrief seltsam und bitten Sie um Überprüfung. Welches der folgenden Medikamente ist am ehesten abzusetzen oder anders zu dosieren?',
    answers: [
      {
        answerText: 'Metformin 1 g , peroral, alle 12 Stunden',
        correct: false
      },
      {
        answerText: 'Bisoprolol 200 g, peroral, einmal am Tag',
        correct: true
      },
      {
        answerText: 'Verapamil 40 mg, peroral, alle sechs Stunden',
        correct: false
      },
      {
        answerText: 'Paracetamol 1 g peroral, alle 12 Stunden',
        correct: false
      },
      {
        answerText: 'Phenprocoumon, Ziel INR 2-3.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden unerwünschten Wirkungen ist/sind am wenigsten typisch für Haloperidol?',
    answers: [
      {
        answerText: 'Hyperthermie',
        correct: false
      },
      {
        answerText: 'Parkinson-ähnliche Störungen',
        correct: false
      },
      {
        answerText: 'Akathisie',
        correct: false
      },
      {
        answerText: 'Spätdyskinesie',
        correct: false
      },
      {
        answerText: 'Hemmung der Galaktorrhö',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Arzneimittel ist zur Langzeittherapie der chronischen Herzinsuffizienz (NYHA-Stadium III) am wenigsten geeignet?',
    answers: [
      {
        answerText: 'Carvedilol',
        correct: false
      },
      {
        answerText: 'Digoxin',
        correct: false
      },
      {
        answerText: 'Milrinon',
        correct: true
      },
      {
        answerText: 'Captopril',
        correct: false
      },
      {
        answerText: 'Spironolacton',
        correct: false
      }
    ]
  },
  {
    questionText: 'Um die Schädigung der Niere durch aktive Metabolite von Cyclophosphamid zu vermindern, sollte man beiCyclophosphamid-Gabe gleichzeitig neben reichlicher Flüssigkeitszufuhr am ehesten anwenden:',
    answers: [
      {
        answerText: 'Ascorbinsäure',
        correct: false
      },
      {
        answerText: 'Folsäure',
        correct: false
      },
      {
        answerText: 'Mesna (Mercaptoethansulfonat-Natriumsalz)',
        correct: true
      },
      {
        answerText: 'Pyridoxin (Vitamin B6)',
        correct: false
      },
      {
        answerText: 'EDTA (Ethylendiamintetraessigsäure)',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Arzneistoffe ist am wenigsten geeignet für die Behandlung eines Status epilepticus?',
    answers: [
      {
        answerText: 'Diazepam',
        correct: false
      },
      {
        answerText: 'Cloazepam',
        correct: false
      },
      {
        answerText: 'Phenobarbital',
        correct: false
      },
      {
        answerText: 'Promethazin',
        correct: true
      },
      {
        answerText: 'Phenytoin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Wegen der Gefahr einer besonders verstärkten Blutdrucksenkung ist Sildenafil am ehesten kontraindiziert während einer Therapie mit:',
    answers: [
      {
        answerText: 'Doxazosin',
        correct: false
      },
      {
        answerText: 'Enalapril',
        correct: false
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: false
      },
      {
        answerText: 'Isosorbid-Dinitrat',
        correct: true
      },
      {
        answerText: 'Yohimbin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Als unerwünschte Wirkung bei Therapie mit Haloperidol ist am wenigsten zu erwarten:',
    answers: [
      {
        answerText: 'bei Frauen: Galaktorrhö',
        correct: false
      },
      {
        answerText: 'Photodermatose',
        correct: true
      },
      {
        answerText: 'Leukopenie',
        correct: false
      },
      {
        answerText: 'Gewichtszunahme',
        correct: false
      },
      {
        answerText: 'aplastische Anämie',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am wenigsten zu?A kann an α1-Adrenozeptoren als Agonist wirken.',
    answers: [
      {
        answerText: 'mitryptilin',
        correct: true
      },
      {
        answerText: 'erreicht sein Wirkungsmaximum bei depressiven Patienten häufig erst nach zwei oder mehr Wochen.',
        correct: false
      },
      {
        answerText: 'kann die Krampfbereitschaft erhöhen.',
        correct: false
      },
      {
        answerText: 'kann anticholinerge unerwünschte Wirkungen hervorrufen.',
        correct: false
      },
      {
        answerText: 'kann unerwünschte orthostatische Hypotonie hervorrufen.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen trifft am wenigsten zu?',
    answers: [
      {
        answerText: 'Lidocain muss parenteral gegeben werden.',
        correct: false
      },
      {
        answerText: 'Lidocain wird hauptsächlich zur Therapie von supraventrikulären Arrhythmien verwendet.',
        correct: true
      },
      {
        answerText: 'Procainamid kann zu einem Lupus erythematodes führen.',
        correct: false
      },
      {
        answerText: 'Chinidin ist peroral wirksam.',
        correct: false
      },
      {
        answerText: 'Alle hier genannten antiarrhythmischen Substanzen können einen negativ inotropen Effekt bewirken.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 50-jährige Patientin stellt sich bei Ihnen vor mit einer langen bekannten Anamnese der Einnahme von Psychopharmaka. Sie ist mehrmals in den letzten Jahren in einem psychiatrischen Krankenhaus stationär behandelt worden. Sie beobachten folgende Veränderungen bei Ihrer Patientin: stereotype orolinguale mastikatorische Bewegungen mit unwillentlichen Lippenbewegungen und Propulsionen der Zunge. Was ist am ehesten die Erklärung/en für diese Symptome?',
    answers: [
      {
        answerText: 'Entzugserscheinungen aufgrund von akutem Absetzen der Lithiumerhaltungstherapie',
        correct: false
      },
      {
        answerText: 'neuroleptisches malignes Syndrom',
        correct: false
      },
      {
        answerText: 'Alkoholentzugserscheinungen',
        correct: false
      },
      {
        answerText: 'Spätdyskinesie',
        correct: true
      },
      {
        answerText: 'Tourette Syndrom',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen über den Metabolismus von neuropharmakologischen Wirkstoffen ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Die analgetischen Wirkungen von Codein beruhen auf seiner Umwandlung zu Methadon.',
        correct: false
      },
      {
        answerText: 'Acetylcholinesterasemangel kann zu verlängerter Muskelrelaxation mit Succinylcholin führen.',
        correct: false
      },
      {
        answerText: 'Bei Patienten mit Morbus Parkinson, die Selegilin verwenden, kann es bei gleichzeitiger Einnahme von Käse und Wein zu einer hypertensiven Krise kommen.',
        correct: true
      },
      {
        answerText: 'Phase II Metabolismus von Morphin führt zu der Bildung eines aktiven Metaboliten.',
        correct: false
      },
      {
        answerText: 'Selektive Serotoninwiederaufnahmehemmer bilden grundsätzlich aktive Metaboliten mit langen Eliminationshalbwertszeiten.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten der Wirkungsmechanismus von Voriconazol?',
    answers: [
      {
        answerText: 'Einlagerung mit Ergosterin in die Wand und damit Porenbildung',
        correct: false
      },
      {
        answerText: 'Hemmung des Cytochrom P450-Systems',
        correct: true
      },
      {
        answerText: 'Hemmung der Zellwandsynthese',
        correct: false
      },
      {
        answerText: 'Spindelgift',
        correct: false
      },
      {
        answerText: 'Antimetabolit',
        correct: false
      }
    ]
  },
  {
    questionText: 'Der Polymorphismus welches Cytochroms ist am ehesten mit einer verminderten Wirksamkeit von Codein verbunden?',
    answers: [
      {
        answerText: 'CYP2D6',
        correct: true
      },
      {
        answerText: 'CYP2D19',
        correct: false
      },
      {
        answerText: 'CYPC9',
        correct: false
      },
      {
        answerText: 'CYP1A2',
        correct: false
      },
      {
        answerText: 'CYP3A4',
        correct: false
      }
    ]
  },
  {
    questionText: 'Der drogenabhängige bewußtlose Herr Michael wird in die Notaufnahme gebracht. Ein begleitender Freund sagt, Herr Michael habe sich intravenös eine unbekannte Dosis Kokain vor genau zwei Stunden injiziert. Eine sofortige Laboranalyse zeigt, daß jetzt die Plasmakonzentration von Kokain 0,75 mg/l beträgt. Kokain hat ein Verteilungsvolumen von 130 Liter und eine Halbwertszeit von einer Stunde. Was war am ehesten die ursprünglich injizierte Dosis von Kokain in mg?',
    answers: [
      {
        answerText: '250',
        correct: false
      },
      {
        answerText: '390',
        correct: true
      },
      {
        answerText: '420',
        correct: false
      },
      {
        answerText: '315',
        correct: false
      },
      {
        answerText: '180',
        correct: false
      }
    ]
  },
  {
    questionText: 'Bei einer 67-jährigen Frau wurde kürzlich ein Vorhofflimmern festgestellt und Sie haben ihr Atenolol (100 mg/Tag) verschrieben. Mit dieser Dosis sei 5 % Atenolol an Plasmaproteine gebunden. Wenn Sie die Dosis halbieren würden auf 50 mg/Tag, wieviel Prozent des Atenolol wäre dann am ehesten an Plasmaproteine gebunden?',
    answers: [
      {
        answerText: '2,5 %',
        correct: false
      },
      {
        answerText: '5 %',
        correct: true
      },
      {
        answerText: '10 %',
        correct: false
      },
      {
        answerText: '125 %',
        correct: false
      },
      {
        answerText: '2 %',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 56-jährige Frau stellt sich bei Ihnen in der Notaufnahme mit Tachykardie, Kurzatmigkeit und Thoraxschmerzen vor. Sie hat zusätzlich noch in den letzten zwei Tagen Durchfall, ist schweißig und ist verängstigt. Sie hatte bis vor zwei Wochen Methimazol genommen, dann aber abgesetzt, weil sie es nicht mehr für notwendig hielt. Sie lassen den TSH-Spiegel messen. Er war im nicht mehr meßbaren niedrigen Bereich. Sie stellen die Diagnose einer akuten Thyrotoxikose. Welche der folgenden Substanzen wären bei dieser Patientin am ehesten indiziert?',
    answers: [
      {
        answerText: 'Amiodaron',
        correct: false
      },
      {
        answerText: 'Dexamethason',
        correct: false
      },
      {
        answerText: 'Adrenalin',
        correct: false
      },
      {
        answerText: 'Propranolol',
        correct: true
      },
      {
        answerText: 'radioaktives Jodisotop',
        correct: false
      }
    ]
  },
  {
    questionText: 'Herr Fritz, ein 65-jähriger Mann, leidet seit Jahren an einem Offenwinkelglaukom und hat eine Reihe von Substanzen zu diesem Zwecke in den letzten sechs Monaten von Ihnen erhalten, aber der intraokuläre Druck ist noch immer nicht unter 20 mmHg. Sie entscheiden sich ihm jetzt Neostigmin-Augentropfen zugeben. Welcher Mechanismus liegt der erwünschten Wirkung dieser Augentropfen am ehesten zugrunde?',
    answers: [
      {
        answerText: 'Kontraktion des Radialmuskels der Iris.',
        correct: false
      },
      {
        answerText: 'Kontraktion des Sphinkters der Iris.',
        correct: false
      },
      {
        answerText: 'Verminderte Produktion von Augenflüssigkeit.',
        correct: false
      },
      {
        answerText: 'Dilatation von retinalen Gefäßen.',
        correct: false
      },
      {
        answerText: 'Kontraktion des Ziliarmuskels.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Sie wollen eine 58-jährigen Patientin mit chronischem Hypertonus und Diabetes mellitus Typ 2, bei der Sie kürzlich ein neu aufgetretenes Vorhofflimmern diagnostiziert haben, einen Gerinnungshemmer verschreiben. Sie entscheiden sich nach Diskussion mit der Patientin für Apixaban. Sie beraten die Patientin ausführlich darüber, wie wichtig es ist das Medikament täglich zu nehmen, denn plötzlichen Absetzen kann am ehesten führen zu',
    answers: [
      {
        answerText: 'Anaphylaxis',
        correct: false
      },
      {
        answerText: 'vermehrte pathologische Blutung',
        correct: false
      },
      {
        answerText: 'Anstieg des INR',
        correct: false
      },
      {
        answerText: 'Schlaganfall',
        correct: true
      },
      {
        answerText: 'Thromozytopenie',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine Patientin entwickelt eine schwere Thromobozytopenie als Folge der Behandlung mit unfraktioniertem Heparin. Sie wollen weiterhin eine parenterale Antikoagulation durchführen. welche der folgenden Substanzen wäre bei dieser Patientin am ehesten geeignet?',
    answers: [
      {
        answerText: 'Axicimab',
        correct: false
      },
      {
        answerText: 'Danaparoid',
        correct: true
      },
      {
        answerText: 'Tirofiban',
        correct: false
      },
      {
        answerText: 'Plasminogen',
        correct: false
      },
      {
        answerText: 'Phenprocoumon',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 54-jähriger Mann soll aufgrund einer entsprechenden Erkrankung mit Gentamicin behandelt werden. Seine Kreatinin-Clearance ist 50 % des Normalwertes (normalerweise gibt man diesen Patienten 100 mg Gentamicin). Auf welche Dosis würde man umstellen?',
    answers: [
      {
        answerText: '110',
        correct: false
      },
      {
        answerText: '75',
        correct: false
      },
      {
        answerText: '200',
        correct: false
      },
      {
        answerText: '50',
        correct: true
      },
      {
        answerText: '150',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 75-jährige Frau klagt über trockene Haut und Verstopfung. Diese behandelt sie mit einem magnesiumhaltigen Laxanz. Sie hat keine anderen Erkrankungen und nimmt keine Medikamente. Die Blutanalyse gibt folgende Werte an: freies Trijodthyronin 0,3 ng/dl (normal 0,23-0,42 ng/dl, freies Thyroxin 0,9 ng/dl (normal 0,8-2,7 ng/dl), TSH-Spiegel 15 mU/l (normal 0,5-5,0 mU/l) und Thyroperoxidaseantikörper 28 IU/l (normal < 0,8 IU/l). Welches der folgenden Substanzen würden Sie dieser Frau am ehesten verschreiben?',
    answers: [
      {
        answerText: 'Kaliumjodid',
        correct: false
      },
      {
        answerText: 'Propranolol',
        correct: false
      },
      {
        answerText: 'Methimazol',
        correct: false
      },
      {
        answerText: 'Loperamid',
        correct: false
      },
      {
        answerText: 'Levothyroxin',
        correct: true
      }
    ]
  },
  {
    questionText: 'Eine 16-jährige Patientin kommt in die Notaufnahme. Sie hat eine Herzfrequenz von 125 Schläge/Minute, ein Atemfrequenz von 40 Atemzüge/Minute und eine maximalen expiratorischen Fluß von weniger als 50% des erwarteten Wertes. Giemen und Brummen sind ohne Stethoskop zu hören. Welche der folgenden Substanzen würde bei dieser Patientin nicht eine direkt bronchodilatorische Wirkung entfalten?',
    answers: [
      {
        answerText: 'Adrenalin',
        correct: false
      },
      {
        answerText: 'Salbutamol',
        correct: false
      },
      {
        answerText: 'Prednison',
        correct: true
      },
      {
        answerText: 'Theophyllin',
        correct: false
      },
      {
        answerText: 'Ipratropiumbromid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ihr 46-jähriger Patient hat einen Nebennierentumor, der ein Cushing Syndrom hervorruft. Welche der folgenden Substanzen könnten Sie am ehesten geben, um die Symptome dieser Erkrankung zu reduzieren?',
    answers: [
      {
        answerText: 'Betamethason',
        correct: false
      },
      {
        answerText: 'Cortisol',
        correct: false
      },
      {
        answerText: 'Fludrocortison',
        correct: false
      },
      {
        answerText: 'Ketoconazol',
        correct: true
      },
      {
        answerText: 'Triamzinolon',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Patient braucht antibiotische Behandlung für eine Endokarditis an einer eingesetzten Schweineherzklappe. In der Kultur haben Sie Enterokokken nachweisen können. In der Anamnese finden Sie eine schwere anaphylaktische Reaktion auf Penicillin G im lezten Jahr. Von den folgenden Substanzen wäre deshalb am ehesten indiziert?',
    answers: [
      {
        answerText: 'Amoxicillin + Clavulansäure',
        correct: false
      },
      {
        answerText: 'Aztreonam',
        correct: false
      },
      {
        answerText: 'Ceftriaxon',
        correct: false
      },
      {
        answerText: 'Tricarzillin',
        correct: false
      },
      {
        answerText: 'Vancomycin',
        correct: true
      }
    ]
  },
  {
    questionText: 'Eine 24-jährige Patientin mit Typ I Diabetes möchte eine möglichst enge Kontrolle des Diabetes, um ihre langfristige Prognose zu optimieren. Welche der folgenden Vorgehensweisen ist am ehesten geeignet für ihre Zwecke?',
    answers: [
      {
        answerText: 'morgendliche Injektionen eines Mischinsulins Insulin lispro und Insulin aspart',
        correct: false
      },
      {
        answerText: 'abendlich Injektionen von Normalinsulin und Insulin glargin',
        correct: false
      },
      {
        answerText: 'morgendliche und abendliche Injektionen von Normalinsulin verstärkt und zusätzlich kleine Mengen von NPH-Insulin zu den Mahlzeiten',
        correct: false
      },
      {
        answerText: 'morgendliche Injektion von Insulin glargin verbunden mit kleinen Injektionen von Insulin lispro zu den Mahlzeiten',
        correct: true
      },
      {
        answerText: 'morgendliche Injektionen NPH-Insulin und abendliche Injektionen von Normalinsulin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 78-jähriger Mann wird ins Krankenhaus gebracht, weil er sich das Bein gebrochen hat. Seine Frau sagt, er sei in das Eßzimmer geschritten, als er mit einem Mal die Balance verloren hat und hinfiel. Bekannt ist, daß der Patient an Vorhofflimmern leidet, sich über Schlaflosigkeit beklagt hat, Angstgefühle empfindet und Hypertoniker ist. Die Medikation besteht aus Atenolol, Phenprocoumon, Diazepam, Losartan und Hydrochlorothiazid. Welche dieser Substanzen sollte man bei diesem Patienten eher nicht geben, weil sie am ehesten das Risiko eines Sturzes erhöht hat?',
    answers: [
      {
        answerText: 'Atenolol',
        correct: false
      },
      {
        answerText: 'Phenprocoumon',
        correct: false
      },
      {
        answerText: 'Diazepam',
        correct: true
      },
      {
        answerText: 'Losartan',
        correct: false
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten nicht einsetzbar bei so genannten Variantangina oder Prinzmetal-Angina?',
    answers: [
      {
        answerText: 'Amylnitrit',
        correct: false
      },
      {
        answerText: 'Diltiazem',
        correct: false
      },
      {
        answerText: 'Isosorbidmononitrat',
        correct: false
      },
      {
        answerText: 'Metoprolol',
        correct: true
      },
      {
        answerText: 'Nifedipin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 47-jähriger Mann leidet an einer Belastung-Angina pectoris. Der Mann hat eine Behandlung mit sublingualen Nitroglyzerin bei Bedarf bekommen und bekam zusätzlich Isosorbidmononitrat. Welches ist am ehesten ein potentiell schädlicher Effekt von Nitraten in der Prophylaxe dieser Erkrankung?',
    answers: [
      {
        answerText: 'reduzierte Ejektionszeit',
        correct: false
      },
      {
        answerText: 'Zunahme der Herzfrequenz',
        correct: true
      },
      {
        answerText: 'erhöhte Kapazität der systemischen Venen',
        correct: false
      },
      {
        answerText: 'verminderter arterieller Blutdruck',
        correct: false
      },
      {
        answerText: 'Anstieg des ventrikulären enddiastolischen Volumens',
        correct: false
      }
    ]
  },
  {
    questionText: 'Als Folge einer fortgeschrittenen Tuberkulose hat ein 54-jähriger Mann, den Sie behandeln, Zeichen einer schweren akuten Nebenniereninsuffizienz entwickelt. Sie sollten dem Patienten am ehesten mit welcher Medikamentenkombination einstellen?',
    answers: [
      {
        answerText: 'Aldosteron und Fludrocortison',
        correct: false
      },
      {
        answerText: 'Cortisol und Fludrocortison',
        correct: true
      },
      {
        answerText: 'Dexamethason und Metyrapon',
        correct: false
      },
      {
        answerText: 'Fludrocortison und Metyrapon',
        correct: false
      },
      {
        answerText: 'Triamcinolol und Dexamethason',
        correct: false
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten keine typische unerwünschte Wirkung von Prednison?',
    answers: [
      {
        answerText: 'Hypotrichose',
        correct: false
      },
      {
        answerText: 'Striae distensae',
        correct: false
      },
      {
        answerText: 'Kutane Atrophie',
        correct: false
      },
      {
        answerText: 'Vaskuläre Purpura',
        correct: false
      },
      {
        answerText: 'kutane Superinfektionen',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgen Substanzen zur prophylaktischen Therapie bei Patienten mit bekannter Neigung zu tonisch-klonischen Anfällen und partiellen Anfällen erhöht den Lebermetabolismus vieler Substanzen inklusive Phenytoin und Phenprocoumon?',
    answers: [
      {
        answerText: 'Buspiron',
        correct: false
      },
      {
        answerText: 'Clonazepam',
        correct: false
      },
      {
        answerText: 'Eszopiclon',
        correct: false
      },
      {
        answerText: 'Phenobarbital',
        correct: true
      },
      {
        answerText: 'Triazolam',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung zwischen Wirkungsmechanismus und antiepileptischer Substanz ist am ehesten nicht zutreffend?',
    answers: [
      {
        answerText: 'Benzodiazepine erleichtern GABA-mediierte inhibitorische Aktionen',
        correct: false
      },
      {
        answerText: 'Ethosuximid hemmt selektiv Kaliumkanäle in thalamischen Neuronen',
        correct: false
      },
      {
        answerText: 'Phenobarbital hat verschiedene Wirkungsmechanismen, z.B. die Verstärkung der Wirkung von GABA, Antagonismus an Glutamatrezeptoren und Blockade von Natriumkanälen',
        correct: true
      },
      {
        answerText: 'Phenytoin verlängert die Inaktivierungszeit des Natriumkanales',
        correct: false
      },
      {
        answerText: 'Zonisamid blockiert spannungsabhängige Natriumkanäle',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welcher von den folgenden Stoffen ist am ehesten geeignet einen essentiellen Tremor bei einem Patienten zu unterdrücken, der gleichzeitig an Asthma leidet?',
    answers: [
      {
        answerText: 'Diazepam',
        correct: false
      },
      {
        answerText: 'Levodopa',
        correct: false
      },
      {
        answerText: 'Metoprolol',
        correct: false
      },
      {
        answerText: 'Propranolol',
        correct: true
      },
      {
        answerText: 'Terbutalin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu antipsychotischen Substanzen trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Okulogyre Krisen unter Haloperidol kann man mit Biperiden behandeln.',
        correct: true
      },
      {
        answerText: 'Morbus Parkinson-ähnliche unerwünschte Wirkungen kommen unter Olanzepin genauso häufig wie unter Haloperidol vor.',
        correct: false
      },
      {
        answerText: 'Haloperidol bewirkt genauso häufig wie Thioridazin Sehstörungen und Harnretention.',
        correct: false
      },
      {
        answerText: 'Wenn es unter der Therapie mit Haloperidol zu Akathesien gekommen ist, muß man die Dosis sofort erhöhen.',
        correct: false
      },
      {
        answerText: 'Tardive Dyskinesien unter Haloperidol treten typischerweise in den ersten 24 Stunden der Behandlung auf.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Substanz machen typischerweise keine Pigmentstörungen an der Haut?',
    answers: [
      {
        answerText: 'Ethinylestradiol/Levonorgestrel',
        correct: false
      },
      {
        answerText: 'Amiodaron',
        correct: false
      },
      {
        answerText: 'Auranofin',
        correct: false
      },
      {
        answerText: 'Minocyclin',
        correct: false
      },
      {
        answerText: 'Lidocain',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche Aussage über die Verwendung von L-Dopa zur Therapie des Morbus Parkinson trifft am ehesten zu?',
    answers: [
      {
        answerText: 'L-Dopa bewirkt weniger zentrale unerwünschte Wirkungen, wenn es zusammen mit einem weiteren Medikament eingenommen wird, daß die hepatische Dopadecarboxylase hemmt.',
        correct: false
      },
      {
        answerText: 'Fluktuationen in der Wirksamkeit von L-Dopa können im Fortgang der Behandlung häufiger auftreten.',
        correct: true
      },
      {
        answerText: 'Verhindert unerwünschte extra-pyrimidal-motorische Wirkungen antipsychotischer Pharmaka.',
        correct: false
      },
      {
        answerText: 'Schützt Krebspatienten vor Melanomen.',
        correct: false
      },
      {
        answerText: 'Hat toxische Wirkungen, indem es pulmonale Infiltrate hervorruft.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 50-jährige Frau kommt zu Ihnen mit einem positiven Mammographiebefund. Sie führen eine Biopsie durch und finden ein kleines Karzinom, das man entfernen kann. Die biochemische Analyse des entfernten Tumors zeigt die Expression von Östrogen und Progesteronrezeptoren. Welches Medikament wird die Patientin nach beendeter chirurgischer Therapie am ehesten erhalten?',
    answers: [
      {
        answerText: 'Danazol',
        correct: false
      },
      {
        answerText: 'Flutamid',
        correct: false
      },
      {
        answerText: 'Leuprolid',
        correct: false
      },
      {
        answerText: 'Mifipriston',
        correct: false
      },
      {
        answerText: 'Tamoxifen',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche Aussage über die Behandlung von Patienten mit Antidepressiva trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Bupropion hemmt die Noradrenalin-Wiederaufnahme in Nervenendigungen des zentralen Nervensystems.',
        correct: true
      },
      {
        answerText: 'Chronische Behandlung mit Amitryptilin führt zu einer Herunterregulation von Adrenozeptoren im zentralen Nervensystem.',
        correct: false
      },
      {
        answerText: 'Stets mißt man bei Patienten mit Depressionen verminderte Spiegel von Noradrenalin und Serotonin in der Zerebospinalflüssigkeit.',
        correct: false
      },
      {
        answerText: 'Selegilin hemmt selektiv den Abbau von Serotonin und wirkt so antidepressiv.',
        correct: false
      },
      {
        answerText: 'Nortryptilin kann die sedierenden Wirkungen von Ethylalkohol nicht verstärken.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Sie haben in Ihrer allgemeinmedizinischen Praxis eine 36-jährige Gärtnereiangestellte zu behandeln. Sie zeigt Symptome einer schweren Depression, die nichts mit einer allgemeinmedizinischen Erkrankung zu tun haben, es liegt kein Trauerfall vor, es liegt keine Medikamentenabhängigkeit vor. Sie nimmt zur Zeit keine Medikamente auf Rezept oder im Rahmen der Selbstmedikation. Sie entschließen sich mit einer Behandlung durch Sertralin zu beginnen. Sie würden die Patientin am ehesten auf Folgendes hinweisen?',
    answers: [
      {
        answerText: 'Sie sollte die Tablette vorzugsweise zum Einschlafen nehmen.',
        correct: false
      },
      {
        answerText: 'Sie kann bedenkenlos zusätzlich z.B. frei verkäufliche Grippemittel einnehmen.',
        correct: false
      },
      {
        answerText: 'Man sollte nicht vor zwei Wochen mit einer therapeutischen Wirksamkeit rechnen.',
        correct: true
      },
      {
        answerText: 'Übelkeit ist nicht zu erwarten.',
        correct: false
      },
      {
        answerText: 'Erbrechen ist nicht zu erwarten.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 43-jährige Frau mit Typ 2 Diabetes und Hypertonus kommt in Ihre Ambulanz. Ihr gegenwärtiger Blutdruck (3-Mal gemessen) ist nicht im Zielbereich und beträgt 155/98 mm Hg. Trotz der Tatsache, daß Sie ihr Hydrochlorothiazid und Captopril verschrieben haben. Sie sind der Meinung, die Patientin ist „Compliant“. Sie könnten sich aber vorstellen, daß durch gleichzeitige Gabe eines anderen Medikamentes, die blutdrucksenkende Wirkung der verschriebenen Medikamente vermindert wird. Welche/s der folgenden Medikamentengruppen/Medikamente ist/sind in der Lage die blutdrucksenkende Wirkung von Captopril an ehesten abzuschwächen?',
    answers: [
      {
        answerText: 'Losartan',
        correct: false
      },
      {
        answerText: 'Schleifendiuretika',
        correct: false
      },
      {
        answerText: 'Ibuprofen',
        correct: true
      },
      {
        answerText: 'Glibenclamid',
        correct: false
      },
      {
        answerText: 'Pioglitazon',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 45-jähriger Maler und Anstreicher kommt in Ihre Praxis mit Atemsymptomen. Nach sorgfältiger klinischer Diagnostik stellen Sie die Diagnose idiopathische pulmonale Hypertension. Welches der folgenden Substanzen bindet am ehesten an Endothelinrezeptoren und ist zugelassen für die Behandlung dieses Krankheitsbildes?',
    answers: [
      {
        answerText: 'Aliskiren',
        correct: false
      },
      {
        answerText: 'Bosentan',
        correct: true
      },
      {
        answerText: 'Capsaicin',
        correct: false
      },
      {
        answerText: 'Losartan',
        correct: false
      },
      {
        answerText: 'Neseritid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 60-jähriger Patient kommt zu Ihnen in die Notaufnahme mit starken Thoraxschmerzen. Das EKG zeigt ventrikuläre Tachykardien mit zwischendurch auftretendem normalem Sinusrhythmus. ST-Segmentveränderungen wie bei Ischämie. Sie stellen die Diagnose Herzinfarkt und der Patient kommt auf die kardiale Intensivstation. Von den folgenden Medikamenten würde man ehesten für die Therapie der Rhythmusstörung geben?',
    answers: [
      {
        answerText: 'Adenosin',
        correct: false
      },
      {
        answerText: 'Digoxin',
        correct: false
      },
      {
        answerText: 'Lidocain',
        correct: true
      },
      {
        answerText: 'Chinidin',
        correct: false
      },
      {
        answerText: 'Verapamil',
        correct: false
      }
    ]
  },
  {
    questionText: 'D Welche Aussage trifft zu?',
    answers: [
      {
        answerText: 'Adrenozeptorenantagonisten vermindern den Bronchialwiderstand.',
        correct: false
      },
      {
        answerText: 'Adrenozeptorenantagonisten steigern die Insulinfreisetzung.',
        correct: false
      },
      {
        answerText: 'Adrenozeptorenantagonisten verkürzen die AV-Überleitungszeit.',
        correct: false
      },
      {
        answerText: 'Adrenozeptorenantagonisten können den diastolischen Blutdruck senken.',
        correct: true
      },
      {
        answerText: 'Adrenozeptorenantagonisten steigern die Herzfrequenz.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist falsch?',
    answers: [
      {
        answerText: 'Die cytoplasmatische K+-Konzentration der Herzmuskelzelle ist höher als die extrazelluläre Konzentration.',
        correct: false
      },
      {
        answerText: 'Die cytoplasmatische Na+-Konzentration der Herzmuskelzelle ist niedriger als die extrazelluläre Konzentration.',
        correct: false
      },
      {
        answerText: 'Während des Aufstrichs des Aktionspotentials fließen Na+-Ionen rasch nach intrazellulär.',
        correct: false
      },
      {
        answerText: 'Mit Klasse I-Antiarrhythmika wird der schnelle Na+-Einstrom im Verlauf des Aktionspotentials gehemmt.',
        correct: false
      },
      {
        answerText: 'Mit Dihydropyridinen wird der Ca2+-Ausstrom während der Plateauphase des Aktionspotentials gehemmt.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen zu Herzglykosiden ist richtig?',
    answers: [
      {
        answerText: 'Sie werden durch Na+-Ionen von ihren Bindungsstellen an der Na-K-ATPase verdrängt.',
        correct: false
      },
      {
        answerText: 'Sie verzögern die Überleitung im AV-Knoten aufgrund ihrer direkten parasympathomimetischen Wirkung.',
        correct: false
      },
      {
        answerText: 'Sie sind zur Behandlung einer supraventrikulären Tachykardie bei gleichzeitig bestehender Herzinsuffizienz geeignet.',
        correct: false
      },
      {
        answerText: 'Sie erhöhen die Verfügbarkeit von Ca2+-Ionen im Zytosol als Folge eines Abfalls der intrazellulären Na-Konzentration bedingt durch die Hemmung der Na-K-ATPase',
        correct: true
      },
      {
        answerText: 'Sie erhöhen den cAMP Spiegel.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Nitrate setzen in der Zelle enzymatisch NO frei.',
        correct: false
      },
      {
        answerText: 'Molsidomin setzt in der Zelle nicht-enzymatisch NO frei.',
        correct: false
      },
      {
        answerText: 'Bei Nitraten kommt es rasch zu Toleranzphänomenen.',
        correct: false
      },
      {
        answerText: 'Nitrate verursachen deutlich mehr Nachlast- als Vorlastsenkung.',
        correct: true
      },
      {
        answerText: 'Nitrate sind auch peroral einsetzbar',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten falsch?Minoxidil hat häufig folgende unerwünschte Nebenwirkung(en):',
    answers: [
      {
        answerText: 'Reflektorische Katecholaminfreisetzung',
        correct: true
      },
      {
        answerText: 'Natrium- und Volumenretention',
        correct: false
      },
      {
        answerText: 'Reflektorische Tachykardie',
        correct: false
      },
      {
        answerText: 'Hirsutismus',
        correct: false
      },
      {
        answerText: 'Schlaflosigkeit',
        correct: false
      }
    ]
  },
  {
    questionText: 'Bei der Muskelrelaxation mit einem depolarisierenden Muskelrelaxans vom Typ des Succinylbischolin (Suxamethonium) können die folgenden unerwünschten Wirkungen nicht auftreten?',
    answers: [
      {
        answerText: 'Tachykardie',
        correct: true
      },
      {
        answerText: 'Hyperkaliämie',
        correct: false
      },
      {
        answerText: 'stark prolongierte Wirkung bei Pseudocholinesterase-Mangel',
        correct: false
      },
      {
        answerText: 'postoperativer Muskelkater',
        correct: false
      },
      {
        answerText: 'Maligne Hyperthermie',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Sulfonylharnstoffe verstärken die Freisetzung von Insulin aus B-Zellen der Langerhans\'schen Inseln des Pankreas durch Inaktivierung von ATP-abhängigen Kaliumkanälen.',
        correct: true
      },
      {
        answerText: 'Glukagon senkt die Glykogenolyse und die Glukoseabgabe aus der Leber.',
        correct: false
      },
      {
        answerText: 'Biguanide steigern die Gluconeogenese in der Leber.',
        correct: false
      },
      {
        answerText: 'Sulfonylharnstoffe sind bei der Behandlung des Diabetes mellitus Typ I wirksam.',
        correct: false
      },
      {
        answerText: 'Metformin gehört zu den Sulfonylharnstoffen',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft für das Osmodiuretikum Mannit am ehesten zu?',
    answers: [
      {
        answerText: 'Es wird glomerulär filtriert und nicht tubulär rückresorbiert.',
        correct: true
      },
      {
        answerText: 'Es wird glomerulär filtriert und zusätzlich tubulär sezerniert.',
        correct: false
      },
      {
        answerText: 'Es wird in der Leber rasch metabolisiert.',
        correct: false
      },
      {
        answerText: 'Es ist besonders geeignet zur Therapie des akuten Lungenödems.',
        correct: false
      },
      {
        answerText: 'Es hat keine Wirkung auf ein Hirnödem.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen über das Schleifendiuretikum Furosemid (Lasix®) ist richtig?',
    answers: [
      {
        answerText: 'Furosemid hemmt den Na+-, K+-, 2 Cl--Cotransport.',
        correct: true
      },
      {
        answerText: 'Bei hohen Dosen ist mit einer Hemmung der Reninsekretion zu rechnen.',
        correct: false
      },
      {
        answerText: 'Gleichzeitige Verabreichung eines K+-sparenden Diuretikums hemmt die diuretische Wirkung von Furosemid.',
        correct: false
      },
      {
        answerText: 'Furosemid ist bei eingeschränkter Nierenfunktion nicht mehr wirksam.',
        correct: false
      },
      {
        answerText: 'Furosemid bewirkt keine Blutdrucksenkung.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage zum Renin-Angiotensin-Aldosteron-System trifft nicht zu?',
    answers: [
      {
        answerText: 'Renin ist eine Protease.',
        correct: false
      },
      {
        answerText: 'Angiotensinogen hat im Gegensatz zu Angiotensin II keine Wirkung auf die Freisetzung von Aldosteron.',
        correct: false
      },
      {
        answerText: 'Durch Stimulation renaler β-Adrenozeptoren wird vermehrt Renin freigesetzt.',
        correct: false
      },
      {
        answerText: 'Angiotensin II wirkt gefäßerweiternd.',
        correct: true
      },
      {
        answerText: 'Ramipril hemmt die ACE-Aktivität.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist falsch?Typische Wirkungen von Morphin-artigen Analgetika sind:',
    answers: [
      {
        answerText: 'Aktivierung des Atemzentrums',
        correct: true
      },
      {
        answerText: 'Euphorie',
        correct: false
      },
      {
        answerText: 'Dysphorie',
        correct: false
      },
      {
        answerText: 'Tonuserhöhung der Muskulatur im Magen-Darm-Trakt',
        correct: false
      },
      {
        answerText: 'Pupillenverengung',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Zu den pharmakologischen Eigenschaften der Benzodiazepine zählen nicht:',
    answers: [
      {
        answerText: 'antipsychotische Wirkung',
        correct: true
      },
      {
        answerText: 'Anxiolyse',
        correct: false
      },
      {
        answerText: 'periphere Muskelrelaxation',
        correct: false
      },
      {
        answerText: 'antikonvulsive Wirkung',
        correct: false
      },
      {
        answerText: 'Sedation',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der genannten Arzneistoffgruppen kann die Wirkung von nichtdepolarisierenden Muskelrelaxantien verstärken?',
    answers: [
      {
        answerText: 'Penicilline',
        correct: false
      },
      {
        answerText: 'Gyrasehemmer',
        correct: false
      },
      {
        answerText: 'Cephalosporine',
        correct: false
      },
      {
        answerText: 'Sulfonamide',
        correct: false
      },
      {
        answerText: 'Aminoglykosidantibiotika',
        correct: true
      }
    ]
  },
  {
    questionText: 'A Welche Aussage über Scopolamin trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Scopolamin blockiert M-Cholinozeptoren.',
        correct: true
      },
      {
        answerText: 'Es überschreitet verglichen mit Atropin schlechter die Bluthirnschranke.',
        correct: false
      },
      {
        answerText: 'Es hat in therapeutischer Dosierung zumeist eine euphorisierende Wirkung.',
        correct: false
      },
      {
        answerText: 'Es eignet sich wegen seiner antiemetischen Wirkung zur Behandlung der Cisplatin-Nebenwirkungen.',
        correct: false
      },
      {
        answerText: 'Es hemmt in therapeutischer Dosierung nicht die Speichelsekretion.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Omeprazol aktiviert die H+/K+-ATPase der Belegzellen.',
        correct: false
      },
      {
        answerText: 'Omeprazol blockiert die H2-Rezeptoren.',
        correct: false
      },
      {
        answerText: 'Omeprazol wirkt zusätzlich als kompetitiver Gastrin-Antagonist.',
        correct: false
      },
      {
        answerText: 'Omeprazol wird erst bei saurem pH in die aktive Form umgewandelt.',
        correct: true
      },
      {
        answerText: 'Omeprazol blockiert M3 Rezeptoren.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Pharmaka hemmt die Motorik des Magen-Darm-Traktes und kann dadurch die Passagezeit verlängern?',
    answers: [
      {
        answerText: 'Carbachol',
        correct: false
      },
      {
        answerText: 'Physostigmin',
        correct: false
      },
      {
        answerText: 'Metoclopramid',
        correct: false
      },
      {
        answerText: 'Codein',
        correct: true
      },
      {
        answerText: 'Neostigmin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist richtig? Neostigmin bewirkt keine',
    answers: [
      {
        answerText: 'Zunahme der Darmmotilität.',
        correct: false
      },
      {
        answerText: 'Hemmung der Magensäuresekretion.',
        correct: true
      },
      {
        answerText: 'Miosis.',
        correct: false
      },
      {
        answerText: 'Abnahme der Herzfrequenz.',
        correct: false
      },
      {
        answerText: 'Steigerung der Bronchialsekretion.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist richtig? Die Wirkung von Omeprazol an der Belegzelle beruht auf einer:',
    answers: [
      {
        answerText: 'kompetitiven Hemmung der Wirkung von Gastrin.',
        correct: false
      },
      {
        answerText: 'kompetitiven Hemmung von Histamin an H2-Rezeptoren.',
        correct: false
      },
      {
        answerText: 'irreversiblen Hemmung der H+/K+-ATPase.',
        correct: true
      },
      {
        answerText: 'irreversiblen Hemmung der Adenylatzyklase.',
        correct: false
      },
      {
        answerText: 'Blockade von Prostaglandinrezeptoren.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen ist bei einer Infusion von Isoprenalin nicht zu erwarten?',
    answers: [
      {
        answerText: 'Tachykardie',
        correct: false
      },
      {
        answerText: 'Abfall des diastolischen Blutdrucks',
        correct: false
      },
      {
        answerText: 'Bronchokonstriktion',
        correct: true
      },
      {
        answerText: 'Steigerung der Glykogenolyse',
        correct: false
      },
      {
        answerText: 'Freisetzung von freien Fettsäuren.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist nicht richtig? Eine Bronchodilatation erreicht man mit',
    answers: [
      {
        answerText: 'Isoprenalin.',
        correct: false
      },
      {
        answerText: 'Salbutamol.',
        correct: false
      },
      {
        answerText: 'Terbutalin.',
        correct: false
      },
      {
        answerText: 'Atenolol.',
        correct: true
      },
      {
        answerText: 'Salmeterol.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist nicht richtig?',
    answers: [
      {
        answerText: 'Theophyllin wirkt positiv inotrop.',
        correct: false
      },
      {
        answerText: 'Theophyllin hat eine gewisse koronardilatierende Wirkung.',
        correct: false
      },
      {
        answerText: 'Theophyllin kann Arrhythmien auslösen.',
        correct: false
      },
      {
        answerText: 'Theophyllin wirkt zentral erregend.',
        correct: false
      },
      {
        answerText: 'Theophyllin wird nicht metabolisiert.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen von älteren Histamin-H1-Rezeptorblockern, z.B. Diphenhydramin erklären sich nicht durch Blockade von H1-Rezeptoren?',
    answers: [
      {
        answerText: 'Beseitigung einer Urtikaria',
        correct: false
      },
      {
        answerText: 'Mundtrockenheit',
        correct: true
      },
      {
        answerText: 'Aufhebung der Histamin-vermittelten Kontraktion der Bronchialmuskulatur',
        correct: false
      },
      {
        answerText: 'Müdigkeit',
        correct: false
      },
      {
        answerText: 'Vasokontriktion',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen können nach Gabe von β2-Adrenozeptor-Agonisten (z.B. Terbutalin) nicht auftreten?',
    answers: [
      {
        answerText: 'Tremor',
        correct: false
      },
      {
        answerText: 'Tachykardie',
        correct: false
      },
      {
        answerText: 'Hypokaliämie',
        correct: true
      },
      {
        answerText: 'Bronchodilatation',
        correct: false
      },
      {
        answerText: 'Schlaflosigkeit',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Wirkung haben Cephalosporine?',
    answers: [
      {
        answerText: 'Sie hemmen die Folsäuresynthese.',
        correct: false
      },
      {
        answerText: 'Sie blockieren die Proteinsynthese.',
        correct: false
      },
      {
        answerText: 'Sie erhöhen die Permeabilität der Plasmamembran.',
        correct: false
      },
      {
        answerText: 'Sie stören die Zellwandsynthese.',
        correct: true
      },
      {
        answerText: 'Sie hemmen die Purin-Synthese',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen über die Biotransformation von Arzneistoffen ist richtig?',
    answers: [
      {
        answerText: 'Bei der Biotransformation von Arzneistoffen entstehen in der Regel lipophilere Verbindungen, die renal ausgeschieden werden.',
        correct: false
      },
      {
        answerText: 'Die Kopplung an Glucuronsäure gehört zu den Phase-II-Reaktionen.',
        correct: true
      },
      {
        answerText: 'Der H2-Rezeptorantagonist Cimetidin kann die Wirkung anderer Pharmaka durch Enzyminduktion in der Leber abschwächen.',
        correct: false
      },
      {
        answerText: 'Die Bildung noch wirksamer Metabolite trägt nicht entscheidend zu der langen Wirkdauer („biologische Halbwertzeit“) von Diazepam bei.',
        correct: false
      },
      {
        answerText: 'Rifampicin-Metabolite verstärken die Wirkung von Kontrazeptiva.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten falsch? Amoxicillin unterscheidet sich von Penicillin G durch',
    answers: [
      {
        answerText: 'höhere Säurestabilität.',
        correct: true
      },
      {
        answerText: 'ein breiteres Wirkungsspektrum.',
        correct: false
      },
      {
        answerText: 'eine höhere Penicillinaseresistenz.',
        correct: false
      },
      {
        answerText: 'eine längere Wirkdauer.',
        correct: false
      },
      {
        answerText: 'bessere Bioverfügbarkeit.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der genannten Chemotherapeutika wirken bakterizid durch Hemmung der bakteriellen Proteinsynthese?',
    answers: [
      {
        answerText: 'Azlocillin',
        correct: false
      },
      {
        answerText: 'Co-trimoxazol',
        correct: false
      },
      {
        answerText: 'Tetracyclin',
        correct: false
      },
      {
        answerText: 'Cefalotin',
        correct: false
      },
      {
        answerText: 'Gentamicin',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welcher der folgenden Arzneistoffe wird nicht als Tuberkulostatikum eingesetzt?',
    answers: [
      {
        answerText: 'Streptomycin',
        correct: false
      },
      {
        answerText: 'Ethambutol',
        correct: false
      },
      {
        answerText: 'Rifampicin',
        correct: false
      },
      {
        answerText: 'Isoniazid',
        correct: false
      },
      {
        answerText: 'Bacitracin',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der genannten Antibiotika hemmen die bakterielle Zellwandsynthese?',
    answers: [
      {
        answerText: 'Doxycyclin',
        correct: false
      },
      {
        answerText: 'Levofloxacin',
        correct: false
      },
      {
        answerText: 'Vancomycin',
        correct: true
      },
      {
        answerText: 'Erythromycin',
        correct: false
      },
      {
        answerText: 'Trimethoprim',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der genannten Penicilline zeigen eine Stabilität gegenüber Staphylokokken-Penicillinasen?',
    answers: [
      {
        answerText: 'Amoxicillin',
        correct: false
      },
      {
        answerText: 'Ampicillin',
        correct: false
      },
      {
        answerText: 'Flucloxacillin',
        correct: true
      },
      {
        answerText: 'Penicillin V',
        correct: false
      },
      {
        answerText: 'Penicillin G',
        correct: false
      }
    ]
  },
  {
    questionText: 'Bei welchen der folgenden Pharmaka ist am ehesten mit atropinartigen Nebenwirkungen zu rechnen?',
    answers: [
      {
        answerText: 'Carbachol',
        correct: false
      },
      {
        answerText: 'Imipramin',
        correct: true
      },
      {
        answerText: 'Neostigmin',
        correct: false
      },
      {
        answerText: 'Isoprenalin',
        correct: false
      },
      {
        answerText: 'Histamin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Zuordnungen ist richtig?',
    answers: [
      {
        answerText: 'Amilorid: Hemmstoff des Angiotensin „converting enzyme“',
        correct: false
      },
      {
        answerText: 'Chlortalidon: Thiazid-analoges Diuretikum',
        correct: true
      },
      {
        answerText: 'Captopril: Carboanhydrase-Hemmstoff',
        correct: false
      },
      {
        answerText: 'Torasemid: Osmotisches Diuretikum',
        correct: false
      },
      {
        answerText: 'Mannit: Schleifendiuretikum',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen ist nicht richtig? Eine Adrenalinzufuhr bewirkt in Gegenwart von Propranolol',
    answers: [
      {
        answerText: 'Zunahme des peripheren Widerstandes.',
        correct: false
      },
      {
        answerText: 'Erhöhung des systolischen Blutdruckes.',
        correct: false
      },
      {
        answerText: 'Erhöhung des diastolischen Blutdruckes.',
        correct: false
      },
      {
        answerText: 'Zunahme der Herzfrequenz.',
        correct: false
      },
      {
        answerText: 'einen negativ inotropen Effekt.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Durch welche der folgenden Maßnahmen kann therapeutisch die Kontraktilität des insuffizienten Herzens erhöht werden?',
    answers: [
      {
        answerText: 'Hemmung der Phosphodiesterase III durch Amrinon oder Milrinon',
        correct: false
      },
      {
        answerText: 'Stimulation der Endothelin-Adrenozeptoren durch Dobutamin',
        correct: false
      },
      {
        answerText: 'Stimulation der Na-K-ATPase durch Digitoxin',
        correct: true
      },
      {
        answerText: 'Hemmung der Na-Cl-ATPase durch Herzglykoside',
        correct: false
      },
      {
        answerText: 'Senkung der Ca2+- Sensitivität durch Levosimendan',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Sulfonylharnstoffen ist richtig?',
    answers: [
      {
        answerText: 'Sie sind wirksam beim Typ I und II des Diabetes mellitus.',
        correct: false
      },
      {
        answerText: 'Sie verbessern die Glukose-Aufnahme.',
        correct: false
      },
      {
        answerText: 'Sie hemmen Kalzium-Kanäle in den B-Zellen des Pankreas.',
        correct: false
      },
      {
        answerText: 'Sie hemmen Kalium-Kanäle in den B-Zellen des Pankreas.',
        correct: true
      },
      {
        answerText: 'Sie aktivieren Kalium-Kanäle in den B-Zellen des Pankreas.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der aufgeführten Nebenwirkungen können unter therapeutischer Anwendung von Schleifendiuretika (z. B. Furosemid) nicht auftreten?',
    answers: [
      {
        answerText: 'Hörstörungen',
        correct: false
      },
      {
        answerText: 'Hypokaliämie',
        correct: false
      },
      {
        answerText: 'verminderte Glucosetoleranz',
        correct: false
      },
      {
        answerText: 'Gichtanfälle',
        correct: false
      },
      {
        answerText: 'Hyperkaliämie',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welches der genannten Pharmaka gehört in die Stoffklasse der K+-sparenden Diuretika?',
    answers: [
      {
        answerText: 'Hydrochlorothiazid',
        correct: false
      },
      {
        answerText: 'Mannit',
        correct: false
      },
      {
        answerText: 'Triamteren',
        correct: true
      },
      {
        answerText: 'Azetazolamid',
        correct: false
      },
      {
        answerText: 'Indapamid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der genannten Substanzen erhöht die Harnsäureausscheidung?',
    answers: [
      {
        answerText: 'Uricase',
        correct: false
      },
      {
        answerText: 'Allopurinol',
        correct: false
      },
      {
        answerText: 'Probenecid',
        correct: true
      },
      {
        answerText: 'Colchicin',
        correct: false
      },
      {
        answerText: 'Indometacin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage über das Parasympathomimetikum Carbachol trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Es wirkt am Magen-Darm-Trakt spasmolytisch.',
        correct: false
      },
      {
        answerText: 'Es hemmt die Acetylcholinesterase.',
        correct: false
      },
      {
        answerText: 'Es kann bei Patienten mit Glaukom den Augeninnendruck erhöhen.',
        correct: false
      },
      {
        answerText: 'Es ist wegen seiner bronchialkonstriktorischen Wirkung bei Patienten mit Asthma bronchiale kontraindiziert.',
        correct: true
      },
      {
        answerText: 'Es wird peroral gegeben',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage über Atemgifte ist nicht zutreffend?Latenz.',
    answers: [
      {
        answerText: 'Eine Konzentration von 0,1 % Kohlenmonoxid in der Atemluft führt in weniger als einer Stunde zu einem schwerwiegenden Sauerstoffmangel im Gewebe.',
        correct: false
      },
      {
        answerText: 'Die Toxizität von CO in Brandgasen wird durch die Entstehung von HCN verstärkt.',
        correct: false
      },
      {
        answerText: 'Stickstoffmonoxid erzeugt ein toxisches Lungenödem in der Regel erst nach mehrstündiger',
        correct: false
      },
      {
        answerText: 'Schwefelwasserstoff ist schwerer als Luft und sammelt sich in tiefen Teilen von Räumen und Behältern.',
        correct: false
      },
      {
        answerText: 'Kohlendioxid ist leichter als Luft.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Feststellungen ist am ehesten falsch? Das β-Sympathomimetikum Salbutamol',
    answers: [
      {
        answerText: 'kann Tremor der Skelettmuskulatur verursachen.',
        correct: false
      },
      {
        answerText: 'wirkt bronchodilatierend.',
        correct: false
      },
      {
        answerText: 'hemmt die Freisetzung von Histamin aus Mastzellen.',
        correct: true
      },
      {
        answerText: 'wirkt blutdrucksteigernd.',
        correct: false
      },
      {
        answerText: 'kann Arrhythmien bedingen.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft nicht zu? Theophyllin wird u.a. durch Metabolismus über Enzyme des Cytochrom-P450 -Systems eliminiert. Daraus folgt, daß',
    answers: [
      {
        answerText: 'die Biotransformation von Theophyllin durch gleichzeitige Gabe von Erythromycin gehemmt werden kann.',
        correct: false
      },
      {
        answerText: 'Raucher eine höhere Theophyllin-Clearance aufweisen.',
        correct: false
      },
      {
        answerText: 'die Metabolisierungsgeschwindigkeit von Theophyllin durch gleichzeitige Gabe von Carbamazepin erhöht sein kann.',
        correct: false
      },
      {
        answerText: 'Theophyllin bei Säuglingen und Kleinkindern einer Kinetik 0. Ordnung unterliegen kann.',
        correct: false
      },
      {
        answerText: 'Theophyllin bei Früh- und Neugeborenen eine gegenüber Erwachsenen verkürzte Eliminationshalbwertszeit aufweist.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Für welche der genannten Indikationen können Opioide nicht eingesetzt werden?',
    answers: [
      {
        answerText: 'Unterdrückung des Hustenreflexes.',
        correct: false
      },
      {
        answerText: 'Starke Schmerzzustände.',
        correct: false
      },
      {
        answerText: 'Prämedikation vor operativen Eingriffen.',
        correct: true
      },
      {
        answerText: 'Neuroleptanästhesie.',
        correct: false
      },
      {
        answerText: 'Gallenkoliken.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Feststellungen ist nicht richtig? Eine analgetisch wirksame Dosis von Morphin kann zusätzlich',
    answers: [
      {
        answerText: 'emetisch wirken.',
        correct: false
      },
      {
        answerText: 'den Tonus der Sphinkteren im Magen-Darm-Trakt senken.',
        correct: true
      },
      {
        answerText: 'den Hustenreflex unterdrücken.',
        correct: false
      },
      {
        answerText: 'eine Miosis auslösen',
        correct: false
      },
      {
        answerText: 'eine Bradykardie bedingen.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Feststellungen ist nicht richtig? Eine Stimulation von Dopaminrezeptoren (z.B. durch Apomorphin) kann zu folgenden Symptomen führen:',
    answers: [
      {
        answerText: 'Hemmung der Prolaktinsekretion der Hypophyse.',
        correct: false
      },
      {
        answerText: 'Rigor und Tremor der Muskulatur.',
        correct: true
      },
      {
        answerText: 'verminderte Schmerzempfindlichkeit.',
        correct: false
      },
      {
        answerText: 'belkeit und Erbrechen.',
        correct: false
      },
      {
        answerText: 'Hypotonie.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches der genannten Narkotika kann für eine i. v. Anästhesie zur Aufrechterhaltung einer Narkose verwendet werden?',
    answers: [
      {
        answerText: 'Thiopental',
        correct: false
      },
      {
        answerText: 'Propofol',
        correct: true
      },
      {
        answerText: 'Ethomidat',
        correct: false
      },
      {
        answerText: 'Enfluran',
        correct: false
      },
      {
        answerText: 'Methoxyfluran',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist falsch? Bei einer Therapie mit Zytostatika treten häufig folgende Nebenwirkungen auf:',
    answers: [
      {
        answerText: 'Haarausfall',
        correct: false
      },
      {
        answerText: 'Magen-Darm-Störungen',
        correct: false
      },
      {
        answerText: 'Anämie',
        correct: false
      },
      {
        answerText: 'Thrombopenie',
        correct: false
      },
      {
        answerText: 'keine Aussage ist falsch',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen trifft für Chloramphenicol nicht zu?',
    answers: [
      {
        answerText: 'Kann auch bei kurzfristiger Anwendung zu Knochenmarksschädigungen führen.',
        correct: false
      },
      {
        answerText: 'Ist gut liquorgängig.',
        correct: false
      },
      {
        answerText: 'Hemmt die Proteinsynthese.',
        correct: false
      },
      {
        answerText: 'Wird nach oraler Applikation vollständig resorbiert',
        correct: false
      },
      {
        answerText: 'Sollte bei Meningitis initial versucht werden.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen trifft nicht zu? Bei einer antibiotischen Therapie gilt:',
    answers: [
      {
        answerText: 'Die minimale Hemmkonzentration sollte bei einer antibiotischen Therapie möglichst nicht überschritten werden.',
        correct: false
      },
      {
        answerText: 'Verabreicht man mehrere Antibiotika gleichzeitig, kann mit einer verminderten Resistenzentwicklung der Mikroorganismen gerechnet werden.',
        correct: false
      },
      {
        answerText: 'Bei der Therapie mit hohen Dosen von Penicillin G können neurotoxische Nebenwirkungen, z. B. Krämpfe, auftreten.',
        correct: false
      },
      {
        answerText: 'Trimethoprim verstärkt die chemotherapeutische Wirkung von Sulfamethoxazol.',
        correct: false
      },
      {
        answerText: 'Gentamicin darf nicht mit Ampicillin kombiniert werden, da sich die Wirkungen abschwächen.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Welche der aufgeführten Wirkungen läßt sich dem Heparin zuordnen?',
    answers: [
      {
        answerText: 'Umwandlung von Prothrombin zu Thrombin.',
        correct: false
      },
      {
        answerText: 'Bindung an Antithrombin III.',
        correct: true
      },
      {
        answerText: 'Hemmung des Enzyms Lipoprotein-Lipase.',
        correct: false
      },
      {
        answerText: 'Reduktion der Konzentration von Calcium-Ionen im Serum.',
        correct: false
      },
      {
        answerText: 'Hemmung der Fibrogen-Synthese in der Leber.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Erwachsener mit 80 kg Körpergewicht hat eine Bakteriämie vermutlich durch gram-negative Stäbchen. Sie wollen Tobramycin einmal täglich geben und Sie möchten jetzt die initiale Dosis (loading dose) berechnen, um einen Spitzenplasmaspiegel von 20 mg/l zu erzielen. Nehmen Sie an, der Patient habe eine normale Nierenfunktion, die pharmakokinetischen Parameter sind wie folgt: Verteilungsvolumen 30 Liter, Halbwertszeit 3 Stunden, Clearance 80 ml/Minute. Wie hoch würde die Initialdosis sein?',
    answers: [
      {
        answerText: '100 mg',
        correct: false
      },
      {
        answerText: '200 mg',
        correct: false
      },
      {
        answerText: '400 mg',
        correct: false
      },
      {
        answerText: '600 mg',
        correct: true
      },
      {
        answerText: '800 mg',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 17-jähriges Mädchen wird in die Notaufnahme nach einem Autounfall eingeliefert. Sie ist bewußtlos und reagiert nur auf Schmerzreize. Die Anamnese ist sonst leer. Die körperliche Untersuchung zeigt Schwellungen am Armen und Gesicht, aber keine Zeichen eines Hirntraumas. Sie hat kein Fieber, der Blutdruck 105 zu 70 mm Hg, der Puls 112 Schläge/Minute, Atemfrequenz 22 Züge/Minute. Wichtig ist ein Bicarbonat von 6 mM (normal 22 -28 mM), Glukose 847 mg/dl (normal 70 - 110 mg/dl) und Kreatinin 1,1 mg/dl (normal 0,6 – 1,2 mg/dl). Die spezifische Dichte des Harns ist 1,036. Sie finden sehr viel Glukose und sehr viel Ketone im Urin. Was ist die Diagnose und was die Therapie der Wahl?',
    answers: [
      {
        answerText: 'diabetisches Hyperosmolares Koma - intravenös Normal-Insulin',
        correct: false
      },
      {
        answerText: 'akutes Nierenversagen - Furosemid',
        correct: false
      },
      {
        answerText: 'postraumatisches Leberversagen - Acetylcysteine i.v.',
        correct: false
      },
      {
        answerText: 'respiratorische Azidose - Bicarbonatinfusion i.v.',
        correct: false
      },
      {
        answerText: 'diabetische Ketoazidose - Normal-Insulin i.v.',
        correct: true
      }
    ]
  },
  {
    questionText: 'Ein 30-jähriger Patient wird zur Notaufnahme in tiefem Koma gebracht. Die Atmung ist sehr eingeschränkt und er hat Stecknadelpupillen. Seine Freunde sagen, er habe sich 6 Stunden vorher eine große Menge Morphin injiziert. Eine sofortige Blutanalyse zeigt einen Gehalt an Morphin von 0,25 mg/l. Nehmen Sie an, das Verteilungsvolumen von Morphin beträgt hier 200 Liter und seine Halbwertszeit sei drei Stunden, wieviel Morphin hat sich der Patient am ehesten gespritzt?',
    answers: [
      {
        answerText: '25 mg',
        correct: false
      },
      {
        answerText: '50 mg',
        correct: false
      },
      {
        answerText: '100 mg',
        correct: false
      },
      {
        answerText: '200 mg',
        correct: true
      },
      {
        answerText: 'Die Daten reichen nicht aus um ein Ergebnis zu errechnen.',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches Isoenzym des Cytochrom P450-Systems ist in der Lage quantitativ am meisten Arzneistoffe zu metabolisieren?',
    answers: [
      {
        answerText: 'CYP1A2',
        correct: false
      },
      {
        answerText: 'CYP2C9',
        correct: false
      },
      {
        answerText: 'CYP2C19',
        correct: false
      },
      {
        answerText: 'CYP2D6',
        correct: false
      },
      {
        answerText: 'CYP3A4',
        correct: true
      }
    ]
  },
  {
    questionText: 'Sie verschrieben einer 34-jähriger Frau mit ulzerativer Kolitis über mehrere Monate pharmakologische Dosen eine Glucocorticoids. Welche der folgenden unerwünschten Effekte ist typischerweise eine Folge einer lang dauernden Glucocorticoidtherapie in pharmakologischer Dosierung?',
    answers: [
      {
        answerText: 'Lupus erythematodes-ähnliches Syndrom',
        correct: false
      },
      {
        answerText: 'Neoplasma der Nebennieren',
        correct: false
      },
      {
        answerText: 'Hepatotoxizität',
        correct: false
      },
      {
        answerText: 'Osteoporose',
        correct: true
      },
      {
        answerText: 'vorzeitige Pubertät bei Kindern',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 24-jährige übergewichtige Frau stellt sich in der 26. Schwangerschaftswoche vor. Sie bestimmen Blutglukose und diagnostizieren einen Schwangerschaftsdiabetes mellitus. Sie ist sonst gesund und ihre Anamnese ist sonst leer. Durch Diät können Sie die Blutglukose nicht regulieren und sie entschließen sich zu einer anti-diabetischen pharmakologischen Therapie. Welches der folgenden Pharmaka würden sie am ehesten verschrieben?',
    answers: [
      {
        answerText: 'Glyburid',
        correct: false
      },
      {
        answerText: 'Metformin',
        correct: false
      },
      {
        answerText: 'Repaglinid',
        correct: false
      },
      {
        answerText: 'Insulin',
        correct: true
      },
      {
        answerText: 'Sitagliptin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches Hormon wird am ehesten in der Peripherie produziert, wenn man ein Patienten Levothyroxin gibt?',
    answers: [
      {
        answerText: 'Metimazol',
        correct: false
      },
      {
        answerText: 'T3',
        correct: true
      },
      {
        answerText: 'T4',
        correct: false
      },
      {
        answerText: 'TSH',
        correct: false
      },
      {
        answerText: 'FSH',
        correct: false
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Zeichen bzw. Symptome würde man am ehesten erwarten bei einer chronischen oralen Überdosierung von T4?',
    answers: [
      {
        answerText: 'Bradykardie',
        correct: false
      },
      {
        answerText: 'trockene Haut',
        correct: false
      },
      {
        answerText: 'Vergrößerung der Zunge und fallende Augenlider',
        correct: false
      },
      {
        answerText: 'Lethargie und Schläfrigkeit',
        correct: false
      },
      {
        answerText: 'Gewichtsverlust',
        correct: true
      }
    ]
  },
  {
    questionText: 'Eine 30-jährige Frau unterzieht sich einer Operation am Colon. Sie bemerken einen kompletten Ileus (völliges Fehlen von Darmbewegung). Sie beklagt sich darüber hinaus, sich aufgebläht zu fühlen. Sie hat Schwierigkeiten Harn zu lassen. Bei dieser Indikation könnten Sie Neostigmin oder theoretisch auch Carbachol intravenös applizieren. Im Bezug auf welches Zellsystem ist Neostigmin jedoch unwirksam und Carbachol wirksam?',
    answers: [
      {
        answerText: 'sekretorische Zellen des Magens',
        correct: false
      },
      {
        answerText: 'vaskuläres Endothel',
        correct: true
      },
      {
        answerText: 'Speicheldrüsen',
        correct: false
      },
      {
        answerText: 'Schweißdrüsen',
        correct: false
      },
      {
        answerText: 'Tonus der Harnleiter',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 3-jähriges Kind wird in die Notaufnahme aufgenommen, weil es aus dem Arzneimittelschrank der Eltern ein Medikament geschluckt hat. Sie haben den Verdacht, es handelt sich um ein indirekt wirkendes Cholinergikum mit praktisch keiner Wirkung auf das zentrale Nervensystem und einer Wirkdauer von zwei bis vier Stunden. Um welches Medikament handelt es sich am ehesten?',
    answers: [
      {
        answerText: 'Acetylcholin',
        correct: false
      },
      {
        answerText: 'Carbachol',
        correct: false
      },
      {
        answerText: 'Neostigmin',
        correct: true
      },
      {
        answerText: 'Physostigmin',
        correct: false
      },
      {
        answerText: 'Pilocarpin',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein Patient wird von seinen Angehörigen in die Notaufnahme gebracht und präsentiert sich mit einer starken Tachykardie als Folge einer Überdosierung in suizidaler Absicht. Er war wahrscheinlich aufgrund der Komplikation seines Hypertonus akut depressiv. Welches der folgenden Medikamente hat er am ehesten verschrieben bekommen und es erklärt, warum der Patient mit einer erhöhten Herzfrequenz bei der Einlieferung aufgefunden wurde?',
    answers: [
      {
        answerText: 'Captopril',
        correct: false
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: false
      },
      {
        answerText: 'Losartan',
        correct: false
      },
      {
        answerText: 'Minoxidil',
        correct: true
      },
      {
        answerText: 'Verapamil',
        correct: false
      }
    ]
  },
  {
    questionText: 'In Deutschland werden viele Patienten initial mit Ramipril behandelt, um einen Hypertonus einzustellen. Dann kommen die aber wieder in Ihre Ambulanz mit einer Beschwerde die zur Umstellung z.B. Losartan zwingt. Was ist am ehesten die Beschwerde der Patienten?',
    answers: [
      {
        answerText: 'Angioödem',
        correct: false
      },
      {
        answerText: 'Glaukom',
        correct: false
      },
      {
        answerText: 'Kopfschmerzen',
        correct: false
      },
      {
        answerText: 'Husten',
        correct: true
      },
      {
        answerText: 'ventrikuläre Arrhythmien',
        correct: false
      }
    ]
  },
  {
    questionText: 'Eine 20-jähre Frau nimmt Diphenhydramin zur Therapie eines schweren Heuschnupfens. Welche der folgenden Nebenwirkungen wird Sie am wahrscheinlichsten schildern?',
    answers: [
      {
        answerText: 'Erhöhung des muscarinischen Tonus in der Harnblase',
        correct: false
      },
      {
        answerText: 'Übelkeit',
        correct: false
      },
      {
        answerText: 'Nervosität und Angstgefühl',
        correct: false
      },
      {
        answerText: 'Sedation',
        correct: true
      },
      {
        answerText: 'Vertigo',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ein 50-jähriger Mann mit schlecht eingestelltem Hypertonus wird jetzt in die Notaufnahme gebracht. Er hat einen Blutdruck von 220/160 mm HG und retinale Einblutungen. Es handelt sich also um einen schweren hypertensiven Notfall. Es stehen eine Reihe von Substanzen zur Verfügung. Welche der folgenden Substanzen wäre in diesem Fall am ehesten vertretbar, hätte eine kurze Wirkungsdauer, wirkt über einen G-Protein gekoppelten Rezeptor und muß intravenös gegeben werden?',
    answers: [
      {
        answerText: 'Isosorbiddinitrat',
        correct: false
      },
      {
        answerText: 'Nitroprussidnatrium',
        correct: false
      },
      {
        answerText: 'Nifedipin',
        correct: false
      },
      {
        answerText: 'Clonidin',
        correct: true
      },
      {
        answerText: 'Furosemid',
        correct: false
      }
    ]
  },
  {
    questionText: 'Ihr Patient erhält zur Therapie seiner chronischen systolischen Herzinsuffizienz seit längerer Zeit Digoxin. Jetzt wollen Sie ihm aus anderer Indikation Atropin i.v. spritzen. Welche typischen Wirkungen von Digoxin im therapeutischen Blutspiegelbereich werden wahrscheinlich vollständig durch gleichzeitige Gabe von Atropin aufgehoben?',
    answers: [
      {
        answerText: 'verminderter Appetit',
        correct: null
      },
      {
        answerText: 'Kopfschmerzen',
        correct: null
      },
      {
        answerText: 'Zunahme der Kontraktilität am Atrium des Herzens',
        correct: null
      },
      {
        answerText: 'verlängertes PR-Intervall am Oberflächen-EKG',
        correct: null
      },
      {
        answerText: 'Tachykardie',
        correct: null
      }
    ]
  },
  {
    questionText: 'An gesunden Studierenden wird eine neue adrenerg wirkende Substanz getestet, die nicht durch die Blut-Hirn-Schranke geht. Sie geben die Substanz intravenös in einer Phase I Studie. Es kommt dabei zu einer Zunahme des systolischen und diastolischen Blutdrucks, Abnahme der Herzfrequenz, 10% Abfall des Herz-Zeit-Volumens, die Ejektions-Fraktion steigt von 60% auf 75%. Welche der folgenden Substanzen ähnelt diese neue Substanz am ehesten?',
    answers: [
      {
        answerText: 'Dobutamin',
        correct: null
      },
      {
        answerText: 'Adrenalin',
        correct: null
      },
      {
        answerText: 'Isoprenalin',
        correct: null
      },
      {
        answerText: 'Noradrenalin',
        correct: null
      },
      {
        answerText: 'Phenylephrin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 62-jährige Patientin stellt sich Ihnen vor mit Müdigkeit und Gewichtszunahme. Sie muss mehrmals am Tag ein kleines Nickerchen machen, was sie bisher nicht brauchte. Sie hat in den letzten 15 Jahren T4 eingenommen ohne irgendwelche relevanten Probleme. Auf Nachfrage gibt sie jetzt an, daß bei ihr vor kurzen eine Arrhythmie festgestellt wurde, die mit einem Medikament behandelt wurde. Welches Medikament ist der Patientin von ihrem Kardiologen am ehesten verschrieben worden?',
    answers: [
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Procainamid',
        correct: null
      },
      {
        answerText: 'Sotalol',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 63-jähriger kommt ins Krankenhaus mit Fieber, Blutungen aus der Nase und Frösteln. Der Mann leidet an einer Re-Entry supraventrikulären Arrhythmie. Er hat vor einigen Tagen ein anderes Antiarrhythmikum verschrieben bekommen. Die Labortests zeigen, daß der Patient an einer Thrombozytopenie von 50.000 mm³ leidet. Welche der folgenden Substanzen hat der Patient am ehesten eigenommen?',
    answers: [
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Chinidin',
        correct: null
      },
      {
        answerText: 'Adenosin',
        correct: null
      },
      {
        answerText: 'Sotalol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Am ehesten beruht der Wirkungsmechanismus der Penicilline auf',
    answers: [
      {
        answerText: 'beta-Lactamasen.',
        correct: null
      },
      {
        answerText: 'Synthese der Zellmembran.',
        correct: null
      },
      {
        answerText: 'Hemmung der N-Acetylmuraminsäuresynthese.',
        correct: null
      },
      {
        answerText: 'Kreuzvernetzung von Peptidoglykan.',
        correct: null
      },
      {
        answerText: 'Hemmung der Transglyosilierung.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie wollen einen Patienten mit einer ambulant erworbenen Pneumonie effektiv behandeln. Sie möchten die Substanz einmal am Tag und für insgesamt fünf Tage geben. Sie möchten eine Substanz wählen, die möglichst wenige Risiken für medikamenten-induzierte Interaktionen liefert. Das am ehesten von Ihnen zu verschreibende Antibiotikum wäre welches der folgenden?',
    answers: [
      {
        answerText: 'Azithromycin',
        correct: null
      },
      {
        answerText: 'Clindamycin',
        correct: null
      },
      {
        answerText: 'Doxycylin',
        correct: null
      },
      {
        answerText: 'Erythromycin',
        correct: null
      },
      {
        answerText: 'Vancomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Die Resistenz von Pneumokokken gegenüber Penicillin G ist am ehesten vermittelt durch',
    answers: [
      {
        answerText: 'Veränderungen in der Purin-Struktur',
        correct: null
      },
      {
        answerText: 'Herstellung von Betalactamase',
        correct: null
      },
      {
        answerText: 'Änderung der Struktur von Penicillin-bindenden Proteinen',
        correct: null
      },
      {
        answerText: 'Veränderung der Dimeren D-Alanine in dem Peptidoglykanvormolekül',
        correct: null
      },
      {
        answerText: 'Verminderte Aufnahme von Penicillin G in die Zelle',
        correct: null
      }
    ]
  },
  {
    questionText: 'Warum behandelt man AIDS-Patienten einer festen Trimethoprim-Sulfamethoxazol Kombination?',
    answers: [
      {
        answerText: 'Zur Behandlung einer Kryptokokken-Meningitis.',
        correct: null
      },
      {
        answerText: 'Zur Behandlung Herpes simplex.',
        correct: null
      },
      {
        answerText: 'Zur Behandlung oraler Candidiasis.',
        correct: null
      },
      {
        answerText: 'Zur Behandlung von Toxoplasmose.',
        correct: null
      },
      {
        answerText: 'Zur Behandlung von Tuberkulose.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient ist durch mehrere Zyklen einer Chemotherapie gegangen. Jetzt finden Sie bei der erneuten Aufnahme, dass der Patient tachykard ist. Sie veranlassen einen nicht-invasiven Radionuklidscan und der Nuklearmediziner schreibt Ihnen im Befund, der Patient habe eine Kardiomyopathie entwickelt. Welches der folgenden Substanzen hat am wahrscheinlichsten zu diesem Befund geführt?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'Trastuzumab',
        correct: null
      },
      {
        answerText: 'Fluouracil',
        correct: null
      },
      {
        answerText: 'Metothrexat',
        correct: null
      },
      {
        answerText: 'Tamoxifen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein erwachsener Patient wird wegen akuter Leukämie behandelt und zwar mit Cyclophosphamid, Mercaptopurin, Metothrexat, Vincristin und Prednison. Er erhält gegen Übelkeit Ondansetron und Chlorhexidin-Mundspüllösung gegen Mukusitis sowie Laxative gegen Obstipation. Jetzt kommt der Patient zu Ihnen und beklagt sich über Mißempfindungen wie Nadelstiche in den Extremitäten und Muskelschwäche. Er ist nicht in der Lage aus dem Stuhl aufzustehen ohne seine Armmuskel zu benutzen. Weiter klagt über zunehmende Verstopfung. Welches der folgenden Substanzen ist für seine unerwünschten Wirkungen am ehesten verantwortlich?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'Mercaptopurin',
        correct: null
      },
      {
        answerText: 'Metothrexat',
        correct: null
      },
      {
        answerText: 'Vincristin',
        correct: null
      },
      {
        answerText: 'Prednison',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur Behandlung eines Patienten mit Zustand nach Stentimplantation bei koronarer Herzkrankheit gehört Aspirin und Clopidogrel. Welche der folgenden Aussagen beschreibt am ehesten den Wirkungsmechanismus von Clopidogrel?',
    answers: [
      {
        answerText: 'Clopidogrel bindet direkt an den ATP-Rezeptor der Plättchen.',
        correct: null
      },
      {
        answerText: 'Clopidogrel hemmt irreversibel die Cyclooxygenase.',
        correct: null
      },
      {
        answerText: 'Clopidogrel erleichtert die Wirkung von Anti-Thrombin III.',
        correct: null
      },
      {
        answerText: 'Der aktive Metabolit von Clopidogrel bindet an einen ATP-Rezeptor der Plättchen.',
        correct: null
      },
      {
        answerText: 'Der aktive Metabolit von Clopidogrel bindet an das Plättchen-Glykoprotein IIb-IIIa.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Antikoagulantien ist ein direkter Inhibitor von Thrombin?',
    answers: [
      {
        answerText: 'Abciximab',
        correct: null
      },
      {
        answerText: 'Dabigatran',
        correct: null
      },
      {
        answerText: 'Rivaroxaban',
        correct: null
      },
      {
        answerText: 'Phenprocoumon',
        correct: null
      },
      {
        answerText: 'Heparin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Bei Vorschädigung des Nervus opticus und Niereninsuffizienz darf Ethambutol nicht verwendet werden.',
        correct: null
      },
      {
        answerText: 'Fälle von Alkoholintoleranz unter Isoniazid sind nicht beschrieben.',
        correct: null
      },
      {
        answerText: 'Pyrazinamid wird nicht metabolisiert, kann aber Harnsäureanstiege im Plasma hervorrufen.',
        correct: null
      },
      {
        answerText: 'Der Wirkungsmechanimus von Isoniazid beruht auf der Steigerung der Synthese von Mycolsäure.',
        correct: null
      },
      {
        answerText: 'Die Halbwertszeit von Ethambutol beträgt 24 Stunden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am wenigsten effektiv in der Behandlung einer Candidiasis des Ösophagus, wenn man sie peroral gibt?',
    answers: [
      {
        answerText: 'Clotrimazol',
        correct: null
      },
      {
        answerText: 'Griseofluvin',
        correct: null
      },
      {
        answerText: 'Ketoconazol',
        correct: null
      },
      {
        answerText: 'Itraconazol',
        correct: null
      },
      {
        answerText: 'Nystatin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung von Substanz und wichtiger typischer Nebenwirkung trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Zidovudin - Myelotoxizität',
        correct: null
      },
      {
        answerText: 'Lamivudin - Hypersensitivitätsreaktionen',
        correct: null
      },
      {
        answerText: 'Emtrizitabin - Nierenversagen',
        correct: null
      },
      {
        answerText: 'Stavudin - Hyperpigmentationen',
        correct: null
      },
      {
        answerText: 'Tenofivir - Myopathien',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen machen an den Händen und Füßen von Patienten typischerweise Hyperpigmentationen?',
    answers: [
      {
        answerText: 'Amprenavir',
        correct: null
      },
      {
        answerText: 'Emtricitabin',
        correct: null
      },
      {
        answerText: 'Efavirenz',
        correct: null
      },
      {
        answerText: 'Fosamprenavir',
        correct: null
      },
      {
        answerText: 'Zalcitabin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 72 kg wiegender erwachsener Patient mit einer Kreatininclearance von 80 ml/Minute hat eine gram-negative Infektion. Sie wollen ihm Amikacin intramuskulär in einer Dosis von 5 mg/kg alle 8 Stunden geben bis Besserung eintritt. Nach zwei Tagen fällt die Kreatininclearance des Patienten auf die Hälfte ab. Wenn man annimmt das es keine Informationen über die Plasmakonzentrationen von Amikacin bei diesem Patienten gibt, was wäre die vernünftigste therapeutische Maßnahme bei diesem Patienten zu diesem Zeitpunkt?',
    answers: [
      {
        answerText: 'Gabe von 5 mg/kg Amikacin alle 12 Stunden',
        correct: null
      },
      {
        answerText: 'Senkung der Dosis von Amikacin auf täglich insgesamt 200 mg',
        correct: null
      },
      {
        answerText: 'Senkung der Dosis von Amikacin auf 180 mg alle 8 Stunden',
        correct: null
      },
      {
        answerText: 'Absetzen von Amikacin und umsetzen auf Gentamicin',
        correct: null
      },
      {
        answerText: 'Dosis beibehalten und die Hörfunktion vom Ohrenarzt testen lassen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 23-jähriger gesunder Student erhält intravenös zum Zeitpunkt „Null“ 2 mg einer Testsubstanz. Dieser Substanz wird nach einer Kinetik erster Ordnung in einem Ein-Kompartment-Modell betrachtet mit einem Verteilungsvolumen von 10 Litern. Nach sechs Stunden beträgt die Plasmakonzentration der Testsubstanz 50 µg/l. Was ist somit am ehesten die Halbwertszeit der Testsubstanz?',
    answers: [
      {
        answerText: '2 Stunden',
        correct: null
      },
      {
        answerText: '3 Stunden',
        correct: null
      },
      {
        answerText: '4 Stunden',
        correct: null
      },
      {
        answerText: '5 Stunden',
        correct: null
      },
      {
        answerText: '6 Stunden',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 46-jähriger Mann (70 kg Körpergewicht) mit einer langen Anamnese von schwerem Asthma wird ins Krankenhaus aufgenommen wegen extremer Dyspnoe und drohendem Atemversagens. Die Notfallbehandlung besteht aus Inhalation von Salbutamol, Glucocorticoiden und Sauerstoff, aber die Verbesserung war nur gering. Man entschließt sich, noch zusätzlich Theophyllin zu geben. Das Ziel war es, eine sofortige therapeutische Plasmakonzentration von 15 mg/l zu erzielen. Wenn an annimmt, daß das Verteilungsvolumen von Theophyllin 0,5 l/kg ist, welche der folgenden Mengen in Milligramm sollte man am ehesten geben?',
    answers: [
      {
        answerText: '525',
        correct: null
      },
      {
        answerText: '435',
        correct: null
      },
      {
        answerText: '110',
        correct: null
      },
      {
        answerText: '600',
        correct: null
      },
      {
        answerText: '85',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Herr Johannes hat keine Nierenfunktion mehr und unterliegt deshalb einer Hämodialyse. Er nimmt Metformin, weil er an Typ 2 Diabetes leidet und hatte als er noch adäquate Nierenfunktion hatte, eine Dosis von 500 mg zwei Mal pro Tag peroral eingenommen. Die Plasmakonzentration bei dieser Dosis bei normaler Nierenfunktion war 1,5 mg/l. Er war für 10 Tage auf der Dialyse und man vermutete eine Metformintoxizität. Eine Blutprobe zeigt jetzt eine Metforminkonzentration von 4,2 mg/l. Welche Clearance von Metformin hatte der Patient am ehesten als seine Nierenfunktion noch normal war?',
    answers: [
      {
        answerText: '238 l/Tag',
        correct: null
      },
      {
        answerText: '29,8 l/Stunde',
        correct: null
      },
      {
        answerText: '3 l/Tag',
        correct: null
      },
      {
        answerText: '238 l/Stunde',
        correct: null
      },
      {
        answerText: '30 l/Minute',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie stehen vor der Entscheidung für einen 75-jährigen Patienten mit Angina pectoris und Glaukom einen β-Blocker auszuwählen, um das Glaukom zu behandeln. Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Die pharmakokinetischen Daten von Esmolol sind am besten übereinstimmend mit einer chronischen Anwendung am Auge.',
        correct: null
      },
      {
        answerText: 'Metoprolol ist geeignet, denn es blockiert selektiv β2-Adrenozeptoren.',
        correct: null
      },
      {
        answerText: 'Nadolol ist ungeeignet, des es blockiert keine β2-Adrenozeptoren.',
        correct: null
      },
      {
        answerText: 'Pindolol ist ein β-Adrenozeptor-Antagonist mit hoher lokalanästhetische Wirkung und deshalb besonders geeignet.',
        correct: null
      },
      {
        answerText: 'Timolol ist sehr ähnlich zu Propranolol aber ihm fehlt dessen lokalanästhetische Wirkung.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie behandeln seit längerer Zeit eine 32-jährige Frau wegen ihres Hypertonus. Sie kommt jetzt zu Ihnen, weil sie schwanger werden möchte. Sie sagen ihr, daß sie die Medikation ändern müssen und zwar müßte eines der bisher verwendeten Standardmedikamente unbedingt durch ein anderes ersetzt werden. Welches der folgenden theoretisch verschreibbaren Medikamente müßten Sie jetzt am ehesten absetzen?',
    answers: [
      {
        answerText: 'Atenolol',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      },
      {
        answerText: 'Metyldopa',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 33-jährige Patientin hat selbstständig versucht, eine Abtreibung durchzuführen, indem sie größere Mengen Ergotamintabletten geschluckt hat. Sie wird in die Notaufnahme aufgenommen und klagt über schwere Schmerzen in beiden Beinen. Bei der Untersuchung fällt auf, daß die Beine kalt und weiß sind, und Sie können keine peripheren Pulse tasten. Welches ist das sinnvollste Medikament, um diese Vasospasmen zu therapieren?',
    answers: [
      {
        answerText: 'Bromocriptin',
        correct: null
      },
      {
        answerText: 'Cimetidin',
        correct: null
      },
      {
        answerText: 'Ketanserin',
        correct: null
      },
      {
        answerText: 'Ondansetron',
        correct: null
      },
      {
        answerText: 'Nitroprussid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 60-jähriger Patient stellt sich bei Ihnen vor mit den beiden Diagnosen Hypertension und Angina pectoris. Er ist 180 cm groß, hat einen Hüftumfang von 110 cm, sein Gewicht ist 97 kg, der Blutdruck ist 150/95 mm Hg und der Puls 85 Schläge/Minute. Sie könnten dem Patienten Nitroglyzerin und Prazosin verschreiben. Welche gemeinsame unerwünschte Wirkung bei Kombination müßten Sie jedoch im Auge behalten?',
    answers: [
      {
        answerText: 'Bradykardie',
        correct: null
      },
      {
        answerText: 'eingeschränkte sexuelle Funktion',
        correct: null
      },
      {
        answerText: 'Lupus erythematodes Syndrom',
        correct: null
      },
      {
        answerText: 'orthostatische Hypotension',
        correct: null
      },
      {
        answerText: 'Gewichtszunahme',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung zwischen Substanz und Indikation ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Alosetron – Therapie vaginaler Blutungen',
        correct: null
      },
      {
        answerText: 'Cetirizin – Therapie von Heuschnupfen',
        correct: null
      },
      {
        answerText: 'Ergonovin – Therapie von Morbus Alzheimer',
        correct: null
      },
      {
        answerText: 'Ondansetron – Therapie von akutem Migränekopfschmerz',
        correct: null
      },
      {
        answerText: 'Ranitidin – Therapie von Morbus Parkinson',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung zwischen einem wichtigen typischen unerwünschten Effekt und der Substanz trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Verstopfung - Verapamil',
        correct: null
      },
      {
        answerText: 'Herzinsuffizienz - Hydralazin',
        correct: null
      },
      {
        answerText: 'hämolytische Anämie - Atenolol',
        correct: null
      },
      {
        answerText: 'Hypokaliämie - Aliskiren',
        correct: null
      },
      {
        answerText: 'Lupus erythematodes ähnliche Symptome – Hydrochlorothiazid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient mit Herzinsuffizienz hat aus Versehen eine Überdosis von Digoxin geschluckt. Die Blutkonzentration ist acht mal über dem Schwellenwert für Toxizität. Digoxin hat bei diesem Patienten eine Clearance von 7 Litern/Stunde und eine Elimationshalbwertszeit von 56 Stunden. Wenn man richtige Maßnahmen zur Therapie dieses Patienten durchführen würde, wann würde man eine nicht mehr toxische Konzentration von Digoxin im Plasma am ehesten erwarten können?',
    answers: [
      {
        answerText: 'nach 3,5 Tagen',
        correct: null
      },
      {
        answerText: 'nach 7 Tagen',
        correct: null
      },
      {
        answerText: 'nach 14 Tagen',
        correct: null
      },
      {
        answerText: 'nach 28 Tagen',
        correct: null
      },
      {
        answerText: 'nach 56 Tagen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 36-jährige Frau kommt zu Ihnen mit einer anamnestisch schlecht eingestellten Thyreotoxikose und wiederholt auftretenden Episoden einer Tachykardie mit schwerer Atemnot. Jetzt kommt sie mit einer Thyreotoxikose-Phase erneut zu Ihnen. Welches der folgenden Substanzen würden Sie ihr am ehesten geben?',
    answers: [
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Disopyramid',
        correct: null
      },
      {
        answerText: 'Esmolol',
        correct: null
      },
      {
        answerText: 'Chinidin',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Bauer, der auf einem großen Hof längere Zeit arbeiten muß und das 12 bis 14 Stunden am Stück, hat eine bekannte kardiale ventrikuläre Arrhythmie und braucht eine chronische Therapie.Welche der folgenden Substanzen ist zur Therapie am ehesten geeignet, weil Sie wirksam ist und eine lange Halbwertszeit hat?',
    answers: [
      {
        answerText: 'Adenosin',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Flecainid',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der folgenden Parasiten ist am ehesten empfindlich gegenüber Niclosamid?',
    answers: [
      {
        answerText: 'Acaris lumbricoides',
        correct: null
      },
      {
        answerText: 'Echinoccous granulosus',
        correct: null
      },
      {
        answerText: 'Fasciola hepatica',
        correct: null
      },
      {
        answerText: 'Necator americanus',
        correct: null
      },
      {
        answerText: 'Taenia solium',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 10 Jahre alter Junge hat seit Jahren schweres Asthma und war im Alter zwischen 7 und 9 Jahren fünf Mal deshalb hospitalisiert. Er erhält jetzt ambulant die gesuchte Medikation, die deutlich die Frequenz schwerer Asthmaattacken reduziert. Welche der folgenden theoretisch einsetzbaren Substanzen würden bei einem Kind über längere Zeit gegeben die unangenehmsten langfristigen unerwünschten Wirkungen hervorrufen?',
    answers: [
      {
        answerText: 'Salbutamol als Aerosol',
        correct: null
      },
      {
        answerText: 'Beclomethason als Aerosol',
        correct: null
      },
      {
        answerText: 'Ipatropiumbromid über einen Inhalator',
        correct: null
      },
      {
        answerText: 'Prednison peroral',
        correct: null
      },
      {
        answerText: 'Theophyllin in Retardtabletten',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage über Fluconazol ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Es geht nicht durch die Blut-Hirn-Schranke.',
        correct: null
      },
      {
        answerText: 'Ist die Behandlung der Wahl für Aspergillose.',
        correct: null
      },
      {
        answerText: 'Es induziert hepatische medikamentenabbauende Enzyme.',
        correct: null
      },
      {
        answerText: 'Es wird renal eliminiert und ist gut gewebegängig.',
        correct: null
      },
      {
        answerText: 'Es muß parenteral gegeben werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Amphotericin B ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Es wird nach peroraler Gabe zu mehr als 80% resorbiert.',
        correct: null
      },
      {
        answerText: 'Sein Wirkungsmechanismus beruht auf einer Hemmung der Synthese und Funktion von Mikrotubuli.',
        correct: null
      },
      {
        answerText: 'Es wird in der Leber in die Wirkform metabolisiert.',
        correct: null
      },
      {
        answerText: 'Es ist nephrotoxisch.',
        correct: null
      },
      {
        answerText: 'Veränderungen des Kaliumspiegels sind bisher nicht beobachtet worden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 23-jähriger Mann mit Hodgkin-Lymphom wird erfolglos nach dem MOPP-Schema (Mechlorethamin, Vincristin, Prednison, Procarbazin) behandelt. Sie stellen ihn deshalb um auf eine dann erfolgreiche Therapie nach dem ABVD-Schema (Doxorubicin, Bleomycin, Vinblastin, Dacarbazin). Welche der folgenden großen Klassen von Antikrebsmedikamenten, die sowohl im MOPP wie auch dem ABVD Zyklus eingesetzt worden sind, ist in seiner Wirkung zellzyklusspezifisch?',
    answers: [
      {
        answerText: 'alkylierende Substanzen',
        correct: null
      },
      {
        answerText: 'Antibiotika',
        correct: null
      },
      {
        answerText: 'Antimetabolite',
        correct: null
      },
      {
        answerText: 'Glucocorticoide',
        correct: null
      },
      {
        answerText: 'Pflanzenalkaloide',
        correct: null
      }
    ]
  },
  {
    questionText: 'Alle der folgenden Medikamente sind erfolgreich in der Chemotherapie von Brustkrebs eingesetzt worden. Welches Medikament aber ist am ehesten aktiv für eine besondere Sub-Gruppe von Patientinnen?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'Doxorubicin',
        correct: null
      },
      {
        answerText: 'Fluoxymesteron',
        correct: null
      },
      {
        answerText: 'Methotrexat',
        correct: null
      },
      {
        answerText: 'Trastuzumab',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben einen Patienten mit pseudomembranöser Enterokolitis aufgrund von Clostridium difficile. Anamnetisch wissen Sie, daß der Patient Metronidazol nicht verträgt. Welche der folgenden Substanzen ist am ehesten hier zu verabreichen?',
    answers: [
      {
        answerText: 'Amoxicillin',
        correct: null
      },
      {
        answerText: 'Chloramphenicol',
        correct: null
      },
      {
        answerText: 'Doxycylin',
        correct: null
      },
      {
        answerText: 'Levofloxacin',
        correct: null
      },
      {
        answerText: 'Vancomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Infektionen kann man am ehesten nicht mit Praziquantel behandeln?',
    answers: [
      {
        answerText: 'Infektionen mit Echinococcus granularis.',
        correct: null
      },
      {
        answerText: 'Opisthorchiasis',
        correct: null
      },
      {
        answerText: 'Taenia saginata',
        correct: null
      },
      {
        answerText: 'okuläre Cystizerkose',
        correct: null
      },
      {
        answerText: 'Schistosomiasis',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Missionar aus dem Münsterland wird von seiner Kirche nach Zentralafrika geschickt. Dort ist Onchocerca volvulus endemisch. Infektionen durch diese Nematode führten zur so genannten Flußblindheit, weil Mikrofillarien durch die Haut in das Auge wandern. Welches Medikament würden Sie am ehesten dem Missionar prophylaktisch verschreiben?',
    answers: [
      {
        answerText: 'Albendazol',
        correct: null
      },
      {
        answerText: 'Diethylcarbamazin',
        correct: null
      },
      {
        answerText: 'Ivermectin',
        correct: null
      },
      {
        answerText: 'Oxamniquin',
        correct: null
      },
      {
        answerText: 'Pyrantel pamoat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 55-jähriger Patient hat eine künstliche Herzklappe und er soll jetzt zu einem Zahnarzt zur Wurzelbehandlung. Aus der Krankenakte sehen Sie, daß er vor einem Jahr allergische Reaktionen auf Procain und Penicillin G hatte. Welche Antibiotikaprophylaxe würden Sie ihm am ehesten geben?',
    answers: [
      {
        answerText: 'Amoxicillin - 10 Minuten vor der Behandlung',
        correct: null
      },
      {
        answerText: 'Clindamycin 1 Stunde vor der Behandlung',
        correct: null
      },
      {
        answerText: 'Erythromycin – 1 Stunde vor der Behandlung und 4 Stunden nach der Behandlung',
        correct: null
      },
      {
        answerText: 'Vancomycin – 15 Minuten vor der Behandlung',
        correct: null
      },
      {
        answerText: 'Prophylaxe ist nicht notwendig, weil dieser Patient ein vernachlässigbares Risiko einer Endokarditis hat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 18 Monate altes Kind stirbt durch die unaufmerksame Überdosierung rektal applizierten Paracetamols. Welches ist der wahrscheinlichste Grund für das Sterben des Kindes?',
    answers: [
      {
        answerText: 'Arrhythmien',
        correct: null
      },
      {
        answerText: 'hämorrhagischer Schlaganfall',
        correct: null
      },
      {
        answerText: 'Leberversagen',
        correct: null
      },
      {
        answerText: 'nicht-kardiogenes Lungenödem',
        correct: null
      },
      {
        answerText: 'Ventilationsversagen der Lunge',
        correct: null
      }
    ]
  },
  {
    questionText: 'Auf Ihrer Intensivstation wird ein 58-jähriger Mann aufgenommen mit Thoraxschmerzen und schneller irregulärer Herzfrequenz. Das EKG zeigt Zeichen eines inferioren Myokardinfarktes und eine ventrikuläre Tachykardie. Ihr Oberarzt beschließt, Lidocain zu geben. Wenn man Lidocain als Antiarrhythmikum gibt, dann sind die Wirkungen am ehesten?',
    answers: [
      {
        answerText: 'Zunahme der Dauer des Aktionspotentiales',
        correct: null
      },
      {
        answerText: 'positiv inotroper Effekt',
        correct: null
      },
      {
        answerText: 'Verlängerung des PR-Intervalls',
        correct: null
      },
      {
        answerText: 'verminderte abnormale Automatizität',
        correct: null
      },
      {
        answerText: 'Anstieg des Ruhepotentiales',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Die wichtigste unerwünschte Wirkung bei schneller intravenöser Gabe von Lidocain',
    answers: [
      {
        answerText: 'ist eine Bronchokonstriktion.',
        correct: null
      },
      {
        answerText: 'ist die Methämoglobinbildung.',
        correct: null
      },
      {
        answerText: 'ist Nierenversagen.',
        correct: null
      },
      {
        answerText: 'sind Krampfanfälle.',
        correct: null
      },
      {
        answerText: 'ist Tachykardie.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient wird wegen Hypertension und Angina pectoris mit Verapamil behandelt. Daraufhin beklagt er sich über Obstipation. Welches der folgenden Substanzen ist ein Laxativ, das diesem Patienten am ehesten nützlich sein würde?',
    answers: [
      {
        answerText: 'Aluminiumhydroxid',
        correct: null
      },
      {
        answerText: 'Diphenoxylat',
        correct: null
      },
      {
        answerText: 'Magnesiumhydroxid',
        correct: null
      },
      {
        answerText: 'Metoclopramid',
        correct: null
      },
      {
        answerText: 'Ranitidin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 45-jähriger Mann leidet an einen duodenalen Ulkus und wird mit einer Kombination von Medikamenten behandelt, die zur Therapie von Heliobacter pylori geeignet sein sollte. Welches der folgenden antibakteriellen Medikamente wird am ehesten in dieser Kombination vorhanden sein?',
    answers: [
      {
        answerText: 'Cefazolin',
        correct: null
      },
      {
        answerText: 'Ciprofloxacin',
        correct: null
      },
      {
        answerText: 'Clarithromycin',
        correct: null
      },
      {
        answerText: 'Clindamycin',
        correct: null
      },
      {
        answerText: 'Vancomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Der Wirkungsmechanismus von Pioglitazon beruht am ehesten auf der',
    answers: [
      {
        answerText: 'Aktivierung der Adenylatcyclase.',
        correct: null
      },
      {
        answerText: 'Hemmung des GLUT2-Glukosetransporters.',
        correct: null
      },
      {
        answerText: 'Hemmung der sauren Glykosidase, einem Schrittmacherenzym für den Abbau von Glykogen.',
        correct: null
      },
      {
        answerText: 'Regulation der Transkription von Genen für die Glukoseverstoffwechselung.',
        correct: null
      },
      {
        answerText: 'Stimulation der Aktivität in der Tyrosinkinase, die den Insulinrezeptor phosphoryliert.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 16-jährige Patientin kommt bei Ihnen zur Aufnahme. Sie leidet an einem Glaukom und hat deshalb ein entsprechendes Medikament genommen. Jetzt zeigt sie Zeichen einer hyperkalämischen metabolischen Azidose. Welches der folgenden Medikamente hat sie am wahrscheinlichsten eingenommen?',
    answers: [
      {
        answerText: 'Azetazolamid',
        correct: null
      },
      {
        answerText: 'Amilorid',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Hyrdochlorothiazid',
        correct: null
      },
      {
        answerText: 'Mannitol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei der intravenösen Gabe von Carbachol könnten Sie folgende Wirkung/en am ehesten erwarten?',
    answers: [
      {
        answerText: 'Bronchodilatation',
        correct: null
      },
      {
        answerText: 'Miosis',
        correct: null
      },
      {
        answerText: 'abgeschwächte gastrointestinale Beweglichkeit',
        correct: null
      },
      {
        answerText: 'Hemmung der neuromuskulären Signalübertragung und Relaxation des Skelettmuskels',
        correct: null
      },
      {
        answerText: 'vermindertes Schwitzen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Einem Drogenabhängigen wurde statt Methamphetamin eine Ampulle Atropin verkauft. Er kommt jetzt zur Notaufnahme. Welche Symptome wird er am ehesten präsentieren?',
    answers: [
      {
        answerText: 'Krämpfe der glatten Muskultur des Gastrointestinaltraktes',
        correct: null
      },
      {
        answerText: 'erhöhte Herzfrequenz',
        correct: null
      },
      {
        answerText: 'erhöhte Säuresekretion im Magen-Darm-Trakt',
        correct: null
      },
      {
        answerText: 'Stecknadelpupillen',
        correct: null
      },
      {
        answerText: 'Pollakisurie',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten der Wirkungsmechanismus für die erwünschten kardialen Effekte von Digoxin?',
    answers: [
      {
        answerText: 'Verminderung der Ca2+-Aufnahme in das sarkoplasmatische Retikulum',
        correct: null
      },
      {
        answerText: 'Zunahme der Syntheserate von ATP in Kardiomyozyten',
        correct: null
      },
      {
        answerText: 'Veränderung im Aktinmolekül der Kardiomyozyten',
        correct: null
      },
      {
        answerText: 'Hemmung der Na+/K+-ATPase der Kardiomyozyten',
        correct: null
      },
      {
        answerText: 'Blockade von kardialen β-Adrenozeptoren',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist klinisch bei akuter systolischer Herzinsuffizienz einsetzbar und ist am ehesten mit einem physiologisch relevanten positiv inotropen Effekt verknüpft?',
    answers: [
      {
        answerText: 'Captopril',
        correct: null
      },
      {
        answerText: 'Dobutamin',
        correct: null
      },
      {
        answerText: 'Enalapril',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      },
      {
        answerText: 'Aliskiren',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen verlangsamt am ehesten die Überleitung im AV-Knoten und hat seinen hauptsächlichen Wirkungsmechanismus in der Hemmung von L-Typ-Calcium-Kanäle?',
    answers: [
      {
        answerText: 'Adenosin',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Diltiazem',
        correct: null
      },
      {
        answerText: 'Esmolol',
        correct: null
      },
      {
        answerText: 'Flecainid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie wollen Ihrer Patientin Adrenalin spritzen. Vorher hat sie Adrenozeptor-blockierende Medikamente bekommen. Welche der folgenden Effekte von Adrenalin würde z.B. nach Vorbehandlung mit Phentolamin abwesend sein, aber nicht nach Vorbehandlung mit Metoprolol?',
    answers: [
      {
        answerText: 'positiv inotroper Effekt',
        correct: null
      },
      {
        answerText: 'die cAMP-erhöhende Wirkung in Herzmuskelzellen',
        correct: null
      },
      {
        answerText: 'Mydriasis',
        correct: null
      },
      {
        answerText: 'Relaxation der glatten Muskulatur in den Bronchien',
        correct: null
      },
      {
        answerText: 'Relaxation der glatten Muskulutur de Uterus',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches ist am ehesten eine typische unerwünschte Wirkung von Methimazol?',
    answers: [
      {
        answerText: 'Agranulozytose',
        correct: null
      },
      {
        answerText: 'Lupus-erythematodes-ähnliche Syndrome',
        correct: null
      },
      {
        answerText: 'Myopathie',
        correct: null
      },
      {
        answerText: 'Torsade de pointes Arrhythmie',
        correct: null
      },
      {
        answerText: 'thrombotische thrombozytische Purpura (TTP)',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen erhöht am ehesten die Freisetzung von endogenem Insulin?',
    answers: [
      {
        answerText: 'Acarbose',
        correct: null
      },
      {
        answerText: 'Canaglifoxin',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Metformin',
        correct: null
      },
      {
        answerText: 'Pioglitazon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen ist am ehesten eine wichtige unerwünschte Wirkung bei der chronischen Therapie mit Furosemid?',
    answers: [
      {
        answerText: 'verminderte Harnausscheidung von Calcium',
        correct: null
      },
      {
        answerText: 'erhöhter Blutdruck',
        correct: null
      },
      {
        answerText: 'Anstieg des pulmonalen Gefäßdruckes',
        correct: null
      },
      {
        answerText: 'metabolische Alkalose',
        correct: null
      },
      {
        answerText: 'enetogene Wirkungen in der Schwangerschaft',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zu Ihnen kommt ein 56-jähriger Mann mit erhöhtem Blutdruck, der bisher behandelt wird. Zusätzlich stellt er sich mit einer vergrößerten Prostata vor. Sie veranlassen eine Prostatabiopsie und es stellt sich heraus, daß es sich um eine gutartige Prostatahyperplasie handelt. Er beklagt sich über vermehrte Retention von Urin. Wleche der folgenden Substanzen wäre bei diesem Patienten am ehesten indiziert?',
    answers: [
      {
        answerText: 'Albuterol',
        correct: null
      },
      {
        answerText: 'Atenolol',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Tamsulosin',
        correct: null
      },
      {
        answerText: 'Timolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 55-jährige Frau hat seit 40 Jahren Typ 1 Diabetes und kommt zu Ihnen mit Klage über Völlegefühl und „Aufgeblähtsein“ besonders nach Mahlzeiten. Die weitere Untersuchung führt zur Diagnose diabetische Gastroparese. Welches der folgenden Substanzen ist prokinetisch und könnte in dieser Situation am ehesten angewendet werden?',
    answers: [
      {
        answerText: 'Alosetron',
        correct: null
      },
      {
        answerText: 'Cimetidin',
        correct: null
      },
      {
        answerText: 'Loperamid',
        correct: null
      },
      {
        answerText: 'Metoclopramid',
        correct: null
      },
      {
        answerText: 'Sucralfat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten nützlich, um eine entzündliche Darmerkrankung zu behandeln?',
    answers: [
      {
        answerText: 'Diphenhydramin',
        correct: null
      },
      {
        answerText: 'Diphenoxylat',
        correct: null
      },
      {
        answerText: 'Mesalazin',
        correct: null
      },
      {
        answerText: 'Ondansetron',
        correct: null
      },
      {
        answerText: 'Ursodiol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Auf dem Weg zur Pharmakologieklausur haben Sie das Gefühl, daß ein Durchfall kurz bevorsteht. Wenn Sie an einer Apotheke halten würden, welches des folgenden Mittel gegen Durchfall könnten Sie ohne Verschreibung kaufen, obwohl es mit den starken Opioiden chemisch verwandt ist?',
    answers: [
      {
        answerText: 'Aluminumhydroxid',
        correct: null
      },
      {
        answerText: 'Diphenoxylat',
        correct: null
      },
      {
        answerText: 'Loperamid',
        correct: null
      },
      {
        answerText: 'Magnesiumhydroxid',
        correct: null
      },
      {
        answerText: 'Metoclopramid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten ein kleines Molekül, das im Magen polymerisiert und damit das Ulkusbett bedeckt und damit zur Abheilung des Ulkus und Reduktion der Symptome beitragen kann?',
    answers: [
      {
        answerText: 'Metoclopramid',
        correct: null
      },
      {
        answerText: 'Omeprazol',
        correct: null
      },
      {
        answerText: 'Sucralfat',
        correct: null
      },
      {
        answerText: 'Cimetidin',
        correct: null
      },
      {
        answerText: 'Aluminiumhydroxid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 41-jährige Frau klagt über häufige und imperative Darmbewegungen vor allen Dingen wenn sie Stress am Arbeitsplatz hat. Vor vier Jahren hatte die Frau ein spastisches Kolon aber war in der Lage die Symptome zu tolerieren bis kürzlich als sie vermehrte Darmbewegung und häufigen Stuhldrang verspürte. Aus welcher der folgenden Klasse wäre die Substanz, die man standardmäßig dieser Frau verschreiben würde?',
    answers: [
      {
        answerText: 'Opiat-Agonist',
        correct: null
      },
      {
        answerText: 'serotoninerger Agonist',
        correct: null
      },
      {
        answerText: 'muscarinerger Agonist',
        correct: null
      },
      {
        answerText: 'H1-Agonist',
        correct: null
      },
      {
        answerText: 'adrenerger Antagonist',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Erkrankungen wäre am ehesten eine Indikation für eine anti-muscarinerge Substanz?',
    answers: [
      {
        answerText: 'Vorhofflimmern',
        correct: null
      },
      {
        answerText: 'Botulinustoxinvergiftung',
        correct: null
      },
      {
        answerText: 'chronisch obstruktive Lungenerkrankung',
        correct: null
      },
      {
        answerText: 'Glaukom',
        correct: null
      },
      {
        answerText: 'post-operativer Harnverhalt',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie behandeln Ihren asthmatischen Patienten mit Salmeterol. Welche unerwünschte Wirkung können Sie am ehesten erwarten?',
    answers: [
      {
        answerText: 'direkte Stimulation der renalen Renin-Freisetzung',
        correct: null
      },
      {
        answerText: 'Hypoglykämie',
        correct: null
      },
      {
        answerText: 'ein lokales Jucken bedingt durch eine vermehrte cGMP-Freisetzung in Mastzellen',
        correct: null
      },
      {
        answerText: 'ein Tremor der Skelettmuskulatur',
        correct: null
      },
      {
        answerText: 'Vasodilation in der Haut',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Caspofungin kann bei invasiver Aspergillose eingesetzt werden.',
        correct: null
      },
      {
        answerText: 'Tachykardie ist unter Caspofungin bisher nicht beschrieben worden.',
        correct: null
      },
      {
        answerText: 'Dyspnoe ist unter Caspofungin bisher nicht beschrieben worden.',
        correct: null
      },
      {
        answerText: 'Durch Cyclosporin kann die Wirkung von Caspofungin abgeschwächt werden.',
        correct: null
      },
      {
        answerText: 'Die Wirkung von Caspofungin kann durch Efavirenz verstärkt werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was beschreibt am ehesten den Wirkungsmechanismus von Doxycyclin?',
    answers: [
      {
        answerText: 'Antagonismus mit bakterieller Translokaseaktivität.',
        correct: null
      },
      {
        answerText: 'Bindung an Bestandteile der 50S-ribosmalen Untereinheit.',
        correct: null
      },
      {
        answerText: 'Hemmung der DNA-abhängigen RNA-Polymerase.',
        correct: null
      },
      {
        answerText: 'Interferenz mit der Bindung von Aminoacyl-RNA an bakterielle Ribosomen.',
        correct: null
      },
      {
        answerText: 'Selektive Hemmung von Peptidyltransferase',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der am ehesten der Mechanismus der Resistenz von gram-positiven Organismen gegenüber Erythromycin?',
    answers: [
      {
        answerText: 'Veränderung der 30S-ribosmalen Untereinheit.',
        correct: null
      },
      {
        answerText: 'Verminderte Permeabilität des Erythromycins durch die zytoplasmatische Membran des Bakteriums.',
        correct: null
      },
      {
        answerText: 'Bildung von Erythromycin an aktivierende Acetyltransferasen.',
        correct: null
      },
      {
        answerText: 'Bildung von Esterase, die den Lactonring des Erythromycins öffnen.',
        correct: null
      },
      {
        answerText: 'Methylierung der Bindungsstellen an der 50S-ribosmalen Untereinheit.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie stellen eine Patientin mit stattgehabter venöser Thrombose zuerst auf Enoxaparin ein und setzen sie dann um auf Phenprocoumon. Zwei Wochen später kommt sie wieder in die Klinik mit starken Nasenblutungen. Sie bestimmen die INR zu 7,0. Um eine weitere Blutung zu verhindern, müßten Sie das Phenprocoumon absetzen und womit müssten Sie die Patientin alternativ zusätzlich am ehesten behandeln?',
    answers: [
      {
        answerText: 'Aminocapronsäure',
        correct: null
      },
      {
        answerText: 'Desmopressin',
        correct: null
      },
      {
        answerText: 'Faktor VIII',
        correct: null
      },
      {
        answerText: 'Protamin',
        correct: null
      },
      {
        answerText: 'Vitamin K1',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist analgetisch und antipyretisch wirksam aber nicht antiinflammatorisch?',
    answers: [
      {
        answerText: 'Paracetamol',
        correct: null
      },
      {
        answerText: 'Celecoxib',
        correct: null
      },
      {
        answerText: 'Colchizin',
        correct: null
      },
      {
        answerText: 'Indometacin',
        correct: null
      },
      {
        answerText: 'Probenecid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einer 58-jährigen Frau ist eine Osteoporose diagnostiziert worden. Welches der folgenden Medikamente in chronischer Anwendung kann am ehesten zur Entstehung der Osteoporose dieser Frau beigetragen haben?',
    answers: [
      {
        answerText: 'Lovastatin',
        correct: null
      },
      {
        answerText: 'Metformin',
        correct: null
      },
      {
        answerText: 'Prednison',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein erwachsener Patient wird wegen akuter Leukämie behandelt und zwar mit Cyclophosphamid, Mercaptopurin, Methotrexat, Vincristin und Prednison. Er erhält gegen Übelkeit Ondansetron und Chlorhexidin-Mundspüllösung gegen Mukusitis sowie Laxativa gegen Obstipation. Jetzt kommt der Patient zu Ihnen und beklagt sich über Mißempfindungen wie Nadelstiche in den Extremitäten und Muskelschwäche. Er ist nicht in der Lage aus dem Sessel aufzustehen, ohne seine Armmuskel zu benutzen. Weiter klagt über zunehmende Verstopfung. Welches der folgenden Substanzen ist für seine unerwünschten Wirkungen am ehesten verantwortlich?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'Mercaptopurin',
        correct: null
      },
      {
        answerText: 'Metothrexat',
        correct: null
      },
      {
        answerText: 'Vincristin',
        correct: null
      },
      {
        answerText: 'Prednison',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche von den folgenden Substanzen kann man zur Kombinationstherapie eines Hodenkarzinoms verwenden und hat als typische unerwünschte Wirkung eine Nephrotoxizität?',
    answers: [
      {
        answerText: 'Bleomycin',
        correct: null
      },
      {
        answerText: 'Cisplatin',
        correct: null
      },
      {
        answerText: 'Metroprussid',
        correct: null
      },
      {
        answerText: 'Leuprolid',
        correct: null
      },
      {
        answerText: 'Vinblastin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Nachdem bei Ihrem Patienten zwei Zyklen eines anderen Medikamentes gegen das zubehandelnde multiple Myelom nicht gewirkt haben, geben Sie dem Patienten Bortezomib. Was ist am ehesten der Wirkungsmechanismus dieser Substanz?',
    answers: [
      {
        answerText: 'Vernetzung doppelsträngiger DNA',
        correct: null
      },
      {
        answerText: 'Hemmung der DNA-abhängigen RNA-Polymerase',
        correct: null
      },
      {
        answerText: 'Interferenz mit der Aktivität von Topoisomerase 1',
        correct: null
      },
      {
        answerText: 'Hemmung von 26S-Proteasomen',
        correct: null
      },
      {
        answerText: 'selektive Hemmung von DNA-Polymerasen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Medikament ist am ehesten gemeint? Wenn man zusätzlich zu diesem Medikament Allopurinol gibt in der Krebstherapie, um erhöhte Harnsäurekonzentrationen im Blut zu reduzieren, so müßte man die Dosis dieses Medikamentes um etwa 25% reduzieren.',
    answers: [
      {
        answerText: 'Fluoracil',
        correct: null
      },
      {
        answerText: 'Leuprolid',
        correct: null
      },
      {
        answerText: 'Mechlorethamin',
        correct: null
      },
      {
        answerText: 'Mercaptopurin',
        correct: null
      },
      {
        answerText: 'Methotrexat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Cylosporin wird erfolgreich in der Verhinderung der Abstoßung von transplantieren Organen eingesetzt. Welche der folgenden Aussagen erklärt am ehesten den Wirkungsmechanismus dieser Substanz?',
    answers: [
      {
        answerText: 'Aktivierung von NK-Zellen.',
        correct: null
      },
      {
        answerText: 'Blockade der Gewebsantwort auf entzündliche Mediatoren.',
        correct: null
      },
      {
        answerText: 'Vermehrter Katabolismus von IgG-Antikörpern.',
        correct: null
      },
      {
        answerText: 'Hemmung der Interleukin-bedingten Gentranskription.',
        correct: null
      },
      {
        answerText: 'Hemmung mit dem MHC II-Peptidaktivierung auf T-Zellen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 23-jährige Frau kommt zu Ihnen mit immer wieder auftretenden Episoden eines angioneurotischen Ödems das zur Freisetzung von u.a. Histamin führt. Zur Therapie dieses angioneurotischen Ödems wollen Sie einen physiologischen Antagonisten des Histamins an der glatten Muskulatur geben. Das wäre am ehesten welche Substanz?',
    answers: [
      {
        answerText: 'Cetirizin',
        correct: null
      },
      {
        answerText: 'Adrenalin',
        correct: null
      },
      {
        answerText: 'Gransisetron',
        correct: null
      },
      {
        answerText: 'Ranitidin',
        correct: null
      },
      {
        answerText: 'Sumatriptan',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 30-jähriger Mann kommt zu ihnen weil er seit einem Monat sich verschlechternde intermittierende abdominale Schmerzen hat. Er fühlt sich aufgebläht, hat Durchfall und rektale Blutungen. Seine vitalenzeichen sind normal und in der körperlichen Untersuchung fällt nur diffuse abdominale Abwehrspannung auf. Sie führen eine Sigmoiduskopie durch und sehen eine gerötete Mukosa im Rektumsigmoid im distalen absteigenden Kolon. Sie Mukosa hat Bereiche mit feiner granulärer Erscheinung sowie einige fokale hämorrhagischen Veränderungen und Ulzerationen. In der Biopsie beschreibt der Pathologe abnormale Kryptenabszesse. Sie stellen eine Diagnose und können ein Medikament verschreiben. Welche der folgenden Medikamente würden Sie am ehesten verschreiben?',
    answers: [
      {
        answerText: 'Metronidazol',
        correct: null
      },
      {
        answerText: 'Clarithromycin',
        correct: null
      },
      {
        answerText: 'Loperamid',
        correct: null
      },
      {
        answerText: 'Ondansetron',
        correct: null
      },
      {
        answerText: 'Prednisolon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie wollen einen 83-jährigen Mann mit inadäquater Antwort auf andere Substanzen zur Therapie seiner chronischen systolischen Herzinsuffizienz jetzt auf Digoxin einstellen. Er hat einen Sinusrhythmus mit einer Herzfrequenz von 88 Schlägen/Minute und einem Blutdruck von 135/85 mm Hg. Sie verschreiben ihm Digoxin. Nach drei Wochen sehen Sie ihn wieder in Ihrer Notaufnahme mit Arrhythmien. Was von den folgenden Möglichkeiten ist am ehesten die Ursache von der Entstehung der Arrhythmien bei diesem Patienten?',
    answers: [
      {
        answerText: 'Zunahme der parasympathischen Nervenstimulation',
        correct: null
      },
      {
        answerText: 'Anstieg des intrazellulären myokardialen Calciumgehaltes',
        correct: null
      },
      {
        answerText: 'Senkung des Ausflusses von Signalen aus dem sympathischen Nervensystem',
        correct: null
      },
      {
        answerText: 'Abfall des intrazellulären ATP-Gehaltes der Herzmuskelzelle',
        correct: null
      },
      {
        answerText: 'Anstieg der extrazellulären Kaliumkonzentration in der Herzmuskelzelle',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie nehmen eine 65-jährige Frau in Ihre kardiale Notaufnahme auf. Sie präsentiert sich mit einem Zustand nach linksventrikulärem akuten Myokardinfakt. Sie entwickelt schnell eine Herzinsuffizienz mit Lungenödem und Zeichen von peripheren Ödemen. Zu diesem Zeitpunkt würden Sie welches Medikament am ehesten einsetzen?',
    answers: [
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Minoxidil',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Spironolacton',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie behandeln eine 72-jährige Frau mit lang bestehender systolischer Herzinsuffizienz. Welches der folgenden Medikamente hat aufgrund von klinischen Studien bei diesem Krankheitsbild gezeigt, daß es die Mortalität signifikant reduzieren kann?',
    answers: [
      {
        answerText: 'Aliskiren',
        correct: null
      },
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Dobutamin',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Spironolacton',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 5-jähriges Kind wird in die Notaufnahme gebracht. Es muß erbrechen, hat Sinusknotendysfunktion und einen ventrikulären Ersatzrhythmus von 35 Schlägen/Minute. Man fand die leere Tablettenschachtel seines Großvaters, die Digoxintabletten enthalten hatte, in der Ecke, in der das Kind gespielt hat. Welches ist am ehesten das Medikament der Wahl zur Behandlung einer solchen schweren Digoxinintoxikation?',
    answers: [
      {
        answerText: 'Digoxinantikörper',
        correct: null
      },
      {
        answerText: 'Lidocaininfusion i.v.',
        correct: null
      },
      {
        answerText: 'Magnesiuminfusion i.v.',
        correct: null
      },
      {
        answerText: 'Phenytoin peroral',
        correct: null
      },
      {
        answerText: 'Kaliumionen peroral',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 54-jähriger übergewichtiger Patient, Herr Meier, mit Typ 2 Diabetes ist Ihnen seit langem als Alkoholiker bekannt. Sie sollten bei diesem Patienten entweder auf Metformin verzichten oder es mit sehr hoher Vorsicht und engmaschiger Kontrolle niedrig dosiert einsetzen, weil bei der Kombination von Metformin und Ethanol am ehesten was auftreten kann?',
    answers: [
      {
        answerText: 'Disulfiram-ähnlichen Entzugserscheinung',
        correct: null
      },
      {
        answerText: 'exzessive Gewichtszunahme',
        correct: null
      },
      {
        answerText: 'Hypoglykämie',
        correct: null
      },
      {
        answerText: 'Laktatazidose',
        correct: null
      },
      {
        answerText: 'verstärkte Hepatotoxizität des Alkohols',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen wird am ehesten zu Beginn einer Mahlzeit eingenommen mit dem Zweck die Absorption von Carbohydraten aus der Nahrung zu reduzieren?',
    answers: [
      {
        answerText: 'Acarbose',
        correct: null
      },
      {
        answerText: 'Exenatid',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Pioglitazon',
        correct: null
      },
      {
        answerText: 'Repaglinid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 62-jähriger Mann mit fortgeschrittenem Prostatakarzinom wird in Ihre Notaufnahme aufgenommen. Er ist kaum ansprechbar. Bei der Messung von Ca2+ finden Sie einen Wert von 16,5 mg/dl (Normalwert bei höchstens 10,5 mg/dl). Welche der folgenden Therapien wären am ehesten sinnvoll, um ein solche schwere Hyperkalziämie zu behandeln?',
    answers: [
      {
        answerText: 'Azetazolamid und Kochsalzinfusion',
        correct: null
      },
      {
        answerText: 'Furosemid und Kochsalzinfusion',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid und Kochsalzinfusion',
        correct: null
      },
      {
        answerText: 'Mannitol und Kochsalzinfusion',
        correct: null
      },
      {
        answerText: 'Spironolacton und Kochsalzinfusion',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 65-jähriger Patient mit einem multimodulärem Kropf stellt sich bei Ihnen zur Thyreoektomie vor. Welche der folgenden Substanzen sollte der Patient am ehesten 10-15 Tage vor der Operation erhalten, um die Durchblutung der Schilddrüse deutlich zu reduzieren?',
    answers: [
      {
        answerText: 'Levothyroxin',
        correct: null
      },
      {
        answerText: 'T3',
        correct: null
      },
      {
        answerText: 'eine Kalium-Jodidhaltige Lösung',
        correct: null
      },
      {
        answerText: 'Prednison',
        correct: null
      },
      {
        answerText: 'ein radioaktives Jodisotop',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben den akuten Asthmaanfall einer jugendlichen Patientin erfolgreich behandelt und setzen die Behandlung auf ambulanter Basis fort. Welche der folgenden Therapieoptionen ist am ehesten keine sinnvolle prophylaktische Behandlung bei einer solchen Patientin?',
    answers: [
      {
        answerText: 'Vermeidung von Antigen-Exposition',
        correct: null
      },
      {
        answerText: 'Blockade von Histaminrezeptoren',
        correct: null
      },
      {
        answerText: 'Blockade von Leukotrien-Rezeptoren',
        correct: null
      },
      {
        answerText: 'IgE-Antikörperblockade',
        correct: null
      },
      {
        answerText: 'Hemmung der Phospholipase A2',
        correct: null
      }
    ]
  },
  {
    questionText: 'Herr Grün ist ein 60-jähriger Patient, der früher stark geraucht hat, jetzt an koronarerHerzerkrankung und COPD leidet mit häufigen Episoden von Bronchospasmen. Welche der folgenden Substanzen ist ein sinnvoller Bronchodilatator bei COPD und wird am wenigsten wahrscheinlich kardiale Arrhythmien hervorrufen?',
    answers: [
      {
        answerText: 'Theophyllin',
        correct: null
      },
      {
        answerText: 'Salbutamol',
        correct: null
      },
      {
        answerText: 'Isoprenalin',
        correct: null
      },
      {
        answerText: 'Ipratropiumbromid',
        correct: null
      },
      {
        answerText: 'Salmeterol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 25-jähriger Mann ist in die Notaufnahme gebracht worden, nachdem er Krampfanfälle durch Überdosierung eines Medikamentes zeigte. Die Freunde, die ihn einliefern, sagen, er habe diese Tablette vor einiger Zeit durch den Mund genommen und habe oft über Schlaflosigkeit nach der Einnahme geklagt. Welche der folgenden Substanzen ist ein direkter Bronchodilatator, wird häufig per oral zur Therapie von Asthma verwendet und ist in der Lage, Schlaflosigkeit und Krampfanfälle hervorzurufen?',
    answers: [
      {
        answerText: 'Cromoglycinsäure',
        correct: null
      },
      {
        answerText: 'Adrenalin',
        correct: null
      },
      {
        answerText: 'Ipratropiumbromid',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Theophyllin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen in parenteraler Form ist am ehesten lebensrettend in einem stark ausgeprägten Status asthmaticus und wirkt mindestens teilweise über die Hemmung von Phospholipase A2?',
    answers: [
      {
        answerText: 'Theophyllin',
        correct: null
      },
      {
        answerText: 'Cromoglycinsäure',
        correct: null
      },
      {
        answerText: 'Adrenalin',
        correct: null
      },
      {
        answerText: 'Ipatropiumbromid',
        correct: null
      },
      {
        answerText: 'Prednison',
        correct: null
      }
    ]
  },
  {
    questionText: 'In Ihre Ambulanz kommt ein Patient mit Schmerzen und Steifigkeit in den Händen und Knien. Diese Steifigkeit ist am Morgen am stärksten. Sie lassen Laboruntersuchungen durchführen, die Sie zur Diagnose rheumatoider Arthritis führen. Sie raten dem Patienten zur Gabe von Corticosteroiden. Welches der folgenden Steroide ist am potentesten?',
    answers: [
      {
        answerText: 'Cortisol',
        correct: null
      },
      {
        answerText: 'Dexamethason',
        correct: null
      },
      {
        answerText: 'Fludrocortison',
        correct: null
      },
      {
        answerText: 'Prednisolol',
        correct: null
      },
      {
        answerText: 'Triamcinolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient hat starke Schmerzen nach einer Operation um ein Kolonkarzinom zu entfernen. Der Arzt verschreibt dem 57-jährigen Patienten einen partiellen Agonisten an µ(mü)-Opioid-Rezeptoren, der potenter ist als Morphin und seine Wirkungen werden kaum durch Naloxon aufgehoben. Welche Substanz wurde am ehesten gegeben?',
    answers: [
      {
        answerText: 'Methadon',
        correct: null
      },
      {
        answerText: 'Tramadol',
        correct: null
      },
      {
        answerText: 'Codein',
        correct: null
      },
      {
        answerText: 'Buprenorphin',
        correct: null
      },
      {
        answerText: 'Fentanyl',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die 52-jährige Frau Schmidt leidet an einer rheumatoiden Arthritis. Sie beginnen eine Behandlung, die unter anderem Infliximab umfaßt und einen monoklonalen Antikörper gegen Tumornekrosefaktor α. Die gesuchte Substanz hat ein bekanntes Verteilungsvolumen von 3 Litern. Welcher der folgenden Orte ist wahrscheinlich der Verteilungsraum dieser gesuchten Substanz?',
    answers: [
      {
        answerText: 'Fettgewebe',
        correct: null
      },
      {
        answerText: 'Plasma',
        correct: null
      },
      {
        answerText: 'extrazelluläre Flüssigkeit',
        correct: null
      },
      {
        answerText: 'Zytosol der Zellen',
        correct: null
      },
      {
        answerText: 'Gesamtwasser des Körpers',
        correct: null
      }
    ]
  },
  {
    questionText: 'Der 85-jährige Herr Schmidt ist vor kurzem in ein Altenpflegeheim eingewiesen worden. Folgende Diagnosen stehen in seinem Arztbrief: Depression mit Symptomen von Ängstlichkeit, Vorhofflimmern, chronisch obstruktive Lungenerkrankung und Osteo-Arthritis. Die peroralen Medikamente des Patienten sind: Sertralin, eine Base mit pKa-Wert 9,5; Diazepam, eine Base pKa-Wert 3,0; Amiodaron, eine Base pKa-Wert 7,4; Theophyllin, eine Säure mit pKa-Wert 8,8; Ibuprofen, eineSäure mit einem pKa-Wert 4,8. Sie gehen davon aus, daß der pH-Wert des Lumens des Magens ≤ 2 ist, kurz nachdem die Medikamente gegeben worden sind. Welches der Medikamente wird am ehesten die höchste Konzentration in den Magenzellen des Patienten aus pharmakokinetischen Gründen erreicht haben?',
    answers: [
      {
        answerText: 'Sertralin',
        correct: null
      },
      {
        answerText: 'Diazepam',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Theophyllin',
        correct: null
      },
      {
        answerText: 'Ibuprofen',
        correct: null
      }
    ]
  },
  {
    questionText: 'In Phase 2 einer klinischen Studie an hypertensiven Patienten wird unter der Therapie mit einem neuem Diuretikum der Anstieg im Plasma eines endogenen Oktapeptides gefunden, das vasokonstriktorisch wirkt. Welches der folgenden Substanzen ist am ehesten dieses endogene Peptid gewesen?',
    answers: [
      {
        answerText: 'Angiotensin 1',
        correct: null
      },
      {
        answerText: 'Angiotensin 2',
        correct: null
      },
      {
        answerText: 'atriales natriuretische Peptid',
        correct: null
      },
      {
        answerText: 'Bradykinin',
        correct: null
      },
      {
        answerText: 'Endothelin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist ein NK1-Rezeptor-Antagonist und wird verwendet, um Chemotherapie-bedingte Übelkeit zu verhindern oder zu reduzieren?',
    answers: [
      {
        answerText: 'Bosentan',
        correct: null
      },
      {
        answerText: 'Aprepitant',
        correct: null
      },
      {
        answerText: 'Ondansetron',
        correct: null
      },
      {
        answerText: 'Bradykinin',
        correct: null
      },
      {
        answerText: 'Enalapril',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 50-jährige Frau mit mittelschwerer Arthritis kommt zu Ihnen und wird seit sechs Monaten von Ihnen mit einer nicht-sterodialen anti-inflammatorischen Substanz behandelt. Sie beklagt sich über gastrointestinale Störungen wie z.B. Sodbrennen. Sie verschreiben ihr die gesuchte Substanz, die man zusammen mit dem anti-inflammatorischen Medikament einnehmen soll. Nach zwei Tagen ruft die Patienten Sie in Ihrer Praxis an und beklagt sich, daß die gesuchte Substanz schweren Durchfall hervorgerufen hat. Welche der folgenden Substanzen ist somit am ehesten verschrieben worden?',
    answers: [
      {
        answerText: 'Acetylsalicylsäure',
        correct: null
      },
      {
        answerText: 'Famotidin',
        correct: null
      },
      {
        answerText: 'Leukotrien LTB4',
        correct: null
      },
      {
        answerText: 'Misoprostol',
        correct: null
      },
      {
        answerText: 'Zileuton',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Moleküle setzt spontan NO in das Blut frei?',
    answers: [
      {
        answerText: 'Citrullin',
        correct: null
      },
      {
        answerText: 'Histamin',
        correct: null
      },
      {
        answerText: 'Isoprenalin',
        correct: null
      },
      {
        answerText: 'Nitroglycerin',
        correct: null
      },
      {
        answerText: 'Nitroprussid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie sehen in Ihrer Praxis eine jugendliche Patientin, Frau Leitner, die wegen einer Epilepsie medikamentös behandelt wird. Jetzt sehen Sie bei Frau Leitner auf den ersten Blick Hirsutismus. Die Lippen sind verdickt und bei Öffnen des Mundes fällt eine Gingivahyperplasie auf. Welches Medikament hat die Patientin am ehesten genommen?',
    answers: [
      {
        answerText: 'Phenytoin',
        correct: null
      },
      {
        answerText: 'Carbamazepin',
        correct: null
      },
      {
        answerText: 'Phenobarbital',
        correct: null
      },
      {
        answerText: 'Ethosuximid',
        correct: null
      },
      {
        answerText: 'Valproinsäure',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 23 jähriger junger Mann, Herr Stöger, fällt vom Dach eines Hauses und man vermutet eine Milzruptur. Er ist seit mehreren Monaten in einem Methadon-Substitutionsprogramm und nimmt regelhaft hohe Dosen von Methadon. Er wird körperlich untersucht und der Verdacht auf eine Milzruptur bestätigt sich sonographisch. Es wird notfallmäßig eine Splenektomie durchgeführt. Der Anästhesist gibt ihm Thiopental, um die Anästhesie einzuleiten und Sevofluran als Inhalationsnarkotikum. Nach einer Woche erholt sich der Patient und Sie geben ihm jetzt wieder dieselbe Menge Methadon als Substitution wie vor dem Unfall. In der Nacht, in der Sie Dienst haben, klagt Herr Stöger über Schmerzen an der Wunde der Splenektomie und Sie geben ihm eine zentral wirksame analgetische Substanz. Innerhalb von Minuten wird dem Patienten übel, er schwitzt und zittert und hat intestinale Krämpfe. Er zeigt Gänsehaut und zuckende Bewegungen der Beine. Dieses sind bei diesem Patienten vorhersehbare unerwünschte Wirkungen der Gabe welches Medikamentes?',
    answers: [
      {
        answerText: 'Methadon',
        correct: null
      },
      {
        answerText: 'Codein',
        correct: null
      },
      {
        answerText: 'Chloralhydrat',
        correct: null
      },
      {
        answerText: 'Pentazocin',
        correct: null
      },
      {
        answerText: 'Diazepam',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Möglichkeit einen Morbus Parkinson zu behandeln, ist den Metabolismus des endogenen Dopamins zu hemmen. Welche der folgenden Medikament-Kombinationen sind dafür am ehesten geeignet?',
    answers: [
      {
        answerText: 'Entacapon und Selegilin',
        correct: null
      },
      {
        answerText: 'Levodopa und Carbidopa',
        correct: null
      },
      {
        answerText: 'Gabe von Stimulatoren der Monoaminoxidase und Gabe von Stimulatoren der Dopadecarboxylase',
        correct: null
      },
      {
        answerText: 'Fluoxetin und Sertralin',
        correct: null
      },
      {
        answerText: 'Bromocriptin und Trihexyphenidyl',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein hospitalisierter Patient, Herr Walter, erhält Heparin zur Prophylaxe einer tiefen Beinvenenthrombose. Zuvor hat er Eptifibatid erhalten. Was ist der Wirkungsmechanismus dieser Substanz?',
    answers: [
      {
        answerText: 'Hemmung der Plättchenaggregation durch reversible Bindung an einen Glykoproteinrezeptor der Plättchen.',
        correct: null
      },
      {
        answerText: 'Blockade des Glykoprotein-IIb/IIIa-Rezeptors in den Plättchen.',
        correct: null
      },
      {
        answerText: 'Hemmung der Freisetzung von Adenosindiphosphat (ADP) durch Erhöhung des zyklischen Adenosinmonophosphatspiegels in Plättchen.',
        correct: null
      },
      {
        answerText: 'Acetylierung der Plättchen-Cyclooxygenase.',
        correct: null
      },
      {
        answerText: 'Hemmung der ADP-induzierten Bindung von Fibrinogen in den Plättchen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 62 jährige Patientin, Frau Bachmann, leidet in letzter Zeit an einem Anstieg der Häufigkeit von Migräneanfällen. Ferner ist bei ihr als Raucherin eine COPD (chronisch obstruktive Lungenerkrankung) bekannt. Welche der folgenden Substanzen wäre bei dieser Patientin zur Migräneprophylaxe am ehesten kontraindiziert?',
    answers: [
      {
        answerText: 'Paracetamol',
        correct: null
      },
      {
        answerText: 'Amitryptilin',
        correct: null
      },
      {
        answerText: 'Acetylsalizylsäure',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Valproat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 28 jährige Patientin, Frau Rados, mit wiederholt auftretenden ventrikulären Tachykardien soll mit einer antiarrhythmischen Substanz behandelt werden. In der Anamnese haben Sie erhoben, daß die Patientin schon einmal an einem systemischen Lupus erythematodes erkrankt war. Welche der folgenden Substanzen wäre bei dieser Pateinten am ehesten kontraindiziert?',
    answers: [
      {
        answerText: 'Flecainid',
        correct: null
      },
      {
        answerText: 'Procainamid',
        correct: null
      },
      {
        answerText: 'Chinidin',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 44 jähriger alter Mann, Herr Kurz, wird aufgenommen mit Verdacht auf eine Lungenembolie. Es wird eine Therapie mit Heparin eingeleitet. Nach zwei Tagen mißt man eine exzessiv erhöhte partielle Thromboplastinzeit. Welchen Arzneistoff könnte man am ehesten geben, um diesen Wert wieder zu normalisieren?',
    answers: [
      {
        answerText: 'Phenprocoumon',
        correct: null
      },
      {
        answerText: 'Vitamin K',
        correct: null
      },
      {
        answerText: 'Enoxaparin',
        correct: null
      },
      {
        answerText: 'Bivalirudin',
        correct: null
      },
      {
        answerText: 'Protamin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 82 jähriger Mann, Herr Vranitzky, der allein zu Hause lebt, hat Fieber entwickelt, einen produktiven Husten und klagt bei Ihrem Hausbesuch über Atemnot. Er klagt ferner über Schwitzen und Müdigkeit. Bei Auskultation der Lungen stellen Sie Bronchialatmen und Rasselgeräusche fest. Sputumkultur kommt zurück als Penicillin-resistenter Steptococcus pneumoniae. Jetzt nehmen Sie ihn in das örtliche Kreiskrankenhaus auf. Welche Therapie ordnen Sie für den Patienten an?',
    answers: [
      {
        answerText: 'Gabe von Amikacin',
        correct: null
      },
      {
        answerText: 'Gabe von Cefotaxim',
        correct: null
      },
      {
        answerText: 'Gabe von Doxycyclin',
        correct: null
      },
      {
        answerText: 'Gabe von Nystatin',
        correct: null
      },
      {
        answerText: 'Gabe von Ampicillin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Zahnarzt hat die Extraktion eines Molaren durchgeführt und verschreibt dem Patienten, Herrn Niessl, deshalb ein Antibiotikum. Der Patient kommt zu Ihnen in die Notaufnahme und beklagt sich jetzt über blutigen Stuhlgang. Welches Antibiotikum hat der Kollege am wahrscheinlichsten verordnet?',
    answers: [
      {
        answerText: 'Nalidixinsäure',
        correct: null
      },
      {
        answerText: 'Tobramycin',
        correct: null
      },
      {
        answerText: 'Nitrofurantoin',
        correct: null
      },
      {
        answerText: 'Cotrimoxazol',
        correct: null
      },
      {
        answerText: 'Clindamycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 24 jähriger Mann, Herr Folgar, kommt in Ihre Notaufnahme mit der Hauptklage über Herzklopfen in den letzten drei Stunden. Er hatte zuvor keine Symptome und hat keine signifikante Anamnese, Blutdruck ist jetzt 100/60 mmHg, Herzfrequenz 190 Schläge/Minute, Atemfrequenz 14/Minute. Ein Oberflächen-EKG, das Sie jetzt gemacht haben, zeigt ein Bild vereinbar mit einem Wolff-Parkinson-White-Syndrom. Die mögliche pharmakologische Therapie bestünde am ehesten aus welchem Arzneistoff?',
    answers: [
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Flecainid',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 47 jähriger Mann, Herr Kreisky, entwickelt zunehmende ektope Herzaktionen, die übergehen in anhaltende Tachykardien, nachdem er aufgrund eines Herzinfarktes in die Intensivstation eingeliefert wurde. Ein EKG, das Sie sofort schreiben, zeigt eine Frequenz von 175 Schlägen/Minute einen weiten QRS-Komplex und Überleitungsstörungen zwischen Vorhof und Ventrikel. Ihm wird das gesuchte Antiarrhythmikum i.v. gespritzt und sein Herz springt in den Sinusrhythmus um, aber nach einer Stunde zeigt der Patient zunehmende Unruhe, Verlust der Koordination, Verwirrtheit, verwaschene Sprache, Nystagmus und Zittern. Welche der folgenden Substanzen ist am ehesten gegeben worden?',
    answers: [
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Sotalol',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Phenytoin',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 63 Jahre alter Mann, Herr von Doderer, kommt zu Ihnen. Er leidet seit Jahren an einem erhöhten Blutdruck und seit drei Jahren an systolischer Herzinsuffizienz Stadium NYHA III. Jetzt wurde bei ihm Vorhofflimmern diagnostiziert. Erfolglos haben Sie bisher Verapamil und Sotalol versucht. Welche der genannten Substanzen sollten Sie jetzt am ehesten verschreiben?',
    answers: [
      {
        answerText: 'Diltiazem',
        correct: null
      },
      {
        answerText: 'Flecainid',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einem 47 jährigen Patienten, Herrn Toth, wird eine Belastungs-abhängige Angina pectoris diagnostiziert. Sie beginnen eine Monotherapie mit sublingualem Nitroglycerin bei Bedarf und oralem Isosorbidmononitrat. Welche der folgenden unerwünschten Eigenschaften der Nitrate sind bei der Prophylaxe der Belastungs-Angina pectoris am ehesten zu beachten?',
    answers: [
      {
        answerText: 'Senkung der Ejektionszeit',
        correct: null
      },
      {
        answerText: 'Anstieg der Herzfrequenz',
        correct: null
      },
      {
        answerText: 'verminderte Kapazität der systemischen Venen',
        correct: null
      },
      {
        answerText: 'Abfall im arteriellen Blutdruck',
        correct: null
      },
      {
        answerText: 'Anstieg des ventrikulären enddiastolischen Volumens',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 51 jähriger Mann, Herr Pöch, wird in Ihr Krankenhaus aufgenommen wegen plötzlich auftretender extremer Atemnot, Ruhelosigkeit und Angst. Der Patient leidet an einer chronischen Herzinsuffizienz NYHA III seit vier Jahren. Sein Blutdruck beträgt 115/80 mmg Hg, Herzfrequenz 120 Schläge/Minute, Atemfrequenz 22 pro Minute. Sie veranlassen eine Röntgen-Thorax Aufnahme in zwei Ebenen und sehen ein interstitielles Lungenödem. Als Therapie beginnen Sie ihm über einen Perfusor eine Nitroglyzerin-Lösung zu verabreichen. Welche der folgenden Wirkungen könnte am ehesten die Besserung des Patienten unter dieser Behandlung mit Nitroglyzerin erklären?',
    answers: [
      {
        answerText: 'Abnahme des ventrikulären enddiastolischen Volumens',
        correct: null
      },
      {
        answerText: 'Reflextachykardie',
        correct: null
      },
      {
        answerText: 'reflektorischer Anstieg der Kontraktilität des Herzens',
        correct: null
      },
      {
        answerText: 'verminderte ventrikuläre Ejektionszeit',
        correct: null
      },
      {
        answerText: 'Hemmung der Plättchenaggregation',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 54 jähriger Mann, Herr Cap, beklagt sich über Rötung des Gesichts, Kopfschmerzen und Schwindelgefühl. Der Patient hatte sich sonst in den letzten drei Jahren schon in Behandlung befunden wegen einer gastroösophagealen Refluxerkrankung. Vor zwei Wochen haben Sie beim ihm eine Belastungs-Angina pectoris festgestellt und begonnen, ihn Leitlinien-gerecht medikamentös zu behandeln. Welches der von Ihnen verschriebenen Medikamente an dieser Stelle hat am ehesten die o.g. unerwünschten Wirkungen hervorgerufen?',
    answers: [
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Diltiazem',
        correct: null
      },
      {
        answerText: 'Nitroglyzerin',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 30 Jahre alter Mann, Herr Strache, klagt über Mundtrockenheit, Obstipation und Schwierigkeiten, eine Zeitung zu lesen. Sie hatten vor einigen Wochen bei dem Patienten eine schizoide Episode diagnostiziert und hatten vor zwei Wochen die Behandlung mit Clozapin begonnen. Blockade welcher Rezeptoren kann am ehesten die unerwünschten Wirkungen erklären?',
    answers: [
      {
        answerText: 'Blockade von 5HT2-Rezeptoren',
        correct: null
      },
      {
        answerText: 'Blockade α1-Adrenozeptoren',
        correct: null
      },
      {
        answerText: 'Blockade von H1-Histamin-Rezeptoren',
        correct: null
      },
      {
        answerText: 'Blockade von nikotinischen cholinergen Rezeptoren',
        correct: null
      },
      {
        answerText: 'Blockade von M3-cholinergen Rezeptoren',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die 32 jährige Frau Mitterer ist in das Krankenhaus gebracht worden, nachdem sie bewußtlos im Stadtpark an einem heißen Sommertag gefunden worden ist. Die Patientin war in einem psychiatrischen Krankenhaus. Sie hatte anamnestisch eine lang anhaltende psychiatrische Erkrankung, aber hatte in letzter Zeit eine Verbesserung der Hauptsymptome gezeigt; daraufhin war es ihr erlaubt worden, verstärkt Ausgang zu bekommen. Sie hatte die Station verlassen und war zwei Stunden gejoggt, um Gewicht zu verlieren, bevor sie bewußtlos im Stadtpark gefunden wurde. Ihre Rektaltemperatur betrug 40,6 °C und die Diagnose Hitzeschlag wurde gestellt. Welches der folgenden Medikamente könnte am ehesten zu dieser Komplikation entscheidend beigetragen haben?',
    answers: [
      {
        answerText: 'Amitryptilin',
        correct: null
      },
      {
        answerText: 'Clozapin',
        correct: null
      },
      {
        answerText: 'Buspiron',
        correct: null
      },
      {
        answerText: 'Lithium',
        correct: null
      },
      {
        answerText: 'Fluoxetin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie sind auf der internistischen Notaufnahme tätig. Eine 33 jährige Patientin, Frau Nemec, wird zu Ihnen gebracht mit wechselndem Erregungszustand und Verwirrtheit. Bei der körperlichen Untersuchung fällt Ihnen eine Rektaltemperatur von 40°C auf, eine Herzfrequenz von 125 Schlägen/Minute, unstabiler Blutdruck, ausgeprägtes Schwitzen, vermehrter Speichelfluß und Muskelsteifigkeit auf. Anamnestisch erfahren Sie, diese Patientin sei vor kurzem in psychiatrischer Behandlung wegen einer Schizophrenie gewesen. Vor einigen Tagen hat der Psychiater eine medikamentöse Therapie begonnen und die Patientin dann in häusliche Obhut entlassen. Welche der folgenden Substanzen erklärt das Krankheitsbild der Patientin am wahrscheinlichsten?',
    answers: [
      {
        answerText: 'Imipramin',
        correct: null
      },
      {
        answerText: 'Temazepam',
        correct: null
      },
      {
        answerText: 'Haloperidol',
        correct: null
      },
      {
        answerText: 'Fluoxetin',
        correct: null
      },
      {
        answerText: 'Lithium',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die 26 jährige Frau Kulterer wird von Ihnen behandelt, weil sie komplexe partielle Krampfanfälle hatte. Sie nimmt die Tabletten auch ein. Zusätzlich nimmt Sie aber auch orale Kontrazeptiva. Jetzt kommt sie zu Ihnen, weil sie schwanger geworden ist. Welches antiepileptisch wirksame Medikament kann am ehesten durch Interaktion zum Versagen der schwangerschaftsverhütenden Arzneitherapie geführt haben?',
    answers: [
      {
        answerText: 'Lamotrigin',
        correct: null
      },
      {
        answerText: 'Valproinsäure',
        correct: null
      },
      {
        answerText: 'Clonazepam',
        correct: null
      },
      {
        answerText: 'Gabapentin',
        correct: null
      },
      {
        answerText: 'Carbamazepin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Der 45 jährige Herr Dichand kommt in Ihre Ordination. Er hatte im letzten Monat schwere Migränekopfschmerzen, die zwei oder drei Mal pro Woche auftraten. Etwa 70% der Kopfschmerzanfälle konnte er mit Sumatriptantabletten kupieren. Der Patient leidet ferner an einem AV-Block 2. Grades, der seit drei Jahren bekannt ist, und einem Offen-Winkel-Glaukom, das seit vier Jahren bekannt ist. Welche der folgenden prophylaktischen Therapien würden für diesen Patiententyp bei Migräne am ehesten geeignet sein?',
    answers: [
      {
        answerText: 'Atenolol',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Amitryptilin',
        correct: null
      },
      {
        answerText: 'Lamotrigin',
        correct: null
      },
      {
        answerText: 'Valproinsäure',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 26 jähriger Student, Herr Neisser, wird in der Notaufnahme untersucht. Er zeigt Fieber (38°C), Oligurie und hat am Oberkörper einen rötlichen Ausschlag. Der Patient kam vor einer Woche schon einmal zu Ihnen mit der Diagnose Primärsyphilis. Sie haben eine systemische Pharmakotherapie gemäß Leitlinien durchgeführt. Bei Laboruntersuchungen finden Sie pathologischerweise eine vermehrt Eosinophile im Urin und eine Proteinurie. Die weitere Diagnostik führte zu Ihrer Verdachtsdiagnose medikamenteninduzierte tubulo-interstitielle Nephritis. Welche der folgenden Substanzen hat bei diesem Patienten am ehesten zu dieser unerwünschten Wirkung geführt?',
    answers: [
      {
        answerText: 'Rifampicin',
        correct: null
      },
      {
        answerText: 'Ceftriaxon',
        correct: null
      },
      {
        answerText: 'Penicillin G',
        correct: null
      },
      {
        answerText: 'Cotrimoxazol',
        correct: null
      },
      {
        answerText: 'Nystatin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 70 jährige Patientin, Frau Hartmann, aus einem Altersheim wird zu Ihnen in die Notaufnahme gebracht. Sie zeigt Fieber (38,6°C), Durchfall und schwere abdominale Krämpfe. Vier Tage zuvor hat die Patientin ein Antibiotikum eingenommen gegen akut aufgetretene Tonsillitis hervorgerufen durch beta-hämolysierende Streptokokken. Jetzt finden Sie bei der körperlichen Untersuchung eine kritisch erkrankte Patientin mit abwesenden Darmgeräuschen. Sie führen eine Koloskopie durch und sehen diffuse Ulzeration und exulzerierende Plaques in der Mukosa des Kolons. Welches Antibiotikum hat die Patientin am wahrscheinlichsten eingenommen und hat diese unerwünschten Wirkungen bedingt?',
    answers: [
      {
        answerText: 'Gentamicin',
        correct: null
      },
      {
        answerText: 'Vancomycin',
        correct: null
      },
      {
        answerText: 'Rifampicin',
        correct: null
      },
      {
        answerText: 'Aztreonam',
        correct: null
      },
      {
        answerText: 'Ampicillin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 61 jährige Patientin, Frau Frey, sucht wegen einer Zahnextraktion ihren Zahnarzt auf. Sie hatte in der Vergangenheit mehrfach Entzündungen im Zahnbereich. Anamnetisch hat die Patientin seit fünf Jahren eine bekannte Mitralstenose mit Herzinsuffizienz NYHA II. Welches Medikament würden Sie ihr prophylaktisch vor und nach der Zahnextraktion verschreiben?',
    answers: [
      {
        answerText: 'Amoxicillin',
        correct: null
      },
      {
        answerText: 'Gentamycin',
        correct: null
      },
      {
        answerText: 'Aztreonam',
        correct: null
      },
      {
        answerText: 'Piperacillin',
        correct: null
      },
      {
        answerText: 'Metronidazol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 50 jährige Patientin, Frau Fischer, wird von Ihrem Bruder in die Notaufnahme gebracht. Er sagt, sie habe eine Flasche von Medikamenten, die bei ihr zu Hause waren, weil diese Medikamente ihr verschrieben worden waren, zu sich genommen in einem Selbstmordversuch. Sie hat eine lange Anamnese der Therapie von Depressionen, chronisch-obstruktiver Lungenerkrankungen und intermittierend auftretender supraventrikulärer Tachykardien. Die Patientin ist schläfrig und verwirrt. Sie hat einen Blutdruck von 85/45 mmHg, einen Puls von 45 Schlage/Minute, eine Atemfrequenz von 23 pro Minute. Welches der folgenden Medikamente aus ihrem Arzneischrank hat sie wahrscheinlich eingenommen?',
    answers: [
      {
        answerText: 'Ipratropium',
        correct: null
      },
      {
        answerText: 'Adenosin',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 57-jähriger Mann, Herr Rauscher, stellt sich vor mit eine LDL-Cholesterin-Gehalt 360 mg/dl (Sie gehen von einem Normalwert von < 180 mg/dl aus), obwohl Sie ihn fünf Monate lang mit Lovastatin behandelt haben. Sie überlegen sich jetzt, ihm zusätzlich Ezetimib zu geben. Welche Aussage erklärt am besten den Grund für die gemeinsame Gabe von Ezetimib und Lovastatin?',
    answers: [
      {
        answerText: 'Die Kombination reduziert die Wahrscheinlichkeit einer Lovastatin-induzierten Myopathie.',
        correct: null
      },
      {
        answerText: 'Die Kombination führt zu einem synergistischen cholesterinsenkenden Effekt.',
        correct: null
      },
      {
        answerText: 'Ezetimib hemmt den Metabolismus von Lovastatin.',
        correct: null
      },
      {
        answerText: 'Ezetimib erhöht die intestinale Absorption von Lovastatin.',
        correct: null
      },
      {
        answerText: 'Die Kombination erhöht synergistisch den HDL-(high-density-lipoprotein) Plasmagehalt bei dem Patienten.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben in der Ambulanz einen 52 jährigen Übergewichtigen, Herrn Traxler, vor sich sitzen, der an Gicht und Hypertonus leidet und jetzt stellen Sie fest, daß er zusätzlich noch einen LDL-(low-density-lipoprotein) Cholesteringehalt von 360 mg/dl hat. Ihr Oberarzt versucht, einen Normwert von unter 180 mg/dl anzustreben. Die Serum-Harnsäurekonzentration bei dem Patienten ist 15,5 mg/dl. Ihr Krankenhauslabor legt den Normalwert mit 4,0 bis 8,5 mg/dl fest. Alle anderen Laborwerte sind im Normbereich. Sie wollen ihm eine lipidsenkende Therapie zukommen lassen. Welche Substanz der folgenden ist bei diesem Patienten relativ kontraindiziert?',
    answers: [
      {
        answerText: 'Cholestyramin',
        correct: null
      },
      {
        answerText: 'Niacin',
        correct: null
      },
      {
        answerText: 'Ezetimib',
        correct: null
      },
      {
        answerText: 'Lovastatin',
        correct: null
      },
      {
        answerText: 'Gemfibrozil',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die 66 jährige Frau Stuiber wird in Ihre Notaufnahme gebracht aufgrund einer bekannter systolischen Herzinsuffizienz, die jetzt zu einer extremen Dyspnoe geführt hat. Sie ist zyanotisch, tachypnöisch, hyperpnöisch, ruhelos, hat Angst und hat Erstickungsgefühle. Der Husten ist ausgeprägt und sie produziert gefärbtes Sputum. Dier Herzfrequenz ist 120 Schläge/Minute, der Blutdruck 80/45 mmHg und Rasselgeräusche sind auf beiden Seiten der Lungen basal hörbar. Welches Medikament würde man ehesten zur unmittelbaren Therapie in der Notaufnahme verwenden?',
    answers: [
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Amilorid',
        correct: null
      },
      {
        answerText: 'Mannitol',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 72 jähriger Patient wird in die Notaufnahme aufgenommen wegen Anurie. Sie kennen den Patienten, Herrn Meyer, schon lange. Er leidet an systolischer Herzinsuffizienz NYHA-Stadium III und zusätzlich hat er noch eine chronisch obstruktive Lungenerkrankung als langjähriger Raucher. Kurz nach der Aufnahme beginnt der Patient zu erbrechen, dann ist er aufgeregt, beschimpft das Pflegepersonal und ist desorientiert in Ort und Zeit. Er sagt Ihnen, daß er laute Stimmen hört, die ihn beschimpfen. Im gleich durchgeführten EKG sehen Sie einen Tachykardie mit einem AV-Block 3. Grades. Welche Substanz,die der Patient in der Vergangenheit verschrieben bekommen hat, hat am wahrscheinlichsten die Symptome hervorgerufen?',
    answers: [
      {
        answerText: 'Captopril',
        correct: null
      },
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Ipratropium',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Eplerenon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei der 37 jährigen Frau Lützow, die Sie seit längeren wegen AIDS behandeln, wurde kürzlich eine systemische Candidiasis diagnostiziert und Sie haben eine intravenöse Therapie mit einem Antimykotikum begonnen. Nach einer Woche stellt sich die Patientin mit folgenden Laborwerten vor. Serum-Kreatinin 5,9 mg/dl (normal 0,6-1,2 mg/dl), Gesamtharnstoff 53 mg/dl (normal 7-18 mg/dl) und Plasmakalium-Ionen-Konzentration 2,3 mM (normal 3,5-5,0 mM). Welches der folgenden Medikamente hat am wahrscheinlichsten diese laborchemischen Veränderungen, die lebensbedrohlich sind, hervorgerufen?',
    answers: [
      {
        answerText: 'Amphotericin B',
        correct: null
      },
      {
        answerText: 'Fluconazol',
        correct: null
      },
      {
        answerText: 'Griseofulvin',
        correct: null
      },
      {
        answerText: 'Flucytosin',
        correct: null
      },
      {
        answerText: 'Tobramycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Der 30 jährige Herr Bernath, der HIV positiv ist, kommt jetzt zu Ihnen mit einer Zytomegalie-virusbedingten Retinitis. Sie hatten eine Therapie mit Gancyclovir vor zwei Wochen begonnen. Sie entschließen sich eine anderes Medikament zu geben, das direkt die DNA-Polymerase hemmt, ohne vorher ein Aktivierungsschritt durch Phosphorylierung durchlaufen zu müssen. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Aciclovir',
        correct: null
      },
      {
        answerText: 'Lopinavir',
        correct: null
      },
      {
        answerText: 'Ribavirin',
        correct: null
      },
      {
        answerText: 'Foscarnet',
        correct: null
      },
      {
        answerText: 'Nelfinavir',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Die bradykarde Wirkung von Acetylcholin am Vorhof des Herzens beruht am ehesten auf einer',
    answers: [
      {
        answerText: 'Inaktivierung von Calciumkanälen.',
        correct: null
      },
      {
        answerText: 'Inaktivierung von Natriumkanälen.',
        correct: null
      },
      {
        answerText: 'Aktivierung von Kaliumkanälen',
        correct: null
      },
      {
        answerText: 'Inaktivierung von Kaliumkanälen.',
        correct: null
      },
      {
        answerText: 'Aktivierung von Calciumkanälen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der genannten Antiarrhythmika wird ausschließlich parenteral verabreicht?',
    answers: [
      {
        answerText: 'Flecainid',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Chinidin',
        correct: null
      },
      {
        answerText: 'Propafenon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Antiarrhythmika werden nach ihren Angriffspunkten vier verschiedenen Klassen (I - IV) nach Vaughn-Williams zugeordnet. Welche der folgenden Zuordnungen ist am ehesten nicht richtig?',
    answers: [
      {
        answerText: 'Flecainid - I',
        correct: null
      },
      {
        answerText: 'Metoprolol - II',
        correct: null
      },
      {
        answerText: 'Sotalol - II und III',
        correct: null
      },
      {
        answerText: 'Verapamil - I',
        correct: null
      },
      {
        answerText: 'Diltiazem - IV',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen bzw. unerwünschten Wirkungen ist am ehesten nicht charakteristisch für die Therapie mit herzwirksamen Glykosiden?',
    answers: [
      {
        answerText: 'Übelkeit',
        correct: null
      },
      {
        answerText: 'Sinusbradykardie',
        correct: null
      },
      {
        answerText: 'AV-Überleitungsstörungen',
        correct: null
      },
      {
        answerText: 'Enzyminduktion in der Leber',
        correct: null
      },
      {
        answerText: 'Ausschwemmung von peripheren Ödemen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Worauf beruht am ehesten die lebensbedrohliche Wirkung einer Überdosierung von herzwirksamen Glykosiden, z.B. Digitoxin?',
    answers: [
      {
        answerText: 'Herzrhythmusstörungen',
        correct: null
      },
      {
        answerText: 'Atemlähmung durch Hyperkaliämie',
        correct: null
      },
      {
        answerText: 'arterielle Dilatation',
        correct: null
      },
      {
        answerText: 'profuse Durchfälle und Exsikkose',
        correct: null
      },
      {
        answerText: 'Lähmung des Vasomotorenzentrums',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu?Bei therapeutischer Anwendung wirken als kompetitive Antagonisten:',
    answers: [
      {
        answerText: 'Spironolacton',
        correct: null
      },
      {
        answerText: 'Naloxon',
        correct: null
      },
      {
        answerText: 'Protamin',
        correct: null
      },
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Furosemid trifft am ehesten zu?',
    answers: [
      {
        answerText: 'wirkt von der luminalen Seite der Nierentubuli.',
        correct: null
      },
      {
        answerText: 'greift an den Sammelrohren der Niere an.',
        correct: null
      },
      {
        answerText: 'senkt die Reninsekretion.',
        correct: null
      },
      {
        answerText: 'bewirkt eine Hyperkalzämie.',
        correct: null
      },
      {
        answerText: 'führt leicht zu metabolischer Azidose.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient hat sich fälschlicherweise eine zu hohe Menge Insulin injiziert und leidet jetzt an einer Hypoglykämie. Durch welche Substanz wird die Normalisierung dieser Hypoglykämie am meisten verzögert?',
    answers: [
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Prazosin',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Phenoxybenzamin',
        correct: null
      },
      {
        answerText: 'Atenolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Handelsreisender mit einem bekannten Hypertonus, der durch Medikamente behandelt wird, nimmt zum Frühstück ein Glas Grapefruitsaft und kollabiert wegen niedrigen Blutdruckes, als er vom Frühstückstisch im Hotel aufstehen will. Durch welches Antihypertensivum ist wahrscheinlich dieses Problem entstanden?',
    answers: [
      {
        answerText: 'Clonidin',
        correct: null
      },
      {
        answerText: 'Atenolol',
        correct: null
      },
      {
        answerText: 'Enalapril',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Felodipin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Therapie der Wahl bei einer Schwangeren mit Hypertonus ist am ehesten',
    answers: [
      {
        answerText: 'Reserpin',
        correct: null
      },
      {
        answerText: 'Moxonodin',
        correct: null
      },
      {
        answerText: 'Ramipril',
        correct: null
      },
      {
        answerText: 'Methyl-Dopa',
        correct: null
      },
      {
        answerText: 'Ephedrin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient mit metastasierenden Lungenkarzinom wird wegen seiner chronischen Schmerzen mit täglichen Dosen einer lang wirksamen Form von Morphin behandelt und für Durchbruchschmerzen mit Oxycodon. Er kommt zu Ihnen und beklagt sich, daß diese Schmerzmittel nicht länger wirksam sind. Welche Erklärung haben Sie am wahrscheinlichsten für das Fehlen der Wirksamkeit der Medikamente?',
    answers: [
      {
        answerText: 'Der Metabolismus von Morphin ist erhöht.',
        correct: null
      },
      {
        answerText: 'Die Stärke der Schmerzen hat zu zugenommen.',
        correct: null
      },
      {
        answerText: 'Die Effizienz der G-Protein-Effektor Kopplung hat abgenommen.',
        correct: null
      },
      {
        answerText: 'Die Opioidrezeptoren sind herunterreguliert worden.',
        correct: null
      },
      {
        answerText: 'Der Patient ist Opiat-abhängiger Drogenkonsument.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten der Wirkungsmechanismus von Niclosamid?',
    answers: [
      {
        answerText: 'Vakuolisierung des Teguments der Würmer',
        correct: null
      },
      {
        answerText: 'Hemmung der Glucoseaufnahme der Würmer',
        correct: null
      },
      {
        answerText: 'Lähmung von Glutamat-aktivierten Chloridkanälen',
        correct: null
      },
      {
        answerText: 'Lähmung von GABA-aktivierten Chloridkanäle',
        correct: null
      },
      {
        answerText: 'Stimulation von GABA-abhängigen Chloridkanälen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten keine relative Kontraindikation für die Gabe von Glucocorticoiden?',
    answers: [
      {
        answerText: 'Osteoporose',
        correct: null
      },
      {
        answerText: 'Ulkus-Anamnese',
        correct: null
      },
      {
        answerText: 'Hypotonie',
        correct: null
      },
      {
        answerText: 'Diabetes mellitus',
        correct: null
      },
      {
        answerText: 'Infektionskrankheiten',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei Medikation eines Ulcus ventriculi verschreiben Sie unter anderem Omeprazol. Welche der folgenden möglicherweise gleichzeitig verschriebenen Substanzen können am ehesten in ihrer Wirkung durch das Omeprazol abgeschwächt werden?',
    answers: [
      {
        answerText: 'Theophyllin',
        correct: null
      },
      {
        answerText: 'Phenytoin',
        correct: null
      },
      {
        answerText: 'Warfarin',
        correct: null
      },
      {
        answerText: 'Diazepam',
        correct: null
      },
      {
        answerText: 'Clarithromycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Arzneimittel erhöht in üblicher Dosierung am ehesten die Plasmaspiegel von Theophyllin?',
    answers: [
      {
        answerText: 'Cimetidin',
        correct: null
      },
      {
        answerText: 'Phenobarbital',
        correct: null
      },
      {
        answerText: 'Fanotidin',
        correct: null
      },
      {
        answerText: 'Rifampicin',
        correct: null
      },
      {
        answerText: 'Nizatidin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Misoprostol ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Es ist ein stabiles Analogon von Prostaglandin E2.',
        correct: null
      },
      {
        answerText: 'Es ist in der Schwangerschaft kontraindiziert.',
        correct: null
      },
      {
        answerText: 'Es kann Diarrhöe bedingen.',
        correct: null
      },
      {
        answerText: 'Es kann krampfartige Schmerzen bedingen.',
        correct: null
      },
      {
        answerText: 'Es kann zu Krämpfen der Gebärmutter führen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einem 12-jähringen Mädchen sollten Sie welches der folgenden Antiemetika am ehestengeben?',
    answers: [
      {
        answerText: 'Metoclopramid',
        correct: null
      },
      {
        answerText: 'Domperidon',
        correct: null
      },
      {
        answerText: 'Erythromycin',
        correct: null
      },
      {
        answerText: 'THC',
        correct: null
      },
      {
        answerText: 'Dexamethason',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie wollen bei einem Patienten, der auf Ihrer Intensivstation liegt, eine Stress-Ulkus-Prophylaxe durchführen. Welches der folgenden Medikamente ist am ehesten ungeeignet?',
    answers: [
      {
        answerText: 'Omeprazol',
        correct: null
      },
      {
        answerText: 'Pantoprazol',
        correct: null
      },
      {
        answerText: 'Ranitidin',
        correct: null
      },
      {
        answerText: 'Sucralfat',
        correct: null
      },
      {
        answerText: 'Misoprostol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Montelukast?',
    answers: [
      {
        answerText: 'Antagonismus am Cysteinleukotrien-Rezeptor 1',
        correct: null
      },
      {
        answerText: 'Hemmung der Mastzellendegranulation',
        correct: null
      },
      {
        answerText: 'Antikörper gegen IgE',
        correct: null
      },
      {
        answerText: 'Hemmung der Transkription von Entzündungsgenen',
        correct: null
      },
      {
        answerText: 'Erhöhung des cAMP-Gehaltes der Zelle durch Hemmung einer Phosphodiesterase',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Vancomycin hemmt die Funktion der Ribosomen.',
        correct: null
      },
      {
        answerText: 'Vancomycin wirkt nur gegen gram-negative Keime.',
        correct: null
      },
      {
        answerText: 'Vancomycin wirkt nicht nephrotoxisch.',
        correct: null
      },
      {
        answerText: 'Vancomycin wirkt nicht ototoxisch.',
        correct: null
      },
      {
        answerText: 'Vancomycin kann Histamin freisetzen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen ist am ehesten richtig? Cephalosporine wirken durch',
    answers: [
      {
        answerText: 'Hemmung der Gyrase',
        correct: null
      },
      {
        answerText: 'Hemmung der Proteinbiosynthese',
        correct: null
      },
      {
        answerText: 'Porenbildung in der Zytoplasmamembran',
        correct: null
      },
      {
        answerText: 'Hemmung der Mureinsynthese',
        correct: null
      },
      {
        answerText: 'keiner der aufgeführten Mechanismen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen ist am ehesten richtig? Makrolide wirken durch',
    answers: [
      {
        answerText: 'Hemmung der Gyrase',
        correct: null
      },
      {
        answerText: 'Hemmung der Proteinbiosynthese',
        correct: null
      },
      {
        answerText: 'Porenbildung in der Zytoplasmamembran',
        correct: null
      },
      {
        answerText: 'Hemmung der Mureinsynthese',
        correct: null
      },
      {
        answerText: 'keiner der aufgeführten Mechanismen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu Fexofenadin?',
    answers: [
      {
        answerText: 'Es ist der aktive Metabolit von Terfenadin.',
        correct: null
      },
      {
        answerText: 'Es ist ein Antagonist an H2-Histamin-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Es ist ein Antagonist an H3-Histamin-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Es hemmt myokardiale Kaliumkanäle.',
        correct: null
      },
      {
        answerText: 'Es kann häufig Torsade-de-pointes-Arrhythmien hervorrufen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Leucovorin-Rescue-Therapie muß am ehesten durchgeführt werden bei Gabe von',
    answers: [
      {
        answerText: '6-Mercaptopurin',
        correct: null
      },
      {
        answerText: '6-Thioguanin',
        correct: null
      },
      {
        answerText: 'Methotrexat',
        correct: null
      },
      {
        answerText: '5-Flurouracil',
        correct: null
      },
      {
        answerText: 'Cisplatin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Irinotecan trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Es ist ein Prodrug und durch Esterhydrolyse entsteht der aktive Metabolit SN-38.',
        correct: null
      },
      {
        answerText: 'Sein Wirkungsmechanismus beruht im wesentlichen auf der Hemmung der Topoisomerase 2.',
        correct: null
      },
      {
        answerText: 'Der Resistenzmechanismus beruht wahrscheinlich auf einem verminderten Auswärtstransport durch den MRP-Transporter.',
        correct: null
      },
      {
        answerText: 'Die Halbwertszeit von Irinotecan beträgt 1 Stunde.',
        correct: null
      },
      {
        answerText: 'Bei Gilbert-Syndrom ist keine Dosisanpassung notwendig.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Folgende Mechanismen werden am ehesten nicht als Wirkungsmechanismus für Doxorubicin diskutiert?',
    answers: [
      {
        answerText: 'Es hemmt die Interkalation, indem es sich zwischen DNA-Stränge schiebt.',
        correct: null
      },
      {
        answerText: 'Es hemmt die Topoisomerase 2.',
        correct: null
      },
      {
        answerText: 'Es führt zu Bildung von freien Radikalen.',
        correct: null
      },
      {
        answerText: 'Es greift in den Folsäuremetabolismus ein.',
        correct: null
      },
      {
        answerText: 'Es interferiert mit dem Cytochrom P450 System.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Azathioprin kann zur Therapie der rheumatoiden Arthritis eingesetzt werden.',
        correct: null
      },
      {
        answerText: 'Azathioprin ist ungeeignet zur Verhinderung von Abstoßungsreaktionen bei Lebertransplantationen.',
        correct: null
      },
      {
        answerText: 'Azathioprin ist ungeeignet zur Therapie einer Vaskulitis.',
        correct: null
      },
      {
        answerText: 'Azathioprin ist ungeeignet zur Therapie von entzündlichen Darmerkrankungen.',
        correct: null
      },
      {
        answerText: 'Azathioprin darf zusammen mit Allopurinol eingenommen werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Infliximab ist ungeeignet zur Therapie von entzündlichen Darmerkrankungen.',
        correct: null
      },
      {
        answerText: 'Etanercept ist ungeeignet Therapie der rheumatoiden Arthritis.',
        correct: null
      },
      {
        answerText: 'Adalimumab ist ungeeignet zur Therapie der ankylosierenden Spondylitis.',
        correct: null
      },
      {
        answerText: 'Etanercept kann bakterielle Infektionen reaktivieren.',
        correct: null
      },
      {
        answerText: 'Es gibt keinen Hinweise darauf, daß in Etanercept verknüpft ist mit der Entwicklung von Lymphomen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung von Substanz und unerwünschter Wirkung ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Hydroxychloroquin – bewirkt Alopezie',
        correct: null
      },
      {
        answerText: 'Sulfasalazin – bewirkt Agranulozytose',
        correct: null
      },
      {
        answerText: 'Anakinra – bewirkt Hämolyse',
        correct: null
      },
      {
        answerText: 'Abatacept – bewirkt Retinaschädigungen',
        correct: null
      },
      {
        answerText: 'Leflunomid – bewirkt Hirutismus',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Cisplatin ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Cisplatin hat einen aktiven Metaboliten.',
        correct: null
      },
      {
        answerText: 'Cisplatin wird über den Kupfertransporter CTR1 in die Zielzelle aufgenommen.',
        correct: null
      },
      {
        answerText: 'Es hat eine Plasmaproteinbindung von über 90%.',
        correct: null
      },
      {
        answerText: 'Es hat eine terminale Halbwertszeit von etwa 24 Stunden.',
        correct: null
      },
      {
        answerText: 'Es wird renal eliminiert.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Substanz ist am ehesten in der Lage, die Mortalität eines Patienten mit systolischer Herzinsuffizienz NYHA III zu senken?',
    answers: [
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Diltiazem',
        correct: null
      },
      {
        answerText: 'Prazosin',
        correct: null
      },
      {
        answerText: 'Carvedilol',
        correct: null
      },
      {
        answerText: 'Hydrazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zur Therapie der tiefen Venenthrombose mit niedermolekularen Heparinen (NMH) ist am ehesten richtig?',
    answers: [
      {
        answerText: 'NMH sind bei Patienten mit Krebserkrankung und Venenthrombose nicht indiziert.',
        correct: null
      },
      {
        answerText: 'Eine heparininduzierte Thrombozytopenie Typ II tritt zwar unter NMH seltener auf als unter unfraktionierten Heparinen, dennoch sollten die Thrombozyten in den ersten drei Behandlungswochen regelmäßig bestimmt werden.',
        correct: null
      },
      {
        answerText: 'NMH können bei gleichzeitiger Lungenembolie nicht eingesetzt werden.',
        correct: null
      },
      {
        answerText: 'NMH haben ungünstigere pharmakologische Eigenschaften als unfraktionierte Heparine.',
        correct: null
      },
      {
        answerText: 'NMH wirken nur bei intravenöser Applikation.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches ist die am ehesten effektivste Behandlungsmaßnahme bei einer schweren Vergiftung mit Digoxin?',
    answers: [
      {
        answerText: 'Infusion von K+-Ionen',
        correct: null
      },
      {
        answerText: 'Hämoperfusion',
        correct: null
      },
      {
        answerText: 'Forcierte Diurese',
        correct: null
      },
      {
        answerText: 'Injektion von Digoxin-bindenden Antikörperfragmenten',
        correct: null
      },
      {
        answerText: 'Orale Zufuhr von Cholestyramin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient wird mit folgender Symptomatik auf die Intensivstation eines Krankenhauses eingeliefert: Tachykardie, Mydriasis, heiße und gerötete Haut, Krämpfe. Nach schnellstmöglicher Abklärung der Diagnose verordnet der diensthabende Arzt am ehesten:',
    answers: [
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Metamizol',
        correct: null
      },
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Physostigmin',
        correct: null
      },
      {
        answerText: 'Haloperidol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient mit Niereninsuffizienz (Creatininclearance 50% des Normalwertes) soll eineintravenöse Erhaltungsdosis eines nur renal eliminierten Arzneimittels (Bioverfügbarkeit 50%) erhalten. Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Die i.v.-Erhaltungsdosis beträgt dann 50% der oralen Erhaltungsdosis für normale Nierenfunktion.',
        correct: null
      },
      {
        answerText: 'Die i.v.-Erhaltungsdosis beträgt dann 75% der oralen Erhaltungsdosis für normale Nierenfunktion.',
        correct: null
      },
      {
        answerText: 'Die i.v.-Erhaltungsdosis ist dann gleich der oralen Erhaltungsdosis für normale Nierenfunktion.',
        correct: null
      },
      {
        answerText: 'Die i.v.-Erhaltungsdosis beträgt dann 25% der oralen Erhaltungsdosis für normale Nierenfunktion.',
        correct: null
      },
      {
        answerText: 'Die i.v.-Erhaltungsdosis kann mit den obigen Angaben nicht ermittelt werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Zu den kaliumsparenden Diuretika zählen',
    answers: [
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Spironolacton',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Chlorthalidon',
        correct: null
      },
      {
        answerText: 'Mannit',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der genannten unerwünschten Wirkungen ist für Aminoglykosid-Antibiotika am wenigsten zutreffend?',
    answers: [
      {
        answerText: 'Nephrotoxizität',
        correct: null
      },
      {
        answerText: 'Ototoxizität',
        correct: null
      },
      {
        answerText: 'Hepatotoxizität',
        correct: null
      },
      {
        answerText: 'Neurotoxizität',
        correct: null
      },
      {
        answerText: 'Verstärkung der Wirkung von Muskelrelaxantien',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu?Hemmstoffe des Angiotensin-Konversions-Enzyms (ACE-Hemmer)',
    answers: [
      {
        answerText: 'können zu einer Hyperkaliämie führen.',
        correct: null
      },
      {
        answerText: 'senken die Reninkonzentration im Plasma.',
        correct: null
      },
      {
        answerText: 'sind bei einer beidseitigen Nierenarterienstenose kontraindiziert.',
        correct: null
      },
      {
        answerText: 'können den Blutdruck bereits innerhalb einer Stunde senken.',
        correct: null
      },
      {
        answerText: 'senken die Aldosteronkonzentration im Plasma.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Das Antibiotikum der Wahl zur Therapie der Gonorrhoe ist am ehesten',
    answers: [
      {
        answerText: 'Imipenem/Cilastatin.',
        correct: null
      },
      {
        answerText: 'Doxycyclin.',
        correct: null
      },
      {
        answerText: 'Gentamicin.',
        correct: null
      },
      {
        answerText: 'Ceftriaxon.',
        correct: null
      },
      {
        answerText: 'Cotrimoxazol.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Antibiotika hat das kleinste Molekulargewicht und ist am ehesten zur Behandlung von schweren Nischeninfektionen (z.B. Osteomyelitis) mit grampositiven Erregern geeignet?',
    answers: [
      {
        answerText: 'Amoxicillin',
        correct: null
      },
      {
        answerText: 'Clindamycin',
        correct: null
      },
      {
        answerText: 'Vancomycin',
        correct: null
      },
      {
        answerText: 'Clarithromycin',
        correct: null
      },
      {
        answerText: 'Fosfomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was gehört am ehesten nicht zu den unerwünschten Wirkungen einer Therapie mit retardiertem Theophyllin?',
    answers: [
      {
        answerText: 'Mundtrockenheit',
        correct: null
      },
      {
        answerText: 'Kopfschmerzen',
        correct: null
      },
      {
        answerText: 'Tachykardie',
        correct: null
      },
      {
        answerText: 'belkeit',
        correct: null
      },
      {
        answerText: 'Schlafstörungen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Medikament oder welche Medikamentengruppe ist am ehesten das oder die wichtigste zur Langzeittherapie des Asthma bronchiale?',
    answers: [
      {
        answerText: 'inhalative Glukocorticosteroide',
        correct: null
      },
      {
        answerText: 'orales Theophyllin',
        correct: null
      },
      {
        answerText: 'orale Glucocorticosteroide',
        correct: null
      },
      {
        answerText: 'inhalative Anticholinergika',
        correct: null
      },
      {
        answerText: 'inhalative Cromone',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei welchem Pharmakon bzw. seinen Metaboliten weichen nach Absetzen der Substanz die Dauer bis zur vollständigen Elimination der Substanz und die Dauer bis zum Sistieren der pharmakologischen Wirkung am stärksten voneinander ab?',
    answers: [
      {
        answerText: 'Acetylsalicylsäure – Hemmung der Thrombozytenaggregation',
        correct: null
      },
      {
        answerText: 'Metamizol – Analgesie',
        correct: null
      },
      {
        answerText: 'Digoxin – positiv inotrope Wirkung',
        correct: null
      },
      {
        answerText: 'Glyceroltrinitrat – Relaxation glatter Muskulatur',
        correct: null
      },
      {
        answerText: 'Furosemid – Steigerung der Diurese',
        correct: null
      }
    ]
  },
  {
    questionText: 'Gegen welche der folgenden Wirkungen ist bei chronischer Einnahme von Morphin die Toleranzentwicklung am geringsten?',
    answers: [
      {
        answerText: 'Euphorie',
        correct: null
      },
      {
        answerText: 'Obstipation',
        correct: null
      },
      {
        answerText: 'Analgesie',
        correct: null
      },
      {
        answerText: 'Erbrechen',
        correct: null
      },
      {
        answerText: 'Atemhemmung',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Carbachol erzeugt bei lokaler Applikation am Auge eine Mydriasis.',
        correct: null
      },
      {
        answerText: 'Reversible Cholinesterasehemmer, wie z. B. Neostigmin, werden zur Behandlung der Myasthenia gravis therapeutisch genutzt.',
        correct: null
      },
      {
        answerText: 'Atenolol gehört zu den unselektiven β-Rezeptorenblockern.',
        correct: null
      },
      {
        answerText: 'Sympathomimetika, wie z. B. Fenoterol, sind bei Asthma bronchiale kontraindiziert.',
        correct: null
      },
      {
        answerText: 'Propranolol ist ein β-Rezeptorenblocker mit partiell agonistischer Aktivität.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die generalisierte Wegenersche Granulomatose als immunsuppressiver Notfall wird am ehesten folgendermaßen behandelt:',
    answers: [
      {
        answerText: 'Prednisolon + Azathioprin',
        correct: null
      },
      {
        answerText: 'Prednisolon + Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'Azathioprin+Methotrexat',
        correct: null
      },
      {
        answerText: 'Prednisolon+Plasmaseparation',
        correct: null
      },
      {
        answerText: 'Cyclophospamid+Plasmaseparation',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten keine Stickstoff-Lost-verbindung?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'Busulfan',
        correct: null
      },
      {
        answerText: 'Chlorambuzil',
        correct: null
      },
      {
        answerText: 'Melphalan',
        correct: null
      },
      {
        answerText: 'Procarbazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist richtig? Teratogene Wirkungen hat am ehesten nicht',
    answers: [
      {
        answerText: 'Tretinoin',
        correct: null
      },
      {
        answerText: 'Alkohol',
        correct: null
      },
      {
        answerText: 'Vitamin A (> 25.000 IE/Tag)',
        correct: null
      },
      {
        answerText: 'Carbamazepin',
        correct: null
      },
      {
        answerText: 'Penicillin G',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Koanalgetikum ist bei neuropathischen Tumorschmerzen am ehesten nicht sinnvoll?',
    answers: [
      {
        answerText: 'Codein',
        correct: null
      },
      {
        answerText: 'Amitryptilin',
        correct: null
      },
      {
        answerText: 'Morphin',
        correct: null
      },
      {
        answerText: 'Prednison',
        correct: null
      },
      {
        answerText: 'Diazepam',
        correct: null
      }
    ]
  },
  {
    questionText: 'Unter der Therapie mit einem Zytostatikum ist es bei Ihrem Patienten zu einer massiven Obstipation gekommen. Welches der folgenden Medikamente ist dafür am ehesten verantwortlich?',
    answers: [
      {
        answerText: 'Paclitaxel',
        correct: null
      },
      {
        answerText: 'Docetaxel',
        correct: null
      },
      {
        answerText: 'Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'Methotrexat',
        correct: null
      },
      {
        answerText: 'Vincristin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente ist am ehesten ein peroral verfügbarer D2(Dopaminrezeptor)- Agonist, der heutzutage zur Therapie des Morbus Parkinson geeignet zu sein scheint?',
    answers: [
      {
        answerText: 'Ergotamin',
        correct: null
      },
      {
        answerText: 'Bromocriptin',
        correct: null
      },
      {
        answerText: 'Selegilin',
        correct: null
      },
      {
        answerText: 'Ropirinol',
        correct: null
      },
      {
        answerText: 'Entacapon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Medikament sollten Sie als erste Wahl bei einem Schwangerschaftshypertonus verschreiben?',
    answers: [
      {
        answerText: 'Alpha-Methyldopa',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      },
      {
        answerText: 'Ramipril',
        correct: null
      },
      {
        answerText: 'Aliskiren',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche antineoplastische Substanz wirkt wahrscheinlich hauptsächlich durch ihre Affinität für die Dihydrofolatreduktase?',
    answers: [
      {
        answerText: 'Fluoruracil',
        correct: null
      },
      {
        answerText: 'Methotrexat',
        correct: null
      },
      {
        answerText: 'Mechlorethamin',
        correct: null
      },
      {
        answerText: 'Dactinomycin',
        correct: null
      },
      {
        answerText: 'Vincristin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 62 jähriger Mann aus Köthen unterzieht sich einer Hemikolektomie, um ein invasives Adenokarzinom des aszendierenden Kolons zu entfernen. Der Pathologe berichtet über Beteiligungperikolischer Lymphknoten aber Fehlen von Lebermetastasen. Basierend auf diesem Grading und Staging wird eine Behandlung mit Leucovorin® (=Folinsäure), Fluorouracil und Irinotecanhydrochlorid verschrieben. Warum erhält der Patient Folinsäure?',
    answers: [
      {
        answerText: 'Um normale Zellen mit einer aktiven Form der Folsäure zu versorgen.',
        correct: null
      },
      {
        answerText: 'Um Übelkeit und Erbrechen nach Fluorouracilgabe zu vermindern.',
        correct: null
      },
      {
        answerText: 'Um Irinotecan zu aktivieren.',
        correct: null
      },
      {
        answerText: 'Um die Effektivität von Fluoruracil zu erhöhen.',
        correct: null
      },
      {
        answerText: 'Um die Aufnahme der Substanzen in den Knochen zu erhöhen und damit Knochenmetastasen vorzubeugen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie werden zu einer Patientin gerufen, die einen INR von 6.1 aufweist (Ziel INR hier sei:2-3). Ihr geht bei grober körperlicher Untersuchung eigentlich gut und Sie bemerken keine offensichtlichen Blutungen. Sie hat in der letzten Woche zur Therapie einer Bronchialentzündung mehrere Tage lang Erythromycin-Tabletten zu sich genommen. Anamnestisch hat sie vor sechs Monaten einen Herzinfarkt erlitten und seitdem auch Vorhofflimmern. Sie nimmt zur Zeit 2,5 mg Bisoprolol einmal am Tag und Phenprocoumon 3 mg einmal täglich (beide Medikamente peroral).Wie gehen Sie jetzt vor?',
    answers: [
      {
        answerText: 'Absetzen von Bisoprolol.',
        correct: null
      },
      {
        answerText: 'Gabe von Vitamin K 5 mg intravenös.',
        correct: null
      },
      {
        answerText: 'Reduktion des Phenprocoumons auf 2 mg täglich.',
        correct: null
      },
      {
        answerText: 'Erhöhung des Phenprocoumons auf 5 mg täglich, dann neue Bestimmung des INR.',
        correct: null
      },
      {
        answerText: 'Absetzen des Phenprocoumons, dann neue Bestimmung des INR.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Frau hat in suizidaler Absicht ein Gift zu sich genommen. Sie kommt jetzt auf Ihre Notaufnahme mit konvulsiven Bewegungen und ist mit Urin und Kot bedeckt. Sie ist zyanotisch, hat einen Puls von 50 Schlägen/Minute, Blutdruck 70/20 mm Hg und sie hat kalte nasse Haut. Die unmittelbare Therapie wäre der Beginn einer künstlichen Beatmung und am ehesten welche der folgenden Maßnahmen?',
    answers: [
      {
        answerText: 'Gabe von Atropin i.v.',
        correct: null
      },
      {
        answerText: 'Gabe von Carbachol i.v.',
        correct: null
      },
      {
        answerText: 'Gabe von Neostigmin i.v.',
        correct: null
      },
      {
        answerText: 'Anforderung der Messung der Aktivität der Serum-Cholinesterase',
        correct: null
      },
      {
        answerText: 'Blutentnahme und Antikörperscreening nach möglichen toxikologischen Substanzen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 42 jährige Frau leidet an schweren einseitigen klopfenden Kopfschmerzen. Diese Kopfschmerzen gehen auch Lichterscheinungen visueller Natur voran. Die Kopfschmerzen sind verbunden mit Übelkeit, Erbrechen und Photophobie. Welche der folgenden Medikamentklassen sind am ehesten geeignet zur Behandlung der Kopfschmerzen dieser Patientin?',
    answers: [
      {
        answerText: 'selektive 5HT3-Rezeptor-Antagonisten',
        correct: null
      },
      {
        answerText: 'selektive D2-Rezeptor-Antagonisten',
        correct: null
      },
      {
        answerText: 'selektive 5HT1B/1D-Rezeptor-Antagonisten',
        correct: null
      },
      {
        answerText: 'selektive T-Calciumkanal-Antagonisten',
        correct: null
      },
      {
        answerText: 'selektive H1-Rezeptor-Antagonisten',
        correct: null
      }
    ]
  },
  {
    questionText: 'Aufgrund welcher Nebenwirkung wird in Deutschland im Gegensatz zu England selten Probenecid zur Therapie einer klinisch relevanten Hyperurikämie verwendet?',
    answers: [
      {
        answerText: 'Ototoxizität',
        correct: null
      },
      {
        answerText: 'Hepatotoxizität',
        correct: null
      },
      {
        answerText: 'Nephrotoxizität',
        correct: null
      },
      {
        answerText: 'Agranulozytose',
        correct: null
      },
      {
        answerText: 'Herzinsuffizienz',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 76 Jahre alter Mann mit bekannter stabiler Angina stellt sich in der Notaufnahme vor. Er klagt über seit 30 min bestehenden Thoraxschmerzen. Er schwitzt stark und hat erbrochen. Die körperliche Untersuchung ist unauffällig. Der Patient ist klinisch stabil. Im sofort gemachten Oberflächen EKG sehen Sie einen anterolateralen Anstieg der ST-Strecken. Was machen Sie als nächstes?',
    answers: [
      {
        answerText: 'Gabe von Paracetamol 1 g oral',
        correct: null
      },
      {
        answerText: 'Gabe von Morphinsulfat 10 mg intravenös',
        correct: null
      },
      {
        answerText: 'Gabe von Molsidomin',
        correct: null
      },
      {
        answerText: 'Gabe von Glyceroltrinitrat Spray, zwei Hübe sublingual.',
        correct: null
      },
      {
        answerText: 'Gabe von Glyceroltrinitrat-Infusion (50 mg) intravenös in 50 ml isotoner Kochsalzlösung bei einer Flußrate von 2-10 ml in der Stunde nach Wirkung.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 29 jährige Frau kommt zu Ihnen in Ihre allgemeinärztliche Sprechstunde. Sie klagt über Dysurie, erhöhte Frequenz des Wasserlassens und imperativen Harndrang. Sie nehmen eine Urinprobe, die ist gelb und wolkig trüb. Sie bestimmen mit einem Stäbchen den pH-Wert des Urins zu 5,0 und er ist positiv auf Leukozyten, Esterase, Nitrite und Blut. Sie verschreiben dieser Patientin jetzt die Kombination aus Sulfamethoxazol und Trimethoprim (Cotrimoxazol). Warum am ehesten?',
    answers: [
      {
        answerText: 'Keines von den beiden Medikamenten allein ist antibakteriell wirksam.',
        correct: null
      },
      {
        answerText: 'Die Kombination hat eine synergistische antibakterielle Wirkung.',
        correct: null
      },
      {
        answerText: 'Trimethoprin soll die häufige Entwicklung von Allergien gegenüber Sulfamethoxazol (Sulfa-Verbindung) reduzieren.',
        correct: null
      },
      {
        answerText: 'Sulfamethoxazol hemmt die renale Ausscheidung von Trimethoprim, so daß die Halbwertszeit von Trimethoprim verdoppelt wird.',
        correct: null
      },
      {
        answerText: 'Sulfamethoxazol hat eine kurze Halbwertszeit und Trimethoprim hat eine längere Halbwertszeit, so daß man eine kontinuierliche antibiotische Therapie durchführen kann.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist die dosisbegrenzende unerwünschte Wirkung des Tuberkulosemedikamentes Ethambutol?',
    answers: [
      {
        answerText: 'Hepatotoxizität',
        correct: null
      },
      {
        answerText: 'Knochenmarkssuppression',
        correct: null
      },
      {
        answerText: 'Sehstörungen',
        correct: null
      },
      {
        answerText: 'zentral-nervöse unerwünschte Wirkungen',
        correct: null
      },
      {
        answerText: 'Nephrotoxizität',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu?',
    answers: [
      {
        answerText: 'Ivabradin kann Phosphene hervorrufen.',
        correct: null
      },
      {
        answerText: 'Ivabradin aktiviert den If-Kanal.',
        correct: null
      },
      {
        answerText: 'Ivabradin kann auch bei AV Block I Grades im Gegensatz zu Verapamil gegeben werden.',
        correct: null
      },
      {
        answerText: 'Tachykardie ist eine typische unerwünschte Wirkung von Ivabradin.',
        correct: null
      },
      {
        answerText: 'Ivabradin wird im Menschen nicht metabolisiert.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 12 jähriges Mädchen leidet an Asthma bronchiale. Die Substanz, die Sie ihr verschrieben haben, führt zu gastrointestinalen Störungen, Schlaflosigkeit und Kopfschmerzen. Welches Medikament haben Sie dem Mädchen am wahrscheinlichsten verschrieben?',
    answers: [
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Beclometason',
        correct: null
      },
      {
        answerText: 'Cromoglicinnatrium',
        correct: null
      },
      {
        answerText: 'Ipratropiumbromid',
        correct: null
      },
      {
        answerText: 'Theophyllin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient wird mit einer Substanz behandelt, um seine Ödeme zur Rückbildung zu bringen. Diese Substanz hemmt die Absorption von Dicarbonationen aus dem glomerulären Filtrat. Die langfristige Wirksamkeit dieser Substanz ist durch eine Medikamenten-bedingte Azidose limitiert, die in den ersten Wochen der Therapie auftreten kann. Welche Substanz ist gemeint?',
    answers: [
      {
        answerText: 'Triamteren',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Amilorid',
        correct: null
      },
      {
        answerText: 'Acetazolamid',
        correct: null
      },
      {
        answerText: 'Spironolacton',
        correct: null
      }
    ]
  },
  {
    questionText: 'Auf Ihre Station wird eine Patientin (56 Jahre) eingewiesen mit Zustand nach (vor drei Monaten) Schlaganfall und einer Anamnese von Migräne mit Aura sowie Diabetes. Die Schwestern finden die Medikation auf dem Einweisungsarztbrief seltsam und bitten Sie um Überprüfung. Welches der folgenden Medikamente ist am ehesten abzusetzen oder anders zu dosieren?',
    answers: [
      {
        answerText: 'Metformin 1g , peroral, alle 12 Stunden',
        correct: null
      },
      {
        answerText: 'Bisoprolol 200 g, peroral, einmal am Tag',
        correct: null
      },
      {
        answerText: 'Verapamil 40 mg, peroral, alle sechs Stunden',
        correct: null
      },
      {
        answerText: 'Paracetamol 1g peroral, alle 12 Stunden',
        correct: null
      },
      {
        answerText: 'Phenprocoumon, Ziel INR 2-3.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden unerwünschten Wirkungen sind nicht typisch für Haloperidol?',
    answers: [
      {
        answerText: 'Hyperthermie',
        correct: null
      },
      {
        answerText: 'Parkinson-ähnliche Störungen',
        correct: null
      },
      {
        answerText: 'Akathisie',
        correct: null
      },
      {
        answerText: 'Spätdyskinesie',
        correct: null
      },
      {
        answerText: 'Hemmung der Galaktorrhö',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient mit biventrikulärer systolischer Herzinsuffizienz hat jetzt ein Lungenödem entwickelt. Warum erhält der Patient am ehesten akut Nitroglyzerin?',
    answers: [
      {
        answerText: 'Um eine arterielle Vasodilation zu erzeugen.',
        correct: null
      },
      {
        answerText: 'Um die Herzfrequenz zu erhöhen.',
        correct: null
      },
      {
        answerText: 'Um einen positiv inotropen Effekt zu erzielen.',
        correct: null
      },
      {
        answerText: 'Um den „cardiac output“ (Herzzeitvolumen) zu erhöhen.',
        correct: null
      },
      {
        answerText: 'Um die venöse Kapazität zu erhöhen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 86 jährige Patientin mit anamnestisch bekanntem Morbus Parkinson, wird in Ihre Klinik aufgenommen wegen akuter agitierter Verwirrtheit und einem akuten Harnwegsinfekt. Sie geben ihr deshalb Antibiotika und Haloperidol gegen die Agitation. Sie klagt über Brechreiz und deshalb verschreiben Sie ihr auch noch ein Antiemetikum. Zwei Tage nach Aufnahme, zeigt sie abnorme Bewegungsabläufe, die ihre besuchende Tochter als Parkinson-typisch deutet. Man bittet Sie die Medikamentation zu überprüfen. Welches Medikament würden Sie bei dieser Patientin am ehesten absetzen?',
    answers: [
      {
        answerText: 'Amoxcillin 375 mg, peroral, alle acht Stunden',
        correct: null
      },
      {
        answerText: 'Carbidopa/Levo-Dopa 25 mg/100mg, peroral, alle acht Stunden',
        correct: null
      },
      {
        answerText: 'Domperidon 10 mg peroral, alle sechs Stunden',
        correct: null
      },
      {
        answerText: 'Haloperidol 500 mg',
        correct: null
      },
      {
        answerText: 'Omeprazol 20 mg peroral, einmal am Tag',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient wird in Ihre Notaufnahme gebracht mit Tachykardie, Muskelschwäche, Nervosität, Fieber, Übelkeit, starkem Schwitzen und beginnendem Delir. Sie ordnen Labortests an und messen einen deutlichen Anstieg von freiem T4 und eine verminderte Konzentration des TSHs. Sie geben dem Patienten jetzt Methimazol. Aufgrund welches Wirkungsmechanismus versprechen Sie sich bei diesem Patienten eine therapeutisch erwünschte Wirkung?',
    answers: [
      {
        answerText: 'Hemmung der Tyrosinhydroxylase dadurch Hemmung der Noradrenalinbildung',
        correct: null
      },
      {
        answerText: 'Hemmung der Schilddrüsenperoxidase, dadurch Hemmung der Bildung von T4 und T3',
        correct: null
      },
      {
        answerText: 'Hemmung der Calciumaufnahme in das endoplasmatische Reticulum',
        correct: null
      },
      {
        answerText: 'Steigerung der Sekretion von Thyroxin',
        correct: null
      },
      {
        answerText: 'Hemmung des Wachstums von parfimalen Schilddrüsenzellen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 58 jähriger Mann kommt zu Ihnen zur körperlichen Routineuntersuchung. Er hat einen Nüchternglukosewerte von 200 mg/dl und einen positiven Urintest für Glukose. Sonst hat er keine weiteren Nebenerkrankungen oder Risikofaktoren. Er ist 177 cm groß und wiegt 95 kg. Was ist der am ehesten erste Schritt in der Behandlung dieses Diabetikers?',
    answers: [
      {
        answerText: 'Sie verschreiben eine morgendliche Dosis von 10 Einheiten von neutralem Protein Hagedorn Insulin (NPH-Insulin) und 5 Einheiten von Altinsulin vor jeder Mahlzeit.',
        correct: null
      },
      {
        answerText: 'Sie setzen ihn auch eine Diät von 1200 Kilokalorien mit einem leichten Körperbewegungsprogramm.',
        correct: null
      },
      {
        answerText: 'Sie verschreiben ihm 500 mg Tolbutamid zweimal täglich.',
        correct: null
      },
      {
        answerText: 'Sie verschreiben ihm 50 mg Glibenclamid täglich.',
        correct: null
      },
      {
        answerText: 'Sie empfehlen, weniger Süßigkeiten zu sich zu nehmen und Stress im Beruf zu vermeiden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient bekommt Fluphenazin verschrieben. Er reagiert darauf mit Xerostomie, Tachykardie, trockener Haut und Harnverhalt. Was ist die wahrscheinliste Erklärung für diese Effekte?',
    answers: [
      {
        answerText: 'Die Substanz ist ein Agonist an muscarinischen Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Die Substanz ist ein Antagonist an muscarinischen Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Die Substanz ist ein Agonist an Dopamin-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Die Substanz ist ein Antagonist an Dopamin-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Die Substanz ist ein partieller Antagonist an Opiat-Rezeptoren.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche von den unten genannten Stoffen ist im Prinzip am ehesten geeignet zur Therapie von generalisierten tonisch-klonischen epileptischen Anfällen (Grand-Mal)?',
    answers: [
      {
        answerText: 'Phenytoin',
        correct: null
      },
      {
        answerText: 'Ethosuximid',
        correct: null
      },
      {
        answerText: 'Fluoxetin',
        correct: null
      },
      {
        answerText: 'Chlorpromazin',
        correct: null
      },
      {
        answerText: 'Haloperidol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 66 jährige Frau wurde nach einer Hüftgelenksoperation vor kurzem aus der Orthopädie entlassen und kommt zu ihrem Hausarzt, für den Sie eine Vertretung machen. Sie erklärt Ihnen, sie habe die Operation gut überstanden, aber jetzt drei Wochen später, sehe sie „doppelt“. Nach weiterem Befragen scheint sie ferner einen trockenen Mund zu besitzen, obwohl sie viel trinke. Ferner klagt sie über Obstipation. Sie messen einen Puls von 104 Schlägen pro Minute.Welches Medikament ist am ehesten für diese unerwünschten Effekte verantwortlich und sollte deshalb abgesetzt werden?',
    answers: [
      {
        answerText: 'Omeprazol, 20 mg, peroral einmal täglich',
        correct: null
      },
      {
        answerText: 'Cetirizin, 10 mg, einmal täglich',
        correct: null
      },
      {
        answerText: 'Amitryptilin, 20 mg, peroral, zur Nacht',
        correct: null
      },
      {
        answerText: 'Ibuprofen, 400 mg, peroral, alle acht Stunden',
        correct: null
      },
      {
        answerText: 'Enoxaparin, 40 mg, subcutan, einmal täglich',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 43 jährige Patientin, die HIV positiv ist, wird von Ihnen behandelt mit einer Kombination von Zidovudin, Lamivudin und Atazanavir. Welche der folgenden Erklärungen ist am überzeugendsten, um diese Tripel-Therapie zu erklären?',
    answers: [
      {
        answerText: 'Zur Zerstörung der replizierenden und nicht-replizierenden viralen Gene.',
        correct: null
      },
      {
        answerText: 'Um die Halbwertszeit eines der Medikamente in der Kombination zu verlängern.',
        correct: null
      },
      {
        answerText: 'Um das Auftreten von Resistenzen gegen die Medikamente zu verzögern.',
        correct: null
      },
      {
        answerText: 'Um den Abbau einer der Substanzen in der Kombination zu hemmen.',
        correct: null
      },
      {
        answerText: 'Um die gleichzeitige antimikrobielle Wirksamkeit dieser Kombination gegen opportunistische Keime zu erhöhen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 72-jähriger Mann ohne relevante medizinische Anamnese soll jetzt wegen generalisierter Epilepsien mit Natrium-Valproat behandelt werden. Welche Kontroll-Untersuchung müssen Sie am ehesten veranlassen?',
    answers: [
      {
        answerText: 'Messung von Amylase-Aktivität im Serum',
        correct: null
      },
      {
        answerText: 'Messung von Vitamin D-Konzentration im Serum',
        correct: null
      },
      {
        answerText: 'Messung von Kaliumionen-Konzentration im Serum',
        correct: null
      },
      {
        answerText: 'Messung von GOT-Aktivität im Serum',
        correct: null
      },
      {
        answerText: 'Messung von Kreatinin-Konzentration im Serum',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 30 jähriger HIV positiver Mann wird in Ihr Krankenhaus eingewiesen. Sie stellen die Verdachtsdiagnose Pneumonie. Weitere Untersuchungen führen zur genaueren Diagnose Toxoplasmose und Sie geben ihm die leitliniengerechte Kombinationstherapie. Die Hemmung welches der folgenden Enzyme der Protozoen führt am wahrscheinlichsten zu therapeutischen Nutzen für den Patienten?',
    answers: [
      {
        answerText: 'Hemmung der Purin-Phosphoryl-transferase.',
        correct: null
      },
      {
        answerText: 'Hemmung der Ornithin-Decarboxylase.',
        correct: null
      },
      {
        answerText: 'Hemmung der Ferritinoxidase',
        correct: null
      },
      {
        answerText: 'Hemmung der Glukose-6-Phosphat-dehydrogenase.',
        correct: null
      },
      {
        answerText: 'Hemmung der Dihydrofolatreduktase.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 49-jähriger Mann, Herr Glavicic, mit hohem Blutdruck hat versucht den Blutdruck durch eine Diät und körperliches Training zu reduzieren. Nach einem Jahr dieser Versuche ist sein Blutdruck zwar ein bißchen gefallen, aber verharrt bei 150/100 mm Hg. Im letzten Jahr ist er in Ihrer Praxis gewesen mit einem roten schmerzhaft geschwollenen Großzehengrundgelenk. Welche der üblichen Medikamente zur Senkung des Blutdruckes würden Sie bei diesem Patienten am ehesten nicht verschreiben?',
    answers: [
      {
        answerText: 'Amlodipin',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Ramipril',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die 52 jährige Frau Wehsely hat nach einem Ehestreit den Inhalt einer Flasche geschluckt, die Parathion enthält, ein Organophosphat. Sie wird innerhalb von 30 Minuten in Ihre Notaufnahme gebracht. Sie führen eine nasogastrale Lavage aus. Frau Wehsely präsentiert sich jetzt mit folgenden Symptomen: Miosis, Schwitzen, Salivation, tränende Augen, Defäkation und Bronchorrhoe. Welche der folgenden Substanzpaare sind jetzt am ehesten indiziert?',
    answers: [
      {
        answerText: 'Atropin + Pralidoxim',
        correct: null
      },
      {
        answerText: 'Nitroglycerin + Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Phenylephrin + Isoprenalin',
        correct: null
      },
      {
        answerText: 'Propranolol + Theophyllin',
        correct: null
      },
      {
        answerText: 'Turbocurarin + Lidocain',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der unten genannten Substanzen ist am ehesten geeignet die Wahrscheinlichkeit eines Suizids bei einem schwer depressiven Patienten zu senken?',
    answers: [
      {
        answerText: 'Fluoxetin',
        correct: null
      },
      {
        answerText: 'Olanzapin',
        correct: null
      },
      {
        answerText: 'Valproinsäure',
        correct: null
      },
      {
        answerText: 'Sertralin',
        correct: null
      },
      {
        answerText: 'Lithium',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente wird in Deutschland typischerweise benutzt, um die Verdachts-Diagnose Brugada-Syndrom zu bestätigen?',
    answers: [
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Adenosin',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Ajmalin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Glibenclamid',
    answers: [
      {
        answerText: 'ist Mittel der ersten Wahl bei übergewichtigen Diabetikern Typ II.',
        correct: null
      },
      {
        answerText: 'öffnet K-Ach Kanäle.',
        correct: null
      },
      {
        answerText: 'schließt K-ATP Kanäle.',
        correct: null
      },
      {
        answerText: 'bewirkt keine Hypoglykämie.',
        correct: null
      },
      {
        answerText: 'wird auch parenteral gegeben.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 62 Jahre alte Frau wird wegen ihres erhöhten Blutdruckes behandelt mit einer festen Kombination von Ramipril und Hydrochlorothiazid. Sie beklagt sich bei Ihnen, daß sie seit sechs Monaten unter Husten leidet, der zwei Monate, nachdem sie in Ihrer Ambulanz war, auftrat. Ihr Blutdruck ist nach Aussage der Patientin gut eingestellt, auf dem Thorax-Röntgen-Bild und bei der Spirometrie sehen sie aber keine Veränderungen. Wie können Sie sich den Husten dieser Patientin am ehesten erklären?',
    answers: [
      {
        answerText: 'Sie hat eine Lungenentzündung.',
        correct: null
      },
      {
        answerText: 'Sie hat eine Erkältung.',
        correct: null
      },
      {
        answerText: 'Der Blutdruck ist doch schlechter eingestellt, als Sie vermutet hatten.',
        correct: null
      },
      {
        answerText: 'Es liegt am Hydrochlorothiazid.',
        correct: null
      },
      {
        answerText: 'Es liegt am Ramipril.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 76 jähriger Mann mit bekanntem Vorhofflimmern, für das man ihm Phenprocoumon verschrieben hat (Ziel INR: 2-3); kommt zu Ihrer Notaufnahme und beklagt sich über eine Episode von Hämaturie. Sie messen sofort den INR mit dem Ergebnis 7,2. Eine Woche zuvor hat er von seiner Hausärztin ein Antibiotikum zur Behandlung einer ambulant erworbenen Pneumonie erhalten. Am wahrscheinlichsten haben wir hier von einer unerwünschten Arzneimittelinteraktion auszugehen. Welches Antibiotikum wurde ihm deshalb am ehesten verschrieben?',
    answers: [
      {
        answerText: 'Amoxicillin',
        correct: null
      },
      {
        answerText: 'Erythromycin',
        correct: null
      },
      {
        answerText: 'Amoxicillin + Clavulansäure',
        correct: null
      },
      {
        answerText: 'Trimethoprim',
        correct: null
      },
      {
        answerText: 'Levofloxacin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Einem Patienten mit bekannter belastungsabhängiger Angina pectoris wollen Sie jetzt eine Substanz zur Angina-pectoris-Prophylaxe verschreiben. Welches der genannten Medikamente ist am ehesten sinnvoll?',
    answers: [
      {
        answerText: 'Prazosin-Tablette',
        correct: null
      },
      {
        answerText: 'Nitroglyzerin-Spray',
        correct: null
      },
      {
        answerText: 'Metoprolol-Tablette',
        correct: null
      },
      {
        answerText: 'Isosorbiddinitrat-Spray',
        correct: null
      },
      {
        answerText: 'Moxonidin-Tablette',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zur Diabetes-Therapie mit rekombinantem Humaninsulin trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Es wird unverändert renal eliminiert.',
        correct: null
      },
      {
        answerText: 'Es wird nur in der Leber metabolisiert.',
        correct: null
      },
      {
        answerText: 'Es wirkt fast ausschließlich über Aktivierung von Serin-Phosphatasen.',
        correct: null
      },
      {
        answerText: 'Es kann Lipodystrophien bedingen.',
        correct: null
      },
      {
        answerText: 'Seine Plasmahalbwertzeit bei intravenöser Gabe liegt bei etwa 62 Minuten.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Herr Mayer, 55 Jahre, ein starker Raucher, erhält wegen einer Lungenerkrankung (COPD) seit vier Jahren Theophyllin 500 mg peroral pro Tag. Jetzt hat er, in einem eigenen Haus mit seiner Familie lebend, zuhause eine Pneumonie entwickelt. Er erhält jetzt von Ihnen zusätzlich 500 mg Erythromycin pro Tag. Er klagt nach einem Tag dieser Behandlung über Herzklopfen und Einschlafstörung. Wie gehen Sie am ehesten vor?',
    answers: [
      {
        answerText: 'Erhöhen der Dosis von von Erythromycin.',
        correct: null
      },
      {
        answerText: 'Verschreiben von Amiodaron gegen Arrhythmie.',
        correct: null
      },
      {
        answerText: '10 mg Diazepam zur Nacht gegen die Einschlafstörung.',
        correct: null
      },
      {
        answerText: 'Reduktion der Dosis von Theophyllin.',
        correct: null
      },
      {
        answerText: 'Verschreiben von Propranolol gegen Arrhythmien und gegen Schlafstörungen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine lebensbedrohliche unerwünschte Wirkung von Amiodaron ist am ehesten?',
    answers: [
      {
        answerText: 'Lungenfibrose',
        correct: null
      },
      {
        answerText: 'Agranulocytose',
        correct: null
      },
      {
        answerText: 'Erythrozytopenie',
        correct: null
      },
      {
        answerText: 'Hämorrhagischer Insult',
        correct: null
      },
      {
        answerText: 'Pathologische Frakturen der Wirbelsäule',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Penicilline ist am wenigsten peroral bioverfügbar? Seine Verschreibung als Tablette wäre ein Kunstfehler.',
    answers: [
      {
        answerText: 'Penicillin V',
        correct: null
      },
      {
        answerText: 'Amoxicillin',
        correct: null
      },
      {
        answerText: 'Dicloxacillin',
        correct: null
      },
      {
        answerText: 'Penicillin G',
        correct: null
      },
      {
        answerText: 'Ampicillin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen von älteren Histamin-H1-Rezeptorblockern, z.B. Diphenhydramin, erklären sich durch Blockade von peripheren H1-Rezeptoren?',
    answers: [
      {
        answerText: 'Miktionsstörungen',
        correct: null
      },
      {
        answerText: 'Mundtrockenheit',
        correct: null
      },
      {
        answerText: 'Aufhebung einer Neurotransmitter-vermittelten Kontraktion der Bronchialmuskulatur',
        correct: null
      },
      {
        answerText: 'Mydriasis',
        correct: null
      },
      {
        answerText: 'Tachykardie',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zur hepatischen Biotransformation ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Ceftriaxon hemmt Leberenzyme und kann dadurch die Wirkung bestimmter Arzneimittel vermindern.',
        correct: null
      },
      {
        answerText: 'Phenobarbital hemmt Leberenzyme und kann dadurch die Wirkung bestimmter Arzneimittel verlängern.',
        correct: null
      },
      {
        answerText: 'Cimetidin inhibiert Leberenzyme und hemmt so den Abbau von Theophyllin.',
        correct: null
      },
      {
        answerText: 'Ritonavir stimuliert Leberenzyme und kann dadurch die Wirkung bestimmter Arzneimittel vermindern.',
        correct: null
      },
      {
        answerText: 'Itraconazol stimuliert Leberenzyme und kann dadurch die Wirkung bestimmter Arzneimittel steigern.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie geben Ihrem Patienten, der an einem neu diagnostizierten essentiellen Hypertonus leidet, die maximal wirksame Dosis fünf verschiedener antihypertensiv wirkender Arzneimittel. Sie geben diese Dosis für vier Halbwerten, damit sich im Körper ein Gleichgewicht herausgebildet hat. Dann setzen sie das Arzneimittel für vier Halbwertzeiten ab und geben das nächste Arzneimittel in der gleichen Weise. Im folgenden sind die Medikamente und deren Blutdrucksenkung genannt. Welches Arzneimittel ist das effektivste?',
    answers: [
      {
        answerText: 'Clonidin senkt von 180 mmHg auf 160 mmHg',
        correct: null
      },
      {
        answerText: 'Moxonidin senkt von 180 mmHg auf 170 mmHg',
        correct: null
      },
      {
        answerText: 'Metoprolol senkt von 180 mmHg um 15 mmHg',
        correct: null
      },
      {
        answerText: 'Losartan erhöht den Blutdruck um 12 mmHg',
        correct: null
      },
      {
        answerText: 'Amlodipin senkt den Blutdruck von 180 mmHg auf 175 mmHg',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Indikation für Verapamil trifft am wenigsten zu?',
    answers: [
      {
        answerText: 'systolische Herzinsuffizienz NYHA IV',
        correct: null
      },
      {
        answerText: 'Prinzmetal-Angina',
        correct: null
      },
      {
        answerText: 'Belastungs-Angina pectoris',
        correct: null
      },
      {
        answerText: 'Vorhofflimmern',
        correct: null
      },
      {
        answerText: 'Hypertrophe obstruktive Kardiomyopathie',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der genannten Antibiotika kann die Wirkung von nichtdepolarisierenden Muskelrelaxantien verstärken?',
    answers: [
      {
        answerText: 'Penicillin G',
        correct: null
      },
      {
        answerText: 'Levofloxacin',
        correct: null
      },
      {
        answerText: 'Ceftriaxon',
        correct: null
      },
      {
        answerText: 'Sulfamethoxazol',
        correct: null
      },
      {
        answerText: 'Streptomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 80 jähriger Mann wird von seiner Tochter zur Notaufnahme gebracht, welche sagt, sie habe bei ihm Blut im Urin gesehen. Sie bestätigen diese Aussage durch einen Teststreifen, den Sie in seinen Urin halten. Er nimmt als Vorbeugung gegen einen Schlaganfall Phenprocoumon, da ein Vorhofflimmern bei ihm diagnostiziert wurde. Der INR sollte 2-3 sein. Vor einem Monat betrug er 2,7 jetzt aber 8,2. Was sollten Sie jetzt am ehesten machen:',
    answers: [
      {
        answerText: 'weniger Phenprocoumon geben',
        correct: null
      },
      {
        answerText: 'peroral Vitamin K geben',
        correct: null
      },
      {
        answerText: 'eine langsame Injektion von Vitamin K geben',
        correct: null
      },
      {
        answerText: 'ein bis zwei Dosen Phenprocoumon weglassen, dann mit niedriger Dosis weiterbehandeln',
        correct: null
      },
      {
        answerText: 'langsam Protamin injizieren',
        correct: null
      }
    ]
  },
  {
    questionText: 'Publius Ovidius Naso wird in das Krankenhaus aufgenommen aufgrund einer Lungenentzündung durch gramnegative Bakterien. Sie verordnen ein Aminoglykosid-Antibiotikum. Die Clearance und das Verteilungsvolumen von Tobramycin seien 60 ml/min und 50 Liter. Welche Erhaltungsdosis (in mg) müssen Sie ihm am ehesten sechsstündlich intravenös geben, um im Gleichgewicht eine Plasmakonzentration von 5 mg pro Liter zu erzielen?',
    answers: [
      {
        answerText: '56',
        correct: null
      },
      {
        answerText: '108',
        correct: null
      },
      {
        answerText: '208',
        correct: null
      },
      {
        answerText: '344',
        correct: null
      },
      {
        answerText: '488',
        correct: null
      }
    ]
  },
  {
    questionText: 'Der Proband Decimus I. Iuvenalis erhält in Phase I einer klinischen Studie ein neues Derivat des Diazepams. Clearance und das Verteilungsvolumen des neuen Medikaments seien 0,7 Liter pro Stunde und 35 Liter. Welche Aussage trifft zu? Die Halbwertzeit in Stunden des neuen Stoffes beträgt somit in etwa',
    answers: [
      {
        answerText: '105.',
        correct: null
      },
      {
        answerText: '75.',
        correct: null
      },
      {
        answerText: '70.',
        correct: null
      },
      {
        answerText: '35.',
        correct: null
      },
      {
        answerText: '20.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei welchem der genannten Arzneistoffe ist die Eliminationshalbwertszeit bei Niereninsuffizienz am ehesten nicht verlängert? Man muß die Tagesdosis, in anderen Worten, nicht senken.',
    answers: [
      {
        answerText: 'Gentamicin',
        correct: null
      },
      {
        answerText: 'Digitoxin',
        correct: null
      },
      {
        answerText: 'Lithium',
        correct: null
      },
      {
        answerText: 'Streptomycin',
        correct: null
      },
      {
        answerText: 'Metformin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Hydrochlorothiazid',
    answers: [
      {
        answerText: 'kann eine Hyperkaliämie bedingen',
        correct: null
      },
      {
        answerText: 'ist zur Therapie eines kardial bedingten Lungenödems Mittel der ersten Wahl',
        correct: null
      },
      {
        answerText: 'verbessert einen Diabetes Typ 2',
        correct: null
      },
      {
        answerText: 'kann nicht mehr als 20% des filtrierten Natriums zur Ausscheidung bringen',
        correct: null
      },
      {
        answerText: 'steigert die Ausscheidung von Calcium und Phosphat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist am ehesten geeignet zur Therapie des Wolff-Parkinson-White-Syndroms?',
    answers: [
      {
        answerText: 'Ranolazin',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Ajmalin',
        correct: null
      },
      {
        answerText: 'Vernakalant',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten der Wirkungsmechanismus von Voriconazol, einem Antimykotikum?',
    answers: [
      {
        answerText: 'Einlagerung mit Ergosterin in die Wand und damit Porenbildung',
        correct: null
      },
      {
        answerText: 'Hemmung des Cytochrom-P450-Systems',
        correct: null
      },
      {
        answerText: 'Hemmung der Zellwandsynthese',
        correct: null
      },
      {
        answerText: 'Spindelgift',
        correct: null
      },
      {
        answerText: 'Antimetabolit',
        correct: null
      }
    ]
  },
  {
    questionText: 'Der 74 jährige Herr Lingens wird auf Ihre orthopädische Station für eine elektive Hüfttotalendoprothese-Operation aufgenommen. Welches Medikament werden Sie etwa eine Stunde vor der Operation dem Patienten am ehesten aus prophylaktischen Gründen applizieren?',
    answers: [
      {
        answerText: 'Metronidazol',
        correct: null
      },
      {
        answerText: 'Tetracyclin',
        correct: null
      },
      {
        answerText: 'Sulfamethoxazol',
        correct: null
      },
      {
        answerText: 'Aztreonam',
        correct: null
      },
      {
        answerText: 'Ceftriaxon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 54 jährige Patientin, Frau Rados, kommt zu Ihnen und klagt über unregelmäßigen Herzschlag, Schlaflosigkeit, Durchfall und ausgeprägtes Schwitzen seit etwa drei Wochen. Bei der körperlichen Untersuchung finden Sie einen mittelgradig eingeschränkten Allgemeinzustand mit geringem Zittern der Hände und Exophthalmus. Der Blutdruck beträgt 146/62 mmHg, die Herzfrequenz 122 Schläge/Minute, Atemfrequenz 18 pro Minute. Im EKG sehen Sie eine Vorhoftachykardie. Welche der folgenden Substanzen wird am wahrscheinlichsten die Arrhythmie der Patientin beseitigen?',
    answers: [
      {
        answerText: 'Chinidin',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Digoxin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Der Wirkungsmechanismus des positiv inotropen Effektes von Digoxin bei einem Patienten mit systolischer Herzinsuffizienz im Sinusrhythmus beruht am ehesten?',
    answers: [
      {
        answerText: 'Auf einer Hemmung der Ca2+-Aufnahme in das sarkoplasmatische Retikulum',
        correct: null
      },
      {
        answerText: 'Auf einem Anstieg der systolischen Ca2+-Konzentration',
        correct: null
      },
      {
        answerText: 'Auf einer Hemmung einer H+/K+-Pumpe',
        correct: null
      },
      {
        answerText: 'Auf einer Hemmung einer Phosphodiesterase',
        correct: null
      },
      {
        answerText: 'Auf einer anticholinergen Wirkung',
        correct: null
      }
    ]
  },
  {
    questionText: 'Milrinon wird häufig in der Herzchirurgie intravenös als positiv inotrope Substanz angewendet. Ambulant ist es nicht mehr als Tablette zugelassen. Denn eine typische lebensbedrohliche unerwünschte Wirkung von Milrinon ist am ehesten?',
    answers: [
      {
        answerText: 'Agranulocytose',
        correct: null
      },
      {
        answerText: 'Arrhythmien',
        correct: null
      },
      {
        answerText: 'Thrombose',
        correct: null
      },
      {
        answerText: 'Embolien',
        correct: null
      },
      {
        answerText: 'Hemmung der Cytochromoxidasen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Timolol-Augentropfen können u.a, zur Behandlung von Glaukomen oder nach Schäden am Auge bei Schweißarbeiten eingesetzt werden. Vor Verschreibung müssen Sie eine genaue Anamnese des Patienten erheben. Denn auch Augentropfen können systemische unerwünschte Wirkungen hervorrufen. Eine solche lebensbedrohliche unerwünschte Wirkung von Timolol ist am ehesten?',
    answers: [
      {
        answerText: 'Leukozytopenie',
        correct: null
      },
      {
        answerText: 'Tachykardie',
        correct: null
      },
      {
        answerText: 'Senkung des Augeninnendruckes',
        correct: null
      },
      {
        answerText: 'Hyperglykämie',
        correct: null
      },
      {
        answerText: 'Asthma bronchiale-Anfall',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben Nachtdienst, die Übergabe der Patienten war chaotisch. Der Oberarzt ist nichterreichbar. Sie injizieren Vincristin, ein Zytostatikum, aus Versehen hochdosiert in den Spinalkanal (statt intravenös) von Frau Schneider. Frau Schneider stirbt durch Ihre falsche Injektion am ehesten an?',
    answers: [
      {
        answerText: 'Atemlähmung',
        correct: null
      },
      {
        answerText: 'Leukozytopenie',
        correct: null
      },
      {
        answerText: 'Akutes Abdomen durch Ileus',
        correct: null
      },
      {
        answerText: 'Lungenfibrose',
        correct: null
      },
      {
        answerText: 'Herzinsuffizienz',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Leucovorin© (=Folinsäure) erhöht die zytostatische Effektivität von',
    answers: [
      {
        answerText: 'Amiodaron.',
        correct: null
      },
      {
        answerText: 'Fluoruracil.',
        correct: null
      },
      {
        answerText: 'Methotrexat.',
        correct: null
      },
      {
        answerText: 'Imipenem.',
        correct: null
      },
      {
        answerText: 'Vincristin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben es eilig und verschreiben einer 55 jährigen Rheumapatientin, Frau Ermisch, statt 50 mg pro Woche 1 g pro Tag von Methrotrexat intravenös. Welche unerwünschte Wirkung wird am ehesten von Frau Ermisch bei der nächsten Visite in der folgenden Woche beklagt werden?',
    answers: [
      {
        answerText: 'Haarausfall',
        correct: null
      },
      {
        answerText: 'Atembeschwerden',
        correct: null
      },
      {
        answerText: 'Herzklopfen',
        correct: null
      },
      {
        answerText: 'blutiger Urin',
        correct: null
      },
      {
        answerText: 'Gichtanfall',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der folgenden Stoffe bedingt am ehesten eine Hyperkaliämie',
    answers: [
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      },
      {
        answerText: 'Chlorthalidon',
        correct: null
      },
      {
        answerText: 'Moxonidin',
        correct: null
      },
      {
        answerText: 'Clonidin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Fünf verschiedene Arzneistoffe (hier: A-E genannt) senken den Blutdruck eines Patienten mit folgenden EC50-Werten. Welcher der Arzneistoffe ist der potenteste Blutdrucksenker?',
    answers: [
      {
        answerText: 'Bisoprolol:10 nM',
        correct: null
      },
      {
        answerText: 'Carvedilol 0,3 x 10-8 M',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid 1 µM',
        correct: null
      },
      {
        answerText: 'Propranolol 10 x 10-6 M',
        correct: null
      },
      {
        answerText: 'Cadmium: 30 mM',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Über µ-Rezeptoren hemmt Morphin die Calciumwiederaufnahme in postsynaptischen Neuronen.',
        correct: null
      },
      {
        answerText: 'Über µ-Rezeptorantagonismus erhöht Morphin die Freisetzung von Vesikeln aus der präsynaptischen Membran und hyperpolarisiert afferente Neuronen.',
        correct: null
      },
      {
        answerText: 'Über µ-Rezeptoren hemmt Morphin die Wiederaufnahme von Serotonin und hyperpolarisiert dadurch inhibitorische Interneurone.',
        correct: null
      },
      {
        answerText: 'Über µ-Rezeptoren hemmt Morphin spannungsabhängige Ca2+-Kanäle an afferenten Neuronen und hyperpolarisiert postsynaptische Neurone.',
        correct: null
      },
      {
        answerText: 'µ-Rezeptoren stimulieren die Freisetzung von Calcium in afferenten Neuronen und depolarisieren postsynaptische Neuronen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Ein 2-jähriges Kind wird in die Notaufnahme gebracht und zwar eine Stunde, nachdem es Tabletten seiner Mutter geschluckt hat. Diese hatte es aus einer Flasche genommen, die auf dem Kühlschrank stand. Seine Symptome umfassen gastrointestinale Störungen, Übelkeit, Erbrechen mit Blut und epigastrischen Schmerz. Man mißt eine metabolische Azidose und Leukozytose. Wahrscheinlich leidet das Kind an Vergiftung mit',
    answers: [
      {
        answerText: 'Vitamin D.',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure.',
        correct: null
      },
      {
        answerText: 'Diphenhydramin.',
        correct: null
      },
      {
        answerText: 'Eisensalzen.',
        correct: null
      },
      {
        answerText: 'Thalliumsalzen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 23-jähriger Mann hat ein Hodgkin-Lymphom und wird nach dem ABVD Schema (Adramycin®= Doxorubicin, Bleomycin, Vinblastin, Dacarbazin) behandelt. Zusätzlich geben Sie ihm Prednison. Nach dem zweiten Zyklus dieses Schemas entwickelt der Patient eine Dyspnoe, einen unproduktiven Husten und intermittierendes Fieber. Sie machen einen Röntgen-Thoraxaufnahme und sehen pulmonale Infiltrationen. Falls diese Veränderungen durch die o.g. Substanzen hervorgerufen wurden, welche Substanz ist am wahrscheinlichsten?',
    answers: [
      {
        answerText: 'Vinblastin',
        correct: null
      },
      {
        answerText: 'Prednison',
        correct: null
      },
      {
        answerText: 'Doxorubicin',
        correct: null
      },
      {
        answerText: 'Dacarbazin',
        correct: null
      },
      {
        answerText: 'Bleomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 30-jähriger männlicher Patient ist HIV positiv und hat eine CD4 Zahl von 300/µl. Die virale RNA liegt bei 5000 Kopien/ml. Seine Behandlung besteht aus Zidovudin, Didanosin und Ritonavir. Weil es zum Gewichtsverlust kommt, nimmt er zusätzlich noch Dronabilon. Er leidet an einer oralen Candidiasis und wird deshalb noch mit Nystatin behandelt. Darüber hinaus nimmt er als Antimykotikum in den letzten Wochen noch Ketoconazol. Er leidet an einer Belastungsangina, die mit Verapamil behandelt wird. Jetzt kommt er zu Ihnen, weil er an Appetitlosigkeit, Übelkeit, Erbrechen und abdominalen Schmerzen leidet. Bei der Laboruntersuchung finden Sie eine pathologisch erhöhte Amylaseaktivität von 220 Einheiten/Liter und Ihre Verdachtsdiagnose lautet: akute Pankreatitis. Welche der folgenden Substanzen ist für diese Pankreatitis am wahrscheinlichsten verantwortlich?',
    answers: [
      {
        answerText: 'Didanosin',
        correct: null
      },
      {
        answerText: 'Nystatin',
        correct: null
      },
      {
        answerText: 'Ketoconazol',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Zidovudin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen wird sehr wahrscheinlich den Serumspiegel von Methotrexat, das eine schwache Säure darstellt und primär über den Urin eliminiert wird, erhöhen können?',
    answers: [
      {
        answerText: 'Paracetamol',
        correct: null
      },
      {
        answerText: 'Allopurinol',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Hydroxychloroquin',
        correct: null
      },
      {
        answerText: 'Penicillin G',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Die molekulare Ursache für Resistenz von Pneumokokken gegenüber Penicillin G ist',
    answers: [
      {
        answerText: 'die Bildung von β-Lactamase.',
        correct: null
      },
      {
        answerText: 'die Veränderung in Penicillin-bindenden Proteinen.',
        correct: null
      },
      {
        answerText: 'die verminderte intrazelluläre Anreicherung von Penicillin G.',
        correct: null
      },
      {
        answerText: 'die Veränderung in den D-Alanin-Struktur des Peptidoglykan Vorläufers.',
        correct: null
      },
      {
        answerText: 'die Bildung von Penicillinase.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Antibiotika ist die Therapie der Wahl für eine durch Pneumocystis-carinii hervorgerufene Pneumonie?',
    answers: [
      {
        answerText: 'Sulfasalazin',
        correct: null
      },
      {
        answerText: 'Trimethoprim plus Sulfamethoxazol',
        correct: null
      },
      {
        answerText: 'Amoxicillin plus Doxycyclin',
        correct: null
      },
      {
        answerText: 'Ceftriaxon',
        correct: null
      },
      {
        answerText: 'Levofloxacin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Herr Müller muß wegen maligner ventrikulärer Arrhythmien auf Ihrer Intensivstation mit einer Dauer-Infusion von Lidocain behandelt werden. Lidocain habe eine Halbwertzeit von 2 h. Sie beginnen um 9:00 Uhr morgens die Infusion. Um 13:00 Uhr am selben Tag nehmen Sie intravenös Blut ab und lassen den Spiegel bestimmen. Er betrage 3 mg/l. Welche Konzentration wird im Gleichgewicht also spätestens nach 12 Stunden Infusion vorliegen?',
    answers: [
      {
        answerText: '3 mg/l',
        correct: null
      },
      {
        answerText: '4 mg/l',
        correct: null
      },
      {
        answerText: '5 mg/l',
        correct: null
      },
      {
        answerText: '6 mg/l',
        correct: null
      },
      {
        answerText: '7mg/l',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Clopidogrel verändert und inaktiviert einen ADP-Rezeptor in den Plättchen und hemmt somit die Plättchenaggregation.',
        correct: null
      },
      {
        answerText: 'Phenprocoumon stimuliert die Bildung von reduzierten Vitamin K, das notwendig ist für die hepatische Produktion von aktivierten Gerinnungsfaktoren.',
        correct: null
      },
      {
        answerText: 'Aspirin hemmt die endotheliale COX 2 und damit die Bildung von Thromboxan.',
        correct: null
      },
      {
        answerText: 'Eptifibatid erhöht die normale Aktivität von Anti-Thrombin III.',
        correct: null
      },
      {
        answerText: 'Protamin antagonisiert die Bindung von Fibrinogen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Es gibt eine Reihe von Medikamenten die den Schilddrüsenstoffwechsel verändern können. Welche Aussage ist richtig?',
    answers: [
      {
        answerText: 'Amiodaron – es kann die Schilddrüsenhormonsynthese reduzieren.',
        correct: null
      },
      {
        answerText: 'Rifampicin – es erhöht den hepatischen Metabolismus der Schilddrüsenhormone.',
        correct: null
      },
      {
        answerText: 'Methimazol – es steigert die Umwandlung von T3 in T4.',
        correct: null
      },
      {
        answerText: 'Corticosteroide – sie hemmen die Freisetzung von TSH.',
        correct: null
      },
      {
        answerText: 'Cholestyramin – erhöht die Resorption von T3.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Östrogenersatztherapie ist verbunden mit der Entwicklung von',
    answers: [
      {
        answerText: 'Endometriose.',
        correct: null
      },
      {
        answerText: 'Uteruskarzinom.',
        correct: null
      },
      {
        answerText: 'Ovarialkarzinom.',
        correct: null
      },
      {
        answerText: 'thromboembolischen Komplikationen.',
        correct: null
      },
      {
        answerText: 'koronarer Herzkrankheit.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Warum gibt man Leucovorin (=Formyl-Tetrahydrofolsäure) am ehesten zusammen mit Methotrexat?',
    answers: [
      {
        answerText: 'Weil Leucovorin die DNA-Synthese in gesunden Zellen erleichtert.',
        correct: null
      },
      {
        answerText: 'Leucovorin ist ein Folatderivat, das die Aktivität der Hydrofolsäurereductase wiederherstellt.',
        correct: null
      },
      {
        answerText: 'Leucovorin hemmt selektiv die Wirkung von Methotrexat in gesunden Zellen.',
        correct: null
      },
      {
        answerText: 'Leucovorin wird zu Purinen metabolisiert, die für die DNA-Synthese in gesunden Zellen verwendet werden.',
        correct: null
      },
      {
        answerText: 'Leucovorin hemmt die Aufnahme von Methotrexat in gesunde Zellen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Es gibt synergistische Arzneimittelkombinationen, wie Penicillin und Aminoglykoside. Es gibt aber auch antagonistische, wie Erythromycin und Penicillin. Was ist die beste Erklärung hierfür?',
    answers: [
      {
        answerText: 'Erythromycin inhibiert die P450-Enzyme bedingte Aktivierung der Penicilline.',
        correct: null
      },
      {
        answerText: 'Erythromycin hemmt die Synthese von Proteinen, die notwendig sind, damit die Penicilline die Zellwand zerstören können.',
        correct: null
      },
      {
        answerText: 'Penicilline hemmen die Zellwandsynthese und erleichtern so die Einschleusung von Aminoglykosiden in die bakteriellen Zellen.',
        correct: null
      },
      {
        answerText: 'Aminoglykoside bewirken eine Fehlablesung der mRNA, die normalerweise für protektive Proteine kodieren würden, die die Zellwand resistent gegenüber Penicillin machen.',
        correct: null
      },
      {
        answerText: 'Penicilline inhibieren die Zellwandsynthese und zerstören damit dort die normalen Bindungsstellen von Erythromycin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist in typischer Dosierung am ehesten bakterizid?',
    answers: [
      {
        answerText: 'Trimethoprim',
        correct: null
      },
      {
        answerText: 'Azithromycin',
        correct: null
      },
      {
        answerText: 'Doxycyclin',
        correct: null
      },
      {
        answerText: 'Levofloxacin',
        correct: null
      },
      {
        answerText: 'Chloramphenicol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten der Wirkungsmechanismus von Amphotericin B?',
    answers: [
      {
        answerText: 'Amphotericin B hemmt die Bildung von Cholesterin aus Lanosterin.',
        correct: null
      },
      {
        answerText: 'Amphotericin B bindet an Lanosterin und hemmt dessen Einbau in die Wand des Pilzes.',
        correct: null
      },
      {
        answerText: 'Amphotericin B hemmt die Bildung von Ergosterin aus Lanosterin.',
        correct: null
      },
      {
        answerText: 'Amphotericin B bindet an Ergosterin und verhindert dessen Einbau in die Pilzzellwand.',
        correct: null
      },
      {
        answerText: 'Amphotericin B bindet an Ergosterin und bildet damit Löcher in der Zellwand des Pilzes.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche möglichen unerwünschten Wirkungen kann am ehesten Ketoconazol haben?',
    answers: [
      {
        answerText: 'Achlorhydrie',
        correct: null
      },
      {
        answerText: 'Candidiasis',
        correct: null
      },
      {
        answerText: 'Hemmung der Östrogensynthese',
        correct: null
      },
      {
        answerText: 'Nebenniereninsuffizienz',
        correct: null
      },
      {
        answerText: 'seborrhoische Dermatitis',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche typische unerwünschte Wirkung kann Gentamicin am ehesten haben?',
    answers: [
      {
        answerText: 'Agranulozytose',
        correct: null
      },
      {
        answerText: 'Hypokaliämie',
        correct: null
      },
      {
        answerText: 'Proteinurie',
        correct: null
      },
      {
        answerText: 'Hyperkaliämie',
        correct: null
      },
      {
        answerText: 'Enzyminduktion (CYP) in der Leber',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Malariamedikamenten ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Artemisinin hemmt die Polymerisation von Häm-Abbauprodukten.',
        correct: null
      },
      {
        answerText: 'Proguanil enthält eine Epoxykonfiguration, die zur Alkylierung von Makromolekülen und ihrer Schädigung führt.',
        correct: null
      },
      {
        answerText: 'Mefloquin ist ein Hemmstoff der Umwandlung von Dihydrofolsäure in Tetrahydrofolsäure.',
        correct: null
      },
      {
        answerText: 'Chloroquin hemmt die Entgiftung von Häm in Blutschizonten.',
        correct: null
      },
      {
        answerText: 'Chinin ist wirksam gegen Leberschizonten.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Nehmen wir an, ein bestimmtes Nahrungsmittel reduziert die Geschwindigkeit der Arzneimittelaufnahme, aber nicht das Ausmaß der Aufnahme eines bestimmten Arzneimittels aus dem Gastrointestinaltrakt. Dann wird durch das Nahrungsmittel in welcher Art und Weise die Aufnahme des Arzneimittels verringert? Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Die Fläche der Kurve zwischen Plasmakonzentration und Zeit (AUC) wird vermindert.',
        correct: null
      },
      {
        answerText: 'Die maximale Plasmakonzentration wird reduziert.',
        correct: null
      },
      {
        answerText: 'Die Zeit in der die maximale Plasmakonzentration erreicht wird, wird vermindert.',
        correct: null
      },
      {
        answerText: 'Die Bioverfügbarkeit wird vermindert.',
        correct: null
      },
      {
        answerText: 'Die Bioverfügbarkeit wird erhöht.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Dosis eines Arzneimittels muß intravenös alle 8 Stunden gegeben werden, um eine mittlere Gleichgewichtskonzentration im Plasma von 5 mg/Liter zu erreichen? Das Verteilungsvolumen des Arzneimittels sei 30 Liter und seine Clearance 8 Liter/Stunde.',
    answers: [
      {
        answerText: '20 mg',
        correct: null
      },
      {
        answerText: '40 mg',
        correct: null
      },
      {
        answerText: '80 mg',
        correct: null
      },
      {
        answerText: '160 mg',
        correct: null
      },
      {
        answerText: '320 mg',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was meint man am ehesten mit einem partiellen Agonismus eines Arzneimittels?',
    answers: [
      {
        answerText: 'Es hat eine geringe Potenz.',
        correct: null
      },
      {
        answerText: 'Es hat hohe Affinität, aber geringe Efficacy (=Effizienz).',
        correct: null
      },
      {
        answerText: 'Es interagiert mit mehr als einem Rezeptor.',
        correct: null
      },
      {
        answerText: 'Es kann nicht den maximalen Effekt erzielen.',
        correct: null
      },
      {
        answerText: 'Es blockt die Wirkung des Antagonisten.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Mann kommt zum Zahnarzt und man beobachtet einen schmerzhaft geschwollenen Gaumen. Welches der folgenden Arzneimittel könnte für diese Probleme am ehesten verantwortlich sein?',
    answers: [
      {
        answerText: 'Irbesartan',
        correct: null
      },
      {
        answerText: 'Ramipril',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Doxazosin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die Substanz kann oral gegeben werden und hemmt direkt und selektiv die Thrombinwirkung. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Apixaban',
        correct: null
      },
      {
        answerText: 'Prasugrel',
        correct: null
      },
      {
        answerText: 'Dabigatran',
        correct: null
      },
      {
        answerText: 'Rivaroxaban',
        correct: null
      },
      {
        answerText: 'Enoxaparin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine typische unerwünschte Wirkung dieser Substanzklasse ist eine Ruptur der Achillessehne. Was ist der zugrundeliegende Wirkungsmechanismus dieser Substanzklasse?',
    answers: [
      {
        answerText: 'Beeinträchtigung der Phospholipidschicht der Membranen.',
        correct: null
      },
      {
        answerText: 'Interaktion mit der RNA-Polymerase.',
        correct: null
      },
      {
        answerText: 'Interaktion mit der Folat-Reduktase.',
        correct: null
      },
      {
        answerText: 'Interaktion mit der Topoisomerase.',
        correct: null
      },
      {
        answerText: 'Interaktion mit calciumbindenden Proteinen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie nehmen einen Gärtner mit Verdacht auf eine Vergiftung während seiner Arbeit mit einem Organophosphatinsektizid auf. Mit welcher Kombination von Substanzen sollte man ihn am ehesten behandeln?',
    answers: [
      {
        answerText: 'Atropin und Adrenalin',
        correct: null
      },
      {
        answerText: 'Atropin und Isoprenalin',
        correct: null
      },
      {
        answerText: 'Noradrenalin und Propranolol',
        correct: null
      },
      {
        answerText: 'Atropin und Pralidoxim',
        correct: null
      },
      {
        answerText: 'Pralidoxim und Propranolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient wurde aufgrund eines systemischen Lupus erythematodes mit antiinflammatorischen Pharmaka behandelt. Er kommt jetzt zur Aufnahme, weil er plötzlich Übelkeit und Erbrechen, abdominale Schmerzen, eine Hyperthermie, Schockzeichen und schlechtes Ansprechen auf Volumengabe und vasokonstriktorische Substanzen zeigt. Die Serumkonzentration von Natrium und Cortisol liegen unter dem Normalbereich. Was ist die wahrscheinlichste Erklärung für diese Symptome?',
    answers: [
      {
        answerText: 'plötzliches Absetzen von Glucocorticoiden.',
        correct: null
      },
      {
        answerText: 'Entstehung von Herzinsuffizienz aufgrund einer Überdosierung von nicht-sterodialen antiinflammatorischen Pharmaka.',
        correct: null
      },
      {
        answerText: 'Verstärkung der Grunderkrankung.',
        correct: null
      },
      {
        answerText: 'berschießende Mineral-corticoide Wirkung der Steroide.',
        correct: null
      },
      {
        answerText: 'der Patient hat Morbus Addison entwickelt.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Amphotericin B wird häufig bei vitaler Indikation gegeben. Dabei kommt es häufig zur Nephrotoxizität. Wie kann man diese Nephrotoxizität am besten begrenzen?',
    answers: [
      {
        answerText: 'Durch gleichzeitige Gabe von Antihistaminika.',
        correct: null
      },
      {
        answerText: 'Durch gleichzeitige Gabe von Hydrocortison.',
        correct: null
      },
      {
        answerText: 'Durch gleichzeitige Gabe von Ibuprofen.',
        correct: null
      },
      {
        answerText: 'Indem man liposomal verkapseltes Amphothericin B verwendet.',
        correct: null
      },
      {
        answerText: 'Durch gleichzeitige Gabe von Furosemid.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Hirudin?',
    answers: [
      {
        answerText: 'Es hemmt Thrombin ohne Mitwirkung von Antithrombin III.',
        correct: null
      },
      {
        answerText: 'Es inaktiviert den Faktor 10A.',
        correct: null
      },
      {
        answerText: 'Es hemmt die Synthese von Gerinnungsfaktor 2.',
        correct: null
      },
      {
        answerText: 'Es stimuliert die Synthese von Antithrombin III.',
        correct: null
      },
      {
        answerText: 'Es hemmt die Synthese von Antithrombin III.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Mann leidet an einem paroxysmalen Hypertonus. Er hat erhöhte Konzentrationen von Adrenalin und Noradrenalin-Metaboliten im Blut und benötigt eine Substanz mit langer Wirkungsdauer, um den Blutdruck vor der geplanten Operation zu senken. Welche Substanz kommt am ehesten in Frage?',
    answers: [
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Carvedilol',
        correct: null
      },
      {
        answerText: 'Methyl-DOPA',
        correct: null
      },
      {
        answerText: 'Phenoxybenzamin',
        correct: null
      },
      {
        answerText: 'Phentolamin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Auf Ihre Notaufnahme wird ein Mann im Notarztwagen gebracht. Sie erfahren, daß er über Übelkeit, Erbrechen, Sehstörungen und Herzrhythmusstörungen klagt. Welches der folgenden Medikamente hat der Patient wahrscheinlich eingenommen?',
    answers: [
      {
        answerText: 'Dobutamin',
        correct: null
      },
      {
        answerText: 'Dopamin',
        correct: null
      },
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Milrinon',
        correct: null
      },
      {
        answerText: 'Levosimendan',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist am ehesten nicht geeignet eine Digoxin-Vergiftung zu behandeln?',
    answers: [
      {
        answerText: 'Legen eines temporären Schrittmachers bei Bradykardie.',
        correct: null
      },
      {
        answerText: 'Gabe von Atropin bei einer Bradykardie.',
        correct: null
      },
      {
        answerText: 'Gabe von Antikörpern gegen Digoxin.',
        correct: null
      },
      {
        answerText: 'Gabe von Ca2+-Ionen als intravenöse Infusion.',
        correct: null
      },
      {
        answerText: 'Gabe von Kalium-Ionen als intravenöse Infusion.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Digoxin kann jede Art von Arrhythmie hervorrufen.',
        correct: null
      },
      {
        answerText: 'Digoxin verlängert die Dauer des Aktionspotentials.',
        correct: null
      },
      {
        answerText: 'Digoxin bedingt keine kreisenden Erregungen im Herzen.',
        correct: null
      },
      {
        answerText: 'Digoxin senkt im Zuge einer Intoxikation den freien Ca2+-Gehalt der Zelle.',
        correct: null
      },
      {
        answerText: 'Digoxin hat keine Wirkungen am ZNS.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Bei der Herzinsuffizienz sollte kann man auch ß-Blocker mit ISA verschreiben',
        correct: null
      },
      {
        answerText: 'Bei der Behandlung der Herzinsuffizienz sollte man mit der Erhaltungsdosis von Metoprolol beginnen',
        correct: null
      },
      {
        answerText: 'Bei der Behandlung der Herzinsuffizienz sollte man mit der Erhaltungsdosis von Ramipril beginnen',
        correct: null
      },
      {
        answerText: 'Bei der Behandlung der Herzinsuffizienz sollte man eine Dosis von Spironolacton wählen, die die maximale diuretische Wirkung zeigt',
        correct: null
      },
      {
        answerText: 'Losartan verbessert die Prognose der diastolischen Herzinsuffizienz nicht.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Es ist nicht beobachtet worden, daß unter Amiodaron eine Lungenfibrose auftrat.',
        correct: null
      },
      {
        answerText: 'Dronedaron enthält kein Jod.',
        correct: null
      },
      {
        answerText: 'Dronedaron kann auch bei Herzinsuffizienz verschrieben werden.',
        correct: null
      },
      {
        answerText: 'Amiodaron kann keine Arrhythmien hervorrufen.',
        correct: null
      },
      {
        answerText: 'Amiodaron bewirkt eine Hyperthyreose, aber keine Hypothyreose.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Eine gefürchtete Nebenwirkung von Minoxidil ist die Hypotrichose.',
        correct: null
      },
      {
        answerText: 'Dihydralazin wird nur als Monotherapie gegeben.',
        correct: null
      },
      {
        answerText: 'Sildenafil kann mit Nitroglycerin kombiniert werden.',
        correct: null
      },
      {
        answerText: 'Nifedipin sollte, wenn überhaupt, nur in retardierter Form bei Hypertonus angewendet werden.',
        correct: null
      },
      {
        answerText: 'Bei der Gabe von Verapamil sind keine Obstipationen zu befürchten.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Unter Amlodipin beobachtet man keine prätibialen Ödeme.',
        correct: null
      },
      {
        answerText: 'Amlodipin bedingt keine reflektorische Tachykardie.',
        correct: null
      },
      {
        answerText: 'Isradipin wirkt auch auf die elektrischen Eigenschaften des Herzen.',
        correct: null
      },
      {
        answerText: 'Lercanidipin ist ein sogenanntes Klasse IV Antiarrhythmikum.',
        correct: null
      },
      {
        answerText: 'Nifedipin ist nicht lichtempfindlich.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Acetazolamid kann keine Agranulocytose bedingen.',
        correct: null
      },
      {
        answerText: 'Acetazolamid kann zur Therapie eines akuten Glaukomanfalls verwendet werden.',
        correct: null
      },
      {
        answerText: 'Acetazolamid hemmt den Na+/Cl--Cotransporter.',
        correct: null
      },
      {
        answerText: 'Acetazolamid ist zur Therapie der Herzinsuffizienz geeignet.',
        correct: null
      },
      {
        answerText: 'Acetazolamid ist zur Therapie der Höhenkrankheit ungeeignet.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Hydrochlorothiazid ist zur Therapie des nephrogenen Diapetes insipidus ungeeignet.',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid wirkt über Carboanhydrase-Hemmung.',
        correct: null
      },
      {
        answerText: 'Die Wirkung von Hydrochlorothiazid tritt in Minuten ein.',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid bedingt eine Hyperkaliämie.',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid kann eine Hyperurikämie hervorrufen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Man darf Hydrochlorothiazid nicht mit Furosemid kombinieren.',
        correct: null
      },
      {
        answerText: 'Torasemid hat eine kürzere Halbwertszeit als Furosemid.',
        correct: null
      },
      {
        answerText: 'Furosemid ist nicht effektiv genug, um bei Herzinsuffizienz zur Ödemausschwemmung eingesetzt zu werden.',
        correct: null
      },
      {
        answerText: 'Furosemid ist weniger effektiv als Acetazolamid.',
        correct: null
      },
      {
        answerText: 'Furosemid kann das Hörvermögen vermindern.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Adiuretin wird zur Therapie des hypophysären Diabetes insipidus verwendet.',
        correct: null
      },
      {
        answerText: 'Adiuretin hat keine vasokonstriktorischen Wirkungen.',
        correct: null
      },
      {
        answerText: 'Adiuretin wird am einfachsten zur effektiven Therapie peroral gegeben.',
        correct: null
      },
      {
        answerText: 'Adiuretin kann von Proteasen nicht abgebaut werden.',
        correct: null
      },
      {
        answerText: 'Jeder Abfall des osmotischen Druckes führt zum Anstieg der Adiuretin-Konzentration im Plasma.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Metoclopramid kann nicht für eine okulogyre Krise verantwortlich sein.',
        correct: null
      },
      {
        answerText: 'Ricinolsäure wirkt ausschließlich über die Reizung der Dickdarmschleimhaut.',
        correct: null
      },
      {
        answerText: 'Laktulose ist zur Behandlung eines hepatischen Komas geeignet.',
        correct: null
      },
      {
        answerText: 'Sorbit hat keine laxierende Wirkung.',
        correct: null
      },
      {
        answerText: 'Kümmel (Fructus carvi) kann man nicht als Carminativum bezeichnen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Loperamid gelangt gut in das Gehirn, da ein aktiver Transport durch die Blut-Hirn-Schranke existiert.',
        correct: null
      },
      {
        answerText: 'Morphin kann keine operationspflichtigen Obstipationen hervorrufen.',
        correct: null
      },
      {
        answerText: 'Bei Diarrhöen ist die Gabe von Carbo medicinalis stets abzulehnen.',
        correct: null
      },
      {
        answerText: 'Natriumsulfat ist vor einer Darmspiegelung kein sinnvoll einsetzbares Diarrhoikum.',
        correct: null
      },
      {
        answerText: 'Laxantien können Arrhythmien hervorrufen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'In der Tripeltherapie zur Eradikation des Helicobakter verwendet man oft Omeprazol, Clarithromycin und Penicillin G.',
        correct: null
      },
      {
        answerText: 'Omeprazol ist beim Zollinger Ellison Syndrom kontraindiziert.',
        correct: null
      },
      {
        answerText: 'Omeprazol wird im alkalischen Milieu in die Wirkform überführt.',
        correct: null
      },
      {
        answerText: 'Bei parenteraler Gabe von Omeprazol sind Sehstörungen aufgetreten.',
        correct: null
      },
      {
        answerText: 'Da die Halbwertszeit von Omeprazol eine Stunde beträgt dauert seine Wirkung auch nur etwa eine Stunde an.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Pantoprazol hemmt CYP2C19 stärker als Omeprazol.',
        correct: null
      },
      {
        answerText: 'Pantoprazol ist in der Eradikationstherapie des Helicobacter nicht einsetzbar.',
        correct: null
      },
      {
        answerText: 'Omeprazol kann den Plasmaspiegel von Clopidogrel erhöhen.',
        correct: null
      },
      {
        answerText: 'Cimetidin stimuliert CYP2C19.',
        correct: null
      },
      {
        answerText: 'Cimetidin ist effektiver in der Eradikationstherapie des Helicobacter pylori als Lansoprazol.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Misoprostol kann eine Weheninduktion bedingen.',
        correct: null
      },
      {
        answerText: 'Misoprostol ist ein natürliches Prostaglandin.',
        correct: null
      },
      {
        answerText: 'Nizatidin wirkt über H1-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Sucralfat hemmt H2-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Calciumcarbonat wirkt laxierend.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Unter Gabe inhalativer Glukokortikoide sind keine Wachstumsstörungen bei Kindern beobachtet worden.',
        correct: null
      },
      {
        answerText: 'Orale Glukokortikoide können zur Rippenserienfraktur führen.',
        correct: null
      },
      {
        answerText: 'Heiserkeit ist keine typische Nebenwirkung von inhalativen Glukokortikoiden.',
        correct: null
      },
      {
        answerText: 'Budesonid unterliegt keiner raschen hepatischen Elimination.',
        correct: null
      },
      {
        answerText: 'Unter inhalativen Glukokortikoiden kommt es häufig zur Atrophie des Bronchialepithels.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Fenoterol ist zur Tokolyse ungeeignet.',
        correct: null
      },
      {
        answerText: 'Ipratropiumbromid ist bronchodilatorisch aktiv.',
        correct: null
      },
      {
        answerText: 'Theophyllin ist ein Adenosin-Rezeptor-Antagonist.',
        correct: null
      },
      {
        answerText: 'Bradykardie ist eine typische unerwünschte Wirkung von Theophyllin.',
        correct: null
      },
      {
        answerText: '2-Sympathomimetika dürfen nicht peroral verwendet werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Salmeterol ist kürzer wirksam in der Asthmatherapie als Salbutamol.',
        correct: null
      },
      {
        answerText: 'Theophyllin ist zur Therapie des Status asthmaticus ungeeignet.',
        correct: null
      },
      {
        answerText: 'Fenoterol ist ein selektiver β1-Adrenozeptor Agonist.',
        correct: null
      },
      {
        answerText: 'Isoprenalin ist ein selektiver β2-Adrenozeptor Agonist.',
        correct: null
      },
      {
        answerText: 'Terbutalin kann Schlaflosigkeit hervorrufen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Wie würde man am ehesten eine ambulant erworbene Pneumokokken-Pneumonie behandeln?',
    answers: [
      {
        answerText: 'Chloramphenicol',
        correct: null
      },
      {
        answerText: 'Tetracyclin',
        correct: null
      },
      {
        answerText: 'Penicillin G',
        correct: null
      },
      {
        answerText: 'Levofloxacin',
        correct: null
      },
      {
        answerText: 'Metronidazol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zu den Reservemitteln der Tuberkulose-Therapie rechnet man am ehesten?',
    answers: [
      {
        answerText: 'Rifampicin',
        correct: null
      },
      {
        answerText: 'Isoniazid',
        correct: null
      },
      {
        answerText: 'Ethambutol',
        correct: null
      },
      {
        answerText: 'Pyrazinamid',
        correct: null
      },
      {
        answerText: 'Protionamid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Zur Therapie der rheumatoiden Arthritis wird Methotrexat 1g wöchentlich gegeben.',
        correct: null
      },
      {
        answerText: 'Methotrexat sollte wegen seiner vielen Nebenwirkungen erst am Ende der Entwicklung der rheumatoiden Arthritis gegeben werden.',
        correct: null
      },
      {
        answerText: 'Azathioprin bedingt typischerweise Veränderungen des Blutbildes.',
        correct: null
      },
      {
        answerText: 'Ciclosporin kann zu Hypotonie führen.',
        correct: null
      },
      {
        answerText: 'Leflunomid wirkt häufig nephrotoxisch.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Etanercept ist ein B-Zell-Antikörper.',
        correct: null
      },
      {
        answerText: 'Influximab ist ein IL1- Rezeptor-Antagonist.',
        correct: null
      },
      {
        answerText: 'Etanercept kann eine latente Tuberkulose reaktivieren.',
        correct: null
      },
      {
        answerText: 'Anakinra senkt das Infektionsrisiko.',
        correct: null
      },
      {
        answerText: 'Alopezie unter Leflunomid wurde bisher nicht beschrieben.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Glukokortikoide können eine Hypotonie bewirken.',
        correct: null
      },
      {
        answerText: 'Glukokortikoide bedingen eine Hypoglyämie.',
        correct: null
      },
      {
        answerText: 'Eine Dauerbehandlung mit Glukokortikoiden ist unbedenklich.',
        correct: null
      },
      {
        answerText: 'Glukokortikoide können plötzlich abgesetzt werden.',
        correct: null
      },
      {
        answerText: 'Glukokortikoide hemmen die Progredienz der rheumatoiden Arthritis.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche typische unerwünschte Wirkung ist am ehesten richtig zugeordnet?',
    answers: [
      {
        answerText: 'Asparaginase: Hirnvenenthrombose',
        correct: null
      },
      {
        answerText: 'Epirubicin: Nierentoxizität',
        correct: null
      },
      {
        answerText: 'Cisplatin: Laxation',
        correct: null
      },
      {
        answerText: 'Vincristin: Diarrhö',
        correct: null
      },
      {
        answerText: 'Irinotecan: Obstipation',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Thalidomid kann Phokomelien bedingen.',
        correct: null
      },
      {
        answerText: 'Bortezomib ruft typischerweise als unerwünschte Wirkung ein Atemnotsyndrom hervor.',
        correct: null
      },
      {
        answerText: 'Erlotinib steigert die Phosphorylierung von EGFR.',
        correct: null
      },
      {
        answerText: 'Lapatinib aktiviert Tyrosin-Kinasen.',
        correct: null
      },
      {
        answerText: 'Keine Aussage trifft zu.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Glukokortikoide fördern die Proliferation von Tumorzellen.',
        correct: null
      },
      {
        answerText: 'Glukokortikoide haben bei Tumorpatienten keine diabetogenen Wirkungen.',
        correct: null
      },
      {
        answerText: 'Glukokorikoide können bei Tumor-bedingtem Hirnödem eingesetzt werden.',
        correct: null
      },
      {
        answerText: 'Allopurinol hilft nicht bei Tumor-bedingter Hyperurikämie.',
        correct: null
      },
      {
        answerText: 'Lidocain ist symptomatisch unwirksam bei Schmerzen durch Blasenbildung im Gaumenbereich nach Zytostatika-Gabe.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung des Wirkungsmechanismus ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Griseofulvin: Spindelgift',
        correct: null
      },
      {
        answerText: 'Flucytosin: Hemmung der Ergosterin-Synthese',
        correct: null
      },
      {
        answerText: 'Clotrimazol: Demethylasen',
        correct: null
      },
      {
        answerText: 'Amorolfin: Reduktasen',
        correct: null
      },
      {
        answerText: 'Caspofungin: Hemmung der Zellwandsynthese',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung des Angriffsortes für den Wirkungsmechanismus ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Aciclovir: Herpes-Virus-DNA-Polymerase',
        correct: null
      },
      {
        answerText: 'Saqinavir: Neuraminidase',
        correct: null
      },
      {
        answerText: 'Enfuvirtid: HIV-Fusionsprotein',
        correct: null
      },
      {
        answerText: 'Amantadin: Influenza-A-Protonen-Kanal',
        correct: null
      },
      {
        answerText: 'Zidovudin: reverse Transkriptase',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung des Angriffsortes für den Wirkungsmechanismus ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Mycophenolat-mofetil: Inosinmonophosphat-Dehydrogenase',
        correct: null
      },
      {
        answerText: 'Leflunomid: Dihydroorotat-Dehydrogenase',
        correct: null
      },
      {
        answerText: 'Methotrexat: Dihydrofolsäure-Reduktase',
        correct: null
      },
      {
        answerText: 'Azathioprin: Purin-Antimetabolit',
        correct: null
      },
      {
        answerText: 'Cyclophosphamid: Pyrimidin-Antimetabolit',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung zu unerwünschten Wirkungen ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Pentostatin: Knochenmarksdepression',
        correct: null
      },
      {
        answerText: 'Capecitabin: Hand-Fuß-Syndrom',
        correct: null
      },
      {
        answerText: 'Colchicin: Obstipation',
        correct: null
      },
      {
        answerText: 'Paclitaxel: Neutropenie',
        correct: null
      },
      {
        answerText: 'Imatinib: periorbitale Ödeme',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Medikament ist am ehesten zur Therapie von ventrikulären Rhythmusstörungen geeignet?',
    answers: [
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Digitoxin',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Adenosin',
        correct: null
      },
      {
        answerText: 'ATP',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu? Digoxin',
    answers: [
      {
        answerText: 'ist lipophiler als Digitoxin und stärker an Plasmaproteine gebunden.',
        correct: null
      },
      {
        answerText: 'wirkt positiv inotrop über eine Erhöhung der Kalium-Konzentration in den Herzmuskelzellen.',
        correct: null
      },
      {
        answerText: 'verkürzt das Aktionspotential der Herzens (Abnahme der QT-Zeit).',
        correct: null
      },
      {
        answerText: 'vermindert den Einfluß des Vagus auf das Herz.',
        correct: null
      },
      {
        answerText: 'vergrößert das Schlagvolumen durch Erhöhung des Füllungsdruckes.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu? Die lipidsenkende Wirkung von Lovastatin und seiner Analoga beruht hauptsächlich auf',
    answers: [
      {
        answerText: 'der Hemmung der intestinalen Cholesterin-Resorption.',
        correct: null
      },
      {
        answerText: 'der Hemmung der Mevalonsäure-Synthese in der Leber.',
        correct: null
      },
      {
        answerText: 'der Steigerung der Gallensäure-Synthese.',
        correct: null
      },
      {
        answerText: 'der Aktivierung der Lipoproteinlipase.',
        correct: null
      },
      {
        answerText: 'Keine der Aussagen (A) - (D) trifft zu.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Mit welchem der nachfolgend genannten Pharmaka kann bei Vorhofflimmern oderVorhofflattern die atrioventrikuläre Überleitung gehemmt und damit die Kammerfrequenz gesenkt werden?',
    answers: [
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Isoprenalin',
        correct: null
      },
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Hyperkaliämie kann am ehesten auftreten bei langdauernder Verabreichung von',
    answers: [
      {
        answerText: 'Furosemid.',
        correct: null
      },
      {
        answerText: 'Mannit',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid.',
        correct: null
      },
      {
        answerText: 'Chlorthalidon.',
        correct: null
      },
      {
        answerText: 'Eplerenon.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche unerwünschte Wirkung ist für das Antidiabetikum Metformin am ehesten typisch?',
    answers: [
      {
        answerText: 'Gewichtszunahme',
        correct: null
      },
      {
        answerText: 'Meteorismus',
        correct: null
      },
      {
        answerText: 'schwere hypoglykämische Reaktionen',
        correct: null
      },
      {
        answerText: 'Lactatazidose',
        correct: null
      },
      {
        answerText: 'Pankreaskarzinom',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die blutzuckersenkende Wirkung von Glibenclamid kann am ehesten verstärkt werden durch',
    answers: [
      {
        answerText: 'Salmeterol.',
        correct: null
      },
      {
        answerText: 'Propranolol.',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid.',
        correct: null
      },
      {
        answerText: 'Amilorid.',
        correct: null
      },
      {
        answerText: 'Mannit.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der genannten Arzneistoffe kann durch Steigerung der Calcium-Ausscheidung einen erhöhten Calcium-Spiegel im Blut senken?',
    answers: [
      {
        answerText: 'Amilorid',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Allopurinol',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Chlortalidon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Typische Nebenwirkung von Moxifloxacin ist:',
    answers: [
      {
        answerText: 'Dupuytrensche Kontraktur',
        correct: null
      },
      {
        answerText: 'Agranulozytose',
        correct: null
      },
      {
        answerText: 'Verlängerung des QT-Intervalles',
        correct: null
      },
      {
        answerText: 'Bradykardie',
        correct: null
      },
      {
        answerText: 'Störung des Rot-Grün-Sehens',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Metronidazol?',
    answers: [
      {
        answerText: 'Es hemmt die bakterielle Proteinsynthese.',
        correct: null
      },
      {
        answerText: 'Schädigung der DNA.',
        correct: null
      },
      {
        answerText: 'Hemmung der Gyrase.',
        correct: null
      },
      {
        answerText: 'Hemmung der Hydrofolsäurereduktase.',
        correct: null
      },
      {
        answerText: 'Schädigung der bakteriellen Zellwand.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Famicyclovir?',
    answers: [
      {
        answerText: 'Es hemmt die Absorption des Virus auf die zu infizierende Zelle.',
        correct: null
      },
      {
        answerText: 'Es hemmt das Un-Coating des Virus.',
        correct: null
      },
      {
        answerText: 'Es hemmt eine Virusprotease.',
        correct: null
      },
      {
        answerText: 'Es hemmt eine Virusneuraminidase.',
        correct: null
      },
      {
        answerText: 'Es hemmt eine Thymidinkinase.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Ofloxacin trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Es ist ein Makrolid-Antibiotikum.',
        correct: null
      },
      {
        answerText: 'Es aktiviert die Gyrase.',
        correct: null
      },
      {
        answerText: 'Es kann in der Schwangerschaft gegeben werden.',
        correct: null
      },
      {
        answerText: 'Es ist das Enantiomer einer chiralen Substanz.',
        correct: null
      },
      {
        answerText: 'Es sollte Kindern nicht verschrieben werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Gefahren sind mit einer antiarrhythmischen Therapie mit Lidocain am ehesten verbunden?',
    answers: [
      {
        answerText: 'negative inotrope Wirkung',
        correct: null
      },
      {
        answerText: 'Aktivierung von Kalium-Kanälen',
        correct: null
      },
      {
        answerText: 'Lungenfibrose',
        correct: null
      },
      {
        answerText: 'vasokonstriktorische Wirkung',
        correct: null
      },
      {
        answerText: 'Hyperthyreose',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Das Kurznarkotikum Ketamin',
    answers: [
      {
        answerText: 'wirkt nicht analgetisch.',
        correct: null
      },
      {
        answerText: 'verursacht eine Amnesie.',
        correct: null
      },
      {
        answerText: 'wirkt muskelrelaxierend.',
        correct: null
      },
      {
        answerText: 'senkt den Blutdruck.',
        correct: null
      },
      {
        answerText: 'wird nicht mißbräuchlich verwendet',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 65-jährige Frau kommt in Ihre Ambulanz und beklagt sich über Teerstühle. Sie fühlt sich in letzter Zeit schwach. Sie untersuchen den Stuhl auf Blut und der Test ist stark positiv. Der Hämoglobingehalt ist 8 g/dl, wobei der Normalbereich in Ihrem Labor zwischen 12 g/dl und 14 g/dl liegt. Anamnestisch finden Sie heraus, daß die Frau seit 15 Jahren an einer rheumatoiden Arthritis leidet. Ihr Rheumatologe hat sie mit gutem Erfolg mit Acetylsalicylsäure behandelt. Ihre Diagnose ist somit: gastrointestinale Blutungen aufgrund einer Behandlung mit nicht-steroidalen Antiphlogistika. Sie wollen die Patientin auf ein anderes Medikament zur Behandlung der rheumatoiden Arthritis umstellen, das mit einem geringeren Blutungsrisiko verbunden ist. Welches Medikament ist am ehesten geeignet?',
    answers: [
      {
        answerText: 'Diclofenac',
        correct: null
      },
      {
        answerText: 'Ibuprofen',
        correct: null
      },
      {
        answerText: 'Ketoprofen',
        correct: null
      },
      {
        answerText: 'Naproxen',
        correct: null
      },
      {
        answerText: 'Celecoxib',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches dieser Antihypertensiva kann die Plasma-Calcium-Ionen Konzentration am ehesten erhöhen?',
    answers: [
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Ramipril',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Prazosin',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung zu Nebenwirkung(en) ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Rituximab: progressive multifokale Leukoenzephalopathie.',
        correct: null
      },
      {
        answerText: 'Trastuzumab: Herzinsuffizienz.',
        correct: null
      },
      {
        answerText: 'Interferon alpha: anorektische Veränderungen.',
        correct: null
      },
      {
        answerText: 'Alemtuzumab: Infektanfälligkeit v.a. gegenüber Viren.',
        correct: null
      },
      {
        answerText: 'Interleukin-2: Hypertonus.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 47-jähriger Mann kommt mit einem Myokardinfarkt zur stationären Aufnahme. Es wird Lysetherapie eingeleitet. Am 5. Tag fällt eine schwere Thrombozytopenie auf (unter 50 % des Ausgangswerts). Welches der unten genannten bei diesem Patienten eingesetzten Arzneimittel ist am ehesten hierfür verantwortlich?',
    answers: [
      {
        answerText: 'Morphin',
        correct: null
      },
      {
        answerText: 'Streptokinase',
        correct: null
      },
      {
        answerText: 'Heparin',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure',
        correct: null
      },
      {
        answerText: 'Glyceroltrinitrat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu? Vincristin ist ein',
    answers: [
      {
        answerText: 'Folsäure-Antagonist',
        correct: null
      },
      {
        answerText: 'Antibiotikum',
        correct: null
      },
      {
        answerText: 'alkylierender Stoff',
        correct: null
      },
      {
        answerText: 'Alkaloid',
        correct: null
      },
      {
        answerText: 'Purin-Antagonist',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten auf Cyclophosphamid zu?',
    answers: [
      {
        answerText: 'Hat keine unerwünschten Wirkungen an der Harnblase.',
        correct: null
      },
      {
        answerText: 'Wirkt antiemetisch.',
        correct: null
      },
      {
        answerText: 'Sein Metabolit Acrolein ist inaktiv.',
        correct: null
      },
      {
        answerText: 'Sollte mit 2-Mercapto-ethansulfonsäsure kombiniert werden.',
        correct: null
      },
      {
        answerText: 'Schädigt nicht das Knochenmark.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Angaben zu dem Arzneistoff Spironolacton trifft am wenigsten zu?',
    answers: [
      {
        answerText: 'ausgeprägte Biotransformation im Organismus',
        correct: null
      },
      {
        answerText: 'Wirkung über Antagonismus am Aldosteron-Rezeptor',
        correct: null
      },
      {
        answerText: 'geeignet zur Therapie des akuten Lungenödems',
        correct: null
      },
      {
        answerText: 'geeignet zur Therapie des Aszites bei Leberzirrhose',
        correct: null
      },
      {
        answerText: 'Hyperkaliämie als mögliche unerwünschte Wirkung',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Arzneimittel ist zur Behandlung eines akuten kardialen Lungenödems am ehesten geeignet?',
    answers: [
      {
        answerText: 'Prazosin',
        correct: null
      },
      {
        answerText: 'Acetazolamid',
        correct: null
      },
      {
        answerText: 'Glyceroltrinitrat',
        correct: null
      },
      {
        answerText: 'Mannit',
        correct: null
      },
      {
        answerText: 'Spironolacton',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Arzneimittel ist zur Langzeittherapie der chronischen Herzinsuffizienz (NYHA-Stadium III) am wenigsten geeignet?',
    answers: [
      {
        answerText: 'Carvedilol',
        correct: null
      },
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Milrinon',
        correct: null
      },
      {
        answerText: 'Captopril',
        correct: null
      },
      {
        answerText: 'Spironolacton',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der nachfolgend genannten Pharmaka können bei linksventrikulärem Pumpversagen das Herzschlagvolumen durch positiv inotrope Wirkung steigern?1 Dopamin2 Dobutamin3 Glyceroltrinitrat4 Nitroprussidnatrium5 Furosemid',
    answers: [
      {
        answerText: 'nur 1 und 2 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 5 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2, 3 und 5 sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Um die Schädigung der Niere durch aktive Metabolite von Cyclophosphamid zu vermindern, sollte man bei Cyclophosphamid-Gabe gleichzeitig neben reichlicher Flüssigkeitszufuhr anwenden:',
    answers: [
      {
        answerText: 'Ascorbinsäure',
        correct: null
      },
      {
        answerText: 'Folsäure',
        correct: null
      },
      {
        answerText: 'Mesna (Mercaptoethansulfonat-Natriumsalz)',
        correct: null
      },
      {
        answerText: 'Pyridoxin (Vitamin B6)',
        correct: null
      },
      {
        answerText: 'EDTA (Ethylendiamintetraessigsäure)',
        correct: null
      }
    ]
  },
  {
    questionText: 'Als Folge einer erheblichen Überdosierung von herzwirksamen Glykosiden sind zu erwarten:1 Sinusbradykardie2 AV-Block3 ventrikuläre Tachykardie4 Vorhofflimmern',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: '1-4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein komatöser Patient mit ausgeprägter Atemdepression, Hypotension, Erbrechen und maximal verengten Pupillen ohne Lichtreaktion wird stationär aufgenommen. Er hat in suizidaler Absicht Tabletten unbekannter Zusammensetzung eingenommen. Die Symptomatik ist am wahrscheinlichsten verursacht durch',
    answers: [
      {
        answerText: 'Antidepressiva',
        correct: null
      },
      {
        answerText: 'Benzodiazepine',
        correct: null
      },
      {
        answerText: 'Opioide',
        correct: null
      },
      {
        answerText: 'Neuroleptika',
        correct: null
      },
      {
        answerText: 'Barbiturate',
        correct: null
      }
    ]
  },
  {
    questionText: 'In der Epilepsie-Behandlung findet oft Phenytoin Anwendung. Als unerwünschte Wirkung tritt hierbei am wenigsten wahrscheinlich auf:',
    answers: [
      {
        answerText: 'Zahnfleischhyperplasie',
        correct: null
      },
      {
        answerText: 'Nystagmus',
        correct: null
      },
      {
        answerText: 'spastische Gangstörung',
        correct: null
      },
      {
        answerText: 'Hypertrichose',
        correct: null
      },
      {
        answerText: 'zerebellare Ataxie',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Arzneistoffe ist nicht geeignet für die Behandlung eines Status epilepticus?',
    answers: [
      {
        answerText: 'Diazepam',
        correct: null
      },
      {
        answerText: 'Cloazepam',
        correct: null
      },
      {
        answerText: 'Phenobarbital',
        correct: null
      },
      {
        answerText: 'Promethazin',
        correct: null
      },
      {
        answerText: 'Phenytoin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche drei der genannten Arzneimittel werden zur Zeit in Deutschland in der Therapie der Parkinsonerkrankung eingesetzt?1 α-Methyldopa2 Levodopa3 Carbidopa4 Dopamin5 Bromocriptin',
    answers: [
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2, 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2, 3 und 5 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 3, 4 und 5 sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu? Die Antiparkinson-Wirkung von Levodopa',
    answers: [
      {
        answerText: 'wird durch proteinreiche Mahlzeiten verstärkt.',
        correct: null
      },
      {
        answerText: 'wird durch Kombination mit Selegilin verstärkt.',
        correct: null
      },
      {
        answerText: 'lässt im Laufe mehrjähriger Behandlung nach.',
        correct: null
      },
      {
        answerText: 'ist nach längerer Behandlungsdauer bei gleicher Tagesdosis meist günstiger, wenn 6 statt 3 Einzeldosen eingenommen werden.',
        correct: null
      },
      {
        answerText: 'kann durch die Wirkung von Bromocriptin ergänzt werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Wegen der Gefahr einer besonders verstärkten Blutdrucksenkung ist Sildenafil am ehesten kontraindiziert während einer Therapie mit:',
    answers: [
      {
        answerText: 'Doxazosin',
        correct: null
      },
      {
        answerText: 'Enalapril',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Isosorbid-Dinitrat',
        correct: null
      },
      {
        answerText: 'Yohimbin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die Prophylaxe eines Angina-pectoris-Anfalls durch β-Rezeptoren-Blocker beruht am ehestenauf:1 Vermeidung des Anstiegs der Herzfrequenz2 Vermeidung von Blutdruckanstiegen3 Verminderung der maximalen intraventrikulären Druckanstiegsgeschwindigkeit4 Erweiterung der Koronararterien',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 2 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: '1 - 4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Neuroleptika vom Typ der Butyrophenone sind am ehesten nicht geeignet zur',
    answers: [
      {
        answerText: 'Langzeitbehandlung der Schizophrenie',
        correct: null
      },
      {
        answerText: 'Behandlung von Erbrechen',
        correct: null
      },
      {
        answerText: 'Neuroleptanalgesie',
        correct: null
      },
      {
        answerText: 'Behandlung des M. Parkinson',
        correct: null
      },
      {
        answerText: 'Behandlung psychomotorischer Erregungszustände (im Alter)',
        correct: null
      }
    ]
  },
  {
    questionText: 'Als unerwünschte Wirkung bei Therapie mit Haloperidol ist am wenigsten wahrscheinlich zu erwarten:',
    answers: [
      {
        answerText: 'bei Frauen: Galaktorrhö',
        correct: null
      },
      {
        answerText: 'Photodermatose',
        correct: null
      },
      {
        answerText: 'Leukopenie',
        correct: null
      },
      {
        answerText: 'Gewichtszunahme',
        correct: null
      },
      {
        answerText: 'aplastische Anämie',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der nachfolgend genannten Arzneistoffe ist bei Vorliegen einer Psychose zur Behandlung von Neuroelptika-induzierten Frühdyskinesien und Parkinson-ähnlichen Symptomen (Parkinsonoid) am besten geeignet?',
    answers: [
      {
        answerText: 'Phenytoin',
        correct: null
      },
      {
        answerText: 'Biperiden',
        correct: null
      },
      {
        answerText: 'Bromocriptin',
        correct: null
      },
      {
        answerText: 'Selegilin',
        correct: null
      },
      {
        answerText: 'Levodopa',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu?Trizyklische Antidepressiva',
    answers: [
      {
        answerText: 'können an α1-Adrenozeptoren als Agonisten wirken.',
        correct: null
      },
      {
        answerText: 'erreichen ihr Wirkungsmaximum bei depressiven Patienten häufig erst nach zwei oder mehr Wochen.',
        correct: null
      },
      {
        answerText: 'können die Krampfbereitschaft erhöhen.',
        correct: null
      },
      {
        answerText: 'können anticholinerge unerwünschte Wirkungen hervorrufen.',
        correct: null
      },
      {
        answerText: 'können unerwünschte orthostatische Hypotonie hervorrufen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur Phasenprophylaxe im Rahmen einer bipolaren affektiven Psychose ist von den genannten Arzneistoffen am ehesten geeignet:',
    answers: [
      {
        answerText: 'Phenytoin',
        correct: null
      },
      {
        answerText: 'Carbamazepin',
        correct: null
      },
      {
        answerText: 'Primidon',
        correct: null
      },
      {
        answerText: 'Ethosuximid',
        correct: null
      },
      {
        answerText: 'Phenobarbital',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Fluoxetin',
    answers: [
      {
        answerText: 'wird unmetabolisiert rasch und vollständig über die Nieren ausgeschieden.',
        correct: null
      },
      {
        answerText: 'gehört zur Gruppe der psychomotorisch dämpfenden Antidepressiva.',
        correct: null
      },
      {
        answerText: 'hat weniger unerwünschte anticholinerge Wirkungen als trizyklische Antidepressiva.',
        correct: null
      },
      {
        answerText: 'wirkt stark antiemetisch.',
        correct: null
      },
      {
        answerText: 'muss bei schweren Depressionen zusammen mit Moclobemid verabreicht werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Gegebenheiten vergrößert am ehesten das Risiko Digitalis-induzierter Arrhythmien?',
    answers: [
      {
        answerText: 'verminderte Serum-Kalzium-Konzentration',
        correct: null
      },
      {
        answerText: 'verminderte Herzfrequenz durch gleichzeitige Gabe von Propranolol',
        correct: null
      },
      {
        answerText: 'Anstieg der Serum-Natrium-Konzentration',
        correct: null
      },
      {
        answerText: 'Abfall der Serum-Kalium-Konzentration',
        correct: null
      },
      {
        answerText: 'Abfall der Serum-Angiotensin II-Konzentration',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen trifft am ehesten nicht zu?',
    answers: [
      {
        answerText: 'Lidocain muss parenteral gegeben werden.',
        correct: null
      },
      {
        answerText: 'Lidocain wird hauptsächlich zur Therapie von supraventrikulären Arrhythmien verwendet.',
        correct: null
      },
      {
        answerText: 'Procainamid kann zu einem Lupus erythematodes führen.',
        correct: null
      },
      {
        answerText: 'Chinidin ist peroral wirksam.',
        correct: null
      },
      {
        answerText: 'Alle hier genannten antiarrhythmischen Substanzen können einen negativ inotropen Effekt bewirken.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die Schulleistungen eines 9-jährigen Jungen sind in den letzten Monaten gefallen, weil er nur noch wenig Aufmerksamkeit zeigt und zu Tagträumen neigt. Das Kind von durchschnittlicher Intelligenz starrt manchmal geradeaus für 10 -15 Sekunden. Dieses passiert mehrmals pro Stunde, dem Kind fallen diese Veränderungen nicht auf. Ein EEG zeigt frontaldominant generalisierte 3 Hz „spike und wave Komplexe“. Welches der aufgeführten Substanzen ist das Mittel der Wahl zur Therapie der diagnostizierten Erkrankung?',
    answers: [
      {
        answerText: 'Baclofen',
        correct: null
      },
      {
        answerText: 'Dantrolen',
        correct: null
      },
      {
        answerText: 'Ethosuximid',
        correct: null
      },
      {
        answerText: 'Gabapentin',
        correct: null
      },
      {
        answerText: 'Phenytoin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der genannten Substanzen kann bei Vorhofflattern aufgrund einer anti-cholinergen Wirkung eine paradoxe Zunahme der Ventrikelfrequenz auslösen?',
    answers: [
      {
        answerText: 'Mexiletin',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Atenolol',
        correct: null
      },
      {
        answerText: 'Propafenon',
        correct: null
      },
      {
        answerText: 'Chinidin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einem Patienten sind Unterschenkelödeme aufgetreten.Durch welchen der von ihm eingenommenen Arzneistoffe sind diese wahrscheinlich hervorgerufen worden?',
    answers: [
      {
        answerText: 'Magnesiumhydroxid-Aluminium',
        correct: null
      },
      {
        answerText: 'Bezafibrat',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      },
      {
        answerText: 'Oxazepam',
        correct: null
      },
      {
        answerText: 'Keines der genannten Pharmaka ruft Ödeme hervor.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 50-jährige Patientin stellt sich bei Ihnen vor mit einer langen bekannten Anamnese der Einnahme von Psychopharmaka. Sie ist mehrmals in den letzten Jahren in einem psychiatrischen Krankenhaus stationär behandelt worden. Sie beobachten folgende Veränderungen bei Ihrer Patientin: stereotype orolinguale mastikatorische Bewegungen mit unwillentlichen Lippenbewegungen und Propulsionen der Zunge. Was ist die wahrscheinlichste Erklärung für diese Symptome?',
    answers: [
      {
        answerText: 'Entzugserscheinungen aufgrund von akutem Absetzen der Lithiumerhaltungstherapie',
        correct: null
      },
      {
        answerText: 'neuroleptisches malignes Syndrom',
        correct: null
      },
      {
        answerText: 'Alkoholentzugserscheinungen',
        correct: null
      },
      {
        answerText: 'Spätdyskinesie',
        correct: null
      },
      {
        answerText: 'Tourette Syndrom',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der aufgeführten Substanzen ist für die orale Behandlung des Morbus Parkinson am ehesten nicht geeignet?',
    answers: [
      {
        answerText: 'Bromocriptin',
        correct: null
      },
      {
        answerText: 'Dopamin',
        correct: null
      },
      {
        answerText: 'Levodopa',
        correct: null
      },
      {
        answerText: 'Ropinirol',
        correct: null
      },
      {
        answerText: 'Selegilin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen über den Metabolismus von neuropharmakologischen Wirkstoffen ist richtig?',
    answers: [
      {
        answerText: 'Die analgetischen Wirkungen von Codein beruhen auf seiner Umwandlung zu Methadon.',
        correct: null
      },
      {
        answerText: 'Acetylcholinesterasemangel kann zu verlängerter Muskelrelaxation mit Succinylcholin führen.',
        correct: null
      },
      {
        answerText: 'Bei Patienten mit Morbus Parkinson, die Selegilin verwenden, kann es bei gleichzeitiger Einnahme von Käse und Wein zu einer hypertensiven Krise kommen.',
        correct: null
      },
      {
        answerText: 'Phase II Metabolismus von Morphin führt zu der Bildung eines aktiven Metaboliten.',
        correct: null
      },
      {
        answerText: 'Selektive Serotoninwiederaufnahmehemmer bilden grundsätzlich aktive Metaboliten mit langen Eliminationshalbwertszeiten.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Arzneimittel besitzt aufgrund einer quarternären Stickstoffstruktur eine schlechte enterale Bioverfügbarkeit von unter 10%?',
    answers: [
      {
        answerText: 'Biperiden',
        correct: null
      },
      {
        answerText: 'Ipratropium',
        correct: null
      },
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Scopolamin',
        correct: null
      },
      {
        answerText: 'Promethazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist bei anaphylaktischem Schock zur raschen Notfalltherapie der Arzneistoff der 1. Wahl?',
    answers: [
      {
        answerText: 'Adrenalin',
        correct: null
      },
      {
        answerText: 'Theophyllin',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'hochdosiertes Prednisolon',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Voriconazol?',
    answers: [
      {
        answerText: 'Einlagerung mit Ergosterin in die Wand und damit Porenbildung',
        correct: null
      },
      {
        answerText: 'Hemmung des Cytochrom P450-Systems',
        correct: null
      },
      {
        answerText: 'Hemmung der Zellwandsynthese',
        correct: null
      },
      {
        answerText: 'Spindelgift',
        correct: null
      },
      {
        answerText: 'Antimetabolit',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ihr Patient, Herr Erich Meyer, wird zur Zeit aufgrund von Herzinsuffizienz mit Digoxin behandelt. Sie entscheiden sich, ihm zusätzlich Losartan zu verschreiben. Welche potentiell lebensbedrohliche Veränderung im Elektrolythaushalt, durch das zusätzlich verordnete Losartan bedingt, müssen Sie vermeiden? Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Hypermagnesiämie',
        correct: null
      },
      {
        answerText: 'Hypocalciämie',
        correct: null
      },
      {
        answerText: 'Hypoglykämie',
        correct: null
      },
      {
        answerText: 'Hyperglykämie',
        correct: null
      },
      {
        answerText: 'Hyperkaliämie',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussagen über Propylthiouracil treffen nicht zu?',
    answers: [
      {
        answerText: 'Es hemmt die Freisetzung gespeicherter Schilddrüsenhormone.',
        correct: null
      },
      {
        answerText: 'Seine Wirkung tritt in wenigen Stunden nach Einnahme auf.',
        correct: null
      },
      {
        answerText: 'Es hemmt eine Peroxidase in der Schilddrüse.',
        correct: null
      },
      {
        answerText: 'Es hemmt hemmt die Oxidation von Jodid.',
        correct: null
      },
      {
        answerText: 'Es hemmt den Einbau von Jodid in aromatische Ringe.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 63-jähriger Mann beklagt sich bei Ihnen über Übelkeit, Erbrechen und Sehstörungen mit grün-gelber Verfärbung des Sehens, wenn er auf lichtstarke Objekte sieht. Sie hatten ihm eine Standarddosis von Digoxin verschrieben. Wie können Sie sich am ehesten diese unerwünschten Wirkungen des Digoxins erklären?',
    answers: [
      {
        answerText: 'Die Leberfunktion hat sich verschlechtert.',
        correct: null
      },
      {
        answerText: 'Er zeigt Zeichen einer typischen Digoxin-Allergie.',
        correct: null
      },
      {
        answerText: 'Seine Nierenfunktion hat sich verschlechtert.',
        correct: null
      },
      {
        answerText: 'Man hat bei ihm Amiodaron abgesetzt.',
        correct: null
      },
      {
        answerText: 'Man hat bei ihm Dabigatrin abgesetzt.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Doxycylin trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Es kann mit Antazida kombiniert werden.',
        correct: null
      },
      {
        answerText: 'Es kann in der Schwangerschaft gegeben werden.',
        correct: null
      },
      {
        answerText: 'Es kann Kindern gegeben werden.',
        correct: null
      },
      {
        answerText: 'Es kann bei Infektionen mit Ricksettien gegeben werden.',
        correct: null
      },
      {
        answerText: 'Es entwickeln sich keine Resistenzen gegen Doxycylin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 63-jährige Frau kommt zu Ihnen. Es ist vor kurzem bei ihr eine Onychomykose diagnostiziert worden. Sie wollen die Patientin mit Itraconazol behandeln. Was ist der Wirkungsmechanismus von Itraconazol?',
    answers: [
      {
        answerText: 'Hemmung der Thymidilatsynthase',
        correct: null
      },
      {
        answerText: 'Hemmung der Ergosterinsynthese',
        correct: null
      },
      {
        answerText: 'Hemmung derr Squalenepoxidase',
        correct: null
      },
      {
        answerText: 'Aktivierung einer Transpepidase',
        correct: null
      },
      {
        answerText: 'Hemmung einer 7-α-Hydroxylase',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am wenigsten für Apixaban zu?',
    answers: [
      {
        answerText: 'Es wird unmetabolisiert renal ausgeschieden.',
        correct: null
      },
      {
        answerText: 'Es hemmt Faktor Xa.',
        correct: null
      },
      {
        answerText: 'Es kann zur Prophylaxe von Schlaganfällen bei Vorhofflimmern verwendet werden.',
        correct: null
      },
      {
        answerText: 'Ein Antidot ist nicht verfügbar.',
        correct: null
      },
      {
        answerText: 'Seine Bioverfügbarkeit ist etwa 50 %.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Nennen Sie wichtigste unerwünschte Wirkungen von Fenoterol am Herzen.',
    answers: [
      {
        answerText: 'Tachykardie',
        correct: null
      },
      {
        answerText: 'Koronardilatation',
        correct: null
      },
      {
        answerText: 'Koronarkonstriktion',
        correct: null
      },
      {
        answerText: 'AV Block dritten Grades',
        correct: null
      },
      {
        answerText: 'AV Block ersten Grades',
        correct: null
      }
    ]
  },
  {
    questionText: 'Nennen Sie eine typische unerwünschte Wirkung von Isoniazid.',
    answers: [
      {
        answerText: 'Hepatitis',
        correct: null
      },
      {
        answerText: 'Einschränkung des Visus und Einschränkung der Farbdiskrimination',
        correct: null
      },
      {
        answerText: 'Hyperurikämie',
        correct: null
      },
      {
        answerText: 'Ototoxizität',
        correct: null
      },
      {
        answerText: 'Induktion von Cytochrom P450-Enzymen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 53-jähriger Mann wird bei Ihnen aufgenommen mit Blutbildstörungen. Sechs Monate zuvor hatten Sie bei dem Patienten eine milde rheumatoide Arthritis festgestellt und eine Kombinationstherapie mit „Disease-Modifiying Drugs“ durchgeführt. Welche der folgenden Substanzen ist wohl am ehesten für die unterwünschten Wirkungen bei dem Patienten verantwortlich?',
    answers: [
      {
        answerText: 'Hydroxychloroquin',
        correct: null
      },
      {
        answerText: 'Etanerzept',
        correct: null
      },
      {
        answerText: 'Methotrexat',
        correct: null
      },
      {
        answerText: 'Infliximab',
        correct: null
      },
      {
        answerText: 'Celecoxib',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente senkt am ehesten die Mortalität von Typ II Diabetikern?',
    answers: [
      {
        answerText: 'Acarbose',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Metformin',
        correct: null
      },
      {
        answerText: 'Repaglinid',
        correct: null
      },
      {
        answerText: 'Exenatid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?Zur Anfallsprophylaxe bei Prinzmetal-Angina ist am wenigsten geeignet:',
    answers: [
      {
        answerText: 'Bisoprolol',
        correct: null
      },
      {
        answerText: 'Isosorbidmononitrat',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Amlodipin',
        correct: null
      },
      {
        answerText: 'Pentaerithrityl-tetranitrat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?Nitroglyzerin senkt den Sauerstoffbedarf des Herzens am ehesten',
    answers: [
      {
        answerText: 'durch seinen negativ chronotropen Effekt.',
        correct: null
      },
      {
        answerText: 'durch seinen negativ inotropen Effekt.',
        correct: null
      },
      {
        answerText: 'durch Erhöhung der peripheren Durchblutung.',
        correct: null
      },
      {
        answerText: 'durch Dilatation der Koronorarterien.',
        correct: null
      },
      {
        answerText: 'durch Senkung der Vorlast des Herzens.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 54-jähriger Mann soll einer elektiven Koloskopie unterzogen werden, die voraussichtlich 20 min dauern wird. Welches der folgenden Medikamente wird am ehesten und für den richtigen Zeitraum die Anästhesie und die hier erwünschte anterograde Amnesie hervorrufen?',
    answers: [
      {
        answerText: 'Flunitrazepam',
        correct: null
      },
      {
        answerText: 'Fluoxetin',
        correct: null
      },
      {
        answerText: 'Imipramin',
        correct: null
      },
      {
        answerText: 'Midazolam',
        correct: null
      },
      {
        answerText: 'Diazepam',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?Phenytoin bedingt als unerwünschte Wirkung typischerweise:',
    answers: [
      {
        answerText: 'Spontanfrakturen',
        correct: null
      },
      {
        answerText: 'eine Diplopie',
        correct: null
      },
      {
        answerText: 'eine Gewichtsabnahme',
        correct: null
      },
      {
        answerText: 'Gesichtsfelddefekte',
        correct: null
      },
      {
        answerText: 'Gingivahyperplasie',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Antiepileptika sollte am ehesten nicht in der Schwangerschaft oder bei Kinderwunsch verschrieben werden?',
    answers: [
      {
        answerText: 'Clonazepam',
        correct: null
      },
      {
        answerText: 'Ethosuximid',
        correct: null
      },
      {
        answerText: 'Gabapentin',
        correct: null
      },
      {
        answerText: 'Valproinsäure',
        correct: null
      },
      {
        answerText: 'Lamotrigin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Herr Schmidt ist 28 Jahre alt und somatisch gesund. Er wird von Ihnen seit einem Jahr mit Lithiumsalzen behandelt, wegen einer manisch-depressiven Erkrankung. Er kommt jetzt zu Ihnen und beklagt sich über zunehmende Müdigkeit und Schwäche, Gewichtszunahme und Kälte-Überempfindlichkeit. Welcher der folgenden Labortests ist am ehesten geeignet, zur richtigen Diagnose zu führen?',
    answers: [
      {
        answerText: 'TSH Bestimmung',
        correct: null
      },
      {
        answerText: 'GOT Messung',
        correct: null
      },
      {
        answerText: 'Glukose-Toleranztest',
        correct: null
      },
      {
        answerText: 'Hämatokrit-Messung',
        correct: null
      },
      {
        answerText: 'Serum-Prolaktin-Bestimmung',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche unerwünschte Wirkung muß man bei Patienten, die über längere Zeit mit Haloperidol behandelt werden, am ehesten befürchten?',
    answers: [
      {
        answerText: 'Epilepsie',
        correct: null
      },
      {
        answerText: 'Nausea mit einer Kinetose verbunden',
        correct: null
      },
      {
        answerText: 'Das Entstehen einer Manie.',
        correct: null
      },
      {
        answerText: 'Tourettes Syndrom',
        correct: null
      },
      {
        answerText: 'Eine Medikamenten-bedingte Psychose.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Selegilin ist als MAO B Hemmer am ehesten geeignet zur Therapie von',
    answers: [
      {
        answerText: 'Schizophrenie.',
        correct: null
      },
      {
        answerText: 'Morbus Parkinson.',
        correct: null
      },
      {
        answerText: 'affektiven Psychosen.',
        correct: null
      },
      {
        answerText: 'Angststörungen.',
        correct: null
      },
      {
        answerText: 'Hypertonus.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Kreislaufeffekte hat L-Dopa am ehesten?',
    answers: [
      {
        answerText: 'Hypotonie',
        correct: null
      },
      {
        answerText: 'AV Block ersten Grades',
        correct: null
      },
      {
        answerText: 'AV Block dritten Grades',
        correct: null
      },
      {
        answerText: 'Torsade de pointes',
        correct: null
      },
      {
        answerText: 'Bradykardien',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Dabigatran?',
    answers: [
      {
        answerText: 'Hemmung von Faktor Xa',
        correct: null
      },
      {
        answerText: 'Hemmung von Faktor IX',
        correct: null
      },
      {
        answerText: 'Hemmung von Faktor VII',
        correct: null
      },
      {
        answerText: 'Hemmung von Faktor XI',
        correct: null
      },
      {
        answerText: 'Hemmung von Thrombin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 6-jähriges Kind kommt bei Ihnen zur Aufnahme. Es klagt über Schmerzen beim Wasserlassen. Sie entnehmen eine Urinprobe. Diese sieht getrübt und blutig aus. Das Kind war diagnostiziert worden mit einem Neuroblastom und fünf Tage zuvor ist die Chemotherapie begonnen worden. Welche der folgenden Substanzen hat das Kind wahrscheinlich bekommen?',
    answers: [
      {
        answerText: 'Topotecan',
        correct: null
      },
      {
        answerText: 'Cisplatin',
        correct: null
      },
      {
        answerText: 'Doxirubicin',
        correct: null
      },
      {
        answerText: 'Ifosphamid',
        correct: null
      },
      {
        answerText: 'Vincristin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 6-jähriger Junge leidet an einer akuten lymphatischen Leukämie. Sie beginnen eineKombinations-Chemotherapie. Eine der Substanzen in diesem Schema ist ein Anthracyclin-Derivat und hat als Dosis begrenzende Nebenwirkung eine Herzinsuffizienz. Auf welche der folgenden Substanzen trifft diese Aussage zu?',
    answers: [
      {
        answerText: 'Methotrexat',
        correct: null
      },
      {
        answerText: 'Fluouracil',
        correct: null
      },
      {
        answerText: 'Cytarabin',
        correct: null
      },
      {
        answerText: 'Doxorubicin',
        correct: null
      },
      {
        answerText: 'Mercaptopurin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ist bei einem Pateinten mit Glaukom am ehesten kontraindiziert?',
    answers: [
      {
        answerText: 'Pencillin G',
        correct: null
      },
      {
        answerText: 'Fluoxetin',
        correct: null
      },
      {
        answerText: 'Phenobarbital',
        correct: null
      },
      {
        answerText: 'Clonazepam',
        correct: null
      },
      {
        answerText: 'Imipramin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche unerwünschten Wirkungen kann Fluoxetin am ehesten hervorrufen?',
    answers: [
      {
        answerText: 'Angina pectoris-Anfall',
        correct: null
      },
      {
        answerText: 'Ileus',
        correct: null
      },
      {
        answerText: 'Durch Stimulation von M-Cholinorezeptoren bedingte Bradykardie.',
        correct: null
      },
      {
        answerText: 'Übelkeit',
        correct: null
      },
      {
        answerText: 'Durch Stimulation von N-Cholinorezeptoren bedingter Ileus.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Milrinon?',
    answers: [
      {
        answerText: 'Hemmung der Phosphodiesterase 3',
        correct: null
      },
      {
        answerText: 'Hemmung der Phosphodiesterase 5',
        correct: null
      },
      {
        answerText: 'Hemmung der Natrium-Kalium-ATPase',
        correct: null
      },
      {
        answerText: 'Senkung der intrazellulären Calciumkonzentration',
        correct: null
      },
      {
        answerText: 'Erhöhung der Mangan-Konzentration',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Antihypertensiva senkt am ehesten die Renin-Freisetzung?',
    answers: [
      {
        answerText: 'Prazosin',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Ramipril',
        correct: null
      },
      {
        answerText: 'Nitroprussid',
        correct: null
      },
      {
        answerText: 'Hydralazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Antwort trifft am ehesten zu? Zur Diagnose eines Brugada-Syndroms ist am besten geeignet',
    answers: [
      {
        answerText: 'Adenosin.',
        correct: null
      },
      {
        answerText: 'Flecainid.',
        correct: null
      },
      {
        answerText: 'Amiodaron.',
        correct: null
      },
      {
        answerText: 'Verapamil.',
        correct: null
      },
      {
        answerText: 'Metoprolol.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was wäre am ehesten die Therapie der Wahl des WPW-Syndroms?',
    answers: [
      {
        answerText: 'Flecainid',
        correct: null
      },
      {
        answerText: 'Mexiletin',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Sotalol',
        correct: null
      },
      {
        answerText: 'Procainamid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 16 Jähriges Mädchen hat aus Liebeskummer mit einem Schmerzmittel einen Suizidversuch unternommen und Sie sind auf der Intensivstation für sie verantwortlich. Die Atemfrequenz des Mädchens ist reduziert, zeigt Miosis und sie ist komatös. Was ist die Therapie der Wahl?',
    answers: [
      {
        answerText: 'Silymarin',
        correct: null
      },
      {
        answerText: 'Ergosterin',
        correct: null
      },
      {
        answerText: 'Naloxon',
        correct: null
      },
      {
        answerText: 'Tramadol',
        correct: null
      },
      {
        answerText: 'Acetylcystein',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient leidet an chronischer Herzinsuffizenz auf dem Boden eine KHK (NYHA III). Er wird bisher behandelt mit Ramipril, Digoxin, Eplerenon und Chlortalidon. Welches Medikament müßten Sie ihm jetzt initial aus prognostischen Gründen zusätzlich am ehesten verordnen?',
    answers: [
      {
        answerText: 'Carvedilol 2 x 3,125 mg pro Tag',
        correct: null
      },
      {
        answerText: 'Milrinon 20 mg pro Tag',
        correct: null
      },
      {
        answerText: 'Levosimendan 500 mg pro Tag',
        correct: null
      },
      {
        answerText: 'Carvedilol 2 x 25 mg pro Tag',
        correct: null
      },
      {
        answerText: 'Strophanthidin 5 mg pro Tag',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Propafenon verbessert bei Arrhythmien bei bestehender koronarer Herzkrankheit die Prognose der Patienten.',
        correct: null
      },
      {
        answerText: 'Flecainid verbessert bei Arrhythmien bei bestehender koronarer Herzkrankheit die Prognose der Patienten.',
        correct: null
      },
      {
        answerText: 'Chinidin kann eine Herzinsuffizienz hervorrufen.',
        correct: null
      },
      {
        answerText: 'Chinidin ist nicht gegen Malaria wirksam.',
        correct: null
      },
      {
        answerText: 'Lidocain kann peroral appliziert werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussagen treffen für β-Adrenozeptoren zu?1) Dauerstimulation führt zur Verminderung der Rezeptorenanzahl2) Second messenger ist Inositoltrisphosphat3) β-Adrenozeptoren sind membranäre Proteine4) Propranolol reduziert die Maximalwirkung von Isoprenalin',
    answers: [
      {
        answerText: 'nur 3 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: '1-4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei welchem der folgenden Pharmaka beruhen therapeutische Effekte auf einer irreversiblen Enzymhemmung?',
    answers: [
      {
        answerText: 'Captopril',
        correct: null
      },
      {
        answerText: 'Acetazolamid',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure',
        correct: null
      },
      {
        answerText: 'Allopurinol',
        correct: null
      },
      {
        answerText: 'Theophyllin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Captopril1) hemmt die Bildung von Angiotensin I2) verdrängt Angiotensin von seinem Rezeptor3) steigert die Bildung von Prostacyclin4) hemmt die Bildung von Angiotensin II',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: '1 - 4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Digitoxin hat im Vergleich zu Digoxin eine1) größere extrarenale Elimination2) größere therapeutische Breite3) längere Eliminationshalbwertszeit4) erheblich niedrigere orale Bioverfügbarkeit',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: '1 - 4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Antihypertensiva ruft am ehesten eine reflektorische Tachykardiehervor?',
    answers: [
      {
        answerText: 'Nifedipin',
        correct: null
      },
      {
        answerText: 'Enalapril',
        correct: null
      },
      {
        answerText: 'Diltiazem',
        correct: null
      },
      {
        answerText: 'Clonidin',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Insulin wirkt therapeutisch, indem es eine Tyrosin-Kinase hemmt.',
        correct: null
      },
      {
        answerText: 'Alt-Insulin (=Normalinsulin) ist peroral verfügbar.',
        correct: null
      },
      {
        answerText: 'Alt-Insulin sollte inhalativ gegeben werden.',
        correct: null
      },
      {
        answerText: 'Bei neutralem pH ist Insulin glargin gut löslich.',
        correct: null
      },
      {
        answerText: 'Insulin lispro wirkt rascher als Altinsulin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Der Angriffsort des Furosemids liegt im Sammelrohr.',
        correct: null
      },
      {
        answerText: 'Der Angriffsort des Spironolactons ist im Beginn des distalen Konvoluts.',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid wirkt über genomische Effekte an spezifischen Promoter-Regionen im Zellkern.',
        correct: null
      },
      {
        answerText: 'Acetazolamid führt zu einer Azidose des Organismus.',
        correct: null
      },
      {
        answerText: 'Triamteren wirkt über die Hemmung der Carboanhydrase.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ciclosporin A (Sandimmun®)1) ist wirksam zur Vermeidung der Organtransplantatabstoßung2) ist ein zyklisches Peptid3) ist nephrotoxisch4) hat eine geringe therapeutische Breite',
    answers: [
      {
        answerText: 'nur 1 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 2 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2, 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: '1-4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der genannten Hemmstoffe der Cyclooxygenase hat/haben nur eine sehr geringe antiphlogistische Wirkung?1) Acetylsalicylsäure2) Indometacin3) Phenylbutazon4) Paracetamol',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1,2, und 3 sind richtig',
        correct: null
      },
      {
        answerText: '1-4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'In welchem der folgenden Organe oder Gewebe erreicht ein lipophiles Pharmakon (z.B. Thiopental) nach intravenöser Injektion seine Maximalkonzentration zuletzt?',
    answers: [
      {
        answerText: 'Skelettmuskulatur',
        correct: null
      },
      {
        answerText: 'Myokard',
        correct: null
      },
      {
        answerText: 'Lunge',
        correct: null
      },
      {
        answerText: 'Gehirn',
        correct: null
      },
      {
        answerText: 'Niere',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen von älteren Histamin-H1-Rezeptorblockern, z.B. Pheniramin, erklären sich durch Blockade von H1-Rezeptoren?1) Beseitigung einer Urtikaria2) Mundtrockenheit3) Aufhebung der Histamin-vermittelten Kontraktion der Bronchialmuskulatur4) Mydriasis',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: '1 - 4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Kombination von Ciclosporin mit Johanniskrautpräparaten kann zur Transplantatabstoßung führen, weil Hyperforin',
    answers: [
      {
        answerText: 'ein starker Hemmer von CYP34A ist.',
        correct: null
      },
      {
        answerText: 'die Clearance von Ciclosporin reduziert.',
        correct: null
      },
      {
        answerText: 'die immunsuppressive Wirkung von Ciclosporin erhöht.',
        correct: null
      },
      {
        answerText: 'vor allem CYP34A Enzyme induziert.',
        correct: null
      },
      {
        answerText: 'die Bioverfügbarkeit von Ciclosporin steigert.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Verfärbung des Zahnfleischrandes (Gingivasaum) kommt vor bei chronischer Vergiftung mit1. Thallium2. Aluminium3. Quecksilber4. Blei',
    answers: [
      {
        answerText: 'nur 1 und 2 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 3 und 4 sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Nach der Injektion von Morphin muß mit Tonuserhöhung der glatten Muskulatur gerechnetwerden1. im Magen-Darm-Trakt2. im Ureter3. in den Bronchien4.\tan den Widerstandsgefäßen',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: '1 - 4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei welchen der folgenden Wirkstoffe führt die Bindung an den Rezeptor zur Hemmung einer Ionentransport-ATPase in der Plasmamembran?1. Omeprazol2. Adrenalin3. herzwirksame Glykoside4. Verapamil',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: '1 - 4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Arzneistoffe haben eine Hemmwirkung auf die Magensäuresekretion?1 Omeprazol2 Aluminiumhydroxid3 Ranitidin4 Magnesiumhydroxid',
    answers: [
      {
        answerText: 'nur 1 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2,3 und 4 sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft nicht zu? Zu den osmotisch wirksamen und/oder salinischen Laxantien gehören:',
    answers: [
      {
        answerText: 'Sorbitol (= Sorbit)',
        correct: null
      },
      {
        answerText: 'Natriumsulfat',
        correct: null
      },
      {
        answerText: 'Natriumpicosulfat',
        correct: null
      },
      {
        answerText: 'Magnesiumsulfat',
        correct: null
      },
      {
        answerText: 'Lactulose',
        correct: null
      }
    ]
  },
  {
    questionText: 'β-Lactam-Antibiotika, z.B. Penicillin G, wirken durch eine Hemmung der bakteriellen',
    answers: [
      {
        answerText: 'Murein-Synthese',
        correct: null
      },
      {
        answerText: 'Protein-Synthese',
        correct: null
      },
      {
        answerText: 'Folsäure-Synthese',
        correct: null
      },
      {
        answerText: 'DNA-Synthese',
        correct: null
      },
      {
        answerText: 'Gyrase',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen können nach Gabe von β2 -Adrenozeptor-Agonisten (z.B. Terbutalin) auftreten?',
    answers: [
      {
        answerText: 'Tremor',
        correct: null
      },
      {
        answerText: 'Tachykardie',
        correct: null
      },
      {
        answerText: 'Hypokaliämie',
        correct: null
      },
      {
        answerText: 'Bronchodilatation',
        correct: null
      },
      {
        answerText: 'Alle treffen zu.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft nicht zu? Theophyllin',
    answers: [
      {
        answerText: 'wirkt antagonistisch an Adenosin-Rezeptoren',
        correct: null
      },
      {
        answerText: 'dilatiert die Lungengefäße',
        correct: null
      },
      {
        answerText: 'erhöht die Nierendurchblutung',
        correct: null
      },
      {
        answerText: 'setzt den Widerstand zerebraler Gefäße herab',
        correct: null
      },
      {
        answerText: 'relaxiert die Bronchialmuskulatur',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung zwischen den angegebenen Adrenozeptorentypen und den durch ihre Stimulation vermittelten pharmakologischen Wirkungen trifft nicht zu?',
    answers: [
      {
        answerText: 'α1-Adrenozeptor – Vasokonstriktion der Hautgefäße',
        correct: null
      },
      {
        answerText: 'α2-Adrenozeptor – Hemmung der Freisetzung von Noradrenalin an adrenergen Nervenenden',
        correct: null
      },
      {
        answerText: 'β1-Adrenozeptor – Zunahme der AV-Überleitungsgeschwindigkeit am Herzen',
        correct: null
      },
      {
        answerText: 'β2-Adrenozeptor – Erweiterung der Gefäße der Skelettmuskulatur',
        correct: null
      },
      {
        answerText: 'α1-Adrenozeptor – Pupillenerweiterung durch Lähmung des M. sphincter pupillae',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft nicht zu?A nur bei streng purinarmer Kost',
    answers: [
      {
        answerText: 'llopurinol senkt den Harnsäurespiegel im Plasma',
        correct: null
      },
      {
        answerText: 'zum größten Teil über den Metaboliten Oxipurinol',
        correct: null
      },
      {
        answerText: 'durch Hemmung der Oxidation von Hypoxanthin',
        correct: null
      },
      {
        answerText: 'durch Hemmung der Oxidation von Xanthin',
        correct: null
      },
      {
        answerText: 'bei gleichzeitiger vermehrter renaler Ausscheidung von Xanthin und Hypoxanthin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Arzneimittel wird durch die Haut nicht oder nur wenig resorbiert und ist daher für eine systemische transkutane Applikation in Form von Membranpflastern nicht geeignet?',
    answers: [
      {
        answerText: 'Estradiol',
        correct: null
      },
      {
        answerText: 'Glyceroltrinitrat',
        correct: null
      },
      {
        answerText: 'Scopolamin',
        correct: null
      },
      {
        answerText: 'Fentanyl',
        correct: null
      },
      {
        answerText: 'Heparin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Das Wirkprinzip oraler Antikoagulantien von Dicumaroltyp besteht in einer',
    answers: [
      {
        answerText: 'Hemmung der Wirkung Ca2+-abhängiger Gerinnungsfaktoren',
        correct: null
      },
      {
        answerText: 'Hemmung der Synthese von Fibrinogen',
        correct: null
      },
      {
        answerText: 'Hemmung der Proteinsynthese Ca2+-abhängiger Gerinnungsfaktoren',
        correct: null
      },
      {
        answerText: 'Hemmung der Carboxylierung von Glutaminsäuren in Ca2+-abhängigen Gerinnungsfaktoren',
        correct: null
      },
      {
        answerText: 'Hemmung der Thrombozytenaggregation',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der genannten unerwünschten Wirkungen wird nicht durch den zugeordneten Arzneistoff verursacht?',
    answers: [
      {
        answerText: 'Nephrotoxizität- Cisplatin',
        correct: null
      },
      {
        answerText: 'hämorrhagische Zystitis - Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'Neurotoxizität - Vincristin',
        correct: null
      },
      {
        answerText: 'Kardiomyopathie - Doxorubicin',
        correct: null
      },
      {
        answerText: 'Haarausfall - Prednison',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussagen über Fentanyl treffen zu?1 Die analgetische Potenz von Fentanyl ist erheblich größer als die von Morphin.2 Es ist für die Neuroleptanalgesie geeignet.3 Die Wirkung von Fentanyl ist durch Naloxon nicht antagonisierbar.',
    answers: [
      {
        answerText: 'nur 2 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 3 richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 2 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: '1-3 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der folgenden Arzneistoffe wirkt durch Blockierung eines Serotoninrezeptor-Subtyps (5-HT3) antiemetisch?',
    answers: [
      {
        answerText: 'Ondansetron',
        correct: null
      },
      {
        answerText: 'Doxylamin',
        correct: null
      },
      {
        answerText: 'Scopolamin',
        correct: null
      },
      {
        answerText: 'Dexamethason',
        correct: null
      },
      {
        answerText: 'keiner der genannten Arzneistoffe',
        correct: null
      }
    ]
  },
  {
    questionText: 'Gegen welche der folgenden Wirkungen ist bei chronischer Einnahme von Morphin die Toleranzentwicklung am geringsten?',
    answers: [
      {
        answerText: 'Euphorie',
        correct: null
      },
      {
        answerText: 'Obstipation',
        correct: null
      },
      {
        answerText: 'Analgesie',
        correct: null
      },
      {
        answerText: 'Erbrechen',
        correct: null
      },
      {
        answerText: 'Atemhemmung',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft nicht zu?Eine Fibrinolyse wird bewirkt durch',
    answers: [
      {
        answerText: 'Urokinase',
        correct: null
      },
      {
        answerText: 'Plasmin',
        correct: null
      },
      {
        answerText: 'Streptokinase',
        correct: null
      },
      {
        answerText: 'Aprotinin',
        correct: null
      },
      {
        answerText: 'Gewebeplasminogenaktivator',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche (r) der genannten Arzneistoffe ist/sind zur Therapie einer chronischen1 Ramipril2 Digitoxin3 Hydrochlorothiazid4 Verapamil',
    answers: [
      {
        answerText: 'nur 2 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: '1 - 4 = alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient mit Myokardinsuffizienz und stabiler Angina pectoris soll langfristig mit Ramipril behandelt werden. Welcher der folgenden Arzneistoffe, die der Patient bereits einnimmt, darf in der Regel nicht weiter gegeben werden?',
    answers: [
      {
        answerText: 'Isosorbiddinitrat',
        correct: null
      },
      {
        answerText: 'Amilorid',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Digitoxin',
        correct: null
      },
      {
        answerText: 'Ranitidin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der genannten Arzneistoffe kommt beim kardialen Lungenödem (mit oder ohne Schocksymptomatik) zur Akuttherapie am ehesten nicht in Frage?',
    answers: [
      {
        answerText: 'Mannit',
        correct: null
      },
      {
        answerText: 'Glyceroltrinitrat',
        correct: null
      },
      {
        answerText: 'Morphin',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Dobutamin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Kontraindikationen bestehen für die Anwendung von herzwirksamen Glykosiden?1 hypertrophe obstruktive Kardiomyopathie2 AV-Block 2. und 3. Grades3 Herzmuskelinsuffizienz (NYHA III und IV) infolge arterieller Hypertonie4 Vorhofflimmern',
    answers: [
      {
        answerText: 'nur 1 und 2 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 3 und 4 sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen trifft für die Chemotherapie maligner Tumoren am ehesten nicht zu?',
    answers: [
      {
        answerText: 'Methylenblau kann zur Prävention einer Ifosfamid-induziertem Enzephalopathie eingesetzt werden.',
        correct: null
      },
      {
        answerText: 'Anthracycline (Doxorubicin, Daunorubicin) sind kardiotoxisch.',
        correct: null
      },
      {
        answerText: 'Ein durch die Behandlung mit Cisplatin ausgelöstes Erbrechen kann durch die Gabe von Ondansetron beherrschbar werden.',
        correct: null
      },
      {
        answerText: 'Cyclophosphamid hemmt die Hämatopoese im Knochenmark.',
        correct: null
      },
      {
        answerText: 'Vincristin hemmt die Depolymerisation von Mikrotubuli.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Es trifft nicht zu, daß Furosemid zur Therapie der Herzinsuffizienz',
    answers: [
      {
        answerText: 'die Dyspnoe bessern.',
        correct: null
      },
      {
        answerText: 'in Kombination mit Ramipril gegeben werden kann.',
        correct: null
      },
      {
        answerText: 'häufig einen Kaliumverlust des Körpers verursachen.',
        correct: null
      },
      {
        answerText: 'initial das Körpergewicht um 500 g bis 1000 g pro Tag senken kann.',
        correct: null
      },
      {
        answerText: 'Vor- und Nachlast des Herzens unverändert läßt.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu?Beurteilen Sie die Zuordnungen von Antihypertensiva und ihren typischen unerwünschten Wirkungen!',
    answers: [
      {
        answerText: 'Ramipril - Husten',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid - Natriumretention',
        correct: null
      },
      {
        answerText: 'Nifedipin - Knöchelödeme',
        correct: null
      },
      {
        answerText: 'Clonidin - Mundtrockenheit',
        correct: null
      },
      {
        answerText: 'Minoxidil - Hypertrichose',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einem normalgewichtigen 65-jährigen Patienten mit einem diagnostizierten Diabetes mellitus Typ II ist Diät allein zur Blutzuckereinstellung nicht mehr ausreichend. Außer einer eingeschränkten Nierenfunktion (Kreatinin-Clearance 40 ml/min) liegen keine relevanten Begleiterkrankungen vor.Welches der aufgelisteten Pharmaka ist das Mittel der ersten Wahl?',
    answers: [
      {
        answerText: 'Metformin',
        correct: null
      },
      {
        answerText: 'Pioglitazon',
        correct: null
      },
      {
        answerText: 'Sitagliptin',
        correct: null
      },
      {
        answerText: 'Acarbose',
        correct: null
      },
      {
        answerText: 'Repaglinid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der folgenden blutdrucksenkenden Arzneistoffe ist bei Asthma bronchiale kontraindiziert?',
    answers: [
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Prazosin',
        correct: null
      },
      {
        answerText: 'Carvedilol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der zur Behandlung des chronischen Asthma bronchiale eingesetzten Pharmaka wird nicht als Aerosol verwendet?',
    answers: [
      {
        answerText: 'Ipratropiumbromid',
        correct: null
      },
      {
        answerText: 'Beclometason',
        correct: null
      },
      {
        answerText: 'Terbutalin',
        correct: null
      },
      {
        answerText: 'Theophyllin',
        correct: null
      },
      {
        answerText: 'Cromoglicinsäure',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Arzneimittel hat bei Asthmapatienten am ehesten kein besonderes Risiko der Erhöhung des Atemwegswiderstandes?',
    answers: [
      {
        answerText: 'Acetylsalicylsäure',
        correct: null
      },
      {
        answerText: 'Sotalol',
        correct: null
      },
      {
        answerText: 'Pyridostigmin',
        correct: null
      },
      {
        answerText: 'Prednisolon',
        correct: null
      },
      {
        answerText: 'Atenolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Glyceroltrinitrat wird eingesetzt zur Behandlung folgender Erkrankungen/Symptome:1. Gallenkolik2. Myokardinfarkt3. Angina pectoris4. kardiales Lungenödem',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Einer 54-jähringen Frau, die sich mit Zeichen und Symptomen eines frühen Stadiums der rheumatoiden Arthritis vorstellt, wollen Sie Celecoxib verschrieben. Bei welcher Begleiterkrankung ist Celecoxib bei dieser Frau eher nicht indiziert?',
    answers: [
      {
        answerText: 'bekannter Alkoholabusus',
        correct: null
      },
      {
        answerText: 'bekannte Hyperurikämie mit Gichtanfällen',
        correct: null
      },
      {
        answerText: 'Zustand nach rezidivierenden Myokardinfakten',
        correct: null
      },
      {
        answerText: 'Vorliegen einer Osteoporose',
        correct: null
      },
      {
        answerText: 'bekannte rezidivierende Ulkuserkrankung des Duodenums',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben die Patientin, Margit Müller, mit Verdacht auf rheumatoide Arthritis initial mit nicht-steroidalen Antiphlogistika und Methotrexat behandelt. Die Symptome verschlimmerten sich jedoch und es gab radiologische Zeichen, daß sich in ihren Fingergelenken eine progressive Destruktion abzeichnet. Sie wollen deshalb ein neues Medikament mit folgenden Charakteristika als zweiten Schritt geben. Die Substanz kann man nur parenteral geben. Der Wirkungsmechanismus beruht auf Antagonismus an einem Tumornekrosefaktor. Hierbei handelt es sich um',
    answers: [
      {
        answerText: 'Cyclosporin',
        correct: null
      },
      {
        answerText: 'Etanercept',
        correct: null
      },
      {
        answerText: 'Penicillamin',
        correct: null
      },
      {
        answerText: 'Phenylbutazon',
        correct: null
      },
      {
        answerText: 'Sulfasalazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was sind die klinischen Zeichen einer Überdosierung mit Acetylsalicylsäure (Aspirin®)?',
    answers: [
      {
        answerText: 'Knochenmarkssuppression und möglicherweise aplastische Anämie',
        correct: null
      },
      {
        answerText: 'Fieber, Leberdysfuntion und Enzephalopathie',
        correct: null
      },
      {
        answerText: 'Hyperthermie, metabolische Azidose und Koma',
        correct: null
      },
      {
        answerText: 'fulminantes Leberversagen',
        correct: null
      },
      {
        answerText: 'Hautausschlag, interstielle Nephritis und akutes Nierenversagen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist als Folge einer Glucocorticoidtherapie am wahrscheinlichsten?',
    answers: [
      {
        answerText: 'Hypoglykämie',
        correct: null
      },
      {
        answerText: 'Gewichtsverlust',
        correct: null
      },
      {
        answerText: 'Hüftkopfnekrose',
        correct: null
      },
      {
        answerText: 'Nephrolithiasis',
        correct: null
      },
      {
        answerText: 'Myxödem',
        correct: null
      }
    ]
  },
  {
    questionText: 'Azathioprin wirkt durch',
    answers: [
      {
        answerText: 'Hemmung der Dihydrofolatreduktase',
        correct: null
      },
      {
        answerText: 'Hemmung des Pyrimidineinbaus in Nucleinsäuren',
        correct: null
      },
      {
        answerText: 'Hemmung der Purinbiosynthese',
        correct: null
      },
      {
        answerText: 'Interkalation und Fragmentierung der DNA',
        correct: null
      },
      {
        answerText: 'bifunktionelle Alkylierung der DNA',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden unerwünschten Wirkungen ist nicht typisch für Cyclophosphamid?',
    answers: [
      {
        answerText: 'Störung der Hämatopoese',
        correct: null
      },
      {
        answerText: 'zerebrale Krampfanfälle',
        correct: null
      },
      {
        answerText: 'Teratogenität',
        correct: null
      },
      {
        answerText: 'Kanzerogenität',
        correct: null
      },
      {
        answerText: 'Zystitis',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Kardiomyopathie als unerwünschte Arzneimittelwirkung muß in Abhängigkeit von der verabreichten Gesamtdosis am ehesten befürchtet werden unter Behandlung mit',
    answers: [
      {
        answerText: 'Cytarabin',
        correct: null
      },
      {
        answerText: 'Actinomycin D',
        correct: null
      },
      {
        answerText: 'Mercaptopurin',
        correct: null
      },
      {
        answerText: 'Vincristin',
        correct: null
      },
      {
        answerText: 'Doxorubicin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einem 57-jährigen Patienten mit symptomatischer benigner Prostatahyperplasie wird eine essentielle Hypertonie diagnostiziert. Welches der folgenden Antihypertensiva ist hinsichtlich der Prostatahyperplasie als günstigstes Therapeutikum anzusehen?',
    answers: [
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Metroprolol',
        correct: null
      },
      {
        answerText: 'Doxazosin',
        correct: null
      },
      {
        answerText: 'Amlodipin',
        correct: null
      },
      {
        answerText: 'Enalapril',
        correct: null
      }
    ]
  },
  {
    questionText: 'Herr Weinreich wird auf die Intensivstation ihres Krankenhauses aufgenommen wegen einer Lungenentzündung hervorgerufen durch gram-negative Bakterien. Die Therapie der Wahl sei Gentamicin. Die Clearance und das Verteilungsvolumen von Gentamicin bei Herrn Weinreich sind 80 ml/min bzw. 20 Liter. Sie möchten Herrn Weinreich intravenös eine Loading-Dose (=Initialdosis= Aufsättigungsdosis) geben, um die bekannte therapeutische Plasmakonzentration von 4 mg/l möglichst schnell zu erreichen. Welche Initialdosis sollten Sie geben?',
    answers: [
      {
        answerText: '0,1 mg',
        correct: null
      },
      {
        answerText: '10 mg',
        correct: null
      },
      {
        answerText: '80 mg',
        correct: null
      },
      {
        answerText: '160 mg',
        correct: null
      },
      {
        answerText: '180 mg',
        correct: null
      }
    ]
  },
  {
    questionText: 'Herr Weinreich wird auf die Intensivstation ihres Krankenhauses aufgenommen wegen einer Lungenentzündung hervorgerufen durch gram-negative Bakterien. Die Therapie der Wahl sei Gentamicin. Die Clearance und das Verteilungsvolumen von Gentamicin bei Herrn Weinreich sind 80 ml/min bzw. 20 Liter. Welche Erhaltungsdosis (in mg) müssen Sie am ehesten alle sechs Stunden intravenös geben, um letztlich eine mittlere Gleichgewichtskonzentration (also im „Steady state“) von 4 mg/l zu erhalten?',
    answers: [
      {
        answerText: '0,32',
        correct: null
      },
      {
        answerText: '19,2',
        correct: null
      },
      {
        answerText: '115',
        correct: null
      },
      {
        answerText: '160',
        correct: null
      },
      {
        answerText: '230',
        correct: null
      }
    ]
  },
  {
    questionText: 'Am Studenten Tristan Wagner wird ein neues Medikament getestet (Phase I). Die Clearance sei 1386 l/h und das Verteilungsvolumen sei 160 l. Dann beträgt die Halbwertszeit des neuen Medikamentes am ehesten',
    answers: [
      {
        answerText: '0,81 h',
        correct: null
      },
      {
        answerText: '41 h',
        correct: null
      },
      {
        answerText: '61 h',
        correct: null
      },
      {
        answerText: '82 h',
        correct: null
      },
      {
        answerText: '102 h',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen trifft am ehesten zu?',
    answers: [
      {
        answerText: 'T4 ist das biologisch aktive Schilddrüsenhormon.',
        correct: null
      },
      {
        answerText: 'Thyreotropin (TSH) stimuliert hemmt die Adenylatcyclase über G-Protein-gekoppelte Rezeptoren in den Thyreozyten.',
        correct: null
      },
      {
        answerText: 'Perchlorat hemmt die Iodidaufnahme in die Thyreozyten.',
        correct: null
      },
      {
        answerText: 'Thiamazol stimuliert den Einbau von freiem Iod in die Aminosäure Tyrosin.',
        correct: null
      },
      {
        answerText: 'Lithium stimuliert die Freisetzung von Schilddrüsenhormonen aus den Thyreozyten.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft bezüglich der Therapie mit Thyreostatika am ehesten zu?',
    answers: [
      {
        answerText: 'Thionamide hemmen die Jodaufnahme in die Schilddrüse.',
        correct: null
      },
      {
        answerText: 'Oral verabreichte Thionamide erreichen in der Regel bereits nach Wochen die volle thyreostatische Wirksamkeit.',
        correct: null
      },
      {
        answerText: 'Perchlorat ist ein Hemmstoff der Schilddrüsenperoxidase.',
        correct: null
      },
      {
        answerText: 'Unter der Therapie mit Thiamazol können keine Leukopenien auftreten.',
        correct: null
      },
      {
        answerText: 'Prophylthiouracil hat kein hepatotoxischen Potential.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche unerwünschte Wirkung ist am ehesten typisch für das orale Antidiabetikum Glibenclamid?',
    answers: [
      {
        answerText: 'Hypernatriämie',
        correct: null
      },
      {
        answerText: 'Hypokaliämie',
        correct: null
      },
      {
        answerText: 'Gewichtszunahme',
        correct: null
      },
      {
        answerText: 'Hypoglykämie',
        correct: null
      },
      {
        answerText: 'Lactatazidose',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Antihypertensiva erregt direkt α-adrenerge Rezeptoren im ZNS?',
    answers: [
      {
        answerText: 'Moxonidin',
        correct: null
      },
      {
        answerText: 'Reserpin',
        correct: null
      },
      {
        answerText: 'Dihydralazin',
        correct: null
      },
      {
        answerText: 'Captopril',
        correct: null
      },
      {
        answerText: 'Prazosin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Arzneimittel hemmt die Xanthinoxidase?',
    answers: [
      {
        answerText: 'Probencid',
        correct: null
      },
      {
        answerText: 'Methotrexat',
        correct: null
      },
      {
        answerText: 'Allopurinol',
        correct: null
      },
      {
        answerText: 'Selegilin',
        correct: null
      },
      {
        answerText: 'Ethambutol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu?Die Anwendung von Metoprolol würde die folgende Symptomatik verschlechtern und ist daher amWENIGSTEN geeignet bei:',
    answers: [
      {
        answerText: 'obstruktiven Atemwegserkrankungen.',
        correct: null
      },
      {
        answerText: 'Hypertonus.',
        correct: null
      },
      {
        answerText: 'Vorhofflimmern.',
        correct: null
      },
      {
        answerText: 'Herzinsuffizienz Glaukom.',
        correct: null
      },
      {
        answerText: 'ventrikulären tachykarden Herzrhythmusstörungen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen verlängert am wahrscheinlichsten NICHT die Überleitungszeit am AV-Knoten?',
    answers: [
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Ipratropiumbromid',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Sotalol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der folgenden Stoffe gehört zur Gruppe der Aminoglykoside?',
    answers: [
      {
        answerText: 'Rifamicin',
        correct: null
      },
      {
        answerText: 'Amikacin',
        correct: null
      },
      {
        answerText: 'Ciprofloxacin',
        correct: null
      },
      {
        answerText: 'Clarithromycin',
        correct: null
      },
      {
        answerText: 'Doxycyclin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ramipril ist am ehesten kontraindiziert bei',
    answers: [
      {
        answerText: 'Schwangerschaft.',
        correct: null
      },
      {
        answerText: 'Herzinsuffizienz.',
        correct: null
      },
      {
        answerText: 'Asthma.',
        correct: null
      },
      {
        answerText: 'Diabetes.',
        correct: null
      },
      {
        answerText: 'Hypertonus.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu? Folgende Arzneistoffe wirken als β-Adrenozeptor-Agonisten relaxierend auf die glatte Muskulatur des Respirationstraktes:',
    answers: [
      {
        answerText: 'Salbutamol',
        correct: null
      },
      {
        answerText: 'Adrenalin',
        correct: null
      },
      {
        answerText: 'Isoprenalin',
        correct: null
      },
      {
        answerText: 'Sildenafil',
        correct: null
      },
      {
        answerText: 'Terbutalin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu? Typische Nebenwirkungen von Digoxin können bestehen aus:',
    answers: [
      {
        answerText: 'Sehstörungen',
        correct: null
      },
      {
        answerText: 'Erbrechen',
        correct: null
      },
      {
        answerText: 'Arrhythmien',
        correct: null
      },
      {
        answerText: 'alle drei oben genannten',
        correct: null
      },
      {
        answerText: 'keine der drei oben genannten',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Arzneistoffe wirken am Herzen direkt positiv inotrop und senken zugleich den peripheren Gesamtgefäßwiderstand?',
    answers: [
      {
        answerText: 'Levosimendan',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      },
      {
        answerText: 'Noradrenalin',
        correct: null
      },
      {
        answerText: 'Nitroprussidnatrium',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Hydrochlorothiazid kann die Toxizität von Digoxin erhöhen.',
        correct: null
      },
      {
        answerText: 'Digoxin ist zur Therapie von Vorhofflimmern geeignet.',
        correct: null
      },
      {
        answerText: 'Digoxin ist zur Therapie von hypertropher obstruktiver Kardiomyopathie indiziert.',
        correct: null
      },
      {
        answerText: 'Digoxin wird vor allem renal eliminiert.',
        correct: null
      },
      {
        answerText: 'Digoxin Plasma-Spiegel werden durch Chinidin erhöht.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Chinidin trifft am ehesten nicht zu?',
    answers: [
      {
        answerText: 'Es ist anwendbar bei paroxysmalem Vorhofflimmern.',
        correct: null
      },
      {
        answerText: 'Es ist auch bei einigen Formen der Malaria wirksam.',
        correct: null
      },
      {
        answerText: 'Es ist ein Klasse I Antiarrhythmikum.',
        correct: null
      },
      {
        answerText: 'Es ist ein Diastereoisomer von Chindin.',
        correct: null
      },
      {
        answerText: 'Es ist auch bei einem Patienten mit chronischer Herzinsuffizienz (NYHA III) anwendbar.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist FALSCH?Dronaderon hat',
    answers: [
      {
        answerText: 'keinen störenden Einfluss auf die Schilddrüsenfunktion, weil es kein Jod enthält.',
        correct: null
      },
      {
        answerText: 'eine gute orale Bioverfügbarkeit.',
        correct: null
      },
      {
        answerText: 'eine blockierende Wirkung auf einige Kaliumkanäle.',
        correct: null
      },
      {
        answerText: 'eine Plasmahalbwertszeit von etwa 24 – 30 Stunden.',
        correct: null
      },
      {
        answerText: 'ein im Vergleich zu Sotalol besonders hohes Risiko von Torsade de pointes Tachykardien.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft für Verapamil am ehesten nicht zu?',
    answers: [
      {
        answerText: 'Es kann bei Vorhofflattern eingesetzt werden.',
        correct: null
      },
      {
        answerText: 'Es kann mit Metoprolol kombiniert werden.',
        correct: null
      },
      {
        answerText: 'Es ist symptomatisch bei koronarer Herzkrankheit zur Rezidivprophylaxe wirksam.',
        correct: null
      },
      {
        answerText: 'Es kann bei paroxysmalem Vorhofflimmern angewandt werden.',
        correct: null
      },
      {
        answerText: 'Es ist bei Herzinsuffizienz kontraindiziert.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Oseltamivir wirkt am ehesten',
    answers: [
      {
        answerText: 'durch Hemmung der Virusreifung.',
        correct: null
      },
      {
        answerText: 'durch Hemmung der Nukleinsäuresynthese.',
        correct: null
      },
      {
        answerText: 'durch Hemmung des uncoating der Virusnukleinsäure.',
        correct: null
      },
      {
        answerText: 'durch Hemmung der Penetration in die Zelle.',
        correct: null
      },
      {
        answerText: 'durch Hemmung der Freisetzung der neugebildeten Viren.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der folgenden Stoffe ist kein Virustatikum?',
    answers: [
      {
        answerText: 'Aciclovir',
        correct: null
      },
      {
        answerText: 'Amantadin',
        correct: null
      },
      {
        answerText: 'Saquinavir',
        correct: null
      },
      {
        answerText: 'Didanosin',
        correct: null
      },
      {
        answerText: 'Ciprofloxazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zu welcher Stoffklasse zählt Bleomycin am ehesten?',
    answers: [
      {
        answerText: 'Alkylantien',
        correct: null
      },
      {
        answerText: 'Mitosehemmer',
        correct: null
      },
      {
        answerText: 'Anthracyclin-Derivat',
        correct: null
      },
      {
        answerText: 'Podophyllotoxin-Derivat',
        correct: null
      },
      {
        answerText: 'Glykopeptid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Kolitis durch Clostridium difficile spricht am ehesten auf welche Substanz an',
    answers: [
      {
        answerText: 'Ceftriaxon',
        correct: null
      },
      {
        answerText: 'Clindamycin',
        correct: null
      },
      {
        answerText: 'Erythromycin',
        correct: null
      },
      {
        answerText: 'Rifampicin',
        correct: null
      },
      {
        answerText: 'Vancomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist FALSCH? Folgende Substanzen sind Prodrugs:',
    answers: [
      {
        answerText: 'Azathioprin',
        correct: null
      },
      {
        answerText: 'Captopril',
        correct: null
      },
      {
        answerText: 'Levodopa',
        correct: null
      },
      {
        answerText: 'Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'α-Methyldopa',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente zur Behandlung einer Tuberkulose bedingt am ehesten Sehstörungen, die zum Absetzen zwingen können?',
    answers: [
      {
        answerText: 'Streptomycin',
        correct: null
      },
      {
        answerText: 'Isoniazid',
        correct: null
      },
      {
        answerText: 'Pyrazinamid',
        correct: null
      },
      {
        answerText: 'Rifampicin',
        correct: null
      },
      {
        answerText: 'Ethambutol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussage zur Antikoagulation trifft zu?',
    answers: [
      {
        answerText: 'Fraktioniertes Heparin hemmt die Gerinnung, indem es an körpereigenes Antithrombin III und Thrombin bindet.',
        correct: null
      },
      {
        answerText: 'Niedermolekulares Heparin verfügt über eine längere Halbwertszeit als unfraktioniertes Heparin.',
        correct: null
      },
      {
        answerText: 'Phenprocoumon hemmt die Synthese der Vitamin K-abhängigen Gerinnungsfaktoren III, VII, IX und X.',
        correct: null
      },
      {
        answerText: 'Die Wirkung einer Therapie mit Heparin wird über die Messung der INR gesteuert.',
        correct: null
      },
      {
        answerText: 'Die Wirkung einer Therapie mit Phenprocoumon wird über die Messung der aPTT (aktivierte partielle Thromboplastinzeit) gesteuert.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft auf Rivaroxaban zu?',
    answers: [
      {
        answerText: 'Es hemmt Faktor III.',
        correct: null
      },
      {
        answerText: 'Rifampicin erhöht seine Plasmakonzentration.',
        correct: null
      },
      {
        answerText: 'Bei Vorhofflimmern strebt man eine INR von 2-3 durch Rivaroxaban an.',
        correct: null
      },
      {
        answerText: 'Es bedingt häufiger gastrointestinale Blutung als Phenprocoumon.',
        correct: null
      },
      {
        answerText: 'Es ist peroral zu über 80 % verfügbar.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Pencillin V?',
    answers: [
      {
        answerText: 'Hemmung der Zellwandsynthese.',
        correct: null
      },
      {
        answerText: 'Hemmung von Cytochrom P450 Systemen.',
        correct: null
      },
      {
        answerText: 'Hemmung der Gyraseaktivität.',
        correct: null
      },
      {
        answerText: 'Blockade eines Ionenkanales der Bakterienzellwand.',
        correct: null
      },
      {
        answerText: 'Hemmung der RNA-Transkription.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches dieser Antihypertensiva kann am ehesten Husten bedingen?',
    answers: [
      {
        answerText: 'Losartan',
        correct: null
      },
      {
        answerText: 'Lisinopril',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Clonidin',
        correct: null
      },
      {
        answerText: 'Hydralazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu?',
    answers: [
      {
        answerText: 'Aciclovir ist das Prodrug von Famciclovir.',
        correct: null
      },
      {
        answerText: 'Aciclovir hemmt eine Neuraminidase.',
        correct: null
      },
      {
        answerText: 'Aciclovir ist gut gegen HIV wirksam.',
        correct: null
      },
      {
        answerText: 'Aciclovir ist gegen Herpes-simplex unwirksam.',
        correct: null
      },
      {
        answerText: 'Aciclovir wird zu über 90 % unverändert renal ausgeschieden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu? Isoprenalin ist am ehesten ein',
    answers: [
      {
        answerText: 'Agonist an nicotinergen Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Antagonist an mucarinergen Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Antagonist an alpha-Adrenozeptoren.',
        correct: null
      },
      {
        answerText: 'Agonist an beta-Adrenoceptoren.',
        correct: null
      },
      {
        answerText: 'ein Derivat des Tubocurarins.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu? Ein Generikum ist am ehesten',
    answers: [
      {
        answerText: 'ein Medikament zur Polypharmazie.',
        correct: null
      },
      {
        answerText: 'eine funktionelle Gruppe eines organischen Arzneistoffes.',
        correct: null
      },
      {
        answerText: 'ein Medikament aus der Gruppe der Homöopathika.',
        correct: null
      },
      {
        answerText: 'ein rezeptfreies Medikament.',
        correct: null
      },
      {
        answerText: 'ein Medikament, dessen Patentschutz abgelaufen ist.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Doxycyclin ist sicher in der Schwangerschaft.',
        correct: null
      },
      {
        answerText: 'Doxycyclin wird bei Kleinkindern empfohlen.',
        correct: null
      },
      {
        answerText: 'Doxycyclin sollte besser auch mit Protonenpumpen-Hemmern kombiniert werden.',
        correct: null
      },
      {
        answerText: 'Doxycyclin sollte mit Milch zusammen eingenommen werden.',
        correct: null
      },
      {
        answerText: 'Doxycyclin ist gegen Reckettsien wirksam.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Die Gabe von Metoprolol ist am ehesten kontraindiziertbei',
    answers: [
      {
        answerText: 'Hypertonie.',
        correct: null
      },
      {
        answerText: 'Gastralen Ulcera.',
        correct: null
      },
      {
        answerText: 'Arrhythmien.',
        correct: null
      },
      {
        answerText: 'Asthma bronchiale.',
        correct: null
      },
      {
        answerText: 'Schwangerschaftshypertonie.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher Stoff wirkt nicht über die Blockade von spannungs-abhängigen Ionen-Kanälen?',
    answers: [
      {
        answerText: 'Atracurium',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      },
      {
        answerText: 'Phenytoin',
        correct: null
      },
      {
        answerText: 'Procainamid',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einer Meningitis durch Streptococcus pneumoniae ist welches Medikament am ehesten indiziert?',
    answers: [
      {
        answerText: 'Doxycyclin',
        correct: null
      },
      {
        answerText: 'Fosfomycin',
        correct: null
      },
      {
        answerText: 'Gentamicin',
        correct: null
      },
      {
        answerText: 'Cefotaxim',
        correct: null
      },
      {
        answerText: 'Clindamycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage über Barbiturate trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Phenobarbital wirkt auch leicht analgetisch.',
        correct: null
      },
      {
        answerText: 'Phenobarbital wird nicht bei Grand-mal-Anfällen eingesetzt.',
        correct: null
      },
      {
        answerText: 'Phenobarbital kann eine Atemdepression bedingen.',
        correct: null
      },
      {
        answerText: 'Thiopental wird auch als Antiepileptikum eingesetzt.',
        correct: null
      },
      {
        answerText: 'Phenobarbital hemmt das Cytochrom-P450-System der Leber.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Der antikoagulierende Effekt von Heparin kann',
    answers: [
      {
        answerText: 'durch Vitamin K antgonisiert werden.',
        correct: null
      },
      {
        answerText: 'wird vermindert bei Niereninsuffizienz.',
        correct: null
      },
      {
        answerText: 'wird verstärkt bei Hypoalbuminurie.',
        correct: null
      },
      {
        answerText: 'kann durch Toleranzen abgeschwächt sein.',
        correct: null
      },
      {
        answerText: 'kann mit einer Thrombozytopenie einhergehen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Nitrate',
    answers: [
      {
        answerText: 'sind nur vasodilatatorisch in Gegenwart von intaktem Endothel.',
        correct: null
      },
      {
        answerText: 'dilatieren nur arterielle Gefäße.',
        correct: null
      },
      {
        answerText: 'können Vor- und Nachlast reduzieren.',
        correct: null
      },
      {
        answerText: 'haben negativ inotrope Effekte.',
        correct: null
      },
      {
        answerText: 'wirken nicht relaxierend auf die glatte Muskulatur z.B. im Magen-Darm Trakt.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu? Der Parameter, der am ehesten die Potenz eines Arzneimittels beschreibt, ist die',
    answers: [
      {
        answerText: 'T1/2',
        correct: null
      },
      {
        answerText: 'EC50',
        correct: null
      },
      {
        answerText: 'CL',
        correct: null
      },
      {
        answerText: 'Vd',
        correct: null
      },
      {
        answerText: 'AUC',
        correct: null
      }
    ]
  },
  {
    questionText: 'Omeprazol ist zur Behandlung von Ulcera auf dem Boden von Helicobacter-Infektionen geeignet,weil',
    answers: [
      {
        answerText: 'es H2-Rezeptoren blockiert.',
        correct: null
      },
      {
        answerText: 'es antibakteriell wirksam ist.',
        correct: null
      },
      {
        answerText: 'es den Na+/Ca2+ Austauscher hemmt.',
        correct: null
      },
      {
        answerText: 'es die Na+/K+-ATPase hemmt.',
        correct: null
      },
      {
        answerText: 'es eine Protonenpumpe hemmt.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente wirkt am ehesten nicht als Antiemetikum?',
    answers: [
      {
        answerText: 'Tetrahydrocannabinol',
        correct: null
      },
      {
        answerText: 'Physostigmin',
        correct: null
      },
      {
        answerText: 'Chlorpromazin',
        correct: null
      },
      {
        answerText: 'Diphenhydramin',
        correct: null
      },
      {
        answerText: 'Scopolamin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche dieser Stoffe ist am ehesten ein Aldosteron-Antagonist?',
    answers: [
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Mannitol',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Eplerenon',
        correct: null
      },
      {
        answerText: 'Acetazolamid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Nitroprussidnatrium trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Es senkt den systemischen Blutdruck.',
        correct: null
      },
      {
        answerText: 'Es wirkt negativ inotrop.',
        correct: null
      },
      {
        answerText: 'Es sollte nicht zusammen mit Natriumthiosulfat gegeben werden.',
        correct: null
      },
      {
        answerText: 'Es ist gegen supraventrikuläre Arrhythmien wirksam.',
        correct: null
      },
      {
        answerText: 'Keine Aussage trifft zu.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten NICHT zu?',
    answers: [
      {
        answerText: 'Acetylsalicylsäure hemmt die Cyclooxygenase (COX) der Thrombozyten irreversibel.',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure Acetylsalicylsäurverstärkt die Wirkung von Antikoagulantien.',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure hat eine relativ lange Halbwertszeit bei Gabe von etwa 500 mg (> 12 h).',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure gehört in die Gruppe der Säureanalgetika.',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure ist ein unselektiver COX-Hemmer.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Lokalanästhetika wie Lidocain sind auch vasokonstriktorisch wirksam.',
        correct: null
      },
      {
        answerText: 'Lokalanästhetika wie Lidocain blockieren spannungsabhängige Calciumionenkanäle.',
        correct: null
      },
      {
        answerText: 'Lokalanästhetika wie Lidocain blockieren ihre Zielstruktur von der extrazellulären Seite.',
        correct: null
      },
      {
        answerText: 'Lokalanästhetika wie Lidocain wirken stärker im entzündeten Gewebe.',
        correct: null
      },
      {
        answerText: 'Lokalanästhetika wie Lidocain blockieren marklose Nervenfasern in niedrigerer Konzentration als markhaltige.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Substanz führt am ehesten zu einer verzögerten Magen-Darm-Passage?',
    answers: [
      {
        answerText: 'Magnesiumsulfat',
        correct: null
      },
      {
        answerText: 'Lactulose',
        correct: null
      },
      {
        answerText: 'Bethanechol',
        correct: null
      },
      {
        answerText: 'Metoclopramid',
        correct: null
      },
      {
        answerText: 'Loperamid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur Steigerung der Magen-Darm-Peristaltik z.B. bei postoperativer Akinesie wird am ehesten eingesetzt:',
    answers: [
      {
        answerText: 'Butylscopolamin (p.o.)',
        correct: null
      },
      {
        answerText: 'Atropin (i.v.)',
        correct: null
      },
      {
        answerText: 'Parathion',
        correct: null
      },
      {
        answerText: 'Botulinustoxin',
        correct: null
      },
      {
        answerText: 'Erythromycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am WENIGSTEN zu? Für die Cyclooxygenase CYP3A4 gilt:',
    answers: [
      {
        answerText: 'CYP3A4 wird in der Darmschleimhaut durch Grapefruitsaft gehemmt.',
        correct: null
      },
      {
        answerText: 'CYP3A4 ist maßgeblich beteiligt an der Umwandlung von Codein in Morphin.',
        correct: null
      },
      {
        answerText: 'CYP3A4 wird durch Rifampicin induziert.',
        correct: null
      },
      {
        answerText: 'CYP3A4 ist für den metabolischen Umsatz von Pravastatin von geringerer Bedeutung als für den Umsatz von Simvastatin.',
        correct: null
      },
      {
        answerText: 'CYP3A4 wird durch Erythromycin gehemmt.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher Stoff hemmt am ehesten die Xanthinoxidase?',
    answers: [
      {
        answerText: 'Probenecid',
        correct: null
      },
      {
        answerText: 'Methotrexat',
        correct: null
      },
      {
        answerText: 'Colchicin',
        correct: null
      },
      {
        answerText: 'Benserazid',
        correct: null
      },
      {
        answerText: 'Allopurinol',
        correct: null
      }
    ]
  },
  {
    questionText: 'ACE-Hemmer, Beta-Blocker, Diuretika und Herzglykoside finden Anwendung in der medikamentösen Therapie der chronischen Herzinsuffizienz. Welche der folgenden Aussagen ist am ehesten zutreffend?',
    answers: [
      {
        answerText: 'Herzglykoside wirken über eine Abnahme der Kontraktilität und reflektorische Zunahme der Herzfrequenz.',
        correct: null
      },
      {
        answerText: 'Beta-Blocker bewirken eine Abnahme der Herzfrequenz und eine periphere Vasodilatation.',
        correct: null
      },
      {
        answerText: 'ACE-Hemmer führen durch Hemmung des Renin-Angiotensin-Systems zu einer Abnahme der Herzmuskelhypertrophie.',
        correct: null
      },
      {
        answerText: 'Spironolacton bewirkt einen Abfall der Serumkonzentration von Kaliumionen.',
        correct: null
      },
      {
        answerText: 'Diuretika verbessern die Prognose.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Wirkstoffen, die am Renin-Angiotensin-Aldosteron-System (RAAS) angreifen, trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Angiontensin-Rezeptor-Antagonisten (AT1-Blocker) verursachen bei bis zu 10 % der Patienten einen Reizhusten als unerwünschte Wirkung.',
        correct: null
      },
      {
        answerText: 'Durch die Hemmung des Angiotensin-Converting-Enzyms (ACE-Hemmer) kommt es zu einer verminderten Aldosteronfreisetzung.',
        correct: null
      },
      {
        answerText: 'Nach Gabe des Aldosteronantagonisten Spironolacton fällt die Plasmakonzentration von Kaliumionen ab.',
        correct: null
      },
      {
        answerText: 'Hemmstoffe des RAAS sind kontraindiziert bei Patienten mit chronischer Herzinsuffizienz.',
        correct: null
      },
      {
        answerText: 'Angiotensin-Rezeptor-Antagonisten (AT1-Blocker) bewirken einen verminderten Abbau von Bradykinin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage über die Therapie von Magenulcera trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Die Wirkdauer der Protonenpumpenhemmer ist abhängig von der jeweiligen Plasmahalbwertszeit.',
        correct: null
      },
      {
        answerText: 'H2-Antagonisten gelten als gleichwertige Alternative zu Protonenpumpenhemmern.',
        correct: null
      },
      {
        answerText: 'Cimetidin führt zu keinen relevanten Interaktionen mit anderen Pharmaka.',
        correct: null
      },
      {
        answerText: 'Da Antazida nicht resorbierbare Komplexe bilden, sind sie auch für Patienten mit Niereninsuffizienz gut geeignet.',
        correct: null
      },
      {
        answerText: 'Sucralfat führt im Magen lumenseitig zu einer Ausbildung eines viskösen Gels.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einer 27-jährigen schwangeren Frau mit einer Disposition für Beinvenenthrombose ist eine Antikoagulantientherapie erforderlich. Welches der angeführten Arzneimittel ist für diese Therapie während der Schwangerschaft am ehesten geeignet?',
    answers: [
      {
        answerText: 'Phenprocoumon',
        correct: null
      },
      {
        answerText: 'Clopidogrel',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure',
        correct: null
      },
      {
        answerText: 'Heparin',
        correct: null
      },
      {
        answerText: 'Abciximab',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher Gerinnungshemmer ist am ehesten durch eine gute orale Bioverfügbarkeit gekennzeichnet?',
    answers: [
      {
        answerText: 'Certoparin',
        correct: null
      },
      {
        answerText: 'EDTA',
        correct: null
      },
      {
        answerText: 'Heparin',
        correct: null
      },
      {
        answerText: 'Hirudin',
        correct: null
      },
      {
        answerText: 'Rivaroxaban',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen zu Antikoagulantien ist am ehesten zutreffend?',
    answers: [
      {
        answerText: 'Clopidogrel antagonisiert die Vitamin K-Wirkung.',
        correct: null
      },
      {
        answerText: 'Die Therapie mit Heparin wird mittels Messung der INR bzw. des Quick-Wertes überwacht.',
        correct: null
      },
      {
        answerText: 'Heparin bildet mit Antithrombin (ATIII) einen Komplex.',
        correct: null
      },
      {
        answerText: 'Die gerinnungshemmende Wirkung von Phenprocoumon kann durch Gabe von Protamin aufgehoben werden.',
        correct: null
      },
      {
        answerText: 'Keine der Aussagen trifft zu.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen zu nicht-steroidalen Antirheumatika (NSAR) ist am ehesten zutreffend?',
    answers: [
      {
        answerText: 'Die meisten NSAR stimulieren die Cyclooxygenasen (COX) 1 und 2.',
        correct: null
      },
      {
        answerText: 'Nach Gabe von Acetylsalicylsäure (ASS) wird die Thromboxansynthese in den Thrombozyten reversibel gehemmt.',
        correct: null
      },
      {
        answerText: 'Prostaglandine hemmen die Produktion und Sekretion von Magenschleim.',
        correct: null
      },
      {
        answerText: 'Die Hemmung der COX 2 führt zur Steigerung der Nierendurchblutung.',
        correct: null
      },
      {
        answerText: 'ASS, Ibuprofen und Diclofenac wirken analgetisch, antipyretisch und antiphlogistisch.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der genannten unerwünschten Wirkungen ist am ehesten bei einer längeren Behandlung mit COX-2-selektiven Cyclooxygenase-Inhibitoren zu erwarten?',
    answers: [
      {
        answerText: 'Eine erhöhte Blutungsneigung durch Hemmung der Plättchen-Aggregation',
        correct: null
      },
      {
        answerText: 'Eine Dehydratation infolge ihrer diuretischen Wirkung und Erhöhung der Natrium-Ausscheidung',
        correct: null
      },
      {
        answerText: 'Ein häufiges Auftreten von Ulcera im Magen-Darmtrakt',
        correct: null
      },
      {
        answerText: 'Ein erhöhtes Auftreten von Myokardinfarkten und Schlaganfällen',
        correct: null
      },
      {
        answerText: 'Eine Atemwegsobstruktion aufgrund eines allergischen Asthmas',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist als Folge einer Glucocorticoidtherapie am wahrscheinlichsten?',
    answers: [
      {
        answerText: 'Hypoglykämie',
        correct: null
      },
      {
        answerText: 'Gewichtsverlust',
        correct: null
      },
      {
        answerText: 'Hüftkopfnekrose',
        correct: null
      },
      {
        answerText: 'Nephrolithiasis',
        correct: null
      },
      {
        answerText: 'Myxödem',
        correct: null
      }
    ]
  },
  {
    questionText: 'In der Behandlung der rheumatoiden Arthritis dienen Laborkontrollen dazu, Kontraindikationen und Nebenwirkungen frühzeitig zu erkennen und eine gefährliche Entwicklung von Organschäden zu verhindern. Man sollte aber auch keine unnötigen Messungen anordnen. Insofern die Frage: Welche der folgenden Paare von Medikamenten und Kontrollmessungen ist dabei AM WENIGSTEN nahe liegend?',
    answers: [
      {
        answerText: 'Methotrexat - Transaminasen',
        correct: null
      },
      {
        answerText: 'Ibuprofen - Serum-Kreatinin',
        correct: null
      },
      {
        answerText: 'Prednisolon - Knochendichte',
        correct: null
      },
      {
        answerText: 'Sulfasalazin - Weißes Blutbild',
        correct: null
      },
      {
        answerText: 'Leflunomid - Gesichtsfeldmessung',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Parasympatholytikum, das in der Therapie von Lungenerkrankungen eingesetzt wird, besitzt aufgrund einer quarternären Stickstoffstruktur eine schlechte enterale Bioverfügbarkeit von unter 10%?',
    answers: [
      {
        answerText: 'Biperiden',
        correct: null
      },
      {
        answerText: 'Ipratropium',
        correct: null
      },
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Scopolamin',
        correct: null
      },
      {
        answerText: 'Promethazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Man hat bei einer 24-jährigen Frau zur Schmerzbekämpfung unter der Geburt eine Epiduralanästhesie durchgeführt. Die ausgewählte Substanz hatte einen langsamen Wirkungseintritt, aber eine längere Wirkungsdauer als die meisten anderen Lokalanästhetika. Unglücklicherweise wurde ein Teil der Substanz intravenös appliziert und hat einen starken Abfall des Blutdruckes und Arrhythmien hervorgerufen. Welche Substanz ist am ehesten verwendet worden?',
    answers: [
      {
        answerText: 'Benzocain',
        correct: null
      },
      {
        answerText: 'Bupivacain',
        correct: null
      },
      {
        answerText: 'Kokain',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Procain',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben eine Ampulle, die in 4 ml Volumen 2% Lidocain enthält. Wie viel Lidocain werden in 1 ml vorhanden sein?',
    answers: [
      {
        answerText: '2 mg',
        correct: null
      },
      {
        answerText: '8 mg',
        correct: null
      },
      {
        answerText: '20 mg',
        correct: null
      },
      {
        answerText: '80 mg',
        correct: null
      },
      {
        answerText: '200 mg',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 55-jährige Frau mit insulinabhängigem Diabetes mellitus Typ I beklagt sich über ein Aufgedunsensein des Darmes und abdominale Beschwerden, besonders nach Mahlzeiten. WeitereUntersuchungen kommen zur Diagnose Diabetische Gastroparese. Welche prokinetische Substanz könnten Sie der Patientin am ehesten verschreiben?',
    answers: [
      {
        answerText: 'Alosetron',
        correct: null
      },
      {
        answerText: 'Cimetidin',
        correct: null
      },
      {
        answerText: 'Loperamid',
        correct: null
      },
      {
        answerText: 'Metoclopramid',
        correct: null
      },
      {
        answerText: 'Sucralfat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 13-jähriger Junge mit Typ I Diabetes wird in die Notaufnahme gebracht. Er klagt überVerwirrtheit. Es werden schnell Labortests durchgeführt. Diese zeigen eine schwere Hyperglykämie, eine Ketoazidose und der pH-Wert des Blutes beträgt 7,15. Welche der folgenden Therapien ist geeignet, schnell bei diesem Jungen eine Wirkung zu entfalten?',
    answers: [
      {
        answerText: 'Normalinsulin',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Insulinglargin',
        correct: null
      },
      {
        answerText: 'NPH-Insulin',
        correct: null
      },
      {
        answerText: 'Acarbose',
        correct: null
      }
    ]
  },
  {
    questionText: 'Frau Schutthoff, 64 Jahre, leidet an Herzinsuffizienz (auch unter Ruhebedingungen). Jetzt wird bei ihr auch noch ein Typ II Diabetes diagnostiziert. Welche Substanz, die in Deutschland noch zugelassen ist, ist am wenigsten geeignet zur Therapie dieser Art des Diabetes bei dieser Frau?',
    answers: [
      {
        answerText: 'Sitagliptin',
        correct: null
      },
      {
        answerText: 'Exenatid',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Repaglinid',
        correct: null
      },
      {
        answerText: 'Pioglitazon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist richtig? Hydrochlorothiazid führt typischerweise zu folgender unerwünschter Wirkung auf den Harnsäure-Spiegel:',
    answers: [
      {
        answerText: 'Hyperkaliämie.',
        correct: null
      },
      {
        answerText: 'Anstieg des Blutdruckes.',
        correct: null
      },
      {
        answerText: 'Hypoglykämie bei diabetischen Patienten.',
        correct: null
      },
      {
        answerText: 'Hypokalziämie.',
        correct: null
      },
      {
        answerText: 'Hyperurikämie.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 35 jähriger Mann wird wegen Lungentuberkulose behandelt. Jetzt kommt er zu Ihnen, weil er plötzlich starke Schmerzen im rechten großen Zeh hat. Sie sehen einen geröteten, geschwollenen Zeh und messen leichtes Fieber. Dieser Befund ist vereinbar mit der Diagnose akuter Gichtanfall. Welches der folgenden Medikamente des Patienten dürfte dafür am ehesten verantwortlich sein?',
    answers: [
      {
        answerText: 'Cycloserin',
        correct: null
      },
      {
        answerText: 'Thiacetazon',
        correct: null
      },
      {
        answerText: 'Pyrazinamid',
        correct: null
      },
      {
        answerText: 'Rifampicin',
        correct: null
      },
      {
        answerText: 'Aminosalicylsäure',
        correct: null
      }
    ]
  },
  {
    questionText: 'Aufgrund ihrer starken bronchokonstriktorischen Wirkung spielen manche Leukotriene eine wichtige Rolle bei der Entstehung von Asthmaanfällen. Welches der angegebenen Enzyme ist (als wichtiges Enzym für die Leukotrien-Biosynthese) Angriffspunkt einer medikamentösen Therapie bei einem Asthma-Mittel?',
    answers: [
      {
        answerText: 'Cyclooxygenase',
        correct: null
      },
      {
        answerText: 'Lipoxygenase',
        correct: null
      },
      {
        answerText: 'Myeloperoxidase',
        correct: null
      },
      {
        answerText: 'NADPH-Oxidase',
        correct: null
      },
      {
        answerText: 'Phospholipase C',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welchen Rezeptor aktiviert Pilocarpin in den Bronchien?',
    answers: [
      {
        answerText: 'M1-Cholinozeptor',
        correct: null
      },
      {
        answerText: 'M2-Cholinozeptor',
        correct: null
      },
      {
        answerText: 'M3-Cholinozeptor',
        correct: null
      },
      {
        answerText: 'M4-Cholinozeptor',
        correct: null
      },
      {
        answerText: 'M5-Cholinozeptor',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Penicillin ist am ehesten zur Behandlung einer Infektion mit beta-Laktamase-bildenden Keimen, z. B. Staphylococcus aureus, geeignet?',
    answers: [
      {
        answerText: 'Amoxicillin',
        correct: null
      },
      {
        answerText: 'Penicillin V',
        correct: null
      },
      {
        answerText: 'Mezlocillin',
        correct: null
      },
      {
        answerText: 'Oxacillin',
        correct: null
      },
      {
        answerText: 'Piperacillin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Wessen Funktion hemmt Metronidazol?',
    answers: [
      {
        answerText: 'Es hemmt die bakterielle Proteinsynthese.',
        correct: null
      },
      {
        answerText: 'Schädigung der DNA.',
        correct: null
      },
      {
        answerText: 'Hemmung der Gyrase.',
        correct: null
      },
      {
        answerText: 'Hemmung der Hydrofolsäurereduktase.',
        correct: null
      },
      {
        answerText: 'Schädigung der bakteriellen Zellwand.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Mann erhält zur Behandlung seiner koronaren Herzkrankheit eine Substanz, die die cGMP-Konzentration in der Zelle erhöht. Was ist die häufigste unerwünschte Nebenwirkung dieser Substanz?',
    answers: [
      {
        answerText: 'Verstopfung',
        correct: null
      },
      {
        answerText: 'Husten',
        correct: null
      },
      {
        answerText: 'Trockener Mund',
        correct: null
      },
      {
        answerText: 'Sedation',
        correct: null
      },
      {
        answerText: 'Kopfschmerzen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein junger Mann leidet an einem paroxysmalen Hypertonus. Er hat erhöhte Konzentrationen von Adrenalin und Noradrenalin-Metaboliten im Blut und benötigt eine Substanz mit langer Wirkungsdauer, um den Blutdruck vor der geplanten Operation zu senken. Welcher Rezeptor-Antagonist kommt am ehesten in Frage?',
    answers: [
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Carvedilol',
        correct: null
      },
      {
        answerText: 'Betaxolol',
        correct: null
      },
      {
        answerText: 'Phenoxybenzamin',
        correct: null
      },
      {
        answerText: 'Phentolamin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was sind typische gefährliche unerwünschte Wirkungen von Spironolacton?',
    answers: [
      {
        answerText: 'Agranulozytose',
        correct: null
      },
      {
        answerText: 'Hirsutismus',
        correct: null
      },
      {
        answerText: 'hypokalämische Alkalose durch tetanische Kontraktionen',
        correct: null
      },
      {
        answerText: 'Hyperkaliämie',
        correct: null
      },
      {
        answerText: 'Diabetes insipidus',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die 58-jährige Frau Reuter wird chronisch medikamentös behandelt, um ventrikuläre Arrhythmien, die hämodynamisch behandlungsbedürftig sind, zu therapieren. Nach zweimonatiger Therapie stellt sie sich wieder bei Ihnen vor und gibt an, immer müde zu sein. Die körperliche Untersuchung zeigt, daß die Herzfrequenz um 10 Schläge/Minute gegenüber dem Zeitpunkt vor der ersten Medikamenten-Einnahme reduziert ist, die Haut ist kühl. Die Labortests zeigen, daß jetzt der Thyroxin-Spiegel erniedrigt und der TSH-Spiegel erhöht ist. Welches Antiarrhythmikum ist wahrscheinlich für diese Symptome verantwortlich?',
    answers: [
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Procainamid',
        correct: null
      },
      {
        answerText: 'Propranolol',
        correct: null
      },
      {
        answerText: 'Chinidin',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Klasse I-Antiarrhythmikum hemmt typischerweise nicht den repolarisierenden Kaliumstrom IK am Herzen und verlängert deshalb nicht die Dauer des Aktionspotentials',
    answers: [
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Sotalol',
        correct: null
      },
      {
        answerText: 'Chinidin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Hohe intravenöse Gaben welches Diuretikums können am ehesten zu Tinnitus, Vertigo und Hörstörungen führen?',
    answers: [
      {
        answerText: 'Spironolacton',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Acetazolamid',
        correct: null
      },
      {
        answerText: 'Mannit',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei dem 60-jährigen Herrn Moritz wird eine vergrößerte Prostata gefunden und erhöhte Tumormarker. Die Magnetresonanztomographie weist auf vergrößerte Lymphknoten im unteren Abdomen hin und die Beckenröntgenaufnahme spricht für Metastasen. Der Patient wird wahrscheinlich behandelt werden mit',
    answers: [
      {
        answerText: 'Anastrozol',
        correct: null
      },
      {
        answerText: 'Desogestrel',
        correct: null
      },
      {
        answerText: 'Flutamid',
        correct: null
      },
      {
        answerText: 'Methyltestosteron',
        correct: null
      },
      {
        answerText: 'Tamoxifen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Zytostatikum ruft typischerweise eine akute hämorrhagische Cystitis hervor?',
    answers: [
      {
        answerText: 'Vincristin',
        correct: null
      },
      {
        answerText: 'Tamoxifen',
        correct: null
      },
      {
        answerText: 'Fluorouracil',
        correct: null
      },
      {
        answerText: 'Doxorubicin',
        correct: null
      },
      {
        answerText: 'Cyclophosphamid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Pharmakon wird in einer Kombinationstherapie zur Behandlung eines testikulären Karzinoms eingesetzt und ist am ehesten mit der Entwicklung einer Nephrotoxizität verbunden?',
    answers: [
      {
        answerText: 'Bleomycin',
        correct: null
      },
      {
        answerText: 'Cisplatin',
        correct: null
      },
      {
        answerText: 'Etoposid',
        correct: null
      },
      {
        answerText: 'Leuprorelin',
        correct: null
      },
      {
        answerText: 'Vinblastin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 23-jähriger Mann hat ein Hodgkin-Lymphom und wird nach dem ABVD Schema (Adramycin®= Doxorubicin, Bleomycin, Vinblastin, Dacarbazin) behandelt. Zusätzlich geben Sie ihm Prednison. Nach dem zweiten Zyklus dieses Schemas entwickelt der Patient eine Dyspnoe, einen unproduktiven Husten und intermittierendes Fieber. Sie machen einen Röntgen-Thoraxaufnahme und sehen pulmonale Infiltrationen. Falls diese Veränderungen durch die o.g. Substanzen hervorgerufen wurden, welche Substanz ist am wahrscheinlichsten?',
    answers: [
      {
        answerText: 'Vinblastin',
        correct: null
      },
      {
        answerText: 'Prednison',
        correct: null
      },
      {
        answerText: 'Doxorubicin',
        correct: null
      },
      {
        answerText: 'Dacarbazin',
        correct: null
      },
      {
        answerText: 'Bleomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Zytostatikum sollte man wegen erhöhter Toxizität am ehesten nicht mit Allopurinol kombinieren?',
    answers: [
      {
        answerText: 'Paclitaxel',
        correct: null
      },
      {
        answerText: 'Vincristin',
        correct: null
      },
      {
        answerText: 'Mercaptopurin',
        correct: null
      },
      {
        answerText: 'Procarbazin',
        correct: null
      },
      {
        answerText: 'Leuprolid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 67-jährige Patientin kommt zu Ihnen mit Schmerzen in ihrem linken Bein. Duplex-Sonographie deutet darauf hin, daß sie an einer tiefen Beinvenenthrombose leidet. Sie entscheiden sich, die Frau mit Enoxaparin zu behandeln. In der nächsten Woche setzen Sie die Patientin auf ein Cumarin-Präparat um und setzen Heparin ab. Zwei Monate später kommt sie zurück mit massivem Nasenbluten. Sie hat einen INR-Wert von 7.0. Um weitere Blutungen zu verhindern, sollten Sie das Cumarin absetzen und stattdessen geben sie am ehesten?',
    answers: [
      {
        answerText: 'Aminocapronsäure',
        correct: null
      },
      {
        answerText: 'Demopressin',
        correct: null
      },
      {
        answerText: 'Faktor VIII',
        correct: null
      },
      {
        answerText: 'Protamin',
        correct: null
      },
      {
        answerText: 'Vitamin K1',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 46- jährige Frau soll nach einer Brustkrebsoperation zytostatisch behandelt werden. Die Chemotherapie besteht aus Cyclophosphamid, Methotrexat, Fluorouracil und Tamoxifen. Welche Substanz sollte zusätzlich zu Cyclophosphamid gegeben werden?',
    answers: [
      {
        answerText: 'Fluphenazin',
        correct: null
      },
      {
        answerText: 'Dexrazoxan',
        correct: null
      },
      {
        answerText: 'Folsäure',
        correct: null
      },
      {
        answerText: 'Mesna',
        correct: null
      },
      {
        answerText: 'Vitamin B6',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben einen Patienten mit Zollinger-Ellison Syndrom als Folge eines Gastrinoms. Mit welcher Substanz würden Sie ihn am besten behandeln?',
    answers: [
      {
        answerText: 'Aprepitant',
        correct: null
      },
      {
        answerText: 'Metoclopramid',
        correct: null
      },
      {
        answerText: 'Omeprazol',
        correct: null
      },
      {
        answerText: 'Ondansetron',
        correct: null
      },
      {
        answerText: 'Ranitidin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Patientin erhält eine Chemotherapie mit einer stark emetogenen Platinverbindung. Welches der folgenden Medikamente würden Sie der Patientin verschreiben, um die Emesis zu unterdrücken?',
    answers: [
      {
        answerText: 'Dimenhydrinat',
        correct: null
      },
      {
        answerText: 'Codein',
        correct: null
      },
      {
        answerText: 'Scopolamin',
        correct: null
      },
      {
        answerText: 'Ondansetron',
        correct: null
      },
      {
        answerText: 'Fluphenazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Einer Patientin wird ein Doxycyclin verschrieben. Vor welchem frei verkäuflichen Antazidum ist sie zu warnen, um eine Arzneimittelinteraktion zu vermeiden, die die Wirksamkeit des Doxycyclin beeinträchtigen könnte?',
    answers: [
      {
        answerText: 'Aluminiumhydroxid',
        correct: null
      },
      {
        answerText: 'Clemastin',
        correct: null
      },
      {
        answerText: 'Loperamid',
        correct: null
      },
      {
        answerText: 'Ibuprofen',
        correct: null
      },
      {
        answerText: 'Paracetamol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein hungriger Wanderer, Herr Segner, hat ihm unbekannte Pilze gegessen. Daraufhin wurde seine Haut rot, sein Mund trocken und er bekam Sehstörungen. Welches der folgenden Antidote, wäre wahrscheinlich die sinnvollste Sofortbehandlung dieses Patienten?',
    answers: [
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Flumazenil',
        correct: null
      },
      {
        answerText: 'Naloxon',
        correct: null
      },
      {
        answerText: 'Physostigmin',
        correct: null
      },
      {
        answerText: 'Pralidoxim',
        correct: null
      }
    ]
  },
  {
    questionText: 'Colchicin verhindert die Ausbildung von',
    answers: [
      {
        answerText: 'Mikrofilamenten',
        correct: null
      },
      {
        answerText: 'Intermediärfilamenten',
        correct: null
      },
      {
        answerText: 'Mikrotubuli',
        correct: null
      },
      {
        answerText: 'Myosinfilamenten',
        correct: null
      },
      {
        answerText: 'kondensierten Chromosomen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Digoxin ist im Stadium II der Herzinsuffizienz nach NYHA auch bei Fehlen von Vorhofflimmern indiziert.',
        correct: null
      },
      {
        answerText: 'Die enterale Digoxin-Resorption steigt bei gleichzeitiger Chinidin-Gabe.',
        correct: null
      },
      {
        answerText: 'Digoxin hemmt den vagalen Tonus.',
        correct: null
      },
      {
        answerText: 'Digoxin erhöht den intrazellulären cAMP-Spiegel in Herzmuskelzellen.',
        correct: null
      },
      {
        answerText: 'Digoxin erhöht die Überleitungsgeschwindigkeit im AV-Knoten.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung nach Vaughan-Williams ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Propranolol ist ein Klasse Ia Antiarrhythmikum.',
        correct: null
      },
      {
        answerText: 'Amiodaron ist ein Klasse III Antiarrhythmikum.',
        correct: null
      },
      {
        answerText: 'Sotatol ist ein Klasse IV Antiarrhythmikum.',
        correct: null
      },
      {
        answerText: 'Flecainid ist ein Klasse II Antiarrhythmikum.',
        correct: null
      },
      {
        answerText: 'Adenosin ist ein Klasse Ib Antiarrhythmikum.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Molsidomin verbessert die Prognose von Patienten mit KHK.',
        correct: null
      },
      {
        answerText: 'Nitrate verbessern die Prognose von Patienten mit KHK.',
        correct: null
      },
      {
        answerText: 'Verapamil kann auch bei Herzinsuffizienz verschrieben werden.',
        correct: null
      },
      {
        answerText: 'Ranolazin kann zur Anfallsprophylaxe bei KHK gegeben werden.',
        correct: null
      },
      {
        answerText: 'Metoprolol kann zur Therapie des akuten Angina-pectoris-Anfalles gegeben werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Amlodipin kann nicht bei Herzinsuffizienz gegeben werden.',
        correct: null
      },
      {
        answerText: 'Verapamil erhöht die Herzfrequenz.',
        correct: null
      },
      {
        answerText: 'Diltiazem wirkt nur kardial.',
        correct: null
      },
      {
        answerText: 'Felodipin kann auch bei Asthma gegeben werden.',
        correct: null
      },
      {
        answerText: 'Gallopamil ist ein Calcium-Antagonist der vierten Generation.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Mannit kann nicht angewandt werden, um die Ausbildung eines Nierenversagens zu verhindern.',
        correct: null
      },
      {
        answerText: 'Mannit kann auch zur Therapie kardial bedingter Ödeme verwendet werden.',
        correct: null
      },
      {
        answerText: 'Sorbit ist ein salinisches Diuretikum.',
        correct: null
      },
      {
        answerText: 'Mannit ist ein sechswertiger Zuckeralkohol.',
        correct: null
      },
      {
        answerText: 'Mannit ist bei der Therapie eines Hirnödems nicht sinnvoll anzuwenden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Bei Herzinsuffizienz ist die Bioverfügbarkeit von Furosemid höher als die von Torasemid',
        correct: null
      },
      {
        answerText: 'Man kann Amilorid gut mit Ramipril kombinieren',
        correct: null
      },
      {
        answerText: 'Amilorid verbessert die Prognose von Patienten mit systolischer chronischer Herzinsuffizienz',
        correct: null
      },
      {
        answerText: 'Die harntreibende Wirkung von schwarzen Tee beruht auf seinem hohen Gehalt an Triamteren',
        correct: null
      },
      {
        answerText: 'Triamteren kann eine Herzrhythmusstörung bedingen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Spironolacton besitzt einen aktiven Metaboliten namens Canrenoat.',
        correct: null
      },
      {
        answerText: 'Spironolacton bewirkt eine Hypokaliämie.',
        correct: null
      },
      {
        answerText: 'Spironolacton sollte nicht mit Ramipril kombiniert werden.',
        correct: null
      },
      {
        answerText: 'Spironolacton hat keine Testosteron-ähnlichen Wirkungen.',
        correct: null
      },
      {
        answerText: 'Spironolacton hat ausschließlich nicht genomisch vermittelte Wirkungen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Die Reaktion von Soforttyp an der Injektionsstelle des Insulins kann durch einen Wechsel des Präparates nicht vermindert werden.',
        correct: null
      },
      {
        answerText: 'Insulin-Antikörper können die Plazentar-Schranke nicht überwinden.',
        correct: null
      },
      {
        answerText: 'Lokale allergische Nebenwirkungen sind bei Insulin-Injektion sehr untypisch.',
        correct: null
      },
      {
        answerText: 'Unter Insulin-Injektionen kann es zu einer Lipodystrophie kommen.',
        correct: null
      },
      {
        answerText: 'Zur Therapie des Coma hyperglycaemicum bietet sich Insulin detemir an.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Eine erhöhte Mortalität von Asthmatikern unter Inhalation von Katecholaminen ist nicht zu beobachten.',
        correct: null
      },
      {
        answerText: 'Chromoglykat kann peroral appliziert werden.',
        correct: null
      },
      {
        answerText: 'Montelukast ist ein Leukotrien-Agonist.',
        correct: null
      },
      {
        answerText: 'Montelukast ist bei Stufe 2 des Asthmas indiziert.',
        correct: null
      },
      {
        answerText: 'Zur Anfallsbehandlung des Asthmas ist Isoprenalin das Mittel der Wahl.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur empirischen Therapie einer nosokomialen Pneumonie empfiehlt sich am ehesten?',
    answers: [
      {
        answerText: 'Penicillin G.',
        correct: null
      },
      {
        answerText: 'Clindamycin.',
        correct: null
      },
      {
        answerText: 'Piperazillin.',
        correct: null
      },
      {
        answerText: 'Tazobactam.',
        correct: null
      },
      {
        answerText: 'Piperacillin plus Tazobactam.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung zwischen Arzneimitteln und unerwünschten Wirkungen trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Protionamid: Sehstörungen.',
        correct: null
      },
      {
        answerText: 'Pyrazinamid: Hepatotoxizität.',
        correct: null
      },
      {
        answerText: 'Rifampicin: grüne Verfärbung des Urins.',
        correct: null
      },
      {
        answerText: 'Ethambutol: Enzyminduktion.',
        correct: null
      },
      {
        answerText: 'Isoniazid: Hyperurikämie.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Wie behandelt man am ehesten Pneumocystis-carinii-Infektionen?',
    answers: [
      {
        answerText: 'Metronidazol.',
        correct: null
      },
      {
        answerText: 'Trimethoprim.',
        correct: null
      },
      {
        answerText: 'Pentamidin.',
        correct: null
      },
      {
        answerText: 'Chloroquin.',
        correct: null
      },
      {
        answerText: 'Primaquin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu?',
    answers: [
      {
        answerText: 'Infliximab ist ein IL-1-Rezeptor-Antagonist.',
        correct: null
      },
      {
        answerText: 'Aurothioglucose kann eine Dermatitis hervorrufen.',
        correct: null
      },
      {
        answerText: 'Chloroquin kann Photosensibilisierungen bedingen.',
        correct: null
      },
      {
        answerText: 'D-Penicillamin kann die Kollagen-Bildung hemmen.',
        correct: null
      },
      {
        answerText: 'Sulfasalazin ist ein Prodrug.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Bei fehlendem Erfolg einer systemischen Glukokortikoidtherapie ist die Injektion eines Glukokortikoids in befallenen Gelenken nicht mehr sinnvoll.',
        correct: null
      },
      {
        answerText: 'Es gibt eine absolute Cushingschwellendosis.',
        correct: null
      },
      {
        answerText: 'Glukokortikoide sind in der Lage, die Expression von Cyclooxygenase 2 zu senken.',
        correct: null
      },
      {
        answerText: 'Glukokortikoide haben keine psychischen Wirkungen.',
        correct: null
      },
      {
        answerText: 'Glukokortikoide können keine Osteoporose bewirken.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu?',
    answers: [
      {
        answerText: 'Rifampicin senkt die Hepatotoxizität von Paracetamol.',
        correct: null
      },
      {
        answerText: 'Celecoxib kann einen Hypertonus bedingen.',
        correct: null
      },
      {
        answerText: 'Etoricoxib steigert den Östrogenabbau.',
        correct: null
      },
      {
        answerText: 'Ein Antidot bei Paracetamol-Vergiftungen wäre Benserazid.',
        correct: null
      },
      {
        answerText: 'Celecoxib hemmt COX 1 stärker als COX 2.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der genannten unerwünschten Wirkungen ist bei einer längeren Behandlung mit COX-2-selektiven Cyclooxygenase-Inhibitoren (Coxiben) zu erwarten?',
    answers: [
      {
        answerText: 'Eine erhöhte Blutungsneigung durch Hemmung der Plättchen-Aggregation.',
        correct: null
      },
      {
        answerText: 'Eine Dehydratation infolge ihrer diuretischen Wirkung und Erhöhung der Natrium-Ausscheidung.',
        correct: null
      },
      {
        answerText: 'Ein häufiges Auftreten von Ulcera im Magen-Darmtrakt.',
        correct: null
      },
      {
        answerText: 'Ein erhöhtes Auftreten von Myokardinfarkten und Schlaganfällen.',
        correct: null
      },
      {
        answerText: 'Eine Atemwegsobstruktion aufgrund eines allergischen Asthmas.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Rituximab: progressive multifokale Leukoenzephalopathie.',
        correct: null
      },
      {
        answerText: 'Trastuzumab: Herzinsuffizienz.',
        correct: null
      },
      {
        answerText: 'Interferon alpha: anorektische Veränderungen.',
        correct: null
      },
      {
        answerText: 'Alemtuzumab: Infektanfälligkeit v.a. gegenüber Viren.',
        correct: null
      },
      {
        answerText: 'Interleukin-2: Hypertonus.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Eine Tumoranämie kann mit Erythropoetin behandelt werden.',
        correct: null
      },
      {
        answerText: 'Metoclopramid ist als Antiemetikum bei Zytostatika-induziertem Erbrechen unwirksam.',
        correct: null
      },
      {
        answerText: 'Filgrastin steht im Verdacht, die Proliferation von Zellen zu fördern.',
        correct: null
      },
      {
        answerText: 'Ondansetron kann Obstipationen bedingen.',
        correct: null
      },
      {
        answerText: 'Dexamethason kann die Wirkung von Antiemetika steigern.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Dabigatran hemmt den Faktor X.',
        correct: null
      },
      {
        answerText: 'Kommt es unter der Therapie mit Heparin zu Thrombozytopenie, so wird Dosis von Heparin verdoppelt.',
        correct: null
      },
      {
        answerText: 'HIT I ist gefährlicher als HIT II.',
        correct: null
      },
      {
        answerText: 'Heparin-bedingter Haarausfall ist meist reversibel.',
        correct: null
      },
      {
        answerText: 'Heparin kann keine Osteoporose bewirken.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Keine Indikation für Phenprocoumon ist?',
    answers: [
      {
        answerText: 'Verhütung von Thrombose bei Vorhofflimmern.',
        correct: null
      },
      {
        answerText: 'Verhütung von Embolien bei Vorhofflimmern.',
        correct: null
      },
      {
        answerText: 'Rezidivprophylaxe bei Herzinfarkt.',
        correct: null
      },
      {
        answerText: 'Verhütung von Thrombosen in der Schwangerschaft.',
        correct: null
      },
      {
        answerText: 'Behandlung hämorrhagischer Hautnekrosen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Thiamazol?',
    answers: [
      {
        answerText: 'Hemmung der Peroxidase',
        correct: null
      },
      {
        answerText: 'Erhöhung der Umwandlung von T3 zu T4',
        correct: null
      },
      {
        answerText: 'Hemmung der Aufnahme von Jodid in die Schilddrüse',
        correct: null
      },
      {
        answerText: 'Senkung der Dichte von Beta-Rezeptoren',
        correct: null
      },
      {
        answerText: 'Verkürzung der Halbwertszeit von T3',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage für Thyroxin trifft zu?',
    answers: [
      {
        answerText: 'Die Wirkung von Thyroxin (T4) tritt langsamer ein als die von T3.',
        correct: null
      },
      {
        answerText: 'Es bedingt typischerweise eine Bradykardie.',
        correct: null
      },
      {
        answerText: 'Die Halbwertszeit beträgt 1-2 Tage.',
        correct: null
      },
      {
        answerText: 'Es wirkt über Rezeptoren in der äußeren Zellmembran.',
        correct: null
      },
      {
        answerText: 'Es hemmt den Natrium-Jodid-Kotransport in Schilddrüsenzellen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Arzneimittel besitzt aufgrund einer quarternären Stickstoffstruktur eine schlechte enterale Bioverfügbarkeit von unter 10%?',
    answers: [
      {
        answerText: 'Biperiden',
        correct: null
      },
      {
        answerText: 'Ipratropium',
        correct: null
      },
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Scopolamin',
        correct: null
      },
      {
        answerText: 'Promethazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Kind wiegt 35 Kilogramm. Es leidet an einer angeborenen Herzerkrankung und es besteht die Notwendigkeit einer sofortigen antiarrhythmischen Therapie mit Procainamid. Sie finden im Lehrbuch folgende pharmakokinetische Daten für Procainamid. Für eine 70 Kilogramm wiegende Person ist das Verteilungsvolumen 130 Liter, die Clearance 36 Liter/Stunde, die perorale Bioverfügbarkeit 83% und die therapeutische Konzentration 5 mg/Liter. Welche konstante intravenöse Perfusionsrate müßten Sie dem Kind geben, um eine therapeutische Konzentration von etwa 5 mg/Liter über längere Zeit zu erhalten?',
    answers: [
      {
        answerText: '90 mg/Stunde',
        correct: null
      },
      {
        answerText: '108 mg/Stunde',
        correct: null
      },
      {
        answerText: '180 mg/Stunde',
        correct: null
      },
      {
        answerText: '217 mg/Stunde',
        correct: null
      },
      {
        answerText: '650 mg/Stunde',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Kind wiegt 35 Kilogramm. Es leidet an einer angeborenen Herzerkrankung und es besteht die Notwendigkeit einer sofortigen antiarrhythmischen Therapie mit Procainamid. Sie finden im Lehrbuch folgende pharmakokinetische Daten für Procainamid. Für eine 70 Kilogramm wiegende Person ist das Verteilungsvolumen 130l, die Clearance 36l/h, die perorale Bioverfügbarkeit 83% und die therapeutische Konzentration 5mg/l. Was ist die errechnete Halbwertszeit für Procainamid bei diesem Kind?',
    answers: [
      {
        answerText: '2,1 Stunde',
        correct: null
      },
      {
        answerText: '2,5 Stunde',
        correct: null
      },
      {
        answerText: '3,6 Stunde',
        correct: null
      },
      {
        answerText: '5 Stunde',
        correct: null
      },
      {
        answerText: '10 Stunde',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zum Metabolismus ist richtig?',
    answers: [
      {
        answerText: 'Die analgetische Wirkung von Codein beruht auf seiner Umwandlung zu Methadon.',
        correct: null
      },
      {
        answerText: 'Erhöhte Aktivität von der Pseudocholinesterase kann der Grund für eine verlängerte muskelrelaxierende Wirkung von Succinylcholin (Suxamethonium) sein.',
        correct: null
      },
      {
        answerText: 'Langsame Metabolisierer haben unter Isoniazid seltener eine Hepatitis als Schnell-Metabolisier.',
        correct: null
      },
      {
        answerText: 'Der Metabolismus von Morphin führt zur Bildung von aktiven Metaboliten.',
        correct: null
      },
      {
        answerText: 'Rifampicin führt typischerweise zu einer Hemmung von Cytochrom P450-Isoenzymen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zu Ihnen kommt ein 45-jähriger Mann, der sich einer Chemotherapie unterziehen muß, weil er an einem Hirntumor leidet. Welches ist das Antiemetikum der Wahl?',
    answers: [
      {
        answerText: 'Bromocriptin',
        correct: null
      },
      {
        answerText: 'Ergotamin',
        correct: null
      },
      {
        answerText: 'Ibuprofen',
        correct: null
      },
      {
        answerText: 'Ondansetron',
        correct: null
      },
      {
        answerText: 'Sumatriptan',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Patientin hat sich einer Mastektomie wegen Brustkrebs unterzogen und erhält zur Zeit eine Chemotherapie. Dies umfaßt Cyclophosphamid, Methotrexat, Flucytosin und Tamoxifen. Ein bekanntes Problem ist bei dieser Patientin eine durch Cyclosphosphamid hervorgerufene hämorrhagische Cystitis. Durch welches Medikament kann man die Patientin am besten davor schützen?',
    answers: [
      {
        answerText: 'Aldesleukin',
        correct: null
      },
      {
        answerText: 'Desrazosan',
        correct: null
      },
      {
        answerText: 'Folinsäure (Leucovorin®)',
        correct: null
      },
      {
        answerText: 'Mesna',
        correct: null
      },
      {
        answerText: 'Vitamin B6',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die Tumorzellen einer Patientin mit Brustkrebs haben eine Mutation, so daß die dort enthaltene Thymidinsynthase zytostatikaresistent ist. Welches Medikament wäre dann wahrscheinlich unwirksam?',
    answers: [
      {
        answerText: 'Cyclophosphamid',
        correct: null
      },
      {
        answerText: 'Fluouracil',
        correct: null
      },
      {
        answerText: 'Methothrexat',
        correct: null
      },
      {
        answerText: 'Tamoxifen',
        correct: null
      },
      {
        answerText: 'Etoposid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was sind am ehesten typische unerwünschte Wirkungen von Carbimazol?',
    answers: [
      {
        answerText: 'Tachykardie',
        correct: null
      },
      {
        answerText: 'Hypertonus',
        correct: null
      },
      {
        answerText: 'Skelettmuskeltremor',
        correct: null
      },
      {
        answerText: 'Agranulozytose',
        correct: null
      },
      {
        answerText: 'Obstipation',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient leidet an einem bekannten Diabetes mellitus Typ 2. Ihm wird ein peroral wirkendes Medikament verschrieben. Als Folge davon entwickelt er folgende Symptome: Schwitzen, Herzrhythmusstörungen, Muskeltremor, Mißempfindungen an den Lippen und den Handflächen. Welche der folgenden Substanzen ist am wahrscheinlichsten für die Symptome verantwortlich?',
    answers: [
      {
        answerText: 'Acarbose',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Prednison',
        correct: null
      },
      {
        answerText: 'Metformin',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist die Therapie der Wahl bei einem Patienten mit Typ 2 Diabetes und Übergewicht bei normaler Leber- und Nierenfunktion?',
    answers: [
      {
        answerText: 'Insulin',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Acarbose',
        correct: null
      },
      {
        answerText: 'Metformin',
        correct: null
      },
      {
        answerText: 'Rosiglitazon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Glibenclamid?',
    answers: [
      {
        answerText: 'Hemmung der hepatischen Glykoneogenese.',
        correct: null
      },
      {
        answerText: 'Zunahme der Sensistivität von peripheren Gewebe für Insulin',
        correct: null
      },
      {
        answerText: 'Hemmung der intestinalen Aufnahme von Glukose',
        correct: null
      },
      {
        answerText: 'Stimulierung der Insulinfreisetzung aus β-Zellen des Pankreas',
        correct: null
      },
      {
        answerText: 'Hemmung des Abbaus der Inkretine GLP1 und GIP',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was sind die wichtigsten unerwünschten Wirkungen der Glukosidaseinhibitoren?',
    answers: [
      {
        answerText: 'exzessive Hypoglykämie',
        correct: null
      },
      {
        answerText: 'Blähungen',
        correct: null
      },
      {
        answerText: 'Lebertoxizität',
        correct: null
      },
      {
        answerText: 'Herzinsuffizienz',
        correct: null
      },
      {
        answerText: 'Lactazidose',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung zwischen Medikament und unerwünschter Wirkung ist am besten?',
    answers: [
      {
        answerText: 'Ethambutol - Hepatitis',
        correct: null
      },
      {
        answerText: 'Isoniazid – Einschränkung des Visus und Einschränkung der Farbdiskrimination',
        correct: null
      },
      {
        answerText: 'Pyrazinamid - Hyperurikämie',
        correct: null
      },
      {
        answerText: 'Rifampicin - Ototoxiozität',
        correct: null
      },
      {
        answerText: 'Streptomycin – Induktion von Cytochrom P450-Enzymen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Amoxicillin wirkt über Hemmung der DNA-abhängigen RNA Polymerase',
        correct: null
      },
      {
        answerText: 'Gentamicin hemmt die Aminoacyl tRNA Anlagerung',
        correct: null
      },
      {
        answerText: 'Cefuroximaxetil hemmt die Peptidtransferase',
        correct: null
      },
      {
        answerText: 'Azithromycin hemmt die ribosomale Proteinsynthese',
        correct: null
      },
      {
        answerText: 'Vancomycin erlaubt die Anlagerung falscher Aminoacyl-tRNAs',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einem Patienten, der sich vor Influenza A und B schützen will, ist eine Impfung kontraindiziert. Welche Substanzen könnten Sie prophylaktisch geben?',
    answers: [
      {
        answerText: 'Amantadin',
        correct: null
      },
      {
        answerText: 'Foscarnet',
        correct: null
      },
      {
        answerText: 'Ozeltamivir',
        correct: null
      },
      {
        answerText: 'Ribavirin',
        correct: null
      },
      {
        answerText: 'Vanaciclovir',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung ist am ehesten zutreffend?',
    answers: [
      {
        answerText: 'Didanosin – Hämolyse bei Patienten mit Glukose-6-Phosphatdehydrogenasemangel',
        correct: null
      },
      {
        answerText: 'Dronabinol - Knochenmarksdepression',
        correct: null
      },
      {
        answerText: 'Ritonavir – Hemmung von Cytochrom P450-Enzymen',
        correct: null
      },
      {
        answerText: 'Trimethorpin und Sulfamethoxozol - Pankreatitis',
        correct: null
      },
      {
        answerText: 'Zidovudin – Gynäkomastie',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Voriconazol?',
    answers: [
      {
        answerText: 'Einlagerung mit Ergosterin in die Wand und damit Porenbildung',
        correct: null
      },
      {
        answerText: 'Hemmung des Cytochrom P450-Systems',
        correct: null
      },
      {
        answerText: 'Hemmung der Zellwandsynthese',
        correct: null
      },
      {
        answerText: 'Spindelgift',
        correct: null
      },
      {
        answerText: 'Antimetabolit',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Camper ist im Wald hungrig gewesen und hat einen Pilz gegessen, der atropinähnliche Substanzen enthält. Was ist die beste Therapie für diesen Camper?',
    answers: [
      {
        answerText: 'Haloperidol',
        correct: null
      },
      {
        answerText: 'Flumazenil',
        correct: null
      },
      {
        answerText: 'Naloxon',
        correct: null
      },
      {
        answerText: 'Physostigmin',
        correct: null
      },
      {
        answerText: 'Pralidoxin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Zuordnung zwischen Substanz und unerwünschter Wirkung ist richtig?',
    answers: [
      {
        answerText: 'Salmeterol - Tremor und Tachykardie',
        correct: null
      },
      {
        answerText: 'Montelucast - Heiserkeit',
        correct: null
      },
      {
        answerText: 'inhalierte Steroide - Kopfschmerzen',
        correct: null
      },
      {
        answerText: 'Theophyllin – destabilisiert die Mastzellen',
        correct: null
      },
      {
        answerText: 'Cromoglycinsäure – kardiale Arrhythmien',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu?Die Antagonisierung der Wirkung von Pancuronium erfolgt am ehesten durch:',
    answers: [
      {
        answerText: 'Neostigmin',
        correct: null
      },
      {
        answerText: 'Bethanechol',
        correct: null
      },
      {
        answerText: 'Naloxon',
        correct: null
      },
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Biperiden',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Famicyclovir?',
    answers: [
      {
        answerText: 'Es hemmt die Absorption des Virus auf die zu infizierende Zelle.',
        correct: null
      },
      {
        answerText: 'Es hemmt das Un-Coating des Virus.',
        correct: null
      },
      {
        answerText: 'Es hemmt die Virusprotease.',
        correct: null
      },
      {
        answerText: 'Es hemmt die Virusneuraminidase.',
        correct: null
      },
      {
        answerText: 'Es hemmt die Thymidinkinase.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Metronidazol?',
    answers: [
      {
        answerText: 'Es hemmt die bakterielle Proteinsynthese.',
        correct: null
      },
      {
        answerText: 'Schädigung der DNA.',
        correct: null
      },
      {
        answerText: 'Hemmung der Gyrase.',
        correct: null
      },
      {
        answerText: 'Hemmung der Hydrofolsäurereduktase.',
        correct: null
      },
      {
        answerText: 'Schädigung der bakteriellen Zellwand.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Penicillin G?',
    answers: [
      {
        answerText: 'Es hemmt die bakterielle Proteinsynthese.',
        correct: null
      },
      {
        answerText: 'Schädigung der DNA.',
        correct: null
      },
      {
        answerText: 'Hemmung der Gyrase.',
        correct: null
      },
      {
        answerText: 'Hemmung der Hydrofolsäurereduktase.',
        correct: null
      },
      {
        answerText: 'Schädigung der bakteriellen Zellwand.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches dieser Antihypertensiva kann die Plasma –Kalzium-ionen Konzentration am ehesten erhöhen?',
    answers: [
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Ramipril',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Prazosin',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung zwischen Substanz und Wirkungsmechanismus trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Unfraktioniertes Heparin hemmt Gerinnungsfaktor II',
        correct: null
      },
      {
        answerText: 'Fondaparinux hemmt den Faktor Xa',
        correct: null
      },
      {
        answerText: 'Bivalirudin hemmt Faktor X',
        correct: null
      },
      {
        answerText: 'Rivaroxaban hemmt direkt Thrombin',
        correct: null
      },
      {
        answerText: 'Phenprocoumon wirkt über Antithrombin III',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Substanzen ist am ehesten ein sogenanntes Klasse III (nach Vaughn Williams) Antiarrhythmikum und verlängert deshalb die QT Zeit im EKG?',
    answers: [
      {
        answerText: 'Flecainid',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      },
      {
        answerText: 'Ajmalin',
        correct: null
      },
      {
        answerText: 'Vernakalant',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Aliskiren besitzt eine über 90 %ige Bioverfügbarkeit',
        correct: null
      },
      {
        answerText: 'Omapatrilat ist ein reiner ACE-Hemmer',
        correct: null
      },
      {
        answerText: 'Losartan hat einen aktiven Metaboliten',
        correct: null
      },
      {
        answerText: 'Captopril hat eine längere Halbwertszeit als Ramipril',
        correct: null
      },
      {
        answerText: 'Ramipril kann eine Hypokaliämie bedingen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu',
    answers: [
      {
        answerText: 'Nitrate wirken über cAMP Erhöhung.',
        correct: null
      },
      {
        answerText: 'Nitroglycerin ist perkutan nicht wirksam.',
        correct: null
      },
      {
        answerText: 'Molsidomin zeigt eine starke Toleranzentwicklung.',
        correct: null
      },
      {
        answerText: 'Nitrate bedingen eine reflektorische Bradykardie.',
        correct: null
      },
      {
        answerText: 'Nitrate sind Prodrugs.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 31-jähriger Patient kommt zu Ihnen in die Notaufnahme mit Herzrhythmusstörungen. Sie schreiben ein EKG und sehen anfangs einen Sinusrhythmus mit kurzen PR-Intervallen. Danach entwickelt er supraventrikuläre Tachykardien. Sie spritzen Diltiazem und er entwickelt ventrikuläre Tachykardien. Der Patient ist hämodynamisch stabil. Was ist die beste initiale pharmakologische Therapie?',
    answers: [
      {
        answerText: 'Verapamil',
        correct: null
      },
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'Adenosin',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 65-jährige Frau kommt in Ihre Ambulanz und beklagt sich über Teerstühle. Sie fühlt sich in letzter Zeit schwach. Sie untersuchen den Stuhl auf Blut und der Test ist stark positiv. Der Hämoglobingehalt ist 8 g/dl, wobei der Normalbereich in Ihrem Labor zwischen 12 g/dl und 14 g/dl liegt. Anamnestisch finden Sie heraus, daß die Frau seit 15 Jahren an einer rheumatoiden Arthritis leidet. Ihr Rheumatologe hat sie mit gutem Erfolg mit Acetylsalicylsäure behandelt. Ihre Diagnose ist somit: gastrointestinale Blutungen aufgrund einer Behandlung mit nicht-steroidalen Antiphlogistika. Sie wollen die Patientin auf ein anderes Medikament zur Behandlung der rheumatoiden Arthritis umstellen, das mit einem geringeren Blutungsrisiko verbunden ist. Welches Medikament ist am ehesten geeignet?',
    answers: [
      {
        answerText: 'Diclofenac',
        correct: null
      },
      {
        answerText: 'Ibuprofen',
        correct: null
      },
      {
        answerText: 'Ketoprofen',
        correct: null
      },
      {
        answerText: 'Naproxen',
        correct: null
      },
      {
        answerText: 'Celecoxib',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Patientin wird seit Jahren wegen Morbus Hodgkin behandelt. Jetzt kommt sie zur Aufnahme, weil sie eine durch Cryptococcus neoformans-bedingte Pilzmeningitis hat. Welche Aussage stimmt bei dieser Patientin am ehesten?',
    answers: [
      {
        answerText: 'Die Cryptokokkenmeningitis spricht gut auf intrathekales Ribavirin an.',
        correct: null
      },
      {
        answerText: 'Die Behandlung der Wahl ist mit oralem Fluzytosin.',
        correct: null
      },
      {
        answerText: 'Die Behandlung der Wahl ist orales Fluconazol.',
        correct: null
      },
      {
        answerText: 'Die beste Behandlung ist Ketoconazol mit Amphotericin B.',
        correct: null
      },
      {
        answerText: 'Die beste Behandlung ist intrathekales Terfenadin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu?',
    answers: [
      {
        answerText: 'Nach Pethidin-Gabe kann es zu Krampfanfällen kommen.',
        correct: null
      },
      {
        answerText: 'Durch Polymorphismen kann Codein analgetisch unwirksam sein.',
        correct: null
      },
      {
        answerText: 'Die Halbwertszeit von Morphin beträgt etwa 12 Stunden.',
        correct: null
      },
      {
        answerText: 'Fentanylpflaster gehen nicht mit der Gefahr einer Atemdepression einher.',
        correct: null
      },
      {
        answerText: 'Buprenorphin-Vergiftungen lassen sich leicht mit Naloxon behandeln.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussagen zu Heparin treffen am ehesten zu?',
    answers: [
      {
        answerText: 'Unfraktioniertes Heparin ist auch in Abwesenheit von Antithrombin wirksam.',
        correct: null
      },
      {
        answerText: 'Niedermolekulares Heparin muß bei Niereninsuffizienz höher dosiert werden.',
        correct: null
      },
      {
        answerText: 'Fondaparinux hat keinen Effekt auf die PTT.',
        correct: null
      },
      {
        answerText: 'Allergische Reaktionen sind nicht beobachtet worden.',
        correct: null
      },
      {
        answerText: 'Die Wirkungen von Fondaparinux kann man gut mit Protamin antagonisieren.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig? Typische Nebenwirkungen von Moxifloxacin sind:',
    answers: [
      {
        answerText: 'Dupuytrensche Kontraktur',
        correct: null
      },
      {
        answerText: 'Agranulozytose',
        correct: null
      },
      {
        answerText: 'Verlängerung des QT-Intervalles',
        correct: null
      },
      {
        answerText: 'Bradykardie',
        correct: null
      },
      {
        answerText: 'Störung des Rot-Grün-Sehens',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie behandeln Herrn Müller seit zwei Wochen aufgrund einer Psychose mit Haloperidol und Clonazepam. Bei der Visite stellt sich der Patient jetzt als fiebrig vor, mit Krämpfen u.a. des rechten Beines und er ist kaum ansprechbar. Wie behandeln Sie am ehesten Herrn Müller?',
    answers: [
      {
        answerText: 'Dosis von Haloperidol erhöhen',
        correct: null
      },
      {
        answerText: 'Gabe von Biperiden',
        correct: null
      },
      {
        answerText: 'Gabe von Quetiapin',
        correct: null
      },
      {
        answerText: 'Gabe von Dantrolen',
        correct: null
      },
      {
        answerText: 'Gabe von Clozapin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 68-jähriger Mann stellt sich vor mit Rückenschmerzen als Folge eines metastasierenden Prostatakarzinoms. Das Röntgenbild zeigt große Läsionen in der Nähe des Rückenmarkes, ohne daß diese schon komprimiert würde. Was ist die beste initiale Therapie?',
    answers: [
      {
        answerText: 'Flutamid',
        correct: null
      },
      {
        answerText: 'Leuprolid',
        correct: null
      },
      {
        answerText: 'Ketoconazol',
        correct: null
      },
      {
        answerText: 'Orchektomie',
        correct: null
      },
      {
        answerText: 'Doxorubicin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Tranylcypromin darf ohne Bedenken mit Katecholaminen kombinieren',
        correct: null
      },
      {
        answerText: 'Reboxetin bedingt eine Hypersomnie.',
        correct: null
      },
      {
        answerText: 'Das Serotonin-Syndrom behandelt man mit Tropisetron.',
        correct: null
      },
      {
        answerText: 'Citralopram kann ohne Bedenken plötzlich abgesetzt werden.',
        correct: null
      },
      {
        answerText: 'Amitryptilin kann Herzrhythmusstörungen hervorrufen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Therapie mit Clonidin führt zu Schlaflosigkeit.',
        correct: null
      },
      {
        answerText: 'Therapie mit Clonidin führt für Hypersalivation.',
        correct: null
      },
      {
        answerText: 'Clonidin bei ambulanter Therapie muß mit Torasemid kombiniert werden.',
        correct: null
      },
      {
        answerText: 'Clonidin ist Therapie der ersten Wahl bei Hypertonus.',
        correct: null
      },
      {
        answerText: 'Clonidin ist ungeeignet zur Therapie eines Opiatentzugs.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu?',
    answers: [
      {
        answerText: 'Methotrexat sollte nicht mit Folinsäure kombiniert werden.',
        correct: null
      },
      {
        answerText: 'Granulocyten-stimulierende Faktoren können keine Leukämie verschlechtern',
        correct: null
      },
      {
        answerText: 'Mesna sollte nicht mit Cyclosphoshamid kombiniert werden',
        correct: null
      },
      {
        answerText: 'Cisplation bedingt häufig Erbrechen.',
        correct: null
      },
      {
        answerText: 'Busulfan sollte zur Knochenmarkstransplantation nicht eingesetzt werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur Therapie eines Migräneanfalls sind heutzutage am wenigsten geeignet',
    answers: [
      {
        answerText: 'peroral Acetylsalicylsäure',
        correct: null
      },
      {
        answerText: 'peroral Ibuprofen',
        correct: null
      },
      {
        answerText: 'peroral Paracetamol',
        correct: null
      },
      {
        answerText: 'peroral Sumatriptan',
        correct: null
      },
      {
        answerText: 'rektal Sumatriptan',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches ist die Behandlungsmaßnahme bei einer schweren Vergiftung mit Digitoxin ist am wenigsten geeignet?',
    answers: [
      {
        answerText: 'Infusion von K+-Ionen zur Verdrängung von Digitoxin an der Na+/K+-ATPase',
        correct: null
      },
      {
        answerText: 'Gabe von Aktivkohle zur Entfernung von Digitoxin aus dem Darm',
        correct: null
      },
      {
        answerText: 'Forcierte Diurese zur beschleunigten renalen Elimination von Digitoxin',
        correct: null
      },
      {
        answerText: 'Injektion von Digitoxin-bindenden Antikörperfragmenten zur spezifischen Bindung von Digoxin',
        correct: null
      },
      {
        answerText: 'Orale Zufuhr von Cholestyramin zur Unterbrechung des enterohepatischen Kreislaufs von Digitoxin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten nicht zu?Beurteilen Sie die Zuordnung typischer unerwünschter Wirkungen:',
    answers: [
      {
        answerText: 'Clonidin - Mundtrockenheit',
        correct: null
      },
      {
        answerText: 'Nifedipin - Knöchelödeme',
        correct: null
      },
      {
        answerText: 'Enalapril - Husten',
        correct: null
      },
      {
        answerText: 'Chlorthalidon - Hypourikämie',
        correct: null
      },
      {
        answerText: 'Minoxidil - Hypertrichose',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?bewirken',
    answers: [
      {
        answerText: 'Diazepam 10 mg intravenös kann nicht zur tödlichen Atemlähmung führen.',
        correct: null
      },
      {
        answerText: 'Nach Gabe von Flunitrazepam abends ist die Fahrtüchtigkeit am Morgen nicht eingeschränkt',
        correct: null
      },
      {
        answerText: 'Benzodiazepine stehen nicht im Verdacht eine anterograde Amnesie zu',
        correct: null
      },
      {
        answerText: 'Benzodiazepin sollten in der Regel mindestens für vier Wochen verschreiben werden',
        correct: null
      },
      {
        answerText: 'Benzodiazepine können nach Gabe bei der Mutter Entzugserscheinungen beim Neugeborenen hervorrufen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Metformin kann die Lebenserwartung von Diabetikern erhöhen',
        correct: null
      },
      {
        answerText: 'Metformin senkt das Körpergewicht',
        correct: null
      },
      {
        answerText: 'Sitagliptin bedingt keine Hypoglykämie',
        correct: null
      },
      {
        answerText: 'Rosiglitazon ist bei Herzinsuffizienz kontraindiziert',
        correct: null
      },
      {
        answerText: 'Mit Glucagon kann man eine Glimepirid bedingte Hypoglykämie nicht behandeln',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ordnen Sie den aufgeführten Notfallindikationen (anaphylaktischer Schock) den zur raschen Notfalltherapie geeigneten Arzneistoff der 1. Wahl zu:',
    answers: [
      {
        answerText: 'Adrenalin',
        correct: null
      },
      {
        answerText: 'Theophyllin',
        correct: null
      },
      {
        answerText: 'Lidocain',
        correct: null
      },
      {
        answerText: 'hochdosiert Prednisolon',
        correct: null
      },
      {
        answerText: 'Amiodaron',
        correct: null
      }
    ]
  },
  {
    questionText: 'In der Notaufnahme sehen Sie Herrn Meyer, einen allein lebenden 80 jährigen Patienten, von dem Sie wissen, er hat Typ II Diabetes mellitus. Herr Meyer ist jetzt komatös. Sie haben keine Teststreifen, Ihr Notfall-Labor kann Ihnen den Blutglukose Wert erst in einer Stunde messen. Was ist am ehesten zu geben?',
    answers: [
      {
        answerText: 'Adrenalin',
        correct: null
      },
      {
        answerText: 'Glibenclamid intravenös',
        correct: null
      },
      {
        answerText: 'Insulin',
        correct: null
      },
      {
        answerText: 'Glukose peroral',
        correct: null
      },
      {
        answerText: 'Glukose intravenös',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Lidocain verbreitert das QRS-Intervall.',
        correct: null
      },
      {
        answerText: 'Adenosin wirkt über Gi-Proteine.',
        correct: null
      },
      {
        answerText: 'Dronedaron ist bei Herzinsuffizienz kontraindiziert.',
        correct: null
      },
      {
        answerText: 'Amiodaron bewirkt keine Hypothyreose.',
        correct: null
      },
      {
        answerText: 'Propafenon ist bei Zustand nach Myokardinfarkt kontraindiziert.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Medikament ist bei einem Patienten mit chronischer stabiler Angina pectoris am wenigsten indiziert?',
    answers: [
      {
        answerText: 'Atorvastatin',
        correct: null
      },
      {
        answerText: 'Azetylsalicylsäure',
        correct: null
      },
      {
        answerText: 'Molsidomin',
        correct: null
      },
      {
        answerText: 'Ivabradin',
        correct: null
      },
      {
        answerText: 'Ramipril',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 47-jähriger Mann kommt mit einem Myokardinfarkt zur stationären Aufnahme. Da das akute Ereignis erst zwei Stunden zurückliegt, wird eine Lysetherapie eingeleitet. Am 5. Tag fällt eine schwere Thrombozytopenie auf (unter 50 % des Ausgangswerts). Welches der unten genannten bei diesem Patienten eingesetzten Arzneimittel ist am ehesten hierfür verantwortlich?',
    answers: [
      {
        answerText: 'Morphin',
        correct: null
      },
      {
        answerText: 'Streptokinase',
        correct: null
      },
      {
        answerText: 'Heparin',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure',
        correct: null
      },
      {
        answerText: 'Glyceroltrinitrat',
        correct: null
      }
    ]
  },
  {
    questionText: 'Für die Kombinationsbehandlung der systolischen chronischen Herzinsuffizienz ist am wenigsten geeignet:',
    answers: [
      {
        answerText: 'Aliskiren',
        correct: null
      },
      {
        answerText: 'Spironolacton',
        correct: null
      },
      {
        answerText: 'Captopril',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Torasemid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am ehesten zu?',
    answers: [
      {
        answerText: 'Phenytoin erhöht die Wirksamkeit von Phenprocoumon.',
        correct: null
      },
      {
        answerText: 'Cephalopsorine vermindern die Wirksamkeit von Phenprocoumon.',
        correct: null
      },
      {
        answerText: 'Für Rivaroxaban steht kein Antidot zur Verfügung.',
        correct: null
      },
      {
        answerText: 'Argatroban ist für die Therapie von HIT nicht geeignet.',
        correct: null
      },
      {
        answerText: 'Bivalirudin sollte nicht bei perkutaner Koronar-Intervention gegeben werden',
        correct: null
      }
    ]
  },
  {
    questionText: 'Für den Einsatz von Antiepileptika gilt am ehesten:',
    answers: [
      {
        answerText: 'Phenytoin ist zur Therapie von Absencen geeignet.',
        correct: null
      },
      {
        answerText: 'Diazepam ist zur Dauertherapie von fokalen Anfällen geeignet.',
        correct: null
      },
      {
        answerText: 'Topiramit kann eine Gewichtszunahme bedingen.',
        correct: null
      },
      {
        answerText: 'Vigabatrin bewirkt typischerweise Gesichtsfelddefekte',
        correct: null
      },
      {
        answerText: 'Ethosuximid ist zur Therapie von Absencen typischerweise ungeeignet',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei welchem der folgenden Arzneistoffe ist – im Rahmen der Therapie – das Risiko am größten, daß stark ausgeprägte extrapyramidal-motorische Symptome (EPMS) auftreten?',
    answers: [
      {
        answerText: 'Quetiapin',
        correct: null
      },
      {
        answerText: 'Risperidon',
        correct: null
      },
      {
        answerText: 'Clozapin',
        correct: null
      },
      {
        answerText: 'Promethazin',
        correct: null
      },
      {
        answerText: 'Benperidol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung ist am wenigsten zutreffend?',
    answers: [
      {
        answerText: 'Statine, wie Atorvastatin, können tödliche Rhabdomyolysen bedingen',
        correct: null
      },
      {
        answerText: 'Cholestyramin zeigt erhebliche Interaktionen mit gleichzeitig oral applizierten Medikamenten wie Sotalol',
        correct: null
      },
      {
        answerText: 'Pravastatin wird über Cytochrom P450 abgebaut, so daß hierdurch viele Arzneimittelinteraktionen zu erwarten sind.',
        correct: null
      },
      {
        answerText: 'Ezetimid hemmt die Cholesterinresorption und ist sinnvoll zur Therapie der homozygoten, familiären Sitosterinämie',
        correct: null
      },
      {
        answerText: 'Gemfibrozil zeigt als Nebenwirkungen: u. a. Rhabdomyolyse und erhöhte Lithogenität der Galle',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft am wenigsten zu?',
    answers: [
      {
        answerText: 'Lidocain besitzt einen negativ inotropen Effekt.',
        correct: null
      },
      {
        answerText: 'Amiodaron besitzt einen positiv inotropen Effekt.',
        correct: null
      },
      {
        answerText: 'Sotalol verbessert die Lebenserwartung von Patienten mit ventrikulären Tachyarrhythmien.',
        correct: null
      },
      {
        answerText: 'Chinidin kann Tinnitus hervorrufen.',
        correct: null
      },
      {
        answerText: 'Dronedaron kann Leberschäden bewirken.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Arzneimittel ist zur Langzeittherapie der chronischen Herzinsuffizienz (NYHA-Stadium III) am wenigsten geeignet?',
    answers: [
      {
        answerText: 'Carvedilol',
        correct: null
      },
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Pimobendan',
        correct: null
      },
      {
        answerText: 'Captopril',
        correct: null
      },
      {
        answerText: 'Spironolacton',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der nachfolgend genannten Pharmaka kann bei akutem linksventrikulären Pumpversagen das Herzschlagvolumen durch positiv inotrope Wirkung steigern?',
    answers: [
      {
        answerText: 'Levosimendan',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      },
      {
        answerText: 'Glyceroltrinitrat',
        correct: null
      },
      {
        answerText: 'Nitroprussidnatrium',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten falsch?',
    answers: [
      {
        answerText: 'Ropinirol kann Einschlafattacken bedingen.',
        correct: null
      },
      {
        answerText: 'Bromocriptin kann eine Retroperitonealfibrose bedingen.',
        correct: null
      },
      {
        answerText: 'Tolcapton kann Leberschädigungen bis zum Leberausfallskoma hervorrufen.',
        correct: null
      },
      {
        answerText: 'Amantadin ist zur Behandlung der akinetischen Krise geeignet.',
        correct: null
      },
      {
        answerText: 'Biperiden eignet sich zur Therapie der Hypokinese beim M. Parkinson.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Nehmen wir an, ein bestimmtes Nahrungsmittel reduziert die Geschwindigkeit der Arzneimittelaufnahme, aber nicht das Ausmaß der Aufnahme eines bestimmten Arzneimittels aus dem Gastrointestinaltrakt. Dann wird durch das Nahrungsmittel in welcher Art und Weise die Aufnahme des Arzneimittels verringert? Welche Aussage ist richtig?',
    answers: [
      {
        answerText: 'Die Fläche der Kurve zwischen Plasmakonzentration und Zeit (AUC) wird vermindert.',
        correct: null
      },
      {
        answerText: 'Die maximale Plasmakonzentration wird reduziert.',
        correct: null
      },
      {
        answerText: 'Die Zeit in der die maximale Plasmakonzentration erreicht wird, wird vermindert.',
        correct: null
      },
      {
        answerText: 'Die Bioverfügbarkeit wird vermindert.',
        correct: null
      },
      {
        answerText: 'Die Gesamtclearance wird vermindert.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Dosis eines Arzneimittels muß intravenös alle 8 Stunden gegeben werden, um eine mittlere Gleichgewichtskonzentration im Plasma von 5 mg/Liter zu erreichen? Das Verteilungsvolumen des Arzneimittels sei 30 Liter und seine Clearance 8 Liter/Stunde.',
    answers: [
      {
        answerText: '40 mg',
        correct: null
      },
      {
        answerText: '80 mg',
        correct: null
      },
      {
        answerText: '160 mg',
        correct: null
      },
      {
        answerText: '320 mg',
        correct: null
      },
      {
        answerText: '400 mg',
        correct: null
      }
    ]
  },
  {
    questionText: 'In einem Dosis-Wirkungsdiagramm wird die Efficacy (=Effizienz) einer Substanz bestimmt durch das maximale Ausmaß der meßbaren Antwort auf der Ordinate. Die Potenz des Arzneimittels wird hingegen bestimmt durch',
    answers: [
      {
        answerText: 'die Anzahl der Tiere, die alle eine Alles- oder Nichts-Antwort zeigen.',
        correct: null
      },
      {
        answerText: 'den Signaltransduktionsweg.',
        correct: null
      },
      {
        answerText: 'durch eine Formel, die die Affinität und die Anzahl der Rezeptoren umschließt.',
        correct: null
      },
      {
        answerText: 'die Lage der Kurve auf der logarithmierten X-Achse bzw. Abszisse.',
        correct: null
      },
      {
        answerText: 'die Steilheit der Dosis-Wirkungs-Kurve.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was meint man mit einem partiellen Agonismus eines Arzneimittels?',
    answers: [
      {
        answerText: 'Es hat eine geringe Potenz, aber eine hohe Effizienz.',
        correct: null
      },
      {
        answerText: 'Es hat hohe Affinität, aber geringe Efficacy (=Effizienz).',
        correct: null
      },
      {
        answerText: 'Es interagiert mit mehr als einem Rezeptor.',
        correct: null
      },
      {
        answerText: 'Es kann nicht den maximalen Effekt erzielen.',
        correct: null
      },
      {
        answerText: 'Es blockt die Wirkung des Antagonisten.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Mann erhält eine Injektion von Adrenalin zur Behandlung einer allergischen Reaktion nach einem Bienenstich. Welche Folge wird diese Behandlung haben?',
    answers: [
      {
        answerText: 'Gesteigerte Glukoseabsorption aus dem Magen-Darm-Trakt.',
        correct: null
      },
      {
        answerText: 'Gesteigerte Freisetzung von Glukose in der Leber.',
        correct: null
      },
      {
        answerText: 'Gesteigerte Aufnahme von Glukose in den Skelettmuskel.',
        correct: null
      },
      {
        answerText: 'Vermehrte Bildung von Glykogen.',
        correct: null
      },
      {
        answerText: 'Vermehrte Umwandlung von Glukose in Fett.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Mann erhält zur Behandlung seiner koronaren Herzkrankheit eine Substanz, die die cGMP-Konzentration in der Zelle erhöht. Was ist die häufigste unerwünschte Nebenwirkung dieser Substanz?',
    answers: [
      {
        answerText: 'Verstopfung',
        correct: null
      },
      {
        answerText: 'Husten',
        correct: null
      },
      {
        answerText: 'Trockener Mund',
        correct: null
      },
      {
        answerText: 'Sedation',
        correct: null
      },
      {
        answerText: 'Kopfschmerzen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Nach dem Stich einer Biene reagiert eine Frau mit Urtikaria („Hautquaddeln“) und mit einem Laryngealödem. Sie hat Atemschwierigkeiten und niedrigen Blutdruck. Sie geben ihr Sauerstoff und einen Adrenozeptor-Agonisten. Welche der folgenden Wirkungen würde am ehesten zu einer Bronchodilatation führen?',
    answers: [
      {
        answerText: 'Anstieg des cAMP-Gehaltes',
        correct: null
      },
      {
        answerText: 'Anstieg des cGMP-Gehaltes',
        correct: null
      },
      {
        answerText: 'Anstieg der IP3-Konzentration',
        correct: null
      },
      {
        answerText: 'vermehrter Einstrom von Calcium-Ionen in die Zelle',
        correct: null
      },
      {
        answerText: 'vermehrte Freisetzung von Calcium-Ionen aus dem endoplasmatischen Reticulum der Zelle',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Mann kommt zum Zahnarzt und man beobachtet einen schmerzhaft geschwollenen Gaumen. Welche der folgenden Arzneimittel könnte für diese Probleme am ehesten verantwortlich sein?',
    answers: [
      {
        answerText: 'Irbesartan',
        correct: null
      },
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Doxazosin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die Substanz kann oral gegeben werden und hemmt direkt und selektiv die Thrombinwirkung. Welche Substanz ist am ehesten gemeint?',
    answers: [
      {
        answerText: 'Epifibatid',
        correct: null
      },
      {
        answerText: 'Prasugrel',
        correct: null
      },
      {
        answerText: 'Dabigatran',
        correct: null
      },
      {
        answerText: 'Rivaroxaban',
        correct: null
      },
      {
        answerText: 'Enoxaparin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Mann hat eine Cisplatin-induzierte Emesis. Was ist die Therapie der Wahl?',
    answers: [
      {
        answerText: 'Dexamethason',
        correct: null
      },
      {
        answerText: 'Scopolamin',
        correct: null
      },
      {
        answerText: 'Ondasetron',
        correct: null
      },
      {
        answerText: 'Diphenhydramin',
        correct: null
      },
      {
        answerText: 'Haloperidol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Kind mit Meningitis auf der Grundlage einer E. coli-Infektion wird mit einer Substanz behandelt, die typischerweise Nystagmus und Vertigo hervorrufen kann. Welcher Schritt in der bakteriellen Proteinsynthese wird durch diese Antibiotikum typischerweise gehemmt?',
    answers: [
      {
        answerText: 'Initiation',
        correct: null
      },
      {
        answerText: 'Peptidbindung',
        correct: null
      },
      {
        answerText: 'Isoleucintransfer-RNA-Synthese',
        correct: null
      },
      {
        answerText: 'Peptidtranslokation',
        correct: null
      },
      {
        answerText: 'Transfer der RNA-Bindung an die 30S-Untereinheit',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine typische unerwünschte Wirkung dieser Substanzklasse ist eine Ruptur der Achillessehne. Was ist der zugrundeliegende Wirkungsmechanismus dieser Substanzklasse?',
    answers: [
      {
        answerText: 'Beeinträchtigung der Phospholipidschicht der Membranen',
        correct: null
      },
      {
        answerText: 'Interaktion mit der RNA-Polymerase',
        correct: null
      },
      {
        answerText: 'Interaktion mit der Folat-Reduktase',
        correct: null
      },
      {
        answerText: 'Interaktion mit der Topoisomerase',
        correct: null
      },
      {
        answerText: 'Interaktion mit calciumbindenden Proteinen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist keine typische unerwünschte Wirkung von Amiodaron?',
    answers: [
      {
        answerText: 'Hyperthyreose',
        correct: null
      },
      {
        answerText: 'Hypothyreose',
        correct: null
      },
      {
        answerText: 'Bronchospasmus',
        correct: null
      },
      {
        answerText: 'pulmonale Fibrose',
        correct: null
      },
      {
        answerText: 'Ablagerungen in der Cornea',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus des positiv inotropen Effektes von Digoxin?',
    answers: [
      {
        answerText: 'Erhöhung der Calciumsensitivität der kontraktilen Proteine',
        correct: null
      },
      {
        answerText: 'Hemmung der Phosphodiesterase-Aktivität',
        correct: null
      },
      {
        answerText: 'cAMP-Anstieg',
        correct: null
      },
      {
        answerText: 'Erhöhung des Calciumspiegels',
        correct: null
      },
      {
        answerText: 'Senkung der intrazellulären Magnesiumionenkonzentration',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Kind wiegt 35 Kilogramm. Es leidet an einer angeborenen Herzerkrankung und es besteht die Notwendigkeit einer sofortigen antiarrhythmischen Therapie mit Procainamid. Sie finden im Lehrbuch folgende pharmakokinetische Daten für Procainamid. Für eine 70 Kilogramm wiegende Person ist das Verteilungsvolumen 130 Liter, die Clearance 36 Liter/h, die perorale Bioverfügbarkeit 83% und die therapeutische Konzentration 5mg/Liter. Welche intravenöse Loading-Dose müßte man dem Kind geben?',
    answers: [
      {
        answerText: '180 mg',
        correct: null
      },
      {
        answerText: '225 mg',
        correct: null
      },
      {
        answerText: '270 mg',
        correct: null
      },
      {
        answerText: '325 mg',
        correct: null
      },
      {
        answerText: '783 mg',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie nehmen einen Gärtner mit Verdacht auf, eine Vergiftung während seiner Arbeit mit einem Organophosphatinsektizid erlitten zu haben. Welche Symptome sind mit dieser Verdachtsdiagnose vereinbar?',
    answers: [
      {
        answerText: 'vermehrtes Schwitzen',
        correct: null
      },
      {
        answerText: 'Mydriasis',
        correct: null
      },
      {
        answerText: 'Tachykardie',
        correct: null
      },
      {
        answerText: 'Inkontinenz',
        correct: null
      },
      {
        answerText: 'verminderte Peristaltik des Darmes',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie nehmen einen Gärtner mit Verdacht auf eine Vergiftung während seiner Arbeit mit einem Organophosphatinsektizid auf. Mit welcher Kombination von Substanzen sollte man ihn am ehesten behandeln?',
    answers: [
      {
        answerText: 'Atropin und Adrenalin',
        correct: null
      },
      {
        answerText: 'Adrenalin und Isoprenalin',
        correct: null
      },
      {
        answerText: 'Noradrenalin und Propranolol',
        correct: null
      },
      {
        answerText: 'Atropin und Pralidoxin',
        correct: null
      },
      {
        answerText: 'Pralidoxin und Propranolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zu Ihnen kommt ein 57-jähriger Mann, der sowohl erhöhtes Gesamtcholesterin als auch erhöhte Triglyceride hat. Welches Medikament würden Sie ihm geben, um beide Parameter abzusenken?',
    answers: [
      {
        answerText: 'Die beste Wahl wäre Atorvastatin.',
        correct: null
      },
      {
        answerText: 'Die beste Wahl wäre Colestipol.',
        correct: null
      },
      {
        answerText: 'Die beste Wahl wäre Gemfibrozil.',
        correct: null
      },
      {
        answerText: 'Die beste Wahl wäre Clofibrat.',
        correct: null
      },
      {
        answerText: 'Die beste Wahl wäre Niacin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient wurde aufgrund eines systemischen Lupus erythematodes mit antiinflammatorischen Pharmaka behandelt. Er kommt jetzt zur Aufnahme, weil er plötzlich Übelkeit und Erbrechen, abdominale Schmerzen, eine Hyperthermie, Schockzeichen und schlechtes Ansprechen auf Volumengabe und vasokonstriktorische Substanzen zeigt. Die Serumkonzentration von Natrium und Cortisol liegen unter dem Normalbereich. Was ist die wahrscheinlichste Erklärung für diese Symptome?',
    answers: [
      {
        answerText: 'plötzliches Absetzen von Glucocorticoiden.',
        correct: null
      },
      {
        answerText: 'Entstehung von Herzinsuffizienz aufgrund einer Überdosierung von nicht-sterodialen antiinflammatorischen Pharmaka.',
        correct: null
      },
      {
        answerText: 'Verstärkung der Grunderkrankung.',
        correct: null
      },
      {
        answerText: 'berschießende Mineral-corticoide Wirkung der Steroide.',
        correct: null
      },
      {
        answerText: 'der Patient hat Morbus Cushing entwickelt.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient leidet an einer Gonorrhö der Urethra. Es ist bekannt, daß der Patient überempfindlich auf Beta-Lactam-Antibiotika reagiert. Sie wollen das Medikament nur einmal applizieren. Welches Medikament ist am wahrscheinlichsten wirksam und mit den wenigsten Nebenwirkungen für diesen Patienten verbunden?',
    answers: [
      {
        answerText: 'Amoxicillin',
        correct: null
      },
      {
        answerText: 'Ciprofloxacin',
        correct: null
      },
      {
        answerText: 'Doxycylin',
        correct: null
      },
      {
        answerText: 'Gentamycin',
        correct: null
      },
      {
        answerText: 'Vancomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Amphotericin B wird häufig bei vitaler Indikation gegeben. Dabei kommt es häufig zur Nephrotoxizität. Wie kann man diese Nephrotoxizität am besten begrenzen?',
    answers: [
      {
        answerText: 'Durch gleichzeitige Gabe von Antihistaminika.',
        correct: null
      },
      {
        answerText: 'Durch gleichzeitige Gabe von Hydrocortison.',
        correct: null
      },
      {
        answerText: 'Durch gleichzeitige Gabe von Ibuprofen.',
        correct: null
      },
      {
        answerText: 'Indem man liposomal verkapseltes Amphothericin B verwendet.',
        correct: null
      },
      {
        answerText: 'Durch gleichzeitige Gabe von Morphin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Hirudin?',
    answers: [
      {
        answerText: 'Es hemmt Thrombin ohne Mitwirkung von Antithrombin III.',
        correct: null
      },
      {
        answerText: 'Es inaktiviert den Faktor 10A.',
        correct: null
      },
      {
        answerText: 'Es hemmt die Synthese von Gerinnungsfaktor 2.',
        correct: null
      },
      {
        answerText: 'Es hemmt die Synthese des Gerinnungsfaktors 9.',
        correct: null
      },
      {
        answerText: 'Es hemmt die Synthese des Gerinnungsfaktors 10.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Risperidon?',
    answers: [
      {
        answerText: 'Stimulierung von Serotonin-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Blockade von Dopamin-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Stimulierung von α1-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Stimulierung von LH-Rezeptoren.',
        correct: null
      },
      {
        answerText: 'Blockade von μ–Rezeptoren.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Mann leidet an einem paroxysmalen Hypertonus. Er hat erhöhte Konzentrationen von Adrenalin und Noradrenalin-Metaboliten im Blut und benötigt eine Substanz mit langer Wirkungsdauer, um den Blutdruck vor der geplanten Operation zu senken. Welche Substanz kommt am ehesten in Frage?',
    answers: [
      {
        answerText: 'Metoprolol',
        correct: null
      },
      {
        answerText: 'Carvedilol',
        correct: null
      },
      {
        answerText: 'Betaxolol',
        correct: null
      },
      {
        answerText: 'Phenoxybenzamin',
        correct: null
      },
      {
        answerText: 'Phentolamin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Auf Ihre Notaufnahme wird ein Mann im Notarztwagen gebracht, Sie erfahren, daß er über Übelkeit, Erbrechen, Sehstörungen und Herzrhythmusstörungen klagt. Welches der folgenden Medikamente hat der Patient wahrscheinlich eingenommen?',
    answers: [
      {
        answerText: 'Dobutamin',
        correct: null
      },
      {
        answerText: 'Lisinopril',
        correct: null
      },
      {
        answerText: 'Digoxin',
        correct: null
      },
      {
        answerText: 'Milrinon',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Hohe intravenöse Gaben welches Arzneimittels können am ehesten zu Tinnitus, Vertigo und Hörstörungen führen?',
    answers: [
      {
        answerText: 'Spironolacton',
        correct: null
      },
      {
        answerText: 'Furosemid',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Acetazolamid',
        correct: null
      },
      {
        answerText: 'Mannit',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine Frau wird mit antiarrhythmischen Substanzen behandelt, die langsam von dem Natriumkanal im Ventrikel ihres Herzens dissoziieren. Welche Veränderung würden Sie unter diesen Bedingungen im Oberflächen-EKG der Patientin am ehesten erwarten?',
    answers: [
      {
        answerText: 'verlängertes PR-Intervall',
        correct: null
      },
      {
        answerText: 'erhöhte P-Wellen',
        correct: null
      },
      {
        answerText: 'verlängerte QRS-Dauer',
        correct: null
      },
      {
        answerText: 'verlängertes QT-Intervall',
        correct: null
      },
      {
        answerText: 'invertierte T-Welle',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine junge Frau spielt Volleyball. Sie bemerkt dabei ein Herzrasen und kommt deshalb zu Ihnen auf die Notaufnahme. Sie machen ein EKG und finden eine schnelle und irreguläre Herzfrequenz. Sie injizieren ihr eine Substanz intravenös, die G-Protein gekoppelte Rezeptoren aktiviert. Aufgrund welches Mechanismus erhoffen Sie sich eine Beendigung der Arrhythmie bei der Frau?',
    answers: [
      {
        answerText: 'erhöhter Einstrom von Chlorid',
        correct: null
      },
      {
        answerText: 'erhöhten cGMP-Gehalt',
        correct: null
      },
      {
        answerText: 'erhöhten Calciumeinström durch das Sarkolemma',
        correct: null
      },
      {
        answerText: 'erhöhter Kaliumeinstrom durch das Sarkolemma',
        correct: null
      },
      {
        answerText: 'verminderten Natriumeinstrom durch das Sarkolemma',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher molekulare Mechanismus beschreibt am besten den Wirkungsmechanismus der Benzodiazepine?',
    answers: [
      {
        answerText: 'Potenzierung des Effektes von GABA am Chloridionenkanal.',
        correct: null
      },
      {
        answerText: 'Hemmung von Glutamataktivierung.',
        correct: null
      },
      {
        answerText: 'Hemmung der Inaktivierung von Natriumionenkanälen.',
        correct: null
      },
      {
        answerText: 'Bindung an Opiodrezeptoren.',
        correct: null
      },
      {
        answerText: 'Potenzierung des Effektes der inhibitorischen Amiosäure Glycin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist am ehesten richtig?',
    answers: [
      {
        answerText: 'Chlortalidon bewirkt eine Hypoglykämie.',
        correct: null
      },
      {
        answerText: 'Chlortalidon bewirkt eine Hypokaliämie.',
        correct: null
      },
      {
        answerText: 'Chlortalidon bewirkt eine Hypourikämie.',
        correct: null
      },
      {
        answerText: 'Chlortalidon bwirkt eine Hyperkalziämie.',
        correct: null
      },
      {
        answerText: 'Chlortalidon hemmt die Natriumrückresorption im proximalen Tubulus.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein hungriger Wanderer, Herr Segner, hat ihm unbekannte Pilze gegessen. Daraufhin wurde seine Haut rot, sein Mund trocken und er bekam Sehstörungen. Welches der folgenden Antidote, wäre wahrscheinlich die sinnvollste Sofortbehandlung dieses Patienten?',
    answers: [
      {
        answerText: 'Atropin',
        correct: null
      },
      {
        answerText: 'Flumazenil',
        correct: null
      },
      {
        answerText: 'Naloxon',
        correct: null
      },
      {
        answerText: 'Physostigmin',
        correct: null
      },
      {
        answerText: 'Pralidoxim',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft zu. Welche der folgenden Substanzen kann (können) einen Lupus erythematodes hervorrufen?',
    answers: [
      {
        answerText: 'Hydralazin',
        correct: null
      },
      {
        answerText: 'Isoniazid',
        correct: null
      },
      {
        answerText: 'Procainamid',
        correct: null
      },
      {
        answerText: 'Rifampicin',
        correct: null
      },
      {
        answerText: 'alle genannten Substanzen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur Aufnahme kommt der 22-jährige Herr Wucherer mit Miktionsschwierigkeiten, Juckreiz und milchigen Absonderungen aus dem Penis. Mikrobiologische Abstriche ergeben gram-negative Kokken und eine weitere mikrobiologische Analyse ist eingeleitet worden. Wenn wir annehmen, daß dieser Patient allergisch auf β-Lactam-Antibiotika reagiert, welche der folgenden Substanzen sind effektiv und sicher bei einer Harnröhrengonorrhö, die mit einer Einzeldosis behandelt werden soll?',
    answers: [
      {
        answerText: 'Amoxicillin',
        correct: null
      },
      {
        answerText: 'Ceftriaxon',
        correct: null
      },
      {
        answerText: 'Ampicillin',
        correct: null
      },
      {
        answerText: 'Penicillin V',
        correct: null
      },
      {
        answerText: 'Penicillin G',
        correct: null
      }
    ]
  },
  {
    questionText: 'In Bezug auf eine akute Acetylsalicylsäure-Vergiftung ist welche der folgenden Aussagen korrekt?',
    answers: [
      {
        answerText: 'Ansäuerung des Urins erhöht die Salicylat-Elimination.',
        correct: null
      },
      {
        answerText: 'Atemdepression (Hypopnoe) ist ein frühes Zeichen der Salicylatvergiftung.',
        correct: null
      },
      {
        answerText: 'Der Tod erfolgt durch periphere Atemlähmung.',
        correct: null
      },
      {
        answerText: 'Das Antidot ist Acetylcystein.',
        correct: null
      },
      {
        answerText: 'Salicylate kann man durch Peritonealdialyse eliminieren.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben einem Patienten, Herrn Händel, mit erhöhtem Cholesterinspiegel im Blut geraten, seinen Lebensstil zu ändern und ihm eine Diät vorgeschlagen. Nachdem dieses vier Monate lang erfolglos gewesen ist, beginnen Sie eine Therapie mit Atorvastatin. Welchen Parameter müssen Sie vor Beginn und in einem festen Zeitraum im Hinblick auf die Therapie mit Atorvastatin vorrangig überprüfen?',
    answers: [
      {
        answerText: 'Harnstoffspiegel im Blut',
        correct: null
      },
      {
        answerText: 'Transaminasen-Aktivität im Blut',
        correct: null
      },
      {
        answerText: 'Plättchenkonzentration im Differentialblutbild',
        correct: null
      },
      {
        answerText: 'Hämatokrit',
        correct: null
      },
      {
        answerText: 'Harnsäurekonzentration im Blut',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei dem 60-jährigen Herrn Moritz wird eine vergrößerte Prostata gefunden und erhöhte Tumormarker. Die Magnetresonanztomographie weist auf vergrößerte Lymphknoten im unteren Abdomen hin und die Beckenröntgenaufnahme spricht für Metastasen. Der Patient wird wahrscheinlich behandelt werden mit',
    answers: [
      {
        answerText: 'Anastrozol',
        correct: null
      },
      {
        answerText: 'Desogestrel',
        correct: null
      },
      {
        answerText: 'Flutamid',
        correct: null
      },
      {
        answerText: 'Methyltestosteron',
        correct: null
      },
      {
        answerText: 'Tamoxifen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen ruft typischerweise eine akute hämorrhagische Cystitishervor?',
    answers: [
      {
        answerText: 'Vincristin',
        correct: null
      },
      {
        answerText: 'Tamoxifen',
        correct: null
      },
      {
        answerText: 'Fluorouracil',
        correct: null
      },
      {
        answerText: 'Doxorubicin',
        correct: null
      },
      {
        answerText: 'Cyclophosphamid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Substanzen wird typischerweise zur Sedierung erregter Patienten auf der Intensivstation als Dauerinfusion verwendet, kann aber auch eine Azidose unter diesen Bedingungen bewirken?',
    answers: [
      {
        answerText: 'Enfluran',
        correct: null
      },
      {
        answerText: 'Ketamin',
        correct: null
      },
      {
        answerText: 'Morphin',
        correct: null
      },
      {
        answerText: 'Propofol',
        correct: null
      },
      {
        answerText: 'Remifentanil',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben eine Ampulle, die in 4 ml Volumen 2% Lidocain enthält. Wie viel Lidocain werden in 1 ml vorhanden sein?',
    answers: [
      {
        answerText: '2 mg',
        correct: null
      },
      {
        answerText: '8 mg',
        correct: null
      },
      {
        answerText: '20 mg',
        correct: null
      },
      {
        answerText: '80 mg',
        correct: null
      },
      {
        answerText: '200 mg',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Medikamente erhöht die Freisetzung von endogen produziertemInsulin?',
    answers: [
      {
        answerText: 'Acarbose',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Metformin',
        correct: null
      },
      {
        answerText: 'Pioglitazon',
        correct: null
      },
      {
        answerText: 'Lispro',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Wirkungen von Adrenalin würde durch Prazosin blockiert werden, aber nicht von Metoprolol?',
    answers: [
      {
        answerText: 'der kardiale positiv inotrope Effekt',
        correct: null
      },
      {
        answerText: 'die Kontraktion des Musculus radialis der Iris',
        correct: null
      },
      {
        answerText: 'der Anstieg von cAMP in Fettzellen',
        correct: null
      },
      {
        answerText: 'die Relaxation der glatten Muskulatur in den Bronchien',
        correct: null
      },
      {
        answerText: 'die Uterus-Relaxation',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Faktor, der dazu beitrüge die Wirkungsdauer einer Substanz A zu erhöhen, die über das Enzym CYP3A4 abgebaut wird, wäre',
    answers: [
      {
        answerText: 'die chronische Gabe von Phenobarbital vor Gabe von A.',
        correct: null
      },
      {
        answerText: 'die chronische Gabe von Cimetidin vor Gabe von A.',
        correct: null
      },
      {
        answerText: 'die Verdrängung von der Gewebebindung durch ein anderes Pharmakon.',
        correct: null
      },
      {
        answerText: 'ein erhöhtes Herzzeitvolumen.',
        correct: null
      },
      {
        answerText: 'die chronische Gabe von Rifampicin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben einen Patienten mit Zolliger-Ellison Syndrom als Folge eines Gastrinoms. Mit welcher Substanz würden Sie ihn am besten behandeln?',
    answers: [
      {
        answerText: 'Aprepitant',
        correct: null
      },
      {
        answerText: 'Metoclopramid',
        correct: null
      },
      {
        answerText: 'Omeprazol',
        correct: null
      },
      {
        answerText: 'Ondansetron',
        correct: null
      },
      {
        answerText: 'Ranitidin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Selektive Serotonin-Wiederaufnahmehemmer sind weniger effektiv als trizyklische Antidepressiva in der Behandlung welcher der folgenden Erkrankungen?',
    answers: [
      {
        answerText: 'Bulimie',
        correct: null
      },
      {
        answerText: 'chronischer Schmerz, der neuropathisch erklärt wird',
        correct: null
      },
      {
        answerText: 'generalisierte Angsterkrankungen',
        correct: null
      },
      {
        answerText: 'obsessive Zwangserkrankungen',
        correct: null
      },
      {
        answerText: 'prämenstruelles Syndrom',
        correct: null
      }
    ]
  },
  {
    questionText: 'Amlodipin wirkt vor allem auf Calciumkänale',
    answers: [
      {
        answerText: 'in der Skelettmuskulatur.',
        correct: null
      },
      {
        answerText: 'in der glatten Muskulatur.',
        correct: null
      },
      {
        answerText: 'des AV-Knotens.',
        correct: null
      },
      {
        answerText: 'der ventrikulären Kardiomyozyten.',
        correct: null
      },
      {
        answerText: 'der Purkinje-Zellen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Dopamin hat verschiedene klinische Wirkungen bei verschiedenen Dosierungen. Welche Aussage zu Dopamin trifft zu?',
    answers: [
      {
        answerText: 'Dopamin in niedrigen Dosierungen wirkt vor allen Dingen als Agonist an α1-Adrenozeptoren und senkt dadurch den peripheren Widerstand.',
        correct: null
      },
      {
        answerText: 'Dopamin in kleinen Dosierungen gegeben, ist ein Agonist sowohl an α1-Adrenozeptor als auch β2-Adrenozeptoren, dadurch steigt die Frequenz des Herzens und der Blutdruck.',
        correct: null
      },
      {
        answerText: 'Dopamin in kleinen Dosierungen wirkt vor allen Dingen als Antagonist auf β1-Adrenozeptoren und senkt deshalb die Herzfrequenz.',
        correct: null
      },
      {
        answerText: 'Dopamin in hohen Dosierungen wirkt vor allen Dingen auf β2-Adrenozeptoren und erhöht deshalb den Tonus in der glatten Muskulatur der Bronchien.',
        correct: null
      },
      {
        answerText: 'Dopamin in hohen Dosierungen wirkt vor allen Dingen über Stimulation an α1-Adrenozeptoren und erhöht den peripheren Widerstand.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was ist der Wirkungsmechanismus von Minoxidil?',
    answers: [
      {
        answerText: 'Es öffnet Kaliumkanäle, hyperpolarisiert die Zelle und steigert die Calciumfreisetzung aus dem sarkoplasmatischen Retikulum.',
        correct: null
      },
      {
        answerText: 'Es öffnet Kaliumkanäle und hemmt dadurch die Bindung von Endothelin an seine Rezeptor.',
        correct: null
      },
      {
        answerText: 'Es öffnet Kaliumkanäle und hemmt die Depolarisation und den Calciumeinstrom.',
        correct: null
      },
      {
        answerText: 'Es öffnet Calciumkanäle und erhöht den Calciumeinwärtsstrom.',
        correct: null
      },
      {
        answerText: 'Es blockiert die Calciumkanäle, hemmt die Depolarisation und somit den Calciumeinstrom.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Aussagen über thrombolytisch wirkende Medikamente ist richtig?',
    answers: [
      {
        answerText: 'Die Gabe von Streptokinase kann eine Antigen-Antikörper-Reaktion hervorrufen.',
        correct: null
      },
      {
        answerText: 'Die Gabe von Argatroban kann eine Antigen-Antikörper Reaktion hervorrufen.',
        correct: null
      },
      {
        answerText: 'Tenecteplase hat eine kürzere Halbwertszeit als „tissue plasminogen activator (t-PA)“ und muß über eine langsame Dauerinfusion gegeben werden.',
        correct: null
      },
      {
        answerText: 'Rekombinates „tissue plasminogen activator (t-PA)“ aktiviert Plasminogen nur an den Orten, an denen sich neue Thromben bilden.',
        correct: null
      },
      {
        answerText: 'Aprotinin aktiviert Plasmin, aber seine Verwendung ging einher mit postoperativem akuten Nierenversagen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage zu Levothyroxin ist richtig?',
    answers: [
      {
        answerText: 'Der Thyroxinmetabolismus wird gehemmt durch Substanzen, die das Cytochrom P450 System induzieren.',
        correct: null
      },
      {
        answerText: 'Levothyroxin besteht zu gleichen molekularen Mengen aus T4 und T3.',
        correct: null
      },
      {
        answerText: 'Levothyroxintherapie bedingt einen Anstieg des TSH-Spiegels.',
        correct: null
      },
      {
        answerText: 'Levothyroxin ist das L-Isomer von T3 mit einer Halbwertszeit von einem Tag. Dadurch ist es möglich, die Dosierung täglich den metabolischen Änderungen anzupassen.',
        correct: null
      },
      {
        answerText: 'Levothyroxin ist das L-Isomer von T4 mit einer Halbwertszeit von sechs Tagen. Dies führt zur Bildung eines kreisenden Pools eines Schilddrüsenprodrugs als einem Puffer und dient dazu die metabolische Umsatzrate zu normalisieren.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Herr Weber wird in das Krankenhaus aufgenommen aufgrund einer Lungenentzündung durch gramnegative Bakterien. Sie verordnen Tobramycin. Die Clearance und das Verteilungsvolumen von Tobramycin seien 80 ml/min und 40 Liter. Sie möchten Herrn Weber eine intravenöse Bolus-Gabe (=Aufsättigungsdosis) geben, um eine Plasmakonzentration von 4 mg/l möglichst schnell zu erhalten. Welche Bolus-Gabe müssen Sie geben?',
    answers: [
      {
        answerText: '0,1 mg',
        correct: null
      },
      {
        answerText: '10 mg',
        correct: null
      },
      {
        answerText: '115,2 mg',
        correct: null
      },
      {
        answerText: '160 mg',
        correct: null
      },
      {
        answerText: '180 mg',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche unerwünschte Wirkung ist nicht typisch für Haloperidol?',
    answers: [
      {
        answerText: 'Sexuelle Dysfunktion',
        correct: null
      },
      {
        answerText: 'Anstieg des Blutdruckes',
        correct: null
      },
      {
        answerText: 'veränderte endokrine Funktionen',
        correct: null
      },
      {
        answerText: 'Obstipation',
        correct: null
      },
      {
        answerText: 'Galaktorrhö',
        correct: null
      }
    ]
  },
  {
    questionText: 'Antiemetische Wirkungen sind typisch für',
    answers: [
      {
        answerText: 'Fluphenazin',
        correct: null
      },
      {
        answerText: 'Digitoxin',
        correct: null
      },
      {
        answerText: 'Ergotamin',
        correct: null
      },
      {
        answerText: 'Cisplatin',
        correct: null
      },
      {
        answerText: 'Bromocriptin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist falsch?',
    answers: [
      {
        answerText: 'Penicilin G wird durch β-Laktamasen abgebaut.',
        correct: null
      },
      {
        answerText: 'Penicillin G wird in Form von aktiven Metaboliten renal eliminiert.',
        correct: null
      },
      {
        answerText: 'Penicillin V ist oral verfügbar.',
        correct: null
      },
      {
        answerText: 'Penicillin G ist ein Derivat der 6-Aminopenicillinsäure.',
        correct: null
      },
      {
        answerText: 'Penicillin G ist bei pH 2 wenig stabil.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Aplastische Anämie ist am ehesten eine typische Folge der Gabe von',
    answers: [
      {
        answerText: 'Cilastatin.',
        correct: null
      },
      {
        answerText: 'Imipenem.',
        correct: null
      },
      {
        answerText: 'Penicllin.',
        correct: null
      },
      {
        answerText: 'Chloramphenicol.',
        correct: null
      },
      {
        answerText: 'Cefazolin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches ist der Wirkungsmechanismus von Ketoconazol?',
    answers: [
      {
        answerText: 'Stimulation der Folsäuresynthese.',
        correct: null
      },
      {
        answerText: 'Hemmung eines Kalium-Kanales.',
        correct: null
      },
      {
        answerText: 'Komplexbildung mit Sitosterin.',
        correct: null
      },
      {
        answerText: 'Hemmung der Ergosterin-Bildung.',
        correct: null
      },
      {
        answerText: 'Hemmung der Murein-Synthese.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur hormonalen Therapie des Prostatacarzinoms rechnet man nicht',
    answers: [
      {
        answerText: 'Tamoxifen-Gabe',
        correct: null
      },
      {
        answerText: 'Orchiektomie',
        correct: null
      },
      {
        answerText: 'Goserelin-Gabe',
        correct: null
      },
      {
        answerText: 'Flutamid-Gabe',
        correct: null
      },
      {
        answerText: 'Buserelin-Gabe',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist wahr für eine Substanz, die nach einer Kinetik 1. Ordnung aus dem Plasma eliminiert wird?',
    answers: [
      {
        answerText: 'Die Halbwertzeit der Substanz ist proportional der Substanzkonzentration im Plasma.',
        correct: null
      },
      {
        answerText: 'Die Menge die pro Zeiteinheit eliminiert wird ist konstant.',
        correct: null
      },
      {
        answerText: 'Die Eliminationsgeschwindigkeit ist proportional der Plasmakonzentration.',
        correct: null
      },
      {
        answerText: 'Die Elimination beinhaltet eine geschwindigkeitsbestimmende Enzymreaktion, die mit maximaler Michaelis-Menten-Geschwindigkeit arbeitet.',
        correct: null
      },
      {
        answerText: 'Eine Darstellung der Plasmakonzentration in der Ordinate gegen die Zeit auf der Abszisse gibt eine waagerechte Linie.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Reaktionen ist eine Phase-II-Reaktion im Metabolismus eines Pharmakons?',
    answers: [
      {
        answerText: 'Acetylierung',
        correct: null
      },
      {
        answerText: 'Deaminierung',
        correct: null
      },
      {
        answerText: 'Hydrolyse',
        correct: null
      },
      {
        answerText: 'Oxidation',
        correct: null
      },
      {
        answerText: 'Reduktion',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei Kindern ist die am meisten gefürchtete unerwünschte Wirkung von Belladonna-Alkaloiden',
    answers: [
      {
        answerText: 'Dehydration',
        correct: null
      },
      {
        answerText: 'Halluzinationen',
        correct: null
      },
      {
        answerText: 'Hypertension',
        correct: null
      },
      {
        answerText: 'Hyperthermie',
        correct: null
      },
      {
        answerText: 'intraventikulärer Reizleitungsblock',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Erkrankungen kann nicht durch Propranolol behandelt werden?',
    answers: [
      {
        answerText: 'Muskeltremor bei Lithium-Therapie',
        correct: null
      },
      {
        answerText: 'Skelettmuskeltremor z.B. Salbutamol-induziert',
        correct: null
      },
      {
        answerText: 'Hypertension',
        correct: null
      },
      {
        answerText: 'idiopathische hypertrophe Subaortenkardiomyopathie',
        correct: null
      },
      {
        answerText: 'Morbus Raynaud',
        correct: null
      }
    ]
  },
  {
    questionText: 'Wegen der Gefahr einer besonders verstärkten Blutdrucksenkung ist Sildenafil kontraindiziert während einer Therapie mit:',
    answers: [
      {
        answerText: 'Amlodipin',
        correct: null
      },
      {
        answerText: 'Enalapril',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Isosobiddinitrat',
        correct: null
      },
      {
        answerText: 'Metroprolol',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden bei koronarer Herzkrankheit angewendeten Arzneistoffe sind – sublingual oder bukkal appliziert – zur Kupierung eines Angina-pectoris-Anfalls geeignet?1. Verapamil2. Atenolol3. Diltiazem4. Glyceroltrinitrat',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der genannten Arzneistoffe sind zur Therapie einer chronischen systolischen Myokardinsuffizienz NYHA-Stadium III bei normfrequentem Sinusrhythmus indiziert?1. Ramipril2. Digitoxin3. Hydrochlorothiazid4. Verapamil',
    answers: [
      {
        answerText: 'nur 2 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Beurteilen Sie die Zuordnungen von Antihypertensiva und ihren typischen unerwünschten Wirkungen!Welche Aussage trifft nicht zu?',
    answers: [
      {
        answerText: 'Ramipril - Reizhusten',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid - Natriumretention',
        correct: null
      },
      {
        answerText: 'Amlodipin - Knöchelödeme',
        correct: null
      },
      {
        answerText: 'Metroprolol - Sinusbradykardie',
        correct: null
      },
      {
        answerText: 'Minoxidil - Hypertrichose',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zu den unerwünschten Wirkungen der Diuretika gehören eher nicht:',
    answers: [
      {
        answerText: 'mögliche erhöhte Toxizität von gleichzeitig gegebenen Herzglykosiden',
        correct: null
      },
      {
        answerText: 'mögliche erhöhte Toxizität bei gleichzeitig gegebenem Lithium',
        correct: null
      },
      {
        answerText: 'Entstehung einer therapiebedürftigen Hyperglykämie',
        correct: null
      },
      {
        answerText: 'Entstehung einer therapiebedürftigen Urikämie',
        correct: null
      },
      {
        answerText: 'abgeschwächte Wirkung von zusätzlich gegebenem Ramipril',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Medikamenten-Gruppe zeigt bei Patienten mit Herzinsuffizienz und eingeschränkter systolischer Funktion (Auswurffraktion ≤ 35-40%) eine letalitätssenkende Wirkung?',
    answers: [
      {
        answerText: 'Beta-Blocker',
        correct: null
      },
      {
        answerText: 'Herzglykoside',
        correct: null
      },
      {
        answerText: 'Kalzium-Antagonisten',
        correct: null
      },
      {
        answerText: 'Nitrate',
        correct: null
      },
      {
        answerText: 'Diuretika',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die Therapie mit β-Adrenozeptor-Blockern bei Patienten mit Herzinsuffizienz und linksventrikulärer Dysfunktion (EF≤ 35-40%) wird begonnen',
    answers: [
      {
        answerText: 'tim dekompensierten Zustand',
        correct: null
      },
      {
        answerText: 'tmit einer loading dose',
        correct: null
      },
      {
        answerText: 'tmit der durchgehenden Standard-Dosierung',
        correct: null
      },
      {
        answerText: 'tmit sehr niedriger Dosierung; Steigerung individuell nach klinischem Bild',
        correct: null
      },
      {
        answerText: 'twird auch bei Asthma bronchiale als Begleiterkrankung empfohlen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Hypertoniker steht unter Dauerbehandlung mit Metoprolol. Welche der folgenden potentiellen Arzneistoffinteraktionen treffen zu?1. Digitalisglykoside können Bradykardie auslösen oder verstärken.2. Die blutzuckersenkende Wirkung von Insulin wird verstärkt.3. Verapamil und Metoprolol addieren sich in ihrer negativ inotropen und negativ dromotropen Wirkung.4. Die positiv inotrope Wirkung von Dobutamin wird verstärkt.',
    answers: [
      {
        answerText: 'nur 3 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist falsch?',
    answers: [
      {
        answerText: 'tMetoprolol ist kontraindiziert bei bestehendem Asthma bronchiale.',
        correct: null
      },
      {
        answerText: 'tMetoprolol ist kombinierbar mit Verapamil.',
        correct: null
      },
      {
        answerText: 'tMetoprolol ist kombinierbar mit Amlodipin.',
        correct: null
      },
      {
        answerText: 'tMetoprolol ist kontraindiziert bei gleichzeitig bestehender COPD.',
        correct: null
      },
      {
        answerText: 'Betablocker bedingte-Potenzstörungen können die Compliance der Patienten reduzieren.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Hinsichtlich der Schmerztherapie gilt:1. Zur langfristigen Behandlung chronischer Tumorschmerzen ist häufig Morphin in Retardform indiziert.2. Zur medikamentösen Prophylaxe von Migräneanfällen ist Metoprolol anwendbar.3. Carbamazepin eignet sich zur Therapie bei Trigeminusneuralgie.4. Zur initialen symptomatischen Therapie eines akuten Migräneanfalls ist Flunarizin geeignet.',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine asymptomatische Bakteriurie muss antibiotisch behandelt werden1. bei Männern über 65 Jahren2. bei Kleinkindern mit einer Keimzahl größer als 100 000 pro ml Urin3. bei Männern mit Prostatahyperplasie4. bei Schwangeren',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur kalkulierten Therapie welcher Infektion ist Doxycyclin am wenigsten erfolgversprechend?',
    answers: [
      {
        answerText: 'Erythema migrans durch Borrelia burgdorferi',
        correct: null
      },
      {
        answerText: 'Ornithose durch Chlamydia psittaci',
        correct: null
      },
      {
        answerText: 'Pneumonie durch Mycoplasma pneumoniae',
        correct: null
      },
      {
        answerText: 'Wundinfektion durch Pseudomonas aeruginosa',
        correct: null
      },
      {
        answerText: 'Adnexitis durch Chlamydia trachomatis',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Antibiotika hat die kleinste Molmasse und ist besonders zur Behandlung von schweren Nischeninfektionen (z.B. Osteomyelitis, Endocarditis) mit grampositiven Erregern geeignet?',
    answers: [
      {
        answerText: 'Amoxicillin',
        correct: null
      },
      {
        answerText: 'Clindamycin',
        correct: null
      },
      {
        answerText: 'Vancomycin',
        correct: null
      },
      {
        answerText: 'Clarithromycin',
        correct: null
      },
      {
        answerText: 'Fosfomycin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie diagnostizieren bei einem Patienten eine akute eitrige Otitis media. Der Patient berichtet über eine Allergie gegen Amoxicillin. Welches Antibiotikum - als therapeutische Alternative zu Amoxicillin- gefährdet im Hinblick auf eine Kreuzallergie den Patienten am wenigsten?',
    answers: [
      {
        answerText: 'Cefuroxim',
        correct: null
      },
      {
        answerText: 'Clarithromycin',
        correct: null
      },
      {
        answerText: 'Doxycyclin',
        correct: null
      },
      {
        answerText: 'Co-trimoxazol',
        correct: null
      },
      {
        answerText: 'Levofloxacin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der nachfolgend genannten Arzneimittel ist (bei Fehlen spezieller Kontraindikationen) das Antibiotikum der 1. Wahl zur Initialtherapie eines akuten Harnwegsinfekts bei einer schwangeren Patientin?',
    answers: [
      {
        answerText: 'Doxycyclin',
        correct: null
      },
      {
        answerText: 'Ciprofloxacin',
        correct: null
      },
      {
        answerText: 'Co-Trimoxazol',
        correct: null
      },
      {
        answerText: 'Penicillin V',
        correct: null
      },
      {
        answerText: 'Cefuroxim',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Angaben treffen für beide Wirkstoffgruppen Fluorchinolone und Tetracycline zu?1. Resorptionsverminderung bei gleichzeitiger Einnahme von Aluminium-oder Eisenverbindungen2. Kontraindiziert in der Schwangerschaft3. Phototoxizität4. Wirksamkeit gegen Clamydien und Mycoplasmen',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Antibiotikum kann eine reversible Hörminderung bis hin zum vorübergehenden Hörverlust auslösen?',
    answers: [
      {
        answerText: 'Amikacin',
        correct: null
      },
      {
        answerText: 'Doxycyclin',
        correct: null
      },
      {
        answerText: 'Azithromycin',
        correct: null
      },
      {
        answerText: 'Ciprofloxacin',
        correct: null
      },
      {
        answerText: 'Ceftriaxon',
        correct: null
      }
    ]
  },
  {
    questionText: 'Für die Therapie chronischer Tumorschmerzen gilt am wenigsten:',
    answers: [
      {
        answerText: 'In der Stufe I des WHO-Schemas kommen peripher wirkende Analgetika zum Einsatz.',
        correct: null
      },
      {
        answerText: 'Eine Therapie nach Bedarf ist einer Einnahme nach Zeitschema vorzuziehen.',
        correct: null
      },
      {
        answerText: 'Antidepressiva können zu einem geringeren Verbrauch von Analgetika beitragen.',
        correct: null
      },
      {
        answerText: 'Bei Begleitödemen nervaler Strukturen kann Dexamethason-Gabe angezeigt sein.',
        correct: null
      },
      {
        answerText: 'Kurz wirksame Opioide können zur Kupierung von Durchbruchschmerzen zusätzlich zu einer Basismedikation gegeben werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der folgenden Arzneimittel wird bevorzugt zur Behandlung eines akuten Gichtanfalls eingesetzt?',
    answers: [
      {
        answerText: 'Allopurinol',
        correct: null
      },
      {
        answerText: 'Benzbromaron',
        correct: null
      },
      {
        answerText: 'Rasburicase',
        correct: null
      },
      {
        answerText: 'Tramadol',
        correct: null
      },
      {
        answerText: 'Indometacin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Medikament ist bei einem Patienten mit einer hypertensiven Krise und einem akuten Koronarsyndrom kontraindiziert?',
    answers: [
      {
        answerText: 'Urapidil',
        correct: null
      },
      {
        answerText: 'Clonidin',
        correct: null
      },
      {
        answerText: 'Nifedipin',
        correct: null
      },
      {
        answerText: 'Nitroglycerin',
        correct: null
      },
      {
        answerText: 'Nitroprussidnatrium',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Medikament wird zur Therapie der akuten Attacke bei kindlicher Migräne empfohlen?',
    answers: [
      {
        answerText: 'Acetylsalicylsäure',
        correct: null
      },
      {
        answerText: 'Ergotamin',
        correct: null
      },
      {
        answerText: 'Ibuprofen',
        correct: null
      },
      {
        answerText: 'Tramadol',
        correct: null
      },
      {
        answerText: 'Sumatriptan',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist falsch? Mögliche Ursachen für veränderte, „unerwartete Arzneimittelwirkungen“ sind',
    answers: [
      {
        answerText: 'Pharmakogenetischer Arzneimittelpolymorphismus, z. B. langsame und schnelle Metabolisierer',
        correct: null
      },
      {
        answerText: 'Erworbene Veränderungen von Resorption und Clearance',
        correct: null
      },
      {
        answerText: 'Multi-Drug-Resistance - Transportphänomene',
        correct: null
      },
      {
        answerText: 'Interaktionen: nur pharmakokinetische, keine pharmakodynamischen',
        correct: null
      },
      {
        answerText: 'Interaktion mit Nahrungsmitteln',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Antwort ist richtig? Als unerwünschte Arzneimittelwirkungen von Glukokortikoiden sind zu beachten:1. Erhöhung des Blutzuckerspiegels2. Abnahme der Zahl der neutrophilen Granulozyten, vor allem nach einer Hochdosis-Stoßtherapie3. Katarakt4. Psychische Störungen',
    answers: [
      {
        answerText: 'nur 1 ist richtig.',
        correct: null
      },
      {
        answerText: 'nur 2 und 3 sind richtig.',
        correct: null
      },
      {
        answerText: 'nur 1 und 2 sind richtig.',
        correct: null
      },
      {
        answerText: 'nur 1, 3 und 4 sind richtig.',
        correct: null
      },
      {
        answerText: 'alle sind richtig.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Unter einer bestehenden Therapie mit Tacrolimus ist bei Gabe eines Makrolid-Antibiotikums zu erwarten:',
    answers: [
      {
        answerText: 'Ein Anstieg des Talspiegels von Tacrolimus ohne therapeutische Konsequenz',
        correct: null
      },
      {
        answerText: 'Keine Interaktion im Metabolismus via CYP 3A4',
        correct: null
      },
      {
        answerText: 'Ein abrupter Abfall des Talspiegels',
        correct: null
      },
      {
        answerText: 'Ein Anstieg des Talspiegels von Tacrolimus, der eine Dosisreduktion von Tacrolimus erforderlich macht (Adaptation)',
        correct: null
      },
      {
        answerText: 'Ein Abfall des Talspiegels von Tacrolimus, der eine Dosiselevation von Tacrolimus erforderlich macht (Adaptation)',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage ist richtig?1. Eine unerwünschte Arzneimittelwirkung von Ciclosporin und Tacrolimus ist die Nephrotoxizität.2. Unter der Therapie mit Sirolimus kann sich eine Hyperlipidämie manifestieren.3. Unter Mycophenolat-Therapie sollten Blutbildkontrollen erfolgen, da es zum Auftreten einer Neutropenie kommen kann.4. Sowohl die Anwendung von Ciclosporin als auch von Tacrolimus erfordern ein therapeutisches Drug-Monitoring.',
    answers: [
      {
        answerText: 'nur 4 ist richtig.',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig.',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig.',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig.',
        correct: null
      },
      {
        answerText: 'alle sind richtig.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welchen Sinn hat die Verabreichung von Alkalicitraten zum Alkalisieren des Harns bei Gicht?1. Durchbrechung eines Gichtanfalls2. Verminderung der Rückresorption von Harnsäure3. Vermeidung der Bildung von Phosphatsteinen4. Vermeidung der Bildung von Harnsäurekonkrementen',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Für die perioperative Infektionsprophylaxe bei operativen Eingriffen am Colon oder Rektum gilt:1. Sie sollte mit der Narkoseeinleitung beginnen.2. Wegen des zu erwartenden breiten Keimspektrums sollte grundsätzlich ein Reservepenicillin benutzt werden.3. Die alleinige Gabe eines Cephalosporins der 2. Generation ist ausreichend.4. Eine anschließende, wenige Tage dauernde postoperative Prophylaxe ist bei Legen einer Drainage sinnvoll.',
    answers: [
      {
        answerText: 'nur 1 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2, 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur Schmerztherapie erhält ein Tumorpatient mit Lungenkarzinom und Knochenmetastasen 3 x 120 mg Morphin retard pro Tag. Er berichtet über eine seit zwei Wochen deutlich zunehmende Schmerzintensität.Welche therapeutische Maßnahme ist sinnvoll?',
    answers: [
      {
        answerText: 'Opioidwechsel',
        correct: null
      },
      {
        answerText: 'Erhöhung der Dosis von Morphin retard',
        correct: null
      },
      {
        answerText: 'Zusätzlicher Einsatz eines Antikonvulsivums',
        correct: null
      },
      {
        answerText: 'Wechsel des Applikationsweges',
        correct: null
      },
      {
        answerText: 'Zusätzlicher Einsatz kurz wirksamer Opioide',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Antibiotikum ist Mittel der Wahl bei einer Gonorrhoe?',
    answers: [
      {
        answerText: 'Cefuroxim',
        correct: null
      },
      {
        answerText: 'Ceftriaxon',
        correct: null
      },
      {
        answerText: 'Penicillin V',
        correct: null
      },
      {
        answerText: 'Azithromycin',
        correct: null
      },
      {
        answerText: 'Amoxicillin plus Clavulansäure',
        correct: null
      }
    ]
  },
  {
    questionText: 'Zur Frühtherapie der ambulant erworbenen purulenten Meningitis kommen in erster Linie folgende der genannten Arzneistoffe in Betracht:1. Ceftriaxon2. Ampicillin3. Gentamicin4. Meropenem',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie diagnostizieren bei einem 6-jährigen Kind ein leichtes persistierendes Asthma bronchiale (Stufe 2). Sie entscheiden sich für eine Therapie mit Montelukast. Mit welchen unerwünschten Wirkungen muss gerechnet werden?1. Zentralnervöse Störungen (z. B. Schlaflosigkeit, Ruhelosigkeit, Reizbarkeit).2.\tGastrointestinale Beschwerden (z. B. Bauchschmerzen, Übelkeit,\tDiarrhö).3. Hauterscheinungen (z. B. Exantheme, Hämatome, Juckreiz).4. Irritationen der oberen Atemwege (z. B. Heiserkeit)',
    answers: [
      {
        answerText: 'nur 4 ist richtig.',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 ist richtig.',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig.',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig.',
        correct: null
      },
      {
        answerText: 'alle sind richtig.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein 55-jähriger Küchenchef (88 kg; 174 cm) zeigt einen Nüchtern-Blutzuckerwert von 160-180 mg/dL (7,5 - 8,4 mmol/L) bei vier von fünf Bestimmungen innerhalb von sechs Wochen (HbA 1C 7,8%). Der Blutdruck liegt bei 160/90 mmHg. Aus der Anamnese sind keine weiteren Erkrankungen bekannt. Nach einem dreimonatigen Versuch mit diätetischen Maßnahmen und Betreiben einer Ausdauersportart haben sich weder die Blutglukosewerte noch das Gewicht merklich geändert. Welche Therapie zur Senkung des Blutzuckers ist nun indiziert ?',
    answers: [
      {
        answerText: 'für weitere 3 Monate Vorgehen wie bisher',
        correct: null
      },
      {
        answerText: 'Metformin',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Sitagliptin',
        correct: null
      },
      {
        answerText: 'intensivierte Insulintherapie',
        correct: null
      }
    ]
  },
  {
    questionText: 'Ein Patient mit Morbus Parkinson unter der Therapie mit L-DOPA beklagt sich über optische Halluzinationen. Wie könnten Sie am besten diese optischen Halluzinationen unterdrücken?',
    answers: [
      {
        answerText: 'Gabe von Amitryptilin',
        correct: null
      },
      {
        answerText: 'Gabe von Selegilin',
        correct: null
      },
      {
        answerText: 'Gabe von Clozapin',
        correct: null
      },
      {
        answerText: 'Gabe von Haloperidol',
        correct: null
      },
      {
        answerText: 'Gabe von Promethazin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches der aufgelisteten Pharmaka ist für eine Antikoagulantientherapie in der Schwangerschaft geeignet?1. Enoxaparin2. Phenprocoumon3. Dabigatran4. Rivaroxaban',
    answers: [
      {
        answerText: 'nur 1 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 2 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 2 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben einen 40-jährigen Patienten, der aufgrund von persistierendem Asthma bronchiale mit retardiertem Theophyllin in Kombination mit langwirksamen β2-Sympathomimetika und Glukocortikoiden behandelt wird. Welche Aussage ist falsch?',
    answers: [
      {
        answerText: 'Die Wirkung von β2-Sympathomimetika kann durch Theophyllin verstärkt werden.',
        correct: null
      },
      {
        answerText: 'Erythromycin kann zu einer Erhöhung der Plasmakonzentration von Theophyllin führen.',
        correct: null
      },
      {
        answerText: 'Rifampicin kann zu einer Erhöhung der Plasmakonzentration von Theophyllin führen.',
        correct: null
      },
      {
        answerText: 'Theophyllin darf nicht bei tachykarden Herzrhythmusstörungen angewendet werden.',
        correct: null
      },
      {
        answerText: 'In der Unterdrückung nächtlicher Beschwerden zeigt sich Theophyllin den langwirksamen β2-Sympathomimetika unterlegen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Sie haben einem Patienten Risperidon hochdosiert gegeben. Er entwickelt hohes Fieber, Katatonie, Muskelsteifigkeit, Verwirrtheit. Sie messen im Plasma erhöhte Kreatinkinasewerte. Was ist die beste Therapie bei diesem Patienten?',
    answers: [
      {
        answerText: 'Haloperidol',
        correct: null
      },
      {
        answerText: 'Bromocriptin',
        correct: null
      },
      {
        answerText: 'Diazepam',
        correct: null
      },
      {
        answerText: 'Benzatropin',
        correct: null
      },
      {
        answerText: 'Flumazenil',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft nicht zu?Trizyklische Antidepressiva',
    answers: [
      {
        answerText: 'können als α1-Adrenozeptoren-Agonisten wirken.',
        correct: null
      },
      {
        answerText: 'erreichen ihr Wirkungsmaximum bei depressiven Patienten häufig erst nach 2 oder mehr Wochen.',
        correct: null
      },
      {
        answerText: 'können die Krampfbereitschaft erhöhen.',
        correct: null
      },
      {
        answerText: 'können anticholinerge unerwünschte Wirkungen hervorrufen.',
        correct: null
      },
      {
        answerText: 'können unerwünschte orthostatische Hypotonie hervorrufen.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welches Antidot hemmt die Alkoholdehydrogenase bei Vergiftungen mit Methanol oder Ethylenglycol?',
    answers: [
      {
        answerText: 'Fomepizol',
        correct: null
      },
      {
        answerText: 'Flumazenil',
        correct: null
      },
      {
        answerText: '4-Dimethylaminophenol (4-DMAP)',
        correct: null
      },
      {
        answerText: 'Toluidinblau',
        correct: null
      },
      {
        answerText: 'Hydroxocobalamin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei Überdosierung mit welchem der genannten Arzneistoffe ist am ehesten mit dem Auftreten von Herzrhythmusstörungen zu rechnen?',
    answers: [
      {
        answerText: 'Paracetamol',
        correct: null
      },
      {
        answerText: 'Vigabatrin',
        correct: null
      },
      {
        answerText: 'Phenobarbital',
        correct: null
      },
      {
        answerText: 'Haloperidol',
        correct: null
      },
      {
        answerText: 'Imipramin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einem 68-jährigen Rentner (Body-Mass-Index 25, HbA1C 6,8%) mit einem diagnostizierten Diabetes mellitus Typ 2 ist Diät allein zur Blutzuckereinstellung nicht mehr ausreichend. Neben einer eingeschränkten Nierenfunktion (Kreatinin-Clearance 30 ml/min) liegen keine relevanten Begleiterkrankungen vor.Welches der aufgelisteten Pharmaka kommt zunächst als Therapieoption in Frage?',
    answers: [
      {
        answerText: 'Metformin',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Nateglinid',
        correct: null
      },
      {
        answerText: 'Acarbose',
        correct: null
      },
      {
        answerText: 'Insulin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Für welches orale Antidiabetikum wurde gezeigt, dass es die Häufigkeit von kardio-vaskulären Ereignissen am effektivsten senkt?',
    answers: [
      {
        answerText: 'tMetformin',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Nateglinid',
        correct: null
      },
      {
        answerText: 'Saxagliptin',
        correct: null
      },
      {
        answerText: 'Acarbose',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung von Wirkstoff und unerwünschter Wirkung ist falsch?',
    answers: [
      {
        answerText: 'Formoterol - Toleranzentwicklung',
        correct: null
      },
      {
        answerText: 'Ipratropium - Husten',
        correct: null
      },
      {
        answerText: 'Fluticason - Heiserkeit',
        correct: null
      },
      {
        answerText: 'Prednisolon - Infektanfälligkeit',
        correct: null
      },
      {
        answerText: 'Cromoglicinsäure - Mundtrockenheit',
        correct: null
      }
    ]
  },
  {
    questionText: 'Eine 35-jährige Patientin mit schwerem Asthma bronchiale wird oral mit den nachfolgend genannten Arzneistoffen behandelt. Durch welches der Pharmaka ergibt sich am ehesten die Gefahr der Reaktivierung einer abgelaufenen Lungentuberkulose?',
    answers: [
      {
        answerText: 'Ethinylestradiol',
        correct: null
      },
      {
        answerText: 'Prednisolon',
        correct: null
      },
      {
        answerText: 'Salbutamol',
        correct: null
      },
      {
        answerText: 'Theophyllin',
        correct: null
      },
      {
        answerText: 'Bromhexin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Zuordnung von Antidiabetikum und unerwünschter Wirkung ist am wenigsten zutreffend?',
    answers: [
      {
        answerText: 'Metformin  -gastrointestinale Beschwerden',
        correct: null
      },
      {
        answerText: 'Glibenclamid - Hypoglykämien',
        correct: null
      },
      {
        answerText: 'Sitagliptin - Gewichtszunahme',
        correct: null
      },
      {
        answerText: 'Acarbose - Flatulenz',
        correct: null
      },
      {
        answerText: 'Insulin - Lipodystrophie an Injektionsstellen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Tests, die unauffällig sein sollten, weil Sie durch die Medikation verschlechtert werden könnten, müssen Sie am ehesten durchführen bevor sie ein Kind mit Valproinsäure behandeln?',
    answers: [
      {
        answerText: 'Hörtest',
        correct: null
      },
      {
        answerText: 'Messung der Kreatininclearance',
        correct: null
      },
      {
        answerText: 'Messung der Leberenzyme im Plasma',
        correct: null
      },
      {
        answerText: 'Bestimmung des Intelligenzquotienten',
        correct: null
      },
      {
        answerText: 'Messung des Visus',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was trifft nicht zu?führen.erhalten.',
    answers: [
      {
        answerText: 'Die Heparin-induzierte Thrombozytopenie Typ II (HIT II) kann zu einem White-Clot-Syndrom',
        correct: null
      },
      {
        answerText: 'Die Häufigkeit des Auftretens einer HIT II ist abhängig von der Heparindosis.',
        correct: null
      },
      {
        answerText: 'Bei rezidivierenden Lungenembolien ist die Indikation zur Dauerantikoagulation mit Phenprocoumon gegeben.',
        correct: null
      },
      {
        answerText: 'tEin Patient, der unter Phenprocoumon-Dauerbehandlung steht, darf  keine i.m. Injektionen',
        correct: null
      },
      {
        answerText: 'Die Prophylaxe einer tiefen Beinvenenthrombose mit niedermolekularem Heparin wird nach dem zu erwartenden Risiko durchgeführt.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Substanz senkt präferentiell den Nüchternblutzucker?',
    answers: [
      {
        answerText: 'Acarbose',
        correct: null
      },
      {
        answerText: 'Glibenclamid',
        correct: null
      },
      {
        answerText: 'Nateglinid',
        correct: null
      },
      {
        answerText: 'Sitagliptin',
        correct: null
      },
      {
        answerText: 'Metformin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche unerwünschten Wirkungen können bei anhaltendem Missbrauch von stimulierenden Laxantien auftreten?1. Hyponatriämie mit sekundärem Hyperaldosteronismus2. Hypokaliämie durch enterale und renale Kaliumverluste3. Hypokalziämie4. verminderte Darmmotilität und Toleranzentwicklung',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 3 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welcher der nachfolgend genannten Arzneistoffe ist bei Vorliegen einer Psychose zur Behandlung von Neuroelptika-induzierten Frühdyskinesien und Parkinson-ähnlichen Symptomen (Parkinsonoid) am besten geeignet?',
    answers: [
      {
        answerText: 'Phenytoin',
        correct: null
      },
      {
        answerText: 'Biperiden',
        correct: null
      },
      {
        answerText: 'Bromocriptin',
        correct: null
      },
      {
        answerText: 'Selegilin',
        correct: null
      },
      {
        answerText: 'Levodopa',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussagen treffen zu für Tolcapon?',
    answers: [
      {
        answerText: 'Es ist nicht ZNS-gängig.',
        correct: null
      },
      {
        answerText: 'Es sollte nicht mit Levodopa kombiniert werden.',
        correct: null
      },
      {
        answerText: 'Es ist ein MAO-B-Hemmstoff.',
        correct: null
      },
      {
        answerText: 'Es kann tödliche Hepatitiden auslösen.',
        correct: null
      },
      {
        answerText: 'Es hemmt nur in der Peripherie den Abbau von Dopamin.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei welcher der folgenden Arzneistoffkombinationen zur Behandlung des Diabetes mellitus ist die Gefahr für das Auftreten einer Hypoglykämie am geringsten?',
    answers: [
      {
        answerText: 'Metformin und Sulfonylharnstoff',
        correct: null
      },
      {
        answerText: 'Metformin und Acarbose',
        correct: null
      },
      {
        answerText: 'Metformin und Glinid',
        correct: null
      },
      {
        answerText: 'Sulfonylharnstoff und Gliptin',
        correct: null
      },
      {
        answerText: 'Insulin glargin und Glinid',
        correct: null
      }
    ]
  },
  {
    questionText: 'Therapeutische Effekte von Neuroleptika sind am wenigsten zu erwarten bei',
    answers: [
      {
        answerText: 'akuten Manien',
        correct: null
      },
      {
        answerText: 'schweren Formen von Übelkeit und Erbrechen',
        correct: null
      },
      {
        answerText: 'schizophrenen Psychosen',
        correct: null
      },
      {
        answerText: 'endogenen Depressionen',
        correct: null
      },
      {
        answerText: 'psychomotorischen Erregungszuständen',
        correct: null
      }
    ]
  },
  {
    questionText: 'Was trifft nicht zu?Eine orale Antikoagulation wird für notwendig erachtet',
    answers: [
      {
        answerText: 'bei rezidivierenden tiefen Beinvenenthrombosen.',
        correct: null
      },
      {
        answerText: 'bei allen mechanischen Klappenprothesen in Trikuspidal-, Mitral- und Aortenposition.',
        correct: null
      },
      {
        answerText: 'zur Vorbereitung einer Kardioversion eines seit 4 Wochen bestehenden Vorhofflimmerns.',
        correct: null
      },
      {
        answerText: 'bei Vorhofflimmern.',
        correct: null
      },
      {
        answerText: 'während der ersten 3 Monate nach einer Stentimplantation in den Koronararterien.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Hinweise sprechen für Kausalität des Auftretens unerwünschter Wirkungen durch ein Medikament?1. Enger zeitlicher Zusammenhang (Temporalität)2. Komorbidität als begünstigender Auslösefaktor (Confounding)3. Nach Absetzen des Medikaments verringert oder verschwindet die unerwünschte Wirkung (De-challenge).4. Nach Reexposition treten die unerwünschten Wirkungen wieder auf (Rechallenge).',
    answers: [
      {
        answerText: 'nur 1 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 2 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 3 und 4 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Nach der Zulassung eines Medikaments dienen Phase-IV-Studien (Postmarketing Surveillance Studies) der1. Aufdeckung seltener unerwünschter Wirkungen.2. Ermittlung später, verzögert auftretender unerwünschter Wirkungen.3. Ermittlung von Arzneimittelinteraktionen.4. Ermittlung altersadäquater Dosierungen (Kinder, alte Menschen).',
    answers: [
      {
        answerText: 'nur 4 ist richtig',
        correct: null
      },
      {
        answerText: 'nur 1 und 2 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'nur 1, 2 und 3 sind richtig',
        correct: null
      },
      {
        answerText: 'alle sind richtig',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einer 28-jährigen, im 5. Monat schwangeren Frau werden im Rahmen der Schwangerschaftsvorsorgeuntersuchungen mehrfach arterielle Blutdruckwerte um 150/110mmHg gemessen. Eine Proteinurie liegt nicht vor. Die übrigen Laborparameter liegen im Normbereich. Welches der folgenden antihypertensiv wirkenden Therapeutika gilt amehesten als sicher hinsichtlich Verwendbarkeit in der Schwangerschaft?',
    answers: [
      {
        answerText: 'Ramipril',
        correct: null
      },
      {
        answerText: 'Losartan',
        correct: null
      },
      {
        answerText: 'Methyldopa',
        correct: null
      },
      {
        answerText: 'Hydrochlorothiazid',
        correct: null
      },
      {
        answerText: 'Clonidin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Die Zahl tödlich verlaufender postoperativer Lungenembolien wird prophylaktisch durch welchen Wirkstoff signifikant gesenkt?',
    answers: [
      {
        answerText: 'Phenprocoumon',
        correct: null
      },
      {
        answerText: 'Hydroxyethylstärke',
        correct: null
      },
      {
        answerText: 'Enoxaparin',
        correct: null
      },
      {
        answerText: 'Urokinase',
        correct: null
      },
      {
        answerText: 'Acetylsalicylsäure',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche der folgenden Arzneistoffe ist am wenigsten geeignet für die Behandlung eines Status epilepticus?',
    answers: [
      {
        answerText: 'Diazepam',
        correct: null
      },
      {
        answerText: 'Clonazepam',
        correct: null
      },
      {
        answerText: 'Phenobarbital',
        correct: null
      },
      {
        answerText: 'Promethazin',
        correct: null
      },
      {
        answerText: 'Phenytoin',
        correct: null
      }
    ]
  },
  {
    questionText: 'Welche Aussage trifft nicht zu? Die Antiparkinson-Wirkung von Levodopa',
    answers: [
      {
        answerText: 'wird durch proteinreiche Mahlzeiten verstärkt.',
        correct: null
      },
      {
        answerText: 'wird durch Kombination mit Selegilin verstärkt.',
        correct: null
      },
      {
        answerText: 'lässt im Laufe mehrjähriger Behandlung nach.',
        correct: null
      },
      {
        answerText: 'ist nach längerer Behandlungsdauer bei gleicher Tagesdosis meist günstiger, wenn 6 statt 3 Einzeldosen eingenommen werden.',
        correct: null
      },
      {
        answerText: 'kann durch die Wirkung von Bromocriptin ergänzt werden.',
        correct: null
      }
    ]
  },
  {
    questionText: 'Bei einem Patienten mit Ulcus ventriculi wird Helicobacter pylori nachgewiesen. Zur Behandlung wird eine First-Line-Eradikationstherapie (Triple Therapie) mit Omeprazol, Amoxicillin und Clarithromycin durchgeführt. Der Patient entwickelt dabei eine Penicillinallergie. Welche Substanz sollte am ehesten als Ersatz benutzt werden?',
    answers: [
      {
        answerText: 'Metronidazol',
        correct: null
      },
      {
        answerText: 'Cotrimoxazol',
        correct: null
      },
      {
        answerText: 'Rifabutin',
        correct: null
      },
      {
        answerText: 'Bismuthsubsalicylat',
        correct: null
      },
      {
        answerText: 'Tetracyclin',
        correct: null
      }
    ]
  }
]

export default questions
