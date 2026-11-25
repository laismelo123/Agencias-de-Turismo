/* ===== TEXTOS (PT / EN / ES) ===== */
/* Objeto com TODOS os textos do site, separados por idioma (pt, en, es).
   Cada chave (ex.: heroTitle, visit, nada) é usada de duas formas:
   - no HTML, com data-i="chave" (o JS troca o texto automaticamente);
   - no JS, com t("chave"), que devolve o texto no idioma atual. */
const L = {
    pt: { heroTitle:"Descubra os melhores passeios de João Pessoa", heroSub:"Piscinas naturais, praias, passeios náuticos e história da capital paraibana em um só lugar.", search:"Buscar praia, passeio ou palavra-chave…", todos:"Todos", piscinas:"Piscinas Naturais", sul:"Litoral Sul", norte:"Litoral Norte", historico:"City Tour Histórico", nautico:"Passeios Náuticos", dur:"Duração", saida:"Saída", preco:"Preço", consulta:"Sob consulta", full:"Dia inteiro", ag:"Agência", ags:"Agências que oferecem este passeio", upd:"Atualizado em", visit:"Acessar Site Oficial", del:"Remover", roteiro:"Meu Roteiro", roteiroVazio:"Você ainda não salvou nenhum passeio.", nada:"Nenhum passeio encontrado.", nota:"Duração e ponto de saída são médios. Confirme valores e horários direto com a agência.", pTitle:"Sugira um parceiro", pSub:"É agência ou guia local? Envie seu site para entrar na plataforma.", fAg:"Nome da agência", fSite:"Site ou WhatsApp", fMail:"Seu e-mail", fMsg:"Mensagem", enviar:"Enviar sugestão", obrigado:"Obrigado, {n}! Sua sugestão foi validada com sucesso.", rodape:"Projeto acadêmico · UNIPÊ", colab:"Colaboradores", ant:"Anterior", prox:"Próximo", req:"Preencha este campo corretamente." },
    en: { heroTitle:"Discover the best tours in João Pessoa", heroSub:"Natural pools, beaches, boat trips and the history of Paraíba's capital, all in one place.", search:"Search beach, tour or keyword…", todos:"All", piscinas:"Natural Pools", sul:"South Coast", norte:"North Coast", historico:"Historic City Tour", nautico:"Boat Tours", dur:"Duration", saida:"Departure", preco:"Price", consulta:"On request", full:"Full day", ag:"Agency", ags:"Agencies offering this tour", upd:"Updated on", visit:"Visit Official Website", del:"Remove", roteiro:"My Itinerary", roteiroVazio:"You haven't saved any tours yet.", nada:"No tours found.", nota:"Duration and departure point are averages. Confirm prices and schedules directly with the agency.", pTitle:"Suggest a partner", pSub:"Are you a local agency or guide? Send your website to join the platform.", fAg:"Agency name", fSite:"Website or WhatsApp", fMail:"Your e-mail", fMsg:"Message", enviar:"Send suggestion", obrigado:"Thank you, {n}! Your suggestion was successfully validated.", rodape:"Academic project · UNIPÊ", colab:"Contributors", ant:"Previous", prox:"Next", req:"Please fill in this field correctly." },
    es: { heroTitle:"Descubre los mejores paseos de João Pessoa", heroSub:"Piscinas naturales, playas, paseos náuticos e historia de la capital de Paraíba en un solo lugar.", search:"Buscar playa, paseo o palabra clave…", todos:"Todos", piscinas:"Piscinas Naturales", sul:"Litoral Sur", norte:"Litoral Norte", historico:"City Tour Histórico", nautico:"Paseos Náuticos", dur:"Duración", saida:"Salida", preco:"Precio", consulta:"A consultar", full:"Día completo", ag:"Agencia", ags:"Agencias que ofrecen este paseo", upd:"Actualizado el", visit:"Acceder al Sitio Oficial", del:"Quitar", roteiro:"Mi Itinerario", roteiroVazio:"Aún no has guardado ningún paseo.", nada:"No se encontró ningún paseo.", nota:"La duración y el punto de salida son promedios. Confirma precios y horarios directamente con la agencia.", pTitle:"Sugiere un socio", pSub:"¿Eres agencia o guía local? Envía tu sitio para entrar en la plataforma.", fAg:"Nombre de la agencia", fSite:"Sitio o WhatsApp", fMail:"Tu correo", fMsg:"Mensaje", enviar:"Enviar sugerencia", obrigado:"¡Gracias, {n}! Tu sugerencia fue validada con éxito.", rodape:"Proyecto académico · UNIPÊ", colab:"Colaboradores", ant:"Anterior", prox:"Siguiente", req:"Completa este campo correctamente." }
};

