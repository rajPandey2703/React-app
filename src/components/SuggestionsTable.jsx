import React, { useState } from 'react';

const SuggestionsTable = ({ suggestions }) => {
  const [visible, setVisible] = useState(false);

  if (!Array.isArray(suggestions) || suggestions.length === 0) {
    return <p>No details available.</p>;
  }

  return (
    <div className="mt-6">
      <button
        onClick={() => setVisible(!visible)}
        className="btn btn-link" style={{ textDecoration: 'none' }}
      >
        {visible ? 'Hide' : 'Show Details'}
      </button>
      {visible && (
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b">Issues</th>
              <th className="px-4 py-2 text-left border-b">Probability</th>
              <th className="px-4 py-2 text-left border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            {suggestions.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{(item.probability * 100).toFixed(2)}%</td>
                <td className="px-4 py-2">
                  {item.details?.description || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SuggestionsTable;
