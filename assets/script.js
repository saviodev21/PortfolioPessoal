const themeToggle = document.getElementById("theme-toggle");
const body = document.querySelector("body");

themeToggle.addEventListener("click", function() {
	body.classList.toggle("light");
});

//projetos

const projects = [
	{
	  name: "CineMotion",
	  description: "Aplicação WEB em Java, HTML5 e CSS3",
	  image: "https://via.placeholder.com/150x150"
	},
	{
	  name: "Projeto 2",
	  description: "Descrição do Projeto 2",
	  image: "https://via.placeholder.com/150x150"
	},
	{
	  name: "Projeto 3",
	  description: "Descrição do Projeto 3",
	  image: "https://via.placeholder.com/150x150"
	}
  ];
  
  const projectTableBody = document.querySelector("#projectTableBody");
  
  projects.forEach(project => {
	const tr = document.createElement("tr");
  
	const tdName = document.createElement("td");
	tdName.textContent = project.name;
  
	const tdDescription = document.createElement("td");
	tdDescription.textContent = project.description;
  
	const tdImage = document.createElement("td");
	const img = document.createElement("img");
	img.src = project.image;
	img.alt = project.name;
	img.width = 150;
	img.height = 150;
	tdImage.appendChild(img);
  
	tr.appendChild(tdName);
	tr.appendChild(tdDescription);
	tr.appendChild(tdImage);
  
	projectTableBody.appendChild(tr);
  });
  