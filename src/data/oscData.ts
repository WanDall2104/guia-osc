export type ReadingMode = 'plain' | 'legal';

export interface ConstitutionStep {
  step: number;
  number: string;
  title: string;
  plainSummary: string;
  plainDetails: string;
  legalDetails: string;
  practicalTip: string;
  legalBasis: string;
  alertTitle?: string;
  alertText?: string;
}

export interface StatuteRequirement {
  id: string;
  number: string;
  item: string;
  legalBasis: string;
  explanationPlain: string;
  explanationLegal: string;
  example: string;
}

export interface FinancialRule {
  number: string;
  title: string;
  plain: string;
  legal: string;
  warning: string;
  legalBasis: string;
}

export interface FinancialProhibition {
  id: string;
  title: string;
  article: string;
  text: string;
  severity: string;
}

export interface PartnershipInstrument {
  id: 'colaboracao' | 'fomento' | 'cooperacao';
  name: string;
  article: string;
  origin: string;
  transfer: string;
  plainSummary: string;
  legalSummary: string;
  idealFor: string;
  obligations: string[];
}

export interface FundingChannel {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  keyRequirement: string;
}

export interface OpenCallItem {
  id: string;
  title: string;
  sphere: 'Federal' | 'Estadual' | 'Municipal' | 'Incentivo e Privado';
  modality: string;
  status: string;
  summary: string;
  whoCanApply: string;
  essentialDocs: string[];
  officialPortalLabel: string;
  officialPortalUrl: string;
  tip: string;
}

export interface DiagnosticQuestion {
  id: string;
  number: string;
  pillar: 'Constituição' | 'Regularização' | 'Gestão e Transparência';
  question: string;
  explanation: string;
  legalBasis: string;
  recommendation: string;
  recommendedDocId: string;
}

export const ORIGINAL_PDF_URL =
  '/assets/aistudio/ORIENTAC_A_O_E_APOIO_A_S_ORGANIZAC_O_ES_DA_SOCIEDADE_CIVIL__OSC__PARA_REGULARIZAC_A_O__GESTA_O_E_CAPTAC_A_O_DE_RECURSOS_9cf7361b.pdf';

export const ARTICLE_AUTHORS = [
  'Adriana Tiuss',
  'Anthony Alexsander',
  'Daniele Wan Dall',
  'Gabriely Vitoria',
  'Paulo Reis',
];

export const ARTICLE_ADVISOR = 'Prof. Eli Carlos Dal’Pupo';

export const ABNT_REFERENCES: string[] = [
  'BRASIL. Constituição da República Federativa do Brasil de 1988. Diário Oficial da União, Brasília, DF, 5 out. 1988.',
  'BRASIL. Lei nº 13.019, de 31 de julho de 2014. Estabelece o regime jurídico das parcerias entre a administração pública e as organizações da sociedade civil (MROSC). Diário Oficial da União, Brasília, DF, 1 ago. 2014.',
  'BRASIL. Lei nº 10.406, de 10 de janeiro de 2002. Institui o Código Civil. Brasília, DF: Presidência da República, 2002.',
  'BRASIL. Lei nº 6.015, de 31 de dezembro de 1973. Dispõe sobre os registros públicos e dá outras providências. Brasília, DF, 1973.',
  'BRASIL. Lei nº 14.597, de 14 de junho de 2023. Institui a Lei Geral do Esporte. Brasília, DF, 2023.',
  'BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos. Transferegov.br — Acesso Livre.',
  'BRASIL. Receita Federal do Brasil. Inscrever entidade no Cadastro Nacional de Pessoas Jurídicas (CNPJ). Brasília, DF, 2026.',
  'BRASIL. Governo Federal. Redesim — Sobre inscrição. Brasília, DF, 2025.',
  'CHAHAIRA, Bruno Valverde; SILVA, Jamylle Maria Araujo. Mudanças histórico-políticas do Brasil na construção do terceiro setor: perspectivas contemporâneas à luz do marco regulatório. Revista Direito e Práxis, Rio de Janeiro, v. 15, n. 4, 2024.',
  'DI PIETRO, Maria Sylvia Zanella. Parcerias na administração pública: concessão, permissão, franquia, terceirização, parceria público-privada. 12. ed. Rio de Janeiro: Forense, 2019.',
  'PAES, José Eduardo Sabo. Fundações, associações e entidades de interesse social: aspectos jurídicos, administrativos, contábeis, trabalhistas e tributários. 11. ed. Rio de Janeiro: Forense, 2021.',
];

