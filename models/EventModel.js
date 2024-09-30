import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    event_name: {
      type: String,
      required: true,  
    },
    guest_list: [
        {
          guest_id: {
            type: String,  // guest_id as ObjectId 
            required: true
          },
          name: {
            type: String,         // name as String
            required: true
          }
        }
    ],
    Purpose: {
        type: String,
    },
    customer_host: {
        type: String,
    },
    agenda_task: {
      type: String,
    },
    ga_task: {
        type: String,
    },
    deadline: {
        type: Date,
    },
    reference_material_information: { // suppose this is a link to the reference
        type: String,
    }
  },
  { timestamps: true }
);


export const EventModel = mongoose.model('Event', schema);