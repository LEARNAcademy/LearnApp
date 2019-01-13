import { connect } from 'react-redux';
import { fetchAuthActionCreators } from './actions';

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

const mapDispatchToProps = fetchAuthActionCreators;

export function connectAuth(configMapStateToProps = mapStateToProps) {
  return connect(
    configMapStateToProps,
    mapDispatchToProps,
  );
}