export const CONSTITUTION_STEPS: ConstitutionStep[] = [
  {
    step: 1,
    number: '01',
    title: 'Defina a causa e a estrutura',
    plainSummary: 'Estabeleça o objetivo social, quem será atendido e como a entidade será administrada.',
    plainDetails:
      'Antes de ir ao cartório, reúna os fundadores para definir a área de atuação (assistência social, educação, cultura, esporte, saúde ou meio ambiente), o endereço da sede e a composição da diretoria.',
    legalDetails:
      'O art. 5º, inciso XVII, da Constituição Federal assegura a liberdade de associação para fins lícitos. Na fase prévia definem-se a finalidade institucional sem fins lucrativos, órgãos deliberativos e fontes previstas de recursos (Paes, 2021).',
    practicalTip:
      'Escolha uma finalidade clara e abrangente dentro da sua área. Estatutos muito restritos podem impedir a participação em editais futuros.',
    legalBasis: 'Constituição Federal, art. 5º, XVII',
  },
  {
    step: 2,
    number: '02',
    title: 'Elabore o Estatuto Social',
    plainSummary: 'É a regra principal da organização. Precisa seguir o Código Civil e as exigências do MROSC.',
    plainDetails:
      'Além de nome, sede, direitos e deveres dos associados, inclua objetivos de relevância pública e social, destinação do patrimônio em caso de dissolução e compromisso com escrituração contábil regular.',
    legalDetails:
      'Instrumento normativo fundamental que deve atender ao art. 54 do Código Civil e, para celebrar parcerias com o Poder Público, observar expressamente os incisos do art. 33 da Lei nº 13.019/2014.',
    practicalTip:
      'Inclua as cláusulas do MROSC já na fundação para evitar custos e demora com reforma estatutária em cartório quando surgir o primeiro edital.',
    legalBasis: 'Código Civil, art. 54 · Lei nº 13.019/2014, art. 33',
  },
  {
    step: 3,
    number: '03',
    title: 'Assembleia de Constituição',
    plainSummary: 'A reunião oficial que aprova o estatuto e elege os primeiros dirigentes e conselheiros.',
    plainDetails:
      'Todas as decisões devem ser registradas na Ata de Constituição, assinada pelos presentes e acompanhada da lista de fundadores qualificados.',
    legalDetails:
      'A assembleia formaliza a criação da associação e aprova seus atos constitutivos. Nos termos do art. 59 do Código Civil, compete privativamente à assembleia geral destituir administradores e alterar o estatuto.',
    practicalTip:
      'Recolha nome completo, CPF, RG, profissão, estado civil e endereço de cada fundador e membro eleito da diretoria na lista de presença.',
    legalBasis: 'Código Civil, art. 59',
  },
  {
    step: 4,
    number: '04',
    title: 'Registro em Cartório (RCPJ)',
    plainSummary: 'O registro dá vida legal à organização e cria sua personalidade jurídica.',
    plainDetails:
      'Protocole o estatuto social, a ata de constituição e a relação de fundadores no Cartório de Registro Civil de Pessoas Jurídicas (RCPJ). A partir daí a OSC passa a existir legalmente.',
    legalDetails:
      'Conforme o art. 45 do Código Civil e a Lei nº 6.015/1973, começa a existência legal das pessoas jurídicas de direito privado com a inscrição do ato constitutivo no respectivo registro.',
    practicalTip:
      'Verifique previamente com o cartório da sua cidade a exigência do visto de advogado no estatuto (Lei nº 8.906/1994) e o modelo de requerimento local.',
    legalBasis: 'Código Civil, art. 45 · Lei nº 6.015/1973',
    alertTitle: 'Atenção no Cartório RCPJ',
    alertText:
      'Sem o registro do estatuto e da ata no cartório, a entidade não possui personalidade jurídica para assinar contratos ou receber recursos.',
  },
  {
    step: 5,
    number: '05',
    title: 'Inscrição no CNPJ (Redesim)',
    plainSummary: 'O cadastro na Receita Federal permite abrir conta bancária, contratar e firmar parcerias.',
    plainDetails:
      'Com o registro cartorário concluído, solicite a inscrição no CNPJ pelo portal integrado da Redesim, formalizando a identificação da organização perante órgãos públicos e privados.',
    legalDetails:
      'A inscrição no Cadastro Nacional da Pessoa Jurídica é integrada pela Rede Nacional para a Simplificação do Registro e da Legalização (Redesim), unificando a coleta de dados cadastrais e a emissão do CNPJ.',
    practicalTip:
      'Escolha códigos de atividade (CNAE) coerentes com o estatuto — por exemplo, atividades associativas, esportivas ou culturais — para facilitar habilitação em editais.',
    legalBasis: 'Receita Federal · Portal Redesim',
  },
  {
    step: 6,
    number: '06',
    title: 'Alvarás, Licenças e Contabilidade',
    plainSummary: 'Deixe o funcionamento da sede e os registros financeiros regulares desde o início.',
    plainDetails:
      'Consulte a prefeitura sobre alvará de funcionamento, licenças (sanitária, ambiental ou Bombeiros) e cadastros em conselhos. Estruture a contabilidade conforme as Normas Brasileiras de Contabilidade.',
    legalDetails:
      'Para habilitação em parcerias regidas pelo MROSC, a escrituração segundo os princípios fundamentais de contabilidade e as Normas Brasileiras de Contabilidade constitui requisito obrigatório (art. 33, IV, Lei nº 13.019/2014).',
    practicalTip:
      'Mesmo sem movimentação financeira inicial, mantenha declarações acessórias e certidões negativas em dia para evitar multas e bloqueio no CNPJ.',
    legalBasis: 'Lei nº 13.019/2014, arts. 33 e 34',
    alertTitle: 'Continuidade Institucional',
    alertText:
      'A regularidade fiscal, documental e contábil é o que garante credibilidade perante doadores, conselhos e chamamentos públicos.',
  },
];

