const fishData = [
    {
      name: "Bluefin Tuna",
      status: "Endangered",
      reason: "Massively overfished for sushi and sashimi. Slow-growing and late to reproduce.",
      alternative: "Skipjack Tuna",
      recipe: "Spicy Skipjack Tuna Bowl",
      image: "https://www.fishfiles.com.au/-/media/fishfiles/images/preparing-seafood/110830_erd_tuna__0317_sm.ashx?la=en&hash=E8E44A9B8FF414F47E4F62C07D0ADB9E9788AC3F"
    },
    {
      name: "Chilean Sea Bass",
      status: "Vulnerable",
      reason: "High demand and historically unsustainable fishing practices.",
      alternative: "Pacific Cod",
      recipe: "Baked Pacific Cod with Lemon-Herb Crust",
      image: "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt0325fd114e64a10d/664cbe6fb0f62d03145dd25a/chilean-sea-bass-swimming.jpg?q=70&width=3840&auto=webp"
    },
    {
      name: "Atlantic Cod",
      status: "Vulnerable",
      reason: "Historically heavily overfished, some populations are still recovering.",
      alternative: "Haddock",
      recipe: "Pan-Seared Haddock with Tomato and Olive Relish",
      image: "https://www.fishbase.se/images/species/Gamor_u3.jpg"
    },
    {
      name: "Orange Roughy",
      status: "Overfished",
      reason: "Very slow-growing and long-lived, making them vulnerable to overfishing.",
      alternative: "Tilapia",
      recipe: "Lemon-Garlic Baked Tilapia",
      image: "https://www.worldlifeexpectancy.com//images/a/w/b/hoplostethus-atlanticus/hoplostethus-atlanticus.webp"
    },
    {
      name: "Sharks",
      status: "Vulnerable to Critically Endangered",
      reason: "Overfishing for fins and meat, slow reproductive rates.",
      alternative: "Mahi-Mahi",
      recipe: "Grilled Mahi-Mahi with Mango Salsa",
      image: "https://en-media.thebetterindia.com/uploads/2019/02/marine.jpg"
    },
    {
      name: "Atlantic Halibut",
      status: "Vulnerable",
      reason: "Historically overfished, some fisheries are now better managed but still sensitive.",
      alternative: "Flounder or Sole",
      recipe: "Pan-Fried Flounder with Brown Butter Sauce",
      image: "https://www.seafoodwatch.org/globalassets/sfw-data-blocks/species/halibut/atlantic-flounder.png?width=274&height=189&format=webp&quality=60"
    },
    {
      name: "Grouper",
      status: "Varies by species",
      reason: "Susceptible to overfishing due to schooling behavior and slow growth.",
      alternative: "Snapper",
      recipe: "Baked Snapper with Mediterranean Vegetables",
      image: "https://safmc.net/wp-content/uploads/2022/04/goliath.jpg"
    },
    {
      name: "Swordfish",
      status: "Varies by region",
      reason: "Historically overfished due to high demand.",
      alternative: "Albacore Tuna",
      recipe: "Grilled Albacore Tuna Steaks with Lemon-Dill Sauce",
      image: "https://www.seafoodwatch.org/globalassets/sfw-data-blocks/species/swordfish/swordfish.png"
    },
    {
      name: "Atlantic Salmon",
      status: "Environmental concerns",
      reason: "Concerns with environmental impact depending on farming methods (e.g., disease, pollution).",
      alternative: "Wild-Caught Alaskan Salmon",
      recipe: "Roasted Wild-Caught Alaskan Salmon with Asparagus",
      image: "https://cdn.prod.website-files.com/65c3f44f93dc929503781a29/66855f025e3f958b8ed42c75_Atlantic-Salmon.jpeg"
    },
    {
      name: "Shrimp (some farmed)",
      status: "Environmental concerns",
      reason: "Concerns with habitat destruction and unsustainable farming practices in some regions.",
      alternative: "Pink Shrimp",
      recipe: "Garlic Butter Pink Shrimp Scampi with Linguine",
      image: "https://i0.wp.com/seaturtles.org/wp-content/uploads/2019/11/Shrimp-page-1.jpg?w=1500&ssl=1"
    }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("searchBox");
    const searchResults = document.getElementById("searchResults");
  
    searchBox.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim();
  
      if (query === "") {
        searchResults.innerHTML = "";
        return;
      }
  
      const filtered = fishData.filter(fish =>
        fish.name.toLowerCase().includes(query)
      );
  
      displayResults(filtered);
    });
  
    function displayResults(results) {
        if (results.length === 0) {
          searchResults.innerHTML = "<p>No matches found.</p>";
          return;
        }
      
        searchResults.innerHTML = results.map(fish => `
          <div class="result-item">
            <img src="${fish.image}" alt="${fish.name}" class="fish-image">
            <div class="result-info">
              <h3>${fish.name}</h3>
              <p><strong>Status:</strong> ${fish.status}</p>
              <a href="alternatives.html?fish=${encodeURIComponent(fish.name)}" class="alt-btn">View Alternatives</a>
            </div>
          </div>
        `).join('');
      }
  });