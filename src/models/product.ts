import mongoose, { Schema, Document } from "mongoose";



export interface ProductInterface extends Document {
    title: string;
    about: string;

  }
  
  const Product: Schema = new Schema({
    title: { type: String, required: true },
    about: { type: String },

  });
  
  const Prod = mongoose.model<ProductInterface>("Test",  Product);
  export default Prod;