export const STATUTE_REQUIREMENTS: StatuteRequirement[] = [
  {
    id: 'denominacao',
    number: '01',
    item: 'Denominação, fins e sede',
    legalBasis: 'Código Civil, art. 54, I',
    explanationPlain:
      'O nome oficial da organização, o endereço completo da sede e quais causas sociais ela defende.',
    explanationLegal:
      'Identificação civil da pessoa jurídica, delimitação de seu domicílio legal e especificação das finalidades não econômicas.',
    example:
      'A Associação Esportiva Comunitária tem sede em Curitiba/PR e finalidade sem fins lucrativos voltada à iniciação esportiva e inclusão social.',
  },
  {
    id: 'associados',
    number: '02',
    item: 'Admissão, demissão e exclusão de associados',
    legalBasis: 'Código Civil, art. 54, II e art. 57',
    explanationPlain:
      'Regras claras sobre quem pode entrar, como sair livremente e o direito de defesa antes de qualquer exclusão.',
    explanationLegal:
      'Critérios objetivos de ingresso e desligamento voluntário, assegurando ampla defesa e recurso à assembleia na exclusão por justa causa.',
    example:
      'O associado pode desligar-se a qualquer tempo por escrito; a exclusão exige justa causa com direito de defesa à Assembleia Geral.',
  },
  {
    id: 'direitos',
    number: '03',
    item: 'Direitos e deveres dos associados',
    legalBasis: 'Código Civil, art. 54, III',
    explanationPlain:
      'Define quem pode votar, ser eleito para a diretoria e quais compromissos cada membro assume.',
    explanationLegal:
      'Estabelecimento igualitário das prerrogativas políticas e deveres estatutários dos associados perante a entidade.',
    example:
      'São direitos votar e ser votado nas Assembleias Gerais e acompanhar a prestação de contas anual da diretoria.',
  },
  {
    id: 'fontes',
    number: '04',
    item: 'Fontes de recursos para manutenção',
    legalBasis: 'Código Civil, art. 54, IV',
    explanationPlain:
      'Lista de onde vem o dinheiro da organização: doações, parcerias públicas, patrocínios, leis de incentivo e emendas.',
    explanationLegal:
      'Previsão das origens patrimoniais e orçamentárias lícitas que sustentam as atividades institucionais sem distribuição de resultados.',
    example:
      'Constituem receitas contribuições, doações, patrocínios privados, termos de fomento e colaboração, emendas e rendimentos financeiros.',
  },
  {
    id: 'orgaos',
    number: '05',
    item: 'Constituição e funcionamento dos órgãos',
    legalBasis: 'Código Civil, art. 54, V e VII',
    explanationPlain:
      'Como funcionam a Assembleia Geral, a Diretoria Executiva e o Conselho Fiscal, incluindo mandatos e aprovação de contas.',
    explanationLegal:
      'Estruturação da governança interna, competências deliberativas e executivas, representação legal e rito de aprovação de balanços.',
    example:
      'A entidade é composta por Assembleia Geral, Diretoria Executiva (mandato de 2 anos) e Conselho Fiscal responsável pelo parecer anual.',
  },
  {
    id: 'mrosc',
    number: '06',
    item: 'Cláusulas obrigatórias do MROSC (Dissolução e Contabilidade)',
    legalBasis: 'Lei nº 13.019/2014, art. 33 · CC, art. 54, VI',
    explanationPlain:
      'Regras para alterar o estatuto, destino do patrimônio se a entidade fechar e compromisso de contabilidade segundo as normas brasileiras.',
    explanationLegal:
      'Previsão expressa de objetivos de relevância pública e social, transferência do patrimônio líquido a entidade congênere em dissolução e escrituração conforme NBC.',
    example:
      'Em caso de dissolução, o patrimônio líquido será transferido a outra pessoa jurídica de igual natureza que cumpra a Lei nº 13.019/2014.',
  },
];