/* ===== CATEGORIAS (cor e ícone) ===== */
/* Lista de categorias no formato [identificador, cor].
   O identificador é o mesmo usado em cat nos passeios e como chave de tradução. */
const CATS = [["todos","#0F766E"],["piscinas","#0E7490"],["sul","#15803D"],["norte","#C2410C"],["historico","#7E22CE"],["nautico","#1D4ED8"]];
/* Converte a lista CATS em objeto {categoria: cor}. Ex.: COR["sul"] devolve "#15803D" */
const COR = Object.fromEntries(CATS);
/* Emoji de cada categoria (aparece no selo do card e quando falta a foto) */
const ICO = { piscinas:"🏝️", sul:"🏖️", norte:"🌅", historico:"🏛️", nautico:"⛵" };

/* ===== PASSEIOS =====
   CORREÇÃO: antes cada passeio tinha UMA agência (ag) e, por isso, duas agências
   apareciam em passeios DIFERENTES. Agora cada passeio tem uma LISTA de agências (ags),
   então o mesmo passeio é mostrado uma vez, com todas as agências que o oferecem.
   ATENÇÃO: confirme com cada agência se ela realmente oferece o passeio e ajuste a lista. */
const LUCK = ["Luck Receptivo","https://luckreceptivo.com.br/"];
const JAMPA = ["Jampatur","https://jampatur.com/"];
const PBTUR = ["PBTUR","https://destinoparaiba.pb.gov.br/"];
/* Lista de passeios. Cada passeio tem:
   id: número único (liga o passeio à foto, aos favoritos e ao card);
   nome: título do card;  cat: categoria;  dur: duração ("full" = dia inteiro);
   saida: ponto de saída;  ags: lista de agências que oferecem o passeio;
   d: descrição nos três idiomas. */
