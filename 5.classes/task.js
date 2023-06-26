class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	set state(newState) {
		if (newState <= 0) {
			this._state = 0
		}
		if (newState >= 100) {
			this._state = 100
		} else {
			this._state = newState
		}
		return this._state;
	}

	get state() {
		return this._state;
	}

	fix() {
		this.state = this.state * 1.5
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine"
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book"
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel"
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic"
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective"
	}
}

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let findBook = null;
		for (let book of this.books) {
			if (book[type] === value) {
				findBook = book;
			}
		}
		return findBook;
	}

	giveBookByName(bookName) {
		let reqBook = this.findBookBy("name", bookName);
		if (reqBook !== null) {
			return this.books.splice(this.books.indexOf(reqBook), 1) && reqBook;
		}
		return null;
	}
}