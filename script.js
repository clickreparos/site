// CONFIGURAÇÕES GERAIS
const CONFIG = {
    whatsappNumber: "5521967358108", // Atualize com o WhatsApp real (DDD 21 - Itaboraí)
    minSearchLength: 2
};

// BANCO DE DADOS DE CATEGORIAS
const categoriesData = [
    { id: "cat-hidraulico", name: "Hidráulico", icon: "💧" },
    { id: "cat-eletrico", name: "Elétrico", icon: "⚡" },
    { id: "cat-pintor", name: "Pintor", icon: "🎨" },
    { id: "cat-pedreiro", name: "Pedreiro", icon: "🧱" },
    { id: "cat-limpeza", name: "Auxiliar de Limpeza", icon: "🧹" },
    { id: "cat-rocador", name: "Roçador & Jardinagem", icon: "🌿" },
    { id: "cat-marcenaria", name: "Marcenaria & Chaveiro", icon: "🚪" },
    { id: "cat-instalacoes", name: "Montagens & Fixações", icon: "🛠️" },
    { id: "cat-ti", name: "Redes & Tecnologia", icon: "📶" },
    { id: "cat-outros", name: "Outros", icon: "🗣️" }
];

// BANCO DE DADOS DE SERVIÇOS
const servicesData = [
    // outros
    {
        id: "srv-outros-000",
        categoryId: "cat-outros",
        title: "Outros",
        desc: "Outro tipo de serviço, não listado. Favor descrever.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["outros", "outro", "zap", "whatsapp", "contato"]
    },
    
    
    // --- HIDRÁULICO ---
    {
        id: "srv-hid-001",
        categoryId: "cat-hidraulico",
        title: "Torneira pingando",
        desc: "Reparo de vedação ou substituição de reparo para sanar o gotejamento constante.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["torneira", "pingando", "gotejo", "reparo", "vazamento"]
    },
    {
        id: "srv-hid-002",
        categoryId: "cat-hidraulico",
        title: "Torneira com vazamento na base",
        desc: "Vedação e aperto na conexão da torneira com a bancada ou parede.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["torneira", "vazamento", "base", "bancada"]
    },
    {
        id: "srv-hid-003",
        categoryId: "cat-hidraulico",
        title: "Torneira com baixa pressão",
        desc: "Desentupimento de arejador, verificação de encanamento e regulagem de fluxo.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["torneira", "pressão", "fraca", "arejador"]
    },
    {
        id: "srv-hid-004",
        categoryId: "cat-hidraulico",
        title: "Torneira quebrada",
        desc: "Substituição completa de torneiras danificadas na cozinha, banheiro ou área externa.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["torneira", "quebrada", "troca", "substituição"]
    },
    {
        id: "srv-hid-005",
        categoryId: "cat-hidraulico",
        title: "Registro vazando",
        desc: "Troca da gaxeta ou do reparo interno do registro de gaveta/pressão.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["registro", "vazamento", "gaveta", "pressao"]
    },
    {
        id: "srv-hid-006",
        categoryId: "cat-hidraulico",
        title: "Registro emperrado",
        desc: "Lubrificação, manutenção de haste ou troca do mecanismo do registro.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["registro", "emperrado", "travado", "manutenção"]
    },
    {
        id: "srv-hid-007",
        categoryId: "cat-hidraulico",
        title: "Registro quebrado",
        desc: "Substituição do miolo ou instalação de novo registro de água.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["registro", "quebrado", "troca", "reparo"]
    },
    {
        id: "srv-hid-008",
        categoryId: "cat-hidraulico",
        title: "Cano com vazamento",
        desc: "Localização de vazamento exposto e conserto da tubulação de PVC/PEX.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["cano", "vazamento", "pvc", "tubulação"]
    },
    {
        id: "srv-hid-009",
        categoryId: "cat-hidraulico",
        title: "Cano furado",
        desc: "Reparo rápido com luva de correr ou substituição da seção furada do cano.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["cano", "furado", "luva de correr", "furo"]
    },
    {
        id: "srv-hid-010",
        categoryId: "cat-hidraulico",
        title: "Cano entupido",
        desc: "Desobstrução de tubulações de água potável ou esgoto.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["cano", "entupido", "desentupimento", "tubo"]
    },
    {
        id: "srv-hid-011",
        categoryId: "cat-hidraulico",
        title: "Vazamento na parede",
        desc: "Abertura pontual, reparo na tubulação hidráulica interna e vedação.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["vazamento", "parede", "infiltração", "cano"]
    },
    {
        id: "srv-hid-012",
        categoryId: "cat-hidraulico",
        title: "Vazamento no teto",
        desc: "Identificação da origem do vazamento superior e reparo no encanamento.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["vazamento", "teto", "goteira", "infiltração"]
    },
    {
        id: "srv-hid-013",
        categoryId: "cat-hidraulico",
        title: "Vazamento no piso",
        desc: "Localização de ponto de ruptura no encanamento sob o piso para conserto.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["vazamento", "piso", "chão", "tubulação"]
    },
    {
        id: "srv-hid-014",
        categoryId: "cat-hidraulico",
        title: "Vazamento sob a pia",
        desc: "Aperto e substituição de engates flexíveis, válvulas ou sifões com vazamento.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["vazamento", "pia", "sifao", "engate"]
    },
    {
        id: "srv-hid-015",
        categoryId: "cat-hidraulico",
        title: "Vazamento no vaso sanitário",
        desc: "Troca do anel de vedação do vaso ou do engate flexível de alimentação.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["vaso", "vazamento", "anel de cera", "sanitário"]
    },
    {
        id: "srv-hid-016",
        categoryId: "cat-hidraulico",
        title: "Vazamento na caixa acoplada",
        desc: "Substituição da torre de entrada/saída ou bolsa de vedação da caixa acoplada.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["caixa acoplada", "vazamento", "torre", "obturador"]
    },
    {
        id: "srv-hid-017",
        categoryId: "cat-hidraulico",
        title: "Caixa acoplada sem parar de encher",
        desc: "Ajuste ou troca do mecanismo de boia interna da caixa acoplada.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["caixa acoplada", "boia", "encher", "vazamento"]
    },
    {
        id: "srv-hid-018",
        categoryId: "cat-hidraulico",
        title: "Descarga fraca",
        desc: "Regulagem do nível de água da caixa acoplada ou limpeza do fluxo de descarga.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["descarga", "fraca", "caixa acoplada", "regulagem"]
    },
    {
        id: "srv-hid-019",
        categoryId: "cat-hidraulico",
        title: "Descarga quebrada",
        desc: "Conserto do botão de acionamento ou reparo interno de válvulas tipo Hydra.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["descarga", "quebrada", "botão", "hydra"]
    },
    {
        id: "srv-hid-020",
        categoryId: "cat-hidraulico",
        title: "Vaso sanitário entupido",
        desc: "Desentupimento técnico de vaso sanitário sem danificar a peça cerâmica.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["vaso", "entupido", "desentupir", "privada"]
    },
    {
        id: "srv-hid-021",
        categoryId: "cat-hidraulico",
        title: "Pia entupida",
        desc: "Limpeza de sifão e desobstrução do ramal de esgoto da pia da cozinha ou banheiro.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["pia", "entupida", "sifao", "desentupir"]
    },
    {
        id: "srv-hid-022",
        categoryId: "cat-hidraulico",
        title: "Tanque entupido",
        desc: "Desobstrução do esgoto do tanque da lavanderia e substituição de sifão se necessário.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["tanque", "entupido", "lavanderia", "desentupimento"]
    },
    {
        id: "srv-hid-023",
        categoryId: "cat-hidraulico",
        title: "Ralo entupido",
        desc: "Remoção de resíduos e desobstrução mecânica de ralos de box ou quintal.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["ralo", "entupido", "box", "banheiro"]
    },
    {
        id: "srv-hid-024",
        categoryId: "cat-hidraulico",
        title: "Ralo com mau cheiro",
        desc: "Higienização e instalação de ralos sifonados ou válvulas anti-odor.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["ralo", "mau cheiro", "odor", "sifão"]
    },
    {
        id: "srv-hid-025",
        categoryId: "cat-hidraulico",
        title: "Ralo transbordando",
        desc: "Desentupimento profundo da tubulação sfonada ou caixa de gordura associada.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["ralo", "transbordando", "esgoto", "agua subindo"]
    },
    {
        id: "srv-hid-026",
        categoryId: "cat-hidraulico",
        title: "Chuveiro com baixa pressão",
        desc: "Limpeza dos furos do espalhador ou remoção do redutor de vazão de água.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
        keywords: ["chuveiro", "pressão", "água fraca", "espalhador"]
    },
    {
        id: "srv-hid-027",
        categoryId: "cat-hidraulico",
        title: "Chuveiro pingando",
        desc: "Troca do reparo do registro do chuveiro para estancar a água com o chuveiro desligado.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
        keywords: ["chuveiro", "pingando", "goteira", "registro"]
    },
    {
        id: "srv-hid-028",
        categoryId: "cat-hidraulico",
        title: "Chuveiro entupido",
        desc: "Desobstrução do espalhador do chuveiro impregnado por sujeiras da rede.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
        keywords: ["chuveiro", "entupido", "espalhador", "limpeza"]
    },
    {
        id: "srv-hid-029",
        categoryId: "cat-hidraulico",
        title: "Chuveiro queimado",
        desc: "Substituição da resistência queimada do chuveiro e teste do fluxo elétrico.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
        keywords: ["chuveiro", "queimado", "resistência", "sem esquentar"]
    },
    {
        id: "srv-hid-030",
        categoryId: "cat-hidraulico",
        title: "Sifão vazando",
        desc: "Aperto de roscas ou substituição de anéis de vedação do sifão flexível ou rígido.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["sifão", "vazando", "pingando", "pia"]
    },
    {
        id: "srv-hid-031",
        categoryId: "cat-hidraulico",
        title: "Sifão quebrado",
        desc: "Troca do sifão danificado por um novo modelo expansível ou rígido ajustado.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["sifão", "quebrado", "troca", "sifao flexivel"]
    },
    {
        id: "srv-hid-032",
        categoryId: "cat-hidraulico",
        title: "Mangueira hidráulica rompida",
        desc: "Substituição de engate flexível trançado de água fria ou quente.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["mangueira", "engate flexivel", "rompida", "vazamento"]
    },
    {
        id: "srv-hid-033",
        categoryId: "cat-hidraulico",
        title: "Boia da caixa d’água com defeito",
        desc: "Troca da torneira de boia para controlar o nível de enchimento do reservatório.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["boia", "caixa d'água", "transbordando", "defeito"]
    },
    {
        id: "srv-hid-034",
        categoryId: "cat-hidraulico",
        title: "Caixa d’água vazando",
        desc: "Vedação de trincas na caixa d'água ou substituição das conexões de entrada/saída.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["caixa d'água", "vazando", "vazamento", "trinca"]
    },
    {
        id: "srv-hid-035",
        categoryId: "cat-hidraulico",
        title: "Caixa d’água transbordando",
        desc: "Conserto do ladrão e ajuste imediato no mecanismo de travamento da boia.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["caixa d'água", "transbordando", "ladrão", "boia"]
    },
    {
        id: "srv-hid-036",
        categoryId: "cat-hidraulico",
        title: "Caixa d’água sem encher",
        desc: "Verificação da tubulação de entrada, registros gerais ou problema na boia.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["caixa d'água", "sem encher", "sem água", "boia"]
    },
    {
        id: "srv-hid-037",
        categoryId: "cat-hidraulico",
        title: "Falta de água em um ponto",
        desc: "Desobstrução de bolsas de ar na tubulação ou desentupimento local.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["falta de água", "ar na tubulação", "ponto sem água"]
    },
    {
        id: "srv-hid-038",
        categoryId: "cat-hidraulico",
        title: "Baixa pressão de água",
        desc: "Diagnóstico e instalação de pressurizadores ou limpeza de tubulações com ar.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["baixa pressão", "pressurizador", "água fraca"]
    },
    {
        id: "srv-hid-039",
        categoryId: "cat-hidraulico",
        title: "Pressão excessiva na tubulação",
        desc: "Instalação de válvula reguladora de pressão para proteger canos e conexões.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["pressão alta", "regulador de pressão", "golpe de aríete"]
    },
    {
        id: "srv-hid-040",
        categoryId: "cat-hidraulico",
        title: "Bomba d’água sem funcionar",
        desc: "Verificação de alimentação elétrica, capacitores e reativação da bomba de água.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["bomba d'água", "sem funcionar", "pressurizador", "motor"]
    },

    // --- ELÉTRICO ---
    {
        id: "srv-ele-041",
        categoryId: "cat-eletrico",
        title: "Tomada sem energia",
        desc: "Diagnóstico de fios soltos, disjuntor desligado ou substituição da tomada queimada.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["tomada", "sem energia", "sem luz", "defeito"]
    },
    {
        id: "srv-ele-042",
        categoryId: "cat-eletrico",
        title: "Tomada queimada",
        desc: "Substituição do módulo de tomada danificado por sobrecarga e revisão dos cabos.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["tomada", "queimada", "derretida", "troca"]
    },
    {
        id: "srv-ele-043",
        categoryId: "cat-eletrico",
        title: "Tomada frouxa",
        desc: "Aperto da fixação da caixa de passagem ou substituição do suporte e espelho.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["tomada", "frouxa", "solta", "fixação"]
    },
    {
        id: "srv-ele-044",
        categoryId: "cat-eletrico",
        title: "Tomada quebrada",
        desc: "Troca de espelho e módulo trincado ou quebrado por novas peças do padrão atual.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["tomada", "quebrada", "espelho", "troca"]
    },
    {
        id: "srv-ele-045",
        categoryId: "cat-eletrico",
        title: "Interruptor quebrado",
        desc: "Substituição da tecla de interruptor danificada por modelo novo.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["interruptor", "quebrado", "tecla", "luz"]
    },
    {
        id: "srv-ele-046",
        categoryId: "cat-eletrico",
        title: "Interruptor sem funcionar",
        desc: "Substituição dos contatos internos ou reconexão da fiação do interruptor.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["interruptor", "não funciona", "luz não acende"]
    },
    {
        id: "srv-ele-047",
        categoryId: "cat-eletrico",
        title: "Interruptor fazendo faísca",
        desc: "Troca imediata por curto interno e reavaliação do circuito de iluminação.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["interruptor", "faísca", "estalo", "curto"]
    },
    {
        id: "srv-ele-048",
        categoryId: "cat-eletrico",
        title: "Lâmpada piscando",
        desc: "Verificação de mau contato no soquete, fiação solta ou incompatibilidade com dimmer.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["lâmpada", "piscando", "flicker", "soquete"]
    },
    {
        id: "srv-ele-049",
        categoryId: "cat-eletrico",
        title: "Lâmpada queimada",
        desc: "Troca de lâmpadas em pontos altos ou substituição de reatores/drivers LED.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["lâmpada", "queimada", "led", "trocar lâmpada"]
    },
    {
        id: "srv-ele-050",
        categoryId: "cat-eletrico",
        title: "Luminária sem funcionar",
        desc: "Conserto do driver LED, transformador ou fiação interna da luminária.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["luminária", "driver", "painel led", "sem funcionar"]
    },
    {
        id: "srv-ele-051",
        categoryId: "cat-eletrico",
        title: "Lustre solto",
        desc: "Re-fixação segura na estrutura do teto com buchas de ancoragem adequadas.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["lustre", "solto", "pendente", "fixação"]
    },
    {
        id: "srv-ele-052",
        categoryId: "cat-eletrico",
        title: "Lustre mal instalado",
        desc: "Readequação da fiação, travamento no teto e nivelamento do lustre.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["lustre", "mal instalado", "torto", "pendente"]
    },
    {
        id: "srv-ele-053",
        categoryId: "cat-eletrico",
        title: "Ventilador de teto sem funcionar",
        desc: "Troca do capacitor, chave de controle ou recondicionamento das conexões.",
        image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80",
        keywords: ["ventilador", "teto", "capacitor", "não gira"]
    },
    {
        id: "srv-ele-054",
        categoryId: "cat-eletrico",
        title: "Ventilador fazendo barulho",
        desc: "Balanceamento das pás, aperto dos parafusos de fixação e lubrificação.",
        image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80",
        keywords: ["ventilador", "barulho", "vibrando", "pás"]
    },
    {
        id: "srv-ele-055",
        categoryId: "cat-eletrico",
        title: "Ventilador girando devagar",
        desc: "Substituição do capacitor de partida desgastado para restaurar a velocidade.",
        image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80",
        keywords: ["ventilador", "lento", "capacitor", "fraco"]
    },
    {
        id: "srv-ele-056",
        categoryId: "cat-eletrico",
        title: "Disjuntor desarmando",
        desc: "Análise de sobrecarga no circuito ou fuga de corrente e adequação da carga.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["disjuntor", "desarmando", "caiu a luz", "sobrecarga"]
    },
    {
        id: "srv-ele-057",
        categoryId: "cat-eletrico",
        title: "Disjuntor queimado",
        desc: "Troca do disjuntor danificado por outro com a amperagem adequada para os cabos.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["disjuntor", "queimado", "cheiro de queimado", "trocar disjuntor"]
    },
    {
        id: "srv-ele-058",
        categoryId: "cat-eletrico",
        title: "Disjuntor com defeito",
        desc: "Substituição de disjuntor cansado/com mola fraca por novo modelo DIN.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["disjuntor", "defeito", "troca", "quadro eletrico"]
    },
    {
        id: "srv-ele-059",
        categoryId: "cat-eletrico",
        title: "Queda frequente de energia em um circuito",
        desc: "Redistribuição de cargas no quadro elétrico e verificação de aquecimento.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["queda de energia", "circuito", "sobrecarga", "disjuntor"]
    },
    {
        id: "srv-ele-060",
        categoryId: "cat-eletrico",
        title: "Curto-circuito",
        desc: "Localização emergencial da falha na fiação ou aparelho em curto e reparo.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["curto-circuito", "pipoco", "faísca", "sem luz"]
    },
    {
        id: "srv-ele-061",
        categoryId: "cat-eletrico",
        title: "Fiação aquecendo",
        desc: "Diagnóstico de fiação subdimensionada e substituição por bitola correta.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["fiação", "aquecendo", "fio quente", "bitola"]
    },
    {
        id: "srv-ele-062",
        categoryId: "cat-eletrico",
        title: "Fiação antiga",
        desc: "Substituição completa de cabos rígidos velhos por fiação flexível normatizada.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["fiação antiga", "fio rígido", "reforma elétrica"]
    },
    {
        id: "srv-ele-063",
        categoryId: "cat-eletrico",
        title: "Fio desencapado",
        desc: "Isolamento correto com fita isolante ou termorretrátil para evitar choques.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["fio desencapado", "choque", "fita isolante"]
    },
    {
        id: "srv-ele-064",
        categoryId: "cat-eletrico",
        title: "Fiação mal dimensionada",
        desc: "Cálculo e readequação das bitolas dos fios conforme potência das tomadas.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["fiação", "dimensionamento", "bitola", "cabo"]
    },
    {
        id: "srv-ele-065",
        categoryId: "cat-eletrico",
        title: "Falta de aterramento",
        desc: "Instalação de haste de aterramento e passagem de cabo terra nos pontos principais.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["aterramento", "fio terra", "choque", "haste"]
    },
    {
        id: "srv-ele-066",
        categoryId: "cat-eletrico",
        title: "Aterramento inadequado",
        desc: "Revisão e melhoria da malha de terra para garantir proteção aos equipamentos.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["aterramento", "inadequado", "fio terra"]
    },
    {
        id: "srv-ele-067",
        categoryId: "cat-eletrico",
        title: "Quadro elétrico desorganizado",
        desc: "Organização, identificação e anotação dos circuitos no QDC.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["quadro elétrico", "organização", "etiquetagem", "disjuntores"]
    },
    {
        id: "srv-ele-068",
        categoryId: "cat-eletrico",
        title: "Quadro elétrico antigo",
        desc: "Modernização do quadro de fusíveis/NEMA para disjuntores DIN e DPS/DR.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["quadro antigo", "fusível", "troca de quadro", "din"]
    },
    {
        id: "srv-ele-069",
        categoryId: "cat-eletrico",
        title: "Barramento elétrico danificado",
        desc: "Troca de barramento tipo pente ou de neutro/terra oxidado.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["barramento", "quadro", "neutro", "terra"]
    },
    {
        id: "srv-ele-070",
        categoryId: "cat-eletrico",
        title: "Chuveiro elétrico desarmando o disjuntor",
        desc: "Verificação da amperagem do disjuntor e espessura do fio do chuveiro.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
        keywords: ["chuveiro", "desarmando", "disjuntor", "sobrecarga"]
    },
    {
        id: "srv-ele-071",
        categoryId: "cat-eletrico",
        title: "Chuveiro elétrico sem aquecer",
        desc: "Teste de tensão na fiação, chave seletora ou troca do resistor.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
        keywords: ["chuveiro", "frio", "sem aquecer", "resistência"]
    },
    {
        id: "srv-ele-072",
        categoryId: "cat-eletrico",
        title: "Chuveiro elétrico queimado",
        desc: "Substituição completa do aparelho ou da resistência danificada.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
        keywords: ["chuveiro", "queimado", "trocar chuveiro"]
    },
    {
        id: "srv-ele-073",
        categoryId: "cat-eletrico",
        title: "Instalação de tomada nova",
        desc: "Puxamento de fiação adicional e instalação de caixa de tomada adicional.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["tomada nova", "ponto de tomada", "instalação"]
    },
    {
        id: "srv-ele-074",
        categoryId: "cat-eletrico",
        title: "Instalação de interruptor novo",
        desc: "Instalação de novo ponto de controle de iluminação simples ou paralelo (three-way).",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["interruptor", "novo", "three way", "ponto de luz"]
    },
    {
        id: "srv-ele-075",
        categoryId: "cat-eletrico",
        title: "Instalação de ponto de iluminação",
        desc: "Passagem de fios e fixação de nova caixa para spot, luminária ou plafon.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["ponto de luz", "iluminação", "plafon", "spot"]
    },
    {
        id: "srv-ele-076",
        categoryId: "cat-eletrico",
        title: "Instalação de tomada para eletrodoméstico",
        desc: "Instalação de tomada dedicada de 20A com fiação reforçada (forno, micro-ondas, etc).",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["tomada 20a", "eletrodomestico", "ar condicionado", "forno"]
    },
    {
        id: "srv-ele-077",
        categoryId: "cat-eletrico",
        title: "Instalação de tomada externa",
        desc: "Instalação de tomada impermeável com tampa de proteção contra chuva.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["tomada externa", "prova d'água", "quintal"]
    },
    {
        id: "srv-ele-078",
        categoryId: "cat-eletrico",
        title: "Instalação de sensor de presença",
        desc: "Ligação elétrica de sensor para acionamento automático de iluminação.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["sensor de presença", "automação", "iluminação"]
    },
    {
        id: "srv-ele-079",
        categoryId: "cat-eletrico",
        title: "Instalação de campainha",
        desc: "Fixação e ligação de campainhas com fio ou módulo sem fio.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["campainha", "instalacao", "som"]
    },

    // --- MARCENARIA & CHAVEIRO ---
    {
        id: "srv-mar-080",
        categoryId: "cat-marcenaria",
        title: "Fechadura quebrada",
        desc: "Substituição ou reparo no miolo/mecanismo da fechadura de portas.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["fechadura", "quebrada", "chaveiro", "porta"]
    },
    {
        id: "srv-mar-081",
        categoryId: "cat-marcenaria",
        title: "Fechadura emperrada",
        desc: "Lubrificação e alinhamento do mecanismo interno de fechaduras.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["fechadura", "emperrada", "lubrificacao", "chave"]
    },
    {
        id: "srv-mar-082",
        categoryId: "cat-marcenaria",
        title: "Porta trancada",
        desc: "Abertura emergencial de portas emperradas ou trancadas por acidente.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["porta trancada", "abrir porta", "chaveiro"]
    },
    {
        id: "srv-mar-083",
        categoryId: "cat-marcenaria",
        title: "Porta raspando no chão",
        desc: "Plainamento inferior da folha da porta e ajuste de dobradiças.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["porta raspando", "planear porta", "dobradica"]
    },
    {
        id: "srv-mar-084",
        categoryId: "cat-marcenaria",
        title: "Porta não fecha",
        desc: "Ajuste no batente, réguas ou regulagem de dobradiças para perfeito fechamento.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["porta não fecha", "alinhamento", "batente"]
    },
    {
        id: "srv-mar-085",
        categoryId: "cat-marcenaria",
        title: "Porta desalinhada",
        desc: "Regulagem dos parafusos das dobradiças e nivelamento do quadro da porta.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["porta desalinhada", "dobradica", "ajuste"]
    },
    {
        id: "srv-mar-086",
        categoryId: "cat-marcenaria",
        title: "Porta rangendo",
        desc: "Lubrificação técnica nos pinos das dobradiças.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["porta rangendo", "barulho", "oleo", "dobradica"]
    },
    {
        id: "srv-mar-087",
        categoryId: "cat-marcenaria",
        title: "Dobradiça quebrada",
        desc: "Troca da dobradiça danificada e reforço da furação na madeira.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["dobradica quebrada", "troca", "porta", "armario"]
    },
    {
        id: "srv-mar-088",
        categoryId: "cat-marcenaria",
        title: "Dobradiça enferrujada",
        desc: "Substituição de dobradiças oxidadas por novas de aço inox ou latão.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["dobradica enferrujada", "ferrugem", "troca"]
    },
    {
        id: "srv-mar-089",
        categoryId: "cat-marcenaria",
        title: "Maçaneta quebrada",
        desc: "Substituição de maçanetas soltas ou com espelho/mecanismo quebrado.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["maçaneta", "quebrada", "trocar macaneta"]
    },
    {
        id: "srv-mar-090",
        categoryId: "cat-marcenaria",
        title: "Maçaneta frouxa",
        desc: "Aperto dos parafusos de retenção e alinhamento do pino central.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["maçaneta frouxa", "solta", "apertar"]
    },
    {
        id: "srv-mar-091",
        categoryId: "cat-marcenaria",
        title: "Batente de porta danificado",
        desc: "Reparo com massa de madeira ou substituição parcial da peça de madeira.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["batente", "marcenaria", "porta", "massa de madeira"]
    },
    {
        id: "srv-mar-092",
        categoryId: "cat-marcenaria",
        title: "Janela emperrada",
        desc: "Limpeza de trilhos, lubrificação de roldanas e ajuste de curso.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["janela emperrada", "trilho", "roldana"]
    },
    {
        id: "srv-mar-093",
        categoryId: "cat-marcenaria",
        title: "Janela que não fecha",
        desc: "Ajuste do fecho, alinhamento dos trilhos ou substituição de trincos.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["janela", "nao fecha", "trinco", "alinhamento"]
    },
    {
        id: "srv-mar-094",
        categoryId: "cat-marcenaria",
        title: "Janela com vazamento de água",
        desc: "Aplicação de silicone PU em frestas externas ou desobstrução de drenos.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["janela", "vazamento", "chuva", "silicone"]
    },
    {
        id: "srv-mar-095",
        categoryId: "cat-marcenaria",
        title: "Espelho quebrado",
        desc: "Remoção segura dos cacos e descarte adequado do espelho danificado.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["espelho quebrado", "remocao", "vidro"]
    },
    {
        id: "srv-mar-096",
        categoryId: "cat-marcenaria",
        title: "Espelho mal instalado",
        desc: "Remoção e fixação correta com fita dupla face de alta fixação ou suportes.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["espelho mal instalado", "fixacao", "parede"]
    },
    {
        id: "srv-mar-097",
        categoryId: "cat-marcenaria",
        title: "Silicone deteriorado",
        desc: "Remoção de junta de silicone mofada e reaplicação de silicone antifungo.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["silicone", "vedação", "mofo", "box", "pia"]
    },
    {
        id: "srv-mar-098",
        categoryId: "cat-marcenaria",
        title: "Tela mosquiteira rasgada",
        desc: "Substituição do tecido de fibra de vidro ou ajuste do perfil de alumínio.",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        keywords: ["tela mosquiteira", "rasgada", "troca", "janela"]
    },

    // --- PEDREIRO ---
    {
        id: "srv-ped-099",
        categoryId: "cat-pedreiro",
        title: "Parede com infiltração",
        desc: "Tratamento impermeabilizante da base da parede para conter umidade.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["parede", "infiltração", "umidade", "impermeabilização"]
    },
    {
        id: "srv-ped-100",
        categoryId: "cat-pedreiro",
        title: "Parede descascando",
        desc: "Raspagem do reboco fraco, aplicação de fundo preparador e emassamento.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["parede descascando", "fundo preparador", "massa"]
    },
    {
        id: "srv-ped-101",
        categoryId: "cat-pedreiro",
        title: "Parede com rachaduras",
        desc: "Abertura do sulco, colocação de tela estrutural e fechamento com argamassa.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["rachaduras", "trincas estruturais", "parede"]
    },
    {
        id: "srv-ped-102",
        categoryId: "cat-pedreiro",
        title: "Parede com trincas",
        desc: "Tratamento de trincas superficiais com fita trinca e massa apropriada.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["trincas", "fissuras", "massa acrílica"]
    },
    {
        id: "srv-ped-103",
        categoryId: "cat-pedreiro",
        title: "Parede esfarelando",
        desc: "Aplicação de endurecedor de superfície e refazimento de reboco.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["parede esfarelando", "reboco fraco", "endurecedor"]
    },
    {
        id: "srv-ped-104",
        categoryId: "cat-pedreiro",
        title: "Reboco soltando",
        desc: "Remoção da parte oca do reboco e recomposição com argamassa de emboço.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["reboco soltando", "parede oca", "massa"]
    },
    {
        id: "srv-ped-105",
        categoryId: "cat-pedreiro",
        title: "Reboco rachado",
        desc: "Correção de fissuras no reboco novo ou antigo para pintura.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["reboco rachado", "fissura", "argamassa"]
    },
    {
        id: "srv-ped-106",
        categoryId: "cat-pedreiro",
        title: "Buraco na parede",
        desc: "Preenchimento de furos grandes ou estragos na alvenaria/drywall com gesso/massa.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["buraco na parede", "tapar buraco", "gesso"]
    },
    {
        id: "srv-ped-107",
        categoryId: "cat-pedreiro",
        title: "Furo de bucha danificado",
        desc: "Preenchimento do furo espanado e refuração segura no local.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["furo espanado", "bucha solta", "tapar furo"]
    },
    {
        id: "srv-ped-108",
        categoryId: "cat-pedreiro",
        title: "Quina de parede quebrada",
        desc: "Recomposição de quinas com cantoneira metálica ou gesso duro/massa.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["quina quebrada", "canto de parede", "reparo"]
    },
    {
        id: "srv-ped-109",
        categoryId: "cat-pedreiro",
        title: "Teto com infiltração",
        desc: "Localização da causa superior, aplicação de manta ou produto impermeabilizante.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["teto infiltração", "goteira", "vazamento"]
    },
    {
        id: "srv-ped-110",
        categoryId: "cat-pedreiro",
        title: "Teto com manchas de umidade",
        desc: "Tratamento químico contra manchas de umidade e selagem da superfície.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["mancha de umidade", "teto amarelado", "bloqueador"]
    },
    {
        id: "srv-ped-111",
        categoryId: "cat-pedreiro",
        title: "Teto com mofo",
        desc: "Limpeza profunda com solução fungicida e aplicação de tinta anti-mofo.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["teto com mofo", "bolor", "fungicida"]
    },
    {
        id: "srv-ped-112",
        categoryId: "cat-pedreiro",
        title: "Teto rachado",
        desc: "Reparo estrutural leve ou aplicação de tela trinca em laje e gesso.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["teto rachado", "trinca na laje", "gesso"]
    },
    {
        id: "srv-ped-113",
        categoryId: "cat-pedreiro",
        title: "Forro de gesso quebrado",
        desc: "Recorte da placa de gesso danificada e chumbamento de nova placa.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["forro de gesso", "gesso quebrado", "remendo gesso"]
    },
    {
        id: "srv-ped-114",
        categoryId: "cat-pedreiro",
        title: "Forro de gesso trincado",
        desc: "Tratamento de juntas de gesso com fita telada e gesso de acabamento.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["gesso trincado", "fita telada", "junta de gesso"]
    },
    {
        id: "srv-ped-115",
        categoryId: "cat-pedreiro",
        title: "Azulejo quebrado",
        desc: "Remoção cirúrgica da peça trincada e assentamento de novo azulejo.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["azulejo quebrado", "troca de azulejo", "cerâmica"]
    },
    {
        id: "srv-ped-116",
        categoryId: "cat-pedreiro",
        title: "Azulejo solto",
        desc: "Retirada do azulejo, remoção da argamassa antiga e colagem com argamassa nova.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["azulejo solto", "colar azulejo", "argamassa"]
    },
    {
        id: "srv-ped-117",
        categoryId: "cat-pedreiro",
        title: "Azulejo trincado",
        desc: "Substituição pontual de peças cerâmicas danificadas sem danificar o entorno.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["azulejo trincado", "troca de azulejo"]
    },
    {
        id: "srv-ped-118",
        categoryId: "cat-pedreiro",
        title: "Rejunte deteriorado",
        desc: "Raspagem do rejunte esfarelado e aplicação de novo rejunte impermeável.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["rejunte", "renovar rejunte", "azulejo", "piso"]
    },
    {
        id: "srv-ped-119",
        categoryId: "cat-pedreiro",
        title: "Rejunte mofado",
        desc: "Remoção mecânica do rejunte preto de mofo e re-aplicação de epóxi/resina.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["rejunte mofado", "mofo", "banheiro", "limpeza rejunte"]
    },
    {
        id: "srv-ped-120",
        categoryId: "cat-pedreiro",
        title: "Rejunte soltando",
        desc: "Raspagem parcial e rejuntamento novo com boa aderência.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["rejunte soltando", "esfarelando", "piso"]
    },
    {
        id: "srv-ped-121",
        categoryId: "cat-pedreiro",
        title: "Piso quebrado",
        desc: "Substituição da peça de piso trincada ou quebrada.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["piso quebrado", "porcelanato quebrado", "troca piso"]
    },
    {
        id: "srv-ped-122",
        categoryId: "cat-pedreiro",
        title: "Piso solto",
        desc: "Reassentamento de placas de piso que estão ocas ou se descolaram.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["piso solto", "piso oco", "recolar piso"]
    },
    {
        id: "srv-ped-123",
        categoryId: "cat-pedreiro",
        title: "Piso estufado",
        desc: "Remoção das peças estufadas por dilatação e assentamento com junta correta.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["piso estufado", "dilatação", "reforma piso"]
    },
    {
        id: "srv-ped-124",
        categoryId: "cat-pedreiro",
        title: "Piso desnivelado",
        desc: "Correção de cota com argamassa auto-nivelante antes do revestimento.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["piso desnivelado", "autonivelante", "nivelar"]
    },
    {
        id: "srv-ped-125",
        categoryId: "cat-pedreiro",
        title: "Piso fazendo barulho",
        desc: "Injeção de resina sob o piso flutuante/vinílico ou refazimento do contrapiso.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["piso rangendo", "barulho no piso", "vinílico"]
    },
    {
        id: "srv-ped-126",
        categoryId: "cat-pedreiro",
        title: "Rodapé soltando",
        desc: "Colagem ou fixação de rodapé de madeira, poliestireno ou cerâmica.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["rodapé soltando", "colar rodapé", "poliestireno"]
    },
    {
        id: "srv-ped-127",
        categoryId: "cat-pedreiro",
        title: "Rodapé quebrado",
        desc: "Troca do pedaço de rodapé danificado.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["rodapé quebrado", "troca de rodapé"]
    },
    {
        id: "srv-ped-128",
        categoryId: "cat-pedreiro",
        title: "Rodapé estufado",
        desc: "Substituição do rodapé estufado por umidade por opções impermeáveis.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["rodapé estufado", "umidade", "poliestireno"]
    },
    {
        id: "srv-ped-129",
        categoryId: "cat-pedreiro",
        title: "Taco solto",
        desc: "Recolagem de tacos de madeira com cola PU específica.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["taco solto", "piso de madeira", "colar taco"]
    },
    {
        id: "srv-ped-130",
        categoryId: "cat-pedreiro",
        title: "Taco quebrado",
        desc: "Substituição do taco danificado por outro na mesma dimensão.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["taco quebrado", "madeira", "piso de madeira"]
    },
    {
        id: "srv-ped-131",
        categoryId: "cat-pedreiro",
        title: "Taco com cupim",
        desc: "Remoção do trecho contaminado e tratamento localizado.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["taco cupim", "cupim no piso", "madeira"]
    },
    {
        id: "srv-ped-132",
        categoryId: "cat-pedreiro",
        title: "Calçada quebrada",
        desc: "Remoção do trecho de concreto danificado e aplicação de novo concreto com malha.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["calçada quebrada", "concreto", "reparo de calçada"]
    },

    // --- PINTOR ---
    {
        id: "srv-pin-133",
        categoryId: "cat-pintor",
        title: "Pintura descascando",
        desc: "Lixamento total da área, aplicação de selador e repintura.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["pintura descascando", "lixar", "selador", "tinta"]
    },
    {
        id: "srv-pin-134",
        categoryId: "cat-pintor",
        title: "Pintura manchada",
        desc: "Uniformização da parede com tinta de alta cobertura.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["pintura manchada", "repintura", "tinta acrílica"]
    },
    {
        id: "srv-pin-135",
        categoryId: "cat-pintor",
        title: "Parede precisando de pintura",
        desc: "Pintura completa de parede interna ou externa com tinta látex/acrílica.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["pintura de parede", "pintar quarto", "tinta"]
    },
    {
        id: "srv-pin-136",
        categoryId: "cat-pintor",
        title: "Teto precisando de pintura",
        desc: "Pintura de teto com tinta branca neve acrílica antirespingos.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["pintura de teto", "teto branco", "látex"]
    },
    {
        id: "srv-pin-137",
        categoryId: "cat-pintor",
        title: "Pintura com bolhas",
        desc: "Raspagem das bolhas causadas por umidade e repintura com fundo impermeável.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["bolhas na pintura", "umidade", "raspar"]
    },
    {
        id: "srv-pin-138",
        categoryId: "cat-pintor",
        title: "Pintura com mofo",
        desc: "Tratamento de desinfecção do mofo e aplicação de tinta lavável com fungicida.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["pintura mofada", "limpar mofo", "tinta antimofo"]
    },
    {
        id: "srv-pin-139",
        categoryId: "cat-pintor",
        title: "Pintura com diferença de tonalidade",
        desc: "Repintura completa do pano de parede para igualar a cor.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["tonalidade", "diferença de cor", "pintura"]
    },
    {
        id: "srv-pin-140",
        categoryId: "cat-pintor",
        title: "Tinta soltando",
        desc: "Remoção de camadas antigas de tinta sem aderência e repintura.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["tinta soltando", "raspar parede", "massa corrida"]
    },
    {
        id: "srv-pin-141",
        categoryId: "cat-pintor",
        title: "Parede com marcas de móveis",
        desc: "Emassamento local dos riscos/amassados e retoque de tinta.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["marcas de móveis", "retoque de pintura", "massa corrida"]
    },
    {
        id: "srv-pin-142",
        categoryId: "cat-pintor",
        title: "Parede com marcas de crianças",
        desc: "Limpeza técnica ou cobertura de riscos de giz/caneta com tinta isolante.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["risco de caneta", "marcas de criança", "pintura"]
    },
    {
        id: "srv-pin-143",
        categoryId: "cat-pintor",
        title: "Parede com furos",
        desc: "Fechamento de antigos furos de prego/bucha com massa e retoque.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["furos na parede", "tapar furos", "massa corrida"]
    },
    {
        id: "srv-pin-144",
        categoryId: "cat-pintor",
        title: "Parede com manchas de gordura",
        desc: "Aplicação de fundo isolante de manchas e pintura com acabamento lavável.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["gordura na parede", "mancha", "fundo isolante"]
    },
    {
        id: "srv-pin-145",
        categoryId: "cat-pintor",
        title: "Parede com manchas de água",
        desc: "Aplicação de tinta bloqueadora de amarelamento por vazamento seco.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["mancha de água", "teto amarelado", "bloqueador de manchas"]
    },
    {
        id: "srv-pin-146",
        categoryId: "cat-pintor",
        title: "Pintura externa desgastada",
        desc: "Pintura de muros e fachadas com tinta emborrachada resistente ao sol e chuva.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["pintura externa", "fachada", "tinta emborrachada"]
    },
    {
        id: "srv-pin-147",
        categoryId: "cat-pintor",
        title: "Fachada descascando",
        desc: "Tratamento de fachadas expostas ao tempo com hidrojateamento e repintura.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["fachada descascando", "pintura externa", "textura"]
    },
    {
        id: "srv-pin-148",
        categoryId: "cat-pintor",
        title: "Fachada com fissuras",
        desc: "Aplicação de mastique elástico em fissuras externas e tinta impermeável.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["fissura fachada", "mastique", "pintura emborrachada"]
    },
    {
        id: "srv-pin-149",
        categoryId: "cat-pintor",
        title: "Fachada com mofo",
        desc: "Lavagem pressurizada com produto fungicida e aplicação de tinta protetora.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["fachada com mofo", "limpeza de fachada", "pintura"]
    },
    {
        id: "srv-pin-150",
        categoryId: "cat-pintor",
        title: "Grade enferrujada",
        desc: "Lixamento de ferrugem, fundo convertedor e pintura com esmalte sintético.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["grade enferrujada", "zarcão", "esmalte sintético", "ferrugem"]
    },
    {
        id: "srv-pin-151",
        categoryId: "cat-pintor",
        title: "Corrimão enferrujado",
        desc: "Tratamento da ferrugem e repintura do corrimão metálico.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["corrimão", "ferrugem", "pintura de metal"]
    },
    {
        id: "srv-pin-152",
        categoryId: "cat-pintor",
        title: "Grade quebrada",
        desc: "Pequena solda de ponto e retoque de pintura anticorrosiva.",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
        keywords: ["grade quebrada", "solda", "serralheria leve"]
    },

    // --- TELHADO & ESTRUTURA (PEDREIRO) ---
    {
        id: "srv-ped-153",
        categoryId: "cat-pedreiro",
        title: "Telhado com goteira",
        desc: "Localização de falhas de vedação e aplicação de fita asfáltica ou silicone.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["goteira", "telhado", "vazamento de chuva"]
    },
    {
        id: "srv-ped-154",
        categoryId: "cat-pedreiro",
        title: "Telha quebrada",
        desc: "Substituição pontual de telhas cerâmicas, de concreto ou fibrocimento.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["telha quebrada", "troca de telha", "telhado"]
    },
    {
        id: "srv-ped-155",
        categoryId: "cat-pedreiro",
        title: "Telha deslocada",
        desc: "Reagrupamento e alinhamento das telhas fora de posição após ventos fortes.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["telha deslocada", "arrumar telhado", "vento"]
    },
    {
        id: "srv-ped-156",
        categoryId: "cat-pedreiro",
        title: "Telha solta",
        desc: "Amarração de telhas ou fixação com parafusos vedantes.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["telha solta", "fixar telha", "parafuso vedante"]
    },

    // --- MONTAGENS & FIXAÇÕES ---
    {
        id: "srv-ins-157",
        categoryId: "cat-instalacoes",
        title: "Prateleira solta",
        desc: "Troca de buchas gastas por modelos de alta expansão e alinhamento.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["prateleira solta", "bucha", "parafuso"]
    },
    {
        id: "srv-ins-158",
        categoryId: "cat-instalacoes",
        title: "Painel de TV solto",
        desc: "Reforço na ancoragem do painel de MDF na parede com buchas adequadas.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["painel de tv", "solto", "fixação"]
    },
    {
        id: "srv-ins-159",
        categoryId: "cat-instalacoes",
        title: "Suporte de TV solto",
        desc: "Re-fixação segura do suporte de TV em drywall ou alvenaria.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["suporte de tv", "instalar tv", "bucha drywall"]
    },

    // --- REDES & TECNOLOGIA ---
    {
        id: "srv-tec-160",
        categoryId: "cat-ti",
        title: "Wi-Fi com sinal fraco",
        desc: "Instalação e configuração de repetidores de sinal ou redes Mesh.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        keywords: ["wifi fraco", "repetidor", "sinal de internet"]
    },
    {
        id: "srv-tec-161",
        categoryId: "cat-ti",
        title: "Cabo de rede danificado",
        desc: "Crimpagem de conectores RJ45 ou substituição de cabo de rede Ethernet.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        keywords: ["cabo de rede", "rj45", "crimpagem", "internet"]
    },
    {
        id: "srv-tec-162",
        categoryId: "cat-ti",
        title: "Roteador mal instalado",
        desc: "Fixação do roteador em local elevado e otimizado da residência.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        keywords: ["roteador", "instalação wifi", "internet"]
    },
    {
        id: "srv-tec-163",
        categoryId: "cat-ti",
        title: "Ponto de rede sem conexão",
        desc: "Testes de continuidade na fiação de rede e troca de tomadas RJ45 fêmea.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        keywords: ["ponto de rede", "sem conexao", "tomada rj45"]
    },
    {
        id: "srv-tec-164",
        categoryId: "cat-ti",
        title: "Computador sem internet",
        desc: "Configuração de rede local IP/DNS e diagnóstico da placa de rede.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        keywords: ["computador sem internet", "configuração de rede"]
    },
    {
        id: "srv-tec-165",
        categoryId: "cat-ti",
        title: "Impressora sem funcionar",
        desc: "Configuração de impressora Wi-Fi no roteador local ou via cabo.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        keywords: ["impressora wifi", "instalar impressora", "rede"]
    },

    // --- OUTROS HIDRÁULICOS ---
    {
        id: "srv-hid-166",
        categoryId: "cat-hidraulico",
        title: "Torneira de jardim quebrada",
        desc: "Troca da torneira metálica de jardim ou tanque externo.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["torneira de jardim", "quintal", "trocar torneira"]
    },

    // --- HIGIENIZAÇÃO / LIMPEZA ---
    {
        id: "srv-lim-167",
        categoryId: "cat-limpeza",
        title: "Mofo causado por umidade",
        desc: "Higienização profunda com aplicação de produtos neutro fungicidas.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
        keywords: ["mofo umidade", "limpeza mofo", "higienização"]
    },
    {
        id: "srv-lim-168",
        categoryId: "cat-limpeza",
        title: "Bolor em paredes",
        desc: "Remoção de bolor acumulado em cantos e paredes de banheiros/cozinhas.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
        keywords: ["bolor", "parede mofada", "limpeza de mofo"]
    },
    {
        id: "srv-lim-169",
        categoryId: "cat-limpeza",
        title: "Formigas",
        desc: "Identificação de frestas por onde transitam e aplicação de vedante.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
        keywords: ["formigas", "vedar frestas", "controle"]
    },
    {
        id: "srv-lim-170",
        categoryId: "cat-limpeza",
        title: "Moscas",
        desc: "Instalação de veda-portas e verificação de ralos abertos.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
        keywords: ["moscas", "proteção", "ralo"]
    },

    // --- ESGOTO & ODOR ---
    {
        id: "srv-hid-171",
        categoryId: "cat-hidraulico",
        title: "Mau cheiro vindo do ralo",
        desc: "Instalação de fecho hídrico sfonado ou substituição da caixa sfonada.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["mau cheiro ralo", "esgoto", "odor no banheiro"]
    },
    {
        id: "srv-hid-172",
        categoryId: "cat-hidraulico",
        title: "Mau cheiro vindo da tubulação",
        desc: "Verificação da tubulação de respiro do esgoto no telhado/laje.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["mau cheiro tubulação", "tubo de respiro", "esgoto"]
    },
    {
        id: "srv-hid-173",
        categoryId: "cat-hidraulico",
        title: "Mau cheiro no banheiro",
        desc: "Diagnóstico completo da vedação do vaso e ralos do banheiro.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["mau cheiro banheiro", "anel de cera", "esgoto"]
    },

    // --- FIXAÇÕES E MONTAGENS (CONTINUAÇÃO) ---
    {
        id: "srv-ins-174",
        categoryId: "cat-instalacoes",
        title: "Instalação de trinco",
        desc: "Furação e instalação de trincos de segurança em portas e janelas.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["trinco", "instalar trinco", "tranca"]
    },
    {
        id: "srv-ins-175",
        categoryId: "cat-instalacoes",
        title: "Instalação de puxador",
        desc: "Furação precisa e instalação de puxadores em gavetas e portas de armários.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["puxador", "instalar puxador", "armário"]
    },
    {
        id: "srv-ins-176",
        categoryId: "cat-instalacoes",
        title: "Instalação de prateleiras",
        desc: "Nivelamento a laser e fixação segura de prateleiras decorativas.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar prateleira", "nível", "fixar prateleira"]
    },
    {
        id: "srv-ins-177",
        categoryId: "cat-instalacoes",
        title: "Instalação de suportes",
        desc: "Instalação de suportes para micro-ondas, plantas ou objetos pesados.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar suporte", "suporte microondas", "fixação"]
    },
    {
        id: "srv-ins-178",
        categoryId: "cat-instalacoes",
        title: "Instalação de quadros",
        desc: "Fixação e alinhamento perfeito de quadros e porta-retratos na parede.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar quadros", "pendurar quadro", "decoração"]
    },
    {
        id: "srv-ins-179",
        categoryId: "cat-instalacoes",
        title: "Instalação de espelhos",
        desc: "Instalação segura de espelhos pesados com presilhas ou cola fixa-espelho.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar espelho", "fixar espelho", "banheiro"]
    },
    {
        id: "srv-ins-180",
        categoryId: "cat-instalacoes",
        title: "Instalação de televisão",
        desc: "Fixação do suporte de TV na parede e passagem de cabos.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar tv", "tv na parede", "suporte tv"]
    },
    {
        id: "srv-ins-181",
        categoryId: "cat-instalacoes",
        title: "Instalação de cortinas",
        desc: "Fixação de varões ou trilhos suíços de cortinas com nivelamento.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar cortina", "varão", "trilho suíço"]
    },
    {
        id: "srv-ins-182",
        categoryId: "cat-instalacoes",
        title: "Instalação de varais",
        desc: "Instalação de varal de teto com roldanas ou varal dobrável de parede.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar varal", "varal de teto", "varal de parede"]
    },

    // --- INSTALAÇÕES ELÉTRICAS ---
    {
        id: "srv-ele-183",
        categoryId: "cat-eletrico",
        title: "Instalação de tomadas",
        desc: "Adição de novas tomadas ou troca para módulos modernos.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar tomada", "ponto de tomada"]
    },
    {
        id: "srv-ele-184",
        categoryId: "cat-eletrico",
        title: "Instalação de luminárias",
        desc: "Fixação e ligação elétrica de painéis LED, plafons ou pendentes.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar luminaria", "plafon", "pendente"]
    },
    {
        id: "srv-ele-185",
        categoryId: "cat-eletrico",
        title: "Instalação de ventiladores",
        desc: "Instalação completa de ventilador de teto ou de parede com controle.",
        image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar ventilador", "ventilador de teto"]
    },

    // --- INSTALAÇÕES HIDRÁULICAS & APARELHOS ---
    {
        id: "srv-hid-186",
        categoryId: "cat-hidraulico",
        title: "Instalação de chuveiros",
        desc: "Montagem, vedação de cano e conexão elétrica segura de chuveiros.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar chuveiro", "trocar chuveiro", "ducha"]
    },
    {
        id: "srv-hid-187",
        categoryId: "cat-hidraulico",
        title: "Instalação de torneiras",
        desc: "Montagem e vedação de torneiras em cubas, bancadas ou tanques.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar torneira", "vedar torneira"]
    },
    {
        id: "srv-hid-188",
        categoryId: "cat-hidraulico",
        title: "Instalação de filtros de água",
        desc: "Fixação de purificador de água e conexão no ponto de água de 1/2\".",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar filtro", "purificador de agua"]
    },
    {
        id: "srv-hid-189",
        categoryId: "cat-hidraulico",
        title: "Instalação de máquinas de lavar",
        desc: "Conexão da mangueira de entrada no ponto de água e saída na rede de esgoto.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar maquina de lavar", "lavadora", "mangueira"]
    },
    {
        id: "srv-hid-190",
        categoryId: "cat-hidraulico",
        title: "Instalação de lava-louças",
        desc: "Instalação de adapter hidráulico, esgoto e ligação de lava-louças.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar lava louça", "cozinha", "sifão"]
    },
    {
        id: "srv-hid-191",
        categoryId: "cat-hidraulico",
        title: "Instalação de cooktops",
        desc: "Fixação na bancada e conexão da mangueira de gás ou fiação elétrica.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["instalar cooktop", "fogao", "gas"]
    },

    // --- LIMPEZA PÓS-OBRA & REMOÇÕES ---
    {
        id: "srv-lim-192",
        categoryId: "cat-limpeza",
        title: "Remoção de resíduos de obra",
        desc: "Recolhimento e ensacamento de restos de entulho fino de pequena reforma.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
        keywords: ["resíduos de obra", "entulho", "limpeza pós obra"]
    },
    {
        id: "srv-lim-193",
        categoryId: "cat-limpeza",
        title: "Remoção de tinta de pisos",
        desc: "Limpeza de respingos de tinta em azulejos e pisos com removedor adequado.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
        keywords: ["limpar tinta do piso", "respingo de tinta", "pós obra"]
    },
    {
        id: "srv-lim-194",
        categoryId: "cat-limpeza",
        title: "Remoção de cimento de pisos",
        desc: "Remoção química/mecânica cuidadosa de restos de argamassa e cimento pós-obra.",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
        keywords: ["limpar cimento", "restos de argamassa", "piso"]
    },

    // --- REPARAÇÕES GERAIS DE ALVENARIA (PEDREIRO) ---
    {
        id: "srv-ped-195",
        categoryId: "cat-pedreiro",
        title: "Reparação de buracos em paredes",
        desc: "Preenchimento de aberturas com tijolo/tampão e acabamento com massa.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["buracos na parede", "tapar buraco", "alvenaria"]
    },
    {
        id: "srv-ped-196",
        categoryId: "cat-pedreiro",
        title: "Reparação de fissuras",
        desc: "Tratamento de fissuras superficiais com argamassa elástica.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["fissuras", "trincas", "reparo"]
    },
    {
        id: "srv-ped-197",
        categoryId: "cat-pedreiro",
        title: "Reparação de rachaduras superficiais",
        desc: "Correção estética de trincas na camada de pintura e massa corrida.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["rachaduras superficiais", "massa corrida"]
    },
    {
        id: "srv-ped-198",
        categoryId: "cat-pedreiro",
        title: "Reparação de reboco",
        desc: "Conserto de placas de reboco soltas ou deterioradas.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["reparo de reboco", "emboço", "argamassa"]
    },
    {
        id: "srv-ped-199",
        categoryId: "cat-pedreiro",
        title: "Reparação de concreto",
        desc: "Recuperação de peças de concreto armado com estufamento superficial.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["reparo de concreto", "concreto armado", "viga"]
    },
    {
        id: "srv-ped-200",
        categoryId: "cat-pedreiro",
        title: "Reparação de calçadas",
        desc: "Conserto de placas e quinas quebradas de calçadas em cimento ou pedra.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["arrumar calçada", "concreto", "pedreiro"]
    },
    {
        id: "srv-ped-201",
        categoryId: "cat-pedreiro",
        title: "Reparação de degraus",
        desc: "Reconstituição de quinas ou espelhos de degraus quebrados.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["degrau quebrado", "consertar escada", "quina de degrau"]
    },
    {
        id: "srv-ped-202",
        categoryId: "cat-pedreiro",
        title: "Reparação de escadas",
        desc: "Manutenção e alinhamento do revestimento ou estrutura de escadas.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["reparo de escada", "piso de escada", "degraus"]
    },
    {
        id: "srv-ped-203",
        categoryId: "cat-pedreiro",
        title: "Reparação de muros",
        desc: "Conserto de trincas, fiadas de tijolo soltas ou pingadeiras em muros.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["muro quebrado", "reparo em muro", "alvenaria"]
    },
    {
        id: "srv-ped-204",
        categoryId: "cat-pedreiro",
        title: "Reparação de churrasqueira",
        desc: "Substituição de tijolos refratários soltos ou reparo de trincas de calor.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["churrasqueira", "tijolo refratario", "reparo"]
    },
    {
        id: "srv-ped-205",
        categoryId: "cat-pedreiro",
        title: "Reparação de bancada",
        desc: "Chumbamento e fixação de suportes de bancadas de granito ou mdf soltas.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
        keywords: ["bancada solta", "chumbar bancada", "mármore"]
    },

    // --- REPARAÇÃO HIDRÁULICA FINAL ---
    {
        id: "srv-hid-206",
        categoryId: "cat-hidraulico",
        title: "Reparação de pia",
        desc: "Re-fixação de cuba solta sob a bancada ou troca de válvula e escoamento.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["reparo de pia", "cuba solta", "válvula"]
    },
    {
        id: "srv-hid-207",
        categoryId: "cat-hidraulico",
        title: "Reparação de cuba",
        desc: "Vedação com silicone PU e colar novamente a cuba de inox ou louça.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["cuba solta", "colar cuba", "silicone pu"]
    },
    {
        id: "srv-hid-208",
        categoryId: "cat-hidraulico",
        title: "Reparação de instalações hidráulicas",
        desc: "Manutenção preventiva e corretiva completa em pontos de água e esgoto.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
        keywords: ["reparo hidráulico", "encanamento", "vazamento"]
    }
];

    

