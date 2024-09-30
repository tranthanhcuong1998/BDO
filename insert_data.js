import mongoose from 'mongoose';
import { EventModel } from './models/EventModel.js'; // Make sure to use the correct path for the schema file

// MongoDB connection URI
const URI = 'mongodb://localhost:27017/cuong_test'; // Replace with your actual MongoDB connection string

// Function to insert the sample data
const insertSampleData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('Connected to MongoDB');

    // Sample data with guest_list containing guest_id and name
    const sampleEvent = new EventModel({
      event_name: 'Tech Conference 2024',
      guest_list: [
        {
          guest_id: '66fac9c3babdbb3de40faa65', // This is the ObjectId for the guest
          name: 'John Doe',                    // Guest name
        },
        {
          guest_id: '66faca363f4cc53b40ab173c', // This is the ObjectId for the guest
          name: 'John Doe',                    // Guest name
        },
      ],
      Purpose: 'Discuss upcoming technologies',
      customer_host: 'Tech Corp',
      agenda_task: 'Introduce new features of AI',
      ga_task: 'Presentation setup',
      deadline: new Date('2024-12-31'),
      reference_material_information: 'Tech Conference 2024 brochure',
    });

    // Save the sample data to the database
    await sampleEvent.save();
    console.log('Sample event data inserted successfully!');

    // Close the connection
    mongoose.disconnect();
  } catch (err) {
    console.error('Error inserting data:', err);
  }
};

// Insert the sample data
insertSampleData();

