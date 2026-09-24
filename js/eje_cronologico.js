// Generado por tools/build_eje_cronologico.py (PERIODS y EVENTS). NO editar a mano.
// 5 periodos · 5 acontecimientos · 37 representantes. events[i] abre periods[i].
const EJE_CRONOLOGICO = {
 "subject": "hf",
 "title": "Historia de la Filosofía",
 "sub": "Periodos, acontecimientos y autores",
 "txt": {
  "filtro": "Eje del curso",
  "siglos": "Siglos",
  "evento": "Acontecimiento que lo abre",
  "reps": "Representantes",
  "leyenda": "Acontecimientos que marcan el paso de un periodo a otro"
 },
 "ticks": [
  {
   "year": -500,
   "label": "500 a. C."
  },
  {
   "year": 0,
   "label": "1"
  },
  {
   "year": 500,
   "label": "500 d. C."
  },
  {
   "year": 1000,
   "label": "1000 d. C."
  },
  {
   "year": 1500,
   "label": "1500 d. C."
  },
  {
   "year": 2000,
   "label": "2000 d. C."
  }
 ],
 "periods": [
  {
   "name": "Filosofía antigua",
   "bar": "#FBBA1F",
   "ink": "#8F6600",
   "start": -600,
   "end": 476,
   "siglos": "s. VI a. C. – s. VI d. C.",
   "reps": [
    {
     "autores": [
      {
       "nombre": "Presocráticos",
       "fechas": "s. VI – V a. C."
      },
      {
       "nombre": "Sócrates",
       "fechas": "470/469 – 399 a. C."
      },
      {
       "nombre": "Aspasia de Mileto",
       "fechas": "c. 470 – c. 400 a. C."
      },
      {
       "nombre": "Platón",
       "fechas": "c. 427 – 347 a. C."
      },
      {
       "nombre": "Aristóteles",
       "fechas": "384 – 322 a. C."
      },
      {
       "nombre": "Escuelas helenísticas",
       "fechas": "desde fines del s. IV a. C."
      },
      {
       "nombre": "Hipatia de Alejandría",
       "fechas": "c. 355/370 – 415 d. C."
      }
     ]
    }
   ]
  },
  {
   "name": "Filosofía medieval",
   "bar": "#A966A3",
   "ink": "#8A4B84",
   "start": 476,
   "end": 1492,
   "siglos": "s. V – XV",
   "reps": [
    {
     "autores": [
      {
       "nombre": "Agustín de Hipona",
       "fechas": "354 – 430"
      },
      {
       "nombre": "Hildegarda de Bingen",
       "fechas": "1098 – 1179"
      },
      {
       "nombre": "Tomás de Aquino",
       "fechas": "1225 – 1274"
      },
      {
       "nombre": "Guillermo de Ockham",
       "fechas": "c. 1287 – 1347"
      }
     ]
    }
   ]
  },
  {
   "name": "Filosofía del Renacimiento",
   "bar": "#E94E35",
   "ink": "#CC3A22",
   "start": 1492,
   "end": 1600,
   "siglos": "s. XV – XVI",
   "reps": [
    {
     "autores": [
      {
       "nombre": "Nicolás Maquiavelo",
       "fechas": "1469 – 1527",
       "nota": "«El fin justifica los medios»"
      },
      {
       "nombre": "Erasmo de Róterdam",
       "fechas": "c. 1466 – 1536",
       "nota": "modelo de intelectual humanista"
      },
      {
       "nombre": "René Descartes",
       "fechas": "1596 – 1650",
       "nota": "RACIONALISMO — la razón como origen del conocimiento"
      },
      {
       "nombre": "David Hume",
       "fechas": "1711 – 1776",
       "nota": "EMPIRISMO — la experiencia es el origen del conocimiento"
      },
      {
       "nombre": "Thomas Hobbes",
       "fechas": "1588 – 1679",
       "nota": "concibe el mundo como una máquina = MECANICISMO"
      },
      {
       "nombre": "Galileo Galilei",
       "fechas": "1564 – 1642"
      },
      {
       "nombre": "Nicolás Copérnico",
       "fechas": "1473 – 1543"
      }
     ]
    }
   ]
  },
  {
   "name": "Filosofía moderna",
   "bar": "#1FB5E6",
   "ink": "#0A76A0",
   "start": 1600,
   "end": 1800,
   "siglos": "s. XVII – XVIII",
   "reps": [
    {
     "epigrafe": "Filósofos contractualistas",
     "autores": [
      {
       "nombre": "Thomas Hobbes",
       "fechas": "1588 – 1679"
      },
      {
       "nombre": "John Locke",
       "fechas": "1632 – 1704"
      },
      {
       "nombre": "Jean-Jacques Rousseau",
       "fechas": "1712 – 1778"
      }
     ]
    },
    {
     "epigrafe": "El liberalismo como ideología del capitalismo",
     "autores": [
      {
       "nombre": "John Stuart Mill",
       "fechas": "1806 – 1873"
      },
      {
       "nombre": "Adam Smith",
       "fechas": "1723 – 1790"
      }
     ]
    },
    {
     "epigrafe": "La Ilustración",
     "autores": [
      {
       "nombre": "Immanuel Kant",
       "fechas": "1724 – 1804",
       "nota": "«Sapere aude»"
      }
     ]
    }
   ]
  },
  {
   "name": "Filosofía contemporánea",
   "bar": "#5DBB98",
   "ink": "#267A5B",
   "start": 1800,
   "end": 2026,
   "siglos": "s. XIX – XXI",
   "reps": [
    {
     "epigrafe": "Filósofos de la sospecha",
     "autores": [
      {
       "nombre": "Karl Marx",
       "fechas": "1818 – 1883"
      },
      {
       "nombre": "Friedrich Nietzsche",
       "fechas": "1844 – 1900"
      },
      {
       "nombre": "Sigmund Freud",
       "fechas": "1856 – 1939"
      }
     ]
    },
    {
     "epigrafe": "La crítica al capitalismo",
     "autores": [
      {
       "nombre": "Max Horkheimer",
       "fechas": "1895 – 1973"
      },
      {
       "nombre": "Jürgen Habermas",
       "fechas": "1929 – 2026"
      },
      {
       "nombre": "Karl Popper",
       "fechas": "1902 – 1994"
      }
     ]
    },
    {
     "autores": [
      {
       "nombre": "Hannah Arendt",
       "fechas": "1906 – 1975",
       "nota": "«la banalidad del mal»"
      },
      {
       "nombre": "John Rawls",
       "fechas": "1921 – 2002",
       "nota": "la justicia como equidad"
      },
      {
       "nombre": "Postmodernidad"
      },
      {
       "nombre": "Pensamiento rupturista"
      }
     ]
    },
    {
     "epigrafe": "Filosofía analítica",
     "autores": [
      {
       "nombre": "Ludwig Wittgenstein",
       "fechas": "1889 – 1951"
      }
     ]
    },
    {
     "epigrafe": "El existencialismo",
     "autores": [
      {
       "nombre": "Jean-Paul Sartre",
       "fechas": "1905 – 1980"
      },
      {
       "nombre": "Simone de Beauvoir",
       "fechas": "1908 – 1986"
      }
     ]
    }
   ]
  }
 ],
 "events": [
  {
   "name": "El paso del mito al logos",
   "date": "s. VI a. C.",
   "year": -600,
   "fila": 0,
   "lado": 1
  },
  {
   "name": "Caída de Roma",
   "date": "476",
   "year": 476,
   "fila": 0,
   "lado": 0
  },
  {
   "name": "Colón en América",
   "date": "1492",
   "year": 1492,
   "fila": 0,
   "lado": -1
  },
  {
   "name": "Revolución Científica",
   "date": "s. XVI – XVII",
   "year": 1600,
   "fila": 1,
   "lado": -1
  },
  {
   "name": "Crisis de la razón ilustrada",
   "date": "c. 1800",
   "year": 1800,
   "fila": 0,
   "lado": 1
  }
 ]
};
