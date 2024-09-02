const options = {
  method: "GET",
  headers: { accept: "application/json", mode: "cors" },
};

setTimeout(() => {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"
  )
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.map((coin) => ({
        Image: coin.image,
        name: coin.name,
        symbol: coin.symbol,
        current_price: coin.current_price,
        price_change_percentage_24h: coin.price_change_percentage_24h,
        market_cap: coin.market_cap,
      }));

      const tbody = document.getElementById("tbody");

      data.forEach((coin) => {
        const row = document.createElement("tr");
        const formatedMarketCap = coin.market_cap.toLocaleString('en-US', { minimumFractionDigits: 0});
        const formatedCurrentPrice = coin.current_price.toLocaleString('en-US', { minimumFractionDigits: 2});
        row.innerHTML = `
        <td><img src="${coin.image}" width="40" height="40"></td>
        <td>${coin.name}</td>
        <td>${coin.symbol}</td>
        <td>$${formatedCurrentPrice}</td>
        <td>
    ${coin.price_change_percentage_24h > 0 ? 
      `<span style="color: green"><i class='bx bxs-up-arrow' style='color: green'></i> ${coin.price_change_percentage_24h} %</span>` 
      : 
      `<span style="color: red"><i class='bx bxs-down-arrow' style='color: red'></i> ${coin.price_change_percentage_24h} %</span>`}
  </td>
        <td>$${formatedMarketCap}</td>
      `;
       tbody.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
}, 500);
