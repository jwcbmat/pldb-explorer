import React from "react";

const Table = ({ data }) => {
  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  const tableData = Object.entries(data).map(([key, value]) => {
    return (
      <tr key={key}>
        <td>{value.title}</td>
        <td>{value.appeared}</td>
        <td>{value.type}</td>
        <td>{value.creators && value.creators.join(", ")}</td>
        <td>{value.country && value.country.join(", ")}</td>
        <td>{value.originCommunity && value.originCommunity.join(", ")}</td>
        <td>
          {value.wikipedia && (
            <a
              href={value.wikipedia.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
          )}
        </td>
        <td>{value.fileType}</td>
        <td>{value.isOpenSource ? "Yes" : "No"}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Appeared</th>
          <th>Type</th>
          <th>Creators</th>
          <th>Country</th>
          <th>Origin Community</th>
          <th>Wikipedia</th>
          <th>File Type</th>
          <th>Is Open Source</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};

export default Table;
