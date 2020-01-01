class Course {
    constructor(id, title, price, imageUrl, videoIntro, description, owner, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.videoIntro = videoIntro;
        this.description = description;
        this.owner = owner;
        this.category = category
    }
}

export default Course