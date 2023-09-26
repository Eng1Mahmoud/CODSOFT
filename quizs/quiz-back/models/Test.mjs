import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({
    testName: String,
    questions: [{
        question: String,   
        options: [String, String, String, String],
        correctAnswer: String,
    }],
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users' 
      }
},{ collection: 'Tests' });

export default mongoose.model('Test', TestSchema);