const PASSEIOS = [
    { id:1, nome:"Piscinas Naturais de Picãozinho", cat:"piscinas", dur:"3h", saida:"Praia de Tambaú", ags:[LUCK, JAMPA],
      d:{ pt:"Piscinas naturais de águas claras na maré baixa, com mergulho e peixes coloridos.", en:"Clear natural pools at low tide, with snorkeling and colorful fish.", es:"Piscinas naturales de aguas claras en marea baja, con buceo y peces de colores." } },
    { id:2, nome:"Piscinas Naturais do Seixas", cat:"piscinas", dur:"2h", saida:"Praia do Seixas", ags:[JAMPA, LUCK],
      d:{ pt:"Piscinas naturais no extremo leste das Américas, ideais para relaxar.", en:"Natural pools at the easternmost point of the Americas, perfect to relax.", es:"Piscinas naturales en el extremo este de las Américas, ideales para relajarse." } },
    { id:7, nome:"Areia Vermelha", cat:"nautico", dur:"4h", saida:"Cabedelo", ags:[JAMPA, LUCK],
      d:{ pt:"Banco de areia em mar aberto com águas cristalinas, acessível de barco.", en:"Open-sea sandbank with crystal-clear water, reached by boat.", es:"Banco de arena en mar abierto con aguas cristalinas, al que se llega en barco." } },
    { id:3, nome:"Tambaba", cat:"sul", dur:"full", saida:"Hotel (transfer)", ags:[LUCK, JAMPA],
      d:{ pt:"Falésias, natureza preservada e uma das praias mais famosas do Litoral Sul.", en:"Cliffs, preserved nature and one of the most famous South Coast beaches.", es:"Acantilados, naturaleza preservada y una de las playas más famosas del Litoral Sur." } },
    { id:4, nome:"Coqueirinho", cat:"sul", dur:"full", saida:"Hotel (transfer)", ags:[JAMPA, LUCK],
      d:{ pt:"Praia de águas calmas e cenário de cartão-postal, entre coqueiros e falésias.", en:"Calm waters and a postcard scenery between coconut trees and cliffs.", es:"Aguas calmas y paisaje de postal entre cocoteros y acantilados." } },
    { id:5, nome:"Baía da Traição", cat:"norte", dur:"full", saida:"Hotel (transfer)", ags:[JAMPA, LUCK],
      d:{ pt:"Passeio de dia inteiro pelo Litoral Norte, com praias e cultura potiguara.", en:"Full-day trip along the North Coast, with beaches and Potiguara culture.", es:"Paseo de día completo por el Litoral Norte, con playas y cultura potiguara." } },
    { id:6, nome:"Pôr do Sol no Jacaré", cat:"nautico", dur:"2h", saida:"Praia do Jacaré", ags:[LUCK, JAMPA],
      d:{ pt:"Passeio de barco no Rio Paraíba ao entardecer, com o famoso saxofonista ao pôr do sol.", en:"Boat ride on the Paraíba River at dusk, with the famous sunset saxophonist.", es:"Paseo en barco por el Río Paraíba al atardecer, con el famoso saxofonista." } },
    { id:8, nome:"Centro Histórico", cat:"historico", dur:"4h", saida:"Hotel / Centro", ags:[PBTUR, JAMPA],
      d:{ pt:"City tour por igrejas, casarões e praças da cidade, uma das mais antigas do Brasil.", en:"City tour through churches, mansions and squares of one of Brazil's oldest cities.", es:"City tour por iglesias, casonas y plazas de una de las ciudades más antiguas de Brasil." } }
];
/* Data de atualização mostrada em todos os cards */
const ATUALIZADO = "11/2026";

/* ===== FOTOS (arquivos dentro da pasta img/) ===== */
/* Liga o id de cada passeio ao nome do arquivo de foto dentro da pasta img/ */
const IMAGENS = {
    1: "picaozinho.jpg",
    2: "seixas.png",
    3: "tambaba.webp",
    4: "coqueirinho.jpg",
    5: "baia_da_traicao.webp",
    6: "por_do_sol_do_jacare.webp",
    7: "areia_vermelha.jpg",
    8: "centro_historico.jpg"
};

/* Devolve o HTML da foto do passeio.
   Se não houver foto cadastrada, devolve um bloco colorido com o ícone da categoria. */
function foto(p) {
    const arquivo = IMAGENS[p.id];
    /* Operador ternário: condição ? se_verdadeiro : se_falso */
    return arquivo
        ? `<div class="foto-box"><img class="foto" src="img/${encodeURI(arquivo)}" alt="${p.nome}" loading="lazy" data-icone="${ICO[p.cat]}"></div>`
        : `<div class="sem-foto" aria-hidden="true">${ICO[p.cat]}</div>`;
}

/* ===== ESTADO ===== */
/* Atalho: $("#id") faz o mesmo que document.querySelector("#id") */
const $ = s => document.querySelector(s);
/* Lê um valor salvo no navegador (localStorage). Se não existir ou der erro, usa o valor padrão. */
const ler = (k, padrao) => { try { return JSON.parse(localStorage.getItem(k)) ?? padrao; } catch (e) { return padrao; } };
/* Salva um valor no navegador (localStorage) em formato de texto JSON */
const gravar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

