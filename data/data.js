const data = [
  {
    id: 1,
    descricao: "Nilton"
  }
];
module.exports = {
  findByID: function findByID(id) {
    const filter = data.filter(item => {
      return item.id === id;
    });
    if (filter.length) {
      return filter[0];
    }
  },
  findAll: function findAll() {
    return data;
  },
  add: function add(item) {
    data.push(item);
  },
  generateID: function id() {
    return Math.floor(Math.random() * 100 + 1);
  }
};