export const FOURTEEN_STEP_CHECKLIST: string[] = [
  'Definir a finalidade institucional e os objetivos sociais da organização.',
  'Identificar os integrantes responsáveis pela constituição da entidade.',
  'Definir a denominação (nome) e o endereço da sede.',
  'Estabelecer a estrutura administrativa e os órgãos de gestão.',
  'Elaborar o estatuto social conforme os requisitos do Código Civil e do MROSC.',
  'Realizar a assembleia geral de constituição.',
  'Aprovar o estatuto social e eleger os primeiros dirigentes.',
  'Elaborar a ata de constituição e os demais documentos necessários.',
  'Registrar o ato constitutivo no Cartório de Registro Civil de Pessoas Jurídicas (RCPJ).',
  'Providenciar a inscrição da entidade no Cadastro Nacional da Pessoa Jurídica (CNPJ).',
  'Verificar a necessidade de inscrições municipais e cadastros complementares.',
  'Consultar as exigências de licenciamento relacionadas às atividades e ao endereço da sede.',
  'Organizar os procedimentos administrativos e contábeis da entidade.',
  'Manter os documentos institucionais, atas e certidões sempre atualizados.',
];

export const FINANCIAL_RULES: FinancialRule[] = [
  {
    number: '01',
    title: 'Conta Bancária Específica em Banco Público',
    plain:
      'Cada parceria exige uma conta exclusiva em instituição financeira pública. Nunca misture o recurso público com o caixa próprio da OSC.',
    legal:
      'Exigência do art. 51 do MROSC para impedir a "promiscuidade de contas", garantindo segregação patrimonial e plena rastreabilidade perante os Tribunais de Contas.',
    warning: 'Misturar recursos da parceria com contas comuns leva frequentemente à rejeição da prestação de contas.',
    legalBasis: 'Lei nº 13.019/2014, art. 51',
  },
  {
    number: '02',
    title: 'Aplicação Financeira dos Saldos Parados',
    plain:
      'Enquanto não utilizados no projeto, os valores devem ficar aplicados. Todos os rendimentos precisam ser investidos no próprio objeto aprovado.',
    legal:
      'Os rendimentos de ativos financeiros obtidos com os recursos da parceria sujeitam-se integralmente às mesmas regras de aplicação e prestação de contas do valor principal.',
    warning: 'Rendimentos pertencem à parceria e nunca podem ser retidos como receita livre da entidade.',
    legalBasis: 'Lei nº 13.019/2014, art. 51, § 4º',
  },
  {
    number: '03',
    title: 'Pagamentos 100% Eletrônicos e Rastreáveis',
    plain:
      'Pague fornecedores e prestadores por transferência eletrônica direto na conta bancária do beneficiário final. Pagamento em dinheiro só em exceções justificadas.',
    legal:
      'A movimentação financeira exige crédito identificado na conta de titularidade do credor (art. 53), materializando o princípio constitucional da publicidade (art. 37, CF/88).',
    warning: 'Notas fiscais devem sempre ser emitidas em nome da OSC com identificação clara da despesa.',
    legalBasis: 'Lei nº 13.019/2014, art. 53',
  },
  {
    number: '04',
    title: 'Devolução de Saldo Remanescente em 30 Dias',
    plain:
      'Encerrada a parceria, qualquer saldo não utilizado — somado aos rendimentos financeiros — deve ser devolvido ao Poder Público em até 30 dias.',
    legal:
      'A restituição tempestiva dos valores residuais e rendimentos no prazo legal evita impugnação das contas e instauração de Tomada de Contas Especial (TCE).',
    warning: 'Perder o prazo de 30 dias pode gerar juros, correção e responsabilização administrativa.',
    legalBasis: 'Lei nº 13.019/2014, art. 52, § 3º',
  },
];

export const FINANCIAL_PROHIBITIONS: FinancialProhibition[] = [
  {
    id: 'desvio',
    title: 'Desvio de finalidade fora do plano aprovado',
    article: 'MROSC, arts. 22 e 45',
    text: 'Usar qualquer valor em despesas alheias ao objeto pactuado no Plano de Trabalho gera glosa e obrigação de ressarcimento ao erário.',
    severity: 'Vedação estrita',
  },
  {
    id: 'servidores',
    title: 'Pagamento de servidores ou empregados públicos',
    article: 'MROSC, art. 45, II',
    text: 'É vedado pagar, a qualquer título, servidor ou empregado público com recursos da parceria, salvo nas hipóteses expressamente previstas em lei.',
    severity: 'Vedação legal',
  },
  {
    id: 'promiscuidade',
    title: 'Mistura de contas ou saques sem rastreio',
    article: 'MROSC, arts. 51 e 53',
    text: 'Transferir recursos da parceria para o caixa geral da entidade ou pagar em espécie sem comprovação de impossibilidade física viola a rastreabilidade.',
    severity: 'Risco de rejeição',
  },
  {
    id: 'omissao',
    title: 'Omissão no dever de prestar contas',
    article: 'MROSC, arts. 63 a 73',
    text: 'Deixar de entregar relatórios ou ignorar notificações pode levar à Tomada de Contas Especial (TCE) e inscrição em cadastro de inidoneidade (art. 73).',
    severity: 'Sanção grave',
  },
];

