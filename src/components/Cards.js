import Card from "./Card";
import PropTypes from 'prop-types';

export default function Cards({ data, cardDelete }) {
    return data.map((e) => (
      <Card id={e.id} key={e.id} data={e.content} cardDelete={cardDelete} />
    ));
}

Cards.protoTypes = {
  data: PropTypes.array.isRequired,
  cardDelete: PropTypes.func.isRequired,
}