import ProfilePage from '../profile/profile'
import {withRouter} from "../../../utils/Router";
import {connect} from "../../../utils/store";

export default withRouter(connect((state: any) => ({
    user: state.user.profile
}), ProfilePage));