export const FINANCIAL_EXECUTION_FLOW: string[] = [
  'Celebração da parceria e aprovação do plano de trabalho com cronograma físico-financeiro.',
  'Abertura de conta bancária específica em instituição financeira pública.',
  'Liberação das parcelas conforme o cronograma e comprovação da etapa anterior.',
  'Aplicação financeira dos valores momentaneamente ociosos.',
  'Execução das despesas estritamente conforme o plano, com notas fiscais em nome da OSC.',
  'Monitoramento e avaliação técnica pelo órgão público parceiro.',
  'Entrega da prestação de contas parcial e final (execução do objeto e financeira).',
  'Análise e emissão de parecer conclusivo pelo gestor da parceria.',
  'Devolução de saldo remanescente e rendimentos em até 30 dias após o término.',
];

export const TRANSPARENCY_PILLARS = [
  {
    title: 'Controle Horizontal (Poder Público)',
    subtitle: 'Monitoramento técnico e Tribunais de Contas',
    description:
      'A Administração Pública acompanha metas por meio de relatórios técnicos (art. 59) e analisa a prestação de contas formal — relatório de execução do objeto e relatório financeiro (arts. 63 a 71).',
  },
  {
    title: 'Controle Vertical (Sociedade Civil)',
    subtitle: 'Publicidade obrigatória e Conselhos',
    description:
      'Traduz o princípio da publicidade (art. 37, CF/88). Os termos de parceria devem ser divulgados em sítios eletrônicos oficiais (art. 11, MROSC) e acompanhados pelos Conselhos de Políticas Públicas.',
  },
  {
    title: 'Responsabilidade dos Dirigentes',
    subtitle: 'Subjetiva — exige prova de culpa ou dolo',
    description:
      'A responsabilização pessoal do dirigente não é automática. Meros atrasos formais podem ser sanados por diligência; já o desvio de finalidade ou dano efetivo ao erário enseja TCE e possível inidoneidade (art. 73).',
  },
];

export const PARTNERSHIP_INSTRUMENTS: PartnershipInstrument[] = [
  {
    id: 'colaboracao',
    name: 'Termo de Colaboração',
    article: 'Lei nº 13.019/2014 · Art. 2º, VIII-A',
    origin: 'Proposta do Poder Público',
    transfer: 'Com repasse financeiro',
    plainSummary:
      'O governo define a política pública e seleciona uma OSC por chamamento público para executar o serviço contínuo ou projeto com repasse de verba.',
    legalSummary:
      'Instrumento de formalização de parcerias de iniciativa da Administração Pública com transferência de recursos financeiros vinculados às metas pactuadas.',
    idealFor: 'Serviços continuados de assistência social, educação comunitária, saúde e esporte municipal.',
    obligations: [
      'Em regra precedido de Edital de Chamamento Público',
      'Conta bancária específica em banco público (art. 51)',
      'Aplicação financeira dos valores ociosos (art. 51, § 4º)',
      'Prestação de contas de objeto e financeira (arts. 63 a 71)',
    ],
  },
  {
    id: 'fomento',
    name: 'Termo de Fomento',
    article: 'Lei nº 13.019/2014 · Art. 17',
    origin: 'Proposta da própria OSC',
    transfer: 'Com repasse financeiro',
    plainSummary:
      'A própria OSC desenha um projeto de interesse público e solicita apoio financeiro ao Estado para colocar a iniciativa em prática.',
    legalSummary:
      'Instrumento de cooperação proposto pela organização da sociedade civil envolvendo repasse financeiro estritamente adstrito ao plano de trabalho (art. 22).',
    idealFor: 'Projetos comunitários autorais, oficinas culturais, iniciação esportiva e inclusão social.',
    obligations: [
      'Plano de Trabalho detalhado com metas e cronograma (art. 22)',
      'Pagamentos por transferência eletrônica identificada (art. 53)',
      'Proibição de uso fora do objeto aprovado (art. 45)',
      'Devolução de saldo e rendimentos em até 30 dias (art. 52, § 3º)',
    ],
  },
  {
    id: 'cooperacao',
    name: 'Acordo de Cooperação',
    article: 'Lei nº 13.019/2014 · Art. 2º, VIII-A',
    origin: 'Iniciativa conjunta',
    transfer: 'Sem transferência financeira',
    plainSummary:
      'Formaliza ações conjuntas de interesse público sem repasse de dinheiro — como cessão de ginásios, apoio técnico ou eventos compartilhados.',
    legalSummary:
      'Instrumento de parceria consensual entre Estado e OSC voltado à cooperação mútua sem transferência direta de recursos orçamentários.',
    idealFor: 'Cessão de espaços públicos, empréstimo de equipamentos, capacitações e ações integradas.',
    obligations: [
      'Não envolve transferência direta de verba pública',
      'Dispensa abertura de conta vinculada do MROSC',
      'Define claramente responsabilidades e bens compartilhados',
      'Foco no cumprimento transparente do objeto pactuado',
    ],
  },
];

