import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('mysql://root:root@localhost:3306/snail-url')

export default sequelize