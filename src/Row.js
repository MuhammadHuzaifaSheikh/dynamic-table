import { useState } from 'react';

export default function Row({ item }) {
  const [expand, setExpand] = useState(false);
  return (
    <>
      {item.map((tr, index) => {
        let { id, runId, runName, status, jobId, createDate } = tr;
        return (
          <tr
            onClick={index === 0 ? () => setExpand(!expand) : null}
            style={
              index === 0 || !expand
                ? { cursor: 'pointer' }
                : { display: 'none' }
            }
            className={index === 0 ? 'bg-dark text-white' : 'text-center'}
          >
            <td>{id}</td>
            <td>{runId}</td>
            <td>{runName}</td>
            <td>{jobId}</td>
            <td>{status}</td>
            <td>{createDate}</td>
          </tr>
        );
      })}
    </>
  );
}
