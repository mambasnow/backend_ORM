const {Model, Datatypes} = require('sequelize');
const sequelize = require('../Config/connection.js');

class Product extends Model {}

Product.init({
    id:{
        type: Datatypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    product_name:{
        type: Datatypes.STRING,
        allowNull: false,
        
    },
    price:{
        type: Datatypes.DECIMAL,
        allowNull: false,
        validate:{
            isDecimal: true
        }
    },
    stock:{
        type: Datatypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate:{
            isNumeric: true
        }  
    },
    category_id: {
        type: Datatypes.INTEGER,
        references:{
            model: "category",
            key: "id"
        }
    },
},
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
 })   

module.exports = Product;