// ESTADO DA APLICAÇÃO
let currentCategoryId = null;
let activeService = null;

// ELEMENTOS DOM
const DOM = {
    searchInput: document.getElementById('search-input'),
    suggestionsBox: document.getElementById('search-suggestions'),
    categoriesGrid: document.getElementById('categories-grid'),
    servicesUl: document.getElementById('services-ul'),
    listCategoryTitle: document.getElementById('list-category-title'),
    detailCategory: document.getElementById('detail-category'),
    detailTitle: document.getElementById('detail-title'),
    detailDescription: document.getElementById('detail-description'),
    btnCloseList: document.getElementById('btn-close-list'),
    btnCloseDetail: document.getElementById('btn-close-detail'),
    
    // MODAL E FORMULÁRIO
    btnOpenForm: document.getElementById('btn-open-form'),
    modalQuote: document.getElementById('modal-quote'),
    btnCloseModal: document.getElementById('btn-close-modal'),
    modalServiceSubtitle: document.getElementById('modal-service-subtitle'),
    formQuote: document.getElementById('form-quote'),
    clientName: document.getElementById('client-name'),
    clientAddress: document.getElementById('client-address'),
    clientBairro: document.getElementById('client-bairro'),
    clientNotes: document.getElementById('client-notes')
};

// HELPERS
const getCategoryById = (id) => categoriesData.find(c => c.id === id);
const getServiceById = (id) => servicesData.find(s => s.id === id);

