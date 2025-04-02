document.addEventListener("DOMContentLoaded", function () {
    const Input = document.getElementById("Search-country");
    const Counties = document.getElementById("autocomplete-list");
    const url = "https://usmanlive.com/wp-json/api/countries?q=";
    const loder=document.getElementById("Loder");
    let Controller=new AbortController();

    Input.addEventListener("input", function () {
        let value = Input.value.trim();


        Controller.abort()
        Controller=new AbortController();

        if (value === "") {
            Counties.style.display = "none";
            loder.style.display="none";
            return;
        }
        loder.style.display="block";

        fetch(url + value, { signal: Controller.signal })
            .then(res => {
                return res.json();
            })
            .then(data => {
                Counties.innerHTML = ""; 

                if (data.length > 0) {
                    data.forEach(element => {
                        let div = document.createElement("div");
                        div.classList.add("Fetch-list-item");
                        div.textContent = element; 
                        Counties.appendChild(div);
                    });
                    loder.style.display="none";
                    Counties.style.display = "block";
                } else {
                    Counties.innerHTML = ""; 
                    Counties.style.display = "none";
                }
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
    });
});
