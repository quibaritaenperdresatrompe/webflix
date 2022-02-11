import { Link } from "react-router-dom";

function About() {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et euismod
      tortor. Nam a tortor nibh. Aenean sit amet faucibus purus, vel accumsan
      tortor. Mauris tincidunt nunc lacinia massa malesuada mollis. Pellentesque
      auctor ultrices elit, id dapibus quam pretium vel. Sed ex erat,
      condimentum non ante in, ullamcorper malesuada dolor. Nam imperdiet at
      velit in vestibulum. In nec aliquam arcu. Sed posuere ultrices turpis id
      bibendum. Vivamus bibendum nec eros sodales viverra. Duis vitae bibendum
      nisl, a suscipit lectus.
      <br />
      Donec ac justo lectus. Praesent molestie iaculis laoreet. Cras egestas
      ligula sed mi commodo, sed efficitur eros sollicitudin. Pellentesque a
      tellus ut justo lacinia luctus at id enim. Sed pharetra enim sit amet
      sapien cursus faucibus eu sed mi. Sed feugiat tincidunt mi, nec lobortis
      dolor varius lacinia. Donec quis neque velit. Sed et vestibulum enim,
      vitae vestibulum ipsum. Etiam ut eros nec enim eleifend iaculis vel eu
      velit. Maecenas lectus ex, dictum vitae luctus sit amet, vulputate id
      tellus. Nullam nec sem vel lorem ornare cursus ac nec risus.
      <br />
      Written by <Link to="/users/bob">Bob Martin</Link>
    </p>
  );
}

export default About;
