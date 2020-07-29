const aws = require('aws-sdk')
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');

dotenv.config();

const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    
        cb(null, true); 
    } else {

        cb(null, false);
    }
};

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'fnbrhub',
        acl: 'public-read',
        key: (request, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname);
            console.log(file);
        }
    })
});

module.exports = upload;