const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/Underground2', {
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true
});