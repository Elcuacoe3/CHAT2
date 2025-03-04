const { createBot, createProvider, createFlow, addKeyword, EVENTS} = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
//const MongoAdapter = require('@bot-whatsapp/database/mongo')


const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'hello', 'hi', 'holi', 'oli'])
    .addAnswer('🙌 Hola, bienvenid@',{
        delay: 2500,
    })
    .addAnswer('¿Como puedo ayudarte?',{
        delay: 1500,
    })






    const flowServicios = addKeyword(['Servivios', 'Servicio', 'Servisios'])
    .addAnswer('Exelente tenemos los siguientes servicios',{
        delay: 2500,
    })
    .addAnswer('Team Building',{
        delay: 1500,
    })
    .addAnswer('Meeting Planners',{
        delay: 1500,
    })
    .addAnswer('Campamentos',{
        delay: 1500,
    })
    .addAnswer('Cual te interesa, para darte mas informes',{
        delay: 1500,
    })





   
    
    const flowTeamBuilding = addKeyword(['team building', 'trabajo en equipo', 'building', 'team'])
    .addAnswer('Muy bien tenemos los siguientes servicios de team building',{
        delay: 2500,
    })
    .addAnswer('Team Building Presencial',{
        delay: 1500,
    })
    .addAnswer('Team Building Virtual',{
        delay: 1500,
    })
    .addAnswer('Y Team Building Hibrido o Mixto',{
        delay: 1500,
    })
    .addAnswer('Cual te interesa, para darte mas detalles',{
        delay: 1500,
    })


    const flowTeamBuildingPresencial = addKeyword(['team building', 'trabajo en equipo', 'building', 'team'])
    .addAnswer('Muy bien tenemos los siguientes servicios de team building',{
        delay: 2500,
    })
    .addAnswer('https://yaxamx.com/team-building-C2-Presencial.html',{
        delay: 1500,
    })
    .addAnswer('En cul otro servicio estas interesado?',{
        delay: 1500,
    })


    const flowTeamBuildingVirtual = addKeyword(['team building virtual', 'virtual'])
    .addAnswer('Muy bien tenemos los siguientes servicios de team building',{
        delay: 2500,
    })
    .addAnswer('https://yaxamx.com/team-building-C2-Virtual.html',{
        delay: 1500,
    })
    .addAnswer('En cual otro servicio estas interesado?',{
        delay: 1500,
    })


    const flowTeamBuildingHibrido = addKeyword(['hibrido', 'mixto'])
    .addAnswer('Muy bien estos son los servicios de team building Hibrido o Mixto',{
        delay: 2500,
    })
    .addAnswer('https://yaxamx.com/team-building-C2-Hibrido.html',{
        delay: 1500,
    })
    .addAnswer('En cul otro servicio estas interesado?',{
        delay: 1500,
    })





    const flowMeetingPlanners = addKeyword(['eventos', 'meeting', 'planners', 'eventos corporativos', 'meeting planners'])
    .addAnswer('Super tenemos los siguientes servicios de Meeting Planners u Organizadores de Reuniones',{
        delay: 2500,
    })
    .addAnswer('Congresos, Exposiciones, Simposios, Conferencias, Grupos de trabajo, Asambleas, Seminarios, Conferencias, Reuniones corporativas, Eventos Temáticos, Reconocimientos, Aniversarios, Fiestas, Celebraciones',{
        delay: 1500,
    })
    .addAnswer('Cual Servicio te interesa, para darte mas informes',{
        delay: 1500,
    })





    const flowCampamentos = addKeyword(['camp', 'Campamentos', 'Campamento'])
    .addAnswer('Maravilloso tenemos los siguientes servicios para Campamentos',{
        delay: 2500,
    })
    .addAnswer('Campamentos Empresariales',{
        delay: 1500,
    })
    .addAnswer('Campamentos para Adultos',{
        delay: 1500,
    })
    .addAnswer('Campamentos para Familias',{
        delay: 1500,
    })
    .addAnswer('Campamentos para Menores',{
        delay: 1500,
    })




    const flowWelcome = addKeyword(EVENTS.WELCOME)
    .addAnswer('No entiendo tu pregusta, me puedes preguntar otra cosa ',{
        delay: 3500,
    })





const main = async () => {
    const adapterDB = new MockAdapter()
    //const adapterDB = new MongoAdapter({
     //   dbUri: process.env.MONGO_DB_URI,
    //    dbName:'YoutubeTest'
    //    }
    
    const adapterFlow = createFlow([flowPrincipal, flowWelcome, flowServicios, flowTeamBuilding, flowMeetingPlanners, flowCampamentos, flowTeamBuildingPresencial, flowTeamBuildingVirtual, flowTeamBuildingHibrido])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
