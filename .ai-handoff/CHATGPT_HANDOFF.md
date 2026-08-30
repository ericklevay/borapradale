# CHATGPT_HANDOFF

Projeto: borapradale
Atualizado em: 2026-08-30 17:45:00 -03
Origem: /Volumes/SSD-ERICK/03_AI/Projeto com IA/BORAPRADALE

## Como usar este arquivo

Leia este handoff antes de sugerir arquitetura, codigo, plano de implementacao ou proximos passos. Ele aponta para os documentos mais importantes e registra o estado operacional do projeto.

## Stack detectada

- Node/JavaScript project detected via package.json
- Vite config detected

## Leia primeiro

- README.md

## Estado atual

- Status: `origin/main` ja tinha sido atualizado por outra sessao/pessoa com um redesenho completo (paleta vermelho/escuro `#0F0406`/`#7A1522`/`#EF4444`, ao inves do azul/roxo/dourado anterior) e com a data certa do evento (18/09/2026), mas com dados desatualizados/errados. Nesta sessao eu sincronizei o local com o origin/main (fast-forward, sem perder o redesenho) e corrigi os dados por cima dele. Ainda NAO commitado.
- Objetivo ativo: fazer o site refletir com precisao o evento real publicado no Sympla — "Baile de Aniversario DALE e AMP213", sexta 18/09/2026, AMP213 Olinda (link: https://www.sympla.com.br/evento/baile-de-aniversario-dale-e-amp213-sexta-18-de-setembro-olinda-rua-do-amparo-213/3559305).
- Ultima decisao relevante: NAO renomeei o titulo/marca do evento no `index.html` (ficou "DALE - Edicao de Aniversario", escolha ja feita em commits anteriores do remoto) — so corrigi fatos incorretos (link do Sympla, lotes de ingresso, imagem do hero, atracao Los Guaracheros). Ver "Riscos e cuidados" sobre por que isso quase deu problema.
- O que esta funcionando: build local via `npm run dev` renderizado e verificado no browser depois de cada rodada de edicao — hero com o cartaz certo, contagem regressiva, programacao, atracoes, ingressos, FAQ, footer, todos conferidos via `get_page_text` e screenshot.
- O que esta quebrado ou incerto: `npm run lint` / `npm test` / `npm run typecheck` NAO existem no `package.json` deste projeto (so ha `build` e `dev`) — a validacao de qualidade do XOIA workflow foi feita via preview visual, nao via esses scripts. `src/app/App.tsx` tem >1150 linhas (acima do limite de 500 linhas recomendado no CLAUDE.md do workspace) — nao foi refatorado nesta sessao para nao ampliar o escopo do pedido.

## Git

```text
Branch: main, sincronizado com origin/main via fast-forward (fbaed8c) antes desta rodada de edicoes.

Ultimos commits em origin/main antes desta sessao:
fbaed8c feat: atualizar dados para DALE Edicao de Aniversario em 18/09
83a0ee9 feat: atualiza logo do site, remove secao do aulao e ajusta termos para Musica da America Latina
9e94902 fix: marca ingresso 1º Lote Abre Alas como esgotado
6aabe0f fix: remove texto BORA PRA e ajusta espacamento do topo (hero)
ed65c9a fix: atualiza cartaz oficial no topo do site (hero)
22881f8 fix: atualiza video para novo Shorts (7OikNAgw0-c)
2fe8814 feat: foto da pista no fundo do hero, propaganda na frente, aulao e...
11974e4 feat: aplica foto hero oficial do Sympla e altera tons do site para v...
1ffd0fb fix: atualiza evento para DALE ME GUSTA (21 de Agosto) e novo link do...
```

## Mudancas recentes (nesta sessao, em cima do fbaed8c ja sincronizado)

- `public/img/hero.jpg`: substituida — estava com o cartaz do evento ANTERIOR ("DALE Me Gusta", 21 de agosto), agora e o cartaz oficial do "Baile de Aniversario DALE e AMP213" (18/set). Arquivo original: `/Volumes/SSD-ERICK/01_EMPRESAS/AMP 213/04_MARKETING/DALE/DALE AMP/SYMPLA-01.jpg.jpeg` (1600x838).
- `src/app/App.tsx`:
  - Hero: `width`/`height`/`alt` da imagem ajustados para o cartaz novo.
  - Sobre / Schedule / FAQ: horario do shot cortesia corrigido de "20h" para "21h" (estava inconsistente — a secao Sobre dizia 20h, o Schedule e a FAQ ja diziam 21h).
  - Schedule: removido o item "Aulao de Salsa & Bachata 19h30-20h30" que nao existe mais neste evento (a secao "Aulao" completa ja tinha sido removida em commit anterior do remoto, mas esse item individual do cronograma tinha ficado esquecido). Reescrito com a programacao real do Sympla: abertura 19h, DJ Incidental assume a pista as 20h, Corpo de Baile abre a pista logo em seguida (sem aula formal), show Los Guaracheros ao longo da noite, encerramento 01h.
  - Lineup (Atracoes): adicionado card "LOS GUARACHEROS" (show ao vivo, banda tocando no quintal e no salao) — nao existia nenhuma mencao a essa atracao antes.
  - Tickets: os 6 lotes foram corrigidos para bater com os lotes reais do Sympla — Abre Alas R$30 (1º lote), Dale Festa R$40 (2º lote), Casal/Date R$50 (1º lote, destacado como "mais popular") e R$60 (2º lote), Mesa Bistro 2 pessoas R$100 (2º lote), Mesa Bistro 4 pessoas R$180 (1º lote). O remoto ainda tinha os lotes ANTIGOS (incluindo um tier "Mae Solo" que nao existe mais neste evento) e o link de compra do Sympla ainda apontava para o evento errado ("DALE Me Gusta" 21/ago) — ambos corrigidos.
  - FAQ: resposta sobre "preciso saber dancar" ajustada — nao ha mais aula formal, e o Corpo de Baile que abre a pista puxando os primeiros movimentos.
- `index.html`: JSON-LD (`performer`) e meta description/OG/Twitter ganharam mencao a "Los Guaracheros" (show ao vivo). Titulo/nome do evento ("DALE - Edicao de Aniversario") NAO foi alterado — e uma escolha de marca ja feita em commits anteriores do remoto, entao mantive.

## Comandos relevantes

```bash
npm run dev
npm run build
```

## Riscos e cuidados

- **ATENCAO — colisao com trabalho remoto:** no inicio desta sessao eu tinha feito uma rodada completa de edicoes em cima de uma base LOCAL desatualizada (9 commits atras do origin/main), incluindo trocar toda a paleta de cores de volta para azul/roxo/dourado. So percebi o problema ao tentar dar push e ver que `origin/main` ja tinha um redesenho completo feito por outra sessao. Teria sobrescrito esse trabalho se eu nao tivesse checado `git log main..origin/main` antes do commit. **Sempre rodar `git fetch` + comparar `git log main..origin/main` antes de commitar/dar push neste projeto**, especialmente se a sessao ficou muito tempo sem sincronizar.
- Nao copiar codigo sem conferir o caminho do arquivo.
- Nao assumir que documentacao antiga esta atualizada — o histórico de eventos deste site muda com frequencia (ja passou por "DALE Aura" 17/jul, "DALE Me Gusta" 21/ago, e agora "Baile de Aniversario" 18/set em poucas semanas).
- Nao incluir segredos, tokens, .env ou credenciais neste arquivo.
- Preferir links e caminhos de arquivo a grandes blocos copiados.

## Proximos passos sugeridos

1. Commitar e dar push destas correcoes (link do Sympla certo, lotes certos, hero certo, Los Guaracheros) em cima do `origin/main` ja sincronizado.
2. Pedir para o cliente confirmar visualmente o site publicado antes de considerar o ciclo encerrado — especialmente os 6 preços de ingresso e o link de compra.
3. Considerar quebrar `src/app/App.tsx` (>1150 linhas) em componentes menores por secao, ja que o CLAUDE.md do workspace pede arquivos com menos de 500 linhas.
4. Ao fazer a proxima atualizacao de evento neste site, checar `git log main..origin/main` ANTES de comecar a editar, nao so antes de commitar — economiza retrabalho.

## Pergunta pronta para o ChatGPT

```text
Leia o CHATGPT_HANDOFF deste projeto e me ajude a decidir o proximo passo mais seguro para: revisar as correcoes de dados do Baile de Aniversario DALE e AMP213 (18/set/2026) que apliquei em cima do redesenho ja existente no origin/main, e confirmar se ficou tudo consistente antes do push.
```
