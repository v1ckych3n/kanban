// const renderItems = (data) => {
// 	const quoteElement = document.getElementById('motivational-quotes');

// 	if (data.length > 0) {
// 		const generateQuote = Math.floor(Math.random() * data.length);
// 		const selectedQuote = data[randomIndex];

// 		let conditionalClass = '';
// 		if (!item.quote) {
// 			conditionalClass ='faded'
// 		}

// 		quoteElement.innerHTML = 
// 			`
// 				<li class="${conditionalClass}">
// 					<p class="motivational-buddy_quotes">${item.quote}</p>
// 				</li>
// 			`;
// 	}
// };


// MICHAEL'S VERSION //
const renderItems = (data) => {
	// The `ul` where the items will be inserted
	const quoteElement = document.getElementById('motivational-quotes');

	// Loop through each item in the data array
	data.forEach((item) => {
		let conditionalClass = '' // Set an empty class variable

		if (!item.alsoWasWriter) { // Conditional if this is `false` (“not true”)
			conditionalClass = 'faded' // Update the variable
		}

		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		let listItem =
        `
            <li class="${conditionalClass}>
                <p class="motivational-buddy_quotes">${item.quote}</p>
            </li>
        `

		dataList.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!
	})
}


fetch('script/motivational-buddy.json')
    .then(response => response.json())
    .then(data => {
        renderItems(data);
        console.log(data);
    });