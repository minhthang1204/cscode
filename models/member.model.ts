import { Document, model, Schema, models } from "mongoose";
import { IForm } from "../interfaces/member.interface";

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  stateOfOrigin: {
    type: String,
    required: true,
  },
  stateOfResidence: {
    type: String,
    required: true,
  },
  lgaOfOrigin: {
    type: String,
    required: true,
  },
  lgaOfResidence: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

export default models.Member || model<IForm & Document>('Member', memberSchema); 
