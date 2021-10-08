const { leerinput, inquirerMenu, pausa } = require("./helpers/inquirier")

const main = async ()=>{
    let opt;
    do {
        opt = await inquirerMenu();

        await pausa();
    } while (opt !==0);
}

main();