/* VARIÁVEIS DE ESTADO (mudam enquanto o usuário usa o site) */
/* Idioma atual: o último escolhido (salvo no navegador) ou "pt" na primeira visita */
let lang = ler("lang", "pt");
/* Categoria selecionada no filtro */
let cat = "todos";
/* Texto digitado no campo de busca */
let busca = "";
/* Lista com os ids dos passeios favoritados (salva no navegador) */
let favs = ler("favs", []);
/* t("chave") devolve o texto no idioma atual. Ex.: t("visit") */
const t = k => L[lang][k];
/* Remove acentos e deixa tudo minúsculo, para a busca ignorar acentos e maiúsculas */
const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/* ===== TELA ===== */
/* Monta os botões de categoria.
   A classe "ativo" marca o selecionado; --c passa a cor da categoria para o CSS;
   data-cat guarda o identificador, que o clique lê mais abaixo. */
function filtros() {
    $("#filtros").innerHTML = CATS.map(([k, c]) =>
        `<button class="chip ${k === cat ? "ativo" : ""}" style="--c:${c}" data-cat="${k}">${t(k)}</button>`).join("");
}

/* Cada card mostra UM passeio e, embaixo, todas as agências que o oferecem (uma linha por agência) */
function cards(animar) {
    /* Liga ou desliga a classe "anima" (animação de entrada dos cards) */
    $("#grade").classList.toggle("anima", !!animar);
    /* a busca também encontra o nome das agências */
    /* Filtra os passeios: precisa estar na categoria escolhida E conter o texto da busca */
    const lista = PASSEIOS.filter(p =>
        (cat === "todos" || p.cat === cat) &&
        norm(p.nome + " " + p.d[lang] + " " + t(p.cat) + " " + p.ags.map(a => a[0]).join(" ")).includes(norm(busca)));

    /* Cria o HTML de cada card (template literal com ${...}) e coloca na grade; join("") junta tudo */
    $("#grade").innerHTML = lista.map(p => `
        <div class="col" id="passeio-${p.id}">
            <article class="card passeio h-100 shadow-sm" style="--c:${COR[p.cat]}">
                ${foto(p)}
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge selo">${ICO[p.cat]} ${t(p.cat)}</span>
                        <button class="fav ${favs.includes(p.id) ? "on" : ""}" data-fav="${p.id}" aria-pressed="${favs.includes(p.id)}" aria-label="♥">${favs.includes(p.id) ? "♥" : "♡"}</button>
                    </div>
                    <h3 class="h5 fw-bold">${p.nome}</h3>
                    <p class="card-text">${p.d[lang]}</p>
                    <ul class="list-unstyled info mb-3">
                        <li><strong>${t("dur")}:</strong> ${p.dur === "full" ? t("full") : p.dur}</li>
                        <li><strong>${t("saida")}:</strong> ${p.saida}</li>
                        <li><strong>${t("preco")}:</strong> ${t("consulta")}</li>
                        <li>${t("upd")} ${ATUALIZADO}</li>
                    </ul>

                    <div class="mt-auto">
                        <p class="fw-bold mb-2">${t("ags")}</p>
                        ${p.ags.map(a => `
                        <div class="d-flex justify-content-between align-items-center gap-2 mb-2">
                            <span>${a[0]}</span>
                            <a class="btn btn-visitar btn-sm" href="${a[1]}" target="_blank" rel="noopener">${t("visit")}</a>
                        </div>`).join("")}
                    </div>
                </div>
            </article>
        </div>`).join("");

    /* Mostra "nenhum passeio encontrado" só quando a lista está vazia (d-none esconde) */
    $("#vazio").classList.toggle("d-none", lista.length > 0);
}