export const FUNDING_CHANNELS: FundingChannel[] = [
  {
    number: '01',
    title: 'Projetos Esportivos',
    subtitle: 'Lei Geral do Esporte · Lei nº 14.597/2023',
    summary:
      'Apoia iniciação esportiva, esporte educacional, inclusão de pessoas com deficiência, atendimento a idosos e formação de atletas em programas estaduais (como no Paraná) e municipais.',
    keyRequirement: 'Estatuto da OSC alinhado à área esportiva e aderência às regras do edital.',
  },
  {
    number: '02',
    title: 'Leis de Incentivo',
    subtitle: 'Renúncia fiscal · Empresas e pessoas físicas',
    summary:
      'Projetos previamente aprovados pelo órgão responsável podem captar recursos diretamente de patrocinadores interessados em apoiar iniciativas sociais, culturais ou esportivas.',
    keyRequirement: 'Aprovação prévia do projeto, uso exclusivo nas atividades aprovadas e guarda de comprovantes.',
  },
  {
    number: '03',
    title: 'Doações e Patrocínios',
    subtitle: 'Apoio privado · Recursos, bens ou serviços',
    summary:
      'Empresas e pessoas físicas podem contribuir com dinheiro, materiais esportivos, equipamentos, cessão de espaços ou serviços técnicos, com contrapartidas claras de divulgação.',
    keyRequirement: 'Formalização sempre por escrito, detalhando valor ou benefício, finalidade e obrigações.',
  },
  {
    number: '04',
    title: 'Emendas Parlamentares',
    subtitle: 'Recursos indicados pelo Legislativo',
    summary:
      'Deputados, senadores e vereadores podem indicar recursos para projetos de interesse público desenvolvidos por OSCs com capacidade técnica e documentação regular.',
    keyRequirement: 'Plano de trabalho claro, certidões atualizadas e transparência integral na execução.',
  },
];

export const EDITAL_CHECKLIST_ITEMS: string[] = [
  'Objetivo exato da parceria e aderência ao estatuto',
  'Público beneficiário que deverá ser atendido',
  'Lista completa de documentos de habilitação e certidões',
  'Prazos de inscrição, impugnação e entrega da proposta',
  'Critérios técnicos de pontuação e avaliação',
  'Valor total disponível e cronograma de desembolso',
  'Metas mensuráveis que precisarão ser comprovadas',
  'Regras específicas para execução e prestação de contas',
];