// INICIALIZAÇÃO
function init() {
    renderCategories();
    setupEventListeners();
    setupCarouselsDrag();
}

// EVENT LISTENERS
function setupEventListeners() {
    DOM.btnCloseList.addEventListener('click', closeToCategories);
    DOM.btnCloseDetail.addEventListener('click', closeToCategories);
    DOM.searchInput.addEventListener('input', handleSearch);

    // Modal Events
    DOM.btnOpenForm.addEventListener('click', openModalForm);
    DOM.btnCloseModal.addEventListener('click', closeModalForm);
    DOM.formQuote.addEventListener('submit', handleFormSubmit);

    // Fechar sugestões ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            DOM.suggestionsBox.style.display = 'none';
        }
    });
}

// ARRASTE NOS CARROSSEIS
function setupCarouselsDrag() {
    const sliders = document.querySelectorAll('.carousel-container');
    if (!sliders.length) return;

    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active-drag');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active-drag');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active-drag');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

// RENDERIZAR CATEGORIAS
function renderCategories() {
    DOM.categoriesGrid.innerHTML = '';
    categoriesData.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'card-category';
        div.onclick = () => openCategory(cat.id);
        div.innerHTML = `
            <div class="icon">${cat.icon}</div>
            <div class="cat-name">${cat.name}</div>
        `;
        DOM.categoriesGrid.appendChild(div);
    });
}

