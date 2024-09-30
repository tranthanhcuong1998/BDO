import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name_en: {
      type: String,
      required: true,
    },
    name_ja: {
        type: String,
        required: false,
    },
    job_title: {
        type: String,
        required: false,
    },
    company: {
      type: String,
      required: false,
    },
    company_address: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);


export const VisitorModel = mongoose.model('Visitor', schema);