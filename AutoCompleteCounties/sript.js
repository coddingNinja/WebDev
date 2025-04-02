document.addEventListener("DOMContentLoaded", function () {
    const Input = document.getElementById("Search-country");
    const Counties = document.getElementById("autocomplete-list");
    const url = "https://usmanlive.com/wp-json/api/countries?q=";

    Input.addEventListener("input", function () {
        let value = Input.value.trim();
        Counties.innerHTML = ""; 

        if (value === "") {
            Counties.style.display = "none";
            return;
        }

        fetch(url + value)
            .then(res => res.json())
            .then(data => {
                Counties.innerHTML = ""; 

                if (data.length > 0) {
                    data.forEach(element => {
                        let div = document.createElement("div");
                        div.classList.add("Fetch-list-item");
                        div.textContent = element; 
                        Counties.appendChild(div);
                    });
                    Counties.style.display = "block";
                } else {
                    Counties.style.display = "none";
                }
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
    });
});
