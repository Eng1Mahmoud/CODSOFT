import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    age: Number,
    twitter: String,
    linkedin: String,

},{ collection: 'Users' });
export default mongoose.model('User', UserSchema);