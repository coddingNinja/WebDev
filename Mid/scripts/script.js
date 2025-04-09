document.addEventListener('DOMContentLoaded', () => {
    const existingCategory = document.querySelector('.category');
    if (existingCategory) {
        const newCategory = existingCategory.cloneNode(true);
        const anchor = newCategory.querySelector('a.Words');
        anchor.textContent = 'Assignment';
        anchor.setAttribute('href', '#');

        const dropdownMenu = newCategory.querySelector('.Sales_dropdown_menu');
        dropdownMenu.innerHTML = `
            <div class="slaes_dropdown_mennu_divs new-dropdown">
                <h3>Assignments Hub</h3>
                <hr style="border: none; height: 1px; background-color: rgb(65, 64, 64); margin: 10px 0;">
                <div class="container d-flex  gap-4">
                    <div class="task">
                        <a href="/Assignments/Assignment_1/index.html"><b>Assignment 1  CV</b></a>
                        <p>A simple HTML resume showcasing personal and academic info.</p>
                    </div>
                    <div class="task">
                        <a href="/Assignments/Assignment_2/index.html"><b>Assignment 2 Landing Page</b></a>
                        <p>Responsive landing page built using basic HTML and CSS.</p>
                    </div>
                    <div class="task">
                        <a href="/LabTasks/LabTask1/index.html"><b>Lab Task 1 Bootstrap Implementation</b></a>
                        <p>Implemented responsive layout using Bootstrap grid and components.</p>
                    </div>
                    <div class="task">
                        <a href="/LabTasks/LabTask_2/index.html"><b>Lab Task 2 Form Validation</b></a>
                        <p>Client-side JavaScript validation for user-friendly forms.</p>
                    </div>
                </div>
            </div>
        `;

       
        dropdownMenu.style.display = 'none';
        
        anchor.addEventListener('mouseenter', () => {
            dropdownMenu.style.display = 'none'; 
        });
        anchor.addEventListener('mouseleave', () => {
            dropdownMenu.style.display = 'none'; 
        });
       
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

           
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none'; 
            } else {
                dropdownMenu.style.display = 'block'; 
            }
        });


        const container = document.querySelector('.nav_categories');
        container.appendChild(newCategory);
    }
});
