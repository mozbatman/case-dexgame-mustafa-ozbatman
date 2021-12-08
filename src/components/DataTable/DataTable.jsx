import styles from "./DataTable.module.scss";

const DataTable = ({datas, columns, onClickRow}) => {
    console.log({datas, columns})
  return (
    <div className={styles.dataTableContainer}>
      <table className={styles.dataTable}>
        <thead className={styles.dataTableTh}>
          <tr>
            {columns.map((df) => (
              <th>{df.displayName}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.dataTableTb}>
          {datas?.map((d) => (
            <tr onClick={() => {onClickRow(d)}}>
              {columns.map((col) => (
                <td>{col.format(d[col.name])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
