import React from 'react';

export default function SelectPeriod({ value, onChange, periods }) {
  const handleChange = (event) => {
    onChange(event);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const monthsAbbreviation = [
    '',
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const formattedDates = periods.map((date) => {
    const [year, month] = date.split('-');

    return {
      abreviated: `${monthsAbbreviation[Number(month)]}/${year}`,
      date,
    };
  });
  return (
    <div style={{ padding: '10px' }}>
      <form onSubmit={handleSubmit}>
        <select
          className="browser-default"
          value={value}
          onChange={handleChange}
          style={{ fontSize: '0.9rem' }}
        >
          <option value="" disabled>
            Escolha o período
          </option>
          {formattedDates.map((period) => {
            const { abreviated } = period;
            const { date } = period;
            return (
              <option key={date} value={date}>
                {abreviated}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}
