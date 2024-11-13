const UserAccessModel = require("./criando-model");

async function execute() {

    /** SELECT * FROM store.user_acess */
    // let all = await UserAccessModel.findAll();
    // console.log(all);

    /** SELECT id, email FROM store.user_acess */
    // let resultado = await UserAccessModel.findAll({
    //     attributes: ['id', 'email']
    // });
    // console.log(resultado);

    /** SELECT email, createdAt FROM store.user_acess WHERE id = 2 */
    // let resultado = await UserAccessModel.findAll({
    //     where: {
    //         id: 2
    //     }, 
    //     attributes: ['email', "createdAt"],
    // });
    // console.log(resultado);

    /** SELECT * FROM store.user_acess WHERE email = "jaime@mail.com" */
    // let resultado = await UserAccessModel.findOne({
    //     where: {
    //         email: "jaime@mail.com"
    //     }
    // });
    // console.log(resultado);

    /** SELECT id, email FROM store.user_acess WHERE id = 3 */
    // let resultado = await UserAccessModel.findByPk(3, {
    //     attributes: ['id', 'email']
    // });
    // console.log(resultado);
}

execute();