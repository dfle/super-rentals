import Component from '@glimmer/component';

export default class RentalsFilter extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) =>
        [
          rental.title,
          rental.city,
          rental.category,
          rental.type,
          rental.description,
        ]
          .map((s) => s.toLowerCase())
          .join(' ')
          .includes(query.toLowerCase()),
      );
    }

    return rentals;
  }
}
