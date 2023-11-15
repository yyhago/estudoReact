import PropTypes from "prop-types";

export default function Item({marca, ano_lancamento}) {
  return (
    <>
     {marca} - {ano_lancamento}
    </>
  );
}


Item.propTypes = {
    marca:PropTypes.string,
}
