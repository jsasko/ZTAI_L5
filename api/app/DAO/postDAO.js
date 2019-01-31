import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';

const postSchema = new mongoose.Schema({
   title: {type: String},
   url: {type: String},
}, {
   collection: 'post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongoose.model('post', postSchema );

function query() {
     
    return PostModel.find({}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function get(id) {
    return PostModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new PostModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return PostModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    }).catch(error => {
        if ('ValidationError' === error.name) {
            error = error.errors[Object.keys(error.errors)[0]];
            throw applicationException.new(applicationException.BAD_REQUEST, error.message);
        }
        throw error;
    });
}


export default {
    query: query,
    get: get,
    model: PostModel,
    createNewOrUpdate: createNewOrUpdate
};
