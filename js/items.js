var items = [
    { id: 'acucareiro', name: 'Açucareiro', price: 23.00, count: 3 },
    { id: 'assadeira-aluminio-redonda', name: 'Assadeira alumí­nio (redonda)', price: 9.90, count: 3 },
    { id: 'assadeira-aluminio-retangular', name: 'Assadeira alumí­nio (retangular)', price: 19.90, count: 3 },
    { id: 'bacia-plastica', name: 'Bacia plástica', price: 7.99, count: 3 },
    { id: 'balde-e-pegador-de-gelo-inox', name: 'Balde e pegador de gelo (inox)', price: 55, count: 3 },
    { id: 'balde-plastico', name: 'Balde plástico', price: 15.00, count: 3 },
    { id: 'batedeira', name: 'Batedeira', price: 119.00, count: 3 },
    { id: 'bistequeira', name: 'Bistequeira', price: 33.00, count: 3 },
    { id: 'cabide', name: 'Cabides (3 pecas)', price: 4.90, count: 3 },
    { id: 'cafeteira', name: 'Cafeteira', price: 80.00, count: 3 },
    { id: 'cantoneira-para-banheiro', name: 'Cantoneira para banheiro', price: 26.90, count: 3 },
    { id: 'centrifuga-de-salada', name: 'Centrifuga de salada', price: 19.90, count: 3 },
    { id: 'cestinha-para-grampos-de-roupas', name: 'Cestinha para grampos de roupas', price: 1.99, count: 3 },
    { id: 'cesto-para-roupas', name: 'Cesto para roupas', price: 40.00, count: 3 },
    { id: 'cobre-bolo', name: 'Cobre bolo', price: 34.00, count: 3 },
    { id: 'colher-de-arroz-inox', name: 'Colher de arroz (inox)', price: 14.00, count: 3 },
    { id: 'colher-de-pau-bambu', name: 'Colher de pau/bambu', price: 7.00, count: 3 },
    { id: 'concha-inox', name: 'Concha (inox)', price: 7.00, count: 3 },
    { id: 'conjunto-de-potes', name: 'Conjunto de potes', price: 16.00, count: 3 },
    { id: 'coqueteleira', name: 'Coqueteleira', price: 39.00, count: 3 },
    { id: 'escorredor-de-loucas-inox', name: 'Escorredor de loucas (inox)', price: 67, count: 3 },
    { id: 'escova-sanitaria-com-suporte', name: 'Escova sanitária com suporte', price: 35.90, count: 3 },
    { id: 'escumadeira-inox', name: 'Escumadeira (inox)', price: 12, count: 3 },
    { id: 'espagueteira', name: 'Espagueteira', price: 70.00, count: 3 },
    { id: 'espatula-para-bolo', name: 'Espátula para bolo', price: 9.90, count: 3 },
    { id: 'espatula-silicone', name: 'Espátula - silicone', price: 4.00, count: 3 },
    { id: 'farinheira-plastico', name: 'Farinheira (plástico)', price: 12.90, count: 3 },
    { id: 'forma-para-pizza', name: 'Forma para pizza', price: 13.90, count: 3 },
    { id: 'forminha-de-gelo', name: 'Forminha de gelo (silicone)', price: 19.90, count: 3 },
    { id: 'frigideira-antiaderente', name: 'Frigideira antiaderente', price: 17.00, count: 3 },
    { id: 'fruteira-de-mesa', name: 'Fruteira de mesa', price: 13.00, count: 3 },
    { id: 'funil', name: 'Funil', price: 1.99, count: 3 },
    { id: 'galheteiro-inox', name: 'Galheteiro (inox)', price: 70.00, count: 3 },
    { id: 'garrafa-termica', name: 'Garrafa térmica', price: 49.90, count: 3 },
    { id: 'grill', name: 'Grill', price: 99.90, count: 3 },
    { id: 'jarra-de-agua-vidro', name: 'Jarra de água (vidro)', price: 21.90, count: 3 },
    { id: 'jarra-de-suco-vidro', name: 'Jarra de suco (vidro)', price: 21.90, count: 3 },
    { id: 'jogo-de-baixelas', name: 'Jogo de baixelas (3 pecas)', price: 80, count: 3 },
    { id: 'jogo-de-copos-de-cerveja', name: 'Jogo de copos de cerveja (6 pecas)', price: 35.40, count: 3 },
    { id: 'jogo-de-copos-de-vidro', name: 'Jogo de copos de vidro (6 pecas)', price: 42, count: 3 },
    { id: 'jogo-de-copos-de-whisky', name: 'Jogo de copos de whisky (6 pecas)', price: 47, count: 3 },
    { id: 'jogo-de-panelas-inox', name: 'Jogo de panelas (inox)', price: 129.00, count: 3 },
    { id: 'jogo-de-pratos', name: 'Jogo de pratos (com 6)', price: 60, count: 3 },
    { id: 'jogo-de-tacas-de-vinho', name: 'Jogo de tacas de vinho', price: 41.40, count: 3 },
    { id: 'jogo-de-talheres', name: 'Jogo de talheres de mesa', price: 85, count: 3 },
    { id: 'jogo-de-xicaras-com-pires', name: 'Jogo de xí­caras com pires (com 6)', price: 80, count: 3 },
    { id: 'kit-banheiro', name: 'Kit-banheiro', price: 19.90, count: 3 },
    { id: 'kit-caipirinha', name: 'Kit-caipirinha', price: 15.00, count: 3 },
    { id: 'liquidificador', name: 'Liquidificador', price: 99.90, count: 3 },
    { id: 'lixeira-para-banheiro', name: 'Lixeira para banheiro', price: 24.90, count: 3 },
    { id: 'lixeira-para-cozinha', name: 'Lixeira para cozinha', price: 62, count: 3 },
    { id: 'luvas-termicas', name: 'Luvas térmicas', price: 12.9, count: 3 }, 
    { id: 'mantegueira-inox', name: 'Mantegueira (inox)', price: 27, count: 3 },
    { id: 'maquina-de-pao', name: 'Máquina de pão', price: 219, count: 3 },
    { id: 'marinex-com-tampa', name: 'Marinex com tampa', price: 19, count: 3 },
    { id: 'mini-varal', name: 'Mini-varal', price: 4, count: 3 },
    { id: 'molheira', name: 'Molheira (4 pecas)', price: 8, count: 3 }, 
    { id: 'omeleteira', name: 'Omeleteira', price: 36, count: 3 }, 
    { id: 'pa-de-lixo-com-escova', name: 'Pá de lixo com escova', price: 5, count: 3 }, 
    { id: 'panela-de-aluminio-grande', name: 'Panela de alumí­nio (grande)', price: 27.90, count: 3 }, 
    { id: 'panela-de-aluminio-pequena', name: 'Panela de alumí­nio (pequena)', price: 23.90, count: 3 }, 
    { id: 'panela-de-arroz', name: 'Panela de arroz (elétrica)', price: 129.00, count: 3 }, 
    { id: 'panela-de-pressao', name: 'Panela de pressão', price: 79, count: 3 }, 
    { id: 'panela-wok', name: 'Panela Wok', price: 80, count: 3 }, 
    { id: 'pegador-de-massas-inox', name: 'Pegador de massas (inox)', price: 7.50, count: 3 },
    { id: 'pegador-de-sorvete-inox', name: 'Pegador de sorvete (inox)', price: 26, count: 3 },
    { id: 'peneira', name: 'Peneira', price: 9, count: 3 },
    { id: 'petisqueira-de-vidro', name: 'Petisqueira de vidro', price: 26.90, count: 3 },
    { id: 'porta-detergente-e-esponja', name: 'Porta - detergente e esponja', price: 15, count: 3 },
    { id: 'porta-frios', name: 'Porta - frios', price: 10, count: 3 },
    { id: 'porta-pao-plastico', name: 'Porta - pão (plástico) ', price: 6.90, count: 3 },
    { id: 'porta-papel-toalha-com-ventosas', name: 'Porta - papel toalha com ventosas', price: 16, count: 3 },
    { id: 'porta-queijo-ralado', name: 'Porta - queijo ralado', price: 9.90, count: 3 },
    { id: 'porta-talheres-de-gaveta', name: 'Porta - talheres de gaveta', price: 10, count: 3 },
    { id: 'porta-temperos', name: 'Porta - temperos', price: 46, count: 3 },
    { id: 'potinhos-para-sobremesa', name: 'Potinhos para sobremesa (6 pecas)', price: 24, count: 3 }, 
    { id: 'puxa-saco', name: 'Puxa-saco', price: 21.90, count: 3 },
    { id: 'queijeira', name: 'Queijeira', price: 19, count: 3 },
    { id: 'refratario-com-tampa', name: 'Refratário com tampa', price: 21.90, count: 3 },
    { id: 'rolo-para-massa', name: 'Rolo para massa', price: 18, count: 3 },
    { id: 'saca-rolhas', name: 'Saca rolhas', price: 22, count: 3 },
    { id: 'saladeira-plastico', name: 'Saladeira de plástico', price: 11.90, count: 3 },
    { id: 'suporte-para-caixa-de-leite', name: 'Suporte para caixa de leite', price: 17, count: 3 },
    { id: 'suporte-para-colher-plastico', name: 'Suporte para colher (plástico)', price: 5, count: 3 },
    { id: 'tabua-de-corte', name: 'Tábua de corte', price: 29.90, count: 3 },
    { id: 'tapete-para-banheiro', name: 'Tapete para banheiro', price: 22.90, count: 3 },
    { id: 'tigela-tipo-bowl', name: 'Tigela tipo bowl', price: 17, count: 3 },
    { id: 'toalha-de-mesa-retangular', name: 'Toalha de mesa retangular', price: 37, count: 3 },
    { id: 'tv-lg-ld650', name: 'TV LG 55LD650', price: 6122.99, count: 3 },
    { id: 'tv-sony-xbr52hx905', name: 'TV Sony XBR52HX905', price: 9681.50, count: 3 },
    { id: 'varal-de-chao', name: 'Varal de chão', price: 60.00, count: 3 }
];
