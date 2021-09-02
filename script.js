const searchBook = () => {
    const searchFld = document.getElementById("searchFld");
    const searchText = searchFld.value;
    // console.log(searchText);

    searchFld.value = "";
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayBooks(data));
};

const displayBooks = (books) => {
    const bookDocs = books.docs;

    document.getElementById("book-count").innerHTML = `<h1> Total Books: ${books.numFound} </h1>`;

    const displayBooks = document.getElementById("display-books");
    displayBooks.textContent = "";

    bookDocs.forEach((book) => {
        const div = document.createElement("div");
        div.classList.add("col-md-4");

        div.innerHTML = `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h2 class="card-title">${book.title}</h2>
          <h5 class="card-title text-danger mb-4 fst-italic">${book.author_name}</h5>
          <h6 class="card-title"><span class='fs-5 fw-bold'>First Publish Year:</span> ${book.first_publish_year}</h6>
          <h6 class="card-title"><span class='fs-5 fw-bold'>Publish Date:</span> ${book.publish_date}</h6>
          <h6 class="card-title"><span class='fs-5 fw-bold'>Publisher:</span> ${book.publisher}</h6>
        </div>
        </div>
        `;
        displayBooks.appendChild(div);
    });
};
