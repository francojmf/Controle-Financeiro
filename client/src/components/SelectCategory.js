import React from 'react';
import M from 'materialize-css';

export default function SelectCategory() {
  const categories = [
    'Categorias',
    'Lazer',
    'Mercado',
    'Receita',
    'Saúde',
    'Transporte',
  ];
  React.useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <form>
        <select className="browser-default" style={{ fontSize: '1.2rem' }}>
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