/* Atualiza o contador do botão e a lista do painel "Meu Roteiro" */
function roteiro() {
    $("#qtd").textContent = favs.length;
    $("#lista-roteiro").innerHTML = favs.length
        ? favs.map(id => {
            /* Procura o passeio pelo id que foi salvo nos favoritos */
            const p = PASSEIOS.find(x => x.id === id);
            /* nome do passeio + link de cada agência que o oferece */
            return `<li class="list-group-item d-flex justify-content-between align-items-center gap-2">
                <div>
                    <div class="fw-semibold">${p.nome}</div>
                    <small>${p.ags.map(a => `<a href="${a[1]}" target="_blank" rel="noopener">${a[0]}</a>`).join(" · ")}</small>
                </div>
                <button class="btn btn-sm btn-outline-danger" data-del="${id}">${t("del")}</button></li>`;
        }).join("")
        : `<li class="list-group-item text-secondary">${t("roteiroVazio")}</li>`;
}

/* Aplica o idioma atual na página inteira */
function traduzir(animar) {
    /* Atualiza o atributo lang da tag <html> */
    document.documentElement.lang = { pt: "pt-BR", en: "en", es: "es" }[lang];
    /* Troca o texto de todo elemento que tem data-i */
    document.querySelectorAll("[data-i]").forEach(e => e.textContent = t(e.dataset.i));
    /* Troca o placeholder (dica) dos campos que têm data-ph */
    document.querySelectorAll("[data-ph]").forEach(e => e.placeholder = t(e.dataset.ph));
    /* Destaca (classe active) o botão do idioma escolhido */
    document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    /* Redesenha tudo que depende do idioma */
    filtros(); cards(animar); roteiro();
}

/* ===== EVENTOS ===== */
/* UM único "ouvinte" de clique para a página toda (delegação de eventos).
   Como os cards são criados pelo JS depois, ouvir o document garante que seus botões também funcionem. */
document.addEventListener("click", e => {
    /* closest() procura o elemento clicado (ou um pai dele) com o atributo indicado.
       Se não achar, devolve null; assim sabemos em qual tipo de botão o usuário clicou. */
    const idioma = e.target.closest("[data-lang]");
    const chip = e.target.closest("[data-cat]");
    const fav = e.target.closest("[data-fav]");
    const del = e.target.closest("[data-del]");
    const ir = e.target.closest("[data-ir]");

    /* Clique em PT/EN/ES: guarda o idioma e traduz a página */
    if (idioma) { lang = idioma.dataset.lang; gravar("lang", lang); traduzir(); }

    /* Clique em uma categoria: atualiza o filtro, a cor de destaque e os cards */
    if (chip) {
        cat = chip.dataset.cat;
        document.documentElement.style.setProperty("--acento", COR[cat]);   /* hero muda de cor */
        filtros(); cards(true);
    }

    /* Clique no coração: Number() converte o texto do atributo em número.
       Se o id já está nos favoritos, remove (filter); se não está, adiciona (spread [...]). */
    if (fav) {
        const id = Number(fav.dataset.fav);
        favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
        gravar("favs", favs); cards(); roteiro();
    }

    /* Clique em "Remover" no painel do roteiro: tira o id dos favoritos */
    if (del) {
        favs = favs.filter(x => x !== Number(del.dataset.del));
        gravar("favs", favs); cards(); roteiro();
    }

    /* legenda do carrossel: vai até o card do passeio */
    if (ir) {
        /* Limpa filtro e busca para garantir que o card do passeio esteja na tela */
        cat = "todos"; busca = ""; $("#busca").value = "";
        document.documentElement.style.setProperty("--acento", COR[cat]);
        filtros(); cards(true);
        const alvo = $("#passeio-" + ir.dataset.ir);
        /* Rola suavemente até o card */
        alvo.scrollIntoView({ behavior: "smooth", block: "center" });
        /* Faz o card piscar (efeito do CSS) por 2 segundos e depois remove a classe */
        const card = alvo.querySelector(".passeio");
        card.classList.add("piscar");
        setTimeout(() => card.classList.remove("piscar"), 2000);
    }
});

