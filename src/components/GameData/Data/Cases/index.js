/*
   List of cases
*/
const Cases = [
  {
    "pt": {
      "start": [
        "****** FLASH ******",
        "O Vaticano foi roubado!",
        "A relíquia sagrada, a coroa de São Pedro, foi levada!",
        "Uma mulher foi vista fugindo da cena do crime.",
        "Sua missão: rastrear a ladra de Roma até seu esconderijo e prendê-la!",
        "Você deve apreender a ladra até domingo, 17h.",
        "Boa sorte! "
      ],
      "steps": [
        {
          "city": {
            "name": "Roma",
            "description": "Roma, a capital da Itália, é famosa por sua história antiga, com marcos como o Coliseu e o Vaticano, sede da Igreja Católica.",
            "img": "roma.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "church",
                "value": "Igreja"
              },
              "Guy": {
                "key": "priest",
                "value": "Padre"
              },
              "Clue": "Eu ouvi dizer que ela estava fazendo perguntas sobre a história do Império Romano."
            },
            {
              "Place": {
                "key": "restaurant",
                "value": "Restaurante"
              },
              "Guy": {
                "key": "chef",
                "value": "Chef"
              },
              "Clue": "Ela pediu uma refeição com azeite e trufas, e parecia muito interessada em arte medieval."
            },
            {
              "Place": {
                "key": "airport",
                "value": "Aeroporto"
              },
              "Guy": {
                "key": "checkin",
                "value": "Funcionário de check-in"
              },
              "Clue": "Eu vi a pessoa que você procura, ela saiu em um voo para uma cidade costeira com uma bandeira azul e branca na cauda."
            }
          ],
          "destinations": ["Atenas", "Paris", "Lisboa"]
        },
        {
          "city": {
            "name": "Atenas",
            "description": "Atenas é a capital da Grécia, berço da democracia, com monumentos icônicos como o Parthenon e a Acrópole.",
            "img": "atenas.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "museum",
                "value": "Museu"
              },
              "Guy": {
                "key": "curator",
                "value": "Curador"
              },
              "Clue": "A suspeita estava curiosa sobre a história de Esparta e perguntou sobre as termas antigas."
            },
            {
              "Place": {
                "key": "taverna",
                "value": "Taverna"
              },
              "Guy": {
                "key": "waiter",
                "value": "Garçom"
              },
              "Clue": "Ela mencionou querer aprender sobre antigos mitos gregos, principalmente sobre deuses e heróis."
            },
            {
              "Place": {
                "key": "airport",
                "value": "Aeroporto"
              },
              "Guy": {
                "key": "pilot",
                "value": "Piloto"
              },
              "Clue": "Ela embarcou em um avião com uma bandeira vermelha e dourada, e estava falando sobre uma antiga civilização marítima."
            }
          ],
          "destinations": ["Cairo", "Istambul", "Roma"]
        },
        {
          "city": {
            "name": "Cairo",
            "description": "O Cairo é a maior cidade da África e está localizado na foz do Rio Nilo. É famoso pelas pirâmides de Gizé e pela história milenar.",
            "img": "cairo.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "museum",
                "value": "Museu"
              },
              "Guy": {
                "key": "guard",
                "value": "Gardião"
              },
              "Clue": "Ela perguntou sobre os hieróglifos e parecia muito interessada na história dos faraós."
            },
            {
              "Place": {
                "key": "market",
                "value": "Mercado"
              },
              "Guy": {
                "key": "spicevendor",
                "value": "Vendedor de especiarias"
              },
              "Clue": "Ela comprou um colar de ouro, mas ficou muito intrigada com as antiguidades egípcias que vendemos."
            },
            {
              "Place": {
                "key": "hotel",
                "value": "Hotel"
              },
              "Guy": {
                "key": "receptionist",
                "value": "Recepcionista"
              },
              "Clue": "Eu ouvi dizer que ela falava sobre um arqueólogo famoso, procurando por uma tumba antiga."
            }
          ],
          "destinations": ["Bagdá", "Londres", "Casablanca"]
        },
        {
          "city": {
            "name": "Bagdá",
            "description": "Bagdá, a capital do Iraque, é uma cidade histórica com raízes profundas na civilização mesopotâmica.",
            "img": "bagda.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "bank",
                "value": "Banco"
              },
              "Guy": {
                "key": "bankguard",
                "value": "Guarda do banco"
              },
              "Clue": "Ela trocou dinheiro por dinheiros antigos, estava com uma mala pesada."
            },
            {
              "Place": {
                "key": "market",
                "value": "Mercado"
              },
              "Guy": {
                "key": "streetvendor",
                "value": "Feirante"
              },
              "Clue": "Vi ela conversando sobre artefatos sumerianos e sobre escavações arqueológicas."
            },
            {
              "Place": {
                "key": "restaurant",
                "value": "Restaurante"
              },
              "Guy": {
                "key": "waiter",
                "value": "Garçom"
              },
              "Clue": "Ela parecia interessada na história da Babilônia, e mencionou algo sobre um antigo rei."
            }
          ],
          "destinations": ["Atenas", "Paris", "Teerã"]
        },
        {
          "city": {
            "name": "Londres",
            "description": "Londres, capital do Reino Unido, é famosa por sua cultura, história e monumentos, como o Big Ben e o Palácio de Buckingham.",
            "img": "london.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "hotel",
                "value": "Hotel"
              },
              "Guy": {
                "key": "housedetective",
                "value": "Detetive particular"
              },
              "Clue": "Algo estranho está acontecendo na cidade, ela procurava algo, mas não soube dizer o quê."
            },
            {
              "Place": {
                "key": "harbor",
                "value": "Porto"
              },
              "Guy": {
                "key": "sailor",
                "value": "Marinheiro"
              },
              "Clue": "Eu vi ela entrando em um barco, parecia preocupada com algo relacionado à História Inglesa."
            },
            {
              "Place": {
                "key":"foreignministry",
                "value": "Ministério das Relações Exteriores"
              },
              "Guy": {
                "key": "palaceguard",
                "value": "Guarda do palácio"
              },
              "Clue": "A pessoa que você procura esteve aqui e estava interessada em alguma coisa relacionada a um grande império."
            }
          ],
          "destinations": []
        }
      ],
      "thief": "Sofia Duarte",
      "endSuccess": {
        "thanks3": "tinha o saque, a coroa de São Pedro, que será devolvido aos gratos moradores de Roma."
      }
    }
  },
  {
    "pt": {
      "start":[
        "****** FLASH ******", 
        "Tesouro nacional roubado de Paris.",
        "O tesouro foi identificado como o elevador da Torre Eiffel.",
        "Suspeita do sexo feminino relatada na cena do crime.",
        "Sua missão: rastrear a ladra de Paris até seu esconderijo e prendê-la!",
        "Você deve apreender a ladra até domingo, 17h.",
        "Boa sorte! "
      ],
      "steps": [
        {
          "city": {
            "name": "Paris",
            "description": "A França, com uma população de cerca de 55 milhões, é famosa por sua comida, vinho, moda e arte.",
            "img": "paris.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "museum",
                "value": "Museu"
              },
              "Guy": {
                "key": "curator",
                "value": "Curador"
              },
              "Clue": "Fontes me dizem que ela fez perguntas sobre rituais xintoístas."
            },
            {
              "Place": {
                "key": "airport",
                "value": "Aeroporto"
              },
              "Guy": {
                "key": "pilot",
                "value": "Piloto"
              },
              "Clue": "Eu vi a pessoa que você está procurando e ela saiu em um avião com uma bandeira vermelha e branca na asa. Ela perguntou sobre o último jogo de tênis."
            },
            {
              "Place": {
                "key": "palace",
                "value": "Palácio"
              },
              "Guy": {
                "key": "soldier",
                "value": "Soldado"
              },
              "Clue": "Tudo que eu sei é que ela pediu uma biografia do Imperador Jimmu."
            }
          ],
          "destinations": ["Oslo","Tokyo","Reykjavik"]
        },
        {
          "city": {
            "name": "Tokyo",
            "description": "Tóquio, a capital do Japão, é avistada pelo Monte Fuji, um dos pontos turísticos mais famosos do Japão",
            "img": "tokyo.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "hotel",
                "value": "Hotel"
              },
              "Guy": {
                "key": "housedetective",
                "value": "Detetive particular"
              },
              "Clue": "Eu ouvi dizer que ela queria saber se ela poderia pegar um navio a vapor pelo Rio Tigre."
            },
            {
              "Place": {
                "key": "airport",
                "value": "Aeroporto"
              },
              "Guy": {
                "key": "pilot",
                "value": "Piloto"
              },
              "Clue": "Minhas fontes me dizem que ela disse que tinha um emprego esperando por ela em um campo de petróleo."
            },
            {
              "Place": {
                "key": "palace",
                "value": "Palácio"
              },
              "Guy": {
                "key": "privycouncillor",
                "value": "Conselheiro privado"
              },
              "Clue": "A pessoa que você está procurando esteve aqui e ficou decepcionada ao descobrir que não havia livros sobre os assírios."
            }
          ],
          "destinations": ["Bamako","Baghdad","Moscow"]
        },
        {
          "city": {
            "name": "Bagdá",
            "description": "Na antiguidade, o Iraque era conhecido como Mesopotâmia. O Iraque moderno faz fronteira com os países da Jordânia, Síria, Turquia, Irã, Kuwait e Arábia Saudita.",
            "img": "baghdad.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "bank",
                "value": "Banco"
              },
              "Guy": {
                "key": "bankguard",
                "value": "Guarda do banco"
              },
              "Clue": "Eu ouvi dizer que ela trocou seu dinheiro por libras, ela estava dirigindo uma limousine."
            },
            {
              "Place": {
                "key": "library",
                "value": "Biblioteca"
              },
              "Guy": {
                "key": "referencelibrarian",
                "value": "Bibliotecário de referência"
              },
              "Clue": "Eu ouvi dizer que ela saiu em um veículo com uma bandeira vermelha, branca e preta. Percebi uma tatuagem no braço dela."
            },
            {
              "Place": {
                "key": "foreignministry",
                "value": "Ministério das Relações Exteriores"
              },
              "Guy":{
                "key":"undersecretary",
                "value":"Subsecretário"
              },
              "Clue": "uma suspeita esteve aqui e ela disse que estava interessada em pirâmides."
            }
          ],
          "destinations": ["Atenas","Cairo","Rio de Janeiro"]
        },
        {
          "city": {
            "name": "Cairo",
            "description": "O Cairo, localizado na foz do Rio Nilo, é a maior cidade da África.",
            "img": "cairo.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "museum",
                "value": "Museu"
              },
              "Guy": {
                "key": "curator",
                "value": "Gardião"
              },
              "Clue": "Uma fonte confiável me disse que ela queria estudar manuscritos saxônicos."
            },
            {
              "Place": {
                "key": "riverfront",
                "value": "Beira-rio"
              },
              "Guy": {
                "key": "sailorssnail",
                "value": "Caracol de marinheiro"
              },
              "Clue": "Minhas fontes me dizem que ela saiu em um rebocador com uma bandeira vermelha, branca e azul."
            },
            {
              "Place": {
                "key": "palace",
                "value": "Palácio"
              },
              "Guy": {
                "key": "palaceguard",
                "value": "Guarda do palácio"
              },
              "Clue": "A pessoa que você está procurando esteve aqui e ela disse que queria descobrir o que fazia o Big Ben funcionar."
            }
          ],
          "destinations": ["Londres","Colombo","Roma"]
        },
        {
          "city": {
            "name": "Londres",
            "description": "Londres, com uma população de mais de 6,5 milhões, é a maior cidade do Reino Unido. Um de seus muitos marcos é a torre do relógio Big Ben.",
            "img": "london.jpg"
          },
          "clues": [
            {
              "Place": {
                "key": "hotel",
                "value": "Hotel"
              },
              "Guy": {
                "key": "housedetective",
                "value": "Detetive particular"
              },
              "Clue": "Tudo que eu sei é que algo suspeito está acontecendo na cidade."
            },
            {
              "Place": {
                "key": "harbor",
                "value": "Porto"
              },
              "Guy": {
                "key": "sailor",
                "value": "Marinheiro"
              },
              "Clue": "Tudo que eu sei é que algo suspeito está acontecendo na cidade."
            },
            {
              "Place": {
                "key":"foreignministry",
                "value": "Ministério das Relações Exteriores"
              },
              "Guy": {
                "key": "palaceguard",
                "value": "Guarda do palácio"
              },
              "Clue": ""
            }
          ],
          "destinations": []
        }
      ],
      "thief": "Dazzle Annie Nonker",
      "endSuccess": {
        "thanks3": "tinha o saque, o elevador da Torre Eiffel, que será devolvido aos gratos moradores de Paris."
      }
    }
  }
];

export default Cases;