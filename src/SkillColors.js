const colorShades = {
  10: '#4caf50',
  9: '#66bb6a',
  8: '#81c784',
  7: '#a5d6a7',
  6: '#c8e6c9',
  5: '#e8f5e9',
  4: '#f1f8e9',
  3: '#f9fbe7',
  2: '#fffde7',
  1: '#fff8e1',
  0: '#fff3e0',
};

const skillColors = {
  React: '#61dafb',
  JavaScript: '#f7df1e',
  HTML: '#f06529',
  CSS: '#2965f1',
  Node: '#68a063',
  SQL: '#d97d04',
  Python: '#306998',
  Git: '#f34f29',
};

const getColorShade = (skillLevel) => {
  return colorShades[skillLevel];
};

export { skillColors, getColorShade };
