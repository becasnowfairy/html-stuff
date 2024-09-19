async function fetchData() {
    const listaPaisesElement = document.getElementById("country");
    const url = "https://restcountries.com/v3.1/all";
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
  
      // Ordenar países alfabeticamente
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  
      //Pagination
      let currentPage = 1;
      const itemsPerPage = 10;
      const totalPages = Math.ceil(data.length / itemsPerPage);
  
      // Display Table
      function displayTable(data, currentPage) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = data.slice(startIndex, endIndex);
  
        // Table structure
        const table = document.createElement("table");
        table.style.width = "100%"; // Set table width to 100% of parent element
        table.style.borderCollapse = "collapse"; // Set border collapse to make table fit page
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
  
        //Table header row
        const headerRow = document.createElement("tr");
        const flagHeaderCell = document.createElement("th");
        flagHeaderCell.textContent = "Flag";
        flagHeaderCell.style.width = "20%"; // Set width of flag column to 20%
        flagHeaderCell.style.padding = "2px"; // Reduzido para 2px
        headerRow.appendChild(flagHeaderCell);
  
        const nameHeaderCell = document.createElement("th");
        nameHeaderCell.textContent = "Name";
        nameHeaderCell.style.width = "80%"; // Set width of name column to 80%
        nameHeaderCell.style.padding = "2px"; // Reduzido para 2px
        headerRow.appendChild(nameHeaderCell);
  
        thead.appendChild(headerRow);
        table.appendChild(thead);
  
        // Table rows with flags and country names
        slicedData.forEach((country) => {
          const row = document.createElement("tr");
          const flagCell = document.createElement("td");
          const nameCell = document.createElement("td");
  
          // Flag URL using country code
          const flagURL = `https://flagcdn.com/48x36/${country.cca2.toLowerCase()}.png`;
          const flagImg = document.createElement("img");
          flagImg.src = flagURL;
          flagCell.appendChild(flagImg);
          flagCell.style.padding = "2px"; // Reduzido para 2px
          flagCell.style.width = "20%"; // Set width of flag cell to 20%
  
          console.log(country.cca2);
  
          // Set content and append elements
          nameCell.textContent = country.name.common;
          nameCell.style.padding = "2px"; // Reduzido para 2px
          nameCell.style.width = "80%"; // Set width of name cell to 80%
          row.appendChild(flagCell);
          row.appendChild(nameCell);
          tbody.appendChild(row);
        });
  
        table.appendChild(tbody);
  
        // Clear previous table and append new one
        listaPaisesElement.innerHTML = "";
        listaPaisesElement.appendChild(table);
  
        // Pagination buttons
        const paginationElement = document.createElement("div");
        paginationElement.className = "pagination";
  
        // Add CSS styles to make buttons smaller
        paginationElement.style.fontSize = "12px"; // Reduce font size
        paginationElement.style.padding = "2px 4px"; // Reduce padding
        paginationElement.style.margin = "2px"; // Reduce margin
  
        // Previous button
        const prevButton = document.createElement("button");
        prevButton.className = "btn";
        prevButton.textContent = "Anterior";
        prevButton.disabled = currentPage === 1;
        prevButton.onclick = () => displayTable(data, currentPage - 1);
        paginationElement.appendChild(prevButton);
  
        // Page number buttons
        for (let i = 1; i <= totalPages; i++) {
          const pageNumberButton = document.createElement("button");
          pageNumberButton.className = "btn";
          pageNumberButton.textContent = i;
          pageNumberButton.onclick = () => displayTable(data, i);
          paginationElement.appendChild(pageNumberButton);
        }
  
        // Next button
        const nextButton = document.createElement("button");
        nextButton.className = "btn";
        nextButton.textContent = "Seguinte";
        nextButton.disabled = currentPage === totalPages;
        nextButton.onclick = () => displayTable(data, currentPage + 1);
        paginationElement.appendChild(nextButton);
  
        // Append pagination buttons to listaPaisesElement
        listaPaisesElement.appendChild(paginationElement);
  
        // Button selected with a diferent class
        const buttons = listaPaisesElement.querySelectorAll(".btn");
        buttons[currentPage - 1].classList.add("active");
  
        // Add CSS styles to center the content
        listaPaisesElement.style.display = 'flex';
        listaPaisesElement.style.justifyContent = 'center';
        listaPaisesElement.style.alignItems = 'center';
        listaPaisesElement.style.flexDirection = 'column';
      }
  
      // Call displayTable function
      displayTable(data, currentPage);
    } catch (error) {
      console.error("Error:", error);
      handleErrorMessage(error);
    }
  }
  
  function handleErrorMessage(error) {
    const listaPaisesElement = document.getElementById("listaPaises");
    let errorMessage = `
      <div class="alert alert-danger" role="alert">
       ${error.message}
      </div>`;
    listaPaisesElement.innerHTML = errorMessage;
  }