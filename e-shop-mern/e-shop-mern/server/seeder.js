import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';

import users from './data/users.js';
import products from './data/products.js';

import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    await Product.insertMany(sampleProducts);
    console.log('Data imported !!!'.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`Data import operation error: ${err}`.red.inverse);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data deleted !!!'.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`Data delete operation error: ${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
