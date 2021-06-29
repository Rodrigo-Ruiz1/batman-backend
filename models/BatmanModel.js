const db = require('./conn');

class BatmanModel {
    constructor(id, reviews) {
        this.id = id;
        this.reviews = reviews;
    }

    static async getAllMedia() {
        try {
            const response = await db.any(
                `SELECT * FROM media;`
            )
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async getBySlug(slug) {
        try {
            const response = await db.one(
                `SELECT * FROM media WHERE slug = '${slug}';`
            )
            return response;
        } catch (error) {
            console.error('ERROR: ', error)
            return error;
        }
    }

    static async getReviewById(movieId) {
        try {
            const response = await db.any (
                `SELECT * FROM reviews
                INNER JOIN media
                ON reviews.name_id = media.id
                WHERE media.id = ${movieId};`
            )
            return response
        } catch (error) {
            console.error('ERROR: ', error)
            return error;
        }
    }
}

module.exports = BatmanModel;