// TROCA DE TELAS
function showView(viewId) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    
    DOM.searchInput.value = '';
    DOM.suggestionsBox.style.display = 'none';
}

function closeToCategories() {
    currentCategoryId = null;
    activeService = null;
    showView('view-categories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// NAVEGAÇÃO DE CATEGORIAS
function openCategory(categoryId) {
    currentCategoryId = categoryId;
    const category = getCategoryById(categoryId);
    
    if (!category) return;

    DOM.listCategoryTitle.textContent = category.name;
    
    const filteredServices = servicesData.filter(s => s.categoryId === categoryId);
    
    DOM.servicesUl.innerHTML = '';
    filteredServices.forEach(srv => {
        const li = document.createElement('li');
        li.className = 'service-item';
        li.onclick = () => openService(srv.id);
        li.innerHTML = `
            <span>${srv.title}</span>
            <span class="arrow">›</span>
        `;
        DOM.servicesUl.appendChild(li);
    });

    showView('view-service-list');
}

// ABRIR DETALHE DO SERVIÇO
function openService(serviceId) {
    const service = getServiceById(serviceId);
    if (!service) return;

    activeService = service;
    const category = getCategoryById(service.categoryId);

    DOM.detailCategory.textContent = category ? category.name : '';
    DOM.detailTitle.textContent = service.title;
    DOM.detailDescription.textContent = service.desc;

    showView('view-service-detail');
}

// LÓGICA DO MODAL DE ORÇAMENTO
function openModalForm() {
    if (!activeService) return;
    const category = getCategoryById(activeService.categoryId);
    
    DOM.modalServiceSubtitle.textContent = `${activeService.title} (${category ? category.name : ''})`;
    DOM.modalQuote.classList.add('active');
}

function closeModalForm() {
    DOM.modalQuote.classList.remove('active');
}

// MONTAGEM DA MENSAGEM DO WHATSAPP
function handleFormSubmit(e) {
    e.preventDefault();

    if (!activeService) return;
    const category = getCategoryById(activeService.categoryId);

    const name = DOM.clientName.value.trim();
    const address = DOM.clientAddress.value.trim();
    const bairro = DOM.clientBairro.value.trim();
    const notes = DOM.clientNotes.value.trim();

    // Formatação da mensagem em Markdown do WhatsApp
    let message = `*NOVA SOLICITAÇÃO DE ORÇAMENTO* 🛠️\n\n`;
    message += `*Serviço:* ${activeService.title}\n`;
    message += `*Categoria:* ${category ? category.name : '-'}\n\n`;
    message += `-----------------------------------\n`;
    message += `👤 *Nome:* ${name}\n`;
    message += `📍 *Endereço:* ${address}\n`;
    message += `🏘️ *Bairro:* ${bairro}\n`;
    
    if (notes) {
        message += `📝 *Observações:* ${notes}\n`;
    }
    
    message += `-----------------------------------`;

    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre o WhatsApp e fecha o modal
    window.open(whatsappUrl, '_blank');
    closeModalForm();
    DOM.formQuote.reset();
}

// PESQUISA
function handleSearch(e) {
    const rawQuery = e.target.value.toLowerCase().trim();
    DOM.suggestionsBox.innerHTML = '';

    if (rawQuery.length < CONFIG.minSearchLength) {
        DOM.suggestionsBox.style.display = 'none';
        return;
    }

    const query = rawQuery.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const matches = servicesData.filter(service => {
        const category = getCategoryById(service.categoryId);
        const categoryName = category ? category.name.toLowerCase() : '';
        
        const titleMatch = service.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query);
        const descMatch = service.desc.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query);
        const categoryMatch = categoryName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query);
        const keywordMatch = service.keywords && service.keywords.some(k => k.toLowerCase().includes(query));

        return titleMatch || descMatch || categoryMatch || keywordMatch;
    });

    if (matches.length > 0) {
        matches.forEach(match => {
            const category = getCategoryById(match.categoryId);
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.innerHTML = `
                <div class="suggestion-title">${match.title}</div>
                <div class="suggestion-meta">${category ? category.name : ''}</div>
            `;
            
            div.onclick = () => {
                DOM.suggestionsBox.style.display = 'none';
                DOM.searchInput.value = '';
                currentCategoryId = match.categoryId;
                openService(match.id);
            };
            
            DOM.suggestionsBox.appendChild(div);
        });
        DOM.suggestionsBox.style.display = 'block';
    } else {
        DOM.suggestionsBox.style.display = 'block';
        DOM.suggestionsBox.innerHTML = '<div class="suggestion-item" style="color: var(--text-muted)">Nenhum serviço encontrado.</div>';
    }
}

// INICIALIZAR APLICAÇÃO
init();
