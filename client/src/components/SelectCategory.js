import React from 'react';
import M from 'materialize-css';

export default function SelectCategory({ value, onSelectFilter, items }) {
  const handleSelectChange = (event) => {
    onSelectFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  items = ['Lazer', 'Mercado', 'Receita', 'Saúde', 'Transporte'];
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div style={{ padding: '10px' }}>
      <form onSubmit={handleSubmit}>
        <select
          className="browser-default"
          value={value}
          onSelectFilter={handleSelectChange}
          style={{ fontSize: '1.2rem' }}
        >
          <option value="" disabled>
            Categorias
          </option>
          {items.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
