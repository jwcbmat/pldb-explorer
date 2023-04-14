const fs = require("fs");

const data = fs.readFileSync("./data/pldb.json");
const jsonData = JSON.parse(data);

const getData = (req, res) => {
  res.json(jsonData);
};

const filterData = (req, res) => {
  const { type, country, isOpenSource } = req.query;

  const filteredData = [];
  for (const key in jsonData) {
    const item = jsonData[key];
    if (
      (!type || item.type === type) &&
      (!country || item.country.includes(country)) &&
      (!isOpenSource || item.isOpenSource === (isOpenSource === "true"))
    ) {
      filteredData.push(item);
    }
  }

  res.json(filteredData);
};

const getLanguage = (req, res) => {
  const { name } = req.params;

  const filteredData = [];
  for (const key in jsonData) {
    const lang = jsonData[key];
    if (lang.title.toLowerCase() === name.toLowerCase()) {
      filteredData.push(lang);
    }
  }

  if (filteredData.length === 0) {
    res.status(404).json({ error: "language not found" });
  } else {
    res.json(filteredData);
  }
};

const sortData = (req, res) => {
  const { sortBy, sortOrder } = req.query;

  if (!sortBy || !sortOrder) {
    res
      .status(400)
      .json({ error: "sortBy and sortOrder are required parameters" });
    return;
  }

  if (sortOrder !== "asc" && sortOrder !== "desc") {
    res.status(400).json({ error: "sortOrder must be 'asc' or 'desc'" });
    return;
  }

  let sortedData = [];
  for (const key in jsonData) {
    sortedData.push(jsonData[key]);
  }

  switch (sortBy) {
    case "type":
      sortedData.sort((a, b) => {
        return sortOrder === "asc"
          ? a.type.localeCompare(b.type)
          : b.type.localeCompare(a.type);
      });
      break;
    case "country":
      sortedData.sort((a, b) => {
        return sortOrder === "asc"
          ? a.country.join(",").localeCompare(b.country.join(","))
          : b.country.join(",").localeCompare(a.country.join(","));
      });
      break;
    default:
      res.status(400).json({ error: "Invalid sortBy parameter" });
      return;
  }

  res.json(sortedData);
};

module.exports = {
  getData,
  filterData,
  getLanguage,
  sortData,
};
