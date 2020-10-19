import mongoose, { Schema, Document } from "mongoose";



export interface ProductInterface extends Document {
    title: string;
    about: string;
    price: number;
    quantity: number;

  }
  
  const Product: Schema = new Schema({
    title: { type: String, required: true },
    about: { type: String },
    price: {type: Number, required: true},
    quantity: {type: Number, required: true}

  });
  
  const Prod = mongoose.model<ProductInterface>("Product",  Product);
  export default Prod;