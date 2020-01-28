function tratarErroELancar(erro){
    // throw new Error('ERRO!!!')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } 
    catch (e){
        tratarErroELancar(e)
    }
    finally{
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' } // colocou-se nome e não name de forma a cair no try and catch
imprimirNomeGritado(obj)