/* A cada letra digitada, guarda o texto e redesenha os cards filtrados */
$("#busca").addEventListener("input", e => { busca = e.target.value; cards(); });

/* FORMULÁRIO DE PARCEIROS */
/* Pega o formulário do HTML */
const form = $("#form-parceiro");
/* Quando o formulário for enviado... */
form.addEventListener("submit", e => {
    /* Impede o envio padrão (que recarregaria a página) */
    e.preventDefault();
    /* Se algum campo obrigatório estiver inválido, mostra os erros (was-validated) e para */
    if (!form.checkValidity()) { form.classList.add("was-validated"); return; }

    /* Cria a mensagem de sucesso, trocando {n} pelo nome da agência digitado */
    const alerta = document.createElement("div");
    alerta.className = "alert alert-success mb-0";
    alerta.setAttribute("role", "alert");
    alerta.textContent = t("obrigado").replace("{n}", $("#ag").value.trim());
    /* Coloca a mensagem na tela, substituindo a anterior */
    $("#alerta").replaceChildren(alerta);

    /* Limpa os campos e remove o estado de validação */
    form.reset();
    form.classList.remove("was-validated");
});

/* se a imagem não for encontrada, mostra um bloco colorido com o ícone */
/* O evento "error" de imagem não "sobe" como o clique; por isso o true no final (captura). */
document.addEventListener("error", e => {
    if (!e.target.classList || !e.target.classList.contains("foto")) return;
    const bloco = document.createElement("div");
    bloco.className = "sem-foto";
    bloco.textContent = e.target.dataset.icone;
    e.target.replaceWith(bloco);
}, true);

/* ===== CARROSSEL DE FOTOS NO TOPO ===== */
/* Monta o carrossel do topo com as fotos dos passeios */
function carrossel() {
    /* Só entram no carrossel os passeios que têm foto cadastrada */
    const fotos = PASSEIOS.filter(p => IMAGENS[p.id]);

    /* Cria um slide por foto; só o primeiro recebe "active" (aparece primeiro) */
    $("#slides").innerHTML = fotos.map((p, i) =>
        `<div class="carousel-item ${i ? "" : "active"}"><img class="slide-img" src="img/${encodeURI(IMAGENS[p.id])}" alt="${p.nome}"></div>`).join("");

    /* Cria as bolinhas de navegação, uma por foto */
    $("#indicadores").innerHTML = fotos.map((p, i) =>
        `<button type="button" data-bs-target="#carrossel" data-bs-slide-to="${i}" ${i ? "" : 'class="active" aria-current="true"'} aria-label="${p.nome}"></button>`).join("");

    /* A legenda mostra o nome do passeio da foto atual; ao clicar, leva ao card (data-ir) */
    const legenda = $("#legenda");
    const mostrar = i => { legenda.textContent = "📍 " + fotos[i].nome; legenda.dataset.ir = fotos[i].id; };
    /* Começa mostrando a legenda da primeira foto */
    mostrar(0);

    const el = $("#carrossel");
    /* Evento do Bootstrap: a cada troca de slide, atualiza a legenda (e.to = slide de destino) */
    el.addEventListener("slide.bs.carousel", e => mostrar(e.to));

    /* troca sozinho a cada 5s e pausa com o mouse em cima (não troca sozinho se o sistema pede menos animação) */
    const reduzir = matchMedia("(prefers-reduced-motion: reduce)").matches;
    /* Inicia o carrossel com as opções acima */
    new bootstrap.Carousel(el, { interval: 5000, pause: "hover", ride: !reduzir });
}

/* Daqui para baixo é o que roda assim que a página carrega */
/* INÍCIO */
/* Coloca o ano atual no rodapé */
$("#ano").textContent = new Date().getFullYear();
/* Aplica o idioma salvo e desenha filtros, cards e roteiro pela primeira vez (com animação) */
traduzir(true);
/* Monta o carrossel do topo */
carrossel();
