'use strict';
const {Model} = require('sequelize');
const sequelize = require('../database/database')
const {DataTypes} = require('sequelize')

class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
}

Person.init({
    firstName: DataTypes.STRING,
    secondName: DataTypes.STRING,
    firstLastName: DataTypes.STRING,
    secondLastName: DataTypes.STRING,
    email: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Person',
});


module.exports = Person;