export const OPEN_CALLS: OpenCallItem[] = [
  {
    id: 'transferegov',
    title: 'Chamamentos Públicos e Emendas — Transferegov.br',
    sphere: 'Federal',
    modality: 'Termo de Fomento e Colaboração · Fluxo contínuo',
    status: 'Portal oficial ativo',
    summary:
      'Plataforma integrada da União para consultar programas abertos, cadastrar a OSC, enviar propostas de projetos e acompanhar emendas parlamentares federais.',
    whoCanApply: 'OSCs com CNPJ ativo, estatuto adequado ao art. 33 do MROSC e regularidade fiscal federal.',
    essentialDocs: [
      'Estatuto social registrado e ata da diretoria vigente',
      'Comprovante de CNPJ e experiência prévia na área',
      'Certidões negativas (Receita Federal, FGTS e Trabalhista)',
      'Plano de trabalho com metas e orçamento detalhado',
    ],
    officialPortalLabel: 'Acessar Transferegov.br',
    officialPortalUrl: 'https://www.gov.br/transferegov/pt-br',
    tip: 'Mantenha o cadastro da entidade e as declarações do dirigente atualizadas na plataforma antes mesmo da abertura dos editais.',
  },
  {
    id: 'proesporte-pr',
    title: 'Editais e Incentivo ao Esporte — Estado do Paraná',
    sphere: 'Estadual',
    modality: 'Lei de Incentivo e Fomento Esportivo · Ciclos anuais',
    status: 'Acompanhamento recomendado',
    summary:
      'Programas estaduais de fomento e incentivo fiscal voltados à iniciação esportiva, esporte educacional, paradesporto, formação de atletas e eventos comunitários.',
    whoCanApply: 'Entidades esportivas sem fins lucrativos sediadas no estado, com atuação comprovada e estatuto compatível.',
    essentialDocs: [
      'Estatuto prevendo atuação esportiva ou educacional',
      'Certidões negativas estaduais e municipais válidas',
      'Projeto esportivo com cronograma, público e orçamento',
      'Comprovação de regularidade cadastral da diretoria',
    ],
    officialPortalLabel: 'Portal do Esporte — Governo do Paraná',
    officialPortalUrl: 'https://www.esporte.pr.gov.br/',
    tip: 'A Lei Geral do Esporte (Lei nº 14.597/2023) fortalece projetos com impacto em crianças, adolescentes, idosos e pessoas com deficiência.',
  },
  {
    id: 'chamamentos-municipais',
    title: 'Chamamentos Públicos Municipais (MROSC)',
    sphere: 'Municipal',
    modality: 'Termo de Colaboração e Fomento · Prefeituras e Conselhos',
    status: 'Aberturas recorrentes',
    summary:
      'Editais lançados por secretarias municipais de Assistência Social, Educação, Cultura, Saúde e Esporte, além dos Fundos da Infância (FIA) e do Idoso.',
    whoCanApply: 'OSCs locais regularmente constituídas e inscritas nos Conselhos Municipais correspondentes à sua área.',
    essentialDocs: [
      'Registro atualizado no Conselho Municipal da área',
      'Alvará de funcionamento e licenças da sede',
      'Balanço patrimonial e escrituração contábil (NBC)',
      'Plano de trabalho alinhado ao diagnóstico do edital',
    ],
    officialPortalLabel: 'Portal Redesim / Orientações Municipais',
    officialPortalUrl: 'https://www.gov.br/empresas-e-negocios/pt-br/redesim',
    tip: 'Acompanhe o Diário Oficial do município e participe das reuniões dos Conselhos de Políticas Públicas — é lá que os editais são discutidos primeiro.',
  },
  {
    id: 'lei-incentivo-esporte-cultura',
    title: 'Leis Federais de Incentivo (Esporte e Cultura)',
    sphere: 'Incentivo e Privado',
    modality: 'Captação Incentivada · Empresas e Pessoas Físicas',
    status: 'Submissão periódica',
    summary:
      'Permite submeter projetos para aprovação técnica e, após autorizados, captar patrocínios junto a empresas e contribuintes interessados em apoiar iniciativas de interesse público.',
    whoCanApply: 'OSCs com existência jurídica regular (conforme regras de cada mecanismo) e finalidade estatutária compatível.',
    essentialDocs: [
      'Ato constitutivo e atas registradas em cartório',
      'Portfólio ou relatório de atividades realizadas',
      'Orçamento detalhado e plano de contrapartidas',
      'Conta bancária específica após aprovação do projeto',
    ],
    officialPortalLabel: 'Ministério do Esporte — Lei de Incentivo',
    officialPortalUrl: 'https://www.gov.br/esporte/pt-br/acoes-e-programas/lei-de-incentivo-ao-esporte',
    tip: 'Use os recursos exclusivamente nas rubricas aprovadas e guarde todos os comprovantes fiscais desde o primeiro gasto.',
  },
  {
    id: 'patrocinio-direto',
    title: 'Parcerias Privadas, Patrocínios e Doações Estruturadas',
    sphere: 'Incentivo e Privado',
    modality: 'Termo de Patrocínio ou Doação · Fluxo contínuo',
    status: 'Captação direta ativa',
    summary:
      'Captação junto a empresas locais, fundações empresariais e apoiadores individuais — em recursos financeiros, materiais esportivos, equipamentos, cessão de espaço ou serviços.',
    whoCanApply: 'Qualquer OSC formalizada (CNPJ ativo) com apresentação clara do impacto social e prestação de contas transparente.',
    essentialDocs: [
      'Apresentação institucional curta e plano de trabalho',
      'Contrato ou Termo de Patrocínio assinado pelas partes',
      'Plano claro de contrapartidas (uniformes, redes, eventos)',
      'Relatório fotográfico e financeiro de resultados',
    ],
    officialPortalLabel: 'Usar Modelo de Termo de Patrocínio',
    officialPortalUrl: '#documentos',
    tip: 'Formalize sempre por escrito, indicando o valor ou bem doado, a finalidade do apoio e as obrigações de cada parte.',
  },
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'q1',
    number: '01',
    pillar: 'Constituição',
    question: 'A organização já definiu sua finalidade sem fins lucrativos, área de atuação e público atendido?',
    explanation: 'A clareza da missão social orienta o estatuto, o enquadramento legal e a escolha dos editais certos.',
    legalBasis: 'Constituição Federal, art. 5º, XVII',
    recommendation:
      'Reúna os fundadores para formalizar por escrito o objetivo social, o público beneficiário e a sede da organização.',
    recommendedDocId: 'checklist-constituicao',
  },
  {
    id: 'q2',
    number: '02',
    pillar: 'Constituição',
    question: 'O Estatuto Social prevê requisitos do Código Civil e cláusulas obrigatórias do MROSC?',
    explanation:
      'Para firmar parcerias públicas, o estatuto precisa prever relevância pública e social, destinação do patrimônio em dissolução e contabilidade regular.',
    legalBasis: 'Código Civil, art. 54 · Lei nº 13.019/2014, art. 33',
    recommendation:
      'Revise ou elabore o Estatuto Social incluindo expressamente as exigências do art. 33 da Lei nº 13.019/2014.',
    recommendedDocId: 'modelo-estatuto',
  },
  {
    id: 'q3',
    number: '03',
    pillar: 'Constituição',
    question: 'Já foi realizada a Assembleia Geral de Constituição com aprovação do estatuto e eleição da diretoria?',
    explanation: 'A assembleia formaliza a criação da OSC e legitima quem representa a entidade legalmente.',
    legalBasis: 'Código Civil, art. 59',
    recommendation:
      'Convoque a assembleia com os fundadores, aprove o estatuto, eleja os dirigentes e lavre a Ata de Constituição.',
    recommendedDocId: 'modelo-ata',
  },
  {
    id: 'q4',
    number: '04',
    pillar: 'Regularização',
    question: 'O Estatuto e a Ata de Constituição já foram registrados em Cartório (RCPJ)?',
    explanation: 'Sem o registro cartorário, a entidade ainda não possui personalidade jurídica própria.',
    legalBasis: 'Código Civil, art. 45 · Lei nº 6.015/1973',
    recommendation:
      'Protocole o estatuto, a ata e a relação de fundadores no Cartório de Registro Civil de Pessoas Jurídicas da sua cidade.',
    recommendedDocId: 'modelo-ata',
  },
  {
    id: 'q5',
    number: '05',
    pillar: 'Regularização',
    question: 'A OSC já possui inscrição ativa no CNPJ junto à Receita Federal (via Redesim)?',
    explanation: 'O CNPJ é indispensável para abrir conta bancária, emitir documentos, contratar e receber recursos.',
    legalBasis: 'Receita Federal · Portal Redesim',
    recommendation:
      'Com o registro do cartório em mãos, conclua o pedido de inscrição no CNPJ pela plataforma integrada Redesim.',
    recommendedDocId: 'checklist-constituicao',
  },
  {
    id: 'q6',
    number: '06',
    pillar: 'Regularização',
    question: 'Foram verificados alvarás municipais, licenças (sanitária, ambiental ou Bombeiros) e cadastros locais?',
    explanation: 'As exigências variam conforme o endereço da sede e o tipo de atividade realizada com o público.',
    legalBasis: 'Legislação Municipal · Redesim',
    recommendation:
      'Consulte a prefeitura local sobre inscrições municipais, alvará de funcionamento e registro em Conselhos da sua área.',
    recommendedDocId: 'checklist-constituicao',
  },
  {
    id: 'q7',
    number: '07',
    pillar: 'Regularização',
    question: 'A entidade mantém escrituração contábil conforme as Normas Brasileiras de Contabilidade (NBC)?',
    explanation: 'A contabilidade regular é requisito legal para celebrar parcerias com o Poder Público pelo MROSC.',
    legalBasis: 'Lei nº 13.019/2014, art. 33, IV',
    recommendation:
      'Estruture o acompanhamento contábil desde o início, mantendo livros, balancetes e comprovantes organizados.',
    recommendedDocId: 'cartilha-juridica',
  },
  {
    id: 'q8',
    number: '08',
    pillar: 'Gestão e Transparência',
    question: 'A OSC possui um Plano de Trabalho estruturado (metas, cronograma, orçamento e resultados)?',
    explanation: 'Editais, emendas e patrocinadores exigem clareza sobre o que será entregue e quanto custará cada etapa.',
    legalBasis: 'Lei nº 13.019/2014, art. 22',
    recommendation:
      'Prepare um modelo base de Plano de Trabalho com objetivos, metas mensuráveis e cronograma físico-financeiro.',
    recommendedDocId: 'modelo-plano-trabalho',
  },
  {
    id: 'q9',
    number: '09',
    pillar: 'Gestão e Transparência',
    question: 'A gestão está preparada para operar conta bancária específica e pagamentos por transferência rastreável?',
    explanation: 'Recursos de parcerias públicas nunca podem se misturar ao caixa comum e exigem rastreabilidade total.',
    legalBasis: 'Lei nº 13.019/2014, arts. 51 e 53',
    recommendation:
      'Adote como regra interna abrir conta exclusiva em banco público por parceria e pagar fornecedores apenas por transferência bancária.',
    recommendedDocId: 'cartilha-juridica',
  },
  {
    id: 'q10',
    number: '10',
    pillar: 'Gestão e Transparência',
    question: 'A organização mantém atas, certidões atualizadas e divulga suas parcerias com transparência?',
    explanation: 'A publicidade fortalece a confiança de doadores, previne bloqueios em editais e cumpre a lei.',
    legalBasis: 'CF/88, art. 37 · Lei nº 13.019/2014, arts. 11 e 34',
    recommendation:
      'Crie uma pasta digital mensal de certidões negativas e publique o resumo de projetos e contas em um canal acessível.',
    recommendedDocId: 'modelo-patrocinio',
  },
];
