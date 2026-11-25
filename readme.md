Passeios em Jampa

Site de turismo que reúne os principais passeios de João Pessoa (PB): piscinas naturais, praias, passeios náuticos e história da capital paraibana. Cada passeio mostra as agências que o oferecem, para o usuário comparar e acessar o site oficial de cada uma.

Projeto desenvolvido em grupo.

Funcionalidades
Busca por praia, passeio, palavra-chave ou nome da agência.
Filtros por categoria, cada uma com sua cor: Piscinas Naturais, Litoral Sul, Litoral Norte, City Tour Histórico e Passeios Náuticos.
Cards de passeio com foto, descrição, duração, saída e preço (sob consulta).
Várias agências por passeio, cada uma com o botão "Acessar Site Oficial".
Favoritos e "Meu Roteiro": o coração salva o passeio e o painel lista os links das agências.
Carrossel no topo com legenda; clicar nela leva ao card do passeio, que pisca em destaque.
Três idiomas: português, inglês e espanhol, sem recarregar a página.
Formulário de contato com validação e mensagem de sucesso.
Acessibilidade: respeita prefers-reduced-motion (reduz animações).
Tecnologias
HTML5
CSS3 + Bootstrap 5.3.3 (via CDN)
JavaScript puro (sem frameworks)
Estrutura
├── index.html        # estrutura da página (containers vazios: #grade, #legenda, #slides)
├── css/
│   └── style.css     # estilos próprios: cores por categoria, hero, cards, animações
└── js/
    └── script.js     # dados, textos PT/EN/ES, filtros, busca, favoritos, eventos, carrossel

Todos os arquivos têm comentários explicando cada parte do código.

Como funciona o JavaScript
Dados: a lista PASSEIOS guarda id, cat, dur, ags e d de cada passeio; os cards são gerados a partir dela.
Textos: o objeto L guarda as traduções; no HTML usa-se data-i e no JS a função t("chave").
Estado: lang, cat, busca e favs controlam o que aparece na tela.
Eventos: um único listener de clique (delegação de eventos) com closest() trata os cards criados dinamicamente.
Como executar

Não precisa instalar nada. Abra o index.html no navegador (é preciso internet para carregar o Bootstrap via CDN).

Atenção aos dados

As agências de cada passeio (campo ags) foram preenchidas como exemplo (Luck Receptivo, Jampatur e PBTUR). Confira e ajuste a lista de cada passeio conforme o que o grupo apurou. Duração, saída e preço são do passeio, não de cada agência.

Próximos passos
Preço, duração e saída próprios de cada agência.
Confirmar quais agências realmente vendem cada passeio.
