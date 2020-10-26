/**
 * ------------------------------------------------------
 * PUERTO
 * ------------------------------------------------------
 */
process.env.PORT = process.env.PORT || String(3333);

/**
 * ------------------------------------------------------
 * ENTORNO
 * ------------------------------------------------------
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * ------------------------------------------------------
 * BASE DE DATOS
 * ------------------------------------------------------
 */
process.env.DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/gameflags'

/**
 * ------------------------------------------------------
 * VENCIMIENTO DEL TOKEN
 * ------------------------------------------------------
 * 60 SEGUNDOS
 * 60 MINUTOS
 * 24 HORAS
 * 30 DÍAS
 */
process.env.EXP_TOKEN = process.env.EXP_TOKEN || String(60 * 60 * 24 * 30);

/**
 * ------------------------------------------------------
 * SEED TOKEN
 * ------------------------------------------------------
 */
process.env.SEED_TOKEN = process.env.SEED_TOKEN || 'este-es-el-seed-desarrollo';

/**
 * ------------------------------------------------------
 * CLOUDINARY VARIABLES
 * ------------------------------------------------------
 */
process.env.CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'cloud_name';
process.env.CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || 'api_key';
process.env.CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || 'api_secret';


export default () => ({});