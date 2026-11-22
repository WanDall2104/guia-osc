import type { DiagnosticQuestion } from './oscData';

export interface DocumentTemplate {
  id: string;
  title: string;
  category: 'Modelo Editável' | 'Orientação Jurídica' | 'Checklist Prático';
  legalRef: string;
  summary: string;
  fileBaseName: string;
  content: string;
}

export const DOCUMENT_TEMPLATES: DocumentTemplate[] = [
  {
    id: 'modelo-estatuto',
    title: 'Modelo de Estatuto Social de Associação',
    category: 'Modelo Editável',
    legalRef: 'Código Civil (art. 54) · MROSC (art. 33)',
    summary:
      'Minuta completa com cláusulas de finalidade pública, órgãos de governança, destinação do patrimônio na dissolução e normas contábeis exigidas para parcerias.',
    fileBaseName: 'modelo-estatuto-social-osc',
    content: `ESTATUTO SOCIAL DA [NOME COMPLETO DA ASSOCIAÇÃO]

CAPÍTULO I — DA DENOMINAÇÃO, SEDE, FORO E DURAÇÃO
Art. 1º A [NOME COMPLETO DA ASSOCIAÇÃO], doravante denominada simplesmente ASSOCIAÇÃO, é uma pessoa jurídica de direito privado, constituída sob a forma de associação civil sem fins lucrativos, de caráter [educacional / esportivo / cultural / assistencial / de defesa de direitos], com prazo de duração indeterminado, regida por este Estatuto Social, pelo Código Civil Brasileiro (Lei nº 10.406/2002) e demais disposições legais aplicáveis.
Art. 2º A ASSOCIAÇÃO tem sede e foro no município de [CIDADE/UF], localizada na [ENDEREÇO COMPLETO, Nº, BAIRRO, CEP], podendo abrir unidades ou núcleos de atuação em outras localidades mediante deliberação da Assembleia Geral.

CAPÍTULO II — DOS OBJETIVOS E FINALIDADES DE INTERESSE PÚBLICO (Art. 33, I, Lei nº 13.019/2014)
Art. 3º A ASSOCIAÇÃO tem por finalidade o desenvolvimento de ações e projetos voltados à promoção de atividades de relevância pública e social, especialmente:
I — [Descrever objetivo principal, ex.: promover a iniciação esportiva e a inclusão social de crianças, adolescentes, idosos e pessoas com deficiência];
II — [Descrever segundo objetivo, ex.: desenvolver oficinas educativas, culturais e ações de fortalecimento comunitário];
III — celebrar parcerias, termos de colaboração, termos de fomento, acordos de cooperação, convênios e contratos com o Poder Público e a iniciativa privada para a consecução de seus objetivos sociais.
Parágrafo único. A ASSOCIAÇÃO não distribui entre seus associados, conselheiros, diretores, empregados ou doadores eventuais resultados, sobras, excedentes operacionais, dividendos, bonificações ou parcelas do seu patrimônio, aplicando-os integralmente na consecução de seu objetivo social.

CAPÍTULO III — DOS ASSOCIADOS, DIREITOS E DEVERES
Art. 4º Poderão ingressar como associados pessoas físicas ou jurídicas interessadas em contribuir com as finalidades da ASSOCIAÇÃO, mediante aprovação da Diretoria.
Art. 5º São direitos dos associados quites com suas obrigações:
I — participar das Assembleias Gerais, com direito a voz e voto;
II — votar e ser votado para os cargos eletivos;
III — propor medidas e projetos de interesse institucional.
Art. 6º São deveres dos associados cumprir este Estatuto, acatar as deliberações da Assembleia Geral e zelar pelo patrimônio e boa imagem da entidade.
Art. 7º O associado poderá desligar-se a qualquer tempo mediante solicitação por escrito. A exclusão somente ocorrerá por justa causa, assegurado o direito à ampla defesa e recurso à Assembleia Geral (art. 57 do Código Civil).
Art. 8º Os associados não respondem, nem mesmo subsidiariamente, pelas obrigações sociais assumidas pela ASSOCIAÇÃO.

CAPÍTULO IV — DA ESTRUTURA ADMINISTRATIVA E ÓRGÃOS DE GESTÃO
Art. 9º São órgãos da ASSOCIAÇÃO:
I — Assembleia Geral;
II — Diretoria Executiva;
III — Conselho Fiscal.
Art. 10 Compete privativamente à Assembleia Geral (art. 59 do Código Civil):
I — eleger e destituir os administradores e membros do Conselho Fiscal;
II — aprovar as contas anuais e o relatório de atividades;
III — alterar este Estatuto Social;
IV — deliberar sobre a dissolução da ASSOCIAÇÃO.
Art. 11 A Diretoria Executiva será composta por Presidente, Vice-Presidente, Secretário e Tesoureiro, eleitos para mandato de [2 ou 3] anos, permitida a reeleição.
Art. 12 O Conselho Fiscal será composto por 3 (três) membros titulares, responsáveis por examinar os registros contábeis, balancetes e emitir parecer sobre a prestação de contas anual.

CAPÍTULO V — DO PATRIMÔNIO, CONTABILIDADE E TRANSPARÊNCIA (Art. 33, IV, Lei nº 13.019/2014)
Art. 13 O patrimônio e as receitas da ASSOCIAÇÃO serão constituídos por contribuições de associados, doações, patrocínios, termos de parceria com o Poder Público, leis de incentivo, emendas parlamentares e rendimentos de aplicações financeiras.
Art. 14 A ASSOCIAÇÃO observará os princípios fundamentais de contabilidade e as Normas Brasileiras de Contabilidade (NBC), mantendo escrituração regular de suas receitas e despesas e dando publicidade anual ao relatório de atividades e às demonstrações financeiras.

CAPÍTULO VI — DA DISSOLUÇÃO E DESTINAÇÃO DO PATRIMÔNIO (Art. 33, III, Lei nº 13.019/2014)
Art. 15 Em caso de dissolução da ASSOCIAÇÃO, aprovada em Assembleia Geral especialmente convocada, o respectivo patrimônio líquido será transferido a outra pessoa jurídica de igual natureza que preencha os requisitos da Lei nº 13.019/2014 e cujo objeto social seja, preferencialmente, o mesmo da entidade extinta.

[CIDADE/UF], [DIA] de [MÊS] de [ANO].

____________________________________________
[Nome do(a) Presidente] — Presidente

____________________________________________
[Nome do(a) Advogado(a)] — OAB/[UF] nº [XXXXXX]
(Nota: o visto de advogado é exigido para registro em cartório, conforme Lei nº 8.906/1994, art. 1º, § 2º.)`,
  },
  {
    id: 'modelo-ata',
    title: 'Modelo de Ata de Assembleia de Constituição',
    category: 'Modelo Editável',
    legalRef: 'Código Civil (art. 45 e 59) · Lei nº 6.015/1973',
    summary:
      'Documento formal indispensável para protocolar o registro da OSC no Cartório de Registro Civil de Pessoas Jurídicas (RCPJ), com aprovação do estatuto e eleição da diretoria.',
    fileBaseName: 'modelo-ata-constituicao-osc',
    content: `ATA DA ASSEMBLEIA GERAL DE CONSTITUIÇÃO, APROVAÇÃO DO ESTATUTO SOCIAL E ELEIÇÃO E POSSE DA PRIMEIRA DIRETORIA DA [NOME COMPLETO DA ASSOCIAÇÃO]

Aos [DIA] dias do mês de [MÊS] de [ANO], às [HORA] horas, na sede localizada na [ENDEREÇO COMPLETO, CIDADE/UF], reuniram-se os cidadãos abaixo assinados e qualificados em lista de presença anexa, com o objetivo de fundar a organização da sociedade civil sem fins lucrativos denominada [NOME COMPLETO DA ASSOCIAÇÃO].

1. ABERTURA E COMPOSIÇÃO DA MESA
Por aclamação dos presentes, assumiu a presidência dos trabalhos o(a) Sr.(a) [NOME], que convidou o(a) Sr.(a) [NOME] para secretariar a reunião e lavrar a presente Ata.

2. ORDEM DO DIA
O(A) Presidente apresentou a pauta da Assembleia Geral de Constituição:
a) Deliberação sobre a criação formal da [NOME COMPLETO DA ASSOCIAÇÃO];
b) Leitura, discussão e aprovação do Estatuto Social;
c) Eleição e posse da primeira Diretoria Executiva e do Conselho Fiscal;
d) Autorização para registro em Cartório (RCPJ) e inscrição no CNPJ.

3. DELIBERAÇÕES
3.1. Fundação: Os presentes aprovaram por unanimidade a criação da associação civil sem fins lucrativos denominada [NOME COMPLETO DA ASSOCIAÇÃO], com sede no endereço acima mencionado.
3.2. Estatuto Social: Procedeu-se à leitura integral da proposta de Estatuto Social, elaborada em conformidade com o art. 54 do Código Civil e o art. 33 da Lei nº 13.019/2014 (MROSC). Após esclarecimentos, o texto foi aprovado por unanimidade, passando a vigorar imediatamente.
3.3. Eleição e Posse da Diretoria Executiva (Mandato de [DATA INÍCIO] a [DATA FIM]):
- Presidente: [Nome completo, nacionalidade, estado civil, profissão, RG, CPF, endereço completo]
- Vice-Presidente: [Nome completo e qualificação completa]
- Secretário(a): [Nome completo e qualificação completa]
- Tesoureiro(a): [Nome completo e qualificação completa]

3.4. Eleição e Posse do Conselho Fiscal (Mandato de [DATA INÍCIO] a [DATA FIM]):
- Membro Titular 1: [Nome completo e qualificação completa]
- Membro Titular 2: [Nome completo e qualificação completa]
- Membro Titular 3: [Nome completo e qualificação completa]

Os eleitos declararam não estarem impedidos por lei especial para o exercício dos cargos e tomaram posse imediatamente.

4. ENCERRAMENTO
Fica a Diretoria autorizada a providenciar o registro desta Ata e do Estatuto Social no Cartório de Registro Civil de Pessoas Jurídicas (RCPJ), bem como a inscrição no Cadastro Nacional da Pessoa Jurídica (CNPJ) via Redesim. Nada mais havendo a tratar, a reunião foi encerrada às [HORA] horas, sendo esta Ata lida, aprovada e assinada por mim, Secretário(a), pelo(a) Presidente da Mesa e acompanhada da lista de fundadores.

[CIDADE/UF], [DIA] de [MÊS] de [ANO].

____________________________________________
[Nome] — Presidente da Assembleia

____________________________________________
[Nome] — Secretário(a) da Assembleia

ANEXO OBRIGATÓRIO PARA CARTÓRIO: Lista de presença contendo nome completo, nacionalidade, estado civil, profissão, RG, CPF, endereço e assinatura de todos os associados fundadores.`,
  },
  {
    id: 'modelo-plano-trabalho',
    title: 'Modelo de Plano de Trabalho (MROSC)',
    category: 'Modelo Editável',
    legalRef: 'Lei nº 13.019/2014 (art. 22)',
    summary:
      'Estrutura objetiva para participar de chamamentos públicos, termos de fomento, termos de colaboração e emendas parlamentares com metas e cronograma claros.',
    fileBaseName: 'modelo-plano-trabalho-mrosc',
    content: `PLANO DE TRABALHO — PARCERIA COM A ADMINISTRAÇÃO PÚBLICA (ART. 22 DA LEI Nº 13.019/2014)

1. IDENTIFICAÇÃO DA ORGANIZAÇÃO DA SOCIEDADE CIVIL (OSC)
- Razão Social: [Nome completo da OSC]
- CNPJ: [00.000.000/0001-00]
- Endereço da Sede: [Rua, nº, Bairro, Cidade/UF, CEP]
- Responsável Legal: [Nome, CPF, Cargo, Telefone, E-mail]
- Modalidade Pretendida: [Termo de Fomento / Termo de Colaboração / Acordo de Cooperação / Emenda Parlamentar]

2. DADOS DO PROJETO
- Título do Projeto: [Nome claro e direto do projeto]
- Período de Execução: [Mês/Ano inicial] a [Mês/Ano final]
- Valor Total Previsto: R$ [0,00]

3. REALIDADE E JUSTIFICATIVA (POR QUE O PROJETO É NECESSÁRIO?)
Descreva de forma objetiva o problema social identificado na comunidade, o nexo entre a causa e o estatuto da OSC e como o projeto vai gerar impacto real.

4. PÚBLICO BENEFICIÁRIO
- Quem será atendido: [Ex.: crianças e adolescentes de 7 a 15 anos, idosos, pessoas com deficiência]
- Quantidade estimada de beneficiários diretos: [Número]
- Critérios de participação e acesso: [Gratuidade, inscrição local, etc.]

5. OBJETIVO GERAL E METAS MENSURÁVEIS
Objetivo Geral: [Frase clara sobre o resultado principal esperado]
- Meta 1: [Ex.: Oferecer 2 turmas semanais de iniciação esportiva para 60 jovens durante 10 meses]
  Indicador de comprovação: Lista de presença assinada, registros fotográficos e relatório mensal.
- Meta 2: [Ex.: Realizar 2 festivais comunitários de integração ao longo do ano]
  Indicador de comprovação: Relatório de evento, lista de participantes e material de divulgação.

6. CRONOGRAMA FÍSICO-FINANCEIRO (EXEMPLO)
Etapa 1 (Meses 1 a 2) — Estruturação e compra de materiais: R$ [Valor]
Etapa 2 (Meses 3 a 10) — Execução das atividades e equipe técnica: R$ [Valor]
Etapa 3 (Meses 11 a 12) — Avaliação final e prestação de contas: R$ [Valor]

7. REGRAS DE EXECUÇÃO FINANCEIRA E PRESTAÇÃO DE CONTAS (COMPROMISSO MROSC)
- Os recursos serão movimentados exclusivamente em conta bancária específica em instituição financeira pública (art. 51).
- Valores temporariamente ociosos serão mantidos em aplicação financeira, com rendimentos revertidos integralmente ao projeto (art. 51, § 4º).
- Todos os pagamentos serão feitos por transferência eletrônica identificada ao beneficiário final (art. 53).
- A prestação de contas conterá Relatório de Execução do Objeto e Relatório de Execução Financeira (arts. 63 a 71).
- Eventual saldo remanescente e rendimentos serão devolvidos em até 30 dias após o término da vigência (art. 52, § 3º).

[CIDADE/UF], [DIA] de [MÊS] de [ANO].

____________________________________________
[Nome do Representante Legal] — Presidente`,
  },
  {
    id: 'modelo-patrocinio',
    title: 'Modelo de Termo de Patrocínio e Doação Privada',
    category: 'Modelo Editável',
    legalRef: 'Código Civil · Boas Práticas de Transparência',
    summary:
      'Contrato simples e seguro para formalizar apoios de empresas ou pessoas físicas — seja em recursos financeiros, materiais, equipamentos ou cessão de espaços.',
    fileBaseName: 'modelo-termo-patrocinio-doacao-osc',
    content: `TERMO DE PATROCÍNIO E APOIO INSTITUCIONAL

Pelo presente instrumento particular, de um lado:
PATROCINADOR(A) / DOADOR(A): [Razão Social ou Nome Completo], inscrito(a) no CNPJ/CPF sob o nº [Número], com sede/endereço na [Endereço completo], neste ato representado(a) por [Nome];
e de outro lado:
ORGANIZAÇÃO BENEFICIÁRIA (OSC): [Nome Completo da OSC], pessoa jurídica de direito privado sem fins lucrativos, inscrita no CNPJ sob o nº [Número], com sede na [Endereço completo], representada por seu(sua) Presidente [Nome];

celebram o presente Termo de Patrocínio/Doação, mediante as cláusulas seguintes:

CLÁUSULA 1ª — DO OBJETO E FINALIDADE
O presente termo tem por objeto o apoio [financeiro / em materiais esportivos / em equipamentos / em prestação de serviços / em cessão de espaço] destinado exclusivamente ao projeto [Nome do Projeto], desenvolvido pela OSC sem fins lucrativos.

CLÁUSULA 2ª — DO VALOR OU BENEFÍCIO CONCEDIDO
O(A) PATROCINADOR(A) compromete-se a destinar à OSC:
( ) Aporte financeiro no valor de R$ [Valor], a ser transferido até [Data] para a conta bancária de titularidade da OSC: Banco [Nome], Agência [Nº], Conta Corrente [Nº], Chave PIX CNPJ [Nº].
( ) Doação de bens/materiais ou serviços descritos como: [Detalhar quantidade, especificações e valor estimado].

CLÁUSULA 3ª — DAS CONTRAPARTIDAS DE DIVULGAÇÃO (SE APLICÁVEL)
Em reconhecimento ao apoio recebido, a OSC oferecerá ao(à) PATROCINADOR(A) as seguintes contrapartidas institucionais:
I — Aplicação da logomarca em uniformes e materiais de divulgação do projeto;
II — Menção institucional nas redes sociais e eventos oficiais vinculados ao projeto;
III — Entrega de relatório final de impacto com fotos e resultados alcançados.

CLÁUSULA 4ª — DA TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS
A OSC compromete-se a aplicar o apoio exclusivamente na finalidade prevista na Cláusula 1ª, guardando os comprovantes correspondentes e apresentando relatório simplificado de resultados ao término do projeto ou em [Data].

CLÁUSULA 5ª — DA VIGÊNCIA E DISPOSIÇÕES GERAIS
Este termo vigora de [Data inicial] até [Data final], não gerando vínculo empregatício ou societário entre as partes. Fica eleito o foro da Comarca de [Cidade/UF] para dirimir eventuais dúvidas.

E por estarem de acordo, assinam o presente instrumento em 2 (duas) vias de igual teor.

[CIDADE/UF], [DIA] de [MÊS] de [ANO].

____________________________________________
[Nome] — Patrocinador(a) / Doador(a)

____________________________________________
[Nome] — Presidente da OSC`,
  },
  {
    id: 'checklist-constituicao',
    title: 'Checklist de Constituição e Regularidade Documental',
    category: 'Checklist Prático',
    legalRef: 'Código Civil · Redesim · MROSC (arts. 33 e 34)',
    summary:
      'Lista pronta com as 14 etapas de criação de uma associação mais o pacote de documentos permanentes que a OSC precisa manter em dia para editais.',
    fileBaseName: 'checklist-constituicao-regularidade-osc',
    content: `CHECKLIST COMPLETO — CONSTITUIÇÃO E REGULARIDADE DA OSC

PARTE 1: AS 14 ETAPAS INICIAIS PARA CONSTITUIR UMA ASSOCIAÇÃO
[ ] 01. Definir a finalidade institucional e os objetivos sociais da organização.
[ ] 02. Identificar os integrantes responsáveis pela constituição da entidade.
[ ] 03. Definir a denominação (nome oficial) e o endereço da sede.
[ ] 04. Estabelecer a estrutura administrativa e os órgãos de gestão (Assembleia, Diretoria e Conselho Fiscal).
[ ] 05. Elaborar o estatuto social conforme o Código Civil (art. 54) e o MROSC (art. 33).
[ ] 06. Realizar a assembleia geral de constituição.
[ ] 07. Aprovar o estatuto social e eleger os primeiros dirigentes.
[ ] 08. Elaborar a ata de constituição e a lista de fundadores qualificados.
[ ] 09. Registrar o ato constitutivo no Cartório de Registro Civil de Pessoas Jurídicas (RCPJ).
[ ] 10. Providenciar a inscrição da entidade no CNPJ (via Receita Federal / Redesim).
[ ] 11. Verificar a necessidade de inscrições municipais e cadastros em Conselhos locais.
[ ] 12. Consultar exigências de licenciamento da sede (Alvará, Bombeiros, Sanitária, Ambiental).
[ ] 13. Organizar os procedimentos administrativos e a escrituração contábil conforme as NBC.
[ ] 14. Manter todos os documentos institucionais e cadastrais atualizados.

PARTE 2: PASTA PERMANENTE PARA PARTICIPAR DE EDITAIS E PARCERIAS
[ ] Estatuto Social atualizado e registrado em cartório.
[ ] Ata da última eleição e posse da diretoria (mandato vigente).
[ ] Cartão CNPJ ativo e compatível com as atividades exercidas.
[ ] Certidão Negativa de Débitos Federais (Receita Federal / PGFN).
[ ] Certidão de Regularidade do FGTS (CRF).
[ ] Certidão Negativa de Débitos Trabalhistas (CNDT).
[ ] Certidões Negativas Estadual e Municipal.
[ ] Balanço patrimonial e demonstrativos contábeis assinados por contador.
[ ] Relatório anual de atividades (comprovação de experiência prévia).
[ ] Plano de Trabalho pronto com objetivos, metas, cronograma e orçamento.

AVISO IMPORTANTE: Esta lista tem caráter orientativo inicial e não substitui a consulta aos órgãos públicos competentes, ao cartório local ou à assessoria jurídica e contábil.`,
  },
  {
    id: 'cartilha-juridica',
    title: 'Cartilha de Orientações Jurídicas Básicas do MROSC',
    category: 'Orientação Jurídica',
    legalRef: 'Lei nº 13.019/2014 · CF/88 · Lei nº 14.597/2023',
    summary:
      'Resumo em linguagem clara das regras de parcerias públicas, execução financeira, vedações legais, prestação de contas e responsabilidade dos dirigentes.',
    fileBaseName: 'cartilha-orientacoes-juridicas-mrosc',
    content: `CARTILHA DE ORIENTAÇÕES JURÍDICAS BÁSICAS PARA ORGANIZAÇÕES DA SOCIEDADE CIVIL (OSC)
Base legal: Constituição Federal (arts. 5º XVII e 37), Código Civil (Lei nº 10.406/2002), Lei nº 6.015/1973, MROSC (Lei nº 13.019/2014) e Lei Geral do Esporte (Lei nº 14.597/2023).

1. O QUE É UMA OSC?
São entidades privadas sem fins lucrativos com finalidade de interesse público ou social — incluindo associações, fundações privadas, determinadas cooperativas sociais e organizações religiosas que desenvolvam projetos de cunho social distintos de suas atividades religiosas (art. 2º, I, Lei nº 13.019/2014).

2. OS 3 INSTRUMENTOS DE PARCERIA COM O PODER PÚBLICO
- Termo de Colaboração (art. 2º, VIII-A): proposta elaborada pelo Poder Público, com repasse de recursos financeiros.
- Termo de Fomento (art. 17): proposta elaborada pela própria OSC, com repasse de recursos financeiros.
- Acordo de Cooperação (art. 2º, VIII-A): parceria mútua sem transferência direta de dinheiro.
Regra geral: Termos de Colaboração e Fomento exigem Chamamento Público prévio (edital) para garantir igualdade e transparência.

3. REGRAS ESSENCIAIS DE GESTÃO FINANCEIRA (ARTS. 45 A 53)
- Recursos vinculados: o dinheiro repassado não entra como patrimônio livre da entidade; só pode ser gasto nas metas do Plano de Trabalho aprovado (art. 22).
- Conta específica (art. 51): todo recurso público da parceria deve transitar em conta bancária exclusiva aberta em instituição financeira pública, evitando a "promiscuidade de contas".
- Aplicação financeira (art. 51, § 4º): recursos parados devem ficar aplicados e os rendimentos devem ser usados exclusivamente no objeto da parceria.
- Pagamentos rastreáveis (art. 53): pague fornecedores por transferência eletrônica para a conta do beneficiário final. Pagamento em dinheiro só em exceções expressamente justificadas.
- Vedações: nunca utilize verba fora da finalidade pactuada nem remunere servidores ou empregados públicos (ressalvadas exceções previstas em lei).
- Devolução de saldo (art. 52, § 3º): sobras de recursos e rendimentos devem ser devolvidas em até 30 dias após o fim da vigência.

4. PRESTAÇÃO DE CONTAS E CONTROLE SOCIAL (ARTS. 11 E 63 A 71)
- Controle Horizontal: acompanhamento pelo gestor público, relatórios técnicos (art. 59) e fiscalização pelos Tribunais de Contas.
- Controle Vertical: transparência ativa em sites oficiais (art. 11) e acompanhamento pelos Conselhos de Políticas Públicas.
- A prestação de contas inclui o Relatório de Execução do Objeto (o que foi entregue à população) e o Relatório de Execução Financeira (como o recurso foi gasto).

5. RESPONSABILIDADE DOS DIRIGENTES (ART. 73 E JURISPRUDÊNCIA)
- A responsabilidade pessoal do dirigente NÃO é automática: exige comprovação de culpa ou dolo na gestão (responsabilidade civil subjetiva).
- Atraso formal na entrega de documentos, por si só, não equivale a dano ao erário e pode ser sanado mediante diligência.
- Já o desvio de finalidade, omissão grave ou dano efetivo ao erário ensejam Tomada de Contas Especial (TCE), cobrança judicial e possível inscrição em cadastro de inidoneidade (art. 73), impedindo novas parcerias.

Referência acadêmica de origem: Artigo "Orientação e Apoio às Organizações da Sociedade Civil (OSC) para Regularização, Gestão e Captação de Recursos" — Curso de Direito, UNISENAI PR.`,
  },
];

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function triggerBlobDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function downloadDocumentAsWord(title: string, subtitle: string, content: string, fileBaseName: string): void {
  const formattedParagraphs = content
    .split('\n')
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return '<p style="margin:6pt 0;">&nbsp;</p>';
      if (/^(CAPÍTULO|PARTE|\d+\.\s+[A-ZÁÉÍÓÚÃÕÇ]|CLÁUSULA)/.test(trimmed)) {
        return `<p style="margin:12pt 0 4pt 0;font-weight:bold;color:#3730A3;">${escapeHtml(trimmed)}</p>`;
      }
      return `<p style="margin:3pt 0;line-height:1.5;">${escapeHtml(trimmed)}</p>`;
    })
    .join('\n');

  const htmlDoc = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<style>
  body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #1C1917; margin: 2cm; }
  h1 { font-family: Georgia, serif; font-size: 16pt; color: #141815; margin-bottom: 4pt; }
  .subtitle { font-size: 9.5pt; color: #525C55; border-bottom: 1px solid #D6D3D1; padding-bottom: 8pt; margin-bottom: 16pt; }
  .footer { margin-top: 24pt; padding-top: 8pt; border-top: 1px solid #E5E7E5; font-size: 8.5pt; color: #6B7280; }
</style>
</head>
<body>
  <h1>${escapeHtml(title)}</h1>
  <div class="subtitle">${escapeHtml(subtitle)}</div>
  ${formattedParagraphs}
  <div class="footer">Documento orientativo gerado pelo Guia OSC · Baseado na Lei nº 13.019/2014 (MROSC) e no Código Civil Brasileiro. Recomenda-se revisão jurídica e contábil antes do protocolo oficial.</div>
</body>
</html>`;

  const blob = new Blob(['\ufeff', htmlDoc], { type: 'application/msword;charset=utf-8' });
  triggerBlobDownload(blob, `${fileBaseName}.doc`);
}

export function downloadDocumentAsText(title: string, subtitle: string, content: string, fileBaseName: string): void {
  const fullText = `${title.toUpperCase()}\n${subtitle}\n${'='.repeat(68)}\n\n${content}\n\n---\nDocumento orientativo gerado pelo Guia OSC.`;
  const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
  triggerBlobDownload(blob, `${fileBaseName}.txt`);
}

export type AnswerValue = 'sim' | 'andamento' | 'nao';

export function downloadDiagnosticReport(
  orgName: string,
  answers: Record<string, AnswerValue>,
  questions: DiagnosticQuestion[],
  scorePercent: number,
  stageLabel: string
): void {
  const displayOrg = orgName.trim() || 'Organização em Diagnóstico';
  const dateStr = new Date().toLocaleDateString('pt-BR');

  const lines: string[] = [
    `RELATÓRIO DE DIAGNÓSTICO LEGAL — GUIA OSC`,
    `Organização: ${displayOrg}`,
    `Data da avaliação: ${dateStr}`,
    `Índice de adequação inicial: ${scorePercent}% (${stageLabel})`,
    ``,
    `1. RESUMO DAS RESPOSTAS`,
  ];

  questions.forEach((q) => {
    const val = answers[q.id];
    const statusLabel =
      val === 'sim' ? 'CONCLUÍDO' : val === 'andamento' ? 'EM ANDAMENTO' : 'PENDENTE';
    lines.push(`${q.number}. [${statusLabel}] ${q.question}`);
    lines.push(`    Base legal: ${q.legalBasis}`);
    if (val !== 'sim') {
      lines.push(`    Próximo passo recomendado: ${q.recommendation}`);
    }
  });

  lines.push('');
  lines.push('2. AVISO ORIENTATIVO');
  lines.push(
    'Este diagnóstico auxilia no alinhamento inicial à Constituição Federal, ao Código Civil e à Lei nº 13.019/2014 (MROSC), sem substituir consulta aos órgãos competentes, cartório ou assessoria jurídica e contábil.'
  );

  downloadDocumentAsWord(
    `Diagnóstico Legal — ${displayOrg}`,
    `Adequação estimada: ${scorePercent}% · ${stageLabel} · Emitido em ${dateStr}`,
    lines.join('\n'),
    'diagnostico-legal-osc'
  );
}
