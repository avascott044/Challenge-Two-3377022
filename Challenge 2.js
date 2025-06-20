class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically to make sure suggestions are in order
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let result = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;
      let suggestions = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
        }
        if (suggestions.length === 3) break; // only need top 3
      }

      result.push(suggestions);
    }

    return result;
  }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";
const system = new SearchSuggestionSystem(products);
const suggestions = system.getSuggestions(searchWord);

console.log(suggestions);
