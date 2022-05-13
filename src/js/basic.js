export default class Team {
  constructor() {
    this.char = [
      {
        name: 'Зомби', type: 'Zombie', health: 50, level: 1, attack: 40, defence: 10,
      },
      {
        name: 'Маг', type: 'Magican', health: 50, level: 1, attack: 40, defence: 10,
      },
      {
        name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
      },
    ];
  }
}

const command = new Team().char;

const range = {
  from: 0,
  to: command.length - 1,
};

range[Symbol.iterator] = function () {
  let current = this.from;
  const last = this.to;

  return {
    next() {
      if (current <= last) {
        const Person = command[current];
        current += 1;
        return {
          done: false,
          value: Person,
        };
      }

      return {
        done: true,
      };
    },
  };
};

for (const num of range) {
  console.log(num);
}
